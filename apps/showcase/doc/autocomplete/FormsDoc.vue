<template>
    <DocSectionText v-bind="$attrs">
        <p>AutoComplete integrates seamlessly with the <NuxtLink to="/forms">PrimeVue Forms</NuxtLink> library.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex justify-center flex-col gap-4 w-full md:w-56">
            <div class="flex flex-col gap-1">
                <AutoComplete name="country.name" optionLabel="name" :suggestions="filteredCountries" @complete="search" fluid />
                <Message v-if="$form.country?.name?.invalid" severity="error" size="small" variant="simple">{{ $form.country.name.error?.message }}</Message>
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
    <DocSectionCode :code="code" :service="['CountryService']" :dependencies="{ zod: '3.23.8' }" />
</template>

<script>
import { CountryService } from '@/service/CountryService';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';

export default {
    data() {
        return {
            initialValues: {
                country: { name: '' }
            },
            countries: null,
            filteredCountries: null,
            resolver: zodResolver(
                z.object({
                    country: z.union([
                        z.object({
                            name: z.string().min(1, 'Country is required.')
                        }),
                        z.any().refine((val) => false, { message: 'Country is required.' })
                    ])
                })
            ),
            code: {
                basic: `
<Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex justify-center flex-col gap-4 w-full md:w-56">
    <div class="flex flex-col gap-1">
        <AutoComplete name="country.name" optionLabel="name" :suggestions="filteredCountries" @complete="search" fluid />
        <Message v-if="$form.country?.name?.invalid" severity="error" size="small" variant="simple">{{ $form.country.name.error?.message }}</Message>
    </div>
    <Button type="submit" severity="secondary" label="Submit" />
</Form>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex justify-center flex-col gap-4 w-full md:w-56">
            <div class="flex flex-col gap-1">
                <AutoComplete name="country.name" optionLabel="name" :suggestions="filteredCountries" @complete="search" fluid />
                <Message v-if="$form.country?.name?.invalid" severity="error" size="small" variant="simple">{{ $form.country.name.error?.message }}</Message>
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
        <Toast />
    </div>
</template>

<script>
import { CountryService } from '@/service/CountryService';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';

export default {
    data() {
        return {
            initialValues: {
                country: { name: '' }
            },
            countries: null,
            filteredCountries: null,
            resolver: zodResolver(
                z.object({
                    country: z.union([
                        z.object({
                            name: z.string().min(1, 'Country is required.')
                        }),
                        z.any().refine((val) => false, { message: 'Country is required.' })
                    ])
                })
            )
        }
    },
    mounted() {
        CountryService.getCountries().then((data) => (this.countries = data));
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
        onFormSubmit({ valid }) {
            if (valid) {
                this.$toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
            }
        }
    }
}
<\/script>

`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Form v-slot="$form" :resolver="resolver" :initialValues="initialValues" @submit="onFormSubmit" class="flex justify-center flex-col gap-4 w-full md:w-56">
            <div class="flex flex-col gap-1">
                <AutoComplete name="country.name" optionLabel="name" :suggestions="filteredCountries" @complete="search" fluid />
                <Message v-if="$form.country?.name?.invalid" severity="error" size="small" variant="simple">{{ $form.country.name.error?.message }}</Message>
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
        <Toast />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { useToast } from "primevue/usetoast";
import { z } from 'zod';
import { CountryService } from "@/service/CountryService";

onMounted(() => {
    CountryService.getCountries().then((data) => (countries.value = data));
});

const initialValues = ref({
    country: { name: '' }
});
const resolver = ref(zodResolver(
    z.object({
        country: z.union([
            z.object({
                name: z.string().min(1, 'Country is required.')
            }),
            z.any().refine((val) => false, { message: 'Country is required.' })
        ])
    })
));
const countries = ref();
const selectedCountry = ref();
const filteredCountries = ref();
const toast = useToast();

const search = (event) => {
    setTimeout(() => {
        if (!event.query.trim().length) {
            filteredCountries.value = [...countries.value];
        } else {
            filteredCountries.value = countries.value.filter((country) => {
                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
            });
        }
    }, 250);
};

const onFormSubmit = ({ valid }) => {
    if (valid) {
        toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
    }
};
<\/script>
        `
            }
        };
    },
    mounted() {
        CountryService.getCountries().then((data) => (this.countries = data));
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
        onFormSubmit({ valid }) {
            if (valid) {
                this.$toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
            }
        }
    }
};
</script>
