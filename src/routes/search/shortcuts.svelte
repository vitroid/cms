<script>
    import ShortCut from "./Components/shortcut.svelte";

    let shortcuts = [
        ["1PA", "^1PA-"],
        ["1PB", "^1PB-"],
        ["1PC", "^1PC-"],
        ["1PD", "^1PD-"],
        ["1PE", "^1PE-"],
        ["1PF", "^1PF-"],

        ["2PA", "^2PA-"],
        ["2PB", "^2PB-"],
        ["2PC", "^2PC-"],
        ["2PD", "^2PD-"],
        ["2PE", "^2PE-"],
        ["2PF", "^2PF-"],

        ["1Aa", "^1Aa-"],
        ["1Ab", "^1Ab-"],
        ["1Ac", "^1Ac-"],
        ["1C", "^1C-"],
        ["1D", "^1D-"],
        ["1Fa", "^1Fa-"],
        ["1Fb", "^1Fb-"],
        ["1Fc", "^1Fc-"],
        ["1Fd", "^1Fd-"],

        ["2Aa", "^2Aa-"],
        ["2Ab", "^2Ab-"],
        ["2Ac", "^2Ac-"],
        ["2B", "^2B-"],
        ["2C", "^2C-"],
        ["2D", "^2D-"],
        ["2E", "^2E-"],
        ["2Fa", "^2Fa-"],
        ["2Fb", "^2Fb-"],
        ["2Fc", "^2Fc-"],

        ["S1", "^S1-"],
        ["S2", "^S2-"],
        ["S3", "^S3-"],
        ["S4", "^S4-"],
        ["S5", "^S5-"],
        ["S6", "^S6-"],
        ["S7", "^S7-"],
        ["Award lectures", "(-Aw|Aw-)"]
    ];

</script>

<div>
{#each shortcuts as shortcut}
<ShortCut label={shortcut[0]} query={shortcut[1]} on:search />
{/each}
</div>
