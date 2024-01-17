<template>
    <div>
        <Head>
            <Title>PrimeVue Roadmap</Title>
            <Meta name="description" content="PrimeVue Roadmap" />
        </Head>

        <div class="doc-intro">
            <h1>Roadmap</h1>
            <p>
                At <a href="https://www.primetek.com.tr/">PrimeTek</a>, we are passionate about improving PrimeVue and would like to share our ideas for 2024 with the community. These are planned to be implemented in parallel to the regular
                maintenance work of the library involving review of issue tickets, PRs and PrimeVue PRO support.
            </p>
        </div>

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
                                <h2 class="text-lg font-bold mt-0 mb-2">New Styled Mode</h2>
                                <p class="mt-0 mb-3 line-height-3">Move theming into core to replace sass repo.</p>
                                <div class="surface-200 border-round">
                                    <div class="bg-blue-500 border-round" style="width: 25%; height: 4px"></div>
                                </div>
                            </div>
                            <div class="p-3 surface-card border-round border-blue-500" style="border-left: 6px solid">
                                <h2 class="text-lg font-bold mt-0 mb-2">CSS Variables</h2>
                                <p class="mt-0 mb-3 line-height-3">Implement figma design tokens as CSS variables instead of SCSS.</p>
                                <div class="surface-200 border-round">
                                    <div class="bg-blue-500 border-round" style="width: 25%; height: 4px"></div>
                                </div>
                            </div>
                            <div class="p-3 surface-card border-round border-blue-500" style="border-left: 6px solid">
                                <h2 class="text-lg font-bold mt-0 mb-2">Tailwind CSS Presets</h2>
                                <p class="mt-0 mb-3 line-height-3">Provide presets for the entire UI suite.</p>
                                <div class="surface-200 border-round">
                                    <div class="bg-blue-500 border-round" style="width: 50%; height: 4px"></div>
                                </div>
                            </div>
                            <div class="p-3 surface-card border-round border-blue-500" style="border-left: 6px solid">
                                <h2 class="text-lg font-bold mt-0 mb-2">New Components</h2>
                                <p class="mt-0 mb-3 line-height-3">Layout components, Typography, Meter, Drawer, Content for Steps...</p>
                                <div class="surface-200 border-round">
                                    <div class="bg-blue-500 border-round" style="width: 0%; height: 4px"></div>
                                </div>
                            </div>
                            <div class="p-3 surface-card border-round border-blue-500" style="border-left: 6px solid">
                                <h2 class="text-lg font-bold mt-0 mb-2">Form States</h2>
                                <p class="mt-0 mb-3 line-height-3">Add filled and invalid props to form components.</p>
                                <div class="surface-200 border-round">
                                    <div class="bg-blue-500 border-round" style="width: 0%; height: 4px"></div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-1 flex gap-3 flex-column">
                            <div class="p-3 surface-card border-round border-blue-500" style="border-left: 6px solid">
                                <h2 class="text-lg font-bold mt-0 mb-2">RTL Mode</h2>
                                <p class="mt-0 mb-3 line-height-3">RTL support for the UI components.</p>
                                <div class="surface-200 border-round">
                                    <div class="bg-blue-500 border-round" style="width: 0%; height: 4px"></div>
                                </div>
                            </div>
                            <div class="p-3 surface-card border-round border-blue-500" style="border-left: 6px solid">
                                <h2 class="text-lg font-bold mt-0 mb-2">Drag Drop Utils</h2>
                                <p class="mt-0 mb-3 line-height-3">Drag and Drop utilities.</p>
                                <div class="surface-200 border-round">
                                    <div class="bg-blue-500 border-round" style="width: 0%; height: 4px"></div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-1 flex gap-3 flex-column">
                            <div class="p-3 surface-card border-round border-blue-500" style="border-left: 6px solid">
                                <h2 class="text-lg font-bold mt-0 mb-2">Advanced Components</h2>
                                <p class="mt-0 mb-3 line-height-3">Sheet, Event Calendar.</p>
                                <div class="surface-200 border-round">
                                    <div class="bg-blue-500 border-round" style="width: 0%; height: 4px"></div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-1 flex gap-3 flex-column">
                            <div class="p-3 surface-card border-round border-blue-500" style="border-left: 6px solid">
                                <h2 class="text-lg font-bold mt-0 mb-2">Advanced Components</h2>
                                <p class="mt-0 mb-3 line-height-3">Gantt Chart, Flow Chart.</p>
                                <div class="surface-200 border-round">
                                    <div class="bg-blue-500 border-round" style="width: 0%; height: 4px"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-3 border-bottom-1 surface-border pb-3">
                        <div class="flex-shrink-0 p-3 bg-indigo-500 text-white border-round font-bold text-lg flex align-items-center justify-content-center w-14rem">Figma UI Kit</div>
                        <div class="flex-1 flex gap-3 flex-column">
                            <div class="p-3 surface-card border-round border-indigo-500" style="border-left: 6px solid">
                                <h2 class="text-lg font-bold mt-0 mb-2">New Figma Tokens</h2>
                                <p class="mt-0 mb-3 line-height-3">Update tokens to sync with the new styled mode.</p>
                                <div class="surface-200 border-round">
                                    <div class="bg-indigo-500 border-round" style="width: 25%; height: 4px"></div>
                                </div>
                            </div>
                            <div class="p-3 surface-card border-round border-indigo-500" style="border-left: 6px solid">
                                <h2 class="text-lg font-bold mt-0 mb-2">Figma to Theme API</h2>
                                <p class="mt-0 mb-3 line-height-3">Build the infrastructure to generate themes from Figma.</p>
                                <div class="surface-200 border-round">
                                    <div class="bg-indigo-500 border-round" style="width: 0%; height: 4px"></div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-1 flex gap-3 flex-column"></div>
                        <div class="flex-1 flex gap-3 flex-column"></div>
                        <div class="flex-1 flex gap-3 flex-column"></div>
                    </div>
                    <div class="flex gap-3 border-bottom-1 surface-border pb-3">
                        <div class="flex-shrink-0 p-3 bg-teal-500 text-white border-round font-bold text-lg flex align-items-center justify-content-center w-14rem">SHOWCASE</div>
                        <div class="flex-1 flex gap-3 flex-column">
                            <div class="p-3 surface-card border-round border-teal-500" style="border-left: 6px solid">
                                <h2 class="text-lg font-bold mt-0 mb-2">Documentation</h2>
                                <p class="mt-0 mb-3 line-height-3">Add server backed data samples for data driven examples e.g. VirtualScroll, Lazy.</p>
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
                                <p class="mt-0 mb-3 line-height-3">Add 80+ New Blocks.</p>
                                <div class="surface-200 border-round">
                                    <div class="bg-orange-500 border-round" style="width: 20%; height: 4px"></div>
                                </div>
                            </div>
                            <div class="p-3 surface-card border-round border-orange-500" style="border-left: 6px solid">
                                <h2 class="text-lg font-bold mt-0 mb-2">Tailwind Blocks</h2>
                                <p class="mt-0 mb-3 line-height-3">Port the entire Blocks to Tailwind.</p>
                                <div class="surface-200 border-round">
                                    <div class="bg-orange-500 border-round" style="width: 0%; height: 4px"></div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-1 flex gap-3 flex-column">
                            <div class="p-3 surface-card border-round border-orange-500" style="border-left: 6px solid">
                                <h2 class="text-lg font-bold mt-0 mb-2">Online App</h2>
                                <p class="mt-0 mb-3 line-height-3">Implement a SaaS app to access the blocks instead of an offline download.</p>
                                <div class="surface-200 border-round">
                                    <div class="bg-orange-500 border-round" style="width: 0%; height: 4px"></div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-1 flex gap-3 flex-column"></div>
                        <div class="flex-1 flex gap-3 flex-column"></div>
                    </div>
                    <div class="flex gap-3 border-bottom-1 surface-border pb-3">
                        <div class="flex-shrink-0 p-3 bg-pink-500 text-white border-round font-bold text-lg flex align-items-center justify-content-center w-14rem">Design</div>
                        <div class="flex-1 flex gap-3 flex-column">
                            <div class="p-3 surface-card border-round border-pink-500" style="border-left: 6px solid">
                                <h2 class="text-lg font-bold mt-0 mb-2">New UI Theme</h2>
                                <p class="mt-0 mb-3 line-height-3">Brand new default theme with a modern and attractive design.</p>
                                <div class="surface-200 border-round">
                                    <div class="bg-pink-500 border-round" style="width: 0%; height: 4px"></div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-1 flex gap-3 flex-column">
                            <div class="p-3 surface-card border-round border-pink-500" style="border-left: 6px solid">
                                <h2 class="text-lg font-bold mt-0 mb-2">New UI Based Theme Editor</h2>
                                <p class="mt-0 mb-3 line-height-3">Advanced Theme Editor App with full control over the new Styled Theming API.</p>
                                <div class="surface-200 border-round">
                                    <div class="bg-pink-500 border-round" style="width: 0%; height: 4px"></div>
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
</template>
