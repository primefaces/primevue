<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>FlexGrid</h1>
                <p>Flex Grid CSS is a lightweight flex based responsive layout utility optimized for mobile phones, tablets and desktops. 
                    Flex Grid CSS is not included in PrimeVue as it is provided by <a href="https://github.com/primefaces/primeflex">PrimeFlex</a> , a shared grid library between PrimeFaces, PrimeNG, PrimeReact and PrimeVue projects.</p>
            </div>
        </div>

        <div class="content-section implementation flexgrid-demo">
            <h3 class="first">Basic</h3>
            <div class="p-grid">
                <div class="p-col">
                    <div class="box">1</div>
                </div>
                <div class="p-col">
                    <div class="box">2</div>
                </div>
                <div class="p-col">
                    <div class="box">3</div>
                </div>
            </div>
    
            <h3>Dynamic</h3>
            <Button type="button" icon="pi pi-plus" title="Add Column" @click="addColumn" :disabled="columns.length === 20" style="margin-right: .5em" />
            <Button type="button" icon="pi pi-minus" title="Remove Column" @click="removeColumn" :disabled="columns.length === 1" />

            <div style="margin-top: .5em">
                <transition-group name="dynamic-box" tag="div" class="p-grid">
                    <div v-for="col of columns" :key="col" class="p-col">
                        <div class="box">{{col}}</div>
                    </div>
                </transition-group>
            </div>

            <h3>Reverse Direction</h3>
            <div class="p-grid p-dir-rev">
                <div class="p-col">
                    <div class="box">1</div>
                </div>
                <div class="p-col">
                    <div class="box">2</div>
                </div>
                <div class="p-col">
                    <div class="box">3</div>
                </div>
            </div>

            <h3>Column Direction</h3>
            <div class="p-grid p-dir-col">
                <div class="p-col">
                    <div class="box">1</div>
                </div>
                <div class="p-col">
                    <div class="box">2</div>
                </div>
                <div class="p-col">
                    <div class="box">3</div>
                </div>
            </div>

            <h3>Reverse Column Direction</h3>
            <div class="p-grid p-dir-col-rev">
                <div class="p-col">
                    <div class="box">1</div>
                </div>
                <div class="p-col">
                    <div class="box">2</div>
                </div>
                <div class="p-col">
                    <div class="box">3</div>
                </div>
            </div>

            <h3>12 Column Grid</h3>
            <div class="p-grid">
                <div class="p-col-4">
                    <div class="box">4</div>
                </div>
                <div class="p-col">
                    <div class="box">1</div>
                </div>
                <div class="p-col">
                    <div class="box">1</div>
                </div>
                <div class="p-col">
                    <div class="box">1</div>
                </div>
                <div class="p-col">
                    <div class="box">1</div>
                </div>
                <div class="p-col">
                    <div class="box">1</div>
                </div>
                <div class="p-col">
                    <div class="box">1</div>
                </div>
                <div class="p-col">
                    <div class="box">1</div>
                </div>
                <div class="p-col">
                    <div class="box">1</div>
                </div>
            </div>

            <div class="p-grid">
                <div class="p-col-2">
                    <div class="box">2</div>
                </div>
                <div class="p-col-6">
                    <div class="box">6</div>
                </div>
                <div class="p-col-4">
                    <div class="box">4</div>
                </div>
            </div>

            <div class="p-grid">
                <div class="p-col-8">
                    <div class="box">8</div>
                </div>
                <div class="p-col-2">
                    <div class="box">2</div>
                </div>
                <div class="p-col-2">
                    <div class="box">2</div>
                </div>
            </div>

            <h3>MultiLine</h3>
            <div class="p-grid">
                <div class="p-col-6">
                    <div class="box">6</div>
                </div>
                <div class="p-col-6">
                    <div class="box">6</div>
                </div>
                <div class="p-col-6">
                    <div class="box">6</div>
                </div>
                <div class="p-col-6">
                    <div class="box">6</div>
                </div>
            </div>

            <h3>Fixed Width Column</h3>
            <div class="p-grid">
                <div class="p-col-fixed" style="width:100px">
                    <div class="box">100px</div>
                </div>
                <div class="p-col">
                    <div class="box">auto</div>
                </div>
            </div>

            <h3>Responsive</h3>
            <div class="p-grid">
                <div class="p-col-12 p-md-6 p-lg-3">
                    <div class="box">p-col-12 p-md-6 p-lg-3</div>
                </div>
                <div class="p-col-12 p-md-6 p-lg-3">
                    <div class="box">p-col-12 p-md-6 p-lg-3</div>
                </div>
                <div class="p-col-12 p-md-6 p-lg-3">
                    <div class="box">p-col-12 p-md-6 p-lg-3</div>
                </div>
                <div class="p-col-12 p-md-6 p-lg-3">
                    <div class="box">p-col-12 p-md-6 p-lg-3</div>
                </div>
            </div>

            <h3>Horizontal Alignment - Start</h3>
            <div class="p-grid p-justify-start">
                <div class="p-col-2">
                    <div class="box">2</div>
                </div>
                <div class="p-col-1">
                    <div class="box">1</div>
                </div>
                <div class="p-col-4">
                    <div class="box">4</div>
                </div>
            </div>

            <h3>Horizontal Alignment - End</h3>
            <div class="p-grid p-justify-end">
                <div class="p-col-2">
                    <div class="box">2</div>
                </div>
                <div class="p-col-1">
                    <div class="box">1</div>
                </div>
                <div class="p-col-4">
                    <div class="box">4</div>
                </div>
            </div>

            <h3>Horizontal Alignment - Center</h3>
            <div class="p-grid p-justify-center">
                <div class="p-col-2">
                    <div class="box">2</div>
                </div>
                <div class="p-col-1">
                    <div class="box">1</div>
                </div>
                <div class="p-col-4">
                    <div class="box">4</div>
                </div>
            </div>

            <h3>Horizontal Alignment - Between</h3>
            <div class="p-grid p-justify-between">
                <div class="p-col-2">
                    <div class="box">2</div>
                </div>
                <div class="p-col-1">
                    <div class="box">1</div>
                </div>
                <div class="p-col-4">
                    <div class="box">4</div>
                </div>
            </div>

            <h3>Horizontal Alignment - Around</h3>
            <div class="p-grid p-justify-around">
                <div class="p-col-2">
                    <div class="box">2</div>
                </div>
                <div class="p-col-1">
                    <div class="box">1</div>
                </div>
                <div class="p-col-4">
                    <div class="box">4</div>
                </div>
            </div>

            <h3>Horizontal Alignment - Even</h3>
            <div class="p-grid p-justify-even">
                <div class="p-col-2">
                    <div class="box">2</div>
                </div>
                <div class="p-col-1">
                    <div class="box">1</div>
                </div>
                <div class="p-col-4">
                    <div class="box">4</div>
                </div>
            </div>

            <h3>Vertical Alignment - Start</h3>
            <div class="p-grid p-align-start vertical-container">
                <div class="p-col">
                    <div class="box">4</div>
                </div>
                <div class="p-col">
                    <div class="box">4</div>
                </div>
                <div class="p-col">
                    <div class="box">4</div>
                </div>
            </div>

            <h3>Vertical Alignment - End</h3>
            <div class="p-grid p-align-end vertical-container">
                <div class="p-col">
                    <div class="box">4</div>
                </div>
                <div class="p-col">
                    <div class="box">4</div>
                </div>
                <div class="p-col">
                    <div class="box">4</div>
                </div>
            </div>

            <h3>Vertical Alignment - Center</h3>
            <div class="p-grid p-align-center vertical-container">
                <div class="p-col">
                    <div class="box">4</div>
                </div>
                <div class="p-col">
                    <div class="box">4</div>
                </div>
                <div class="p-col">
                    <div class="box">4</div>
                </div>
            </div>

            <h3>Vertical Alignment - Stretch</h3>
            <div class="p-grid p-align-stretch vertical-container">
                <div class="p-col">
                    <div class="box box-stretched">4</div>
                </div>
                <div class="p-col">
                    <div class="box box-stretched">4</div>
                </div>
                <div class="p-col">
                    <div class="box box-stretched">4</div>
                </div>
            </div>

            <h3>Vertical Alignment - Per Column</h3>
            <div class="p-grid vertical-container">
                <div class="p-col p-col-align-start">
                    <div class="box">4</div>
                </div>
                <div class="p-col p-col-align-center">
                    <div class="box">4</div>
                </div>
                <div class="p-col p-col-align-end">
                    <div class="box">4</div>
                </div>
            </div>

            <h3>Offset</h3>
            <div class="p-grid">
                <div class="p-col-6 p-offset-3">
                    <div class="box">6</div>
                </div>
            </div>

            <div class="p-grid">
                <div class="p-col-4">
                    <div class="box">4</div>
                </div>
                <div class="p-col-4 p-offset-4">
                    <div class="box">4</div>
                </div>
            </div>

            <h3>Nested</h3>
            <div class="p-grid nested-grid">
                <div class="p-col-8">
                    <div class="p-grid">
                        <div class="p-col-6">
                            <div class="box">6</div>
                        </div>
                        <div class="p-col-6">
                            <div class="box">6</div>
                        </div>
                        <div class="p-col-12">
                            <div class="box">12</div>
                        </div>
                    </div>
                </div>
                <div class="p-col-4">
                    <div class="box box-stretched">4</div>
                </div>
            </div>

            <h3>Panels</h3>
            <div class="p-grid">
                <div class="p-col">
                    <Panel header="Godfather">
                        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                    </Panel>
                </div>
                <div class="p-col">
                    <Panel header="Godfather">
                        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                    </Panel>
                </div>
                <div class="p-col">
                    <Panel header="Godfather">
                        The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
                        His beloved son Michael has just come home from the war, but does not intend to become part of his father's business.
                        Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family,
                        kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.
                    </Panel>
                </div>
            </div>

            <h3>Sample Layout</h3>
            <div class="p-grid sample-layout">
                <div class="p-col-12 p-md-2">
                    Menu
                </div>
                <div class="p-col-12 p-md-10 p-col-nogutter">
                    <div class="p-col-12 p-col-nogutter">
                        Top Bar
                    </div>
                    <div class="p-col-12">
                        <div class="p-grid">
                            <div class="p-col-12 p-md-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet, orci nec
                                dictum convallis, ligula mauris vestibulum turpis, nec varius tortor quam at diam. Nullam a viverra nibh.
                                In tincidunt tempor lectus quis vulputate. Pellentesque nec dui aliquam, lobortis est in, lobortis ante</div>
                            <div class="p-col-12 p-md-4">Maecenas vel nisi aliquet, vulputate tortor id, laoreet massa. Maecenas mattis
                                tristique bibendum. Suspendisse vel mi dictum, vestibulum lacus quis, pulvinar quam. Proin vulputate, nibh
                                at finibus varius, leo eros lacinia elit, nec blandit odio tellus a justo. Donec nec ex auctor, tristique
                                nulla nec, rutrum sapien.</div>
                            <div class="p-col-12 p-md-4">Proin efficitur in leo eget ornare. Nam vestibulum neque sed velit sagittis
                                sodales. Sed scelerisque hendrerit magna a hendrerit. Cras tempor sem at justo pharetra convallis.
                                Curabitur vel sodales purus. Vestibulum interdum facilisis nulla imperdiet suscipit. Quisque lectus felis,
                                condimentum eget hendrerit sit amet.</div>

                            <div class="p-col-6 p-md-3"><img alt="Galleria 1" src="demo/images/nature/nature1.jpg" style="width: 100%" /></div>
                            <div class="p-col-6 p-md-3"><img alt="Galleria 2" src="demo/images/nature/nature2.jpg" style="width: 100%" /></div>
                            <div class="p-col-6 p-md-3"><img alt="Galleria 3" src="demo/images/nature/nature3.jpg" style="width: 100%" /></div>
                            <div class="p-col-6 p-md-3"><img alt="Galleria 4" src="demo/images/nature/nature4.jpg" style="width: 100%" /></div>
        
                            <div class="p-col-12 p-md-6">Phasellus faucibus purus volutpat mauris lacinia sodales. Ut sit amet sapien
                                facilisis, commodo dui non, fringilla tellus. Quisque tempus facilisis nisi sodales finibus. Pellentesque
                                neque orci, ullamcorper vitae ligula quis, dignissim euismod augue.</div>
                            <div class="p-col-12 p-md-6">Fusce ullamcorper congue massa, eget ullamcorper nunc lobortis egestas. Lorem
                                ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices dui eget dolor feugiat dapibus. Aliquam
                                pretium leo et egestas luctus. Nunc facilisis gravida tellus.</div>
                        </div>     
                    </div>
                </div>
                <div class="p-col-12">
                    Footer
                </div>
            </div>
        </div>

        <FlexGridDoc/>
    </div>
