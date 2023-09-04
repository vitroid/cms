import { get, writable } from 'svelte/store';
export let directory = {};

// directory辞書は、タブ内のボタンへの参照を保持している。これを操作することで、遠隔で状態を変えられる。
// 操作の方法はcheckbox.svelteを見よ

// シグナル伝達方式もsearchで使っている。本当はこういう直接結合は避けて、シグナル伝達に統一すべきだと思う。


// https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript

// dec2hex :: Integer -> String
// i.e. 0-255 -> '00'-'ff'
function dec2hex (dec) {
    return dec.toString(16).padStart(2, "0")
}
  
  // generateId :: Integer -> String
export function generateId (len) {
    var arr = new Uint8Array((len || 40) / 2)
    window.crypto.getRandomValues(arr)
    return Array.from(arr, dec2hex).join('')
}


// API access 
// const BASEURL = 'http://127.0.0.1:8090';
const BASEURL = 'http://www.chem.okayama-u.ac.jp:8090';

// key: 講演番号 value: 投票数
export const votes = writable({})

// browser内メモリー
import { localStorageWritable } from "@babichjacob/svelte-localstorage";
// 青い印をつけた講演の表
export const marks = localStorageWritable("marks", new Set());
// identity
export let id = localStorageWritable("id", "");


export async function vote() {

  let marks_dict = get(marks)
  let marked = ""
  Object.keys(marks_dict).forEach(key=>{if (marks_dict[key]) {marked = marked + key+","}})

  // console.log(marked)
  const body_ = JSON.stringify({
      id: get(id),
      favs: marked,
  })
  fetch(BASEURL+'/vote', {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
        },
      body: body_
  }).then(response=>{if (!response.ok) {
    console.error('response.ok:', response.ok);
    console.error('response.status:', response.status);
    console.error('response.statusText:', response.statusText);
    throw new Error(response.statusText);
  }}).catch(error => {
    // ネットワークエラーでも !response.ok でもここで処理できる
    console.error('Error occurs', error);
  });

}



export async function topvotes(num) {

  fetch(BASEURL+"/top/" + get(id) + "/" + num, {
    method: "GET",
    headers: {
        'Content-Type': 'application/json'
      },
  }).then(response=>{if (!response.ok) {
      console.error('response.ok:', response.ok);
      console.error('response.status:', response.status);
      console.error('response.statusText:', response.statusText);
      throw new Error(response.statusText);
    }

    return response.json()
  }).then(result=>{
    let counts = JSON.parse(result)
    const max = Math.max(...Object.values(counts))
    // console.log(Object.values(counts))

    let full = {}
    Object.keys(directory).forEach(k=>{full[k] = 0})
    Object.keys(counts).forEach(k=>{full[k] = counts[k] / max})
    // console.log(full)
    votes.set(full)
  }).catch(error => {
    // ネットワークエラーでも !response.ok でもここで処理できる
    console.error('Error occurs', error);
  });

}


// データは入手できた。これをどう表現するかだ。