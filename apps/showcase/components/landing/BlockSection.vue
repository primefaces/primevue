<template>
    <section id="blocks-section" class="landing-blocks pt-20 overflow-hidden">
        <div class="section-header relative z-30">Blocks</div>
        <p class="section-detail relative z-30">400+ ready to copy-paste UI blocks to build spectacular applications in no time.</p>
        <div class="flex justify-center mt-6 relative z-30">
            <a href="https://blocks.primevue.org" class="linkbox linkbox-primary">
                <span>Explore All</span>
                <i class="pi pi-arrow-right ml-2"></i>
            </a>
        </div>
        <section :class="['prime-blocks flex justify-center items-center flex-col', { 'blocks-animation': setAnimation }]">
            <div class="flex">
                <div class="prime-block flex self-stretch p-1">
                    <div class="block-sidebar w-1/12 p-4">
                        <div class="logo">
                            <img src="https://primefaces.org/cdn/primevue/images/landing/blocks/logo-1.svg" alt="block logo" />
                        </div>
                        <div class="sidebar-menu mt-8">
                            <div class="bar w-8/12 my-4"></div>
                            <div class="bar w-9/12 my-4"></div>
                            <div class="bar w-7/12 my-4"></div>
                            <div class="bar w-6/12 my-4"></div>
                            <div class="bar w-9/12 my-4"></div>
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
                                <div class="block-item block-item-active animation-1 mx-4 w-24">
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
                                <div class="block-item mx-4 w-24">
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
                    <div class="block-header py-4 px-6 flex justify-between items-center">
                        <div class="logo pr-8">
                            <img src="https://primefaces.org/cdn/primevue/images/landing/blocks/logo-1.svg" alt="block logo" />
                        </div>
                        <div class="flex-auto sidebar-menu flex">
                            <div class="bar w-8 mx-2"></div>
                            <div class="bar w-8 mx-2"></div>
                            <div class="bar w-8 mx-2"></div>
                            <div class="bar w-8 mx-2"></div>
                            <div class="bar w-8 mx-2"></div>
                        </div>
                        <div class="circle circle-highlight"></div>
                    </div>
                    <div class="block-content flex-1 p-6 flex flex-col">
                        <div class="bar w-1/12"></div>
                        <div class="block-main mt-6 h-full flex justify-center items-center flex-col">
                            <div class="flex justify-between">
                                <div class="block-item w-16">
                                    <div class="bar w-8"></div>
                                    <span class="text my-2">26 %</span>
                                    <div class="box box-orange"></div>
                                </div>
                                <div class="block-item block-item-active animation-2 ml-4 mr-4 w-16">
                                    <div class="bar w-4"></div>
                                    <span class="text my-2">6 %</span>
                                    <div class="box box-pink"></div>
                                </div>
                                <div class="block-item mr-4 w-16">
                                    <div class="bar w-16"></div>
                                    <span class="text my-2">62 %</span>
                                    <div class="box box-green"></div>
                                </div>
                                <div class="block-item w-16">
                                    <div class="bar w-8"></div>
                                    <span class="text my-2">39 %</span>
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
                            <div class="circle my-4"></div>
                            <div class="circle my-4"></div>
                            <div class="circle my-4"></div>
                        </div>
                    </div>
                    <div class="block-sidebar-list px-6">
                        <div class="bar w-8 my-4"></div>
                        <div class="bar w-12 my-4"></div>
                        <div class="bar w-8 my-4"></div>
                        <div class="bar w-8 my-4"></div>
                        <div class="bar w-4 my-4"></div>
                        <div class="bar w-12 my-4"></div>
                        <div class="bar w-12 my-4"></div>
                        <div class="bar w-8 my-4"></div>
                    </div>
                    <div class="block-content flex-1 my-8 mx-6 flex flex-col">
                        <div class="block-main h-full flex justify-center items-center flex-col px-2">
                            <div class="flex justify-between">
                                <div class="block-item w-3/12 flex justify-between flex-col">
                                    <div class="bar w-full"></div>
                                    <div class="flex items-center mt-4">
                                        <div class="circle circle-small circle-highlight mr-2"></div>
                                        <div class="bar w-8"></div>
                                    </div>
                                    <div class="bar bar-button w-16 mt-6"></div>
                                </div>
                                <div class="block-item block-item-active animation-3 mx-4 w-3/12 flex justify-between flex-col">
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
                                <div class="block-item w-3/12 flex justify-between flex-col">
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
                            <div class="bar w-8/12 my-4"></div>
                            <div class="bar w-9/12 my-4"></div>
                            <div class="bar w-7/12 my-4"></div>
                            <div class="bar w-6/12 my-4"></div>
                            <div class="bar w-9/12 my-4"></div>
                        </div>
                    </div>
                    <div class="block-content flex-1 p-6 flex flex-col">
                        <div class="block-main h-full flex justify-center items-center flex-col">
                            <div class="bar w-3/12 mb-4"></div>
                            <div class="bar w-4/12 mb-8"></div>
                            <div class="flex justify-between">
                                <div class="block-item w-24 p-0">
                                    <div class="block-image"></div>
                                    <div class="p-2">
                                        <div>
                                            <div class="bar w-16 my-2"></div>
                                            <div class="bar w-8 mb-2"></div>
                                        </div>
                                        <div>
                                            <div class="flex-1">
                                                <div class="circle circle-highlight circle-medium"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="block-item block-item-active mx-4 animation-1 w-24 p-0">
                                    <div class="block-image"></div>
                                    <div class="p-2">
                                        <div>
                                            <div class="bar w-16 my-2"></div>
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
                                            <div class="bar w-16 my-2"></div>
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
                            <div class="circle my-4"></div>
                            <div class="circle my-4"></div>
                            <div class="circle my-4"></div>
                        </div>
                    </div>
                    <div class="block-sidebar-list px-6">
                        <div class="bar w-8 my-4"></div>
                        <div class="bar w-12 my-4"></div>
                        <div class="bar w-8 my-4"></div>
                        <div class="bar w-8 my-4"></div>
                        <div class="bar w-4 my-4"></div>
                        <div class="bar w-12 my-4"></div>
                        <div class="bar w-12 my-4"></div>
                        <div class="bar w-8 my-4"></div>
                    </div>
                    <div class="block-content flex-1 my-8 mx-6 flex flex-col">
                        <div class="block-main h-full flex justify-center items-center flex-col px-2">
                            <div class="flex justify-between">
                                <div class="block-item block-item-table block-item-active animation-1 flex">
                                    <div class="bar w-12 mx-4"></div>
                                    <div class="bar w-12 mx-4"></div>
                                    <div class="bar w-12 mx-4"></div>
                                    <div class="bar w-12 mx-4"></div>
                                </div>
                            </div>
                            <div class="block-item block-item-col flex">
                                <div class="flex">
                                    <div class="circle circle-small circle-highlight -mr-1"></div>
                                    <div class="bar w-12 mx-4"></div>
                                </div>
                                <div class="bar w-12 mx-4"></div>
                                <div class="bar w-12 mx-4"></div>
                                <div class="bar w-12 mx-4"></div>
                            </div>
                            <div class="block-item block-item-col flex">
                                <div class="flex">
                                    <div class="circle circle-small circle-highlight -mr-1"></div>
                                    <div class="bar w-12 mx-4"></div>
                                </div>
                                <div class="bar w-12 mx-4"></div>
                                <div class="bar w-12 mx-4"></div>
                                <div class="bar w-12 mx-4"></div>
                            </div>
                            <div class="block-item block-item-col flex">
                                <div class="flex">
                                    <div class="circle circle-small circle-highlight -mr-1"></div>
                                    <div class="bar w-12 mx-4"></div>
                                </div>
                                <div class="bar w-12 mx-4"></div>
                                <div class="bar w-12 mx-4"></div>
                                <div class="bar w-12 mx-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex">
                <div class="prime-block p-1 flex self-stretch flex-col">
                    <div class="block-header py-4 px-6 flex justify-between items-center">
                        <div class="logo pr-8">
                            <img src="https://primefaces.org/cdn/primevue/images/landing/blocks/logo-1.svg" alt="block logo" />
                        </div>
                        <div class="flex-auto sidebar-menu flex">
                            <div class="bar w-8 mx-2"></div>
                            <div class="bar w-8 mx-2"></div>
                            <div class="bar w-8 mx-2"></div>
                            <div class="bar w-8 mx-2"></div>
                            <div class="bar w-8 mx-2"></div>
                        </div>
                        <div class="circle"></div>
                    </div>
                    <div class="block-content flex-1 p-6 flex flex-col">
                        <div class="block-main h-full flex justify-center items-center flex-col">
                            <div class="block-item block-item-active animation-2 mx-4 w-32 text-center flex flex-col items-center overflow-visible">
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
