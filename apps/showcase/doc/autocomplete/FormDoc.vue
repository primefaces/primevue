<template>
    <DocSectionText v-bind="$attrs"> </DocSectionText>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :defaultValues="defaultValues" @submit="onFormSubmit" class="flex justify-center flex-col gap-4">
            <div class="flex flex-col gap-2">
                <AutoComplete name="country" optionLabel="name" :suggestions="filteredCountries" @complete="search" />
                <Message v-if="$form.country?.invalid" severity="error">{{ $form.country.errors[0]?.message }}</Message>
            </div>
            <Button type="submit" severity="secondary" class="self-center p-2">Submit</Button>
        </Form>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
import { CountryService } from '@/service/CountryService';
import { zodResolver } from '@primevue/form/resolvers';
import { z } from 'zod';

export default {
    data() {
        return {
            defaultValues: {
                country: ''
            },
            countries: null,
            filteredCountries: null,
            resolver: null,
            schema: z.object({
                country: z.string().refine((val) => val.name !== '', {
                    message: 'Please select a country.'
                })
            }),
            code: {
                basic: `
<Form v-slot="$form" :resolver="resolver" :defaultValues="defaultValues" @submit="onFormSubmit" class="flex justify-center flex-col gap-4">
    <div class="flex flex-col gap-2">
        <InputText name="username" type="text" placeholder="Username" />
        <Message v-if="$form.username?.invalid" severity="error">{{ $form.username.errors[0]?.message }}</Message>
    </div>
    <div class="flex flex-col gap-2">
        <InputText name="email" type="text" placeholder="Email" />
        <Message v-if="$form.email?.invalid" severity="error">{{ $form.email.errors[0]?.message }}</Message>
    </div>
    <Button type="submit" severity="secondary" class="self-center p-2">Submit</Button>
</Form>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <InputText type="text" v-model="value" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null
        }
    }
}
<\/script>

`,
                composition: `
<template>
    <div class="card flex justify-center">
        <InputText type="text" v-model="value" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>
        `
            }
        };
    },
    mounted() {
        CountryService.getCountries().then((data) => (this.countries = data));
        this.resolver = zodResolver(this.schema);
    },
    methods: {
        search(event) {
            setTimeout(() => {
                if (!event.query.trim().length) {
                    this.filteredCountries = [...this.countries];
                } else {
                    this.filteredCountries = this.countries.filter((country) => {
                        return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                    });
                }
            }, 250);
        },
        onFormSubmit(x) {
            console.log(x);

            if (x.valid) {
                this.$toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
            }
        }
    }
};
</script>
