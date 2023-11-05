<template>
    <DocSectionText v-bind="$attrs"> </DocSectionText>
    <div class="card">
        <Card :pt="{ body: { class: 'bg-primary border-round-lg' } }">
            <template #title> Simple Card </template>
            <template #content>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                    quas!
                </p>
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
<Card :pt="{ body: { class: 'bg-primary border-round-lg' } }">
    <template #title> Simple Card </template>
    <template #content>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
            quas!
        </p>
    </template>
</Card>
`,
                options: `
<template>
    <div class="card">
        <Card :pt="{ body: { class: 'bg-primary border-round-lg' } }">
            <template #title> Simple Card </template>
            <template #content>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                    quas!
                </p>
            </template>
        </Card>
    </div>
</template>
`,
                composition: `
<template>
    <div class="card">
        <Card :pt="{ body: { class: 'bg-primary border-round-lg' } }">
            <template #title> Simple Card </template>
            <template #content>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                    quas!
                </p>
            </template>
        </Card>
    </div>
</template>
`
            }
        };
    }
};
</script>
