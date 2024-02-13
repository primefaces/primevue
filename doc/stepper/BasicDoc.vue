<template>
    <DocSectionText v-bind="$attrs">
        <p>Stepper consists of one or more StepperPanel elements.</p>
    </DocSectionText>
    <div class="card">
        <Stepper>
            <StepperPanel header="Header 1">
                <template #content="{ nextCallback }">
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div class="flex gap-2 justify-content-end">
                        <Button label="Next" @click="(event) => nextCallback(event)" />
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel header="Header 2">
                <template #content="{ prevCallback, nextCallback }">
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div class="flex gap-2 justify-content-end">
                        <Button label="Prev" severity="secondary" @click="(event) => prevCallback(event)" />
                        <Button label="Next" @click="(event) => nextCallback(event)" />
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel header="Header 3">
                <template #content="{ prevCallback }">
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div class="flex gap-2 justify-content-end">
                        <Button label="Prev" severity="secondary" @click="(event) => prevCallback(event)" />
                        <!-- <Button label="Confirm" /> -->
                    </div>
                </template>
            </StepperPanel>
        </Stepper>
    </div>
</template>
