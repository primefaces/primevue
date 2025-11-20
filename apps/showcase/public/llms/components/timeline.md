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

## Basic

Timeline requires a value for the collection of events and content slot that receives an object as a parameter to return content.

## Horizontal

TimeLine orientation is controlled with the layout property, default is vertical having horizontal as the alternative.

## Opposite

Additional content at the other side of the line can be provided with the opposite property.

## Template

Sample implementation with custom content and styled markers.

## Timeline

### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| value | any[] | - | An array of events to display. |
| align | HintedString<"left" \| "right" \| "top" \| "bottom" \| "alternate"> | left | Position of the timeline bar relative to the content. |
| layout | HintedString<"horizontal" \| "vertical"> | horizontal | Orientation of the timeline. |
| dataKey | string | - | Name of the field that uniquely identifies the a record in the data. |
| dt | any | - | It generates scoped CSS variables using design tokens for the component. |
| pt | PassThrough<TimelinePassThroughOptions> | - | Used to pass attributes to DOM elements inside the component. |
| ptOptions | any | - | Used to configure passthrough(pt) options of the component. |
| unstyled | boolean | false | When enabled, it removes component related styles in the core. |

## Pass Through Options

| Name | Type | Description |
|------|------|-------------|
| root | TimelinePassThroughOptionType | Used to pass attributes to the root's DOM element. |
| event | TimelinePassThroughOptionType | Used to pass attributes to the event's DOM element. |
| eventOpposite | TimelinePassThroughOptionType | Used to pass attributes to the event opposite's DOM element. |
| eventSeparator | TimelinePassThroughOptionType | Used to pass attributes to the event separator's DOM element. |
| eventMarker | TimelinePassThroughOptionType | Used to pass attributes to the event marker's DOM element. |
| eventConnector | TimelinePassThroughOptionType | Used to pass attributes to the event connector's DOM element. |
| eventContent | TimelinePassThroughOptionType | Used to pass attributes to the event content's DOM element. |
| hooks | any | Used to manage all lifecycle hooks. |

## Theming

### CSS Classes

| Class | Description |
|-------|-------------|
| p-timeline | Class name of the root element |
| p-timeline-event | Class name of the event element |
| p-timeline-event-opposite | Class name of the event opposite element |
| p-timeline-event-separator | Class name of the event separator element |
| p-timeline-event-marker | Class name of the event marker element |
| p-timeline-event-connector | Class name of the event connector element |
| p-timeline-event-content | Class name of the event content element |

