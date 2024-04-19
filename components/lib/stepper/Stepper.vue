<template>
    <div :class="cx('root')" role="tablist" v-bind="ptmi('root')">
        <slot v-if="$slots.start" name="start" />

        <template v-if="orientation === 'horizontal'">
            <ul ref="nav" :class="cx('nav')" v-bind="ptm('nav')">
                <li
                    v-for="(step, index) of stepperpanels"
                    :key="getStepKey(step, index)"
                    :class="cx('stepper.header', { step, index })"
                    :aria-current="isStepActive(index) ? 'step' : undefined"
                    role="presentation"
                    v-bind="{ ...getStepPT(step, 'root', index), ...getStepPT(step, 'header', index) }"
                    data-pc-name="stepperpanel"
                    :data-p-highlight="isStepActive(index)"
                    :data-p-disabled="isItemDisabled(index)"
                    :data-pc-index="index"
                    :data-p-active="isStepActive(index)"
                >
                    <slot name="header">
                        <StepperHeader
                            :id="getStepHeaderActionId(index)"
                            :template="step.children?.header"
                            :stepperpanel="step"
                            :index="index"
                            :disabled="isItemDisabled(index)"
                            :active="isStepActive(index)"
                            :highlighted="index < d_activeStep"
                            :class="cx('stepper.action')"
                            :aria-controls="getStepContentId(index)"
                            :clickCallback="(event) => onItemClick(event, index)"
                            :getStepPT="getStepPT"
                            :getStepProp="getStepProp"
                            :unstyled="unstyled"
                        />
                    </slot>
                    <slot v-if="index !== stepperpanels.length - 1" name="separator">
                        <StepperSeparator
                            :template="step.children?.separator"
                            :separatorClass="cx('stepper.separator')"
                            :stepperpanel="step"
                            :index="index"
                            :active="isStepActive(index)"
                            :highlighted="index < d_activeStep"
                            :getStepPT="getStepPT(step, 'separator', index)"
                            :unstyled="unstyled"
                        />
                    </slot>
                </li>
            </ul>
            <div :class="cx('panelContainer')" v-bind="ptm('panelContainer')">
                <template v-for="(step, index) of stepperpanels" :key="getStepKey(step, index)">
                    <StepperContent
                        v-show="isStepActive(index)"
                        :id="getStepContentId(index)"
                        :template="step?.children?.content"
                        :stepperpanel="step"
                        :index="index"
                        :active="isStepActive(index)"
                        :highlighted="index < d_activeStep"
                        :clickCallback="(event) => onItemClick(event, index)"
                        :prevCallback="(event) => prevCallback(event, index)"
                        :nextCallback="(event) => nextCallback(event, index)"
                        :getStepPT="getStepPT"
                        :aria-labelledby="getStepHeaderActionId(index)"
                        :unstyled="unstyled"
                    />
                </template>
            </div>
        </template>
        <template v-else-if="orientation === 'vertical'">
            <div
                v-for="(step, index) of stepperpanels"
                ref="nav"
                :key="getStepKey(step, index)"
                :class="cx('panel', { step, index })"
                :aria-current="isStepActive(index) ? 'step' : undefined"
                v-bind="{ ...getStepPT(step, 'root', index), ...getStepPT(step, 'panel', index) }"
                data-pc-name="stepperpanel"
                :data-p-highlight="isStepActive(index)"
                :data-p-disabled="isItemDisabled(index)"
                :data-pc-index="index"
                :data-p-active="isStepActive(index)"
            >
                <div :class="cx('stepper.header', { step, index })" v-bind="getStepPT(step, 'header', index)">
                    <slot name="header">
                        <StepperHeader
                            :id="getStepHeaderActionId(index)"
                            :template="step.children?.header"
                            :stepperpanel="step"
                            :index="index"
                            :disabled="isItemDisabled(index)"
                            :active="isStepActive(index)"
                            :highlighted="index < d_activeStep"
                            :class="cx('stepper.action')"
                            :aria-controls="getStepContentId(index)"
                            :clickCallback="(event) => onItemClick(event, index)"
                            :getStepPT="getStepPT"
                            :getStepProp="getStepProp"
                        />
                    </slot>
                </div>

                <transition name="p-toggleable-content" v-bind="getStepPT(step, 'transition', index)">
                    <div v-show="isStepActive(index)" :class="cx('stepper.toggleableContent')" v-bind="getStepPT(step, 'toggleableContent', index)">
                        <slot v-if="index !== stepperpanels.length - 1" name="separator">
                            <StepperSeparator
                                :template="step.children?.separator"
                                :separatorClass="cx('stepper.separator')"
                                :stepperpanel="step"
                                :index="index"
                                :active="isStepActive(index)"
                                :highlighted="index < d_activeStep"
                                :getStepPT="getStepPT(step, 'separator', index)"
                            />
                        </slot>
                        <slot name="content">
                            <StepperContent
                                :id="getStepContentId(index)"
                                :template="step?.children?.content"
                                :stepperpanel="step"
                                :index="index"
                                :active="isStepActive(index)"
                                :highlighted="index < d_activeStep"
                                :clickCallback="(event) => onItemClick(event, index)"
                                :prevCallback="(event) => prevCallback(event, index)"
                                :nextCallback="(event) => nextCallback(event, index)"
                                :getStepPT="getStepPT"
                                :aria-labelledby="getStepHeaderActionId(index)"
                            />
                        </slot>
                    </div>
                </transition>
            </div>
        </template>
        <slot v-if="$slots.end" name="end" />
    </div>
