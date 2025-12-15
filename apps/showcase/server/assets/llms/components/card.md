# Vue Card Component

Card is a flexible container component.

## Import

```javascript
import Card from 'primevue/card';
```

## Accessibility

Screen Reader A card can be utilized in many use cases as a result no role is enforced, in fact a role may not be necessary if the card is used for presentational purposes only. Any valid attribute is passed to the container element so if you require to use one of the landmark roles like region , you may use the role property. Keyboard Support Component does not include any interactive elements.

```vue
<Card role="region">
    Content
</Card>
```

## Advanced

Card provides header , title , subtitle , content and footer as the named templates to place content.

```vue
<Card style="width: 25rem; overflow: hidden">
    <template #header>
        <img alt="user header" src="/images/usercard.png" />
    </template>
    <template #title>Advanced Card</template>
    <template #subtitle>Card subtitle</template>
    <template #content>
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
            quas!
        </p>
    </template>
    <template #footer>
        <div class="flex gap-4 mt-1">
            <Button label="Cancel" severity="secondary" variant="outlined" class="w-full" />
            <Button label="Save" class="w-full" />
        </div>
    </template>
</Card>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <Card style="width: 25rem; overflow: hidden">
        <template #header>
            <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
        </template>
        <template #title>Advanced Card</template>
        <template #subtitle>Card subtitle</template>
        <template #content>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                quas!
            </p>
        </template>
        <template #footer>
            <div class="flex gap-4 mt-1">
                <Button label="Cancel" severity="secondary" variant="outlined" class="w-full" />
                <Button label="Save" class="w-full" />
            </div>
        </template>
    </Card>
</template>

<script setup>
<\/script>
```

</details>

## Basic

A simple Card is created with a title property along with the content as children.

```vue
<Card>
    <template #title>Simple Card</template>
    <template #content>
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
            quas!
        </p>
    </template>
</Card>
```

## Card

### Props

| Name      | Type                                | Default | Description                                                              |
| --------- | ----------------------------------- | ------- | ------------------------------------------------------------------------ |
| dt        | any                                 | -       | It generates scoped CSS variables using design tokens for the component. |
| pt        | PassThrough<CardPassThroughOptions> | -       | Used to pass attributes to DOM elements inside the component.            |
| ptOptions | any                                 | -       | Used to configure passthrough(pt) options of the component.              |
| unstyled  | boolean                             | false   | When enabled, it removes component related styles in the core.           |

## Pass Through Options

| Name     | Type                      | Description                                            |
| -------- | ------------------------- | ------------------------------------------------------ |
| root     | CardPassThroughOptionType | Used to pass attributes to the root's DOM element.     |
| header   | CardPassThroughOptionType | Used to pass attributes to the header's DOM element.   |
| body     | CardPassThroughOptionType | Used to pass attributes to the body's DOM element.     |
| caption  | CardPassThroughOptionType | Used to pass attributes to the caption's DOM element.  |
| title    | CardPassThroughOptionType | Used to pass attributes to the title's DOM element.    |
| subtitle | CardPassThroughOptionType | Used to pass attributes to the subtitle's DOM element. |
| content  | CardPassThroughOptionType | Used to pass attributes to the content's DOM element.  |
| footer   | CardPassThroughOptionType | Used to pass attributes to the footer's DOM element.   |
| hooks    | any                       | Used to manage all lifecycle hooks.                    |

## Theming

### CSS Classes

| Class           | Description                        |
| --------------- | ---------------------------------- |
| p-card          | Class name of the root element     |
| p-card-header   | Class name of the header element   |
| p-card-body     | Class name of the body element     |
| p-card-caption  | Class name of the caption element  |
| p-card-title    | Class name of the title element    |
| p-card-subtitle | Class name of the subtitle element |
| p-card-content  | Class name of the content element  |
| p-card-footer   | Class name of the footer element   |

### Design Tokens

| Token                  | CSS Variable               | Description           |
| ---------------------- | -------------------------- | --------------------- |
| card.background        | --p-card-background        | Background of root    |
| card.border.radius     | --p-card-border-radius     | Border radius of root |
| card.color             | --p-card-color             | Color of root         |
| card.shadow            | --p-card-shadow            | Shadow of root        |
| card.body.padding      | --p-card-body-padding      | Padding of body       |
| card.body.gap          | --p-card-body-gap          | Gap of body           |
| card.caption.gap       | --p-card-caption-gap       | Gap of caption        |
| card.title.font.size   | --p-card-title-font-size   | Font size of title    |
| card.title.font.weight | --p-card-title-font-weight | Font weight of title  |
| card.subtitle.color    | --p-card-subtitle-color    | Color of subtitle     |
