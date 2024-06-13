
/**
 *
 * Button Design Tokens
 *
 * [Live Demo](https://www.primevue.org/button/)
 *
 * @module themes/button
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface ButtonDesignTokens extends ColorSchemeDesignToken<ButtonDesignTokens> {

    /**
    * Used to pass tokens of the root section
    */
    root?: {
        
    /**
    * Border radius of root
    *
    * @designToken button.border.radius
    */
    borderRadius?: string;
    /**
    * Rounded border radius of root
    *
    * @designToken button.rounded.border.radius
    */
    roundedBorderRadius?: string;
    /**
    * Gap of root
    *
    * @designToken button.gap
    */
    gap?: string;
    /**
    * Padding x of root
    *
    * @designToken button.padding.x
    */
    paddingX?: string;
    /**
    * Padding y of root
    *
    * @designToken button.padding.y
    */
    paddingY?: string;
    /**
    * Icon only width of root
    *
    * @designToken button.icon.only.width
    */
    iconOnlyWidth?: string;
    /**
    * Sm of root
    */
    sm?: {
        
    /**
    * Sm font size of root
    *
    * @designToken button.sm.font.size
    */
    fontSize?: string;
    /**
    * Sm padding x of root
    *
    * @designToken button.sm.padding.x
    */
    paddingX?: string;
    /**
    * Sm padding y of root
    *
    * @designToken button.sm.padding.y
    */
    paddingY?: string;
    };
    /**
    * Lg of root
    */
    lg?: {
        
    /**
    * Lg font size of root
    *
    * @designToken button.lg.font.size
    */
    fontSize?: string;
    /**
    * Lg padding x of root
    *
    * @designToken button.lg.padding.x
    */
    paddingX?: string;
    /**
    * Lg padding y of root
    *
    * @designToken button.lg.padding.y
    */
    paddingY?: string;
    };
    /**
    * Label of root
    */
    label?: {
        
    /**
    * Label font weight of root
    *
    * @designToken button.label.font.weight
    */
    fontWeight?: string;
    };
    /**
    * Raised shadow of root
    *
    * @designToken button.raised.shadow
    */
    raisedShadow?: string;
    /**
    * Focus ring of root
    */
    focusRing?: {
        
    /**
    * Focus ring width of root
    *
    * @designToken button.focus.ring.width
    */
    width?: string;
    /**
    * Focus ring style of root
    *
    * @designToken button.focus.ring.style
    */
    style?: string;
    /**
    * Focus ring offset of root
    *
    * @designToken button.focus.ring.offset
    */
    offset?: string;
    };
    /**
    * Badge size of root
    *
    * @designToken button.badge.size
    */
    badgeSize?: string;
    /**
    * Transition duration of root
    *
    * @designToken button.transition.duration
    */
    transitionDuration?: string;
    /**
    * Primary of root
    */
    primary?: {
        
    /**
    * Primary background of root
    *
    * @designToken button.primary.background
    */
    background?: string;
    /**
    * Primary hover background of root
    *
    * @designToken button.primary.hover.background
    */
    hoverBackground?: string;
    /**
    * Primary active background of root
    *
    * @designToken button.primary.active.background
    */
    activeBackground?: string;
    /**
    * Primary border color of root
    *
    * @designToken button.primary.border.color
    */
    borderColor?: string;
    /**
    * Primary hover border color of root
    *
    * @designToken button.primary.hover.border.color
    */
    hoverBorderColor?: string;
    /**
    * Primary active border color of root
    *
    * @designToken button.primary.active.border.color
    */
    activeBorderColor?: string;
    /**
    * Primary color of root
    *
    * @designToken button.primary.color
    */
    color?: string;
    /**
    * Primary hover color of root
    *
    * @designToken button.primary.hover.color
    */
    hoverColor?: string;
    /**
    * Primary active color of root
    *
    * @designToken button.primary.active.color
    */
    activeColor?: string;
    /**
    * Primary focus ring of root
    */
    focusRing?: {
        
    /**
    * Primary focus ring color of root
    *
    * @designToken button.primary.focus.ring.color
    */
    color?: string;
    /**
    * Primary focus ring shadow of root
    *
    * @designToken button.primary.focus.ring.shadow
    */
    shadow?: string;
    };
    };
    /**
    * Secondary of root
    */
    secondary?: {
        
    /**
    * Secondary background of root
    *
    * @designToken button.secondary.background
    */
    background?: string;
    /**
    * Secondary hover background of root
    *
    * @designToken button.secondary.hover.background
    */
    hoverBackground?: string;
    /**
    * Secondary active background of root
    *
    * @designToken button.secondary.active.background
    */
    activeBackground?: string;
    /**
    * Secondary border color of root
    *
    * @designToken button.secondary.border.color
    */
    borderColor?: string;
    /**
    * Secondary hover border color of root
    *
    * @designToken button.secondary.hover.border.color
    */
    hoverBorderColor?: string;
    /**
    * Secondary active border color of root
    *
    * @designToken button.secondary.active.border.color
    */
    activeBorderColor?: string;
    /**
    * Secondary color of root
    *
    * @designToken button.secondary.color
    */
    color?: string;
    /**
    * Secondary hover color of root
    *
    * @designToken button.secondary.hover.color
    */
    hoverColor?: string;
    /**
    * Secondary active color of root
    *
    * @designToken button.secondary.active.color
    */
    activeColor?: string;
    /**
    * Secondary focus ring of root
    */
    focusRing?: {
        
    /**
    * Secondary focus ring color of root
    *
    * @designToken button.secondary.focus.ring.color
    */
    color?: string;
    /**
    * Secondary focus ring shadow of root
    *
    * @designToken button.secondary.focus.ring.shadow
    */
    shadow?: string;
    };
    };
    /**
    * Info of root
    */
    info?: {
        
    /**
    * Info background of root
    *
    * @designToken button.info.background
    */
    background?: string;
    /**
    * Info hover background of root
    *
    * @designToken button.info.hover.background
    */
    hoverBackground?: string;
    /**
    * Info active background of root
    *
    * @designToken button.info.active.background
    */
    activeBackground?: string;
    /**
    * Info border color of root
    *
    * @designToken button.info.border.color
    */
    borderColor?: string;
    /**
    * Info hover border color of root
    *
    * @designToken button.info.hover.border.color
    */
    hoverBorderColor?: string;
    /**
    * Info active border color of root
    *
    * @designToken button.info.active.border.color
    */
    activeBorderColor?: string;
    /**
    * Info color of root
    *
    * @designToken button.info.color
    */
    color?: string;
    /**
    * Info hover color of root
    *
    * @designToken button.info.hover.color
    */
    hoverColor?: string;
    /**
    * Info active color of root
    *
    * @designToken button.info.active.color
    */
    activeColor?: string;
    /**
    * Info focus ring of root
    */
    focusRing?: {
        
    /**
    * Info focus ring color of root
    *
    * @designToken button.info.focus.ring.color
    */
    color?: string;
    /**
    * Info focus ring shadow of root
    *
    * @designToken button.info.focus.ring.shadow
    */
    shadow?: string;
    };
    };
    /**
    * Success of root
    */
    success?: {
        
    /**
    * Success background of root
    *
    * @designToken button.success.background
    */
    background?: string;
    /**
    * Success hover background of root
    *
    * @designToken button.success.hover.background
    */
    hoverBackground?: string;
    /**
    * Success active background of root
    *
    * @designToken button.success.active.background
    */
    activeBackground?: string;
    /**
    * Success border color of root
    *
    * @designToken button.success.border.color
    */
    borderColor?: string;
    /**
    * Success hover border color of root
    *
    * @designToken button.success.hover.border.color
    */
    hoverBorderColor?: string;
    /**
    * Success active border color of root
    *
    * @designToken button.success.active.border.color
    */
    activeBorderColor?: string;
    /**
    * Success color of root
    *
    * @designToken button.success.color
    */
    color?: string;
    /**
    * Success hover color of root
    *
    * @designToken button.success.hover.color
    */
    hoverColor?: string;
    /**
    * Success active color of root
    *
    * @designToken button.success.active.color
    */
    activeColor?: string;
    /**
    * Success focus ring of root
    */
    focusRing?: {
        
    /**
    * Success focus ring color of root
    *
    * @designToken button.success.focus.ring.color
    */
    color?: string;
    /**
    * Success focus ring shadow of root
    *
    * @designToken button.success.focus.ring.shadow
    */
    shadow?: string;
    };
    };
    /**
    * Warn of root
    */
    warn?: {
        
    /**
    * Warn background of root
    *
    * @designToken button.warn.background
    */
    background?: string;
    /**
    * Warn hover background of root
    *
    * @designToken button.warn.hover.background
    */
    hoverBackground?: string;
    /**
    * Warn active background of root
    *
    * @designToken button.warn.active.background
    */
    activeBackground?: string;
    /**
    * Warn border color of root
    *
    * @designToken button.warn.border.color
    */
    borderColor?: string;
    /**
    * Warn hover border color of root
    *
    * @designToken button.warn.hover.border.color
    */
    hoverBorderColor?: string;
    /**
    * Warn active border color of root
    *
    * @designToken button.warn.active.border.color
    */
    activeBorderColor?: string;
    /**
    * Warn color of root
    *
    * @designToken button.warn.color
    */
    color?: string;
    /**
    * Warn hover color of root
    *
    * @designToken button.warn.hover.color
    */
    hoverColor?: string;
    /**
    * Warn active color of root
    *
    * @designToken button.warn.active.color
    */
    activeColor?: string;
    /**
    * Warn focus ring of root
    */
    focusRing?: {
        
    /**
    * Warn focus ring color of root
    *
    * @designToken button.warn.focus.ring.color
    */
    color?: string;
    /**
    * Warn focus ring shadow of root
    *
    * @designToken button.warn.focus.ring.shadow
    */
    shadow?: string;
    };
    };
    /**
    * Help of root
    */
    help?: {
        
    /**
    * Help background of root
    *
    * @designToken button.help.background
    */
    background?: string;
    /**
    * Help hover background of root
    *
    * @designToken button.help.hover.background
    */
    hoverBackground?: string;
    /**
    * Help active background of root
    *
    * @designToken button.help.active.background
    */
    activeBackground?: string;
    /**
    * Help border color of root
    *
    * @designToken button.help.border.color
    */
    borderColor?: string;
    /**
    * Help hover border color of root
    *
    * @designToken button.help.hover.border.color
    */
    hoverBorderColor?: string;
    /**
    * Help active border color of root
    *
    * @designToken button.help.active.border.color
    */
    activeBorderColor?: string;
    /**
    * Help color of root
    *
    * @designToken button.help.color
    */
    color?: string;
    /**
    * Help hover color of root
    *
    * @designToken button.help.hover.color
    */
    hoverColor?: string;
    /**
    * Help active color of root
    *
    * @designToken button.help.active.color
    */
    activeColor?: string;
    /**
    * Help focus ring of root
    */
    focusRing?: {
        
    /**
    * Help focus ring color of root
    *
    * @designToken button.help.focus.ring.color
    */
    color?: string;
    /**
    * Help focus ring shadow of root
    *
    * @designToken button.help.focus.ring.shadow
    */
    shadow?: string;
    };
    };
    /**
    * Danger of root
    */
    danger?: {
        
    /**
    * Danger background of root
    *
    * @designToken button.danger.background
    */
    background?: string;
    /**
    * Danger hover background of root
    *
    * @designToken button.danger.hover.background
    */
    hoverBackground?: string;
    /**
    * Danger active background of root
    *
    * @designToken button.danger.active.background
    */
    activeBackground?: string;
    /**
    * Danger border color of root
    *
    * @designToken button.danger.border.color
    */
    borderColor?: string;
    /**
    * Danger hover border color of root
    *
    * @designToken button.danger.hover.border.color
    */
    hoverBorderColor?: string;
    /**
    * Danger active border color of root
    *
    * @designToken button.danger.active.border.color
    */
    activeBorderColor?: string;
    /**
    * Danger color of root
    *
    * @designToken button.danger.color
    */
    color?: string;
    /**
    * Danger hover color of root
    *
    * @designToken button.danger.hover.color
    */
    hoverColor?: string;
    /**
    * Danger active color of root
    *
    * @designToken button.danger.active.color
    */
    activeColor?: string;
    /**
    * Danger focus ring of root
    */
    focusRing?: {
        
    /**
    * Danger focus ring color of root
    *
    * @designToken button.danger.focus.ring.color
    */
    color?: string;
    /**
    * Danger focus ring shadow of root
    *
    * @designToken button.danger.focus.ring.shadow
    */
    shadow?: string;
    };
    };
    /**
    * Contrast of root
    */
    contrast?: {
        
    /**
    * Contrast background of root
    *
    * @designToken button.contrast.background
    */
    background?: string;
    /**
    * Contrast hover background of root
    *
    * @designToken button.contrast.hover.background
    */
    hoverBackground?: string;
    /**
    * Contrast active background of root
    *
    * @designToken button.contrast.active.background
    */
    activeBackground?: string;
    /**
    * Contrast border color of root
    *
    * @designToken button.contrast.border.color
    */
    borderColor?: string;
    /**
    * Contrast hover border color of root
    *
    * @designToken button.contrast.hover.border.color
    */
    hoverBorderColor?: string;
    /**
    * Contrast active border color of root
    *
    * @designToken button.contrast.active.border.color
    */
    activeBorderColor?: string;
    /**
    * Contrast color of root
    *
    * @designToken button.contrast.color
    */
    color?: string;
    /**
    * Contrast hover color of root
    *
    * @designToken button.contrast.hover.color
    */
    hoverColor?: string;
    /**
    * Contrast active color of root
    *
    * @designToken button.contrast.active.color
    */
    activeColor?: string;
    /**
    * Contrast focus ring of root
    */
    focusRing?: {
        
    /**
    * Contrast focus ring color of root
    *
    * @designToken button.contrast.focus.ring.color
    */
    color?: string;
    /**
    * Contrast focus ring shadow of root
    *
    * @designToken button.contrast.focus.ring.shadow
    */
    shadow?: string;
    };
    };
    }
    /**
    * Used to pass tokens of the outlined section
    */
    outlined?: {
        
    /**
    * Primary of outlined
    */
    primary?: {
        
    /**
    * Primary hover background of outlined
    *
    * @designToken button.outlined.primary.hover.background
    */
    hoverBackground?: string;
    /**
    * Primary active background of outlined
    *
    * @designToken button.outlined.primary.active.background
    */
    activeBackground?: string;
    /**
    * Primary border color of outlined
    *
    * @designToken button.outlined.primary.border.color
    */
    borderColor?: string;
    /**
    * Primary color of outlined
    *
    * @designToken button.outlined.primary.color
    */
    color?: string;
    };
    /**
    * Secondary of outlined
    */
    secondary?: {
        
    /**
    * Secondary hover background of outlined
    *
    * @designToken button.outlined.secondary.hover.background
    */
    hoverBackground?: string;
    /**
    * Secondary active background of outlined
    *
    * @designToken button.outlined.secondary.active.background
    */
    activeBackground?: string;
    /**
    * Secondary border color of outlined
    *
    * @designToken button.outlined.secondary.border.color
    */
    borderColor?: string;
    /**
    * Secondary color of outlined
    *
    * @designToken button.outlined.secondary.color
    */
    color?: string;
    };
    /**
    * Success of outlined
    */
    success?: {
        
    /**
    * Success hover background of outlined
    *
    * @designToken button.outlined.success.hover.background
    */
    hoverBackground?: string;
    /**
    * Success active background of outlined
    *
    * @designToken button.outlined.success.active.background
    */
    activeBackground?: string;
    /**
    * Success border color of outlined
    *
    * @designToken button.outlined.success.border.color
    */
    borderColor?: string;
    /**
    * Success color of outlined
    *
    * @designToken button.outlined.success.color
    */
    color?: string;
    };
    /**
    * Info of outlined
    */
    info?: {
        
    /**
    * Info hover background of outlined
    *
    * @designToken button.outlined.info.hover.background
    */
    hoverBackground?: string;
    /**
    * Info active background of outlined
    *
    * @designToken button.outlined.info.active.background
    */
    activeBackground?: string;
    /**
    * Info border color of outlined
    *
    * @designToken button.outlined.info.border.color
    */
    borderColor?: string;
    /**
    * Info color of outlined
    *
    * @designToken button.outlined.info.color
    */
    color?: string;
    };
    /**
    * Warn of outlined
    */
    warn?: {
        
    /**
    * Warn hover background of outlined
    *
    * @designToken button.outlined.warn.hover.background
    */
    hoverBackground?: string;
    /**
    * Warn active background of outlined
    *
    * @designToken button.outlined.warn.active.background
    */
    activeBackground?: string;
    /**
    * Warn border color of outlined
    *
    * @designToken button.outlined.warn.border.color
    */
    borderColor?: string;
    /**
    * Warn color of outlined
    *
    * @designToken button.outlined.warn.color
    */
    color?: string;
    };
    /**
    * Help of outlined
    */
    help?: {
        
    /**
    * Help hover background of outlined
    *
    * @designToken button.outlined.help.hover.background
    */
    hoverBackground?: string;
    /**
    * Help active background of outlined
    *
    * @designToken button.outlined.help.active.background
    */
    activeBackground?: string;
    /**
    * Help border color of outlined
    *
    * @designToken button.outlined.help.border.color
    */
    borderColor?: string;
    /**
    * Help color of outlined
    *
    * @designToken button.outlined.help.color
    */
    color?: string;
    };
    /**
    * Danger of outlined
    */
    danger?: {
        
    /**
    * Danger hover background of outlined
    *
    * @designToken button.outlined.danger.hover.background
    */
    hoverBackground?: string;
    /**
    * Danger active background of outlined
    *
    * @designToken button.outlined.danger.active.background
    */
    activeBackground?: string;
    /**
    * Danger border color of outlined
    *
    * @designToken button.outlined.danger.border.color
    */
    borderColor?: string;
    /**
    * Danger color of outlined
    *
    * @designToken button.outlined.danger.color
    */
    color?: string;
    };
    /**
    * Contrast of outlined
    */
    contrast?: {
        
    /**
    * Contrast hover background of outlined
    *
    * @designToken button.outlined.contrast.hover.background
    */
    hoverBackground?: string;
    /**
    * Contrast active background of outlined
    *
    * @designToken button.outlined.contrast.active.background
    */
    activeBackground?: string;
    /**
    * Contrast border color of outlined
    *
    * @designToken button.outlined.contrast.border.color
    */
    borderColor?: string;
    /**
    * Contrast color of outlined
    *
    * @designToken button.outlined.contrast.color
    */
    color?: string;
    };
    /**
    * Plain of outlined
    */
    plain?: {
        
    /**
    * Plain hover background of outlined
    *
    * @designToken button.outlined.plain.hover.background
    */
    hoverBackground?: string;
    /**
    * Plain active background of outlined
    *
    * @designToken button.outlined.plain.active.background
    */
    activeBackground?: string;
    /**
    * Plain border color of outlined
    *
    * @designToken button.outlined.plain.border.color
    */
    borderColor?: string;
    /**
    * Plain color of outlined
    *
    * @designToken button.outlined.plain.color
    */
    color?: string;
    };
    }
    /**
    * Used to pass tokens of the text section
    */
    text?: {
        
    /**
    * Primary of text
    */
    primary?: {
        
    /**
    * Primary hover background of text
    *
    * @designToken button.text.primary.hover.background
    */
    hoverBackground?: string;
    /**
    * Primary active background of text
    *
    * @designToken button.text.primary.active.background
    */
    activeBackground?: string;
    /**
    * Primary color of text
    *
    * @designToken button.text.primary.color
    */
    color?: string;
    };
    /**
    * Secondary of text
    */
    secondary?: {
        
    /**
    * Secondary hover background of text
    *
    * @designToken button.text.secondary.hover.background
    */
    hoverBackground?: string;
    /**
    * Secondary active background of text
    *
    * @designToken button.text.secondary.active.background
    */
    activeBackground?: string;
    /**
    * Secondary color of text
    *
    * @designToken button.text.secondary.color
    */
    color?: string;
    };
    /**
    * Success of text
    */
    success?: {
        
    /**
    * Success hover background of text
    *
    * @designToken button.text.success.hover.background
    */
    hoverBackground?: string;
    /**
    * Success active background of text
    *
    * @designToken button.text.success.active.background
    */
    activeBackground?: string;
    /**
    * Success color of text
    *
    * @designToken button.text.success.color
    */
    color?: string;
    };
    /**
    * Info of text
    */
    info?: {
        
    /**
    * Info hover background of text
    *
    * @designToken button.text.info.hover.background
    */
    hoverBackground?: string;
    /**
    * Info active background of text
    *
    * @designToken button.text.info.active.background
    */
    activeBackground?: string;
    /**
    * Info color of text
    *
    * @designToken button.text.info.color
    */
    color?: string;
    };
    /**
    * Warn of text
    */
    warn?: {
        
    /**
    * Warn hover background of text
    *
    * @designToken button.text.warn.hover.background
    */
    hoverBackground?: string;
    /**
    * Warn active background of text
    *
    * @designToken button.text.warn.active.background
    */
    activeBackground?: string;
    /**
    * Warn color of text
    *
    * @designToken button.text.warn.color
    */
    color?: string;
    };
    /**
    * Help of text
    */
    help?: {
        
    /**
    * Help hover background of text
    *
    * @designToken button.text.help.hover.background
    */
    hoverBackground?: string;
    /**
    * Help active background of text
    *
    * @designToken button.text.help.active.background
    */
    activeBackground?: string;
    /**
    * Help color of text
    *
    * @designToken button.text.help.color
    */
    color?: string;
    };
    /**
    * Danger of text
    */
    danger?: {
        
    /**
    * Danger hover background of text
    *
    * @designToken button.text.danger.hover.background
    */
    hoverBackground?: string;
    /**
    * Danger active background of text
    *
    * @designToken button.text.danger.active.background
    */
    activeBackground?: string;
    /**
    * Danger color of text
    *
    * @designToken button.text.danger.color
    */
    color?: string;
    };
    /**
    * Plain of text
    */
    plain?: {
        
    /**
    * Plain hover background of text
    *
    * @designToken button.text.plain.hover.background
    */
    hoverBackground?: string;
    /**
    * Plain active background of text
    *
    * @designToken button.text.plain.active.background
    */
    activeBackground?: string;
    /**
    * Plain color of text
    *
    * @designToken button.text.plain.color
    */
    color?: string;
    };
    }
    /**
    * Used to pass tokens of the link section
    */
    link?: {
        
    /**
    * Color of link
    *
    * @designToken button.link.color
    */
    color?: string;
    /**
    * Hover color of link
    *
    * @designToken button.link.hover.color
    */
    hoverColor?: string;
    /**
    * Active color of link
    *
    * @designToken button.link.active.color
    */
    activeColor?: string;
    }
}
