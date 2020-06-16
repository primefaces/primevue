<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Spacing</h1>
                <p><a href="https://github.com/primefaces/primeflex">PrimeFlex</a> provides various spacing utilities to modify an element's layout.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="p-grid">
                <div class="p-col-12 p-md-6">
                    <h3>Use Case 1</h3>
                    <p>Spacing is a handy utility when elements wrap when screen size get smaller. In example below, when buttons wrap
                        they are displayed on top of each other whereas with spacing this issue can easily be resolved.
                    </p>

                    <h4>Without Spacing</h4>
                    <Button type="button" label="Button 1" style="width:250px" />
                    <Button type="button" label="Button 2" style="width:250px" />

                    <h4>With Spacing</h4>
                    <Button type="button" label="Button 1" style="width:250px" class="p-mr-2 p-mb-2" />
                    <Button type="button" label="Button 2" style="width:250px" class="p-mr-2"/>
                </div>
                <div class="p-col-12 p-md-6">
                    <h3>Use Case 2</h3>
                    <p>Spacing utilities also work seamlessly with responsive PrimeFlex grid utilty. Example below demonstrates a case where on a smaller screen inputs receive a margin to position themselves
                        separately in stacked mode, reduce the dimension of the window to view the difference.
                    </p>

                    <h4>Without Spacing</h4>
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

                    <h4>With Spacing</h4>
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