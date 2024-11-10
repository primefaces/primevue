<template>
    <Drawer v-model:visible="$appState.designerActive" header="Theme Designer" position="right" class="!w-screen md:!w-[60rem]" :modal="false">
        <Tabs value="0">
            <TabList>
                <Tab value="0">Primitive</Tab>
                <Tab value="1">Semantic</Tab>
                <Tab value="2">Component</Tab>
            </TabList>
            <TabPanels class="!px-0">
                <TabPanel value="0">
                    <Fieldset legend="Rounded" :toggleable="true" class="mb-3">
                        <section class="grid grid-cols-4 mb-3 gap-2">
                            <div class="flex flex-col gap-1">
                                <span class="text-sm">none</span>
                                <input v-model="preset.primitive.borderRadius.none" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                            </div>
                            <div class="flex flex-col gap-1">
                                <span class="text-sm">xs</span>
                                <input v-model="preset.primitive.borderRadius.xs" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                            </div>
                            <div class="flex flex-col gap-1">
                                <span class="text-sm">sm</span>
                                <input v-model="preset.primitive.borderRadius.sm" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                            </div>
                            <div class="flex flex-col gap-1">
                                <span class="text-sm">md</span>
                                <input v-model="preset.primitive.borderRadius.md" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                            </div>
                            <div class="flex flex-col gap-1">
                                <span class="text-sm">lg</span>
                                <input v-model="preset.primitive.borderRadius.lg" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                            </div>
                            <div class="flex flex-col gap-1">
                                <span class="text-sm">xl</span>
                                <input v-model="preset.primitive.borderRadius.xl" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                            </div>
                        </section>
                    </Fieldset>
                    <Fieldset legend="Colors" :toggleable="true">
                        <template v-for="(value, key) of preset.primitive" :key="key">
                            <section v-if="key !== 'borderRadius'" class="flex justify-between items-center mb-4">
                                <div class="flex gap-2 items-center">
                                    <span class="text-sm capitalize block w-20">{{ key }}</span>
                                    <input :value="preset.primitive[key]['500']" @input="onPrimitiveColorChange($event, key)" type="color" />
                                </div>
                                <div class="flex border border-surface">
                                    <div v-for="color of preset.primitive[key]" :key="color" class="w-4 h-4 sm:w-8 sm:h-8" :style="{ backgroundColor: color }" :title="color"></div>
                                </div>
                            </section>
                        </template>
                    </Fieldset>
                </TabPanel>
                <TabPanel value="1">
                    <Accordion :value="['0', '1']" multiple>
                        <AccordionPanel value="0">
                            <AccordionHeader>Common</AccordionHeader>
                            <AccordionContent>
                                <Fieldset legend="General" :toggleable="true" class="mb-3">
                                    <section class="flex justify-between items-center mb-4">
                                        <div class="flex gap-2 items-center">
                                            <span class="text-sm">Primary</span>
                                            <input :value="preset.semantic.primary['500']" @input="onPrimaryColorChange($event)" type="color" />
                                        </div>
                                        <div class="flex border border-surface">
                                            <div v-for="color of preset.semantic.primary" :key="color" class="w-4 h-4 sm:w-8 sm:h-8" :style="{ backgroundColor: color }" :title="color"></div>
                                        </div>
                                    </section>
                                    <section class="grid grid-cols-4 mb-3 gap-2">
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Transition Duration</span>
                                            <input v-model="preset.semantic.transitionDuration" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Disabled Opacity</span>
                                            <input v-model="preset.semantic.disabledOpacity" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Icon Size</span>
                                            <input v-model="preset.semantic.iconSize" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Anchor Gutter</span>
                                            <input v-model="preset.semantic.anchorGutter" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Border Radius</span>
                                            <input v-model="preset.semantic.content.borderRadius" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Mask Transition Duration</span>
                                            <input v-model="preset.semantic.mask.transitionDuration" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1"></div>
                                        <div class="flex flex-col gap-1"></div>
                                    </section>

                                    <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Focus Ring</div>
                                    <section class="grid grid-cols-4 gap-2">
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Width</span>
                                            <input v-model="preset.semantic.focusRing.width" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Style</span>
                                            <input v-model="preset.semantic.focusRing.style" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Color</span>
                                            <input v-model="preset.semantic.focusRing.color" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Offset</span>
                                            <input v-model="preset.semantic.focusRing.offset" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                    </section>
                                </Fieldset>

                                <Fieldset legend="Form Field" :toggleable="true" class="mb-3">
                                    <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Base</div>
                                    <section class="grid grid-cols-4 mb-3 gap-2">
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Padding X</span>
                                            <input v-model="preset.semantic.formField.paddingX" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Padding Y</span>
                                            <input v-model="preset.semantic.formField.paddingY" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Border Radius</span>
                                            <input v-model="preset.semantic.formField.borderRadius" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Transition Duration</span>
                                            <input v-model="preset.semantic.formField.transitionDuration" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                    </section>

                                    <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Small</div>
                                    <section class="grid grid-cols-4 mb-3 gap-2">
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Padding X</span>
                                            <input v-model="preset.semantic.formField.sm.paddingX" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Padding Y</span>
                                            <input v-model="preset.semantic.formField.sm.paddingY" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Font Size</span>
                                            <input v-model="preset.semantic.formField.sm.fontSize" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div></div>
                                    </section>

                                    <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Large</div>
                                    <section class="grid grid-cols-4 mb-3 gap-2">
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Padding X</span>
                                            <input v-model="preset.semantic.formField.lg.paddingX" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Padding Y</span>
                                            <input v-model="preset.semantic.formField.lg.paddingY" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Font Size</span>
                                            <input v-model="preset.semantic.formField.lg.fontSize" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div></div>
                                    </section>

                                    <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Focus Ring</div>
                                    <section class="grid grid-cols-4 gap-2">
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Width</span>
                                            <input v-model="preset.semantic.formField.focusRing.width" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Style</span>
                                            <input v-model="preset.semantic.formField.focusRing.style" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Color</span>
                                            <input v-model="preset.semantic.formField.focusRing.color" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Offset</span>
                                            <input v-model="preset.semantic.formField.focusRing.offset" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                    </section>
                                </Fieldset>

                                <Fieldset legend="List" :toggleable="true" class="mb-3">
                                    <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Container</div>
                                    <section class="grid grid-cols-4 mb-3 gap-2">
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Padding</span>
                                            <input v-model="preset.semantic.list.padding" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Gap</span>
                                            <input v-model="preset.semantic.list.gap" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Header Padding</span>
                                            <input v-model="preset.semantic.list.header.padding" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1"></div>
                                    </section>

                                    <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Option</div>
                                    <section class="grid grid-cols-4 mb-3 gap-2">
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Padding</span>
                                            <input v-model="preset.semantic.list.option.padding" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Border Radius</span>
                                            <input v-model="preset.semantic.list.option.borderRadius" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                    </section>

                                    <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Option Group</div>
                                    <section class="grid grid-cols-4 gap-2">
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Padding</span>
                                            <input v-model="preset.semantic.list.optionGroup.padding" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Font Weight</span>
                                            <input v-model="preset.semantic.list.optionGroup.fontWeight" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                    </section>
                                </Fieldset>

                                <Fieldset legend="Navigation" :toggleable="true" class="mb-3">
                                    <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">List</div>
                                    <section class="grid grid-cols-4 mb-3 gap-2">
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Padding</span>
                                            <input v-model="preset.semantic.navigation.list.padding" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Gap</span>
                                            <input v-model="preset.semantic.navigation.list.gap" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1"></div>
                                        <div class="flex flex-col gap-1"></div>
                                    </section>

                                    <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Item</div>
                                    <section class="grid grid-cols-4 mb-3 gap-2">
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Padding</span>
                                            <input v-model="preset.semantic.navigation.item.padding" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Border Radius</span>
                                            <input v-model="preset.semantic.navigation.item.borderRadius" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Gap</span>
                                            <input v-model="preset.semantic.navigation.item.gap" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1"></div>
                                    </section>

                                    <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Submenu Label</div>
                                    <section class="grid grid-cols-4 mb-3 gap-2">
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Padding</span>
                                            <input v-model="preset.semantic.navigation.submenuLabel.padding" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Font Weight</span>
                                            <input v-model="preset.semantic.navigation.submenuLabel.fontWeight" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1"></div>
                                        <div class="flex flex-col gap-1"></div>
                                    </section>

                                    <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Submenu Icon</div>
                                    <section class="grid grid-cols-4 gap-2">
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Size</span>
                                            <input v-model="preset.semantic.navigation.submenuIcon.size" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1"></div>
                                        <div class="flex flex-col gap-1"></div>
                                        <div class="flex flex-col gap-1"></div>
                                    </section>
                                </Fieldset>

                                <Fieldset legend="Overlay" :toggleable="true" class="mb-3">
                                    <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Select</div>
                                    <section class="grid grid-cols-4 mb-3 gap-2">
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Border Radius</span>
                                            <input v-model="preset.semantic.overlay.select.borderRadius" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Shadow</span>
                                            <input v-model="preset.semantic.overlay.select.shadow" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1"></div>
                                        <div class="flex flex-col gap-1"></div>
                                    </section>

                                    <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Popover</div>
                                    <section class="grid grid-cols-4 mb-3 gap-2">
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Border Radius</span>
                                            <input v-model="preset.semantic.overlay.popover.borderRadius" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Padding</span>
                                            <input v-model="preset.semantic.overlay.popover.padding" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Shadow</span>
                                            <input v-model="preset.semantic.overlay.popover.shadow" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1"></div>
                                    </section>

                                    <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Modal</div>
                                    <section class="grid grid-cols-4 mb-3 gap-2">
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Border Radius</span>
                                            <input v-model="preset.semantic.overlay.modal.borderRadius" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Padding</span>
                                            <input v-model="preset.semantic.overlay.modal.padding" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Shadow</span>
                                            <input v-model="preset.semantic.overlay.modal.shadow" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1"></div>
                                    </section>

                                    <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Navigation</div>
                                    <section class="grid grid-cols-4 gap-2">
                                        <div class="flex flex-col gap-1">
                                            <span class="text-sm">Shadow</span>
                                            <input v-model="preset.semantic.overlay.navigation.shadow" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                        </div>
                                        <div class="flex flex-col gap-1"></div>
                                        <div class="flex flex-col gap-1"></div>
                                        <div class="flex flex-col gap-1"></div>
                                    </section>
                                </Fieldset>
                            </AccordionContent>
                        </AccordionPanel>

                        <AccordionPanel value="1">
                            <AccordionHeader>Color Scheme</AccordionHeader>
                            <AccordionContent>
                                <Tabs value="cs-0">
                                    <TabList>
                                        <Tab value="cs-0">Light</Tab>
                                        <Tab value="cs-1">Dark</Tab>
                                    </TabList>
                                    <TabPanels class="!px-0">
                                        <TabPanel value="cs-0">
                                            <Fieldset legend="Common" :toggleable="true" class="mb-3">
                                                <section class="flex justify-between items-center mb-4">
                                                    <div class="flex gap-2 items-center">
                                                        <span class="text-sm">Surface</span>
                                                        <input :value="preset.semantic.colorScheme.light.surface['500']" @input="onSurfaceColorChange($event, 'light')" type="color" />
                                                    </div>
                                                    <div class="flex border border-surface">
                                                        <div v-for="color of preset.semantic.colorScheme.light.surface" :key="color" class="w-4 h-4 sm:w-8 sm:h-8" :style="{ backgroundColor: color }" :title="color"></div>
                                                    </div>
                                                </section>
                                                <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Typography</div>
                                                <section class="grid grid-cols-4 mb-3 gap-2">
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Text Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.text.color" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Text Hover Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.text.hoverColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Text Muted Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.text.mutedColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Text Hover Muted Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.text.hoverMutedColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                </section>
                                                <section class="grid grid-cols-4 mb-3 gap-2">
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Content Background</span>
                                                        <input v-model="preset.semantic.colorScheme.light.content.background" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Content Hover Background</span>
                                                        <input v-model="preset.semantic.colorScheme.light.content.hoverBackground" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Content Border Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.content.borderColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Content Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.content.color" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Content Hover Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.content.hoverColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Mask Background</span>
                                                        <input v-model="preset.semantic.colorScheme.light.mask.background" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Mask Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.mask.color" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                </section>

                                                <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Accent</div>
                                                <section class="grid grid-cols-4 mb-3 gap-2">
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Primary</span>
                                                        <input v-model="preset.semantic.colorScheme.light.primary.color" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Primary Contrast</span>
                                                        <input v-model="preset.semantic.colorScheme.light.primary.contrastColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Primary Hover</span>
                                                        <input v-model="preset.semantic.colorScheme.light.primary.hoverColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Primary Active</span>
                                                        <input v-model="preset.semantic.colorScheme.light.primary.activeColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                </section>
                                                <section class="grid grid-cols-4 gap-2">
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Highlight Background</span>
                                                        <input v-model="preset.semantic.colorScheme.light.highlight.background" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Highlight Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.highlight.color" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Highlight Focus Background</span>
                                                        <input v-model="preset.semantic.colorScheme.light.highlight.focusBackground" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Highlight Focus Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.highlight.focusColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                </section>
                                            </Fieldset>

                                            <Fieldset legend="Form Field" :toggleable="true" class="mb-3">
                                                <section class="grid grid-cols-4 mb-3 gap-2">
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Background</span>
                                                        <input v-model="preset.semantic.colorScheme.light.formField.background" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.formField.color" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Icon Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.formField.iconColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Shadow</span>
                                                        <input v-model="preset.semantic.colorScheme.light.formField.shadow" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Border Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.formField.borderColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Hover Border Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.formField.hoverBorderColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Focus Border Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.formField.focusBorderColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Invalid Border Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.formField.invalidBorderColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Disabled Background</span>
                                                        <input v-model="preset.semantic.colorScheme.light.formField.disabledBackground" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Disabled Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.formField.disabledColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Placeholder Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.formField.placeholderColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Invalid Placeholder Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.formField.invalidPlaceholderColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Filled Background</span>
                                                        <input v-model="preset.semantic.colorScheme.light.formField.filledBackground" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Filled Hover Background</span>
                                                        <input v-model="preset.semantic.colorScheme.light.formField.filledHoverBackground" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Filled Focus Background</span>
                                                        <input v-model="preset.semantic.colorScheme.light.formField.filledFocusBackground" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1"></div>
                                                </section>

                                                <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Float Label</div>
                                                <section class="grid grid-cols-4 gap-2">
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.formField.floatLabelColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Focus Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.formField.floatLabelFocusColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Active Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.formField.floatLabelActiveColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Invalid Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.formField.floatLabelInvalidColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                </section>
                                            </Fieldset>

                                            <Fieldset legend="Overlay" :toggleable="true" class="mb-3">
                                                <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Select</div>
                                                <section class="grid grid-cols-4 mb-3 gap-2">
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Background</span>
                                                        <input v-model="preset.semantic.colorScheme.light.overlay.select.background" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Border Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.overlay.select.borderColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.overlay.select.color" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1"></div>
                                                </section>

                                                <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Popover</div>
                                                <section class="grid grid-cols-4 mb-3 gap-2">
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Background</span>
                                                        <input v-model="preset.semantic.colorScheme.light.overlay.popover.background" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Border Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.overlay.popover.borderColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.overlay.popover.color" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1"></div>
                                                </section>

                                                <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Modal</div>
                                                <section class="grid grid-cols-4 gap-2">
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Background</span>
                                                        <input v-model="preset.semantic.colorScheme.light.overlay.modal.background" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Border Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.overlay.modal.borderColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.overlay.modal.color" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1"></div>
                                                </section>
                                            </Fieldset>

                                            <Fieldset legend="List" :toggleable="true" class="mb-3">
                                                <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Option</div>
                                                <section class="grid grid-cols-4 mb-3 gap-2">
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Focus Background</span>
                                                        <input v-model="preset.semantic.colorScheme.light.list.option.focusBackground" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Selected Background</span>
                                                        <input v-model="preset.semantic.colorScheme.light.list.option.selectedBackground" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Selected Focus Background</span>
                                                        <input v-model="preset.semantic.colorScheme.light.list.option.selectedFocusBackground" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1"></div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.list.option.color" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Selected Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.list.option.selectedColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Selected Focus Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.list.option.selectedFocusColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1"></div>
                                                </section>

                                                <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Option Icon</div>
                                                <section class="grid grid-cols-4 mb-3 gap-2">
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.list.option.icon.color" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Focus Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.list.option.icon.focusColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                </section>

                                                <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Option Group</div>
                                                <section class="grid grid-cols-4 gap-2">
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Background</span>
                                                        <input v-model="preset.semantic.colorScheme.light.list.optionGroup.background" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.list.optionGroup.color" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1"></div>
                                                    <div class="flex flex-col gap-1"></div>
                                                </section>
                                            </Fieldset>

                                            <Fieldset legend="Navigation" :toggleable="true" class="mb-3">
                                                <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Item</div>
                                                <section class="grid grid-cols-4 mb-3 gap-2">
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Focus Background</span>
                                                        <input v-model="preset.semantic.colorScheme.light.navigation.item.focusBackground" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Acitve Background</span>
                                                        <input v-model="preset.semantic.colorScheme.light.navigation.item.focusBackground" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1"></div>
                                                    <div class="flex flex-col gap-1"></div>

                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.navigation.item.color" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Focus Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.navigation.item.focusColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Active Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.navigation.item.activeColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1"></div>
                                                </section>

                                                <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Item Icon</div>
                                                <section class="grid grid-cols-4 mb-3 gap-2">
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.navigation.item.icon.color" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Focus Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.navigation.item.icon.focusColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Active Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.navigation.item.icon.activeColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1"></div>
                                                </section>

                                                <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Submenu Label</div>
                                                <section class="grid grid-cols-4 mb-3 gap-2">
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Background</span>
                                                        <input v-model="preset.semantic.colorScheme.light.navigation.submenuLabel.background" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.navigation.submenuLabel.color" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1"></div>
                                                    <div class="flex flex-col gap-1"></div>
                                                </section>

                                                <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Submenu Icon</div>
                                                <section class="grid grid-cols-4 mb-3 gap-2">
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.navigation.submenuIcon.color" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Focus Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.navigation.submenuIcon.focusColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1">
                                                        <span class="text-sm">Active Color</span>
                                                        <input v-model="preset.semantic.colorScheme.light.navigation.submenuIcon.activeColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
                                                    </div>
                                                    <div class="flex flex-col gap-1"></div>
                                                </section>
                                            </Fieldset>
                                        </TabPanel>
                                        <TabPanel value="cs-1"> Dark </TabPanel>
                                    </TabPanels>
                                </Tabs>
                            </AccordionContent>
                        </AccordionPanel>
                    </Accordion>
                </TabPanel>
                <TabPanel value="2"> Component tokens are not supported by the Visual Editor at the moment. </TabPanel>
            </TabPanels>
        </Tabs>

        <template #footer>
            <div class="flex justify-end gap-2">
                <Button type="button" label="Download" variant="outlined" />
                <Button type="button" @click="apply" label="Apply" />
            </div>
        </template>
    </Drawer>
