
/**
 *
 * TreeTable Design Tokens
 *
 * [Live Demo](https://www.primevue.org/treetable/)
 *
 * @module themes/treetable
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface TreeTableDesignTokens extends ColorSchemeDesignToken<TreeTableDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Transition duration of root
    *
    * @designToken treetable.transition.duration
    */
    transitionDuration?: string;
    /**
    * Border color of root
    *
    * @designToken treetable.border.color
    */
    borderColor?: string;
    }
    /**
    * Used to pass tokens of the header section
    */
    header?: {
        
    /**
    * Background of header
    *
    * @designToken treetable.header.background
    */
    background?: string;
    /**
    * Border color of header
    *
    * @designToken treetable.header.border.color
    */
    borderColor?: string;
    /**
    * Color of header
    *
    * @designToken treetable.header.color
    */
    color?: string;
    /**
    * Border width of header
    *
    * @designToken treetable.header.border.width
    */
    borderWidth?: string;
    /**
    * Padding of header
    *
    * @designToken treetable.header.padding
    */
    padding?: string;
    }
    /**
    * Used to pass tokens of the header cell section
    */
    headerCell?: {
        
    /**
    * Background of header cell
    *
    * @designToken treetable.header.cell.background
    */
    background?: string;
    /**
    * Hover background of header cell
    *
    * @designToken treetable.header.cell.hover.background
    */
    hoverBackground?: string;
    /**
    * Selected background of header cell
    *
    * @designToken treetable.header.cell.selected.background
    */
    selectedBackground?: string;
    /**
    * Border color of header cell
    *
    * @designToken treetable.header.cell.border.color
    */
    borderColor?: string;
    /**
    * Color of header cell
    *
    * @designToken treetable.header.cell.color
    */
    color?: string;
    /**
    * Hover color of header cell
    *
    * @designToken treetable.header.cell.hover.color
    */
    hoverColor?: string;
    /**
    * Selected color of header cell
    *
    * @designToken treetable.header.cell.selected.color
    */
    selectedColor?: string;
    /**
    * Gap of header cell
    *
    * @designToken treetable.header.cell.gap
    */
    gap?: string;
    /**
    * Padding of header cell
    *
    * @designToken treetable.header.cell.padding
    */
    padding?: string;
    /**
    * Focus ring of header cell
    */
    focusRing?: {
        
    /**
    * Focus ring width of header cell
    *
    * @designToken treetable.header.cell.focus.ring.width
    */
    width?: string;
    /**
    * Focus ring style of header cell
    *
    * @designToken treetable.header.cell.focus.ring.style
    */
    style?: string;
    /**
    * Focus ring color of header cell
    *
    * @designToken treetable.header.cell.focus.ring.color
    */
    color?: string;
    /**
    * Focus ring offset of header cell
    *
    * @designToken treetable.header.cell.focus.ring.offset
    */
    offset?: string;
    /**
    * Focus ring shadow of header cell
    *
    * @designToken treetable.header.cell.focus.ring.shadow
    */
    shadow?: string;
    };
    }
    /**
    * Used to pass tokens of the column title section
    */
    columnTitle?: {
        
    /**
    * Font weight of column title
    *
    * @designToken treetable.column.title.font.weight
    */
    fontWeight?: string;
    }
    /**
    * Used to pass tokens of the row section
    */
    row?: {
        
    /**
    * Background of row
    *
    * @designToken treetable.row.background
    */
    background?: string;
    /**
    * Hover background of row
    *
    * @designToken treetable.row.hover.background
    */
    hoverBackground?: string;
    /**
    * Selected background of row
    *
    * @designToken treetable.row.selected.background
    */
    selectedBackground?: string;
    /**
    * Color of row
    *
    * @designToken treetable.row.color
    */
    color?: string;
    /**
    * Hover color of row
    *
    * @designToken treetable.row.hover.color
    */
    hoverColor?: string;
    /**
    * Selected color of row
    *
    * @designToken treetable.row.selected.color
    */
    selectedColor?: string;
    /**
    * Focus ring of row
    */
    focusRing?: {
        
    /**
    * Focus ring width of row
    *
    * @designToken treetable.row.focus.ring.width
    */
    width?: string;
    /**
    * Focus ring style of row
    *
    * @designToken treetable.row.focus.ring.style
    */
    style?: string;
    /**
    * Focus ring color of row
    *
    * @designToken treetable.row.focus.ring.color
    */
    color?: string;
    /**
    * Focus ring offset of row
    *
    * @designToken treetable.row.focus.ring.offset
    */
    offset?: string;
    /**
    * Focus ring shadow of row
    *
    * @designToken treetable.row.focus.ring.shadow
    */
    shadow?: string;
    };
    }
    /**
    * Used to pass tokens of the body cell section
    */
    bodyCell?: {
        
    /**
    * Border color of body cell
    *
    * @designToken treetable.body.cell.border.color
    */
    borderColor?: string;
    /**
    * Padding of body cell
    *
    * @designToken treetable.body.cell.padding
    */
    padding?: string;
    /**
    * Gap of body cell
    *
    * @designToken treetable.body.cell.gap
    */
    gap?: string;
    /**
    * Selected border color of body cell
    *
    * @designToken treetable.body.cell.selected.border.color
    */
    selectedBorderColor?: string;
    }
    /**
    * Used to pass tokens of the footer cell section
    */
    footerCell?: {
        
    /**
    * Background of footer cell
    *
    * @designToken treetable.footer.cell.background
    */
    background?: string;
    /**
    * Border color of footer cell
    *
    * @designToken treetable.footer.cell.border.color
    */
    borderColor?: string;
    /**
    * Color of footer cell
    *
    * @designToken treetable.footer.cell.color
    */
    color?: string;
    /**
    * Padding of footer cell
    *
    * @designToken treetable.footer.cell.padding
    */
    padding?: string;
    }
    /**
    * Used to pass tokens of the column footer section
    */
    columnFooter?: {
        
    /**
    * Font weight of column footer
    *
    * @designToken treetable.column.footer.font.weight
    */
    fontWeight?: string;
    }
    /**
    * Used to pass tokens of the footer section
    */
    footer?: {
        
    /**
    * Background of footer
    *
    * @designToken treetable.footer.background
    */
    background?: string;
    /**
    * Border color of footer
    *
    * @designToken treetable.footer.border.color
    */
    borderColor?: string;
    /**
    * Color of footer
    *
    * @designToken treetable.footer.color
    */
    color?: string;
    /**
    * Border width of footer
    *
    * @designToken treetable.footer.border.width
    */
    borderWidth?: string;
    /**
    * Padding of footer
    *
    * @designToken treetable.footer.padding
    */
    padding?: string;
    }
    /**
    * Used to pass tokens of the column resizer width section
    */
    columnResizerWidth?: {
        
    /**
    * 0 of column resizer width
    *
    * @designToken treetable.column.resizer.width.0
    */
    0?: string;
    /**
    * 1 of column resizer width
    *
    * @designToken treetable.column.resizer.width.1
    */
    1?: string;
    /**
    * 2 of column resizer width
    *
    * @designToken treetable.column.resizer.width.2
    */
    2?: string;
    /**
    * 3 of column resizer width
    *
    * @designToken treetable.column.resizer.width.3
    */
    3?: string;
    /**
    * 4 of column resizer width
    *
    * @designToken treetable.column.resizer.width.4
    */
    4?: string;
    /**
    * 5 of column resizer width
    *
    * @designToken treetable.column.resizer.width.5
    */
    5?: string;
    }
    /**
    * Used to pass tokens of the resize indicator section
    */
    resizeIndicator?: {
        
    /**
    * Width of resize indicator
    *
    * @designToken treetable.resize.indicator.width
    */
    width?: string;
    /**
    * Color of resize indicator
    *
    * @designToken treetable.resize.indicator.color
    */
    color?: string;
    }
    /**
    * Used to pass tokens of the sort icon section
    */
    sortIcon?: {
        
    /**
    * Color of sort icon
    *
    * @designToken treetable.sort.icon.color
    */
    color?: string;
    /**
    * Hover color of sort icon
    *
    * @designToken treetable.sort.icon.hover.color
    */
    hoverColor?: string;
    }
    /**
    * Used to pass tokens of the loading icon section
    */
    loadingIcon?: {
        
    /**
    * Size of loading icon
    *
    * @designToken treetable.loading.icon.size
    */
    size?: string;
    }
    /**
    * Used to pass tokens of the node toggle button section
    */
    nodeToggleButton?: {
        
    /**
    * Hover background of node toggle button
    *
    * @designToken treetable.node.toggle.button.hover.background
    */
    hoverBackground?: string;
    /**
    * Selected hover background of node toggle button
    *
    * @designToken treetable.node.toggle.button.selected.hover.background
    */
    selectedHoverBackground?: string;
    /**
    * Color of node toggle button
    *
    * @designToken treetable.node.toggle.button.color
    */
    color?: string;
    /**
    * Hover color of node toggle button
    *
    * @designToken treetable.node.toggle.button.hover.color
    */
    hoverColor?: string;
    /**
    * Selected hover color of node toggle button
    *
    * @designToken treetable.node.toggle.button.selected.hover.color
    */
    selectedHoverColor?: string;
    /**
    * Size of node toggle button
    *
    * @designToken treetable.node.toggle.button.size
    */
    size?: string;
    /**
    * Border radius of node toggle button
    *
    * @designToken treetable.node.toggle.button.border.radius
    */
    borderRadius?: string;
    /**
    * Focus ring of node toggle button
    */
    focusRing?: {
        
    /**
    * Focus ring width of node toggle button
    *
    * @designToken treetable.node.toggle.button.focus.ring.width
    */
    width?: string;
    /**
    * Focus ring style of node toggle button
    *
    * @designToken treetable.node.toggle.button.focus.ring.style
    */
    style?: string;
    /**
    * Focus ring color of node toggle button
    *
    * @designToken treetable.node.toggle.button.focus.ring.color
    */
    color?: string;
    /**
    * Focus ring offset of node toggle button
    *
    * @designToken treetable.node.toggle.button.focus.ring.offset
    */
    offset?: string;
    /**
    * Focus ring shadow of node toggle button
    *
    * @designToken treetable.node.toggle.button.focus.ring.shadow
    */
    shadow?: string;
    };
    }
    /**
    * Used to pass tokens of the paginator top section
    */
    paginatorTop?: {
        
    /**
    * Border color of paginator top
    *
    * @designToken treetable.paginator.top.border.color
    */
    borderColor?: string;
    /**
    * Border width of paginator top
    *
    * @designToken treetable.paginator.top.border.width
    */
    borderWidth?: string;
    }
    /**
    * Used to pass tokens of the paginator bottom section
    */
    paginatorBottom?: {
        
    /**
    * Border color of paginator bottom
    *
    * @designToken treetable.paginator.bottom.border.color
    */
    borderColor?: string;
    /**
    * Border width of paginator bottom
    *
    * @designToken treetable.paginator.bottom.border.width
    */
    borderWidth?: string;
    }
}
