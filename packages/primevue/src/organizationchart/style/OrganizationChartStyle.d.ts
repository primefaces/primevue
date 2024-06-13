/**
 *
 * OrganizationChart visualizes hierarchical organization data.
 *
 * [Live Demo](https://primevue.org/organizationchart)
 *
 * @module organizationchartstyle
 *
 */
import type { BaseStyle } from '@primevue/core/base/style';

export enum OrganizationChartClasses {
    /**
     * Class name of the root element
     */
    root = 'p-organizationchart',
    /**
     * Class name of the table element
     */
    table = 'p-organizationchart-table',
    /**
     * Class name of the node element
     */
    node = 'p-organizationchart-node',
    /**
     * Class name of the node toggle button element
     */
    nodeToggleButton = 'p-organizationchart-node-toggle-button',
    /**
     * Class name of the node toggle button icon element
     */
    nodeToggleButtonIcon = 'p-organizationchart-node-toggle-button-icon',
    /**
     * Class name of the connectors element
     */
    connectors = 'p-organizationchart-connectors',
    /**
     * Class name of the connector down element
     */
    connectorDown = 'p-organizationchart-connector-down',
    /**
     * Class name of the connector left element
     */
    connectorLeft = 'p-organizationchart-connector-left',
    /**
     * Class name of the connector right element
     */
    connectorRight = 'p-organizationchart-connector-right',
    /**
     * Class name of the node children element
     */
    nodeChildren = 'p-organizationchart-node-children'
}

export interface OrganizationChartStyle extends BaseStyle {}
