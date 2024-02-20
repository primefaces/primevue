<template>
    <DocSectionText v-bind="$attrs">
        <p>Layout of the Stepper is configured with the <i>orientation</i> property that accepts <i>horizontal</i> and <i>vertical</i> as options.</p>
    </DocSectionText>
    <div class="card">
        <Stepper orientation="vertical">
            <StepperPanel header="Header I">
                <template #content="{ prevCallback, nextCallback }">
                    <div class="flex flex-column h-12rem">
                        <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content I</div>
                    </div>
                    <div class="flex py-4 justify-content-between">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" disabled @click="prevCallback" />
                        <Button label="Next" severity="contrast" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel header="Header II">
                <template #content="{ prevCallback, nextCallback }">
                    <div class="flex flex-column h-12rem">
                        <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content II</div>
                    </div>
                    <div class="flex py-4 justify-content-between">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
                        <Button label="Next" severity="contrast" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel header="Header III">
                <template #content="{ prevCallback, nextCallback }">
                    <div class="flex flex-column h-12rem">
                        <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content III</div>
                    </div>
                    <div class="flex py-4 justify-content-between">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
                        <Button label="Next" severity="contrast" icon="pi pi-arrow-right" disabled iconPos="right" @click="nextCallback" />
                    </div>
                </template>
            </StepperPanel>
        </Stepper>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Stepper orientation="vertical">
    <StepperPanel header="Header I">
        <template #content="{ prevCallback, nextCallback }">
            <div class="flex flex-column h-12rem">
                <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content I</div>
            </div>
            <div class="flex py-4 justify-content-between">
                <Button label="Back" severity="secondary" icon="pi pi-arrow-left" disabled @click="prevCallback" />
                <Button label="Next" severity="contrast" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
            </div>
        </template>
    </StepperPanel>
    <StepperPanel header="Header II">
        <template #content="{ prevCallback, nextCallback }">
            <div class="flex flex-column h-12rem">
                <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content II</div>
            </div>
            <div class="flex py-4 justify-content-between">
                <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
                <Button label="Next" severity="contrast" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
            </div>
        </template>
    </StepperPanel>
    <StepperPanel header="Header III">
        <template #content="{ prevCallback, nextCallback }">
            <div class="flex flex-column h-12rem">
                <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content III</div>
            </div>
            <div class="flex py-4 justify-content-between">
                <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
                <Button label="Next" severity="contrast" icon="pi pi-arrow-right" disabled iconPos="right" @click="nextCallback" />
            </div>
        </template>
    </StepperPanel>
</Stepper>
`,
                options: `
<template>
    <div class="card">
        <Stepper orientation="vertical">
            <StepperPanel header="Header I">
                <template #content="{ prevCallback, nextCallback }">
                    <div class="flex flex-column h-12rem">
                        <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content I</div>
                    </div>
                    <div class="flex py-4 justify-content-between">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" disabled @click="prevCallback" />
                        <Button label="Next" severity="contrast" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel header="Header II">
                <template #content="{ prevCallback, nextCallback }">
                    <div class="flex flex-column h-12rem">
                        <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content II</div>
                    </div>
                    <div class="flex py-4 justify-content-between">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
                        <Button label="Next" severity="contrast" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel header="Header III">
                <template #content="{ prevCallback, nextCallback }">
                    <div class="flex flex-column h-12rem">
                        <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content III</div>
                    </div>
                    <div class="flex py-4 justify-content-between">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
                        <Button label="Next" severity="contrast" icon="pi pi-arrow-right" disabled iconPos="right" @click="nextCallback" />
                    </div>
                </template>
            </StepperPanel>
        </Stepper>
    </div>
</template>
`,
                composition: `
<template>
    <div class="card">
        <Stepper orientation="vertical">
            <StepperPanel header="Header I">
                <template #content="{ prevCallback, nextCallback }">
                    <div class="flex flex-column h-12rem">
                        <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content I</div>
                    </div>
                    <div class="flex py-4 justify-content-between">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" disabled @click="prevCallback" />
                        <Button label="Next" severity="contrast" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel header="Header II">
                <template #content="{ prevCallback, nextCallback }">
                    <div class="flex flex-column h-12rem">
                        <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content II</div>
                    </div>
                    <div class="flex py-4 justify-content-between">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
                        <Button label="Next" severity="contrast" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel header="Header III">
                <template #content="{ prevCallback, nextCallback }">
                    <div class="flex flex-column h-12rem">
                        <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content III</div>
                    </div>
                    <div class="flex py-4 justify-content-between">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
                        <Button label="Next" severity="contrast" icon="pi pi-arrow-right" disabled iconPos="right" @click="nextCallback" />
                    </div>
                </template>
            </StepperPanel>
        </Stepper>
    </div>
</template>
`
            }
        };
    }
};
</script>
