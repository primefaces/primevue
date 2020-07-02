<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Text</h1>
                <p><a href="https://github.com/primefaces/primeflex">PrimeFlex</a> provides various spacing utilities to modify an element's layout.</p>
            </div>
        </div>

        <div class="content-section implementation">
            
            

            <TextDoc />
        </div>
    </div>
</template>

<script>
import TextDoc from './TextDoc';

export default {
	components: {
		'TextDoc': TextDoc
	}
}
</script>