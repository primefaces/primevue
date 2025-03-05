<template>
    <DocSectionText v-bind="$attrs">
        <p>Card provides <i>header</i>, <i>title</i>, <i>subtitle</i>, <i>content</i> and <i>footer</i> as the named templates to place content.</p>
    </DocSectionText>
    <div class="mb-4 p-8 flex items-center justify-center">
        <Card style="width: 25rem; overflow: hidden">
            <template #header>
                <img alt="user header" class="w-full" src="https://primefaces.org/cdn/primevue/images/card-vue.jpg" />
            </template>
            <template #title>Advanced Card</template>
            <template #subtitle>Card subtitle</template>
            <template #content>
                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                    quas!
                </p>
            </template>
            <template #footer>
                <div class="flex gap-4 mt-1">
                    <Button label="Cancel" severity="secondary" variant="outlined" class="w-full" />
                    <Button label="Save" class="w-full" />
                </div>
            </template>
        </Card>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Button from '@/volt/button';
import Card from '@/volt/card';
import { ref } from 'vue';

const code = ref(`
<template>
    <Card style="width: 25rem; overflow: hidden">
        <template #header>
            <img alt="user header" class="w-full" src="https://primefaces.org/cdn/primevue/images/card-vue.jpg" />
        </template>
        <template #title>Advanced Card</template>
        <template #subtitle>Card subtitle</template>
        <template #content>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                quas!
            </p>
        </template>
        <template #footer>
            <div class="flex gap-4 mt-1">
                <Button label="Cancel" severity="secondary" variant="outlined" class="w-full" />
                <Button label="Save" class="w-full" />
            </div>
        </template>
    </Card>
</template>

<script setup>
import Card from '@/volt/card';
import Button from '@/volt/button';
<\/script>
`);
</script>
