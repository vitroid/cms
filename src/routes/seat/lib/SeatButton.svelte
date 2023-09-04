<script lang="ts">
    import { get } from "svelte/store";

    import { reserveSeat, cancelSeat, yourseat, yourtable, table_info, getTableInfo, getHallInfo } from     "./stores";
    export let seat;
    export let table_id;

    let disabled;
    let occupant;
    let ti;
    
	table_info.subscribe(value => {
		ti = value;
        if ( ! ti ) return;
        let L = ti[seat]
        // L is a tuple of (changeable:bool, label:string)
        if ( !L ){
            L = [true, "VACANT"]
        }
        occupant = L[1]

        // もし、すでに席が決まっているなら、その席のボタン以外は押させない。
        let ys = get(yourseat)
        if ( ys > 0 ){
            let yt = get(yourtable)
            disabled = (ys != seat) || (yt != table_id)
        }
        else{
        // 席が決まっていない場合は、VACANTな席を押せる。
            disabled = !L[0]
        }   
	});

    const reserveit = () => {
        if ( occupant == "VACANT" ){
            // occupant = get(nickname)
            // reserveSeatはasync関数なので、確実に順番に処理させたいのなら、thenでつないでいく。
            reserveSeat(table_id, seat).then(()=>{
                getTableInfo(table_id)
                getHallInfo()
            })
        }
        else{
            // occupant = 'VACANT'
            // cencelSeatはasync関数なので、確実に順番に処理させたいのなら、thenでつないでいく。
            cancelSeat().then(()=>{
                getTableInfo(table_id)
                getHallInfo()
            })
        }
    }

</script>

<button on:click={reserveit} {disabled}>
    {table_id}-{seat} {occupant}
</button>

<style>
    button {
        padding: 3px;
        margin: 2px;
        border-radius: 6px;
        border: none;
        background-color: #f882;
        width: 200px;
        height: 30px;
        opacity: 1;
        color: #000;
    }
    button:enabled {
        opacity: 1;
        color: #fff;
        background-color: #f44;
    }
    button:enabled:hover {
        opacity: 1;
        color: #fff;
        background-color: #f44c;
    }
    button:disabled {
        color: #0007;
    }
</style>
