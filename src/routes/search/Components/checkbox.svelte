<script>
    import { directory, marks, topvotes, vote } from "./directory.js";

    export let id;


    let _this;
    let status

    let lastvote = 0

    marks.subscribe(m=>{
        //最初に大量に送信してしまう。よろしくない。もっと緩く。最大でも一秒1回にする。
        if ( lastvote + 1000 < Date.now() ){
            vote()
            topvotes(100)
            lastvote = Date.now()
            // console.log(lastvote)
        }
        status = m[id]
        if (status){
            // directoryにはスケジュール表の要素が設定されている。
            //checkboxの操作が、対象要素の表示よりも前である場合もあるので、
            if ( (id in directory) && ( directory[id] ) ){
                directory[id].style.backgroundColor = "#0075ff";
                directory[id].style.color = "#fff";
            }
            if (_this){
                _this.style.backgroundColor = "#0075ff";
            }
        }
        else{
            if ( (id in directory) && ( directory[id] ) ){
                directory[id].style.backgroundColor = "#fff8";
                directory[id].style.color = "#000";
            }
            if (_this){
                _this.style.backgroundColor = "#fff8";
            }
        }
    })

    function cbclick ( event ){
        $marks[id] = !  $marks[id]
    }

</script>

{#if $marks[id]}
<button class="on" id={id} on:click={cbclick} bind:this={_this}>
{id}
</button>
{:else}
<button class="off" id={id} on:click={cbclick} bind:this={_this}>
{id}
</button>
{/if}


<style>
    button {
        font-size:150%;
        font-weight:bold;
        text-decoration: none;
        border-radius: 10px 10px 10px;
    }
    button.on {
        color: #fff;
        background-color:#0075ff;
    }
    button.off {
        color: #000;
        background-color:#f0f0f0;
    }
</style>
