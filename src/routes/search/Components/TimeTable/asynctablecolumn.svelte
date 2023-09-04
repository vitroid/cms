<script lang="ts">
    import VButton from "./vbutton.svelte";
    export let column
    export let available
    export let startminute

    let filled

    $: {
        // columnで時分が指定されていない場合には直前の続きとするが、指定されている場合にはギャップを何かで埋める必要がある。
        filled = []
        let head = startminute*1
        column.forEach((button)=>{
            if ( typeof button.bin[0] != "undefined" ){
                let minute = button.bin[0]*60 + button.bin[1]
                if ( minute < head ){
                    console.log("Overlapping")
                }
                if ( minute > head){
                    filled.push({
                        id:"",
                        label:"",
                        bin: [,,minute-head]
                    })
                    head = minute
                }
            }
            filled.push(button)
            head += button.bin[2]
        })
    }
</script>

<div class="container">
    {#each filled as button, i}
    <VButton id={button.id} label={button.label} height={button.bin[2]} {available} on:search />
    {/each}
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: start;
    }
</style>
