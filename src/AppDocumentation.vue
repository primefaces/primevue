<script>
import EventBus from '@/AppEventBus';
import LiveEditor from './views/liveeditor/LiveEditor';
import { services, data } from './views/liveeditor/LiveEditorData';

export default {
    name: 'appdoc',
    props: {
        name: null,
        sources: null,
        service: null,
        data: null,
        dependencies: null,
        extPages: null,
        extFiles: null,
        component: null,
        github: null
    },
    viewGithubListener: null,
    mounted() {
        this.viewGithubListener = () => {
            window.open('https://github.com/primefaces/primevue/blob/master/src/views/' + this.github, '_blank');
        };
        EventBus.on('view-github', this.viewGithubListener);
    },
    beforeUnmount() {
        EventBus.off('view-github', this.viewGithubListener);
    },
    methods: {
        renderPanels() {
            let tabs = [];

            if (this.$slots.default) {
                tabs.push(<TabPanel header="Documentation">{this.$slots.default()}</TabPanel>);
            }

            this.renderSource('options-api', tabs);
            this.renderSource('composition-api', tabs);
            this.renderSource('browser-source', tabs);

            if (this.service) {
                let serviceArr = [];

                this.service.forEach(el => {
                    serviceArr.push(el.split(','))
                })
                /* eslint-disable */
                serviceArr.forEach((el, i) => {
                    tabs.push(
                        <TabPanel key={el} header={`${el}.js`}>
                            <pre v-code="script"><code>
                                {services[el]}
                            </code></pre>
                        </TabPanel>
                    );
                })
            }

            if (this.data) {
                let dataArr = [];

                this.data.forEach(el => {
                    dataArr.push(el.split(','))
                })
                
                dataArr.forEach((el, i) => {
                    tabs.push(
                        <TabPanel key={`${el}_i`} header={`${el}.json`}>
                            <pre v-code="script" style={{maxHeight: '500px'}}><code>
                                {data[el]}
                            </code></pre>
                        </TabPanel>
                    )
                });
            }

            return tabs;
        },
        renderContent(source) {
            if (source.tabName === 'Browser Source') {
                const _imports = source.imports ? source.imports.replaceAll('<\\/script>', '<\/script>') : '';
                return `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />

        <!-- PrimeVue -->
        <link href="https://unpkg.com/primevue@^3/resources/themes/saga-blue/theme.css" rel="stylesheet" />
        <link href="https://unpkg.com/primevue@^3/resources/primevue.min.css" rel="stylesheet" />
        <link href="https://unpkg.com/primeflex@^3/primeflex.min.css" rel="stylesheet" />
        <link href="https://unpkg.com/primeicons/primeicons.css" rel="stylesheet" />

        <!-- Dependencies -->
        <script src="https://unpkg.com/vue@next"><\/script>
        <script src="https://unpkg.com/primevue@^3/core/core.min.js"><\/script>

        <!-- Demo -->
        ${_imports}
        <link href="./index.css" rel="stylesheet" />
    </head>
    <body>
        ${source.content.replace('<\\/script>', '<\/script>')}
    </body>
</html>
                `
            }
            return source.content.replace('<\\/script>', '<\/script>');
        },
        renderSource(sourceType, tabs) {
            if (this.sources && this.sources[sourceType]) {
                tabs.push(
                    <TabPanel key={sourceType} header={this.sources[sourceType].tabName}>
                        <pre v-code><code>
                            {this.renderContent(this.sources[sourceType])}
                        </code></pre>
                    </TabPanel>
                );
            }
        }
    },
    render() {
        return (
            <div class="content-section documentation" id="app-doc">
                <LiveEditor name={this.name} sources={this.sources} service={this.service} data={this.data} dependencies={this.dependencies} extPages={this.extPages} extFiles={this.extFiles} component={this.component} />
                <TabView>
                    {
                        this.renderPanels()
                    }
                </TabView>
            </div>
        );
    }
}
</script>
