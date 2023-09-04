<script>
    import { _ } from 'svelte-i18n';
    import AsyncTable from "./Components/TimeTable/asynctable.svelte";
    import ShortCut from "./Components/shortcut.svelte";
    import {all_talks} from "./all_talks.js"


    let rooms = ["",""]
    
    let day3 = [
        [
            {bin:[9,0,60],   id:"", label:"9:00"},
            {bin:[10,0,60],  id:"", label:"10:00"},
            {bin:[11,0,60],  id:"", label:"11:00"},
            {bin:[12,0,60],  id:"", label:"12:00"},
            {bin:[13,0,60],  id:"", label:"13:00"},
            {bin:[14,0,60],  id:"", label:"14:00"},
            {bin:[15,0,60],  id:"", label:"15:00"},
            {bin:[16,0,60],  id:"", label:"16:00"},
        ],   
        [
            {bin:[9,0,60],   id:"Aw-01", label:$_("JSCC Award")},
            {bin:[,,5],      id:"", label:""},
            {bin:[,,60],     id:"Aw-02", label:$_("JSCC International Award")},
            {bin:[,,5],      id:"", label:""},
            {bin:[,,45],     id:"Aw-03", label:$_("JSCC Award for Creative Work")},
            // {bin:[,,125],     id:"", label:""},
            {bin:[14,0,30],     id:"Aw-06", label:$_("JSCC International Award for Creative Work")},
            {bin:[,,5],      id:"", label:""},
            {bin:[,,60],     id:"Aw-04", label:$_("JSCC International Award")},
            {bin:[,,10],     id:"", label:""},
            {bin:[,,70],     id:"", label:$_("JSCC General Meeting")},
        ],
    ]

    let banquet = [
        [
            {bin:[18,0,60],  id:"", label:"18:00"},
            {bin:[19,0,60],  id:"", label:"19:00"},
            {bin:[20,0,60],  id:"", label:"20:00"},
        ],   
        [
            {bin:[18,0,30],   id:"", label:""},
            {bin:[,,120],   id:"", label:$_("Banquet")},
        ],
    ]

</script>

<div class="panel">
    <h1>
        {$_("Award lectures")}
    </h1>
    <div class="container">
    <AsyncTable
        table={day3} 
        title={$_("awardvenue")} 
        available={all_talks}
        startminute={9*60+0}
        on:search>
        <td>Time</td>
        <td>
            <ShortCut label={$_("Award lectures")} query={"^Aw-"} on:search />
        </td>
    </AsyncTable>
    <AsyncTable 
        table={banquet} 
        title={$_("banquetvenue")} 
        available={all_talks}
        startminute={18*60+0}
        on:search>
        <td>Time</td>
    </AsyncTable>
    </div>
</div>


<style>
    td {
        text-align: center;
        margin: auto;
    }
    .panel {
        background-color: #fff;
        border: 4px solid #fff;
        border-radius: 15px;

        /* for children */
        display: flex;
        flex-flow: row;
        flex-wrap: wrap;
        margin: 5px;
        justify-content: center;
    }
    h1 {
        background-color: #4169E1c0;
        /* #5ab4bd; */
        width: 100%;
        padding: 10px;
        margin: 0px;
        font-size: 120%;
        border-radius: 15px 15px 0px 0px;
        color: white;
    }
    .container {
        display: flex;
        justify-content: start;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 5px;
    }
</style>
