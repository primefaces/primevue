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
         * Orientation of separator
         */
        orientation?: {
            /**
             * Orientation vertical of separator
             */
            vertical?: {
                /**
                 * Orientation vertical margin of separator
                 *
                 * @designToken stepper.separator.orientation.vertical.margin
                 */
                margin?: string;
            };
        };
        /**
         * Size of separator
         *
         * @designToken stepper.separator.size
         */
        size?: string;
    };
    /**
     * Used to pass tokens of the item section
     */
    item?: {
        /**
         * Padding of item
         *
         * @designToken stepper.item.padding
         */
        padding?: string;
        /**
         * Gap of item
         *
         * @designToken stepper.item.gap
         */
        gap?: string;
    };
    /**
     * Used to pass tokens of the item header section
     */
    itemHeader?: {
        /**
         * Padding of item header
         *
         * @designToken stepper.item.header.padding
         */
        padding?: string;
        /**
         * Border radius of item header
         *
         * @designToken stepper.item.header.border.radius
         */
        borderRadius?: string;
        /**
         * Focus ring of item header
         */
        focusRing?: {
            /**
             * Focus ring width of item header
             *
             * @designToken stepper.item.header.focus.ring.width
             */
            width?: string;
            /**
             * Focus ring style of item header
             *
             * @designToken stepper.item.header.focus.ring.style
             */
            style?: string;
            /**
             * Focus ring color of item header
             *
             * @designToken stepper.item.header.focus.ring.color
             */
            color?: string;
            /**
             * Focus ring offset of item header
             *
             * @designToken stepper.item.header.focus.ring.offset
             */
            offset?: string;
            /**
             * Focus ring shadow of item header
             *
             * @designToken stepper.item.header.focus.ring.shadow
             */
            shadow?: string;
        };
        /**
         * Gap of item header
         *
         * @designToken stepper.item.header.gap
         */
        gap?: string;
    };
    /**
     * Used to pass tokens of the item title section
     */
    itemTitle?: {
        /**
         * Color of item title
         *
         * @designToken stepper.item.title.color
         */
        color?: string;
        /**
         * Active color of item title
         *
         * @designToken stepper.item.title.active.color
         */
        activeColor?: string;
        /**
         * Font weight of item title
         *
         * @designToken stepper.item.title.font.weight
         */
        fontWeight?: string;
    };
    /**
     * Used to pass tokens of the item number section
     */
    itemNumber?: {
        /**
         * Background of item number
         *
         * @designToken stepper.item.number.background
         */
        background?: string;
        /**
         * Active background of item number
         *
         * @designToken stepper.item.number.active.background
         */
        activeBackground?: string;
        /**
         * Border color of item number
         *
         * @designToken stepper.item.number.border.color
         */
        borderColor?: string;
        /**
         * Color of item number
         *
         * @designToken stepper.item.number.color
         */
        color?: string;
        /**
         * Active color of item number
         *
         * @designToken stepper.item.number.active.color
         */
        activeColor?: string;
        /**
         * Size of item number
         *
         * @designToken stepper.item.number.size
         */
        size?: string;
        /**
         * Font size of item number
         *
         * @designToken stepper.item.number.font.size
         */
        fontSize?: string;
        /**
         * Font weight of item number
         *
         * @designToken stepper.item.number.font.weight
         */
        fontWeight?: string;
        /**
         * Border radius of item number
         *
         * @designToken stepper.item.number.border.radius
         */
        borderRadius?: string;
        /**
         * Shadow of item number
         *
         * @designToken stepper.item.number.shadow
         */
        shadow?: string;
    };
    /**
     * Used to pass tokens of the vertical panel container section
     */
    verticalPanelContainer?: {
        /**
         * Padding left of vertical panel container
         *
         * @designToken stepper.vertical.panel.container.padding.left
         */
        paddingLeft?: string;
    };
    /**
     * Used to pass tokens of the panel content section
     */
    panelContent?: {
        /**
         * Background of panel content
         *
         * @designToken stepper.panel.content.background
         */
        background?: string;
        /**
         * Color of panel content
         *
         * @designToken stepper.panel.content.color
         */
        color?: string;
        /**
         * Orientation of panel content
         */
        orientation?: {
            /**
             * Orientation horizontal of panel content
             */
            horizontal?: {
                /**
                 * Orientation horizontal padding of panel content
                 *
                 * @designToken stepper.panel.content.orientation.horizontal.padding
                 */
                padding?: string;
            };
            /**
             * Orientation vertical of panel content
             */
            vertical?: {
                /**
                 * Orientation vertical padding of panel content
                 *
                 * @designToken stepper.panel.content.orientation.vertical.padding
                 */
                padding?: string;
                /**
                 * Orientation vertical last of panel content
                 */
                last?: {
                    /**
                     * Orientation vertical last padding of panel content
                     *
                     * @designToken stepper.panel.content.orientation.vertical.last.padding
                     */
                    padding?: string;
                };
            };
        };
    };
}