</template>

<script>
import { palette, updatePreset } from '@primevue/themes';

export default {
    data() {
        return {
            preset: {
                primitive: {
                    borderRadius: {
                        none: '0',
                        xs: '2px',
                        sm: '4px',
                        md: '6px',
                        lg: '8px',
                        xl: '12px'
                    },
                    emerald: { 50: '#ecfdf5', 100: '#d1fae5', 200: '#a7f3d0', 300: '#6ee7b7', 400: '#34d399', 500: '#10b981', 600: '#059669', 700: '#047857', 800: '#065f46', 900: '#064e3b', 950: '#022c22' },
                    green: { 50: '#f0fdf4', 100: '#dcfce7', 200: '#bbf7d0', 300: '#86efac', 400: '#4ade80', 500: '#22c55e', 600: '#16a34a', 700: '#15803d', 800: '#166534', 900: '#14532d', 950: '#052e16' },
                    lime: { 50: '#f7fee7', 100: '#ecfccb', 200: '#d9f99d', 300: '#bef264', 400: '#a3e635', 500: '#84cc16', 600: '#65a30d', 700: '#4d7c0f', 800: '#3f6212', 900: '#365314', 950: '#1a2e05' },
                    red: { 50: '#fef2f2', 100: '#fee2e2', 200: '#fecaca', 300: '#fca5a5', 400: '#f87171', 500: '#ef4444', 600: '#dc2626', 700: '#b91c1c', 800: '#991b1b', 900: '#7f1d1d', 950: '#450a0a' },
                    orange: { 50: '#fff7ed', 100: '#ffedd5', 200: '#fed7aa', 300: '#fdba74', 400: '#fb923c', 500: '#f97316', 600: '#ea580c', 700: '#c2410c', 800: '#9a3412', 900: '#7c2d12', 950: '#431407' },
                    amber: { 50: '#fffbeb', 100: '#fef3c7', 200: '#fde68a', 300: '#fcd34d', 400: '#fbbf24', 500: '#f59e0b', 600: '#d97706', 700: '#b45309', 800: '#92400e', 900: '#78350f', 950: '#451a03' },
                    yellow: { 50: '#fefce8', 100: '#fef9c3', 200: '#fef08a', 300: '#fde047', 400: '#facc15', 500: '#eab308', 600: '#ca8a04', 700: '#a16207', 800: '#854d0e', 900: '#713f12', 950: '#422006' },
                    teal: { 50: '#f0fdfa', 100: '#ccfbf1', 200: '#99f6e4', 300: '#5eead4', 400: '#2dd4bf', 500: '#14b8a6', 600: '#0d9488', 700: '#0f766e', 800: '#115e59', 900: '#134e4a', 950: '#042f2e' },
                    cyan: { 50: '#ecfeff', 100: '#cffafe', 200: '#a5f3fc', 300: '#67e8f9', 400: '#22d3ee', 500: '#06b6d4', 600: '#0891b2', 700: '#0e7490', 800: '#155e75', 900: '#164e63', 950: '#083344' },
                    sky: { 50: '#f0f9ff', 100: '#e0f2fe', 200: '#bae6fd', 300: '#7dd3fc', 400: '#38bdf8', 500: '#0ea5e9', 600: '#0284c7', 700: '#0369a1', 800: '#075985', 900: '#0c4a6e', 950: '#082f49' },
                    blue: { 50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd', 400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8', 800: '#1e40af', 900: '#1e3a8a', 950: '#172554' },
                    indigo: { 50: '#eef2ff', 100: '#e0e7ff', 200: '#c7d2fe', 300: '#a5b4fc', 400: '#818cf8', 500: '#6366f1', 600: '#4f46e5', 700: '#4338ca', 800: '#3730a3', 900: '#312e81', 950: '#1e1b4b' },
                    violet: { 50: '#f5f3ff', 100: '#ede9fe', 200: '#ddd6fe', 300: '#c4b5fd', 400: '#a78bfa', 500: '#8b5cf6', 600: '#7c3aed', 700: '#6d28d9', 800: '#5b21b6', 900: '#4c1d95', 950: '#2e1065' },
                    purple: { 50: '#faf5ff', 100: '#f3e8ff', 200: '#e9d5ff', 300: '#d8b4fe', 400: '#c084fc', 500: '#a855f7', 600: '#9333ea', 700: '#7e22ce', 800: '#6b21a8', 900: '#581c87', 950: '#3b0764' },
                    fuchsia: { 50: '#fdf4ff', 100: '#fae8ff', 200: '#f5d0fe', 300: '#f0abfc', 400: '#e879f9', 500: '#d946ef', 600: '#c026d3', 700: '#a21caf', 800: '#86198f', 900: '#701a75', 950: '#4a044e' },
                    pink: { 50: '#fdf2f8', 100: '#fce7f3', 200: '#fbcfe8', 300: '#f9a8d4', 400: '#f472b6', 500: '#ec4899', 600: '#db2777', 700: '#be185d', 800: '#9d174d', 900: '#831843', 950: '#500724' },
                    rose: { 50: '#fff1f2', 100: '#ffe4e6', 200: '#fecdd3', 300: '#fda4af', 400: '#fb7185', 500: '#f43f5e', 600: '#e11d48', 700: '#be123c', 800: '#9f1239', 900: '#881337', 950: '#4c0519' },
                    slate: { 50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1', 400: '#94a3b8', 500: '#64748b', 600: '#475569', 700: '#334155', 800: '#1e293b', 900: '#0f172a', 950: '#020617' },
                    gray: { 50: '#f9fafb', 100: '#f3f4f6', 200: '#e5e7eb', 300: '#d1d5db', 400: '#9ca3af', 500: '#6b7280', 600: '#4b5563', 700: '#374151', 800: '#1f2937', 900: '#111827', 950: '#030712' },
                    zinc: { 50: '#fafafa', 100: '#f4f4f5', 200: '#e4e4e7', 300: '#d4d4d8', 400: '#a1a1aa', 500: '#71717a', 600: '#52525b', 700: '#3f3f46', 800: '#27272a', 900: '#18181b', 950: '#09090b' },
                    neutral: { 50: '#fafafa', 100: '#f5f5f5', 200: '#e5e5e5', 300: '#d4d4d4', 400: '#a3a3a3', 500: '#737373', 600: '#525252', 700: '#404040', 800: '#262626', 900: '#171717', 950: '#0a0a0a' },
                    stone: { 50: '#fafaf9', 100: '#f5f5f4', 200: '#e7e5e4', 300: '#d6d3d1', 400: '#a8a29e', 500: '#78716c', 600: '#57534e', 700: '#44403c', 800: '#292524', 900: '#1c1917', 950: '#0c0a09' }
                },
                semantic: {
                    transitionDuration: '0.2s',
                    focusRing: {
                        width: '1px',
                        style: 'solid',
                        color: '{primary.color}',
                        offset: '2px',
                        shadow: 'none'
                    },
                    disabledOpacity: '0.6',
                    iconSize: '1rem',
                    anchorGutter: '2px',
                    formField: {
                        paddingX: '0.75rem',
                        paddingY: '0.5rem',
                        sm: {
                            fontSize: '0.875rem',
                            paddingX: '0.625rem',
                            paddingY: '0.375rem'
                        },
                        lg: {
                            fontSize: '1.125rem',
                            paddingX: '0.875rem',
                            paddingY: '0.625rem'
                        },
                        borderRadius: '{border.radius.md}',
                        focusRing: {
                            width: '0',
                            style: 'none',
                            color: 'transparent',
                            offset: '0',
                            shadow: 'none'
                        },
                        transitionDuration: '{transition.duration}'
                    },
                    list: {
                        padding: '0.25rem 0.25rem',
                        gap: '2px',
                        header: {
                            padding: '0.5rem 1rem 0.25rem 1rem'
                        },
                        option: {
                            padding: '0.5rem 0.75rem',
                            borderRadius: '{border.radius.sm}'
                        },
                        optionGroup: {
                            padding: '0.5rem 0.75rem',
                            fontWeight: '600'
                        }
                    },
                    content: {
                        borderRadius: '{border.radius.md}'
                    },
                    mask: {
                        transitionDuration: '0.15s'
                    },
                    navigation: {
                        list: {
                            padding: '0.25rem 0.25rem',
                            gap: '2px'
                        },
                        item: {
                            padding: '0.5rem 0.75rem',
                            borderRadius: '{border.radius.sm}',
                            gap: '0.5rem'
                        },
                        submenuLabel: {
                            padding: '0.5rem 0.75rem',
                            fontWeight: '600'
                        },
                        submenuIcon: {
                            size: '0.875rem'
                        }
                    },
                    overlay: {
                        select: {
                            borderRadius: '{border.radius.md}',
                            shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
                        },
                        popover: {
                            borderRadius: '{border.radius.md}',
                            padding: '0.75rem',
                            shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
                        },
                        modal: {
                            borderRadius: '{border.radius.xl}',
                            padding: '1.25rem',
                            shadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
                        },
                        navigation: {
                            shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
                        }
                    },
                    primary: {
                        50: '#ecfdf5',
                        100: '#d1fae5',
                        200: '#a7f3d0',
                        300: '#6ee7b7',
                        400: '#34d399',
                        500: '#10b981',
                        600: '#059669',
                        700: '#047857',
                        800: '#065f46',
                        900: '#064e3b',
                        950: '#022c22'
                    },
                    colorScheme: {
                        light: {
                            surface: {
                                50: '#f8fafc',
                                100: '#f1f5f9',
                                200: '#e2e8f0',
                                300: '#cbd5e1',
                                400: '#94a3b8',
                                500: '#64748b',
                                600: '#475569',
                                700: '#334155',
                                800: '#1e293b',
                                900: '#0f172a',
                                950: '#020617'
                            },
                            primary: {
                                color: '{primary.500}',
                                contrastColor: '#ffffff',
                                hoverColor: '{primary.600}',
                                activeColor: '{primary.700}'
                            },
                            highlight: {
                                background: '{primary.50}',
                                focusBackground: '{primary.100}',
                                color: '{primary.700}',
                                focusColor: '{primary.800}'
                            },
                            mask: {
                                background: 'rgba(0,0,0,0.4)',
                                color: '{surface.200}'
                            },
                            formField: {
                                background: '{surface.0}',
                                disabledBackground: '{surface.200}',
                                filledBackground: '{surface.50}',
                                filledHoverBackground: '{surface.50}',
                                filledFocusBackground: '{surface.50}',
                                borderColor: '{surface.300}',
                                hoverBorderColor: '{surface.400}',
                                focusBorderColor: '{primary.color}',
                                invalidBorderColor: '{red.400}',
                                color: '{surface.700}',
                                disabledColor: '{surface.500}',
                                placeholderColor: '{surface.500}',
                                invalidPlaceholderColor: '{red.600}',
                                floatLabelColor: '{surface.500}',
                                floatLabelFocusColor: '{primary.600}',
                                floatLabelActiveColor: '{surface.500}',
                                floatLabelInvalidColor: '{form.field.invalid.placeholder.color}',
                                iconColor: '{surface.400}',
                                shadow: '0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)'
                            },
                            text: {
                                color: '{surface.700}',
                                hoverColor: '{surface.800}',
                                mutedColor: '{surface.500}',
                                hoverMutedColor: '{surface.600}'
                            },
                            content: {
                                background: '{surface.0}',
                                hoverBackground: '{surface.100}',
                                borderColor: '{surface.200}',
                                color: '{text.color}',
                                hoverColor: '{text.hover.color}'
                            },
                            overlay: {
                                select: {
                                    background: '{surface.0}',
                                    borderColor: '{surface.200}',
                                    color: '{text.color}'
                                },
                                popover: {
                                    background: '{surface.0}',
                                    borderColor: '{surface.200}',
                                    color: '{text.color}'
                                },
                                modal: {
                                    background: '{surface.0}',
                                    borderColor: '{surface.200}',
                                    color: '{text.color}'
                                }
                            },
                            list: {
                                option: {
                                    focusBackground: '{surface.100}',
                                    selectedBackground: '{highlight.background}',
                                    selectedFocusBackground: '{highlight.focus.background}',
                                    color: '{text.color}',
                                    focusColor: '{text.hover.color}',
                                    selectedColor: '{highlight.color}',
                                    selectedFocusColor: '{highlight.focus.color}',
                                    icon: {
                                        color: '{surface.400}',
                                        focusColor: '{surface.500}'
                                    }
                                },
                                optionGroup: {
                                    background: 'transparent',
                                    color: '{text.muted.color}'
                                }
                            },
                            navigation: {
                                item: {
                                    focusBackground: '{surface.100}',
                                    activeBackground: '{surface.100}',
                                    color: '{text.color}',
                                    focusColor: '{text.hover.color}',
                                    activeColor: '{text.hover.color}',
                                    icon: {
                                        color: '{surface.400}',
                                        focusColor: '{surface.500}',
                                        activeColor: '{surface.500}'
                                    }
                                },
                                submenuLabel: {
                                    background: 'transparent',
                                    color: '{text.muted.color}'
                                },
                                submenuIcon: {
                                    color: '{surface.400}',
                                    focusColor: '{surface.500}',
                                    activeColor: '{surface.500}'
                                }
                            }
                        },
                        dark: {}
                    }
                }
            }
        };
    },
    methods: {
        apply() {
            updatePreset(this.preset);
        },
        onPrimitiveColorChange(event, color) {
            this.preset.primitive[color] = palette(event.target.value);
        },
        onPrimaryColorChange(event) {
            this.preset.semantic.primary = palette(event.target.value);
        },
        onSurfaceColorChange(event, colorSchemeValue) {
            this.preset.semantic.colorScheme[colorSchemeValue].surface = palette(event.target.value);
        }
    }
};
</script>
