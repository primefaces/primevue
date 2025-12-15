# Vue Accordion Component

Accordion groups a collection of contents in panels.

## Import

```javascript
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
```

## Accessibility

Screen Reader Accordion header elements is a button element and use aria-controls to define the id of the content section along with aria-expanded for the visibility state. The value to read a header element defaults to the value of the header property and can be customized by defining an aria-label or aria-labelledby via the pt property. The content uses region role, defines an id that matches the aria-controls of the header and aria-labelledby referring to the id of the header. Header Keyboard Support Key Function tab Moves focus to the next focusable element in the page tab sequence. shift + tab Moves focus to the previous focusable element in the page tab sequence. enter Toggles the visibility of the content. space Toggles the visibility of the content. down arrow Moves focus to the next header. If focus is on the last header, moves focus to the first header. up arrow Moves focus to the previous header. If focus is on the first header, moves focus to the last header. home Moves focus to the first header. end Moves focus to the last header.

## Basic

Accordion is defined using AccordionPanel , AccordionHeader and AccordionContent components. Each AccordionPanel must contain a unique value property to specify the active item.

```vue
<Accordion value="0">
    <AccordionPanel value="0">
        <AccordionHeader>Header I</AccordionHeader>
        <AccordionContent>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </AccordionContent>
    </AccordionPanel>
    <AccordionPanel value="1">
        <AccordionHeader>Header II</AccordionHeader>
        <AccordionContent>
            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
        </AccordionContent>
    </AccordionPanel>
    <AccordionPanel value="2">
        <AccordionHeader>Header III</AccordionHeader>
        <AccordionContent>
            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
        </AccordionContent>
    </AccordionPanel>
</Accordion>
```

## Controlled

Panels can be controlled programmatically using value property as a model.

```vue
<div class="flex mb-4 gap-2 justify-end">
    <Button @click="active = '0'" rounded label="1" class="w-8 h-8 p-0" :outlined="active !== '0'" />
    <Button @click="active = '1'" rounded label="2" class="w-8 h-8 p-0" :outlined="active !== '1'" />
    <Button @click="active = '2'" rounded label="3" class="w-8 h-8 p-0" :outlined="active !== '2'" />
</div>

<Accordion v-model:value="active">
    <AccordionPanel value="0">
        <AccordionHeader>Header I</AccordionHeader>
        <AccordionContent>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </AccordionContent>
    </AccordionPanel>
    <AccordionPanel value="1">
        <AccordionHeader>Header II</AccordionHeader>
        <AccordionContent>
            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
        </AccordionContent>
    </AccordionPanel>
    <AccordionPanel value="2">
        <AccordionHeader>Header III</AccordionHeader>
        <AccordionContent>
            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
        </AccordionContent>
    </AccordionPanel>
</Accordion>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <div class="flex mb-4 gap-2 justify-end">
            <Button @click="active = '0'" rounded label="1" class="w-8 h-8 p-0" :outlined="active !== '0'" />
            <Button @click="active = '1'" rounded label="2" class="w-8 h-8 p-0" :outlined="active !== '1'" />
            <Button @click="active = '2'" rounded label="3" class="w-8 h-8 p-0" :outlined="active !== '2'" />
        </div>

        <Accordion v-model:value="active">
            <AccordionPanel value="0">
                <AccordionHeader>Header I</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="1">
                <AccordionHeader>Header II</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="2">
                <AccordionHeader>Header III</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                        qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const active = ref('0');
<\/script>
```

</details>

## Disabled

Enabling disabled property of an AccordionPanel prevents user interaction.

```vue
<Accordion :value="['0']" multiple>
    <AccordionPanel value="0">
        <AccordionHeader>Header I</AccordionHeader>
        <AccordionContent>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </AccordionContent>
    </AccordionPanel>
    <AccordionPanel value="1">
        <AccordionHeader>Header II</AccordionHeader>
        <AccordionContent>
            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
        </AccordionContent>
    </AccordionPanel>
    <AccordionPanel value="2">
        <AccordionHeader>Header III</AccordionHeader>
        <AccordionContent>
            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
        </AccordionContent>
    </AccordionPanel>
    <AccordionPanel value="3" disabled>
        <AccordionHeader>Header IV</AccordionHeader>
    </AccordionPanel>
</Accordion>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Accordion :value="['0']" multiple>
            <AccordionPanel value="0">
                <AccordionHeader>Header I</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="1">
                <AccordionHeader>Header II</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="2">
                <AccordionHeader>Header III</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                        qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="3" disabled>
                <AccordionHeader>Header IV</AccordionHeader>
            </AccordionPanel>
        </Accordion>
    </div>
</template>

<script setup>
<\/script>
```

</details>

## Dynamic

AccordionPanel can be generated dynamically using the standard v-for directive.

