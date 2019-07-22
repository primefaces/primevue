<template>
    <div class="p-organizationchart p-component">
        <OrganizationChartNode :node="value" />
    </div>
</template>

<script>
import OrganizationChartNode from './OrganizationChartNode';

export default {
    props: {
        value: {
            type: null,
            default: null
        }
    },
    components: {
        'OrganizationChartNode': OrganizationChartNode
    }
}
</script>

<style>
.p-organizationchart .p-organizationchart-table {
    border-spacing: 0;
    border-collapse: separate;
    margin: 0 auto;
}

.p-organizationchart .p-organizationchart-table > tbody > tr > td {
    text-align: center;
    vertical-align: top;
    padding: 0;
    padding: 0 .75em;
}

.p-organizationchart .p-organizationchart-node-content {
    padding: .5em .75em;
    display: inline-block;
    position: relative;
}

.p-organizationchart .p-organizationchart-node-content .p-node-toggler {
    position: absolute;
    bottom: -9px;
    margin-left: -8px;
    z-index: 2;
    left: 50%;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
}

.p-organizationchart .p-organizationchart-line-down {
    margin: 0 auto;
    height: 20px;
    width: 1px;
    float: none;
}

.p-organizationchart .p-organizationchart-line-right {
    float: none;
    border-radius: 0px;
}

.p-organizationchart .p-organizationchart-line-left {
    float: none;
    border-radius: 0;
}

.p-organizationchart .p-organizationchart-node-content.p-organizationchart-selectable-node {
    cursor: pointer;
}
</style>
