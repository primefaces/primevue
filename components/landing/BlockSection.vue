<template>
    <section id="blocks-section" class="landing-blocks pt-20 line-clamp-1">
        <div class="section-header">Blocks</div>
        <p class="section-detail">400+ ready to copy-paste UI blocks to build spectacular applications in no time.</p>
        <div class="flex justify-center mt-6">
            <a href="https://blocks.primevue.org" class="font-semibold p-4 rounded-md flex items-center linkbox active z-20">
                <span>Explore All</span>
                <i class="pi pi-arrow-right ml-2"></i>
            </a>
        </div>
        <section :class="['prime-blocks flex justify-center items-center flex-col z-1', { 'blocks-animation': setAnimation }]">
            <div class="flex">
                <div class="prime-block flex self-stretch p-1">
                    <div class="block-sidebar w-1/12 p-4">
                        <div class="logo">
                            <img src="https://primefaces.org/cdn/primevue/images/landing/blocks/logo-1.svg" alt="block logo" />
                        </div>
                        <div class="sidebar-menu mt-8">
                            <div class="bar w-2/3 mt-4 mb-4"></div>
                            <div class="bar w-3/4 mt-4 mb-4"></div>
                            <div class="bar w-7/12 mt-4 mb-4"></div>
                            <div class="bar w-1/2 mt-4 mb-4"></div>
                            <div class="bar w-3/4 mt-4 mb-4"></div>
                        </div>
                    </div>
                    <div class="block-content flex-1 p-6 flex flex-col">
                        <div class="bar w-1/12"></div>
                        <div class="block-main mt-6 h-full flex justify-center items-center flex-col">
                            <div class="flex justify-between">
                                <div class="block-item w-24">
                                    <div class="flex justify-between">
                                        <div>
                                            <div class="bar w-8 mt-2"></div>
                                            <div class="bar w-16 mt-4"></div>
                                        </div>
                                        <div>
                                            <div class="flex-1">
                                                <div class="circle circle-highlight"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="block-item block-item-active animation-1 ml-4 mr-4 w-24">
                                    <div class="flex justify-between">
                                        <div>
                                            <div class="bar w-8 mt-2"></div>
                                            <div class="bar w-16 mt-4"></div>
                                        </div>
                                        <div>
                                            <div class="circle"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="block-item w-24">
                                    <div class="flex justify-between">
                                        <div>
                                            <div class="bar w-8 mt-2"></div>
                                            <div class="bar w-16 mt-4"></div>
                                        </div>
                                        <div>
                                            <div class="circle circle-highligh"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-between mt-4">
                                <div class="block-item w-24">
                                    <div class="flex justify-between">
                                        <div>
                                            <div class="bar w-8 mt-2"></div>
                                            <div class="bar w-16 mt-4"></div>
                                        </div>
                                        <div>
                                            <div class="circle circle-highligh"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="block-item ml-4 mr-4 w-24">
                                    <div class="flex justify-between">
                                        <div>
                                            <div class="bar w-8 mt-2"></div>
                                            <div class="bar w-16 mt-4"></div>
                                        </div>
                                        <div>
                                            <div class="circle circle-highligh"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="block-item w-24">
                                    <div class="flex justify-between">
                                        <div>
                                            <div class="bar w-8 mt-2"></div>
                                            <div class="bar w-16 mt-4"></div>
                                        </div>
                                        <div>
                                            <div class="circle circle-highligh"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex -ml-20">
                <div class="prime-block p-1 flex self-stretch flex-col">
                    <div class="block-header pt-4 pb-4 pl-6 pr-6 flex justify-between items-center">
                        <div class="logo pr-8">
                            <img src="https://primefaces.org/cdn/primevue/images/landing/blocks/logo-1.svg" alt="block logo" />
                        </div>
                        <div class="flex-auto sidebar-menu flex">
                            <div class="bar w-8 ml-2 mr-2"></div>
                            <div class="bar w-8 ml-2 mr-2"></div>
                            <div class="bar w-8 ml-2 mr-2"></div>
                            <div class="bar w-8 ml-2 mr-2"></div>
                            <div class="bar w-8 ml-2 mr-2"></div>
                        </div>
                        <div class="circle circle-highlight"></div>
                    </div>
                    <div class="block-content flex-1 p-6 flex flex-col">
                        <div class="bar w-1/12"></div>
                        <div class="block-main mt-6 h-full flex justify-center items-center flex-col">
                            <div class="flex justify-between">
                                <div class="block-item w-16">
                                    <div class="bar w-8"></div>
                                    <span class="text mt-2 mb-2">26 %</span>
                                    <div class="box box-orange"></div>
                                </div>
                                <div class="block-item block-item-active animation-2 ml-4 mr-4 w-16">
                                    <div class="bar w-4"></div>
                                    <span class="text mt-2 mb-2">6 %</span>
                                    <div class="box box-pink"></div>
                                </div>
                                <div class="block-item mr-4 w-16">
                                    <div class="bar w-16"></div>
                                    <span class="text mt-2 mb-2">62 %</span>
                                    <div class="box box-green"></div>
                                </div>
                                <div class="block-item w-16">
                                    <div class="bar w-8"></div>
                                    <span class="text mt-2 mb-2">39 %</span>
                                    <div class="box box-blue"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="prime-block flex self-stretch p-1">
                    <div class="block-sidebar p-4">
                        <div class="logo">
                            <img src="https://primefaces.org/cdn/primevue/images/landing/blocks/logo-2.svg" alt="block logo" />
                        </div>
                        <div class="sidebar-menu mt-8">
                            <div class="circle mt-4 mb-4"></div>
                            <div class="circle mt-4 mb-4"></div>
                            <div class="circle mt-4 mb-4"></div>
                        </div>
                    </div>
                    <div class="block-sidebar-list pl-6 pr-6">
                        <div class="bar w-8 mt-4 mb-4"></div>
                        <div class="bar w-12 mt-4 mb-4"></div>
                        <div class="bar w-8 mt-4 mb-4"></div>
                        <div class="bar w-8 mt-4 mb-4"></div>
                        <div class="bar w-4 mt-4 mb-4"></div>
                        <div class="bar w-12 mt-4 mb-4"></div>
                        <div class="bar w-12 mt-4 mb-4"></div>
                        <div class="bar w-8 mt-4 mb-4"></div>
                    </div>
                    <div class="block-content flex-1 mt-8 mb-8 ml-6 mr-6 flex flex-col">
                        <div class="block-main h-full flex justify-center items-center flex-col pl-2 pr-2">
                            <div class="flex justify-between">
                                <div class="block-item w-1/4 flex justify-between flex-col">
                                    <div class="bar w-full"></div>
                                    <div class="flex items-center mt-4">
                                        <div class="circle circle-small circle-highlight mr-2"></div>
                                        <div class="bar w-8"></div>
                                    </div>
                                    <div class="bar bar-button w-16 mt-6"></div>
                                </div>
                                <div class="block-item block-item-active animation-3 ml-4 mr-4 w-1/4 flex justify-between flex-col">
                                    <div class="bar w-full"></div>
                                    <div class="flex items-center mt-4">
                                        <div class="circle circle-small circle-highlight mr-2"></div>
                                        <div class="bar w-8"></div>
                                    </div>
                                    <div class="flex items-center mt-4">
                                        <div class="circle circle-small circle-highlight mr-2"></div>
                                        <div class="bar w-12"></div>
                                    </div>
                                    <div class="bar bar-button w-16 mt-6"></div>
                                </div>
                                <div class="block-item w-1/4 flex justify-between flex-col">
                                    <div class="bar w-full"></div>
                                    <div class="flex items-center mt-4">
                                        <div class="circle circle-small circle-highlight mr-2"></div>
                                        <div class="bar w-8"></div>
                                    </div>
                                    <div class="flex items-center mt-4">
                                        <div class="circle circle-small circle-highlight mr-2"></div>
                                        <div class="bar w-8"></div>
                                    </div>
                                    <div class="flex items-center mt-4">
                                        <div class="circle circle-small circle-highlight mr-2"></div>
                                        <div class="bar w-8"></div>
                                    </div>
                                    <div class="bar bar-button w-16 mt-6"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex -mr-20">
                <div class="prime-block flex self-stretch p-1">
                    <div class="block-sidebar w-1/12 p-4">
                        <div class="logo">
                            <img src="https://primefaces.org/cdn/primevue/images/landing/blocks/logo-1.svg" alt="block logo" />
                        </div>
                        <div class="sidebar-menu mt-8">
                            <div class="bar w-2/3 mt-4 mb-4"></div>
                            <div class="bar w-3/4 mt-4 mb-4"></div>
                            <div class="bar w-7/12 mt-4 mb-4"></div>
                            <div class="bar w-1/2 mt-4 mb-4"></div>
                            <div class="bar w-3/4 mt-4 mb-4"></div>
                        </div>
                    </div>
                    <div class="block-content flex-1 p-6 flex flex-col">
                        <div class="block-main h-full flex justify-center items-center flex-col">
                            <div class="bar w-1/4 mb-4"></div>
                            <div class="bar w-1/3 mb-8"></div>
                            <div class="flex justify-between">
                                <div class="block-item w-24 p-0">
                                    <div class="block-image"></div>
                                    <div class="p-2">
                                        <div>
                                            <div class="bar w-16 mt-2 mb-2"></div>
                                            <div class="bar w-8 mb-2"></div>
                                        </div>
                                        <div>
                                            <div class="flex-1">
                                                <div class="circle circle-highlight circle-medium"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="block-item block-item-active ml-4 mr-4 animation-1 w-24 p-0">
                                    <div class="block-image"></div>
                                    <div class="p-2">
                                        <div>
                                            <div class="bar w-16 mt-2 mb-2"></div>
                                            <div class="bar w-8 mb-2"></div>
                                        </div>
                                        <div>
                                            <div class="flex-1">
                                                <div class="circle circle-highlight circle-medium"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="block-item w-24 p-0">
                                    <div class="block-image"></div>
                                    <div class="p-2">
                                        <div>
                                            <div class="bar w-16 mt-2 mb-2"></div>
                                            <div class="bar w-8 mb-2"></div>
                                        </div>
                                        <div>
                                            <div class="flex-1">
                                                <div class="circle circle-highlight circle-medium"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="prime-block flex self-stretch p-1">
                    <div class="block-sidebar p-4">
                        <div class="logo">
                            <img src="https://primefaces.org/cdn/primevue/images/landing/blocks/logo-2.svg" alt="block logo" />
                        </div>
                        <div class="sidebar-menu mt-8">
                            <div class="circle mt-4 mb-4"></div>
                            <div class="circle mt-4 mb-4"></div>
                            <div class="circle mt-4 mb-4"></div>
                        </div>
                    </div>
                    <div class="block-sidebar-list pl-6 pr-6">
                        <div class="bar w-8 mt-4 mb-4"></div>
                        <div class="bar w-12 mt-4 mb-4"></div>
                        <div class="bar w-8 mt-4 mb-4"></div>
                        <div class="bar w-8 mt-4 mb-4"></div>
                        <div class="bar w-4 mt-4 mb-4"></div>
                        <div class="bar w-12 mt-4 mb-4"></div>
                        <div class="bar w-12 mt-4 mb-4"></div>
                        <div class="bar w-8 mt-4 mb-4"></div>
                    </div>
                    <div class="block-content flex-1 mt-8 mb-8 ml-6 mr-6 flex flex-col">
                        <div class="block-main h-full flex justify-center items-center flex-col pl-2 pr-2">
                            <div class="flex justify-between">
                                <div class="block-item block-item-table block-item-active animation-1 flex">
                                    <div class="bar w-12 ml-4 mr-4"></div>
                                    <div class="bar w-12 ml-4 mr-4"></div>
                                    <div class="bar w-12 ml-4 mr-4"></div>
                                    <div class="bar w-12 ml-4 mr-4"></div>
                                </div>
                            </div>
                            <div class="block-item block-item-col flex">
                                <div class="flex">
                                    <div class="circle circle-small circle-highlight -mr-1"></div>
                                    <div class="bar w-12 ml-4 mr-4"></div>
                                </div>
                                <div class="bar w-12 ml-4 mr-4"></div>
                                <div class="bar w-12 ml-4 mr-4"></div>
                                <div class="bar w-12 ml-4 mr-4"></div>
                            </div>
                            <div class="block-item block-item-col flex">
                                <div class="flex">
                                    <div class="circle circle-small circle-highlight -mr-1"></div>
                                    <div class="bar w-12 ml-4 mr-4"></div>
                                </div>
                                <div class="bar w-12 ml-4 mr-4"></div>
                                <div class="bar w-12 ml-4 mr-4"></div>
                                <div class="bar w-12 ml-4 mr-4"></div>
                            </div>
                            <div class="block-item block-item-col flex">
                                <div class="flex">
                                    <div class="circle circle-small circle-highlight -mr-1"></div>
                                    <div class="bar w-12 ml-4 mr-4"></div>
                                </div>
                                <div class="bar w-12 ml-4 mr-4"></div>
                                <div class="bar w-12 ml-4 mr-4"></div>
                                <div class="bar w-12 ml-4 mr-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex">
                <div class="prime-block p-1 flex self-stretch flex-col">
                    <div class="block-header pt-4 pb-4 pl-6 pr-6 flex justify-between items-center">
                        <div class="logo pr-8">
                            <img src="https://primefaces.org/cdn/primevue/images/landing/blocks/logo-1.svg" alt="block logo" />
                        </div>
                        <div class="flex-auto sidebar-menu flex">
                            <div class="bar w-8 ml-2 mr-2"></div>
                            <div class="bar w-8 ml-2 mr-2"></div>
                            <div class="bar w-8 ml-2 mr-2"></div>
                            <div class="bar w-8 ml-2 mr-2"></div>
                            <div class="bar w-8 ml-2 mr-2"></div>
                        </div>
                        <div class="circle"></div>
                    </div>
                    <div class="block-content flex-1 p-6 flex flex-col">
                        <div class="block-main h-full flex justify-center items-center flex-col">
                            <div class="block-item block-item-active animation-2 ml-4 mr-4 w-32 text-center flex flex-col items-center overflow-visible">
                                <div class="-mt-6">
                                    <img src="https://primefaces.org/cdn/primevue/images/landing/blocks/question.svg" alt="question mark" />
                                </div>
                                <div class="bar w-8 mt-2"></div>
                                <div class="bar w-24 mt-2"></div>
                                <div class="bar w-16 mt-2"></div>
                                <div class="flex">
                                    <div class="bar bar-highlight bar-button w-16 mr-2 mt-6"></div>
                                    <div class="bar bar-button w-16 mr-2 mt-6"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
export default {
    data() {
        return {
            setAnimation: false
        };
    },
    mounted() {
        this.setAnimation = true;
    }
};
</script>
