<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Spacing</h1>
                <p><a href="https://github.com/primefaces/primeflex">PrimeFlex</a> provides various spacing utilities to modify an element's layout.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Margin</h5>
                <h6>Without Spacing</h6>
                <Button type="button" label="Button 1" style="width:20rem" />
                <Button type="button" label="Button 2" style="width:20rem" />

                <h6>With Spacing</h6>
                <Button type="button" label="Button 1" style="width:20rem" class="mr-2 mb-2" />
                <Button type="button" label="Button 2" style="width:20rem" class="mb-2"/>

                <h5>Responsive Margin</h5>
                <h6>Without Spacing</h6>
                <div class="grid formgrid p-fluid">
                    <div class="col-12 lg:col-4">
                        <InputText />
                    </div>
                    <div class="col-12 lg:col-4">
                        <InputText />
                    </div>
                    <div class="col-12 lg:col-4">
                        <InputText />
                    </div>
                </div>

                <h6>With Spacing</h6>
                <div class="grid formgrid p-fluid">
                    <div class="col-12 mb-2 lg:col-4 lg:mb-0">
                        <InputText />
                    </div>
                    <div class="col-12 mb-2 lg:col-4 lg:mb-0">
                        <InputText />
                    </div>
                    <div class="col-12 mb-2 lg:col-4 lg:mb-0">
                        <InputText />
                    </div>
                </div>

                <h6>Center</h6>
                <div class="demo-container p-4">
                    <Button type="button" label="Button" class="block mx-auto" />
                </div>
            </div>

            <div class="card">
                <h5>Padding</h5>
                <h6>Without Spacing</h6>
                <div class="demo-container">
                    <Button type="button" label="Button" />
                </div>

                <h6>With Spacing</h6>
                <div class="demo-container p-3">
                    <Button type="button" label="Button" />
                </div>

                <h6>Responsive Spacing</h6>
                <div class="demo-container p-0 sm:col-1 md:col-2 lg:col-3">
                    <Button type="button" label="Button" />
                </div>
            </div>
        </div>

        <SpacingDoc />
    </div>
</template>

<script>
import SpacingDoc from './SpacingDoc';

export default {
	components: {
		'SpacingDoc': SpacingDoc
	}
}
</script>

<style scoped>
.demo-container {
    border: 1px solid var(--surface-d);
}
</style>