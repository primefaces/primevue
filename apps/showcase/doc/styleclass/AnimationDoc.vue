<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Classes to apply during enter and leave animations are specified using the <i>enterFromClass</i>, <i>enterActiveClass</i>, <i>enterToClass</i>, <i>leaveFromClass</i>, <i>leaveActiveClass</i>,<i>leaveToClass</i>properties. In addition in
            case the target is an overlay, <i>hideOnOutsideClick</i> would be handy to hide the target if outside of the popup is clicked.
        </p>
    </DocSectionText>
    <div class="card flex flex-col items-center">
        <div>
            <Button v-styleclass="{ selector: '.box', enterFromClass: 'my-hidden', enterActiveClass: 'my-fadein' }" label="Show" class="mr-2" />
            <Button v-styleclass="{ selector: '.box', leaveActiveClass: 'my-fadeout', leaveToClass: 'my-hidden' }" label="Hide" severity="secondary" />
        </div>
        <div class="my-hidden animate-duration-500 box">
            <div class="flex bg-green-500 text-white items-center justify-center py-4 rounded-md mt-4 font-bold w-32 h-32">Content</div>
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
<Button v-styleclass="{ selector: '.box', enterFromClass: 'my-hidden', enterActiveClass: 'my-fadein' }" label="Show" class="mr-2" />
<Button v-styleclass="{ selector: '.box', leaveActiveClass: 'my-fadeout', leaveToClass: 'my-hidden' }" label="Hide" severity="secondary" />
<div class="my-hidden animate-duration-500 box">
    <div class="flex bg-green-500 text-white items-center justify-center py-4 rounded-md mt-4 font-bold w-32 h-32">Content</div>
</div>
`,
                options: `
<template>
    <div class="card flex flex-col items-center">
        <div>
            <Button v-styleclass="{ selector: '.box', enterFromClass: 'my-hidden', enterActiveClass: 'my-fadein' }" label="Show" class="mr-2" />
            <Button v-styleclass="{ selector: '.box', leaveActiveClass: 'my-fadeout', leaveToClass: 'my-hidden' }" label="Hide" severity="secondary" />
        </div>
        <div class="my-hidden animate-duration-500 box">
            <div class="flex bg-green-500 text-white items-center justify-center py-4 rounded-md mt-4 font-bold w-32 h-32">Content</div>
        </div>
    </div>
</template>

<script>
<\/script>

<style scoped>
@keyframes my-fadein {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes my-fadeout {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

.my-hidden {
    display: none;
}

.my-fadein {
    animation: my-fadein 150ms linear;
}

.my-fadeout {
    animation: my-fadeout 150ms linear;
}
</style>
`,
                composition: `
<template>
    <div class="card flex flex-col items-center">
        <div>
            <Button v-styleclass="{ selector: '.box', enterFromClass: 'my-hidden', enterActiveClass: 'my-fadein' }" label="Show" class="mr-2" />
            <Button v-styleclass="{ selector: '.box', leaveActiveClass: 'my-fadeout', leaveToClass: 'my-hidden' }" label="Hide" severity="secondary" />
        </div>
        <div class="my-hidden animate-duration-500 box">
            <div class="flex bg-green-500 text-white items-center justify-center py-4 rounded-md mt-4 font-bold w-32 h-32">Content</div>
        </div>
    </div>
</template>

<script setup>
<\/script>

<style scoped>
@keyframes my-fadein {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes my-fadeout {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

.my-hidden {
    display: none;
}

.my-fadein {
    animation: my-fadein 150ms linear;
}

.my-fadeout {
    animation: my-fadeout 150ms linear;
}
</style>
`
            }
        };
    }
};
</script>

<style lang="scss" scoped>
@keyframes my-fadein {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes my-fadeout {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

.my-hidden {
    display: none;
}

.my-fadein {
    animation: my-fadein 150ms linear;
}

.my-fadeout {
    animation: my-fadeout 150ms linear;
}
</style>
