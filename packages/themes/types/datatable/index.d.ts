
/**
 *
 * DataTable Design Tokens
 *
 * [Live Demo](https://www.primevue.org/datatable/)
 *
 * @module themes/datatable
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface DataTableDesignTokens extends ColorSchemeDesignToken<DataTableDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Transition duration of root
    *
    * @designToken datatable.transition.duration
    */
    transitionDuration?: string;
    /**
    * Border color of root
    *
    * @designToken datatable.border.color
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
    * @designToken datatable.header.background
    */
    background?: string;
    /**
    * Border color of header
    *
    * @designToken datatable.header.border.color
    */
    borderColor?: string;
    /**
    * Color of header
    *
    * @designToken datatable.header.color
    */
    color?: string;
    /**
    * Border width of header
    *
    * @designToken datatable.header.border.width
    */
    borderWidth?: string;
    /**
    * Padding of header
    *
    * @designToken datatable.header.padding
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
    * @designToken datatable.header.cell.background
    */
    background?: string;
    /**
    * Hover background of header cell
    *
    * @designToken datatable.header.cell.hover.background
    */
    hoverBackground?: string;
    /**
    * Selected background of header cell
    *
    * @designToken datatable.header.cell.selected.background
    */
    selectedBackground?: string;
    /**
    * Border color of header cell
    *
    * @designToken datatable.header.cell.border.color
    */
    borderColor?: string;
    /**
    * Color of header cell
    *
    * @designToken datatable.header.cell.color
    */
    color?: string;
    /**
    * Hover color of header cell
    *
    * @designToken datatable.header.cell.hover.color
    */
    hoverColor?: string;
    /**
    * Selected color of header cell
    *
    * @designToken datatable.header.cell.selected.color
    */
    selectedColor?: string;
    /**
    * Gap of header cell
    *
    * @designToken datatable.header.cell.gap
    */
    gap?: string;
    /**
    * Padding of header cell
    *
    * @designToken datatable.header.cell.padding
    */
    padding?: string;
    /**
    * Focus ring of header cell
    */
    focusRing?: {
        
    /**
    * Focus ring width of header cell
    *
    * @designToken datatable.header.cell.focus.ring.width
    */
    width?: string;
    /**
    * Focus ring style of header cell
    *
    * @designToken datatable.header.cell.focus.ring.style
    */
    style?: string;
    /**
    * Focus ring color of header cell
    *
    * @designToken datatable.header.cell.focus.ring.color
    */
    color?: string;
    /**
    * Focus ring offset of header cell
    *
    * @designToken datatable.header.cell.focus.ring.offset
    */
    offset?: string;
    /**
    * Focus ring shadow of header cell
    *
    * @designToken datatable.header.cell.focus.ring.shadow
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
    * @designToken datatable.column.title.font.weight
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
    * @designToken datatable.row.background
    */
    background?: string;
    /**
    * Hover background of row
    *
    * @designToken datatable.row.hover.background
    */
    hoverBackground?: string;
    /**
    * Selected background of row
    *
    * @designToken datatable.row.selected.background
    */
    selectedBackground?: string;
    /**
    * Color of row
    *
    * @designToken datatable.row.color
    */
    color?: string;
    /**
    * Hover color of row
    *
    * @designToken datatable.row.hover.color
    */
    hoverColor?: string;
    /**
    * Selected color of row
    *
    * @designToken datatable.row.selected.color
    */
    selectedColor?: string;
    /**
    * Focus ring of row
    */
    focusRing?: {
        
    /**
    * Focus ring width of row
    *
    * @designToken datatable.row.focus.ring.width
    */
    width?: string;
    /**
    * Focus ring style of row
    *
    * @designToken datatable.row.focus.ring.style
    */
    style?: string;
    /**
    * Focus ring color of row
    *
    * @designToken datatable.row.focus.ring.color
    */
    color?: string;
    /**
    * Focus ring offset of row
    *
    * @designToken datatable.row.focus.ring.offset
    */
    offset?: string;
    /**
    * Focus ring shadow of row
    *
    * @designToken datatable.row.focus.ring.shadow
    */
    shadow?: string;
    };
    /**
    * Striped background of row
    *
    * @designToken datatable.row.striped.background
    */
    stripedBackground?: string;
    }
    /**
    * Used to pass tokens of the body cell section
    */
    bodyCell?: {
        
    /**
    * Border color of body cell
    *
    * @designToken datatable.body.cell.border.color
    */
    borderColor?: string;
    /**
    * Padding of body cell
    *
    * @designToken datatable.body.cell.padding
    */
    padding?: string;
    /**
    * Selected border color of body cell
    *
    * @designToken datatable.body.cell.selected.border.color
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
    * @designToken datatable.footer.cell.background
    */
    background?: string;
    /**
    * Border color of footer cell
    *
    * @designToken datatable.footer.cell.border.color
    */
    borderColor?: string;
    /**
    * Color of footer cell
    *
    * @designToken datatable.footer.cell.color
    */
    color?: string;
    /**
    * Padding of footer cell
    *
    * @designToken datatable.footer.cell.padding
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
    * @designToken datatable.column.footer.font.weight
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
    * @designToken datatable.footer.background
    */
    background?: string;
    /**
    * Border color of footer
    *
    * @designToken datatable.footer.border.color
    */
    borderColor?: string;
    /**
    * Color of footer
    *
    * @designToken datatable.footer.color
    */
    color?: string;
    /**
    * Border width of footer
    *
    * @designToken datatable.footer.border.width
    */
    borderWidth?: string;
    /**
    * Padding of footer
    *
    * @designToken datatable.footer.padding
    */
    padding?: string;
    }
    /**
    * Used to pass tokens of the drop point color section
    */
    dropPointColor?: {
        
    /**
    * 0 of drop point color
    *
    * @designToken datatable.drop.point.color.0
    */
    0?: string;
    /**
    * 1 of drop point color
    *
    * @designToken datatable.drop.point.color.1
    */
    1?: string;
    /**
    * 2 of drop point color
    *
    * @designToken datatable.drop.point.color.2
    */
    2?: string;
    /**
    * 3 of drop point color
    *
    * @designToken datatable.drop.point.color.3
    */
    3?: string;
    /**
    * 4 of drop point color
    *
    * @designToken datatable.drop.point.color.4
    */
    4?: string;
    /**
    * 5 of drop point color
    *
    * @designToken datatable.drop.point.color.5
    */
    5?: string;
    /**
    * 6 of drop point color
    *
    * @designToken datatable.drop.point.color.6
    */
    6?: string;
    /**
    * 7 of drop point color
    *
    * @designToken datatable.drop.point.color.7
    */
    7?: string;
    /**
    * 8 of drop point color
    *
    * @designToken datatable.drop.point.color.8
    */
    8?: string;
    /**
    * 9 of drop point color
    *
    * @designToken datatable.drop.point.color.9
    */
    9?: string;
    /**
    * 10 of drop point color
    *
    * @designToken datatable.drop.point.color.10
    */
    10?: string;
    /**
    * 11 of drop point color
    *
    * @designToken datatable.drop.point.color.11
    */
    11?: string;
    /**
    * 12 of drop point color
    *
    * @designToken datatable.drop.point.color.12
    */
    12?: string;
    /**
    * 13 of drop point color
    *
    * @designToken datatable.drop.point.color.13
    */
    13?: string;
    /**
    * 14 of drop point color
    *
    * @designToken datatable.drop.point.color.14
    */
    14?: string;
    }
    /**
    * Used to pass tokens of the column resizer width section
    */
    columnResizerWidth?: {
        
    /**
    * 0 of column resizer width
    *
    * @designToken datatable.column.resizer.width.0
    */
    0?: string;
    /**
    * 1 of column resizer width
    *
    * @designToken datatable.column.resizer.width.1
    */
    1?: string;
    /**
    * 2 of column resizer width
    *
    * @designToken datatable.column.resizer.width.2
    */
    2?: string;
    /**
    * 3 of column resizer width
    *
    * @designToken datatable.column.resizer.width.3
    */
    3?: string;
    /**
    * 4 of column resizer width
    *
    * @designToken datatable.column.resizer.width.4
    */
    4?: string;
    /**
    * 5 of column resizer width
    *
    * @designToken datatable.column.resizer.width.5
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
    * @designToken datatable.resize.indicator.width
    */
    width?: string;
    /**
    * Color of resize indicator
    *
    * @designToken datatable.resize.indicator.color
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
    * @designToken datatable.sort.icon.color
    */
    color?: string;
    /**
    * Hover color of sort icon
    *
    * @designToken datatable.sort.icon.hover.color
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
    * @designToken datatable.loading.icon.size
    */
    size?: string;
    }
    /**
    * Used to pass tokens of the row toggle button section
    */
    rowToggleButton?: {
        
    /**
    * Hover background of row toggle button
    *
    * @designToken datatable.row.toggle.button.hover.background
    */
    hoverBackground?: string;
    /**
    * Selected hover background of row toggle button
    *
    * @designToken datatable.row.toggle.button.selected.hover.background
    */
    selectedHoverBackground?: string;
    /**
    * Color of row toggle button
    *
    * @designToken datatable.row.toggle.button.color
    */
    color?: string;
    /**
    * Hover color of row toggle button
    *
    * @designToken datatable.row.toggle.button.hover.color
    */
    hoverColor?: string;
    /**
    * Selected hover color of row toggle button
    *
    * @designToken datatable.row.toggle.button.selected.hover.color
    */
    selectedHoverColor?: string;
    /**
    * Size of row toggle button
    *
    * @designToken datatable.row.toggle.button.size
    */
    size?: string;
    /**
    * Border radius of row toggle button
    *
    * @designToken datatable.row.toggle.button.border.radius
    */
    borderRadius?: string;
    /**
    * Focus ring of row toggle button
    */
    focusRing?: {
        
    /**
    * Focus ring width of row toggle button
    *
    * @designToken datatable.row.toggle.button.focus.ring.width
    */
    width?: string;
    /**
    * Focus ring style of row toggle button
    *
    * @designToken datatable.row.toggle.button.focus.ring.style
    */
    style?: string;
    /**
    * Focus ring color of row toggle button
    *
    * @designToken datatable.row.toggle.button.focus.ring.color
    */
    color?: string;
    /**
    * Focus ring offset of row toggle button
    *
    * @designToken datatable.row.toggle.button.focus.ring.offset
    */
    offset?: string;
    /**
    * Focus ring shadow of row toggle button
    *
    * @designToken datatable.row.toggle.button.focus.ring.shadow
    */
    shadow?: string;
    };
    }
    /**
    * Used to pass tokens of the filter section
    */
    filter?: {
        
    /**
    * Inline gap of filter
    *
    * @designToken datatable.filter.inline.gap
    */
    inlineGap?: string;
    /**
    * Overlay select of filter
    */
    overlaySelect?: {
        
    /**
    * Overlay select background of filter
    *
    * @designToken datatable.filter.overlay.select.background
    */
    background?: string;
    /**
    * Overlay select border color of filter
    *
    * @designToken datatable.filter.overlay.select.border.color
    */
    borderColor?: string;
    /**
    * Overlay select border radius of filter
    *
    * @designToken datatable.filter.overlay.select.border.radius
    */
    borderRadius?: string;
    /**
    * Overlay select color of filter
    *
    * @designToken datatable.filter.overlay.select.color
    */
    color?: string;
    /**
    * Overlay select shadow of filter
    *
    * @designToken datatable.filter.overlay.select.shadow
    */
    shadow?: string;
    };
    /**
    * Overlay popover of filter
    */
    overlayPopover?: {
        
    /**
    * Overlay popover background of filter
    *
    * @designToken datatable.filter.overlay.popover.background
    */
    background?: string;
    /**
    * Overlay popover border color of filter
    *
    * @designToken datatable.filter.overlay.popover.border.color
    */
    borderColor?: string;
    /**
    * Overlay popover border radius of filter
    *
    * @designToken datatable.filter.overlay.popover.border.radius
    */
    borderRadius?: string;
    /**
    * Overlay popover color of filter
    *
    * @designToken datatable.filter.overlay.popover.color
    */
    color?: string;
    /**
    * Overlay popover shadow of filter
    *
    * @designToken datatable.filter.overlay.popover.shadow
    */
    shadow?: string;
    /**
    * Overlay popover padding of filter
    *
    * @designToken datatable.filter.overlay.popover.padding
    */
    padding?: string;
    /**
    * Overlay popover gap of filter
    *
    * @designToken datatable.filter.overlay.popover.gap
    */
    gap?: string;
    };
    /**
    * Rule of filter
    */
    rule?: {
        
    /**
    * Rule border color of filter
    *
    * @designToken datatable.filter.rule.border.color
    */
    borderColor?: string;
    };
    /**
    * Constraint list of filter
    */
    constraintList?: {
        
    /**
    * Constraint list padding of filter
    *
    * @designToken datatable.filter.constraint.list.padding
    */
    padding?: string;
    /**
    * Constraint list gap of filter
    *
    * @designToken datatable.filter.constraint.list.gap
    */
    gap?: string;
    };
    /**
    * Constraint of filter
    */
    constraint?: {
        
    /**
    * Constraint focus background of filter
    *
    * @designToken datatable.filter.constraint.focus.background
    */
    focusBackground?: string;
    /**
    * Constraint selected background of filter
    *
    * @designToken datatable.filter.constraint.selected.background
    */
    selectedBackground?: string;
    /**
    * Constraint selected focus background of filter
    *
    * @designToken datatable.filter.constraint.selected.focus.background
    */
    selectedFocusBackground?: string;
    /**
    * Constraint color of filter
    *
    * @designToken datatable.filter.constraint.color
    */
    color?: string;
    /**
    * Constraint focus color of filter
    *
    * @designToken datatable.filter.constraint.focus.color
    */
    focusColor?: string;
    /**
    * Constraint selected color of filter
    *
    * @designToken datatable.filter.constraint.selected.color
    */
    selectedColor?: string;
    /**
    * Constraint selected focus color of filter
    *
    * @designToken datatable.filter.constraint.selected.focus.color
    */
    selectedFocusColor?: string;
    /**
    * Constraint separator of filter
    */
    separator?: {
        
    /**
    * Constraint separator border color of filter
    *
    * @designToken datatable.filter.constraint.separator.border.color
    */
    borderColor?: string;
    };
    /**
    * Constraint padding of filter
    *
    * @designToken datatable.filter.constraint.padding
    */
    padding?: string;
    /**
    * Constraint border radius of filter
    *
    * @designToken datatable.filter.constraint.border.radius
    */
    borderRadius?: string;
    };
    }
    /**
    * Used to pass tokens of the paginator top section
    */
    paginatorTop?: {
        
    /**
    * Border color of paginator top
    *
    * @designToken datatable.paginator.top.border.color
    */
    borderColor?: string;
    /**
    * Border width of paginator top
    *
    * @designToken datatable.paginator.top.border.width
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
    * @designToken datatable.paginator.bottom.border.color
    */
    borderColor?: string;
    /**
    * Border width of paginator bottom
    *
    * @designToken datatable.paginator.bottom.border.width
    */
    borderWidth?: string;
    }
}
