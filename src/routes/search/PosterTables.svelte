<script lang="ts">
    import PosterTable from "./Components/PosterTable2/postertable.svelte";

    function range(a,b){
        let c = new Set();
        for(let i=a; i<=b; i++){
            c.add(i);
        }
        return c;
    }
    function array(a,b){
        let c = []
        for(let i=a; i<=b; i++){
            c.push(i)
        }
        return c
    }
</script>

<PosterTable title={""}
    sessions={[
        {prefix:"1PA-", items:array(1,90)},
        {prefix:"1PB-", items:array(1,18)},
        {prefix:"1PC-", items:array(1,13)},
        {prefix:"1PD-", items:array(1,10)},
        {prefix:"1PE-", items:array(1,8)},
        {prefix:"1PF-", items:array(1,42)},
    ]}
    on:search />
