<template>
    <DocSectionText v-bind="$attrs">
        <p>Card provides <i>header</i>, <i>title</i>, <i>subtitle</i>, <i>content</i> and <i>footer</i> as the named templates to place content.</p>
    </DocSectionText>
    <div class="card flex align-items-center justify-content-center">
        <Card style="width: 25em">
            <template #header>
                <img alt="user header" class="w-full" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
            </template>
            <template #title> Advanced Card </template>
            <template #subtitle> Card subtitle </template>
            <template #content>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                    quas!
                </p>
            </template>
            <template #footer>
                <Button icon="pi pi-check" label="Save" />
                <Button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" />
            </template>
        </Card>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Card style="width: 25em">
    <template #header>
        <img alt="user header" src="/images/usercard.png" />
    </template>
    <template #title> Advanced Card </template>
    <template #subtitle> Card subtitle </template>
    <template #content>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
            quas!
        </p>
    </template>
    <template #footer>
        <Button icon="pi pi-check" label="Save" />
        <Button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" />
    </template>
</Card>`,
                options: `
<template>
    <div class="card flex align-items-center justify-content-center">
        <Card style="width: 25em">
            <template #header>
                <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
            </template>
            <template #title> Advanced Card </template>
            <template #subtitle> Card subtitle </template>
            <template #content>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                    quas!
                </p>
            </template>
            <template #footer>
                <Button icon="pi pi-check" label="Save" />
                <Button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" />
            </template>
        </Card>
    </div>
</template>

<script>
<\/script>`,
                composition: `
<template>
    <div class="card flex align-items-center justify-content-center">
        <Card style="width: 25em">
            <template #header>
                <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
            </template>
            <template #title> Advanced Card </template>
            <template #subtitle> Card subtitle </template>
            <template #content>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                    quas!
                </p>
            </template>
            <template #footer>
                <Button icon="pi pi-check" label="Save" />
                <Button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" />
            </template>
        </Card>
    </div>
</template>

<script setup>
<\/script>`
            }
        };
    }
};
</script>
