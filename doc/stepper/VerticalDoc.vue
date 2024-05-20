<template>
    <DocSectionText v-bind="$attrs">
        <p>Layout of the Stepper is configured with the <i>orientation</i> property that accepts <i>horizontal</i> and <i>vertical</i> as available options.</p>
    </DocSectionText>
    <div class="card">
        <Stepper orientation="vertical">
            <StepperPanel header="Header I">
                <template #content="{ nextCallback }">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content I</div>
                    </div>
                    <div class="flex py-6">
                        <Button label="Next" @click="nextCallback" />
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel header="Header II">
                <template #content="{ prevCallback, nextCallback }">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content II</div>
                    </div>
                    <div class="flex py-6 gap-2">
                        <Button label="Back" severity="secondary" @click="prevCallback" />
                        <Button label="Next" @click="nextCallback" />
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel header="Header III">
                <template #content="{ prevCallback }">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content III</div>
                    </div>
                    <div class="flex py-6">
                        <Button label="Back" severity="secondary" @click="prevCallback" />
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
        <template #content="{ nextCallback }">
            <div class="flex flex-col h-48">
                <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content I</div>
            </div>
            <div class="flex py-6">
                <Button label="Next" @click="nextCallback" />
            </div>
        </template>
    </StepperPanel>
    <StepperPanel header="Header II">
        <template #content="{ prevCallback, nextCallback }">
            <div class="flex flex-col h-48">
                <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content II</div>
            </div>
            <div class="flex py-6 gap-2">
                <Button label="Back" severity="secondary" @click="prevCallback" />
                <Button label="Next" @click="nextCallback" />
            </div>
        </template>
    </StepperPanel>
    <StepperPanel header="Header III">
        <template #content="{ prevCallback }">
            <div class="flex flex-col h-48">
                <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content III</div>
            </div>
            <div class="flex py-6">
                <Button label="Back" severity="secondary" @click="prevCallback" />
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
                <template #content="{ nextCallback }">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content I</div>
                    </div>
                    <div class="flex py-6">
                        <Button label="Next" @click="nextCallback" />
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel header="Header II">
                <template #content="{ prevCallback, nextCallback }">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content II</div>
                    </div>
                    <div class="flex py-6 gap-2">
                        <Button label="Back" severity="secondary" @click="prevCallback" />
                        <Button label="Next" @click="nextCallback" />
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel header="Header III">
                <template #content="{ prevCallback }">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content III</div>
                    </div>
                    <div class="flex py-6">
                        <Button label="Back" severity="secondary" @click="prevCallback" />
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
                <template #content="{ nextCallback }">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content I</div>
                    </div>
                    <div class="flex py-6">
                        <Button label="Next" @click="nextCallback" />
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel header="Header II">
                <template #content="{ prevCallback, nextCallback }">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content II</div>
                    </div>
                    <div class="flex py-6 gap-2">
                        <Button label="Back" severity="secondary" @click="prevCallback" />
                        <Button label="Next" @click="nextCallback" />
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel header="Header III">
                <template #content="{ prevCallback }">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content III</div>
                    </div>
                    <div class="flex py-6">
                        <Button label="Back" severity="secondary" @click="prevCallback" />
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
