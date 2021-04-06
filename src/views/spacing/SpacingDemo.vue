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
                <Button type="button" label="Button 1" style="width:20rem" class="p-mr-2 p-mb-2" />
                <Button type="button" label="Button 2" style="width:20rem" class="p-mb-2"/>

                <h5>Responsive Margin</h5>
                <h6>Without Spacing</h6>
                <div class="p-grid p-formgrid p-fluid">
                    <div class="p-col-12 p-lg-4">
                        <InputText />
                    </div>
                    <div class="p-col-12 p-lg-4">
                        <InputText />
                    </div>
                    <div class="p-col-12 p-lg-4">
                        <InputText />
                    </div>
                </div>

                <h6>With Spacing</h6>
                <div class="p-grid p-formgrid p-fluid">
                    <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
                        <InputText />
                    </div>
                    <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
                        <InputText />
                    </div>
                    <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
                        <InputText />
                    </div>
                </div>

                <h6>Center</h6>
                <div class="demo-container p-p-4">
                    <Button type="button" label="Button" class="p-d-block p-mx-auto" />
                </div>
            </div>

            <div class="card">
                <h5>Padding</h5>
                <h6>Without Spacing</h6>
                <div class="demo-container">
                    <Button type="button" label="Button" />
                </div>

                <h6>With Spacing</h6>
                <div class="demo-container p-p-3">
                    <Button type="button" label="Button" />
                </div>

                <h6>Responsive Spacing</h6>
                <div class="demo-container p-p-0 p-p-sm-1 p-p-md-2 p-p-lg-3">
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