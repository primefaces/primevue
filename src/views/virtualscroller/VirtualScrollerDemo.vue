<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>VirtualScroller</h1>
                <p>VirtualScroller is a performant approach to handle huge data efficiently.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation virtualscroller-demo">
            <div class="card">
                <h5 class="p-mb-0">Basic</h5>
                <div class="p-d-flex p-ai-center p-flex-wrap">
                    <div class="p-d-flex p-dir-col p-mr-3 p-mt-3">
                        <h6>Vertical</h6>
                        <VirtualScroller :items="basicItems" :itemSize="50">
                            <template v-slot:item="{ item, options }">
                                <div :class="['scroll-item p-p-2', {'odd': options.odd}]" style="height: 50px">{{ item }}</div>
                            </template>
                        </VirtualScroller>
                    </div>

                    <div class="p-d-flex p-dir-col p-mr-3 p-mt-3">
                        <h6>Horizontal</h6>
                        <VirtualScroller :items="basicItems" :itemSize="50" orientation="horizontal">
                            <template v-slot:item="{ item, options }">
                                <div :class="['scroll-item p-p-2', {'odd': options.odd}]" style="width: 50px">{{ item }}</div>
                            </template>
                        </VirtualScroller>
                    </div>

                    <div class="p-d-flex p-dir-col p-mr-3 p-mt-3">
                        <h6>Both</h6>
                        <VirtualScroller :items="multiItems" :itemSize="[50, 100]" orientation="both">
                            <template v-slot:item="{ item, options }">
                                <div :class="['scroll-item p-p-2', {'odd': options.odd}]" style="height: 50px" >
                                    <template v-for="(el, index) of item" :key="index">
                                        <div style="width: 100px">{{ el }}</div>
                                    </template>
                                </div>
                            </template>
                        </VirtualScroller>
                    </div> 
                </div>
            </div>

            <div class="card">
                <h5 class="p-mb-0">Scroll Delay</h5>
                <div class="p-d-flex p-ai-center p-flex-wrap">
                    <div class="p-d-flex p-dir-col p-mr-3 p-mt-3">
                        <h6>0ms Delay</h6>
                        <VirtualScroller :items="basicItems" :itemSize="50">
                            <template v-slot:item="{ item, options }">
                                <div :class="['scroll-item p-p-2', {'odd': options.odd}]" style="height: 50px">{{ item }}</div>
                            </template>
                        </VirtualScroller>
                    </div>

                    <div class="p-d-flex p-dir-col p-mr-3 p-mt-3">
                        <h6>150ms Delay</h6>
                        <VirtualScroller :items="basicItems" :itemSize="50" :delay="150">
                            <template v-slot:item="{ item, options }">
                                <div :class="['scroll-item p-p-2', {'odd': options.odd}]" style="height: 50px">{{ item }}</div>
                            </template>
                        </VirtualScroller>
                    </div>

                    <div class="p-d-flex p-dir-col p-mr-3 p-mt-3">
                        <h6>250ms Delay</h6>
                        <VirtualScroller :items="basicItems" :itemSize="50" :delay="250">
                            <template v-slot:item="{ item, options }">
                                <div :class="['scroll-item p-p-2', {'odd': options.odd}]" style="height: 50px">{{ item }}</div>
                            </template>
                        </VirtualScroller>
                    </div>
                </div>
            </div>

            <div class="card">
                <h5 class="p-mb-0">Loading</h5>
                <div class="p-d-flex p-ai-center p-flex-wrap">
                    <div class="p-d-flex p-dir-col p-mr-3 p-mt-3">
                        <h6>Basic</h6>
                        <VirtualScroller :items="basicItems" :itemSize="50" showLoader :delay="250">
                            <template v-slot:item="{ item, options }">
                                <div :class="['scroll-item p-p-2', {'odd': options.odd}]" style="height: 50px">{{ item }}</div>
                            </template>
                        </VirtualScroller>
                    </div>

                    <div class="p-d-flex p-dir-col p-mr-3 p-mt-3">
                        <h6>Templating</h6>
                        <VirtualScroller class="custom-loading" :items="basicItems" :itemSize="50" showLoader :delay="250">
                            <template v-slot:item="{ item, options }">
                                <div :class="['scroll-item p-p-2', {'odd': options.odd}]" style="height: 50px">{{ item }}</div>
                            </template>
                            <template v-slot:loader="{ options }">
                                <div :class="['scroll-item p-p-2', {'odd': options.odd}]" style="height: 50px" >
                                    <Skeleton :width="options.even ? '60%' : '50%'" height="1.3rem" />
                                </div>
                            </template>
                        </VirtualScroller>
                    </div>
                </div>
            </div>

            <div class="card">
                <h5 class="p-mb-0">Lazy</h5>
                <div class="p-d-flex p-ai-center p-flex-wrap">
                    <div class="p-d-flex p-dir-col p-mr-3 p-mt-3">
                        <VirtualScroller :items="lazyItems" :itemSize="50" showLoader :delay="250" :loading="lazyLoading" :lazy=true @lazy-load="onLazyLoad">
                            <template v-slot:item="{ item, options }">
                                <div :class="['scroll-item p-p-2', {'odd': options.odd}]" style="height: 50px">{{ item }}</div>
                            </template>
                        </VirtualScroller>
                    </div>
                </div>
            </div>

            <div class="card">
                <h5 class="p-mb-0">Template</h5>
                <div class="p-d-flex p-ai-center p-flex-wrap">
                    <div class="p-d-flex p-dir-col p-mr-3 p-mt-3">
                        <VirtualScroller class="custom-loading" :items="basicItems" :itemSize="25 * 7" showLoader :delay="250">
                            <template v-slot:item="{ item, options }">
                                <div :class="['custom-scroll-item scroll-item', {'odd': options.odd}]">
                                    <div class="p-d-flex p-ai-center p-px-2" style="height: 25px">{{`Item: ${item}`}}</div>
                                    <div class="p-d-flex p-ai-center p-px-2" style="height: 25px">{{`Index: ${options.index}`}}</div>
                                    <div class="p-d-flex p-ai-center p-px-2" style="height: 25px">{{`Count: ${options.count}`}}</div>
                                    <div class="p-d-flex p-ai-center p-px-2" style="height: 25px">{{`First: ${options.first}`}}</div>
                                    <div class="p-d-flex p-ai-center p-px-2" style="height: 25px">{{`Last: ${options.last}`}}</div>
                                    <div class="p-d-flex p-ai-center p-px-2" style="height: 25px">{{`Even: ${options.even}`}}</div>
                                    <div class="p-d-flex p-ai-center p-px-2" style="height: 25px">{{`Odd: ${options.odd}`}}</div>
                                </div>
                            </template>
                            <template v-slot:loader="{ options }">
                                <div :class="['custom-scroll-item scroll-item', {'odd': options.odd}]">
                                    <div class="p-d-flex p-ai-center p-px-2" style="height: 25px"><Skeleton width="60%" height="1.2rem" /></div>
                                    <div class="p-d-flex p-ai-center p-px-2" style="height: 25px"><Skeleton width="50%" height="1.2rem" /></div>
                                    <div class="p-d-flex p-ai-center p-px-2" style="height: 25px"><Skeleton width="60%" height="1.2rem" /></div>
                                    <div class="p-d-flex p-ai-center p-px-2" style="height: 25px"><Skeleton width="50%" height="1.2rem" /></div>
                                    <div class="p-d-flex p-ai-center p-px-2" style="height: 25px"><Skeleton width="60%" height="1.2rem" /></div>
                                    <div class="p-d-flex p-ai-center p-px-2" style="height: 25px"><Skeleton width="50%" height="1.2rem" /></div>
                                    <div class="p-d-flex p-ai-center p-px-2" style="height: 25px"><Skeleton width="60%" height="1.2rem" /></div>
                                </div>
                            </template>
                        </VirtualScroller>
                    </div>
                </div>
            </div>
        </div>

        <VirtualScrollerDoc />
    </div>
