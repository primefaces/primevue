<template>
    <div>
        <div class="content-section documentation">
            <h1>Icons</h1>
            <p>PrimeVue components internally use <a href="https://github.com/primefaces/primeicons">PrimeIcons</a> library, the official icons suite from <a href="https://www.primetek.com.tr">PrimeTek</a>.</p>

            <h5>Download</h5>
            <p>PrimeIcons is available at npm, run the following command to download it to your project.</p>

<CodeHighlight lang="js">
npm install primeicons --save
</CodeHighlight>

            <h5>Getting Started</h5>
            <p>PrimeIcons use the <strong>pi pi-&#123;icon&#125;</strong> syntax such as <strong>pi pi-check</strong>.
            A standalone icon can be displayed using an element like <i>i</i> or <i>span</i></p>

<CodeHighlight>
&lt;i class="pi pi-check"&gt;&lt;/i&gt;
&lt;i class="pi pi-times"&gt;&lt;/i&gt;
</CodeHighlight>

<i class="pi pi-check" style="margin-right: .5rem"></i>
<i class="pi pi-times"></i>

            <h5>Size</h5>
            <p>Size of the icons can easily be changed using font-size property.</p>

<CodeHighlight>
&lt;i class="pi pi-check"&gt;&lt;/i&gt;
</CodeHighlight>

            <i class="pi pi-check"></i>

<CodeHighlight>
&lt;i class="pi pi-check" style="fontSize: 2rem"&gt;&lt;/i&gt;
</CodeHighlight>

            <i class="pi pi-check" style="fontSize: 2rem"></i>

            <h5>Spinning Animation</h5>
            <p>Special pi-spin class applies continuous rotation to an icon.</p>
<CodeHighlight>
&lt;i class="pi pi-spin pi-spinner" style="fontSize: 2rem"&gt;&lt;/i&gt;
</CodeHighlight>

            <i class="pi pi-spin pi-spinner" style="fontSize: 2rem"></i>

            <h5>List of Icons</h5>
            <p>Here is the current list of PrimeIcons, more icons are added periodically. You may also <a href="https://github.com/primefaces/primeicons/issues">request new icons</a> at the issue tracker.</p>

            <InputText v-model="filter" class="icon-filter" placeholder="Search an icon" />

            <div class="p-grid icons-list">
                <div class="p-col-12 p-md-2" v-for="icon of filteredIcons" :key="icon.properties.name">
                    <i :class="'pi pi-' + icon.properties.name"></i>
                    <div>pi-{{icon.properties.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

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
        axios.get('demo/data/icons.json').then(res => {
            let icons = res.data.icons;
            icons.sort((icon1, icon2) => {
                if(icon1.properties.name < icon2.properties.name)
                    return -1;
                else if(icon1.properties.name < icon2.properties.name)
                    return 1;
                else
                    return 0;
            });

            this.icons = icons;
        });
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

<style lang="scss" scoped>
.icon-filter {
    width: 100%;
    padding: 1rem;
    margin: 1rem 0 1.5rem 0;
}

.icons-list {
    text-align: center;

    i {
        font-size: 1.5rem;
        color: var(--text-color-secondary);
        margin-bottom: .5rem;
    }

    .p-md-2 {
        padding-bottom: 2rem;
    }
}
</style>
