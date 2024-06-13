
/**
 *
 * Timeline Design Tokens
 *
 * [Live Demo](https://www.primevue.org/timeline/)
 *
 * @module themes/timeline
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface TimelineDesignTokens extends ColorSchemeDesignToken<TimelineDesignTokens> {

    /**
    * Used to pass tokens of the event section
    */
    event?: {
        
    /**
    * Min height of event
    *
    * @designToken timeline.event.min.height
    */
    minHeight?: string;
    }
    /**
    * Used to pass tokens of the horizontal section
    */
    horizontal?: {
        
    /**
    * Event content of horizontal
    */
    eventContent?: {
        
    /**
    * Event content padding of horizontal
    *
    * @designToken timeline.horizontal.event.content.padding
    */
    padding?: string;
    };
    }
    /**
    * Used to pass tokens of the vertical section
    */
    vertical?: {
        
    /**
    * Event content of vertical
    */
    eventContent?: {
        
    /**
    * Event content padding of vertical
    *
    * @designToken timeline.vertical.event.content.padding
    */
    padding?: string;
    };
    }
    /**
    * Used to pass tokens of the event marker section
    */
    eventMarker?: {
        
    /**
    * Size of event marker
    *
    * @designToken timeline.event.marker.size
    */
    size?: string;
    /**
    * Border radius of event marker
    *
    * @designToken timeline.event.marker.border.radius
    */
    borderRadius?: string;
    /**
    * Border width of event marker
    *
    * @designToken timeline.event.marker.border.width
    */
    borderWidth?: string;
    /**
    * Background of event marker
    *
    * @designToken timeline.event.marker.background
    */
    background?: string;
    /**
    * Border color of event marker
    *
    * @designToken timeline.event.marker.border.color
    */
    borderColor?: string;
    /**
    * Content of event marker
    */
    content?: {
        
    /**
    * Content border radius of event marker
    *
    * @designToken timeline.event.marker.content.border.radius
    */
    borderRadius?: string;
    /**
    * Content size of event marker
    *
    * @designToken timeline.event.marker.content.size
    */
    size?: string;
    /**
    * Content background of event marker
    *
    * @designToken timeline.event.marker.content.background
    */
    background?: string;
    /**
    * Content inset shadow of event marker
    *
    * @designToken timeline.event.marker.content.inset.shadow
    */
    insetShadow?: string;
    };
    }
    /**
    * Used to pass tokens of the event connector section
    */
    eventConnector?: {
        
    /**
    * Color of event connector
    *
    * @designToken timeline.event.connector.color
    */
    color?: string;
    /**
    * Size of event connector
    *
    * @designToken timeline.event.connector.size
    */
    size?: string;
    }
}
