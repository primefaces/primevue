import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-steplist {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
    overflow-x: auto;
}

.p-step {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    gap: ${dt('stepper.step.gap')};
    padding: ${dt('stepper.step.padding')};
}

.p-step:last-of-type {
    flex: initial;
}

.p-step-header {
    border: 0 none;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    transition: background ${dt('stepper.transition.duration')}, color ${dt('stepper.transition.duration')}, border-color ${dt('stepper.transition.duration')}, outline-color ${dt('stepper.transition.duration')}, box-shadow ${dt(
        'stepper.transition.duration'
    )};
    border-radius: ${dt('stepper.step.header.border.radius')};
    outline-color: transparent;
    background: transparent;
    padding: ${dt('stepper.step.header.padding')};
    gap: ${dt('stepper.step.header.gap')};
}

.p-step-header:focus-visible {
    box-shadow: ${dt('stepper.step.header.focus.ring.shadow')};
    outline: ${dt('stepper.step.header.focus.ring.width')} ${dt('stepper.step.header.focus.ring.style')} ${dt('stepper.step.header.focus.ring.color')};
    outline-offset: ${dt('stepper.step.header.focus.ring.offset')};
}

.p-stepper.p-stepper-readonly .p-step {
    cursor: auto;
}

.p-step-title {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    color: ${dt('stepper.step.title.color')};
    font-weight: ${dt('stepper.step.title.font.weight')};
    transition: background ${dt('stepper.transition.duration')}, color ${dt('stepper.transition.duration')}, border-color ${dt('stepper.transition.duration')}, box-shadow ${dt('stepper.transition.duration')}, outline-color ${dt(
        'stepper.transition.duration'
    )};
}

.p-step-number {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${dt('stepper.step.number.color')};
    border: 2px solid ${dt('stepper.step.number.border.color')};
    background: ${dt('stepper.step.number.background')};
    min-width: ${dt('stepper.step.number.size')};
    height: ${dt('stepper.step.number.size')};
    line-height: ${dt('stepper.step.number.size')};
    font-size: ${dt('stepper.step.number.font.size')};
    z-index: 1;
    border-radius: ${dt('stepper.step.number.border.radius')};
    position: relative;
    font-weight: ${dt('stepper.step.number.font.weight')};
}

.p-step-number::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${dt('stepper.step.number.border.radius')};
    box-shadow: ${dt('stepper.step.number.shadow')};
}

.p-step-active .p-step-header {
    cursor: default;
}

.p-step-active .p-step-number {
    background: ${dt('stepper.step.number.active.background')};
    border-color: ${dt('stepper.step.number.active.border.color')};
    color: ${dt('stepper.step.number.active.color')};
}

.p-step-active .p-step-title {
    color: ${dt('stepper.step.title.active.color')};
}

.p-step:not(.p-disabled):focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-step:has(~ .p-step-active) .p-stepper-separator {
    background: ${dt('stepper.separator.active.background')};
}

.p-step:has(~ .p-step-active) .p-stepper-separator {
    background: ${dt('stepper.separator.active.background')};
}

.p-stepper-separator {
    flex: 1 1 0;
    background: ${dt('stepper.separator.background')};
    width: 100%;
    height: ${dt('stepper.separator.size')};
    transition: background ${dt('stepper.transition.duration')}, color ${dt('stepper.transition.duration')}, border-color ${dt('stepper.transition.duration')}, box-shadow ${dt('stepper.transition.duration')}, outline-color ${dt(
        'stepper.transition.duration'
    )};
}

.p-steppanels {
    padding: ${dt('stepper.steppanels.padding')};
}

.p-steppanel {
    background: ${dt('stepper.steppanel.content.background')};
    color: ${dt('stepper.steppanel.content.color')};
}

.p-stepper:has(.p-stepitem) {
    display: flex;
    flex-direction: column;
}

.p-stepitem {
    display: flex;
    flex-direction: column;
    flex: initial;
}

.p-stepitem.p-stepitem-active {
    flex: 1 1 auto;
}

.p-stepitem .p-step {
    flex: initial;
}

.p-stepitem .p-steppanel-content {
    width: 100%;
    padding: ${dt('stepper.steppanel.padding')};
}

.p-stepitem .p-steppanel {
    display: flex;
    flex: 1 1 auto;
}

.p-stepitem .p-stepper-separator {
    flex: 0 0 auto;
    width: ${dt('stepper.separator.size')};
    height: auto;
    margin: ${dt('stepper.separator.margin')};
    position: relative;
    left: calc(-1 * ${dt('stepper.separator.size')});
}

.p-stepitem:has(~ .p-stepitem-active) .p-stepper-separator {
    background: ${dt('stepper.separator.active.background')};
}

.p-stepitem:last-of-type .p-steppanel {
    padding: ${dt('stepper.steppanel.last.padding')};
}
`;

const classes = {
    root: ({ props }) => [
        'p-stepper p-component',
        {
            'p-readonly': props.linear
        }
    ],
    separator: 'p-stepper-separator'
};

export default BaseStyle.extend({
    name: 'stepper',
    theme,
    classes
});
