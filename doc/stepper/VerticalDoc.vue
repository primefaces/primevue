<template>
    <DocSectionText v-bind="$attrs">
        <p>Layout of the Stepper is configured with the <i>StepItem</i> helper component.</p>
    </DocSectionText>
    <div class="card">
        <Stepper value="1">
            <StepItem value="1">
                <Step>Header I</Step>
                <StepPanel v-slot="{ activateCallback }">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content II</div>
                    </div>
                    <div class="flex pt-6 justify-start">
                        <Button label="Next" @click="activateCallback('2')" />
                    </div>
                </StepPanel>
            </StepItem>
            <StepItem value="2">
                <Step>Header II</Step>
                <StepPanel v-slot="{ activateCallback }">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content II</div>
                    </div>
                    <div class="flex pt-6 justify-between">
                        <Button label="Back" severity="secondary" @click="activateCallback('1')" />
                        <Button label="Next" iconPos="right" @click="activateCallback('3')" />
                    </div>
                </StepPanel>
            </StepItem>
            <StepItem value="3">
                <Step>Header III</Step>
                <StepPanel v-slot="{ activateCallback }">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content III</div>
                    </div>
                    <div class="flex pt-6 justify-start">
                        <Button label="Back" severity="secondary" @click="activateCallback('2')" />
                    </div>
                </StepPanel>
            </StepItem>
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
<Stepper value="1">
    <StepItem value="1">
        <Step>Header I</Step>
        <StepPanel v-slot="{ activateCallback }">
            <div class="flex flex-col h-48">
                <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content II</div>
            </div>
            <div class="flex pt-6 justify-start">
                <Button label="Next" @click="activateCallback('2')" />
            </div>
        </StepPanel>
    </StepItem>
    <StepItem value="2">
        <Step>Header II</Step>
        <StepPanel v-slot="{ activateCallback }">
            <div class="flex flex-col h-48">
                <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content II</div>
            </div>
            <div class="flex pt-6 justify-between">
                <Button label="Back" severity="secondary" @click="activateCallback('1')" />
                <Button label="Next" iconPos="right" @click="activateCallback('3')" />
            </div>
        </StepPanel>
    </StepItem>
    <StepItem value="3">
        <Step>Header III</Step>
        <StepPanel v-slot="{ activateCallback }">
            <div class="flex flex-col h-48">
                <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content III</div>
            </div>
            <div class="flex pt-6 justify-start">
                <Button label="Back" severity="secondary" @click="activateCallback('2')" />
            </div>
        </StepPanel>
    </StepItem>
</Stepper>
`,
                options: `
<template>
    <div class="card">
        <Stepper value="1">
            <StepItem value="1">
                <Step>Header I</Step>
                <StepPanel v-slot="{ activateCallback }">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content II</div>
                    </div>
                    <div class="flex pt-6 justify-start">
                        <Button label="Next" @click="activateCallback('2')" />
                    </div>
                </StepPanel>
            </StepItem>
            <StepItem value="2">
                <Step>Header II</Step>
                <StepPanel v-slot="{ activateCallback }">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content II</div>
                    </div>
                    <div class="flex pt-6 justify-between">
                        <Button label="Back" severity="secondary" @click="activateCallback('1')" />
                        <Button label="Next" iconPos="right" @click="activateCallback('3')" />
                    </div>
                </StepPanel>
            </StepItem>
            <StepItem value="3">
                <Step>Header III</Step>
                <StepPanel v-slot="{ activateCallback }">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content III</div>
                    </div>
                    <div class="flex pt-6 justify-start">
                        <Button label="Back" severity="secondary" @click="activateCallback('2')" />
                    </div>
                </StepPanel>
            </StepItem>
        </Stepper>
    </div>
</template>
`,
                composition: `
<template>
    <div class="card">
        <Stepper value="1">
            <StepItem value="1">
                <Step>Header I</Step>
                <StepPanel v-slot="{ activateCallback }">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content II</div>
                    </div>
                    <div class="flex pt-6 justify-start">
                        <Button label="Next" @click="activateCallback('2')" />
                    </div>
                </StepPanel>
            </StepItem>
            <StepItem value="2">
                <Step>Header II</Step>
                <StepPanel v-slot="{ activateCallback }">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content II</div>
                    </div>
                    <div class="flex pt-6 justify-between">
                        <Button label="Back" severity="secondary" @click="activateCallback('1')" />
                        <Button label="Next" iconPos="right" @click="activateCallback('3')" />
                    </div>
                </StepPanel>
            </StepItem>
            <StepItem value="3">
                <Step>Header III</Step>
                <StepPanel v-slot="{ activateCallback }">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content III</div>
                    </div>
                    <div class="flex pt-6 justify-start">
                        <Button label="Back" severity="secondary" @click="activateCallback('2')" />
                    </div>
                </StepPanel>
            </StepItem>
        </Stepper>
    </div>
</template>
`
            }
        };
    }
};
</script>
