<template>
    <section id="blocks-section" class="landing-blocks pt-8 overflow-hidden">
        <div class="section-header">PrimeBlocks</div>
        <p class="section-detail">350+ ready to copy-paste UI blocks to build spectacular applications in no time.</p>
        <div class="flex justify-content-center mt-4">
            <a href="https://www.primefaces.org/primeblocks-vue" class="font-semibold p-3 border-round flex align-items-center linkbox active z-2">
                <span>Learn More</span>
                <i class="pi pi-arrow-right ml-2"></i>
            </a>
        </div>
        <section :class="['prime-blocks flex justify-content-center align-items-center flex-column z-1', {'blocks-animation': setAnimation}]">
            <div class="flex">
                <div class="prime-block flex align-self-stretch p-1">
                    <div class="block-sidebar w-1 p-3">
                        <div class="logo">
                            <img src="demo/images/landing/blocks/logo-1.svg" alt="block logo" />
                        </div>
                        <div class="sidebar-menu mt-5">
                            <div class="bar w-8 my-3"></div>
                            <div class="bar w-9 my-3"></div>
                            <div class="bar w-7 my-3"></div>
                            <div class="bar w-6 my-3"></div>
                            <div class="bar w-9 my-3"></div>
                        </div>
                    </div>
                    <div class="block-content flex-1 p-4 flex flex-column">
                        <div class="bar w-1"></div>
                        <div class="block-main mt-4 h-full flex justify-content-center align-items-center flex-column">
                            <div class="flex justify-content-between">
                                <div class="block-item w-6rem">
                                    <div class="flex justify-content-between">
                                        <div>
                                            <div class="bar w-2rem mt-2"></div>
                                            <div class="bar w-4rem mt-3"></div>
                                        </div>
                                        <div>
                                            <div class="flex-1">
                                                <div class="circle circle-highlight"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="block-item block-item-active animation-1 mx-3 w-6rem">
                                    <div class="flex justify-content-between">
                                        <div>
                                            <div class="bar w-2rem mt-2"></div>
                                            <div class="bar w-4rem mt-3"></div>
                                        </div>
                                        <div>
                                            <div class="circle"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="block-item w-6rem">
                                    <div class="flex justify-content-between">
                                        <div>
                                            <div class="bar w-2rem mt-2"></div>
                                            <div class="bar w-4rem mt-3"></div>
                                        </div>
                                        <div>
                                            <div class="circle circle-highligh"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-content-between mt-3">
                                <div class="block-item w-6rem">
                                    <div class="flex justify-content-between">
                                        <div>
                                            <div class="bar w-2rem mt-2"></div>
                                            <div class="bar w-4rem mt-3"></div>
                                        </div>
                                        <div>
                                            <div class="circle circle-highligh"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="block-item mx-3 w-6rem">
                                    <div class="flex justify-content-between">
                                        <div>
                                            <div class="bar w-2rem mt-2"></div>
                                            <div class="bar w-4rem mt-3"></div>
                                        </div>
                                        <div>
                                            <div class="circle circle-highligh"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="block-item w-6rem">
                                    <div class="flex justify-content-between">
                                        <div>
                                            <div class="bar w-2rem mt-2"></div>
                                            <div class="bar w-4rem mt-3"></div>
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
            <div class="flex -ml-8">
                <div class="prime-block p-1 flex align-self-stretch flex-column">
                    <div class="block-header py-3 px-4 flex justify-content-between align-items-center">
                        <div class="logo pr-5">
                            <img src="demo/images/landing/blocks/logo-1.svg" alt="block logo" />
                        </div>
                        <div class="flex-auto sidebar-menu flex">
                            <div class="bar w-2rem mx-2"></div>
                            <div class="bar w-2rem mx-2"></div>
                            <div class="bar w-2rem mx-2"></div>
                            <div class="bar w-2rem mx-2"></div>
                            <div class="bar w-2rem mx-2"></div>
                        </div>
                        <div class="circle circle-highlight"></div>
                    </div>
                    <div class="block-content flex-1 p-4 flex flex-column">
                        <div class="bar w-1"></div>
                        <div class="block-main mt-4 h-full flex justify-content-center align-items-center flex-column">
                            <div class="flex justify-content-between">
                                <div class="block-item w-4rem">
                                    <div class="bar w-2rem "></div>
                                    <span class="text my-2">26 %</span>
                                    <div class="box box-orange"></div>
                                </div>
                                <div class="block-item block-item-active animation-2 ml-3 mr-3 w-4rem">
                                    <div class="bar w-1rem"></div>
                                    <span class="text my-2">6 %</span>
                                    <div class="box box-pink"></div>
                                </div>
                                <div class="block-item mr-3 w-4rem">
                                    <div class="bar w-4rem "></div>
                                    <span class="text my-2">62 %</span>
                                    <div class="box box-green"></div>
                                </div>
                                <div class="block-item w-4rem">
                                    <div class="bar w-2rem "></div>
                                    <span class="text my-2">39 %</span>
                                    <div class="box box-blue"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="prime-block flex align-self-stretch p-1">
                    <div class="block-sidebar p-3">
                        <div class="logo">
                            <img src="demo/images/landing/blocks/logo-2.svg" alt="block logo" />
                        </div>
                        <div class="sidebar-menu mt-5">
                            <div class="circle my-3"></div>
                            <div class="circle my-3"></div>
                            <div class="circle my-3"></div>
                        </div>
                    </div>
                    <div class="block-sidebar-list px-4">
                        <div class="bar w-2rem my-3"></div>
                        <div class="bar w-3rem my-3"></div>
                        <div class="bar w-2rem my-3"></div>
                        <div class="bar w-2rem my-3"></div>
                        <div class="bar w-1rem my-3"></div>
                        <div class="bar w-3rem my-3"></div>
                        <div class="bar w-3rem my-3"></div>
                        <div class="bar w-2rem my-3"></div>
                    </div>
                    <div class="block-content flex-1 my-5 mx-4 flex flex-column">
                        <div class="block-main  h-full flex justify-content-center align-items-center flex-column px-2">
                            <div class="flex justify-content-between  ">
                                <div class="block-item  w-3 flex justify-content-between flex-column ">
                                    <div class="bar w-full "></div>
                                    <div class="flex align-items-center mt-3">
                                        <div class="circle circle-small circle-highlight mr-2"></div>
                                        <div class="bar w-2rem"></div>
                                    </div>
                                    <div class="bar bar-button w-4rem mt-4"></div>
                                </div>
                                <div class="block-item  block-item-active animation-3 mx-3 w-3 flex justify-content-between flex-column">
                                    <div class="bar w-full "></div>
                                    <div class="flex align-items-center mt-3">
                                        <div class="circle circle-small circle-highlight mr-2"></div>
                                        <div class="bar w-2rem"></div>
                                    </div>
                                    <div class="flex align-items-center mt-3">
                                        <div class="circle circle-small circle-highlight mr-2"></div>
                                        <div class="bar w-3rem"></div>
                                    </div>
                                    <div class="bar bar-button w-4rem mt-4"></div>
                                </div>
                                <div class="block-item  w-3 flex justify-content-between flex-column">
                                    <div class="bar w-full "></div>
                                    <div class="flex align-items-center mt-3">
                                        <div class="circle circle-small circle-highlight mr-2"></div>
                                        <div class="bar w-2rem"></div>
                                    </div>
                                    <div class="flex align-items-center mt-3">
                                        <div class="circle circle-small circle-highlight mr-2"></div>
                                        <div class="bar w-2rem"></div>
                                    </div>
                                    <div class="flex align-items-center mt-3">
                                        <div class="circle circle-small circle-highlight mr-2"></div>
                                        <div class="bar w-2rem"></div>
                                    </div>
                                    <div class="bar bar-button w-4rem mt-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex -mr-8">
                <div class="prime-block flex align-self-stretch p-1">
                    <div class="block-sidebar w-1 p-3">
                        <div class="logo">
                            <img src="demo/images/landing/blocks/logo-1.svg" alt="block logo" />
                        </div>
                        <div class="sidebar-menu mt-5">
                            <div class="bar w-8 my-3"></div>
                            <div class="bar w-9 my-3"></div>
                            <div class="bar w-7 my-3"></div>
                            <div class="bar w-6 my-3"></div>
                            <div class="bar w-9 my-3"></div>
                        </div>
                    </div>
                    <div class="block-content flex-1 p-4 flex flex-column">
                        <div class="block-main h-full flex justify-content-center align-items-center flex-column">
                            <div class="bar w-3 mb-3"></div>
                            <div class="bar w-4 mb-5"></div>
                            <div class="flex justify-content-between">
                                <div class="block-item w-6rem p-0">
                                    <div class="block-image"></div>
                                    <div class="p-2">
                                        <div>
                                            <div class="bar w-4rem my-2"></div>
                                            <div class="bar w-2rem mb-2"></div>
                                        </div>
                                        <div>
                                            <div class="flex-1">
                                                <div class="circle circle-highlight circle-medium"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="block-item block-item-active mx-3 animation-1  w-6rem p-0">
                                    <div class="block-image"></div>
                                    <div class="p-2">
                                        <div>
                                            <div class="bar w-4rem my-2"></div>
                                            <div class="bar w-2rem mb-2"></div>
                                        </div>
                                        <div>
                                            <div class="flex-1">
                                                <div class="circle circle-highlight circle-medium"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="block-item w-6rem p-0">
                                    <div class="block-image"></div>
                                    <div class="p-2">
                                        <div>
                                            <div class="bar w-4rem my-2"></div>
                                            <div class="bar w-2rem mb-2"></div>
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
                <div class="prime-block  flex align-self-stretch p-1">
                    <div class="block-sidebar p-3">
                        <div class="logo">
                            <img src="demo/images/landing/blocks/logo-2.svg" alt="block logo" />
                        </div>
                        <div class="sidebar-menu mt-5">
                            <div class="circle my-3"></div>
                            <div class="circle my-3"></div>
                            <div class="circle my-3"></div>
                        </div>
                    </div>
                    <div class="block-sidebar-list px-4">
                        <div class="bar w-2rem my-3"></div>
                        <div class="bar w-3rem my-3"></div>
                        <div class="bar w-2rem my-3"></div>
                        <div class="bar w-2rem my-3"></div>
                        <div class="bar w-1rem my-3"></div>
                        <div class="bar w-3rem my-3"></div>
                        <div class="bar w-3rem my-3"></div>
                        <div class="bar w-2rem my-3"></div>
                    </div>
                    <div class="block-content flex-1 my-5 mx-4 flex flex-column">
                        <div class="block-main  h-full flex justify-content-center align-items-center flex-column px-2">
                            <div class="flex justify-content-between">
                                <div class="block-item block-item-table block-item-active animation-1 flex ">
                                    <div class="bar w-3rem mx-3"></div>
                                    <div class="bar w-3rem mx-3"></div>
                                    <div class="bar w-3rem mx-3"></div>
                                    <div class="bar w-3rem mx-3"></div>
                                </div>
                            </div>
                            <div class="block-item block-item-col  flex ">
                                <div class="flex">
                                    <div class="circle circle-small circle-highlight -mr-1"></div>
                                    <div class="bar w-3rem mx-3"></div>
                                </div>
                                <div class="bar w-3rem mx-3"></div>
                                <div class="bar w-3rem mx-3"></div>
                                <div class="bar w-3rem mx-3"></div>
                            </div>
                            <div class="block-item block-item-col  flex ">
                                <div class="flex">
                                    <div class="circle circle-small circle-highlight -mr-1"></div>
                                    <div class="bar w-3rem mx-3"></div>
                                </div>
                                <div class="bar w-3rem mx-3"></div>
                                <div class="bar w-3rem mx-3"></div>
                                <div class="bar w-3rem mx-3"></div>
                            </div>
                            <div class="block-item block-item-col  flex ">
                                <div class="flex">
                                    <div class="circle circle-small circle-highlight -mr-1"></div>
                                    <div class="bar w-3rem mx-3"></div>
                                </div>
                                <div class="bar w-3rem mx-3"></div>
                                <div class="bar w-3rem mx-3"></div>
                                <div class="bar w-3rem mx-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex">
                <div class="prime-block p-1 flex align-self-stretch flex-column">
                    <div class="block-header py-3 px-4 flex justify-content-between align-items-center">
                        <div class="logo pr-5">
                            <img src="demo/images/landing/blocks/logo-1.svg" alt="block logo" />
                        </div>
                        <div class="flex-auto sidebar-menu flex">
                            <div class="bar w-2rem mx-2"></div>
                            <div class="bar w-2rem mx-2"></div>
                            <div class="bar w-2rem mx-2"></div>
                            <div class="bar w-2rem mx-2"></div>
                            <div class="bar w-2rem mx-2"></div>
                        </div>
                        <div class="circle"></div>
                    </div>
                    <div class="block-content flex-1 p-4 flex flex-column">
                        <div class="block-main h-full flex justify-content-center align-items-center flex-column">
                            <div class="block-item block-item-active animation-2 mx-3 w-8rem text-center flex flex-column align-items-center overflow-visible">
                                <div class="-mt-4">
                                    <img src="demo/images/landing/blocks/question.svg" alt="question mark" />
                                </div>
                                <div class="bar w-2rem mt-2"></div>
                                <div class="bar w-6rem mt-2"></div>
                                <div class="bar w-4rem mt-2"></div>
                                <div class="flex">
                                    <div class="bar bar-highlight bar-button w-4rem mr-2 mt-4"></div>
                                    <div class="bar bar-button w-4rem  mr-2 mt-4"></div>
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
        }
    },
    mounted() {
        this.setAnimation = true
    }
}
</script>