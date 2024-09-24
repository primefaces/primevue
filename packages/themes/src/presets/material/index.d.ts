/**
 *
 * [Live Demo](https://www.primevue.org/)
 *
 * @module material
 *
 */
export interface ColorSchemeDesignToken<T> {
    colorScheme?: {
        light?: Omit<T, 'colorScheme'>;
        dark?: Omit<T, 'colorScheme'>;
    };
}

export interface PaletteDesignToken {
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
    950?: string;
}

export interface PrimitiveDesignTokens {
    borderRadius?: {
        none?: string;
        xs?: string;
        sm?: string;
        md?: string;
        lg?: string;
        xl?: string;
    };
    emerald?: PaletteDesignToken;
    green?: PaletteDesignToken;
    lime?: PaletteDesignToken;
    red?: PaletteDesignToken;
    orange?: PaletteDesignToken;
    amber?: PaletteDesignToken;
    yellow?: PaletteDesignToken;
    teal?: PaletteDesignToken;
    cyan?: PaletteDesignToken;
    sky?: PaletteDesignToken;
    blue?: PaletteDesignToken;
    indigo?: PaletteDesignToken;
    violet?: PaletteDesignToken;
    purple?: PaletteDesignToken;
    fuchsia?: PaletteDesignToken;
    pink?: PaletteDesignToken;
    rose?: PaletteDesignToken;
    slate?: PaletteDesignToken;
    gray?: PaletteDesignToken;
    zinc?: PaletteDesignToken;
    neutral?: PaletteDesignToken;
    stone?: PaletteDesignToken;
    [key: string]: any;
}

export interface SemanticDesignTokens {
    transitionDuration?: string;
    focusRing?: {
        width?: string;
        style?: string;
        color?: string;
        offset?: string;
        shadow?: string;
    };
    iconSize?: string;
    anchorGutter?: string;
    primary?: PaletteDesignToken;
    formField: {
        paddingX?: string;
        paddingY?: string;
        borderRadius?: string;
        focusRing?: {
            width?: string;
            style?: string;
            color?: string;
            offset?: string;
            shadow?: string;
        };
    };
    // @todo
    [key: string]: any;
}
