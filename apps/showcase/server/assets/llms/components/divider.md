# Vue Divider Component

Divider is used to separate contents.

## Import

```javascript
import Divider from 'primevue/divider';
```

## Accessibility

Screen Reader Divider uses a separator role with aria-orientation set to either "horizontal" or "vertical". Keyboard Support Component does not include any interactive elements.

## Basic

Divider is basically placed between the items to separate.

```vue
<p class="m-0">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>

<Divider />

<p class="m-0">
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
</p>

<Divider />

<p class="m-0">
    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia
    deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
</p>

<Divider />

<p class="m-0">
    Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
    maiores alias consequatur aut perferendis doloribus asperiores repellat. Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio.
</p>
```

## Content

Children are rendered within the boundaries of the divider where location of the content is configured with the align property. In horizontal layout, alignment options are left , center and right whereas vertical mode supports top , center and bottom .

```vue
<p class="m-0">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>

<Divider align="left" type="solid">
    <b>Left</b>
</Divider>

<p class="m-0">
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
</p>

<Divider align="center" type="dotted">
    <b>Center</b>
</Divider>

<p class="m-0">
    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia
    deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
</p>

<Divider align="right" type="dashed">
    <b>Right</b>
</Divider>

<p class="m-0">
    Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
    maiores alias consequatur aut perferendis doloribus asperiores repellat. Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio.
</p>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <Divider align="left" type="solid">
            <b>Left</b>
        </Divider>

        <p class="m-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>

        <Divider align="center" type="dotted">
            <b>Center</b>
        </Divider>

        <p class="m-0">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia
            deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </p>

        <Divider align="right" type="dashed">
            <b>Right</b>
        </Divider>

        <p class="m-0">
            Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
            maiores alias consequatur aut perferendis doloribus asperiores repellat. Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio.
        </p>
    </div>
</template>

<script setup>
<\/script>
```

</details>

## Login

Sample implementation of a login form using a divider with content.

```vue
<div class="flex flex-col md:flex-row">
    <div class="w-full md:w-5/12 flex flex-col items-center justify-center gap-3 py-5">
        <div class="flex flex-col gap-2">
            <label for="username">Username</label>
            <InputText id="username" type="text" />
        </div>
        <div class="flex flex-col gap-2">
            <label for="password">Password</label>
            <InputText id="password" type="password" />
        </div>
        <div class="flex">
            <Button label="Login" icon="pi pi-user" class="w-full max-w-[17.35rem] mx-auto"></Button>
        </div>
    </div>
    <div class="w-full md:w-2/12">
        <Divider layout="vertical" class="!hidden md:!flex"><b>OR</b></Divider>
        <Divider layout="horizontal" class="!flex md:!hidden" align="center"><b>OR</b></Divider>
    </div>
    <div class="w-full md:w-5/12 flex items-center justify-center py-5">
        <Button label="Sign Up" icon="pi pi-user-plus" severity="success" class="w-full max-w-[17.35rem] mx-auto"></Button>
    </div>
</div>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <div class="flex flex-col md:flex-row">
            <div class="w-full md:w-5/12 flex flex-col items-center justify-center gap-3 py-5">
                <div class="flex flex-col gap-2">
                    <label for="username">Username</label>
                    <InputText id="username" type="text" />
                </div>
                <div class="flex flex-col gap-2">
                    <label for="password">Password</label>
                    <InputText id="password" type="password" />
                </div>
                <div class="flex">
                    <Button label="Login" icon="pi pi-user" class="w-full max-w-[17.35rem] mx-auto"></Button>
                </div>
            </div>
            <div class="w-full md:w-2/12">
                <Divider layout="vertical" class="!hidden md:!flex"><b>OR</b></Divider>
                <Divider layout="horizontal" class="!flex md:!hidden" align="center"><b>OR</b></Divider>
            </div>
            <div class="w-full md:w-5/12 flex items-center justify-center py-5">
                <Button label="Sign Up" icon="pi pi-user-plus" severity="success" class="w-full max-w-[17.35rem] mx-auto"></Button>
            </div>
        </div>
    </div>
</template>

<script setup>
<\/script>
```