```vue
<Accordion value="0">
    <AccordionPanel v-for="tab in tabs" :key="tab.title" :value="tab.value">
        <AccordionHeader>{{ tab.title }}</AccordionHeader>
        <AccordionContent>
            <p class="m-0">{{ tab.content }}</p>
        </AccordionContent>
    </AccordionPanel>
</Accordion>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Accordion value="0">
            <AccordionPanel v-for="tab in tabs" :key="tab.title" :value="tab.value">
                <AccordionHeader>{{ tab.title }}</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">{{ tab.content }}</p>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const tabs = ref([
    { title: 'Title 1', content: 'Content 1', value: '0' },
    { title: 'Title 2', content: 'Content 2', value: '1' },
    { title: 'Title 3', content: 'Content 3', value: '2' }
]);
<\/script>
```

</details>

## Multiple

Only one tab at a time can be active by default, enabling multiple property changes this behavior to allow multiple panels. In this case value needs to be an array.

```vue
<Accordion :value="['0']" multiple>
    <AccordionPanel value="0">
        <AccordionHeader>Header I</AccordionHeader>
        <AccordionContent>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </AccordionContent>
    </AccordionPanel>
    <AccordionPanel value="1">
        <AccordionHeader>Header II</AccordionHeader>
        <AccordionContent>
            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
        </AccordionContent>
    </AccordionPanel>
    <AccordionPanel value="2">
        <AccordionHeader>Header III</AccordionHeader>
        <AccordionContent>
            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
        </AccordionContent>
    </AccordionPanel>
</Accordion>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Accordion :value="['0']" multiple>
            <AccordionPanel value="0">
                <AccordionHeader>Header I</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="1">
                <AccordionHeader>Header II</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="2">
                <AccordionHeader>Header III</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                        qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    </div>
</template>

<script setup>
<\/script>
```

</details>

## Template

Custom content for a header is defined with the default slot. The optional as property controls the default container element of a header, for example setting it to a div renders a div for the header instead of a button. The asChild option enables the headless mode for further customization by passing callbacks and properties to implement your own header.

```vue
<Accordion value="0" expandIcon="pi pi-plus" collapseIcon="pi pi-minus">
    <AccordionPanel value="0">
        <AccordionHeader>
            <span class="flex items-center gap-2 w-full">
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                <span class="font-bold whitespace-nowrap">Amy Elsner</span>
                <Badge value="3" class="ml-auto mr-2" />
            </span>
        </AccordionHeader>
        <AccordionContent>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </AccordionContent>
    </AccordionPanel>
    <AccordionPanel value="1">
        <AccordionHeader>
            <span class="flex items-center gap-2 w-full">
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle" />
                <span class="font-bold whitespace-nowrap">Onyama Limba</span>
                <Badge value="4" class="ml-auto mr-2" />
            </span>
        </AccordionHeader>
        <AccordionContent>
            <p class="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
        </AccordionContent>
    </AccordionPanel>
    <AccordionPanel value="2">
        <AccordionHeader>
            <span class="flex items-center gap-2 w-full">
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" shape="circle" />
                <span class="font-bold whitespace-nowrap">Ioni Bowcher</span>
                <Badge value="2" class="ml-auto mr-2" />
            </span>
        </AccordionHeader>
        <AccordionContent>
            <p class="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
        </AccordionContent>
    </AccordionPanel>
</Accordion>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Accordion value="0" expandIcon="pi pi-plus" collapseIcon="pi pi-minus">
            <AccordionPanel value="0">
                <AccordionHeader>
                    <span class="flex items-center gap-2 w-full">
                        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                        <span class="font-bold whitespace-nowrap">Amy Elsner</span>
                        <Badge value="3" class="ml-auto mr-2" />
                    </span>
                </AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="1">
                <AccordionHeader>
                    <span class="flex items-center gap-2 w-full">
                        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle" />
                        <span class="font-bold whitespace-nowrap">Onyama Limba</span>
                        <Badge value="4" class="ml-auto mr-2" />
                    </span>
                </AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="2">
                <AccordionHeader>
                    <span class="flex items-center gap-2 w-full">
                        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" shape="circle" />
                        <span class="font-bold whitespace-nowrap">Ioni Bowcher</span>
                        <Badge value="2" class="ml-auto mr-2" />
                    </span>
                </AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                        qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    </div>
</template>

<script setup>
<\/script>
```

</details>

## Accordion

### Props

