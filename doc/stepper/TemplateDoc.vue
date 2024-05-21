<template>
    <DocSectionText v-bind="$attrs">
        <p>Stepper provides various templating options to customize the default UI design.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Stepper v-model:activeStep="active">
            <StepperPanel>
                <template #header="{ index, clickCallback }">
                    <button class="bg-transparent border-0 inline-flex flex-col gap-2" @click="clickCallback">
                        <span :class="['rounded-full border-2 w-12 h-12 inline-flex items-center justify-center', { 'bg-primary text-primary-contrast border-primary': index <= active, 'border-surface-200 dark:border-surface-700': index > active }]">
                            <i class="pi pi-user" />
                        </span>
                    </button>
                </template>
                <template #content="{ nextCallback }">
                    <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 20rem">
                        <div class="text-center mt-4 mb-4 text-xl font-semibold">Create your account</div>
                        <div class="field p-fluid">
                            <IconField>
                                <InputIcon>
                                    <i class="pi pi-user" />
                                </InputIcon>
                                <InputText id="input" v-model="name" type="text" placeholder="Name" />
                            </IconField>
                        </div>
                        <div class="field p-fluid">
                            <IconField>
                                <InputIcon>
                                    <i class="pi pi-envelope" />
                                </InputIcon>
                                <InputText id="email" v-model="email" type="email" placeholder="Email" />
                            </IconField>
                        </div>
                        <div class="field p-fluid">
                            <Password v-model="password" toggleMask placeholder="Password" />
                        </div>
                    </div>
                    <div class="flex pt-6 justify-end">
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel>
                <template #header="{ index, clickCallback }">
                    <button class="bg-transparent border-0 inline-flex flex-col gap-2" @click="clickCallback">
                        <span :class="['rounded-full border-2 w-12 h-12 inline-flex items-center justify-center', { 'bg-primary text-primary-contrast border-primary': index <= active, 'border-surface-200 dark:border-surface-700': index > active }]">
                            <i class="pi pi-star" />
                        </span>
                    </button>
                </template>
                <template #content="{ prevCallback, nextCallback }">
                    <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
                        <div class="text-center mt-4 mb-4 text-xl font-semibold">Choose your interests</div>
                        <div class="flex flex-wrap justify-center gap-4">
                            <ToggleButton v-model="option1" onLabel="Nature" offLabel="Nature" />
                            <ToggleButton v-model="option2" onLabel="Art" offLabel="Art" />
                            <ToggleButton v-model="option3" onLabel="Music" offLabel="Music" />
                            <ToggleButton v-model="option4" onLabel="Design" offLabel="Design" />
                            <ToggleButton v-model="option5" onLabel="Photography" offLabel="Photography" />
                            <ToggleButton v-model="option6" onLabel="Movies" offLabel="Movies" />
                            <ToggleButton v-model="option7" onLabel="Sports" offLabel="Sports" />
                            <ToggleButton v-model="option8" onLabel="Gaming" offLabel="Gaming" />
                            <ToggleButton v-model="option9" onLabel="Traveling" offLabel="Traveling" />
                            <ToggleButton v-model="option10" onLabel="Dancing" offLabel="Dancing" />
                        </div>
                    </div>
                    <div class="flex pt-6 justify-between">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel>
                <template #header="{ index, clickCallback }">
                    <button class="bg-transparent border-0 inline-flex flex-col gap-2" @click="clickCallback">
                        <span :class="['rounded-full border-2 w-12 h-12 inline-flex items-center justify-center', { 'bg-primary text-primary-contrast border-primary': index <= active, 'border-surface-200 dark:border-surface-700': index > active }]">
                            <i class="pi pi-id-card" />
                        </span>
                    </button>
                </template>
                <template #content="{ prevCallback }">
                    <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
                        <div class="text-center mt-4 mb-4 text-xl font-semibold">Account created successfully</div>
                        <div class="text-center">
                            <img alt="logo" src="https://primefaces.org/cdn/primevue/images/stepper/content.svg" />
                        </div>
                    </div>
                    <div class="flex pt-6 justify-start">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
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
            active: 0,
            name: null,
            email: null,
            password: null,
            option1: false,
            option2: false,
            option3: false,
            option4: false,
            option5: false,
            option6: false,
            option7: false,
            option8: false,
            option9: false,
            option10: false,
            code: {
                basic: `
<Stepper v-model:activeStep="active">
    <StepperPanel>
        <template #header="{ index, clickCallback }">
            <button class="bg-transparent border-0 inline-flex flex-col gap-2" @click="clickCallback">
                <span :class="['rounded-full border-2 w-12 h-12 inline-flex items-center justify-center', { 'bg-primary text-primary-contrast border-primary': index <= active, 'border-surface-200 dark:border-surface-700': index > active }]">
                    <i class="pi pi-user" />
                </span>
            </button>
        </template>
        <template #content="{ nextCallback }">
            <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 20rem">
                <div class="text-center mt-4 mb-4 text-xl font-semibold">Create your account</div>
                <div class="field p-fluid">
                    <IconField>
                        <InputIcon>
                            <i class="pi pi-user" />
                        </InputIcon>
                        <InputText id="input" v-model="name" type="text" placeholder="Name" />
                    </IconField>
                </div>
                <div class="field p-fluid">
                    <IconField>
                        <InputIcon>
                            <i class="pi pi-envelope" />
                        </InputIcon>
                        <InputText id="email" v-model="email" type="email" placeholder="Email" />
                    </IconField>
                </div>
                <div class="field p-fluid">
                    <Password v-model="password" toggleMask placeholder="Password" />
                </div>
            </div>
            <div class="flex pt-6 justify-end">
                <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
            </div>
        </template>
    </StepperPanel>
    <StepperPanel>
        <template #header="{ index, clickCallback }">
            <button class="bg-transparent border-0 inline-flex flex-col gap-2" @click="clickCallback">
                <span :class="['rounded-full border-2 w-12 h-12 inline-flex items-center justify-center', { 'bg-primary text-primary-contrast border-primary': index <= active, 'border-surface-200 dark:border-surface-700': index > active }]">
                    <i class="pi pi-star" />
                </span>
            </button>
        </template>
        <template #content="{ prevCallback, nextCallback }">
            <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
                <div class="text-center mt-4 mb-4 text-xl font-semibold">Choose your interests</div>
                <div class="flex flex-wrap justify-center gap-4">
                    <ToggleButton v-model="option1" onLabel="Nature" offLabel="Nature" />
                    <ToggleButton v-model="option2" onLabel="Art" offLabel="Art" />
                    <ToggleButton v-model="option3" onLabel="Music" offLabel="Music" />
                    <ToggleButton v-model="option4" onLabel="Design" offLabel="Design" />
                    <ToggleButton v-model="option5" onLabel="Photography" offLabel="Photography" />
                    <ToggleButton v-model="option6" onLabel="Movies" offLabel="Movies" />
                    <ToggleButton v-model="option7" onLabel="Sports" offLabel="Sports" />
                    <ToggleButton v-model="option8" onLabel="Gaming" offLabel="Gaming" />
                    <ToggleButton v-model="option9" onLabel="Traveling" offLabel="Traveling" />
                    <ToggleButton v-model="option10" onLabel="Dancing" offLabel="Dancing" />
                </div>
            </div>
            <div class="flex pt-6 justify-between">
                <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
                <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
            </div>
        </template>
    </StepperPanel>
    <StepperPanel>
        <template #header="{ index, clickCallback }">
            <button class="bg-transparent border-0 inline-flex flex-col gap-2" @click="clickCallback">
                <span :class="['rounded-full border-2 w-12 h-12 inline-flex items-center justify-center', { 'bg-primary text-primary-contrast border-primary': index <= active, 'border-surface-200 dark:border-surface-700': index > active }]">
                    <i class="pi pi-id-card" />
                </span>
            </button>
        </template>
        <template #content="{ prevCallback }">
            <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
                <div class="text-center mt-4 mb-4 text-xl font-semibold">Account created successfully</div>
                <div class="text-center">
                    <img alt="logo" src="https://primefaces.org/cdn/primevue/images/stepper/content.svg" />
                </div>
            </div>
            <div class="flex pt-6 justify-start">
                <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
            </div>
        </template>
    </StepperPanel>
</Stepper>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Stepper v-model:activeStep="active">
            <StepperPanel>
                <template #header="{ index, clickCallback }">
                    <button class="bg-transparent border-0 inline-flex flex-col gap-2" @click="clickCallback">
                        <span :class="['rounded-full border-2 w-12 h-12 inline-flex items-center justify-center', { 'bg-primary text-primary-contrast border-primary': index <= active, 'border-surface-200 dark:border-surface-700': index > active }]">
                            <i class="pi pi-user" />
                        </span>
                    </button>
                </template>
                <template #content="{ nextCallback }">
                    <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 20rem">
                        <div class="text-center mt-4 mb-4 text-xl font-semibold">Create your account</div>
                        <div class="field p-fluid">
                            <IconField>
                                <InputIcon>
                                    <i class="pi pi-user" />
                                </InputIcon>
                                <InputText id="input" v-model="name" type="text" placeholder="Name" />
                            </IconField>
                        </div>
                        <div class="field p-fluid">
                            <IconField>
                                <InputIcon>
                                    <i class="pi pi-envelope" />
                                </InputIcon>
                                <InputText id="email" v-model="email" type="email" placeholder="Email" />
                            </IconField>
                        </div>
                        <div class="field p-fluid">
                            <Password v-model="password" toggleMask placeholder="Password" />
                        </div>
                    </div>
                    <div class="flex pt-6 justify-end">
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel>
                <template #header="{ index, clickCallback }">
                    <button class="bg-transparent border-0 inline-flex flex-col gap-2" @click="clickCallback">
                        <span :class="['rounded-full border-2 w-12 h-12 inline-flex items-center justify-center', { 'bg-primary text-primary-contrast border-primary': index <= active, 'border-surface-200 dark:border-surface-700': index > active }]">
                            <i class="pi pi-star" />
                        </span>
                    </button>
                </template>
                <template #content="{ prevCallback, nextCallback }">
                    <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
                        <div class="text-center mt-4 mb-4 text-xl font-semibold">Choose your interests</div>
                        <div class="flex flex-wrap justify-center gap-4">
                            <ToggleButton v-model="option1" onLabel="Nature" offLabel="Nature" />
                            <ToggleButton v-model="option2" onLabel="Art" offLabel="Art" />
                            <ToggleButton v-model="option3" onLabel="Music" offLabel="Music" />
                            <ToggleButton v-model="option4" onLabel="Design" offLabel="Design" />
                            <ToggleButton v-model="option5" onLabel="Photography" offLabel="Photography" />
                            <ToggleButton v-model="option6" onLabel="Movies" offLabel="Movies" />
                            <ToggleButton v-model="option7" onLabel="Sports" offLabel="Sports" />
                            <ToggleButton v-model="option8" onLabel="Gaming" offLabel="Gaming" />
                            <ToggleButton v-model="option9" onLabel="Traveling" offLabel="Traveling" />
                            <ToggleButton v-model="option10" onLabel="Dancing" offLabel="Dancing" />
                        </div>
                    </div>
                    <div class="flex pt-6 justify-between">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel>
                <template #header="{ index, clickCallback }">
                    <button class="bg-transparent border-0 inline-flex flex-col gap-2" @click="clickCallback">
                        <span :class="['rounded-full border-2 w-12 h-12 inline-flex items-center justify-center', { 'bg-primary text-primary-contrast border-primary': index <= active, 'border-surface-200 dark:border-surface-700': index > active }]">
                            <i class="pi pi-id-card" />
                        </span>
                    </button>
                </template>
                <template #content="{ prevCallback }">
                    <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
                        <div class="text-center mt-4 mb-4 text-xl font-semibold">Account created successfully</div>
                        <div class="text-center">
                            <img alt="logo" src="https://primefaces.org/cdn/primevue/images/stepper/content.svg" />
                        </div>
                    </div>
                    <div class="flex pt-6 justify-start">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
                    </div>
                </template>
            </StepperPanel>
            </Stepper>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
            name: null,
            email: null,
            password: null,
            option1: false,
            option2: false,
            option3: false,
            option4: false,
            option5: false,
            option6: false,
            option7: false,
            option8: false,
            option9: false,
            option10: false
        }
    }
}
<\/script>

<style scoped>
.p-stepper {
    flex-basis: 40rem;
}
<\/style>

`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Stepper v-model:activeStep="active">
            <StepperPanel>
                <template #header="{ index, clickCallback }">
                    <button class="bg-transparent border-0 inline-flex flex-col gap-2" @click="clickCallback">
                        <span :class="['rounded-full border-2 w-12 h-12 inline-flex items-center justify-center', { 'bg-primary text-primary-contrast border-primary': index <= active, 'border-surface-200 dark:border-surface-700': index > active }]">
                            <i class="pi pi-user" />
                        </span>
                    </button>
                </template>
                <template #content="{ nextCallback }">
                    <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 20rem">
                        <div class="text-center mt-4 mb-4 text-xl font-semibold">Create your account</div>
                        <div class="field p-fluid">
                            <IconField>
                                <InputIcon>
                                    <i class="pi pi-user" />
                                </InputIcon>
                                <InputText id="input" v-model="name" type="text" placeholder="Name" />
                            </IconField>
                        </div>
                        <div class="field p-fluid">
                            <IconField>
                                <InputIcon>
                                    <i class="pi pi-envelope" />
                                </InputIcon>
                                <InputText id="email" v-model="email" type="email" placeholder="Email" />
                            </IconField>
                        </div>
                        <div class="field p-fluid">
                            <Password v-model="password" toggleMask placeholder="Password" />
                        </div>
                    </div>
                    <div class="flex pt-6 justify-end">
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel>
                <template #header="{ index, clickCallback }">
                    <button class="bg-transparent border-0 inline-flex flex-col gap-2" @click="clickCallback">
                        <span :class="['rounded-full border-2 w-12 h-12 inline-flex items-center justify-center', { 'bg-primary text-primary-contrast border-primary': index <= active, 'border-surface-200 dark:border-surface-700': index > active }]">
                            <i class="pi pi-star" />
                        </span>
                    </button>
                </template>
                <template #content="{ prevCallback, nextCallback }">
                    <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
                        <div class="text-center mt-4 mb-4 text-xl font-semibold">Choose your interests</div>
                        <div class="flex flex-wrap justify-center gap-4">
                            <ToggleButton v-model="option1" onLabel="Nature" offLabel="Nature" />
                            <ToggleButton v-model="option2" onLabel="Art" offLabel="Art" />
                            <ToggleButton v-model="option3" onLabel="Music" offLabel="Music" />
                            <ToggleButton v-model="option4" onLabel="Design" offLabel="Design" />
                            <ToggleButton v-model="option5" onLabel="Photography" offLabel="Photography" />
                            <ToggleButton v-model="option6" onLabel="Movies" offLabel="Movies" />
                            <ToggleButton v-model="option7" onLabel="Sports" offLabel="Sports" />
                            <ToggleButton v-model="option8" onLabel="Gaming" offLabel="Gaming" />
                            <ToggleButton v-model="option9" onLabel="Traveling" offLabel="Traveling" />
                            <ToggleButton v-model="option10" onLabel="Dancing" offLabel="Dancing" />
                        </div>
                    </div>
                    <div class="flex pt-6 justify-between">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel>
                <template #header="{ index, clickCallback }">
                    <button class="bg-transparent border-0 inline-flex flex-col gap-2" @click="clickCallback">
                        <span :class="['rounded-full border-2 w-12 h-12 inline-flex items-center justify-center', { 'bg-primary text-primary-contrast border-primary': index <= active, 'border-surface-200 dark:border-surface-700': index > active }]">
                            <i class="pi pi-id-card" />
                        </span>
                    </button>
                </template>
                <template #content="{ prevCallback }">
                    <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
                        <div class="text-center mt-4 mb-4 text-xl font-semibold">Account created successfully</div>
                        <div class="text-center">
                            <img alt="logo" src="https://primefaces.org/cdn/primevue/images/stepper/content.svg" />
                        </div>
                    </div>
                    <div class="flex pt-6 justify-start">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
                    </div>
                </template>
            </StepperPanel>
        </Stepper>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const active = ref(0);
const completed = ref(false);
const products = ref();
const name = ref();
const email = ref();
const password = ref();
const option1 = ref(false);
const option2 = ref(false);
const option3 = ref(false);
const option4 = ref(false);
const option5 = ref(false);
const option6 = ref(false);
const option7 = ref(false);
const option8 = ref(false);
const option9 = ref(false);
const option10 = ref(false);

<\/script>

<style scoped>
.p-stepper {
    flex-basis: 40rem;
}
<\/style>

`
            }
        };
    }
};
</script>

<style scoped>
.p-stepper {
    flex-basis: 40rem;
}
</style>
