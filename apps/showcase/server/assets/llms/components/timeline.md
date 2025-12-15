# Vue Timeline Component

Timeline visualizes a series of chained events.

## Import

```javascript
import Timeline from 'primevue/timeline';
```

## Accessibility

Screen Reader Timeline uses a semantic ordered list element to list the events. No specific role is enforced, still you may use any aria role and attributes as any valid attribute is passed to the list element. Keyboard Support Component does not include any interactive elements.

## Alignment

Content location relative the line is defined with the align property.

```vue
<Timeline :value="events" class="w-full md:w-80">
    <template #content="slotProps">
        {{ slotProps.item.status }}
    </template>
</Timeline>

<Timeline :value="events" align="right" class="w-full md:w-80">
    <template #content="slotProps">
        {{ slotProps.item.status }}
    </template>
</Timeline>

<Timeline :value="events" align="alternate" class="w-full md:w-80">
    <template #content="slotProps">
        {{ slotProps.item.status }}
    </template>
</Timeline>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-wrap gap-12">
        <Timeline :value="events" class="w-full md:w-80">
            <template #content="slotProps">
                {{ slotProps.item.status }}
            </template>
        </Timeline>

        <Timeline :value="events" align="right" class="w-full md:w-80">
            <template #content="slotProps">
                {{ slotProps.item.status }}
            </template>
        </Timeline>

        <Timeline :value="events" align="alternate" class="w-full md:w-80">
            <template #content="slotProps">
                {{ slotProps.item.status }}
            </template>
        </Timeline>
    </div>
</template>

<script setup>
import { ref } from "vue";

const events = ref([
    { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0'},
    { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
    { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
]);

<\/script>
```

</details>

## Basic

Timeline requires a value for the collection of events and content slot that receives an object as a parameter to return content.

```vue
<Timeline :value="events">
    <template #content="slotProps">
        {{ slotProps.item.status }}
    </template>
</Timeline>
```

## Horizontal

TimeLine orientation is controlled with the layout property, default is vertical having horizontal as the alternative.

```vue
<Timeline :value="events" layout="horizontal" align="top">
    <template #content="slotProps">
        {{ slotProps.item }}
    </template>
</Timeline>

<Timeline :value="events" layout="horizontal" align="bottom">
    <template #content="slotProps">
        {{ slotProps.item }}
    </template>
</Timeline>

<Timeline :value="events" layout="horizontal" align="alternate">
    <template #opposite> &nbsp; </template>
    <template #content="slotProps">
        {{ slotProps.item }}
    </template>
</Timeline>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex flex-col gap-4">
        <Timeline :value="events" layout="horizontal" align="top">
            <template #content="slotProps">
                {{ slotProps.item }}
            </template>
        </Timeline>

        <Timeline :value="events" layout="horizontal" align="bottom">
            <template #content="slotProps">
                {{ slotProps.item }}
            </template>
        </Timeline>

        <Timeline :value="events" layout="horizontal" align="alternate">
            <template #opposite> &nbsp; </template>
            <template #content="slotProps">
                {{ slotProps.item }}
            </template>
        </Timeline>
    </div>
</template>

<script setup>
import { ref } from "vue";

const events = ref(['2020', '2021', '2022', '2023']);
<\/script>
```

</details>

## Opposite

Additional content at the other side of the line can be provided with the opposite property.

```vue
<Timeline :value="events">
    <template #opposite="slotProps">
        <small class="text-surface-500 dark:text-surface-400">{{slotProps.item.date}}</small>
    </template>
    <template #content="slotProps">
        {{slotProps.item.status}}
    </template>
</Timeline>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Timeline :value="events">
            <template #opposite="slotProps">
                <small class="text-surface-500 dark:text-surface-400">{{slotProps.item.date}}</small>
            </template>
            <template #content="slotProps">
                {{slotProps.item.status}}
            </template>
        </Timeline>
    </div>
</template>

<script setup>
import { ref } from "vue";

const events = ref([
    { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0'},
    { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
    { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
]);

<\/script>
```

</details>

## Template

Sample implementation with custom content and styled markers.

```vue
<Timeline :value="events" align="alternate" class="customized-timeline">
    <template #marker="slotProps">
        <span class="flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm" :style="{ backgroundColor: slotProps.item.color }">
            <i :class="slotProps.item.icon"></i>
        </span>
    </template>
    <template #content="slotProps">
        <Card class="mt-4">
            <template #title>
                {{ slotProps.item.status }}
            </template>
            <template #subtitle>
                {{ slotProps.item.date }}
            </template>
            <template #content>
                <img v-if="slotProps.item.image" :src="\`/images/product/\${slotProps.item.image}\`" :alt="slotProps.item.name" width="200" class="shadow-sm" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
                    neque quas!
                </p>
                <Button label="Read more" variant="text"></Button>
            </template>
        </Card>
    </template>
</Timeline>
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card">
        <Timeline :value="events" align="alternate" class="customized-timeline">
            <template #marker="slotProps">
                <span class="flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm" :style="{ backgroundColor: slotProps.item.color }">
                    <i :class="slotProps.item.icon"></i>
                </span>
            </template>
            <template #content="slotProps">
                <Card class="mt-4">
                    <template #title>
                        {{ slotProps.item.status }}
                    </template>
                    <template #subtitle>
                        {{ slotProps.item.date }}
                    </template>
                    <template #content>
                        <img v-if="slotProps.item.image" :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.item.image}\`" :alt="slotProps.item.name" width="200" class="shadow-sm" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
                            neque quas!
                        </p>
                        <Button label="Read more" variant="text"></Button>
                    </template>
                </Card>
            </template>
        </Timeline>
    </div>
</template>

<script setup>
import { ref } from "vue";

const events = ref([
    { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
    { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
    { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
]);

<\/script>

<style lang="scss" scoped>
@media screen and (max-width: 960px) {
    ::v-deep(.customized-timeline) {
        .p-timeline-event:nth-child(even) {
            flex-direction: row;

            .p-timeline-event-content {
                text-align: left;
            }
        }

        .p-timeline-event-opposite {
            flex: 0;
        }
    }
}
</style>
```

