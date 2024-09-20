<template>
    <DocPTViewer :docs="docs">
        <OrganizationChart :value="data" collapsible>
            <template #default="slotProps">
                <span>{{ slotProps.node.label }}</span>
            </template>
        </OrganizationChart>
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            data: {
                label: 'Argentina',
                children: [
                    {
                        label: 'Argentina',
                        children: [
                            {
                                label: 'Argentina'
                            },
                            {
                                label: 'Croatia'
                            }
                        ]
                    },
                    {
                        label: 'France',
                        children: [
                            {
                                label: 'France'
                            },
                            {
                                label: 'Morocco'
                            }
                        ]
                    }
                ]
            },
            docs: [
                {
                    data: getPTOptions('OrganizationChart'),
                    key: 'OrganizationChart'
                }
            ]
        };
    }
};
</script>