| Name          | Type                                             | Default | Description                                                                                    |
| ------------- | ------------------------------------------------ | ------- | ---------------------------------------------------------------------------------------------- |
| value         | null \| string \| number \| string[] \| number[] | null    | Value of the active panel or an array of values in multiple mode.                              |
| multiple      | boolean                                          | false   | When enabled, multiple tabs can be activated at the same time.                                 |
| activeIndex   | null \| number \| number[]                       | null    | Index of the active tab or an array of indexes in multiple mode.                               |
| lazy          | boolean                                          | false   | When enabled, hidden tabs are not rendered at all. Defaults to false that hides tabs with css. |
| expandIcon    | string                                           | -       | Icon of a collapsed tab.                                                                       |
| collapseIcon  | string                                           | -       | Icon of an expanded tab.                                                                       |
| tabindex      | number                                           | 0       | Index of the element in tabbing order.                                                         |
| selectOnFocus | boolean                                          | false   | When enabled, the focused tab is activated.                                                    |
| dt            | any                                              | -       | It generates scoped CSS variables using design tokens for the component.                       |
| pt            | PassThrough<AccordionPassThroughOptions>         | -       | Used to pass attributes to DOM elements inside the component.                                  |
| ptOptions     | any                                              | -       | Used to configure passthrough(pt) options of the component.                                    |
| unstyled      | boolean                                          | false   | When enabled, it removes component related styles in the core.                                 |

## Pass Through Options

| Name  | Type                           | Description                                        |
| ----- | ------------------------------ | -------------------------------------------------- |
| root  | AccordionPassThroughOptionType | Used to pass attributes to the root's DOM element. |
| hooks | any                            | Used to manage all lifecycle hooks.                |

## Theming

### CSS Classes

| Class       | Description                    |
| ----------- | ------------------------------ |
| p-accordion | Class name of the root element |

### Design Tokens

| Token                                             | CSS Variable                                          | Description                                |
| ------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------ |
| accordion.transition.duration                     | --p-accordion-transition-duration                     | Transition duration of root                |
| accordion.panel.border.width                      | --p-accordion-panel-border-width                      | Border width of panel                      |
| accordion.panel.border.color                      | --p-accordion-panel-border-color                      | Border color of panel                      |
| accordion.header.color                            | --p-accordion-header-color                            | Color of header                            |
| accordion.header.hover.color                      | --p-accordion-header-hover-color                      | Hover color of header                      |
| accordion.header.active.color                     | --p-accordion-header-active-color                     | Active color of header                     |
| accordion.header.active.hover.color               | --p-accordion-header-active-hover-color               | Active hover color of header               |
| accordion.header.padding                          | --p-accordion-header-padding                          | Padding of header                          |
| accordion.header.font.weight                      | --p-accordion-header-font-weight                      | Font weight of header                      |
| accordion.header.border.radius                    | --p-accordion-header-border-radius                    | Border radius of header                    |
| accordion.header.border.width                     | --p-accordion-header-border-width                     | Border width of header                     |
| accordion.header.border.color                     | --p-accordion-header-border-color                     | Border color of header                     |
| accordion.header.background                       | --p-accordion-header-background                       | Background of header                       |
| accordion.header.hover.background                 | --p-accordion-header-hover-background                 | Hover background of header                 |
| accordion.header.active.background                | --p-accordion-header-active-background                | Active background of header                |
| accordion.header.active.hover.background          | --p-accordion-header-active-hover-background          | Active hover background of header          |
| accordion.header.focus.ring.width                 | --p-accordion-header-focus-ring-width                 | Focus ring width of header                 |
| accordion.header.focus.ring.style                 | --p-accordion-header-focus-ring-style                 | Focus ring style of header                 |
| accordion.header.focus.ring.color                 | --p-accordion-header-focus-ring-color                 | Focus ring color of header                 |
| accordion.header.focus.ring.offset                | --p-accordion-header-focus-ring-offset                | Focus ring offset of header                |
| accordion.header.focus.ring.shadow                | --p-accordion-header-focus-ring-shadow                | Focus ring shadow of header                |
| accordion.header.toggle.icon.color                | --p-accordion-header-toggle-icon-color                | Toggle icon color of header                |
| accordion.header.toggle.icon.hover.color          | --p-accordion-header-toggle-icon-hover-color          | Toggle icon hover color of header          |
| accordion.header.toggle.icon.active.color         | --p-accordion-header-toggle-icon-active-color         | Toggle icon active color of header         |
| accordion.header.toggle.icon.active.hover.color   | --p-accordion-header-toggle-icon-active-hover-color   | Toggle icon active hover color of header   |
| accordion.header.first.top.border.radius          | --p-accordion-header-first-top-border-radius          | First top border radius of header          |
| accordion.header.first.border.width               | --p-accordion-header-first-border-width               | First border width of header               |
| accordion.header.last.bottom.border.radius        | --p-accordion-header-last-bottom-border-radius        | Last bottom border radius of header        |
| accordion.header.last.active.bottom.border.radius | --p-accordion-header-last-active-bottom-border-radius | Last active bottom border radius of header |
| accordion.content.border.width                    | --p-accordion-content-border-width                    | Border width of content                    |
| accordion.content.border.color                    | --p-accordion-content-border-color                    | Border color of content                    |
| accordion.content.background                      | --p-accordion-content-background                      | Background of content                      |
| accordion.content.color                           | --p-accordion-content-color                           | Color of content                           |
| accordion.content.padding                         | --p-accordion-content-padding                         | Padding of content                         |