</details>

## Timeline

### Props

| Name      | Type                                                                | Default    | Description                                                              |
| --------- | ------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------ |
| value     | any[]                                                               | -          | An array of events to display.                                           |
| align     | HintedString<"left" \| "right" \| "top" \| "bottom" \| "alternate"> | left       | Position of the timeline bar relative to the content.                    |
| layout    | HintedString<"horizontal" \| "vertical">                            | horizontal | Orientation of the timeline.                                             |
| dataKey   | string                                                              | -          | Name of the field that uniquely identifies the a record in the data.     |
| dt        | any                                                                 | -          | It generates scoped CSS variables using design tokens for the component. |
| pt        | PassThrough<TimelinePassThroughOptions>                             | -          | Used to pass attributes to DOM elements inside the component.            |
| ptOptions | any                                                                 | -          | Used to configure passthrough(pt) options of the component.              |
| unstyled  | boolean                                                             | false      | When enabled, it removes component related styles in the core.           |

## Pass Through Options

| Name           | Type                          | Description                                                   |
| -------------- | ----------------------------- | ------------------------------------------------------------- |
| root           | TimelinePassThroughOptionType | Used to pass attributes to the root's DOM element.            |
| event          | TimelinePassThroughOptionType | Used to pass attributes to the event's DOM element.           |
| eventOpposite  | TimelinePassThroughOptionType | Used to pass attributes to the event opposite's DOM element.  |
| eventSeparator | TimelinePassThroughOptionType | Used to pass attributes to the event separator's DOM element. |
| eventMarker    | TimelinePassThroughOptionType | Used to pass attributes to the event marker's DOM element.    |
| eventConnector | TimelinePassThroughOptionType | Used to pass attributes to the event connector's DOM element. |
| eventContent   | TimelinePassThroughOptionType | Used to pass attributes to the event content's DOM element.   |
| hooks          | any                           | Used to manage all lifecycle hooks.                           |

## Theming

### CSS Classes

| Class                      | Description                               |
| -------------------------- | ----------------------------------------- |
| p-timeline                 | Class name of the root element            |
| p-timeline-event           | Class name of the event element           |
| p-timeline-event-opposite  | Class name of the event opposite element  |
| p-timeline-event-separator | Class name of the event separator element |
| p-timeline-event-marker    | Class name of the event marker element    |
| p-timeline-event-connector | Class name of the event connector element |
| p-timeline-event-content   | Class name of the event content element   |

### Design Tokens

| Token                                       | CSS Variable                                    | Description                           |
| ------------------------------------------- | ----------------------------------------------- | ------------------------------------- |
| timeline.event.min.height                   | --p-timeline-event-min-height                   | Min height of event                   |
| timeline.horizontal.event.content.padding   | --p-timeline-horizontal-event-content-padding   | Event content padding of horizontal   |
| timeline.vertical.event.content.padding     | --p-timeline-vertical-event-content-padding     | Event content padding of vertical     |
| timeline.event.marker.size                  | --p-timeline-event-marker-size                  | Size of event marker                  |
| timeline.event.marker.border.radius         | --p-timeline-event-marker-border-radius         | Border radius of event marker         |
| timeline.event.marker.border.width          | --p-timeline-event-marker-border-width          | Border width of event marker          |
| timeline.event.marker.background            | --p-timeline-event-marker-background            | Background of event marker            |
| timeline.event.marker.border.color          | --p-timeline-event-marker-border-color          | Border color of event marker          |
| timeline.event.marker.content.border.radius | --p-timeline-event-marker-content-border-radius | Content border radius of event marker |
| timeline.event.marker.content.size          | --p-timeline-event-marker-content-size          | Content size of event marker          |
| timeline.event.marker.content.background    | --p-timeline-event-marker-content-background    | Content background of event marker    |
| timeline.event.marker.content.inset.shadow  | --p-timeline-event-marker-content-inset-shadow  | Content inset shadow of event marker  |
| timeline.event.connector.color              | --p-timeline-event-connector-color              | Color of event connector              |
| timeline.event.connector.size               | --p-timeline-event-connector-size               | Size of event connector               |
