<script lang="ts">
import { hall_info } from "./stores";

// Hall全体の情報が更新されたら受けとる。
let namelist;
let hi

hall_info.subscribe(hi => {
    namelist = []
    Object.keys(hi).forEach(
        table=>Object.keys(hi[table]).forEach(
            seat=>{namelist.push({label:table+"-"+seat, name:hi[table][seat]})}
        )
    )
})
</script>

<details>
    <summary>
        INDEX
    </summary>
    <div class="content" >
        {#each namelist as member}
        <div class="person">
            {member.label}: {member.name}
        </div>
        {/each}
    </div>
</details>

<style>

    /* Style the collapsible content. Note: hidden by default */
    .content {
        padding: 0 18px;
        overflow: hidden;
        background-color: #f1f1f1;
    }
    .person {
        text-align: left;
        padding: 2px;
    }
</style>
