<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TabView</h1>
                <p>TabView is a container component to group content with tabs.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Default</h5>
                <TabView ref="tabview1">
                    <TabPanel header="Header I">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </TabPanel>
                    <TabPanel header="Header II">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                    </TabPanel>
                    <TabPanel header="Header III">
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                    </TabPanel>
                </TabView>
            </div>

            <div class="card">
                <h5>Programmatic</h5>
                <div class="p-py-2">
                    <Button @click="active1 = 0" class="p-button-text" label="Activate 1st" />
                    <Button @click="active1 = 1" class="p-button-text p-mr-2" label="Activate 2nd" />
                    <Button @click="active1 = 2" class="p-button-text p-mr-2" label="Activate 3rd" />
                </div>

                <TabView ref="tabview2" v-model:activeIndex="active1">
                    <TabPanel header="Header I">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </TabPanel>
                    <TabPanel header="Header II">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                    </TabPanel>
                    <TabPanel header="Header III">
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                    </TabPanel>
                </TabView>
            </div>

            <div class="card">
                <h5>Disabled</h5>
                <TabView ref="tabview3">
                    <TabPanel header="Header I">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </TabPanel>
                    <TabPanel header="Header II">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                    </TabPanel>
                    <TabPanel header="Header III">
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                    </TabPanel>
                    <TabPanel header="Header IV" :disabled="true"></TabPanel>
                </TabView>
            </div>

            <div class="card">
                <h5>Custom Headers</h5>
                <TabView class="tabview-custom" ref="tabview4">
                    <TabPanel>
                        <template #header>
                            <i class="pi pi-calendar"></i>
                            <span>Header I</span>
                        </template>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </TabPanel>
                    <TabPanel>
                        <template #header>
                            <span>Header II</span>
                            <i class="pi pi-user"></i>
                        </template>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                    </TabPanel>
                    <TabPanel>
                        <template #header>
                            <i class="pi pi-search"></i>
                            <span>Header III</span>
                            <i class="pi pi-cog"></i>
                        </template>
                       <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                    </TabPanel>
                </TabView>
            </div>

            <div class="card">
                <h5>Dynamic Tabs</h5>
                <TabView>
                    <TabPanel v-for="tab in tabs" :key="tab.title" :header="tab.title">
                        <p>{{tab.content}}</p>
                    </TabPanel>
                </TabView>
            </div>

            <div class="card">
                <h5>Scrollable</h5>
                <div class="p-py-2">
                    <Button @click="active2 = 0" class="p-button-text" label="Activate 1st" />
                    <Button @click="active2 = 29" class="p-button-text p-mr-2" label="Activate 30th" />
                    <Button @click="active2 = 49" class="p-button-text p-mr-2" label="Activate 50th" />
                </div>

                <TabView v-model:activeIndex="active2" :scrollable="true">
                    <TabPanel v-for="tab in scrollableTabs" :key="tab.title" :header="tab.title">
                        <p>{{tab.content}}</p>
                    </TabPanel>
                </TabView>
            </div>
        </div>

        <TabViewDoc/>
    </div>
</template>

<script>
import TabViewDoc from './TabViewDoc';
import EventBus from '@/AppEventBus';

export default {
    data() {
        return {
            active1: 0,
            active2: 0,
            tabs: [
                {
                    title: 'Header I',
                    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
                },
                {
                    title: 'Header II',
                    content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.`
                },
                {
                    title: 'Header III',
                    content: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                            cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.`
                }
            ],
            scrollableTabs: Array.from({ length: 50 }, (_, i) => ({ title: `Tab ${i + 1}`, content: `Tab ${i + 1} Content` }))
        }
    },
    timeout: null,
    themeChangeListener: null,
    mounted() {
        this.themeChangeListener = () => {
            this.timeout = setTimeout(() => {
                this.$refs.tabview1.updateInkBar();
                this.$refs.tabview2.updateInkBar();
                this.$refs.tabview3.updateInkBar();
                this.$refs.tabview4.updateInkBar();
            }, 50);
        };
        EventBus.on('change-theme', this.themeChangeListener);
    },
    beforeUnmount() {
        clearTimeout(this.timeout);
        EventBus.off('change-theme', this.themeChangeListener);
    },
    components: {
        'TabViewDoc': TabViewDoc
    }
}
</script>

<style lang="scss" scoped>
.tabview-custom {
    i, span {
        vertical-align: middle;
    }

    span {
        margin: 0 .5rem;
    }
}

.p-tabview p {
    line-height: 1.5;
    margin: 0;
}
</style>
