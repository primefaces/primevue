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

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Stepper value="1" class="basis-[50rem]">
    <StepList>
        <Step value="1">Design</Step>
        <Step value="2">Development</Step>
        <Step value="3">QA</Step>
    </StepList>
</Stepper>
`,
                options: `
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
`,
                composition: `
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
`
            }
        };
    }
};
</script>
