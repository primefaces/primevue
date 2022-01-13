<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Display</h1>
                <p>Efficiently configure the display of the component with <a href="https://github.com/primefaces/primeflex">PrimeFlex</a> display utilities.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Inline</h5>
                <InputText class="mr-2 inline" />
                <InputText class="inline" />

                <h5>Block</h5>
                <InputText class="mb-2 block" />
                <InputText class="block" />

                <h5>Visible on a Small Screen</h5>
                <p>Resize to view.</p>
                <Button type="button" icon="pi pi-bars" class="p-button-rounded md:hidden" />

                <h5>Hidden on a Small Screen</h5>
                <p>Resize to hide.</p>
                <Button type="button" icon="pi pi-search" class="p-button-rounded p-button-success hidden md:inline-flex" />
            </div>
        </div>

        <DisplayDoc />
    </div>
</template>

<script>
import DisplayDoc from './DisplayDoc';

export default {
	components: {
		'DisplayDoc': DisplayDoc
	}
}
</script>