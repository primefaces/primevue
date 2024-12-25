<template>
    <DocSectionText v-bind="$attrs">
        <p>The Toast Service provides multiple methods for removing toasts programmatically, whether it is a <i>specific</i> toast, all toasts in a <i>group</i>, or <i>all</i> toasts currently displayed.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Toast />
        <Toast group="warning" position="bottom-right"/>
        <div class="flex flex-col gap-4">
            <div class="flex flex-wrap gap-2 justify-center">
                <Button @click="addToast" label="Add Toast" />
                <Button @click="addWarningToast" label="Add Warning Toast" />
            </div>
            <div class="flex flex-wrap gap-2 justify-center">
                <Button @click="clearToast" label="Clear Toast" severity="secondary" />
                <Button @click="clearAllWarningToasts" label="Clear All Warning Toasts" severity="secondary" />
                <Button @click="clearAll" label="Clear All" severity="secondary" />
            </div>
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            generalToastMessage: {
                severity: 'info',
                summary: 'General Toast',
                detail: 'General toast message',
            },
            warningToastMessage: {
                severity: 'warn',
                summary: 'Warning Toast',
                detail: 'Warning toast message',
                group: 'warning'
            },
            code: {
                basic: `
<Toast />
<Toast group="warning" position="bottom-right"/>

<Button @click="addToast" label="Add Toast" />
<Button @click="addWarningToast" label="Add Warning Toast" />

<Button @click="clearToast" label="Clear Toast" severity="secondary" />
<Button @click="clearAllWarningToasts" label="Clear All Warning Toasts" severity="secondary" />
<Button @click="clearAll" label="Clear All" severity="secondary" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Toast />
        <Toast group="warning" position="bottom-right"/>
        <div class="flex flex-col gap-4">
            <div class="flex flex-wrap gap-2 justify-center">
                <Button @click="addToast" label="Add Toast" />
                <Button @click="addWarningToast" label="Add Warning Toast" />
            </div>
            <div class="flex flex-wrap gap-2 justify-center">
                <Button @click="clearToast" label="Clear Toast" severity="secondary" />
                <Button @click="clearAllWarningToasts" label="Clear All Warning Toasts" severity="secondary" />
                <Button @click="clearAll" label="Clear All" severity="secondary" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            generalToastMessage: {
                severity: 'info',
                summary: 'General Toast',
                detail: 'General toast message',
            },
            warningToastMessage: {
                severity: 'warn',
                summary: 'Warning Toast',
                detail: 'Warning toast message',
                group: 'warning'
            },
        };
    },
    methods: {
        addToast() {
            this.$toast.add(this.generalToastMessage);
        },
        clearToast() {
            this.$toast.remove(this.generalToastMessage);
        },
        addWarningToast() {
            this.$toast.add(this.warningToastMessage);
        },
        clearAllWarningToasts() {
            this.$toast.removeGroup('warning');
        },
        clearAll() {
            this.$toast.removeAllGroups();
        }
    }
};
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Toast />
        <Toast group="warning" position="bottom-right"/>
        <div class="flex flex-col gap-4">
            <div class="flex flex-wrap gap-2 justify-center">
                <Button @click="addToast" label="Add Toast" />
                <Button @click="addWarningToast" label="Add Warning Toast" />
            </div>
            <div class="flex flex-wrap gap-2 justify-center">
                <Button @click="clearToast" label="Clear Toast" severity="secondary" />
                <Button @click="clearAllWarningToasts" label="Clear All Warning Toasts" severity="secondary" />
                <Button @click="clearAll" label="Clear All" severity="secondary" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const generalToastMessage = {
    severity: 'info',
    summary: 'General Toast',
    detail: 'General toast message',
};

const warningToastMessage = {
    severity: 'warn',
    summary: 'Warning Toast',
    detail: 'Warning toast message',
    group: 'warning'
};

const addToast = () => toast.add(generalToastMessage);

const clearToast = () => toast.remove(generalToastMessage);

const addWarningToast = () => toast.add(warningToastMessage);

const clearAllWarningToasts = () => toast.removeGroup('warning');

const clearAll = () => toast.removeAllGroups();
<\/script>
`
            },
        };
    },
    methods: {
        addToast() {
            this.$toast.add(this.generalToastMessage);
        },
        clearToast() {
            this.$toast.remove(this.generalToastMessage);
        },
        addWarningToast() {
            this.$toast.add(this.warningToastMessage);
        },
        clearAllWarningToasts() {
            this.$toast.removeGroup('warning');
        },
        clearAll() {
            this.$toast.removeAllGroups();
        }
    }
};
</script>
