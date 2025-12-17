<template>
    <div>
        <Head>
            <Title>PrimeVue Roadmap</Title>
            <Meta name="description" content="PrimeVue Roadmap" />
        </Head>

        <div class="doc-intro">
            <h1>Roadmap</h1>
            <p>
                At <a href="https://www.primetek.com.tr/">PrimeTek</a>, we are passionate about improving PrimeVue and would like to share our ideas for 2026 (Year 8) with the community. These are planned to be implemented in parallel to the regular
                maintenance work of the library involving review of issue tickets, PRs and PrimeVue PRO support. Based on semantic versioning guidelines, PrimeVue updates will be backward compatible with a clear migration path when necessary.
            </p>
        </div>

        <div class="overflow-auto">
            <div style="min-width: 1200px">
                <div class="flex gap-4 mb-4">
                    <div class="shrink-0 w-56"></div>
                    <div class="flex-1 bg-gray-500 text-white font-bold text-center p-4 text-xl rounded">Q1</div>
                    <div class="flex-1 bg-gray-500 text-white font-bold text-center p-4 text-xl rounded">Q2</div>
                    <div class="flex-1 bg-gray-500 text-white font-bold text-center p-4 text-xl rounded">Q3</div>
                    <div class="flex-1 bg-gray-500 text-white font-bold text-center p-4 text-xl rounded">Q4</div>
                </div>

                <div class="flex flex-col gap-4">
                    <div class="flex gap-4 border-b border-surface-200 dark:border-surface-700 pb-4">
                        <div class="shrink-0 p-4 bg-blue-500 text-white rounded font-bold text-lg flex items-center justify-center w-56">COMPONENTS</div>
                        <div class="flex-1 flex gap-4 flex-col">
                            <div class="p-4 bg-surface-0 dark:bg-surface-900 rounded border-blue-500 border-l-4">
                                <h2 class="text-lg font-bold mt-0 mb-2">Component Updates</h2>
                                <p class="mt-0 leading-normal">Rewritten Menus, ColorPicker, Org Chart, Toast. Brand new CommandMenu component.</p>
                            </div>
                            <div class="p-4 bg-surface-0 dark:bg-surface-900 rounded border-blue-500 border-l-4">
                                <h2 class="text-lg font-bold mt-0 mb-2">PrimeUI+</h2>
                                <p class="mt-0 leading-normal">New TextEditor and Event Calendar components.</p>
                            </div>
                            <div class="p-4 bg-surface-0 dark:bg-surface-900 rounded border-blue-500 border-l-4">
                                <h2 class="text-lg font-bold mt-0 mb-2">Theming API Enhancements</h2>
                                <p class="mt-0 leading-normal">Significant performance and devex updates.</p>
                            </div>
                            <div class="p-4 bg-surface-0 dark:bg-surface-900 rounded border-blue-500 border-l-4">
                                <h2 class="text-lg font-bold mt-0 mb-2">Forms v2</h2>
                                <p class="mt-0 leading-normal">Enhanced forms based on community feedback.</p>
                            </div>
                            <div class="p-4 bg-surface-0 dark:bg-surface-900 rounded border-blue-500 border-l-4">
                                <h2 class="text-lg font-bold mt-0 mb-2">PrimeIcons Update</h2>
                                <p class="mt-0 leading-normal">100+ new icons.</p>
                            </div>
                        </div>
                        <div class="flex-1 flex gap-4 flex-col">
                            <div class="p-4 bg-surface-0 dark:bg-surface-900 rounded border-blue-500 border-l-4">
                                <h2 class="text-lg font-bold mt-0 mb-2">Migrate to Composition API</h2>
                                <p class="mt-0 leading-normal">Replace Options API based component implementation with Composition API.</p>
                            </div>
                            <div class="p-4 bg-surface-0 dark:bg-surface-900 rounded border-blue-500 border-l-4">
                                <h2 class="text-lg font-bold mt-0 mb-2">Migrate to Typescript</h2>
                                <p class="mt-0 leading-normal">Use Typescript instead of vanilla Javascript.</p>
                            </div>
                            <div class="p-4 bg-surface-0 dark:bg-surface-900 rounded border-blue-500 border-l-4">
                                <h2 class="text-lg font-bold mt-0 mb-2">PrimeUI+</h2>
                                <p class="mt-0 leading-normal">PrimeCharts, Advanced DataGrid, PDF Viewer and Gantt Chart.</p>
                            </div>
                        </div>
                        <div class="flex-1 flex gap-4 flex-col">
                            <div class="p-4 bg-surface-0 dark:bg-surface-900 rounded border-blue-500 border-l-4">
                                <h2 class="text-lg font-bold mt-0 mb-2">PrimeUI+</h2>
                                <p class="mt-0 leading-normal">Timeline, Diagram and File Manager.</p>
                            </div>
                        </div>
                        <div class="flex-1 flex gap-4 flex-col"></div>
                    </div>
                    <div class="flex gap-4 border-b border-surface-200 dark:border-surface-700 pb-4">
                        <div class="shrink-0 p-4 bg-indigo-500 text-white rounded font-bold text-lg flex items-center justify-center w-56">FIGMA UI KIT</div>
                        <div class="flex-1 flex gap-4 flex-col">
                            <div class="p-4 bg-surface-0 dark:bg-surface-900 rounded border-indigo-500 border-l-4">
                                <h2 class="text-lg font-bold mt-0 mb-2">UI Kit v4</h2>
                                <p class="mt-0 leading-normal">Migration from Tokens Studio to Figma Variables.</p>
                            </div>
                        </div>
                        <div class="flex-1 flex gap-4 flex-col">
                            <div class="p-4 bg-surface-0 dark:bg-surface-900 rounded border-indigo-500 border-l-4">
                                <h2 class="text-lg font-bold mt-0 mb-2">New Design Tokens</h2>
                                <p class="mt-0 leading-normal">New tokens such as typography and spacing.</p>
                            </div>
                        </div>
                        <div class="flex-1 flex gap-4 flex-col"></div>
                        <div class="flex-1 flex gap-4 flex-col"></div>
                    </div>

                    <div class="flex gap-4 border-b border-surface-200 dark:border-surface-700 pb-4">
                        <div class="shrink-0 p-4 bg-violet-500 text-white rounded font-bold text-lg flex items-center justify-center w-56">TEMPLATES</div>
                        <div class="flex-1 flex gap-4 flex-col">
                            <div class="p-4 bg-surface-0 dark:bg-surface-900 rounded border-violet-500 border-l-4">
                                <h2 class="text-lg font-bold mt-0 mb-2">Maintenance and Quality</h2>
                                <p class="mt-0 leading-normal">Focus on improving the quality with maintenance updates.</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-4 border-b border-surface-200 dark:border-surface-700 pb-4">
                        <div class="shrink-0 p-4 bg-orange-500 text-white rounded font-bold text-lg flex items-center justify-center w-56">PrimeBlocks</div>
                        <div class="flex-1 flex gap-4 flex-col">
                            <div class="p-4 bg-surface-0 dark:bg-surface-900 rounded border-orange-500 border-l-4">
                                <h2 class="text-lg font-bold mt-0 mb-2">Maintenance and Quality</h2>
                                <p class="mt-0 leading-normal">Focus on improving the quality with maintenance updates.</p>
                            </div>
                        </div>
                        <div class="flex-1 flex gap-4 flex-col">
                            <div class="p-4 bg-surface-0 dark:bg-surface-900 rounded border-orange-500 border-l-4">
                                <h2 class="text-lg font-bold mt-0 mb-2">Block Builder</h2>
                                <p class="mt-0 leading-normal">AI Based PrimeBlock builder.</p>
                            </div>
                        </div>
                        <div class="flex-1 flex gap-4 flex-col"></div>
                        <div class="flex-1 flex gap-4 flex-col"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
