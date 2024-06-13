
/**
 *
 * OrganizationChart Design Tokens
 *
 * [Live Demo](https://www.primevue.org/organizationchart/)
 *
 * @module themes/organizationchart
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface OrganizationChartDesignTokens extends ColorSchemeDesignToken<OrganizationChartDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Gutter of root
    *
    * @designToken organizationchart.gutter
    */
    gutter?: string;
    /**
    * Transition duration of root
    *
    * @designToken organizationchart.transition.duration
    */
    transitionDuration?: string;
    }
    /**
    * Used to pass tokens of the node section
    */
    node?: {
        
    /**
    * Background of node
    *
    * @designToken organizationchart.node.background
    */
    background?: string;
    /**
    * Hover background of node
    *
    * @designToken organizationchart.node.hover.background
    */
    hoverBackground?: string;
    /**
    * Selected background of node
    *
    * @designToken organizationchart.node.selected.background
    */
    selectedBackground?: string;
    /**
    * Border color of node
    *
    * @designToken organizationchart.node.border.color
    */
    borderColor?: string;
    /**
    * Color of node
    *
    * @designToken organizationchart.node.color
    */
    color?: string;
    /**
    * Selected color of node
    *
    * @designToken organizationchart.node.selected.color
    */
    selectedColor?: string;
    /**
    * Hover color of node
    *
    * @designToken organizationchart.node.hover.color
    */
    hoverColor?: string;
    /**
    * Padding of node
    *
    * @designToken organizationchart.node.padding
    */
    padding?: string;
    /**
    * Toggleable padding of node
    *
    * @designToken organizationchart.node.toggleable.padding
    */
    toggleablePadding?: string;
    /**
    * Border radius of node
    *
    * @designToken organizationchart.node.border.radius
    */
    borderRadius?: string;
    }
    /**
    * Used to pass tokens of the node toggle button section
    */
    nodeToggleButton?: {
        
    /**
    * Background of node toggle button
    *
    * @designToken organizationchart.node.toggle.button.background
    */
    background?: string;
    /**
    * Hover background of node toggle button
    *
    * @designToken organizationchart.node.toggle.button.hover.background
    */
    hoverBackground?: string;
    /**
    * Border color of node toggle button
    *
    * @designToken organizationchart.node.toggle.button.border.color
    */
    borderColor?: string;
    /**
    * Color of node toggle button
    *
    * @designToken organizationchart.node.toggle.button.color
    */
    color?: string;
    /**
    * Hover color of node toggle button
    *
    * @designToken organizationchart.node.toggle.button.hover.color
    */
    hoverColor?: string;
    /**
    * Size of node toggle button
    *
    * @designToken organizationchart.node.toggle.button.size
    */
    size?: string;
    /**
    * Border radius of node toggle button
    *
    * @designToken organizationchart.node.toggle.button.border.radius
    */
    borderRadius?: string;
    /**
    * Focus ring of node toggle button
    */
    focusRing?: {
        
    /**
    * Focus ring width of node toggle button
    *
    * @designToken organizationchart.node.toggle.button.focus.ring.width
    */
    width?: string;
    /**
    * Focus ring style of node toggle button
    *
    * @designToken organizationchart.node.toggle.button.focus.ring.style
    */
    style?: string;
    /**
    * Focus ring color of node toggle button
    *
    * @designToken organizationchart.node.toggle.button.focus.ring.color
    */
    color?: string;
    /**
    * Focus ring offset of node toggle button
    *
    * @designToken organizationchart.node.toggle.button.focus.ring.offset
    */
    offset?: string;
    /**
    * Focus ring shadow of node toggle button
    *
    * @designToken organizationchart.node.toggle.button.focus.ring.shadow
    */
    shadow?: string;
    };
    }
    /**
    * Used to pass tokens of the connector section
    */
    connector?: {
        
    /**
    * Color of connector
    *
    * @designToken organizationchart.connector.color
    */
    color?: string;
    /**
    * Border radius of connector
    *
    * @designToken organizationchart.connector.border.radius
    */
    borderRadius?: string;
    /**
    * Height of connector
    *
    * @designToken organizationchart.connector.height
    */
    height?: string;
    }
}