</template>

<script>
import VirtualScrollerDoc from './VirtualScrollerDoc.vue';

export default {
    data() {
        return {
            basicItems: null,
            multiItems: null,
            lazyItems: null,
            lazyLoading: false,
            loadLazyTimeout: null,
        }
    },
    mounted() {
        this.basicItems = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
        this.multiItems = Array.from({ length: 1000 }).map((_, i) => Array.from({ length: 1000 }).map((_j, j) => `Item #${i}_${j}`));
        this.lazyItems = Array.from({ length: 100000 });
    },
    methods: {
        onLazyLoad(event) {
            this.lazyLoading = true;

            if (this.loadLazyTimeout) {
                clearTimeout(this.loadLazyTimeout);
            }
            
            //imitate delay of a backend call
            this.loadLazyTimeout = setTimeout(() => {
                const { first, last } = event;
                const lazyItems = [...this.lazyItems];
            
                for (let i = first; i < last; i++) {
                    lazyItems[i] = `Item #${i}`;
                }

                this.lazyItems = lazyItems;
                this.lazyLoading = false;

            }, Math.random() * 1000 + 250);
        }
    },
    components: {
        VirtualScrollerDoc
    }
}
</script>

<style lang="scss" scoped>
.virtualscroller-demo {
	::v-deep(.p-virtualscroller) {
		height: 200px;
		width: 200px;
		border: 1px solid var(--surface-d);

        .scroll-item {
            background-color: var(--surface-a);
            display: flex;
            align-items: center;
        }

        .custom-scroll-item {
            flex-direction: column;
            align-items: stretch;
        }

        .odd {
            background-color: var(--surface-b);
        }
	}

    ::v-deep(.p-horizontal-scroll) {
        .p-virtualscroller-content {
            display: flex;
            flex-direction: row;
        }
        
        .scroll-item {
            writing-mode: vertical-lr;
        }
    }

    ::v-deep(.custom-loading > .p-virtualscroller-loader) {
        display: block;
    }
}
</style>