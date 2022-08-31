<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Fieldset</h1>
                <p>Fieldset is a grouping component with the optional content toggle feature.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Regular</h5>
                <Fieldset legend="Header">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Fieldset>

                <h5>Toggleable</h5>
                <Fieldset legend="Header" :toggleable="true">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Fieldset>
            </div>
        </div>

        <FieldsetDoc/>
    </div>
</template>

<script>
import FieldsetDoc from './FieldsetDoc';

export default {
    components: {
        'FieldsetDoc': FieldsetDoc
    }
}
</script>

<style lang="scss" scoped>
.fieldset p {
    line-height: 1.5;
    margin: 0;
}
</style>