</template>

<script>
import { UniqueComponentId } from 'primevue/utils';
import { mergeProps } from 'vue';
import BaseStepper from './BaseStepper.vue';
import StepperContent from './StepperContent.vue';
import StepperHeader from './StepperHeader.vue';
import StepperSeparator from './StepperSeparator.vue';

export default {
    name: 'Stepper',
    extends: BaseStepper,
    inheritAttrs: false,
    emits: ['update:activeStep', 'step-change'],
    data() {
        return {
            id: this.$attrs.id,
            d_activeStep: this.activeStep
        };
    },
    watch: {
        '$attrs.id': function (newValue) {
            this.id = newValue || UniqueComponentId();
        },
        activeStep(newValue) {
            this.d_activeStep = newValue;
        }
    },
    mounted() {
        this.id = this.id || UniqueComponentId();
    },
    methods: {
        isStep(child) {
            return child.type.name === 'StepperPanel';
        },
        isStepActive(index) {
            return this.d_activeStep === index;
        },
        getStepProp(step, name) {
            return step.props ? step.props[name] : undefined;
        },
        getStepKey(step, index) {
            return this.getStepProp(step, 'header') || index;
        },
        getStepHeaderActionId(index) {
            return `${this.id}_${index}_header_action`;
        },
        getStepContentId(index) {
            return `${this.id}_${index}_content`;
        },
        getStepPT(step, key, index) {
            const count = this.stepperpanels.length;
            const stepMetaData = {
                props: step.props,
                parent: {
                    instance: this,
                    props: this.$props,
                    state: this.$data
                },
                context: {
                    index,
                    count,
                    first: index === 0,
                    last: index === count - 1,
                    active: this.isStepActive(index),
                    highlighted: index < this.d_activeStep,
                    disabled: this.isItemDisabled(index)
                }
            };

            return mergeProps(this.ptm(`stepperpanel.${key}`, { stepperpanel: stepMetaData }), this.ptm(`stepperpanel.${key}`, stepMetaData), this.ptmo(this.getStepProp(step, 'pt'), key, stepMetaData));
        },
        updateActiveStep(event, index) {
            this.d_activeStep = index;

            this.$emit('update:activeStep', index);
            this.$emit('step-change', {
                originalEvent: event,
                index
            });
        },
        onItemClick(event, index) {
            if (this.linear) {
                event.preventDefault();

                return;
            }

            if (index !== this.d_activeStep) {
                this.updateActiveStep(event, index);
            }
        },
        isItemDisabled(index) {
            return this.linear && !this.isStepActive(index);
        },
        prevCallback(event, index) {
            if (index !== 0) {
                this.updateActiveStep(event, index - 1);
            }
        },
        nextCallback(event, index) {
            if (index !== this.stepperpanels.length - 1) {
                this.updateActiveStep(event, index + 1);
            }
        }
    },
    computed: {
        stepperpanels() {
            return this.$slots.default().reduce((stepperpanels, child) => {
                if (this.isStep(child)) {
                    stepperpanels.push(child);
                } else if (child.children && child.children instanceof Array) {
                    child.children.forEach((nestedChild) => {
                        if (this.isStep(nestedChild)) {
                            stepperpanels.push(nestedChild);
                        }
                    });
                }

                return stepperpanels;
            }, []);
        }
    },
    components: {
        StepperContent,
        StepperHeader,
        StepperSeparator
    }
};
</script>
