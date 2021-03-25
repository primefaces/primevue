<script>
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
        extFiles: null
    },
    methods: {
        renderPanels() {
            let tabs = [];

            if (this.$slots.default) {
                tabs.push(<TabPanel header="Documentation">{this.$slots.default()}</TabPanel>);
            }

            if (this.sources) {
                const sourceType = this.$appState.sourceType; //options-api or composition-api
                /* eslint-disable */
                tabs.push(
                    <TabPanel header={this.sources[sourceType].tabName}>
                        <LiveEditor name={this.name} sources={this.sources} service={this.service} data={this.data} dependencies={this.dependencies} extPages={this.extPages} extFiles={this.extFiles}/>
                        <pre v-code><code>
                            {this.sources[sourceType].content.replace('<\\/script>', '<\/script>')}
                        </code></pre>
                    </TabPanel>
                );
            }

            if (this.extPages) {
                /* eslint-disable */
                this.extPages.forEach(file => {
                    tabs.push(
                        <TabPanel key={file.tabName} header={file.tabName}>
                            <pre v-code><code>
                                {file.content.replace('<\\/script>', '<\/script>')}
                            </code></pre>
                        </TabPanel>
                    );
                });
            }

            if (this.service) {
                let serviceArr = [];

                this.service.forEach(el => {
                    serviceArr.push(el.split(','))
                })
                /* eslint-disable */
                serviceArr.forEach((el, i) => {
                    tabs.push(
                        <TabPanel key="service" header={`${el}.js`}>
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
        }
    },
    render() {
        return (
            <div class="content-section documentation">
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
