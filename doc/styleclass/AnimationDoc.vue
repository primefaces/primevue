<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Classes to apply during enter and leave animations are specified using the <i>enterClass</i>, <i>enterActiveClass</i>, <i>enterToClass</i>, <i>leaveClass</i>, <i>leaveActiveClass</i>,<i>leaveToClass</i>properties. In addition in case the
            target is an overlay, <i>hideOnOutsideClick</i> would be handy to hide the target if outside of the popup is clicked.
        </p>
    </DocSectionText>
    <div class="card flex flex-column align-items-center">
        <div>
            <Button v-styleclass="{ selector: '.box', enterClass: 'hidden', enterActiveClass: 'my-fadein' }" label="Show" class="mr-2" />
            <Button v-styleclass="{ selector: '.box', leaveActiveClass: 'my-fadeout', leaveToClass: 'hidden' }" label="Hide" severity="secondary" />
        </div>
        <div class="hidden animation-duration-500 box">
            <div class="flex bg-green-500 text-white align-items-center justify-content-center py-3 border-round-md mt-3 font-bold w-8rem h-8rem">Content</div>
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
<Button v-styleclass="{ selector: '.box', enterClass: 'hidden', enterActiveClass: 'my-fadein' }" label="Show" class="mr-2" />
<Button v-styleclass="{ selector: '.box', leaveActiveClass: 'my-fadeout', leaveToClass: 'hidden' }" label="Hide" severity="secondary" />
<div class="hidden animation-duration-500 box">
    <div class="flex bg-green-500 text-white align-items-center justify-content-center py-3 border-round-md mt-3 font-bold w-8rem h-8rem">Content</div>
</div>
`,
                options: `
<template>
    <div class="card flex flex-column align-items-center">
        <div>
            <Button v-styleclass="{ selector: '.box', enterClass: 'hidden', enterActiveClass: 'my-fadein' }" label="Show" class="mr-2" />
            <Button v-styleclass="{ selector: '.box', leaveActiveClass: 'my-fadeout', leaveToClass: 'hidden' }" label="Hide" severity="secondary" />
        </div>
        <div class="hidden animation-duration-500 box">
            <div class="flex bg-green-500 text-white align-items-center justify-content-center py-3 border-round-md mt-3 font-bold w-8rem h-8rem">Content</div>
        </div>
    </div>
</template>

<script>
<\/script>

<style scoped>
.box {
    background-color: var(--green-500);
    color: #ffffff;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 4px;
    margin-top: 1rem;
    font-weight: bold;
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
}

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
    <div class="card flex flex-column align-items-center">
        <div>
            <Button v-styleclass="{ selector: '.box', enterClass: 'hidden', enterActiveClass: 'my-fadein' }" label="Show" class="mr-2" />
            <Button v-styleclass="{ selector: '.box', leaveActiveClass: 'my-fadeout', leaveToClass: 'hidden' }" label="Hide" severity="secondary" />
        </div>
        <div class="hidden animation-duration-500 box">
            <div class="flex bg-green-500 text-white align-items-center justify-content-center py-3 border-round-md mt-3 font-bold w-8rem h-8rem">Content</div>
        </div>
    </div>
</template>

<script setup>
<\/script>

<style scoped>
.box {
    background-color: var(--green-500);
    color: #ffffff;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 4px;
    margin-top: 1rem;
    font-weight: bold;
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
}

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
.box {
    background-color: var(--green-500);
    color: #ffffff;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 4px;
    margin-top: 1rem;
    font-weight: bold;
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
}

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

.my-fadein {
    animation: my-fadein 150ms linear;
}

.my-fadeout {
    animation: my-fadeout 150ms linear;
}
</style>
