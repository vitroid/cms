<script lang="ts">
    import { _ } from 'svelte-i18n';
    import SmartTable from './Components/smarttable.svelte';

    let table
    _.subscribe(t=>{

        const venue = "<a href='"+t("venue_url")+"'>"+t("venue")+"</a>"
        const awardvenue    = "<a href='"+t("awardvenue_url")+"'>"+t("awardvenue")+"</a>"
        const banquetvenue  = "<a href='"+t("banquetvenue_url")+"'>"+t("banquetvenue")+"</a>"

        table=[
            [t("Date"), t("Time"), t("Event"), t("Access")],
            [t("day1"), "9:20-11:50", t("Morning sessions"), venue],
            [t("day1"), "12:50-14:50", t("Poster sessions"), venue],
            [t("day1"), "15:00-19:00", t("Afternoon sessions"), venue],

            [t("day2"), "9:20-11:50", t("Morning sessions"), venue],
            [t("day2"), "12:50-14:50", t("Poster sessions"), venue],
            [t("day2"), "15:00-15:30", t("Award lectures"), venue],
            [t("day2"), "15:40-18:50", t("Afternoon sessions"), venue],

            [t("day3"), "8:50-15:30", t("Award lectures"), awardvenue],
            [t("day3"), "15:40-16:50", t("JSCC General Meeting"), awardvenue],
            [t("day3"), "17:30-19:30", t("Banquet"), banquetvenue],
        ];
    })

</script>

<div class="post">
    <SmartTable {table} />
</div>

<style>
    div.post {
        margin: 2px;
    }
</style>
