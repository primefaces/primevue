<template>
    <DocSectionText v-bind="$attrs">
        <p>Each StepperPanel content can easily be customized with the default slot instead of using the built-in modes. Additionally, header, content, and separator sections of the StepperPanel are customizable via templating.</p>
    </DocSectionText>
    <div class="card flex flex-column justify-content-center">
        <Stepper v-model:activeStep="active">
            <StepperPanel>
                <template #header="{ index, clickCallback, headerClass, numberClass }">
                    <div :class="headerClass" @click="clickCallback">
                        <span :class="[numberClass, 'text-color']">
                            <i v-if="index < active" class="pi pi-check font-semibold" />
                            <template v-else>
                                {{ index + 1 }}
                            </template>
                        </span>
                        <span class="text-base ml-2">Account</span>
                    </div>
                </template>
                <template #content="{ prevCallback, nextCallback }">
                    <div class="flex flex-column justify-content-center gap-2 mx-auto" style="max-width: 20rem">
                        <h3 class="text-center mt-3">Create your account</h3>
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
                    <div class="flex pt-4 justify-content-between">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" disabled @click="prevCallback" />
                        <Button label="Next" severity="contrast" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel>
                <template #header="{ index, clickCallback, headerClass, numberClass }">
                    <div :class="headerClass" @click="clickCallback">
                        <span :class="[numberClass, 'text-color']">
                            <i v-if="index < active" class="pi pi-check font-semibold" />
                            <template v-else>
                                {{ index + 1 }}
                            </template>
                        </span>
                        <span class="text-base ml-2">Interests</span>
                    </div>
                </template>
                <template #content="{ prevCallback, nextCallback }">
                    <div class="flex flex-column justify-content-center gap-3 mx-auto" style="max-width: 24rem">
                        <h3 class="text-center mt-3">Create your interests</h3>
                        <div class="flex flex-wrap justify-content-center gap-3">
                            <ToggleButton v-model="option1" class="w-9rem" onLabel="Table Tennis" offLabel="Table Tennis" />
                            <ToggleButton v-model="option2" class="w-4rem" onLabel="Art" offLabel="Art" />
                            <ToggleButton v-model="option3" class="w-5rem" onLabel="Music" offLabel="Music" />
                            <ToggleButton v-model="option4" class="w-6rem" onLabel="Netflix" offLabel="Netflix" />
                            <ToggleButton v-model="option5" class="w-9rem" onLabel="Guitar Hero" offLabel="Guitar Hero" />
                            <ToggleButton v-model="option6" class="w-6rem" onLabel="Movie" offLabel="Movie" />
                            <ToggleButton v-model="option7" class="w-9rem" onLabel="Basketball" offLabel="Basketball" />
                            <ToggleButton v-model="option8" class="w-8rem" onLabel="PlayStation" offLabel="PlayStation" />
                        </div>
                    </div>
                    <div class="flex pt-4 justify-content-between">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
                        <Button label="Next" severity="contrast" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel>
                <template #header="{ index, clickCallback, headerClass, numberClass }">
                    <div :class="headerClass" @click="clickCallback">
                        <span :class="[numberClass, 'text-color']">
                            <i v-if="index < active" class="pi pi-check font-semibold" />
                            <template v-else>
                                {{ index + 1 }}
                            </template>
                        </span>
                        <span class="text-base ml-2">Complete</span>
                    </div>
                </template>
                <template #content="{ prevCallback, nextCallback }">
                    <div class="flex flex-column justify-content-center gap-3 mx-auto" style="max-width: 24rem">
                        <h3 class="text-center mt-3 mb-6">Account created successfully</h3>
                        <div class="flex justify-content-center">
                            <img alt="logo" src="https://primefaces.org/cdn/primevue/images/stepper-content.svg" />
                        </div>
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
            active: 0,
            name: null,
            email: null,
            password: null,
            option1: false,
            option2: true,
            option3: false,
            option4: true,
            option5: false,
            option6: true,
            option7: true,
            option8: true,
            code: {
                basic: `
<Stepper v-model:activeStep="active">
    <StepperPanel>
        <template #header="{ index, clickCallback, headerClass, numberClass }">
            <div :class="headerClass" @click="clickCallback">
                <span :class="[numberClass, 'text-color']">
                    <i v-if="index < active" class="pi pi-check font-semibold" />
                    <template v-else>
                        {{ index + 1 }}
                    </template>
                </span>
                <span class="text-base ml-2">Account</span>
            </div>
        </template>
        <template #content="{ prevCallback, nextCallback }">
            <div class="flex flex-column justify-content-center gap-2 mx-auto" style="max-width: 20rem">
                <h3 class="text-center mt-3">Create your account</h3>
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
            <div class="flex pt-4 justify-content-between">
                <Button label="Back" severity="secondary" icon="pi pi-arrow-left" disabled @click="prevCallback" />
                <Button label="Next" severity="contrast" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
            </div>
        </template>
    </StepperPanel>
    <StepperPanel>
        <template #header="{ index, clickCallback, headerClass, numberClass }">
            <div :class="headerClass" @click="clickCallback">
                <span :class="[numberClass, 'text-color']">
                    <i v-if="index < active" class="pi pi-check font-semibold" />
                    <template v-else>
                        {{ index + 1 }}
                    </template>
                </span>
                <span class="text-base ml-2">Interests</span>
            </div>
        </template>
        <template #content="{ prevCallback, nextCallback }">
            <div class="flex flex-column justify-content-center gap-3 mx-auto" style="max-width: 24rem">
                <h3 class="text-center mt-3">Create your interests</h3>
                <div class="flex flex-wrap justify-content-center gap-3">
                    <ToggleButton v-model="option1" class="w-9rem" onLabel="Table Tennis" offLabel="Table Tennis" />
                    <ToggleButton v-model="option2" class="w-4rem" onLabel="Art" offLabel="Art" />
                    <ToggleButton v-model="option3" class="w-5rem" onLabel="Music" offLabel="Music" />
                    <ToggleButton v-model="option4" class="w-6rem" onLabel="Netflix" offLabel="Netflix" />
                    <ToggleButton v-model="option5" class="w-9rem" onLabel="Guitar Hero" offLabel="Guitar Hero" />
                    <ToggleButton v-model="option6" class="w-6rem" onLabel="Movie" offLabel="Movie" />
                    <ToggleButton v-model="option7" class="w-9rem" onLabel="Basketball" offLabel="Basketball" />
                    <ToggleButton v-model="option8" class="w-8rem" onLabel="PlayStation" offLabel="PlayStation" />
                </div>
            </div>
            <div class="flex pt-4 justify-content-between">
                <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
                <Button label="Next" severity="contrast" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
            </div>
        </template>
    </StepperPanel>
    <StepperPanel>
        <template #header="{ index, clickCallback, headerClass, numberClass }">
            <div :class="headerClass" @click="clickCallback">
                <span :class="[numberClass, 'text-color']">
                    <i v-if="index < active" class="pi pi-check font-semibold" />
                    <template v-else>
                        {{ index + 1 }}
                    </template>
                </span>
                <span class="text-base ml-2">Complete</span>
            </div>
        </template>
        <template #content="{ prevCallback, nextCallback }">
            <div class="flex flex-column justify-content-center gap-3 mx-auto" style="max-width: 24rem">
                <h3 class="text-center mt-3 mb-6">Account created successfully</h3>
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
    <div class="card flex flex-column justify-content-center">
        <Stepper v-model:activeStep="active">
            <StepperPanel>
                <template #header="{ index, clickCallback, headerClass, numberClass }">
                    <div :class="headerClass" @click="clickCallback">
                        <span :class="[numberClass, 'text-color']">
                            <i v-if="index < active" class="pi pi-check font-semibold" />
                            <template v-else>
                                {{ index + 1 }}
                            </template>
                        </span>
                        <span class="text-base ml-2">Account</span>
                    </div>
                </template>
                <template #content="{ prevCallback, nextCallback }">
                    <div class="flex flex-column justify-content-center gap-2 mx-auto" style="max-width: 20rem">
                        <h3 class="text-center mt-3">Create your account</h3>
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
                    <div class="flex pt-4 justify-content-between">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" disabled @click="prevCallback" />
                        <Button label="Next" severity="contrast" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel>
                <template #header="{ index, clickCallback, headerClass, numberClass }">
                    <div :class="headerClass" @click="clickCallback">
                        <span :class="[numberClass, 'text-color']">
                            <i v-if="index < active" class="pi pi-check font-semibold" />
                            <template v-else>
                                {{ index + 1 }}
                            </template>
                        </span>
                        <span class="text-base ml-2">Interests</span>
                    </div>
                </template>
                <template #content="{ prevCallback, nextCallback }">
                    <div class="flex flex-column justify-content-center gap-3 mx-auto" style="max-width: 24rem">
                        <h3 class="text-center mt-3">Create your interests</h3>
                        <div class="flex flex-wrap justify-content-center gap-3">
                            <ToggleButton v-model="option1" class="w-9rem" onLabel="Table Tennis" offLabel="Table Tennis" />
                            <ToggleButton v-model="option2" class="w-4rem" onLabel="Art" offLabel="Art" />
                            <ToggleButton v-model="option3" class="w-5rem" onLabel="Music" offLabel="Music" />
                            <ToggleButton v-model="option4" class="w-6rem" onLabel="Netflix" offLabel="Netflix" />
                            <ToggleButton v-model="option5" class="w-9rem" onLabel="Guitar Hero" offLabel="Guitar Hero" />
                            <ToggleButton v-model="option6" class="w-6rem" onLabel="Movie" offLabel="Movie" />
                            <ToggleButton v-model="option7" class="w-9rem" onLabel="Basketball" offLabel="Basketball" />
                            <ToggleButton v-model="option8" class="w-8rem" onLabel="PlayStation" offLabel="PlayStation" />
                        </div>
                    </div>
                    <div class="flex pt-4 justify-content-between">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
                        <Button label="Next" severity="contrast" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel>
                <template #header="{ index, clickCallback, headerClass, numberClass }">
                    <div :class="headerClass" @click="clickCallback">
                        <span :class="[numberClass, 'text-color']">
                            <i v-if="index < active" class="pi pi-check font-semibold" />
                            <template v-else>
                                {{ index + 1 }}
                            </template>
                        </span>
                        <span class="text-base ml-2">Complete</span>
                    </div>
                </template>
                <template #content="{ prevCallback, nextCallback }">
                    <div class="flex flex-column justify-content-center gap-3 mx-auto" style="max-width: 24rem">
                        <h3 class="text-center mt-3 mb-6">Account created successfully</h3>
                        <div class="flex justify-content-center">
                            <img alt="logo" src="https://primefaces.org/cdn/primevue/images/stepper-content.svg" />
                        </div>
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

<script>
export default {
    data() {
        return {
            active: 0,
            name: null,
            email: null,
            password: null,
            option1: false,
            option2: true,
            option3: false,
            option4: true,
            option5: false,
            option6: true,
            option7: true,
            option8: true,
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-column justify-content-center">
        <Stepper v-model:activeStep="active">
            <StepperPanel>
                <template #header="{ index, clickCallback, headerClass, numberClass }">
                    <div :class="headerClass" @click="clickCallback">
                        <span :class="[numberClass, 'text-color']">
                            <i v-if="index < active" class="pi pi-check font-semibold" />
                            <template v-else>
                                {{ index + 1 }}
                            </template>
                        </span>
                        <span class="text-base ml-2">Account</span>
                    </div>
                </template>
                <template #content="{ prevCallback, nextCallback }">
                    <div class="flex flex-column justify-content-center gap-2 mx-auto" style="max-width: 20rem">
                        <h3 class="text-center mt-3">Create your account</h3>
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
                    <div class="flex pt-4 justify-content-between">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" disabled @click="prevCallback" />
                        <Button label="Next" severity="contrast" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel>
                <template #header="{ index, clickCallback, headerClass, numberClass }">
                    <div :class="headerClass" @click="clickCallback">
                        <span :class="[numberClass, 'text-color']">
                            <i v-if="index < active" class="pi pi-check font-semibold" />
                            <template v-else>
                                {{ index + 1 }}
                            </template>
                        </span>
                        <span class="text-base ml-2">Interests</span>
                    </div>
                </template>
                <template #content="{ prevCallback, nextCallback }">
                    <div class="flex flex-column justify-content-center gap-3 mx-auto" style="max-width: 24rem">
                        <h3 class="text-center mt-3">Create your interests</h3>
                        <div class="flex flex-wrap justify-content-center gap-3">
                            <ToggleButton v-model="option1" class="w-9rem" onLabel="Table Tennis" offLabel="Table Tennis" />
                            <ToggleButton v-model="option2" class="w-4rem" onLabel="Art" offLabel="Art" />
                            <ToggleButton v-model="option3" class="w-5rem" onLabel="Music" offLabel="Music" />
                            <ToggleButton v-model="option4" class="w-6rem" onLabel="Netflix" offLabel="Netflix" />
                            <ToggleButton v-model="option5" class="w-9rem" onLabel="Guitar Hero" offLabel="Guitar Hero" />
                            <ToggleButton v-model="option6" class="w-6rem" onLabel="Movie" offLabel="Movie" />
                            <ToggleButton v-model="option7" class="w-9rem" onLabel="Basketball" offLabel="Basketball" />
                            <ToggleButton v-model="option8" class="w-8rem" onLabel="PlayStation" offLabel="PlayStation" />
                        </div>
                    </div>
                    <div class="flex pt-4 justify-content-between">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
                        <Button label="Next" severity="contrast" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel>
                <template #header="{ index, clickCallback, headerClass, numberClass }">
                    <div :class="headerClass" @click="clickCallback">
                        <span :class="[numberClass, 'text-color']">
                            <i v-if="index < active" class="pi pi-check font-semibold" />
                            <template v-else>
                                {{ index + 1 }}
                            </template>
                        </span>
                        <span class="text-base ml-2">Complete</span>
                    </div>
                </template>
                <template #content="{ prevCallback, nextCallback }">
                    <div class="flex flex-column justify-content-center gap-3 mx-auto" style="max-width: 24rem">
                        <h3 class="text-center mt-3 mb-6">Account created successfully</h3>
                        <div class="flex justify-content-center">
                            <img alt="logo" src="https://primefaces.org/cdn/primevue/images/stepper-content.svg" />
                        </div>
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

<script setup>
import { ref } from 'vue';

const active = ref(0);
const completed = ref(false);
const products = ref();
const name = ref();
const email = ref();
const password = ref();
const option1 = ref(false);
const option2 = ref(true);
const option3 = ref(false);
const option4 = ref(true);
const option5 = ref(false);
const option6 = ref(true);
const option7 = ref(true);
const option8 = ref(true);

<\/script>
`
            }
        };
    }
};
</script>
