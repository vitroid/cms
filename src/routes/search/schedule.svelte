<script>
    import { _ } from 'svelte-i18n';
    import { Tab, TabList, TabPanel, Tabs } from './Components/Tabs/tabs.js';
    import SponsorTable from "./sponsortable.svelte";
    // import Top from "./Top.svelte"
    import Day1 from "./Day1.svelte"
    import Day2 from "./Day2.svelte"
    import Day3 from "./Day3.svelte"
</script>

<div class="tabsystem">
<Tabs>
    <TabList>
        <!-- <Tab>{$_("General Information")}</Tab> -->
        <Tab>{$_("day1")}</Tab>
        <Tab>{$_("day2")}</Tab>
        <Tab>{$_("day3")}</Tab>
        <Tab>{$_("Supporters")}</Tab>
    </TabList>

    <!-- <TabPanel>
        <div class="container">
            <Top on:search />
        </div>
    </TabPanel> -->

    <TabPanel>
        <div class="container">
            <Day1 on:search />
        </div>
    </TabPanel>

    <TabPanel>
        <div class="container">
            <Day2 on:search />
        </div>
    </TabPanel>

    <TabPanel>
        <div class="container">
            <Day3 on:search />
        </div>
    </TabPanel>

    <TabPanel>
        <div class="container">
            <SponsorTable on:search />
        </div>
    </TabPanel>
</Tabs>
</div>


<style>
    .tabsystem {
        margin: 10px;
    }
    .container {
        width: 100%;
        display: flex;
        flex-flow: row;
        flex-wrap: wrap;
        margin: 0;
        border: 0;
        background-color: #4169E1;
    }
</style>
