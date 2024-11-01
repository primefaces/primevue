<template>
    <DocSectionText v-bind="$attrs">
        <p>TreeSelect is used with the <i>v-model</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4 w-full md:w-80">
            <div class="flex flex-col gap-1">
                <TreeSelect name="node" :options="nodes" placeholder="Select Item" fluid />
                <Message v-if="$form.node?.invalid" severity="error" size="small" variant="simple">{{ $form.node.error?.message }}</Message>
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
    <DocSectionCode :code="code" :dependencies="{ zod: '3.23.8' }" />
</template>

<script>
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';
import { NodeService } from '/service/NodeService';

export default {
    data() {
        return {
            initialValues: {
                node: null
            },
            resolver: zodResolver(
                z.object({
                    node: z.union([z.record(z.boolean()), z.literal(null)]).refine((obj) => obj !== null && Object.keys(obj).length > 0, { message: 'Selection is required.' })
                })
            ),
            nodes: null,
            code: {
                basic: `
<Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4 w-full md:w-80">
    <div class="flex flex-col gap-1">
        <TreeSelect name="node" :options="nodes" placeholder="Select Item" fluid />
        <Message v-if="$form.node?.invalid" severity="error" size="small" variant="simple">{{ $form.node.error?.message }}</Message>
    </div>
    <Button type="submit" severity="secondary" label="Submit" />
</Form>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4 w-full md:w-80">
            <div class="flex flex-col gap-1">
                <TreeSelect name="node" :options="nodes" placeholder="Select Item" fluid />
                <Message v-if="$form.node?.invalid" severity="error" size="small" variant="simple">{{ $form.node.error?.message }}</Message>
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
</template>

<script>
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';
import { NodeService } from '/service/NodeService';

export default {
    data() {
        return {
            initialValues: {
                node: null
            },
            resolver: zodResolver(
                z.object({
                    node: z.union([z.record(z.boolean()), z.literal(null)]).refine((obj) => obj !== null && Object.keys(obj).length > 0, { message: 'Selection is required.' })
                })
            ),
            nodes: null,
        }
    },
    methods: {
        onFormSubmit({ valid }) {
            if (valid) {
                this.$toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
            }
        }
    }
}
<\/script>

`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex flex-col gap-4 w-full md:w-80">
            <div class="flex flex-col gap-1">
                <TreeSelect name="node" :options="nodes" placeholder="Select Item" fluid />
                <Message v-if="$form.node?.invalid" severity="error" size="small" variant="simple">{{ $form.node.error?.message }}</Message>
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { useToast } from "primevue/usetoast";
import { z } from 'zod';
import { NodeService } from '/service/NodeService';

const toast = useToast();
const initialValues = ref({
    node: null
});
const resolver = ref(zodResolver(
    z.object({
        node: z.union([z.record(z.boolean()), z.literal(null)]).refine((obj) => obj !== null && Object.keys(obj).length > 0, { message: 'Selection is required.' })
    })
));

const onFormSubmit = ({ valid }) => {
    if (valid) {
        toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
    }
};
<\/script>
        `
            }
        };
    },
    mounted() {
        NodeService.getTreeNodes().then((data) => (this.nodes = data));
    },
    methods: {
        onFormSubmit({ valid }) {
            if (valid) {
                this.$toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
            }
        }
    }
};
</script>
