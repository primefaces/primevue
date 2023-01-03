<template>
    <div>
        <Head>
            <Title>Vue Roadmap</Title>
            <Meta
                name="description"
                content="These are planned to be implemented in parellel to the regular
                    maintenance work of the PrimeVue library"
            />
        </Head>

        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Roadmap</h1>
                <p>
                    At <a href="https://www.primetek.com.tr/">PrimeTek</a>, we are passionate about improving PrimeVue and would like to share our ideas for 2023 with the community. These are planned to be implemented in parallel to the regular
                    maintenance work of the library involving review of issue tickets, PRs and PrimeVue PRO support. This page is updated on changes so please visit it to learn more about what is coming up next.
                </p>
            </div>
        </div>

        <div class="content-section">
            <div class="overflow-auto">
                <div style="min-width: 1200px">
                    <div class="flex gap-3 mb-3">
                        <div class="flex-shrink-0 w-14rem"></div>
                        <div class="flex-1 bg-bluegray-500 text-white font-bold text-center p-3 text-xl border-round">Q1</div>
                        <div class="flex-1 bg-bluegray-500 text-white font-bold text-center p-3 text-xl border-round">Q2</div>
                        <div class="flex-1 bg-bluegray-500 text-white font-bold text-center p-3 text-xl border-round">Q3</div>
                        <div class="flex-1 bg-bluegray-500 text-white font-bold text-center p-3 text-xl border-round">Q4</div>
                    </div>
                    <div class="flex flex-column gap-3">
                        <div class="flex gap-3 border-bottom-1 surface-border pb-3">
                            <div class="flex-shrink-0 p-3 bg-blue-500 text-white border-round font-bold text-lg flex align-items-center justify-content-center w-14rem">COMPONENTS</div>
                            <div class="flex-1 flex gap-3 flex-column">
                                <div class="p-3 surface-card border-round border-blue-500" style="border-left: 6px solid">
                                    <h2 class="text-lg font-bold mt-0 mb-2">Accessibility</h2>
                                    <p class="mt-0 mb-3 line-height-3">Finalize WCAG Level AA compliance for all components with screen reader and keyboard support based on community feedback and audit tools.</p>
                                    <div class="surface-200 border-round">
                                        <div class="bg-blue-500 border-round" style="width: 95%; height: 4px"></div>
                                    </div>
                                </div>
                                <div class="p-3 surface-card border-round border-blue-500" style="border-left: 6px solid">
                                    <h2 class="text-lg font-bold mt-0 mb-2">Unstyled Mode</h2>
                                    <p class="mt-0 mb-3 line-height-3">Initated the implementation of Unstyled Mode to support libraries like Tailwind.</p>
                                    <div class="surface-200 border-round">
                                        <div class="bg-blue-500 border-round" style="width: 0%; height: 4px"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-1 flex gap-3 flex-column">
                                <div class="p-3 surface-card border-round border-blue-500" style="border-left: 6px solid">
                                    <h2 class="text-lg font-bold mt-0 mb-2">Testing</h2>
                                    <p class="mt-0 mb-3 line-height-3">Increase unit test coverage.</p>
                                    <div class="surface-200 border-round">
                                        <div class="bg-blue-500 border-round" style="width: 0%; height: 4px"></div>
                                    </div>
                                </div>
                                <div class="p-3 surface-card border-round border-blue-500" style="border-left: 6px solid">
                                    <h2 class="text-lg font-bold mt-0 mb-2">Unstyled Mode</h2>
                                    <p class="mt-0 mb-3 line-height-3">Completed unstyled mode for all components.</p>
                                    <div class="surface-200 border-round">
                                        <div class="bg-blue-500 border-round" style="width: 0%; height: 4px"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-1 flex gap-3 flex-column">
                                <div class="p-3 surface-card border-round border-blue-500" style="border-left: 6px solid">
                                    <h2 class="text-lg font-bold mt-0 mb-2">DragDrop Utils</h2>
                                    <p class="mt-0 mb-3 line-height-3">Standalone Drag and Drop utilities that are also integrated within certain components e.g. Tree.</p>
                                    <div class="surface-200 border-round">
                                        <div class="bg-blue-500 border-round" style="width: 0%; height: 4px"></div>
                                    </div>
                                </div>
                                <div class="p-3 surface-card border-round border-blue-500" style="border-left: 6px solid">
                                    <h2 class="text-lg font-bold mt-0 mb-2">Full Calendar</h2>
                                    <p class="mt-0 mb-3 line-height-3">New Full Calendar / Scheduler component.</p>
                                    <div class="surface-200 border-round">
                                        <div class="bg-blue-500 border-round" style="width: 0%; height: 4px"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-1 flex gap-3 flex-column"></div>
                        </div>
                        <div class="flex gap-3 border-bottom-1 surface-border pb-3">
                            <div class="flex-shrink-0 p-3 bg-indigo-500 text-white border-round font-bold text-lg flex align-items-center justify-content-center w-14rem">Figma UI Kit</div>
                            <div class="flex-1 flex gap-3 flex-column">
                                <div class="p-3 surface-card border-round border-indigo-500" style="border-left: 6px solid">
                                    <h2 class="text-lg font-bold mt-0 mb-2">Tokens</h2>
                                    <p class="mt-0 mb-3 line-height-3">Add support for Figma Tokens.</p>
                                    <div class="surface-200 border-round">
                                        <div class="bg-indigo-500 border-round" style="width: 0%; height: 4px"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-1 flex gap-3 flex-column">
                                <div class="p-3 surface-card border-round border-bluegray-500" style="border-left: 6px solid">
                                    <h2 class="text-lg font-bold mt-0 mb-2">Theme Generator</h2>
                                    <p class="mt-0 mb-3 line-height-3">Create a Figma Plugin to generate themes from Figma.</p>
                                    <div class="surface-200 border-round">
                                        <div class="bg-bluegray-500 border-round" style="width: 0%; height: 4px"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-1 flex gap-3 flex-column"></div>
                            <div class="flex-1 flex gap-3 flex-column"></div>
                        </div>
                        <div class="flex gap-3 border-bottom-1 surface-border pb-3">
                            <div class="flex-shrink-0 p-3 bg-teal-500 text-white border-round font-bold text-lg flex align-items-center justify-content-center w-14rem">SHOWCASE</div>
                            <div class="flex-1 flex gap-3 flex-column">
                                <div class="p-3 surface-card border-round border-teal-500" style="border-left: 6px solid">
                                    <h2 class="text-lg font-bold mt-0 mb-2">Nuxt</h2>
                                    <p class="mt-0 mb-3 line-height-3">Migrate showcase application to Nuxt for SSR.</p>
                                    <div class="surface-200 border-round">
                                        <div class="bg-teal-500 border-round" style="width: 0%; height: 4px"></div>
                                    </div>
                                </div>
                                <div class="p-3 surface-card border-round border-teal-500" style="border-left: 6px solid">
                                    <h2 class="text-lg font-bold mt-0 mb-2">Demos</h2>
                                    <p class="mt-0 mb-3 line-height-3">Standalone demos for each component feature instead of one demo page that demonstrates multiple features.</p>
                                    <div class="surface-200 border-round">
                                        <div class="bg-teal-500 border-round" style="width: 0%; height: 4px"></div>
                                    </div>
                                </div>
                                <div class="p-3 surface-card border-round border-teal-500" style="border-left: 6px solid">
                                    <h2 class="text-lg font-bold mt-0 mb-2">Documentation</h2>
                                    <p class="mt-0 mb-3 line-height-3">New component API docs generated by TSDoc.</p>
                                    <div class="surface-200 border-round">
                                        <div class="bg-teal-500 border-round" style="width: 0%; height: 4px"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-1 flex gap-3 flex-column"></div>
                            <div class="flex-1 flex gap-3 flex-column"></div>
                            <div class="flex-1 flex gap-3 flex-column"></div>
                        </div>
                        <div class="flex gap-3 border-bottom-1 surface-border pb-3">
                            <div class="flex-shrink-0 p-3 bg-orange-500 text-white border-round font-bold text-lg flex align-items-center justify-content-center w-14rem">PrimeBlocks</div>
                            <div class="flex-1 flex gap-3 flex-column">
                                <div class="p-3 surface-card border-round border-orange-500" style="border-left: 6px solid">
                                    <h2 class="text-lg font-bold mt-0 mb-2">Blocks Update</h2>
                                    <p class="mt-0 mb-3 line-height-3">30+ new UI Blocks.</p>
                                    <div class="surface-200 border-round">
                                        <div class="bg-orange-500 border-round" style="width: 0%; height: 4px"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-1 flex gap-3 flex-column">
                                <div class="p-3 surface-card border-round border-orange-500" style="border-left: 6px solid">
                                    <h2 class="text-lg font-bold mt-0 mb-2">Blocks Update</h2>
                                    <p class="mt-0 mb-3 line-height-3">New UI Blocks.</p>
                                    <div class="surface-200 border-round">
                                        <div class="bg-orange-500 border-round" style="width: 0%; height: 4px"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-1 flex gap-3 flex-column">
                                <div class="p-3 surface-card border-round border-orange-500" style="border-left: 6px solid">
                                    <h2 class="text-lg font-bold mt-0 mb-2">Blocks Update</h2>
                                    <p class="mt-0 mb-3 line-height-3">New UI Blocks.</p>
                                    <div class="surface-200 border-round">
                                        <div class="bg-orange-500 border-round" style="width: 0%; height: 4px"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-1 flex gap-3 flex-column">
                                <div class="p-3 surface-card border-round border-orange-500" style="border-left: 6px solid">
                                    <h2 class="text-lg font-bold mt-0 mb-2">Blocks Update</h2>
                                    <p class="mt-0 mb-3 line-height-3">New UI Blocks.</p>
                                    <div class="surface-200 border-round">
                                        <div class="bg-orange-500 border-round" style="width: 0%; height: 4px"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex gap-3 border-bottom-1 surface-border pb-3">
                            <div class="flex-shrink-0 p-3 bg-pink-500 text-white border-round font-bold text-lg flex align-items-center justify-content-center w-14rem">Designer</div>
                            <div class="flex-1 flex gap-3 flex-column">
                                <div class="p-3 surface-card border-round border-pink-500" style="border-left: 6px solid">
                                    <h2 class="text-lg font-bold mt-0 mb-2">New Free Theme</h2>
                                    <p class="mt-0 mb-3 line-height-3">A brand new theme with dark mode alternative.</p>
                                    <div class="surface-200 border-round">
                                        <div class="bg-pink-500 border-round" style="width: 0%; height: 4px"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-1 flex gap-3 flex-column">
                                <div class="p-3 surface-card border-round border-pink-500" style="border-left: 6px solid">
                                    <h2 class="text-lg font-bold mt-0 mb-2">Figma Plugin Compatibility</h2>
                                    <p class="mt-0 mb-3 line-height-3">Online service to the Figma UI Kit to generate themes from Figma.</p>
                                    <div class="surface-200 border-round">
                                        <div class="bg-pink-500 border-round" style="width: 0%; height: 4px"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-1 flex gap-3 flex-column"></div>
                            <div class="flex-1 flex gap-3 flex-column"></div>
                        </div>
                        <div class="flex gap-3 border-bottom-1 surface-border pb-3">
                            <div class="flex-shrink-0 p-3 bg-purple-500 text-white border-round font-bold text-lg flex align-items-center justify-content-center w-14rem">Templates</div>
                            <div class="flex-1 flex gap-3 flex-column">
                                <div class="p-3 surface-card border-round border-purple-500" style="border-left: 6px solid">
                                    <h2 class="text-lg font-bold mt-0 mb-2">Apollo</h2>
                                    <p class="mt-0 mb-3 line-height-3">Port Apollo from PrimeNG using Vite.</p>
                                    <div class="surface-200 border-round">
                                        <div class="bg-purple-500 border-round" style="width: 0%; height: 4px"></div>
                                    </div>
                                </div>
                                <div class="p-3 surface-card border-round border-purple-500" style="border-left: 6px solid">
                                    <h2 class="text-lg font-bold mt-0 mb-2">Migrate to Vite</h2>
                                    <p class="mt-0 mb-3 line-height-3">Initiate migration of templates to Vite.</p>
                                    <div class="surface-200 border-round">
                                        <div class="bg-purple-500 border-round" style="width: 0%; height: 4px"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-1 flex gap-3 flex-column">
                                <div class="p-3 surface-card border-round border-purple-500" style="border-left: 6px solid">
                                    <h2 class="text-lg font-bold mt-0 mb-2">Migrate to Vite</h2>
                                    <p class="mt-0 mb-3 line-height-3">Continue migration of templates to Vite.</p>
                                    <div class="surface-200 border-round">
                                        <div class="bg-purple-500 border-round" style="width: 0%; height: 4px"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-1 flex gap-3 flex-column"></div>
                            <div class="flex-1 flex gap-3 flex-column"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
