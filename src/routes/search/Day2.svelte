<script>
    import { _ } from 'svelte-i18n';
    // import SessionTable from "./Components/SessionTable/sessiontable.svelte";
    import AsyncTable from "./Components/TimeTable/asynctable.svelte";
    import PosterTables2 from "./PosterTables2.svelte";
    import ShortCut from "./Components/shortcut.svelte";
    import {all_talks} from "./all_talks.js"

    const rooms_day2am = ["2Aa", "2Ab", "2Ac", "2B", "2C", "2D", "2E", "2Fa", "2Fb", "2Fc"]
    // let bins_am = ["9:00", "9:20", "9:40", "10:00", "10:20", "10:30", "10:50", "11:10", "11:30"]
    // let slots_am = ["1", "2", "3", "4", "", "5", "6", "7", "8"]

    const shortcuts = {
        "2Aa": "^2Aa-",
        "2Ab": "^2Ab-",
        "2Ac": "^2Ac-",
        "2B": "^2B-",
        "2C": "^2C-",
        "2D": "^2D-",
        "2E": "^2E-",
        "2Fa": "^2Fa-",
        "2Fb": "^2Fb-",
        "2Fc": "^2Fc-",
    }

    const day2am = [
        [
            {bin:[9,0,60], id: "", label:"9:00"},
            {bin:[,,60],   id: "", label:"10:00"},
            {bin:[,,60],   id: "", label:"11:00"},
        ],
        [
            {bin:[9,0,20], id: "2Aa-01", label:"01"},
            {bin:[,,20],   id: "2Aa-02", label:"02"},
            {bin:[,,20],   id: "2Aa-03", label:"03"},
            {bin:[,,20],   id: "2Aa-04", label:"04"},
            {bin:[,,10],   id: "", label:""},
            {bin:[,,20],   id: "2Aa-05", label:"05"},
            {bin:[,,20],   id: "2Aa-06", label:"06"},
            {bin:[,,20],   id: "2Aa-07", label:"07"},
            {bin:[,,20],   id: "2Aa-08", label:"08"},
        ],
        [
            {bin:[9,0,20], id: "2Ab-01", label:"01"},
            {bin:[,,20],   id: "2Ab-02", label:"02"},
            {bin:[,,20],   id: "2Ab-03", label:"03"},
            {bin:[,,20],   id: "2Ab-04", label:"04"},
            {bin:[,,10],   id: "", label:""},
            {bin:[,,20],   id: "2Ab-05", label:"05"},
            {bin:[,,20],   id: "2Ab-06", label:"06"},
            // {bin:[,,20],   id: "2Ab-07", label:"07"},
            // {bin:[,,20],   id: "2Ab-08", label:"08"},
        ],
        [
            {bin:[9,0,20], id: "2Ac-01", label:"01"},
            {bin:[,,20],   id: "2Ac-02", label:"02"},
            {bin:[,,20],   id: "2Ac-03", label:"03"},
            {bin:[,,20],   id: "2Ac-04", label:"04"},
            {bin:[,,10],   id: "", label:""},
            {bin:[,,20],   id: "2Ac-05", label:"05"},
            {bin:[,,20],   id: "2Ac-06", label:"06"},
            {bin:[,,20],   id: "2Ac-07", label:"07"},
            {bin:[,,20],   id: "2Ac-08", label:"08"},
        ],
        [
            {bin:[9,0,20], id: "2B-01", label:"01"},
            {bin:[,,20],   id: "2B-02", label:"02"},
            {bin:[,,20],   id: "2B-03", label:"03"},
            {bin:[,,20],   id: "2B-04", label:"04"},
            {bin:[,,10],   id: "", label:""},
            {bin:[,,20],   id: "2B-05", label:"05"},
            {bin:[,,20],   id: "2B-06", label:"06"},
            {bin:[,,20],   id: "2B-07", label:"07"},
            // {bin:[,,20],   id: "2B-08", label:"08"},
        ],
        [
            {bin:[9,0,20], id: "2C-01", label:"01"},
            {bin:[,,20],   id: "2C-02", label:"02"},
            {bin:[,,20],   id: "2C-03", label:"03"},
            {bin:[,,20],   id: "2C-04", label:"04"},
            {bin:[,,10],   id: "", label:""},
            {bin:[,,20],   id: "2C-05", label:"05"},
            {bin:[,,20],   id: "2C-06", label:"06"},
            {bin:[,,20],   id: "2C-07", label:"07"},
            // {bin:[,,20],   id: "2C-08", label:"08"},
        ],
        [
            {bin:[9,0,20], id: "2D-01", label:"01"},
            {bin:[,,20],   id: "2D-02", label:"02"},
            {bin:[,,20],   id: "2D-03", label:"03"},
            {bin:[,,20],   id: "2D-04", label:"04"},
            {bin:[,,10],   id: "", label:""},
            {bin:[,,20],   id: "2D-05", label:"05"},
            {bin:[,,20],   id: "2D-06", label:"06"},
            {bin:[,,20],   id: "2D-07", label:"07"},
            {bin:[,,20],   id: "2D-08", label:"08"},
        ],
        [
            {bin:[9,0,20], id: "2E-01", label:"01"},
            {bin:[,,20],   id: "2E-02", label:"02"},
            {bin:[,,20],   id: "2E-03", label:"03"},
            {bin:[,,20],   id: "2E-04", label:"04"},
            {bin:[,,10],   id: "", label:""},
            {bin:[,,20],   id: "2E-05", label:"05"},
            {bin:[,,20],   id: "2E-06", label:"06"},
            {bin:[,,20],   id: "2E-07", label:"07"},
            // {bin:[,,20],   id: "2E-08", label:"08"},
        ],
        [
            {bin:[9,0,20], id: "2Fa-01", label:"01"},
            {bin:[,,20],   id: "2Fa-02", label:"02"},
            {bin:[,,20],   id: "2Fa-03", label:"03"},
            {bin:[,,20],   id: "2Fa-04", label:"04"},
            {bin:[,,10],   id: "", label:""},
            {bin:[,,20],   id: "2Fa-05", label:"05"},
            {bin:[,,20],   id: "2Fa-06", label:"06"},
            {bin:[,,20],   id: "2Fa-07", label:"07"},
            {bin:[,,20],   id: "2Fa-08", label:"08"},
        ],
        [
            {bin:[9,0,20], id: "2Fb-01", label:"01"},
            {bin:[,,20],   id: "2Fb-02", label:"02"},
            {bin:[,,20],   id: "2Fb-03", label:"03"},
            {bin:[,,20],   id: "2Fb-04", label:"04"},
            {bin:[,,10],   id: "", label:""},
            {bin:[,,20],   id: "2Fb-05", label:"05"},
            {bin:[,,20],   id: "2Fb-06", label:"06"},
            {bin:[,,20],   id: "2Fb-07", label:"07"},
            {bin:[,,20],   id: "2Fb-08", label:"08"},
        ],
        [
            {bin:[9,0,20], id: "2Fc-01", label:"01"},
            {bin:[,,20],   id: "2Fc-02", label:"02"},
            {bin:[,,20],   id: "2Fc-03", label:"03"},
            {bin:[,,20],   id: "2Fc-04", label:"04"},
            {bin:[,,10],   id: "", label:""},
            {bin:[,,20],   id: "2Fc-05", label:"05"},
            {bin:[,,20],   id: "2Fc-06", label:"06"},
            {bin:[,,20],   id: "2Fc-07", label:"07"},
            {bin:[,,20],   id: "2Fc-08", label:"08"},
        ],
    ]

    let rooms_day2pm = ["2Aa", "2Ab", "2Ac", "2B", "2C", "2D", "2E", "2Fa", "2Fb", "2Fc"]

    let day2pm = [
        [
            {bin:[15,0,60],  id:"", label:"15:00"},
            {bin:[,,60],  id:"", label:"16:00"},
            {bin:[,,60],  id:"", label:"17:00"},
            {bin:[,,60],  id:"", label:"18:00"},
            {bin:[,,60],  id:"", label:"19:00"},
            {bin:[,,60],  id:"", label:"20:00"},
        ],
        [ // Aa 
            {bin:[15,0,40], id:"", label:""},
            // {bin:[15,0,30], id:"Aw-07", label:$_("JSCC Research Encouragement Award")},
            // {bin:[,,10],    id:"", label:""},
            {bin:[,,20],    id:"2Aa-09", label:"09"},
            {bin:[,,20],    id:"2Aa-10", label:"10"},
            {bin:[,,20],    id:"2Aa-11", label:"11"},
            {bin:[,,20],    id:"2Aa-12", label:"12"},
            {bin:[,,10],    id:"", label:""},
            {bin:[,,20],    id:"2Aa-13", label:"13"},
            {bin:[,,20],    id:"2Aa-14", label:"14"},
            {bin:[,,20],    id:"2Aa-15", label:"15"},
            // {bin:[,,20],  id:"2Aa-16", label:"16"},
        ],
        [
            {bin:[15,0,40], id:"", label:""},
            {bin:[,,20],    id:"2Ab-07", label:"07"},
            {bin:[,,20],    id:"2Ab-08", label:"08"},
            {bin:[,,20],    id:"2Ab-09", label:"09"},
            {bin:[,,20],    id:"2Ab-10", label:"10"},
            {bin:[,,10],    id:"", label:""},
            {bin:[,,20],    id:"2Ab-11", label:"11"},
            {bin:[,,20],    id:"2Ab-12", label:"12"},
            {bin:[,,20],    id:"2Ab-13", label:"13"},
            {bin:[,,20],    id:"2Ab-14", label:"14"},
        ],
        [
            {bin:[15,0,40], id:"", label:""},
            {bin:[,,20],    id:"2Ac-09", label:"09"},
            {bin:[,,20],    id:"2Ac-10", label:"10"},
            {bin:[,,20],    id:"2Ac-11", label:"11"},
            {bin:[,,20],    id:"2Ac-12", label:"12"},
            {bin:[,,10],    id:"", label:""},
            {bin:[,,20],    id:"2Ac-13", label:"13"},
            {bin:[,,20],    id:"2Ac-14", label:"14"},
            {bin:[,,20],    id:"2Ac-15", label:"15"},
            // {bin:[,,20],  id:"2Ac-16", label:"16"},
        ],
        [
            {bin:[15,0,40], id:"", label:""},
            {bin:[,,20],    id:"2B-08", label:"08"},
            {bin:[,,20],    id:"2B-09", label:"09"},
            {bin:[,,20],    id:"2B-10", label:"10"},
            {bin:[,,20],    id:"2B-11", label:"11"},
        ],
        [
            {bin:[15,0,40], id:"", label:""},
            {bin:[,,20],    id:"2C-08", label:"08"},
            {bin:[,,20],    id:"2C-09", label:"09"},
            {bin:[,,20],    id:"2C-10", label:"10"},
        ],
        [
            {bin:[15,0,30], id:"Aw-07", label:$_("JSCC Research Encouragement Award")},
            {bin:[,,10],    id:"", label:""},
            // {bin:[15,0,30], id:"Aw-06", label:$_("JSCC International Award for Creative Work")},
            // {bin:[,,10],    id:"", label:""},
            {bin:[,,20],    id:"2D-09", label:"09"},
            {bin:[,,20],    id:"2D-10", label:"10"},
            {bin:[,,20],    id:"2D-11", label:"11"},
            {bin:[18,0,10],    id:"", label:$_("Explanation")+" 1"},
            {bin:[,,20],    id:"S7-01", label:"S7-01"},
            {bin:[,,20],    id:"S7-02", label:"S7-02"},
            {bin:[,,5],     id:"", label:""},
            {bin:[,,10],    id:"", label:$_("Explanation")+" 2"},
            {bin:[,,20],    id:"S7-03", label:"S7-03"},
            {bin:[,,20],    id:"S7-04", label:"S7-04"},
            {bin:[,,5],     id:"", label:""},
            {bin:[,,10],    id:"", label:$_("Explanation")+" 3"},
            {bin:[,,20],    id:"S7-05", label:"S7-05"},
            {bin:[,,10],    id:"", label:$_("Closing Remark")},
        ],
        [
            {bin:[15,0,40], id:"", label:""},
            {bin:[,,20],    id:"2E-08", label:"08"},
            {bin:[,,20],    id:"2E-09", label:"09"},
            {bin:[,,20],    id:"2E-10", label:"10"},
            {bin:[,,20],    id:"2E-11", label:"11"},
        ],
        [
            {bin:[15,0,30], id:"Aw-08", label:$_("JSCC Research Encouragement Award")},
            {bin:[,,10],    id:"", label:""},
            // {bin:[15,0,30], id:"Aw-07", label:$_("JSCC Research Encouragement Award")},
            // {bin:[,,10],    id:"", label:""},
            {bin:[,,20],    id:"2Fa-09", label:"09"},
            {bin:[,,20],    id:"2Fa-10", label:"10"},
            {bin:[,,20],    id:"2Fa-11", label:"11"},
            {bin:[,,20],    id:"2Fa-12", label:"12"},
            {bin:[,,10],    id:"", label:""},
            {bin:[,,20],    id:"2Fa-13", label:"13"},
            {bin:[,,20],    id:"2Fa-14", label:"14"},
            {bin:[,,20],    id:"2Fa-15", label:"15"},
        ],
        [
            {bin:[15,0,40], id:"", label:""},
            // {bin:[15,0,30], id:"Aw-08", label:$_("JSCC Research Encouragement Award")},
            // {bin:[,,10],    id:"", label:""},
            {bin:[,,20],    id:"2Fb-09", label:"09"},
            {bin:[,,20],    id:"2Fb-10", label:"10"},
            {bin:[,,20],    id:"2Fb-11", label:"11"},
            {bin:[,,20],    id:"2Fb-12", label:"12"},
            {bin:[,,10],    id:"", label:""},
            {bin:[,,20],    id:"2Fb-13", label:"13"},
            {bin:[,,20],    id:"2Fb-14", label:"14"},
            {bin:[,,20],    id:"2Fb-15", label:"15"},
        ],
        [
            {bin:[15,0,40], id:"", label:""},
            {bin:[,,20],    id:"2Fc-09", label:"09"},
            {bin:[,,20],    id:"2Fc-10", label:"10"},
            {bin:[,,20],    id:"2Fc-11", label:"11"},
            {bin:[,,20],    id:"2Fc-12", label:"12"},
            {bin:[,,10],    id:"", label:""},
            {bin:[,,20],    id:"2Fc-13", label:"13"},
            {bin:[,,20],    id:"2Fc-14", label:"14"},
            {bin:[,,20],    id:"2Fc-15", label:"15"},
            // {bin:[,,20],    id:"2Fc-16", label:"16"},
        ]        
    ]

</script>

<div class="panel">
    <h1>
        {$_("Oral sessions")}
    </h1>
    <div class="container">
        <AsyncTable 
            table={day2am} 
            title={$_("Morning sessions")}
            available={all_talks}
            startminute={9*60+0}
            on:search>
            <td>Time</td>
            {#each rooms_day2am as room}
            <td>
                <ShortCut label={room} query={shortcuts[room]} on:search />
            </td>
            {/each}
        </AsyncTable>
        <AsyncTable 
            table={day2pm} 
            title={$_("Afternoon sessions")} 
            available={all_talks}
            startminute={15*60+0}
            on:search>
            <td>Time</td>
            {#each rooms_day2pm as room}
            <td>
                <ShortCut label={room} query={shortcuts[room]} on:search />
            </td>
            {/each}
        </AsyncTable>
    </div>
</div>

<div class="panel">
    <h1>
        {$_("Poster sessions")}
    </h1>
    <PosterTables2 
        on:search />
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