</template>

<script>
import FlexGridDoc from './FlexGridDoc';

export default {
    data() {
        return {
            columns: [0, 1, 2, 3, 4, 5]
        }
    },
    methods: {
        addColumn() {
            this.columns = [...this.columns, this.columns.length];
        },
        removeColumn() {
            this.columns.pop();
        }
    },
    components: {
        'FlexGridDoc': FlexGridDoc
    }
}
</script>

<style lang="scss">
.flexgrid-demo {
    .box,
    .sample-layout > div {
        background-color: #f1f1f1;
        text-align: center;
        padding-top: 1em;
        padding-bottom: 1em;
        border-radius: 4px;
    }

    .box-stretched {
        height: 100%;
    }

    .sample-layout {
        margin: 0;
    }

    .sample-layout > div {
        border: 1px solid #ffffff;
    }

    .vertical-container {
        margin: 0;
        height: 200px;
        background: #c0c0c0;
        border-radius: 4px;
    }

    .nested-grid .p-col-4 {
        padding-bottom: 1em;
    }

    .dynamic-box-enter-active, .dynamic-box-leave-active {
        transition: all .5s;
    }

    .dynamic-box-enter, .dynamic-box-leave-to {
        opacity: 0;
    }

    .dynamic-box-enter, .dynamic-box-leave-to {
        transform: translateX(30px);
    }    
}
</style>
