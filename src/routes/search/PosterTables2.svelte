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
        {prefix:"2PA-", items:array(1,85)},
        {prefix:"2PB-", items:array(1,18)},
        {prefix:"2PC-", items:array(1,13)},
        {prefix:"2PD-", items:array(1,10)},
        {prefix:"2PE-", items:array(1,7)},
        {prefix:"2PF-", items:array(1,41)},
    ]}
    on:search />
