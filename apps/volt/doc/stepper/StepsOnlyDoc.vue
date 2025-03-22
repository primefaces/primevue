<template>
    <DocSectionText v-bind="$attrs">
        <p>Use Stepper with a <i>StepList</i> only for custom requirements where a progress indicator is needed.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Stepper value="1" class="basis-[50rem]">
            <StepList>
                <Step value="1">Design</Step>
                <Step value="2">Development</Step>
                <Step value="3">QA</Step>
            </StepList>
        </Stepper>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Stepper from '@/volt/stepper';
import Step from '@/volt/stepper/step';
import StepList from '@/volt/stepper/steplist';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Stepper value="1" class="basis-[50rem]">
            <StepList>
                <Step value="1">Design</Step>
                <Step value="2">Development</Step>
                <Step value="3">QA</Step>
            </StepList>
        </Stepper>
    </div>
</template>

<script setup>
import Stepper from '@/volt/stepper';
import Step from '@/volt/stepper/step';
import StepList from '@/volt/stepper/steplist';
<\/script>
`);
</script>