</details>

## Type

Style of the border is configured with the type property that can either be solid , dotted or dashed .

```vue
<p class="m-0">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>

<Divider type="solid" />

<p class="m-0">
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
</p>

<Divider type="dotted" />

<p class="m-0">
    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia
    deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
</p>

<Divider type="dashed" />

<p class="m-0">
    Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
    maiores alias consequatur aut perferendis doloribus asperiores repellat. Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio.
</p>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <Divider type="solid" />

        <p class="m-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>

        <Divider type="dotted" />

        <p class="m-0">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia
            deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </p>

        <Divider type="dashed" />

        <p class="m-0">
            Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
            maiores alias consequatur aut perferendis doloribus asperiores repellat. Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio.
        </p>
    </div>
</template>

<script setup>
<\/script>
```

</details>

## Vertical

Vertical divider is enabled by setting the layout property as vertical .

```vue
<p class="m-0">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>

<Divider layout="vertical" />

<p class="m-0">
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
</p>

<Divider layout="vertical" />

<p class="m-0">
    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia
    deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
</p>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex">
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <Divider layout="vertical" />

        <p class="m-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>

        <Divider layout="vertical" />

        <p class="m-0">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia
            deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </p>
    </div>
</template>

<script setup>
<\/script>
```

</details>

## Divider

### Props

| Name      | Type                                                             | Default    | Description                                                              |
| --------- | ---------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------ |
| align     | HintedString<"left" \| "right" \| "top" \| "bottom" \| "center"> | -          | Alignment of the content.                                                |
| layout    | HintedString<"horizontal" \| "vertical">                         | horizontal | Specifies the orientation, valid values are 'horizontal' and 'vertical'. |
| type      | HintedString<"solid" \| "dashed" \| "dotted">                    | solid      | Border style type.                                                       |
| dt        | any                                                              | -          | It generates scoped CSS variables using design tokens for the component. |
| pt        | PassThrough<DividerPassThroughOptions>                           | -          | Used to pass attributes to DOM elements inside the component.            |
| ptOptions | any                                                              | -          | Used to configure passthrough(pt) options of the component.              |
| unstyled  | boolean                                                          | false      | When enabled, it removes component related styles in the core.           |

## Pass Through Options

| Name    | Type                         | Description                                           |
| ------- | ---------------------------- | ----------------------------------------------------- |
| root    | DividerPassThroughOptionType | Used to pass attributes to the root's DOM element.    |
| content | DividerPassThroughOptionType | Used to pass attributes to the content's DOM element. |
| hooks   | any                          | Used to manage all lifecycle hooks.                   |

## Theming

### CSS Classes

| Class             | Description                       |
| ----------------- | --------------------------------- |
| p-divider         | Class name of the root element    |
| p-divider-content | Class name of the content element |

### Design Tokens

| Token                              | CSS Variable                           | Description                   |
| ---------------------------------- | -------------------------------------- | ----------------------------- |
| divider.border.color               | --p-divider-border-color               | Border color of root          |
| divider.content.background         | --p-divider-content-background         | Background of content         |
| divider.content.color              | --p-divider-content-color              | Color of content              |
| divider.horizontal.margin          | --p-divider-horizontal-margin          | Margin of horizontal          |
| divider.horizontal.padding         | --p-divider-horizontal-padding         | Padding of horizontal         |
| divider.horizontal.content.padding | --p-divider-horizontal-content-padding | Content padding of horizontal |
| divider.vertical.margin            | --p-divider-vertical-margin            | Margin of vertical            |
| divider.vertical.padding           | --p-divider-vertical-padding           | Padding of vertical           |
| divider.vertical.content.padding   | --p-divider-vertical-content-padding   | Content padding of vertical   |
