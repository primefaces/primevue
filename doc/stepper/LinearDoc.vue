<template>
    <DocSectionText v-bind="$attrs">
        <p>Stepper is linear by default to enforce completion of a previus step to proceed, set <i>linear</i> as true for non-linear mode.</p>
    </DocSectionText>
    <div class="card" style="padding-left: 20rem; padding-right: 20rem">
        <Stepper linear>
            <StepperPanel header="Header I">
                <template #content="{ prevCallback, nextCallback }">
                    <div class="flex flex-column h-12rem">
                        <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content I</div>
                    </div>
                    <div class="flex pt-4 justify-content-between">
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
                    <div class="flex pt-4 justify-content-between">
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
                    <div class="flex pt-4 justify-content-between">
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
<Stepper linear>
    <StepperPanel header="Header I">
        <template #content="{ prevCallback, nextCallback }">
            <div class="flex flex-column h-12rem">
                <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content I</div>
            </div>
            <div class="flex pt-4 justify-content-between">
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
            <div class="flex pt-4 justify-content-between">
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
            <div class="flex pt-4 justify-content-between">
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
        <Stepper linear>
            <StepperPanel header="Header I">
                <template #content="{ prevCallback, nextCallback }">
                    <div class="flex flex-column h-12rem">
                        <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content I</div>
                    </div>
                    <div class="flex pt-4 justify-content-between">
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
                    <div class="flex pt-4 justify-content-between">
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
                    <div class="flex pt-4 justify-content-between">
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
        <Stepper linear>
            <StepperPanel header="Header I">
                <template #content="{ prevCallback, nextCallback }">
                    <div class="flex flex-column h-12rem">
                        <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content I</div>
                    </div>
                    <div class="flex pt-4 justify-content-between">
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
                    <div class="flex pt-4 justify-content-between">
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
                    <div class="flex pt-4 justify-content-between">
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
