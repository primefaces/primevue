<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>OrganizationChart</h1>
                <p>OrganizationChart visualizes hierarchical organization data.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3 class="first">Advanced</h3>
            <p>Hierarchical data with zero configuration.</p>
            <OrganizationChart :value="data1" :collapsible="true" class="company">
                <template #person="slotProps">
                    <div class="node-header ui-corner-top">{{slotProps.node.data.label}}</div>
                    <div class="node-content">
                        <img :src="'demo/images/organization/' + slotProps.node.data.avatar" width="32">
                        <div>{{slotProps.node.data.name}}</div>
                    </div>
                </template>
                <template #default="slotProps">
                    <span>{{slotProps.node.data.label}}</span>
                </template>
            </OrganizationChart>

            <h3>Basic</h3>
            <p>Hierarchical data with zero configuration.</p>
            <OrganizationChart :value="data2">
                <template #default="slotProps">
                    <span>{{slotProps.node.data.label}}</span>
                </template>
            </OrganizationChart>
        </div>

        <OrganizationChartDoc />
    </div>
</template>
<script>
import OrganizationChartDoc from './OrganizationChartDoc';

export default {
    data() {
        return {
            data1: {
                key: '0',
                type: 'person',
                styleClass: 'p-person',
                data: {label: 'CEO', name: 'Walter White', avatar: 'walter.jpg'},
                children: [
                    {
                        key: '0_0',
                        type: 'person',
                        styleClass: 'p-person',
                        data: {label: 'CFO', name:'Saul Goodman', avatar: 'saul.jpg'},
                        children:[{
                            key: '0_0_0',
                            data: {label: 'Tax'},
                            styleClass: 'department-cfo'
                        },
                        {
                            key: '0_0_1',
                            data: {label: 'Legal'},
                            styleClass: 'department-cfo'
                        }],
                    },
                    {
                        key: '0_1',
                        type: 'person',
                        styleClass: 'p-person',
                        data: {label: 'COO', name:'Mike E.', avatar: 'mike.jpg'},
                        children:[{
                            key: '0_1_0',
                            data: {label: 'Operations'},
                            styleClass: 'department-coo'
                        }]
                    },
                    {
                        key: '0_2',
                        type: 'person',
                        styleClass: 'p-person',
                        data: {label: 'CTO', name:'Jesse Pinkman', avatar: 'jesse.jpg'},
                        children:[{
                            key: '0_2_0',
                            data: {label: 'Development'},
                            styleClass: 'department-cto',
                            children:[{
                                key: '0_2_0_0',
                                data: {label: 'Analysis'},
                                styleClass: 'department-cto'
                            },
                            {
                                key: '0_2_0_1',
                                data: {label: 'Front End'},
                                styleClass: 'department-cto'
                            },
                            {
                                key: '0_2_0_2',
                                data: {label: 'Back End'},
                                styleClass: 'department-cto'
                            }]
                        },
                        {
                            key: '0_2_1',
                            data: {label: 'QA'},
                            styleClass: 'department-cto'
                        },
                        {
                            key: '0_2_2',
                            data: {label: 'R&D'},
                            styleClass: 'department-cto'
                        }]
                    }
                ]
            },
            data2 : {
                key: '0',
                data: {label: 'F.C. Barcelona'},
                children: [
                    {
                        key: '0_0',
                        data: {label: 'F.C. Barcelona'},
                        children: [
                            {
                                key: '0_0_0',
                                data: {label: 'Chelsea F.C.'}
                            },
                            {
                                key: '0_0_1',
                                data: {label: 'F.C. Barcelona'}
                            }
                        ]
                    },
                    {
                        key: '0_1',
                        data: {label: 'Real Madrid'},
                        children: [
                            {
                                key: '0_1_0',
                                data: {label: 'Bayern Munich'}
                            },
                            {
                                key: '0_1_1',
                                data: {label: 'Real Madrid'}
                            }
                        ]
                    }
                ]
            },
            selection: []
        }
    },
    components: {
        'OrganizationChartDoc': OrganizationChartDoc
    }
}
</script>

<style scoped lang="scss">
/deep/ .p-organizationchart {
    .p-person {
        padding: 0;
        border: 0 none;
    }

    .node-header, .node-content {
        padding: .5em .7em;
    }

    .node-header {
        background-color: #495ebb;
        color: #ffffff;
    }

    .node-content {
        text-align: center;
        border: 1px solid #495ebb;
    }

    .node-content img {
        border-radius: 50%;
    }

    .department-cfo {
        background-color: #7247bc;
        color: #ffffff;
    }

    .department-coo {
        background-color: #a534b6;
        color: #ffffff;
    }

    .department-cto {
        background-color: #e9286f;
        color: #ffffff;
    }

    .p-organizationchart .p-highlight {
        background-color: orange;
    }

    .p-person .p-node-toggler {
        color: #495ebb !important;
    }

    .department-cto .p-node-toggler {
        color: #8a0a39 !important;
    }
}


</style>