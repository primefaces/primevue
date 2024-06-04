/**
 *
 * Stepper Design Tokens
 *
 * [Live Demo](https://www.primevue.org/stepper/)
 *
 * @module themes/stepper
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface StepperDesignTokens extends ColorSchemeDesignToken<StepperDesignTokens> {
    /**
     * Used to pass tokens of the root section
     */
    root?: {
        /**
         * Transition duration of root
         *
         * @designToken stepper.transition.duration
         */
        transitionDuration?: string;
    };
    /**
     * Used to pass tokens of the separator section
     */
    separator?: {
        /**
         * Background of separator
         *
         * @designToken stepper.separator.background
         */
        background?: string;
        /**
         * Active background of separator
         *
         * @designToken stepper.separator.active.background
         */
        activeBackground?: string;
        /**
         * Margin of separator
         *
         * @designToken stepper.separator.margin
         */
        margin?: string;
        /**
         * Size of separator
         *
         * @designToken stepper.separator.size
         */
        size?: string;
    };
    /**
     * Used to pass tokens of the step section
     */
    step?: {
        /**
         * Padding of step
         *
         * @designToken stepper.step.padding
         */
        padding?: string;
        /**
         * Gap of step
         *
         * @designToken stepper.step.gap
         */
        gap?: string;
    };
    /**
     * Used to pass tokens of the step header section
     */
    stepHeader?: {
        /**
         * Padding of step header
         *
         * @designToken stepper.step.header.padding
         */
        padding?: string;
        /**
         * Border radius of step header
         *
         * @designToken stepper.step.header.border.radius
         */
        borderRadius?: string;
        /**
         * Focus ring of step header
         */
        focusRing?: {
            /**
             * Focus ring width of step header
             *
             * @designToken stepper.step.header.focus.ring.width
             */
            width?: string;
            /**
             * Focus ring style of step header
             *
             * @designToken stepper.step.header.focus.ring.style
             */
            style?: string;
            /**
             * Focus ring color of step header
             *
             * @designToken stepper.step.header.focus.ring.color
             */
            color?: string;
            /**
             * Focus ring offset of step header
             *
             * @designToken stepper.step.header.focus.ring.offset
             */
            offset?: string;
            /**
             * Focus ring shadow of step header
             *
             * @designToken stepper.step.header.focus.ring.shadow
             */
            shadow?: string;
        };
        /**
         * Gap of step header
         *
         * @designToken stepper.step.header.gap
         */
        gap?: string;
    };
    /**
     * Used to pass tokens of the step title section
     */
    stepTitle?: {
        /**
         * Color of step title
         *
         * @designToken stepper.step.title.color
         */
        color?: string;
        /**
         * Active color of step title
         *
         * @designToken stepper.step.title.active.color
         */
        activeColor?: string;
        /**
         * Font weight of step title
         *
         * @designToken stepper.step.title.font.weight
         */
        fontWeight?: string;
    };
    /**
     * Used to pass tokens of the step number section
     */
    stepNumber?: {
        /**
         * Background of step number
         *
         * @designToken stepper.step.number.background
         */
        background?: string;
        /**
         * Active background of step number
         *
         * @designToken stepper.step.number.active.background
         */
        activeBackground?: string;
        /**
         * Border color of step number
         *
         * @designToken stepper.step.number.border.color
         */
        borderColor?: string;
        /**
         * Active border color of step number
         *
         * @designToken stepper.step.number.active.border.color
         */
        activeBorderColor?: string;
        /**
         * Color of step number
         *
         * @designToken stepper.step.number.color
         */
        color?: string;
        /**
         * Active color of step number
         *
         * @designToken stepper.step.number.active.color
         */
        activeColor?: string;
        /**
         * Size of step number
         *
         * @designToken stepper.step.number.size
         */
        size?: string;
        /**
         * Font size of step number
         *
         * @designToken stepper.step.number.font.size
         */
        fontSize?: string;
        /**
         * Font weight of step number
         *
         * @designToken stepper.step.number.font.weight
         */
        fontWeight?: string;
        /**
         * Border radius of step number
         *
         * @designToken stepper.step.number.border.radius
         */
        borderRadius?: string;
        /**
         * Shadow of step number
         *
         * @designToken stepper.step.number.shadow
         */
        shadow?: string;
    };
    /**
     * Used to pass tokens of the steppanels section
     */
    steppanels?: {
        /**
         * Padding of steppanels
         *
         * @designToken stepper.steppanels.padding
         */
        padding?: string;
    };
    /**
     * Used to pass tokens of the steppanel section
     */
    steppanel?: {
        /**
         * Background of steppanel
         *
         * @designToken stepper.steppanel.background
         */
        background?: string;
        /**
         * Color of steppanel
         *
         * @designToken stepper.steppanel.color
         */
        color?: string;
        /**
         * Padding of steppanel
         *
         * @designToken stepper.steppanel.padding
         */
        padding?: string;
        /**
         * Last of steppanel
         */
        last?: {
            /**
             * Last padding of steppanel
             *
             * @designToken stepper.steppanel.last.padding
             */
            padding?: string;
        };
    };
}
