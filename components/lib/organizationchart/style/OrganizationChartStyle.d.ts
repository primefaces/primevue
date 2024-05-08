/**
 *
 * OrganizationChart visualizes hierarchical organization data.
 *
 * [Live Demo](https://primevue.org/organizationchart)
 *
 * @module organizationchartstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum OrganizationChartClasses {
    root = 'p-organizationchart',
    table = 'p-organizationchart-table',
    node = 'p-organizationchart-node',
    nodeToggleButton = 'p-organizationchart-node-toggle-button',
    nodeToggleButtonIcon = 'p-organizationchart-node-toggle-button-icon',
    connectors = 'p-organizationchart-connectors',
    connectorDown = 'p-organizationchart-connector-down',
    connectorLeft = 'p-organizationchart-connector-left',
    connectorRight = 'p-organizationchart-connector-right',
    nodeChildren = 'p-organizationchart-node-children'
}

export interface OrganizationChartStyle extends BaseStyle {}
