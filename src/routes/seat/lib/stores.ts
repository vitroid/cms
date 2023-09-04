import { get, writable } from 'svelte/store';
// browser内メモリー
import { localStorageWritable } from "@babichjacob/svelte-localstorage";

// export const userid    = writable(null);
export const yourtable  = writable(null);
export const yourseat   = writable(null);
export const nickname   = writable(null);

//表示中の机の座席情報のみ
export const table_info = writable(null);

//全座席の予約概況
export const hall_info = writable({});

//DBと交信した時刻(表示用)
export const stored_time = writable("");

const BASEURL = 'http://www.chem.okayama-u.ac.jp:8087';
// const BASEURL = 'http://localhost:8087';
// API token
export const token = localStorageWritable("token", "");

export const offline = writable(true)

export async function reserveSeat (table_id, seat) {

    yourtable.set(table_id)
    yourseat.set(seat)

    const body_ = JSON.stringify({
        nickname: get(nickname),
        token: get(token),
        table: get(yourtable),
        seat: get(yourseat),
    })

    const res = await fetch(BASEURL+'/guest/', {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
          },
        body: body_
    })

    res.json().then(result=>{
        // console.log("reserveSeat RESULT:"+result)
        const d = new Date();
        let text = d.toLocaleTimeString();
        stored_time.set("Stored "+text)
    })
    // return result
}


// export async function cancelSeat () {
export async function cancelSeat () {

    yourseat.set(0)
    yourtable.set(0)

    const body_ = JSON.stringify({
        nickname: get(nickname),
        token: get(token),
        table: get(yourtable),
        seat: get(yourseat),
    })

    // const res = await fetch(BASEURL+'/guest/', {
    const res = await fetch(BASEURL+'/guest/', {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
          },
        body: body_
    })

    res.json().then(result=>{
        // console.log("cancelSeat RESULT:"+result)
        const d = new Date();
        let text = d.toLocaleTimeString();
        stored_time.set("Stored "+text)
    })
}


export async function getTableInfo (table_id) {

    const body_ = JSON.stringify({
        token: get(token),
    })
    // console.log("API call getTableInfo")
    const res = await fetch(BASEURL+'/table/'+table_id, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
          },
        body: body_
    })

    res.json().then(result=>{
        table_info.set(JSON.parse(result))
    })
}


export async function getGuestInfo () {

    if ( get(token) == "" ){
        return
    }

    const body_ = JSON.stringify({
        token: get(token),
    })

    const res = await fetch(BASEURL+'/guest/', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: body_
    })

    if ( res.status === 401 ){
        token.set("")
        yourseat.set(0)
        yourtable.set(0)
        nickname.set("")
        return ""
    }

    res.json().then(result=>{
        let guest_info = JSON.parse(result)
        if ( Object.keys(guest_info).length == 0 ){
            guest_info = {
                seat: 0,
                table:0,
                nickname: "Your nickname"
            }
        }
        yourseat.set(guest_info.seat)
        yourtable.set(guest_info.table)
        nickname.set(guest_info.nickname)
    })
}


export async function getToken (user_id, password) {

    const body_ = JSON.stringify({
        "user_id": user_id,
        "password": password
    })

    const res = await fetch(BASEURL+'/auth/', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
          },
        body: body_
    })


    // ログインする場合は、200以外は蹴っていいけど、ほかはなんかごまかす必要があるかも。
    if ( res.status != 200 ){
        return ""
    }

    let result = await res.json()
    // console.log("RESULT:"+result)
    if ( result != "" ){
        token.set(result)
        return result
    }
    return "";
}


export async function getHallInfo () {

    if ( get(token) == "" ){
        return
    }

    const body_ = JSON.stringify({
        token: get(token),
    })

    // Offlineの場合の処理1: タイマーを準備
    const controller = new AbortController()
    // 5 second timeout:
    const timeoutId = setTimeout(() => controller.abort(), 5000)

    const res = await fetch(BASEURL+'/hall/', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
          },
        body: body_,
        // Offlineの場合の処理2: 有限時間しかresponseを待たない
        signal: controller.signal // 8 sec
    }).catch(()=>{offline.set(true)})



    // Offlineの場合の処理3: 読みこめなかった場合はofflineをセットする。
    if ( (typeof res === 'undefined') || (res.status != 200) ){
        offline.set(true)
        return
    }
    // Offlineの場合の処理4: 読みこめた場合はofflineを解除する。
    offline.set( false )

    res.json().then(result=>{
        let hi = JSON.parse(result)
        hall_info.set(hi)
    })
}
