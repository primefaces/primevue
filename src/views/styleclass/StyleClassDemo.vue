<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>StyleClass</h1>
                <p>StyleClass manages css classes declaratively to during enter/leave animations or just to toggle classes on an element.</p>
            </div>
            <AppDemoActions />
        </div>
    </div>

    <div class="content-section implementation">
        <div class="card">
            <h5>Toggle Class</h5>
            <Button label="Toggle p-disabled" v-styleclass="{ selector: '@next', toggleClass: 'p-disabled' }" />
            <InputText class="p-d-block p-mt-3" />

            <h5>Animations</h5>
            <Button label="Show" class="p-mr-2" v-styleclass="{ selector: '.box', enterClass: 'p-d-none', enterActiveClass: 'my-fadein' }" />
            <Button label="Hide" v-styleclass="{ selector: '.box', leaveActiveClass: 'my-fadeout', leaveToClass: 'p-d-none' }" />
            <div class="box p-d-none">Content</div>
        </div>
    </div>

    <StyleClassDoc />
</template>

<script>
import StyleClassDoc from './StyleClassDoc.vue';

export default {
    components: {
        StyleClassDoc
    }
}
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
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
}

@keyframes my-fadein {
    0%   { opacity: 0; }
    100% { opacity: 1; }
}

@keyframes my-fadeout {
    0%   { opacity: 1; }
    100% { opacity: 0; }
}

.my-fadein {
    animation: my-fadein 150ms linear;
}
        
.my-fadeout {
    animation: my-fadeout 150ms linear;
}
</style>