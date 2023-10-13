<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Animate uses PrimeFlex animations, however it can perform animations with custom CSS classes too. Takes <i>enterClass</i> and <i>leaveClass</i> properties to simply add animation class during scroll or page load to manage elements
            animation if the element is entering or leaving the viewport.
        </p>
    </DocSectionText>
    <div class="card flex flex-column align-items-center">
        <div v-animate="{ enterClass: 'flip', leaveClass: 'fadeoutleft' }" class="flex justify-content-center align-items-center h-20rem w-20rem border-round shadow-2 animation-duration-1000 animation-ease-out">
            <span class="text-900 text-3xl font-bold">flip</span>
        </div>
        <div class="h-30rem"></div>
        <div v-animate="{ enterClass: 'flipup' }" class="flex justify-content-center align-items-center h-20rem w-20rem border-round shadow-2 animation-duration-1000 animation-ease-out">
            <span class="text-900 text-3xl font-bold">flip up</span>
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<div class="card flex flex-column align-items-center">
    <div v-animate="{ enterClass: 'flip', leaveClass: 'fadeoutleft' }" class="flex justify-content-center align-items-center h-20rem w-20rem border-round shadow-2 animation-duration-1000 animation-ease-out">
        <span class="text-900 text-3xl font-bold">flip</span>
    </div>
    <div class="h-30rem"></div>
    <div v-animate="{ enterClass: 'flipup' }" class="flex justify-content-center align-items-center h-20rem w-20rem border-round shadow-2 animation-duration-1000 animation-ease-out">
        <span class="text-900 text-3xl font-bold">flip up</span>
    </div>
</div>`,
                options: `
<template>
    <div class="card flex flex-column align-items-center">
        <div v-animate="{ enterClass: 'flip', leaveClass: 'fadeoutleft' }" class="flex justify-content-center align-items-center h-20rem w-20rem border-round shadow-2 animation-duration-1000 animation-ease-out">
            <span class="text-900 text-3xl font-bold">flip</span>
        </div>
        <div class="h-30rem"></div>
        <div v-animate="{ enterClass: 'flipup' }" class="flex justify-content-center align-items-center h-20rem w-20rem border-round shadow-2 animation-duration-1000 animation-ease-out">
            <span class="text-900 text-3xl font-bold">flip up</span>
        </div>
    </div>
</template>`,
                composition: `
<template>
    <div class="card flex flex-column align-items-center">
        <div v-animate="{ enterClass: 'flip', leaveClass: 'fadeoutleft' }" class="flex justify-content-center align-items-center h-20rem w-20rem border-round shadow-2 animation-duration-1000 animation-ease-out">
            <span class="text-900 text-3xl font-bold">flip</span>
        </div>
        <div class="h-30rem"></div>
        <div v-animate="{ enterClass: 'flipup' }" class="flex justify-content-center align-items-center h-20rem w-20rem border-round shadow-2 animation-duration-1000 animation-ease-out">
            <span class="text-900 text-3xl font-bold">flip up</span>
        </div>
    </div>
</template>`
            }
        };
    }
};
</script>
