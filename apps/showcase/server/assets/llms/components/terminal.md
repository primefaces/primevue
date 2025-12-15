# Vue Terminal Component

Terminal is a text based user interface.

## Import

```javascript
import Terminal from 'primevue/terminal';
import TerminalService from 'primevue/terminalservice';
```

## Accessibility

Screen Reader Terminal component has an input element that can be described with aria-label or aria-labelledby props. The element that lists the previous commands has aria-live so that changes are received by the screen reader. Keyboard Support Key Function tab Moves focus through the input element. enter Executes the command when focus in on the input element.

## Basic

Commands are processed using an EventBus implementation called TerminalService . Import this service into your component and subscribe to the command event to process the commands by sending replies with the response event.

```vue
<Terminal welcomeMessage="Welcome to PrimeVue" prompt="primevue $" aria-label="PrimeVue Terminal Service" />
```

## Terminal

### Props

| Name           | Type                                    | Default | Description                                                              |
| -------------- | --------------------------------------- | ------- | ------------------------------------------------------------------------ |
| welcomeMessage | string                                  | -       | Initial text to display on terminal.                                     |
| prompt         | string                                  | -       | Prompt text for each command.                                            |
| dt             | any                                     | -       | It generates scoped CSS variables using design tokens for the component. |
| pt             | PassThrough<TerminalPassThroughOptions> | -       | Used to pass attributes to DOM elements inside the component.            |
| ptOptions      | any                                     | -       | Used to configure passthrough(pt) options of the component.              |
| unstyled       | boolean                                 | false   | When enabled, it removes component related styles in the core.           |

## Pass Through Options

| Name           | Type                          | Description                                                   |
| -------------- | ----------------------------- | ------------------------------------------------------------- |
| root           | TerminalPassThroughOptionType | Used to pass attributes to the root's DOM element.            |
| welcomeMessage | TerminalPassThroughOptionType | Used to pass attributes to the welcome message's DOM element. |
| content        | TerminalPassThroughOptionType | Used to pass attributes to the content's DOM element.         |
| commands       | TerminalPassThroughOptionType | Used to pass attributes to the commands' DOM element.         |
| prompt         | TerminalPassThroughOptionType | Used to pass attributes to the prompt's DOM element.          |
| command        | TerminalPassThroughOptionType | Used to pass attributes to the command's DOM element.         |
| response       | TerminalPassThroughOptionType | Used to pass attributes to the response's DOM element.        |
| container      | TerminalPassThroughOptionType | Used to pass attributes to the container's DOM element.       |
| commandText    | TerminalPassThroughOptionType | Used to pass attributes to the command text's DOM element.    |
| hooks          | any                           | Used to manage all lifecycle hooks.                           |

## Theming

### CSS Classes

| Class                       | Description                                |
| --------------------------- | ------------------------------------------ |
| p-terminal                  | Class name of the root element             |
| p-terminal-welcome-message  | Class name of the welcome message element  |
| p-terminal-command-list     | Class name of the command list element     |
| p-terminal-command          | Class name of the command element          |
| p-terminal-command-value    | Class name of the command value element    |
| p-terminal-command-response | Class name of the command response element |
| p-terminal-prompt           | Class name of the prompt element           |
| p-terminal-prompt-label     | Class name of the prompt label element     |
| p-terminal-prompt-value     | Class name of the prompt value element     |

### Design Tokens

| Token                            | CSS Variable                         | Description                |
| -------------------------------- | ------------------------------------ | -------------------------- |
| terminal.background              | --p-terminal-background              | Background of root         |
| terminal.border.color            | --p-terminal-border-color            | Border color of root       |
| terminal.color                   | --p-terminal-color                   | Color of root              |
| terminal.height                  | --p-terminal-height                  | Height of root             |
| terminal.padding                 | --p-terminal-padding                 | Padding of root            |
| terminal.border.radius           | --p-terminal-border-radius           | Border radius of root      |
| terminal.prompt.gap              | --p-terminal-prompt-gap              | Gap of prompt              |
| terminal.command.response.margin | --p-terminal-command-response-margin | Margin of command response |
