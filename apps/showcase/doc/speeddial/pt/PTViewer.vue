<template>
    <DocPTViewer :docs="docs">
        <div style="position: relative; height: 300px">
            <SpeedDial :model="items" direction="down" style="position: absolute; left: calc(50% - 2rem); top: 0" />
        </div>
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            items: [
                {
                    label: 'Add',
                    icon: 'pi pi-pencil'
                },
                {
                    label: 'Update',
                    icon: 'pi pi-refresh'
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-trash'
                },
                {
                    label: 'Upload',
                    icon: 'pi pi-upload'
                },
                {
                    label: 'Vue Website',
                    icon: 'pi pi-external-link'
                }
            ],
            docs: [
                {
                    data: getPTOptions('SpeedDial'),
                    key: 'SpeedDial'
                }
            ]
        };
    }
};
</script>
