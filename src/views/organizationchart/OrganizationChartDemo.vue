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
            <OrganizationChart :value="data1" />
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
                label: 'CEO',
                type: 'person',
                className: 'p-person',
                expanded: true,
                data: {name:'Walter White', 'avatar': 'walter.jpg'},
                children: [
                    {
                        label: 'CFO',
                        type: 'person',
                        className: 'p-person',
                        expanded: true,
                        data: {name:'Saul Goodman', 'avatar': 'saul.jpg'},
                        children:[{
                            label: 'Tax',
                            className: 'department-cfo'
                        },
                        {
                            label: 'Legal',
                            className: 'department-cfo'
                        }],
                    },
                    {
                        label: 'COO',
                        type: 'person',
                        className: 'p-person',
                        expanded: true,
                        data: {name:'Mike E.', 'avatar': 'mike.jpg'},
                        children:[{
                            label: 'Operations',
                            className: 'department-coo'
                        }]
                    },
                    {
                        label: 'CTO',
                        type: 'person',
                        className: 'p-person',
                        expanded: true,
                        data: {name:'Jesse Pinkman', 'avatar': 'jesse.jpg'},
                        children:[{
                            label: 'Development',
                            className: 'department-cto',
                            expanded: true,
                            children:[{
                                label: 'Analysis',
                                className: 'department-cto'
                            },
                            {
                                label: 'Front End',
                                className: 'department-cto'
                            },
                            {
                                label: 'Back End',
                                className: 'department-cto'
                            }]
                        },
                        {
                            label: 'QA',
                            className: 'department-cto'
                        },
                        {
                            label: 'R&D',
                            className: 'department-cto'
                        }]
                    }
                ]
            },
            data2 : [{
                label: 'F.C Barcelona',
                expanded: true,
                children: [
                    {
                        label: 'F.C Barcelona',
                        expanded: true,
                        children: [
                            {
                                label: 'Chelsea FC'
                            },
                            {
                                label: 'F.C. Barcelona'
                            }
                        ]
                    },
                    {
                        label: 'Real Madrid',
                        expanded: true,
                        children: [
                            {
                                label: 'Bayern Munich'
                            },
                            {
                                label: 'Real Madrid'
                            }
                        ]
                    }
                ]
            }],
            selection: []
        }
    },
    components: {
        'OrganizationChartDoc': OrganizationChartDoc
    }
}
</script>