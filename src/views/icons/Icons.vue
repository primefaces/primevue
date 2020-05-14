<template>
    <div class="icons-page">
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Icons</h1>
                <p>PrimeReact components internally use <a href="https://github.com/primefaces/primeicons">PrimeIcons</a> library, the official icons suite from <a href="https://www.primetek.com.tr">PrimeTek</a>.</p>
            </div>
        </div>

        <div class="content-section documentation">
            <h3 style="margin-top: 0">Download</h3>
            <p>PrimeIcons is available at npm, run the following command to download it to your project.</p>

<CodeHighlight lang="js">
npm install primeicons --save
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>PrimeIcons use the <strong>pi pi-&#123;icon&#125;</strong> syntax such as <strong>pi pi-check</strong>.
            A standalone icon can be displayed using an element such as <i>i</i> or <i>span</i></p>

<CodeHighlight>
&lt;i class="pi pi-check"&gt;&lt;/i&gt;
&lt;i class="pi pi-times"&gt;&lt;/i&gt;
</CodeHighlight>

<i class="pi pi-check"></i>
<i class="pi pi-times"></i>

            <h3>Size</h3>
            <p>Size of the icons can easily be changed using font-size property.</p>

<CodeHighlight>
&lt;i class="pi pi-check"&gt;&lt;/i&gt;
</CodeHighlight>

            <i class="pi pi-check"></i>

<CodeHighlight>
&lt;i class="pi pi-check" style="fontSize: 3em"&gt;&lt;/i&gt;
</CodeHighlight>

            <i class="pi pi-check" style="fontSize: 3em"></i>

            <h3>Spinning Animation</h3>
            <p>Special pi-spin class applies infinite rotate to an icon.</p>
<CodeHighlight>
&lt;i class="pi pi-spin pi-spinner" style="fontSizi class="pi pi-spin pi-spinner" style="fontSiz
</CodeHighlight>

            <i class="pi pi-spin pi-spinner" style="fontSize: 3em"></i>

            <h3>List of Icons</h3>
            <p>Here is the current list of PrimeIcons, more icons will be added periodically. You may also <a href="https://github.com/primefaces/primeicons/issues">request new icons</a> at the issue tracker.</p>

            <InputText v-model="filter" class="icon-filter" placeholder="Search an icon" />

            <div class="p-grid icons-list">
                <div class="p-col-12 p-md-2" v-for="icon of filteredIcons" :key="icon.properties.name">
                    <i :class="'pi pi-' + icon.properties.name"></i>
                    <div>pi-{{icon.properties.name}}</div>
                </div>
            </div>
        </div>
    </div></template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            icons: null,
            filter: null
        }
    },
    mounted() {
        axios.get('demo/data/icons.json').then(res => this.icons = res.data.icons);
    },
    computed: {
        filteredIcons() {
            if (this.filter)
                return this.icons.filter(icon => icon.properties.name.indexOf(this.filter.toLowerCase()) > -1);
            else
                return this.icons;
        }
    }
}
</script>

<style lang="css" scoped>
.icon-filter {
    width: 100%;
    padding: 1rem;
    margin: 16px 0 26px 0;
}
</style>
