<template>
    <div class="h-full flex-1 flex flex-col overflow-hidden border border-surface rounded-2xl p-6">
        <div class="flex items-start gap-2 justify-between">
            <div>
                <div class="text-2xl leading-8 text-color font-medium">Customers</div>
                <div class="mt-1 leading-6 text-muted-color">The analysis list here shows all users</div>
            </div>
            <Button icon="pi pi-circle-fill text-green-500" label="950 Active User" variant="outlined" severity="secondary" />
        </div>
        <div class="mt-10 mb-4 flex items-center justify-between">
            <IconField iconPosition="left">
                <InputIcon class="pi pi-search"> </InputIcon>
                <InputText v-model="search" placeholder="Search" />
            </IconField>
            <div class="flex items-center gap-3">
                <Button icon="pi pi-filter" variant="outlined" severity="secondary" />
                <Divider layout="vertical" class="m-0" />
                <Button icon="pi pi-refresh" variant="outlined" severity="secondary" />
                <Button label="1 of 15" variant="outlined" severity="secondary" />
                <Button icon="pi pi-chevron-left" variant="outlined" severity="secondary" />
                <Button icon="pi pi-chevron-right" variant="outlined" severity="secondary" />
            </div>
        </div>
        <div class="flex-1 last:[&>td]:border-0 rounded-lg border border-surface w-full overflow-auto">
            <DataTable
                v-model:selection="selectedRows"
                :value="tableData"
                :rows="10"
                :pt="{
                    root: {
                        class: 'w-full flex-1 overflow-auto '
                    },
                    thead: {
                        class: 'sticky top-0 z-10'
                    }
                }"
                :dt="{
                    headerCell: {
                        background: 'transparent'
                    },
                    row: {
                        background: 'transparent'
                    }
                }"
            >
                <template #empty>There is no customer.</template>
                <Column selectionMode="multiple" headerStyle="width: 1rem" style="width: 1rem"></Column>
                <Column field="name" header="Name">
                    <template #body="{ data }">
                        <div class="flex items-center">
                            <OverlayBadge :severity="data.active === undefined ? 'contrast' : data.active ? 'success' : 'danger'" class="w-fit">
                                <Avatar
                                    v-bind="data.image ? { image: data.image } : { label: data.capName }"
                                    :class="{
                                        'bg-violet-100 text-violet-950 text-xs font-medium': !data.image
                                    }"
                                    class="rounded-md overflow-hidden flex"
                                />
                            </OverlayBadge>
                            <div class="ml-4 leading-6 text-color font-medium">{{ data.name }}</div>
                        </div>
                    </template>
                </Column>
                <Column field="title" header="Title">
                    <template #body="{ data }">
                        <div class="leading-6 text-muted-color">{{ data.title }}</div>
                    </template>
                </Column>
                <Column field="company" header="Company Name">
                    <template #body="{ data }">
                        <div class="flex items-center gap-2">
                            <div class="flex items-center justify-center" v-html="companyLogos[data.company.logo]"></div>
                            <div class="leading-6 text-surface-600 dark:text-surface-400">{{ data.company.name }}</div>
                        </div>
                    </template>
                </Column>
                <Column field="email" header="Email Address">
                    <template #body="{ data }">
                        <div class="leading-6 text-muted-color truncate">{{ data.email }}</div>
                    </template>
                </Column>
                <Column field="lead" header="Lead Source">
                    <template #body="{ data }">
                        <div class="leading-6 text-muted-color">{{ data.lead }}</div>
                    </template>
                </Column>
                <Column field="status" header="Status">
                    <template #body="{ data }">
                        <Tag :severity="data.status === 'Active' ? 'success' : data.status === 'Inactive' ? 'danger' : 'info'" :value="data.status" class="font-medium"></Tag>
                    </template>
                </Column>
                <Column field="more" header="More">
                    <template #body>
                        <div class="flex justify-end w-full">
                            <Button @click="displayPopover" icon="pi pi-search" rounded variant="outlined" severity="secondary" />
                        </div>
                    </template>
                </Column>
            </DataTable>

            <Popover ref="op">
                <div class="flex gap-2">
                    <Button label="Details" size="small" variant="outlined" @click="hidePopover"></Button>
                    <Button label="Delete" severity="danger" size="small" variant="outlined" @click="hidePopover"></Button>
                </div>
            </Popover>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Inbox',
    redrawListener: null,
    data() {
        return {
            search: '',
            tableData: [
                {
                    id: 1,
                    image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar2.png',
                    active: true,
                    name: 'Brook Simmons',
                    title: 'Sales Executive ',
                    company: { name: 'Mistranet', logo: 'mistranet' },
                    email: 'hi@brooksmmns.co',
                    lead: 'Linkedin',
                    status: 'Active'
                },
                {
                    id: 2,
                    image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar9.jpg',
                    active: true,
                    name: 'Dianne Russell',
                    title: 'CEO',
                    company: { name: 'BriteMank', logo: 'britemank' },
                    email: 'hi@diannerussell.com',
                    lead: 'Website',
                    status: 'Inactive'
                },
                {
                    id: 3,
                    image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar13.jpg',
                    active: undefined,
                    name: 'Amy Elsner',
                    title: 'Product Manager',
                    company: { name: 'ZenTrailMs', logo: 'zentrailms' },
                    email: 'hi@amyelsner.com',
                    lead: 'Cold Call',
                    status: 'Prospect'
                },
                {
                    id: 4,
                    image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar11.jpg',
                    active: true,
                    name: 'Jacob Jones',
                    title: 'Manager',
                    company: { name: 'Streamlinz', logo: 'streamlinz' },
                    email: 'jacobjones@gmail.com',
                    lead: 'Partner',
                    status: 'Prospect'
                },
                { id: 5, image: '', active: false, name: 'Cameron Watson', capName: 'CW', title: 'Product Manager', company: { name: 'BriteMank', logo: 'britemank' }, email: 'hi@cameronwilliamson', lead: 'Social Media', status: 'Active' },
                { id: 6, image: '', active: true, name: 'Wade Warren', capName: 'WW', title: 'Director', company: { name: 'Streamlinz', logo: 'streamlinz' }, email: 'hi@annetteblack.com', lead: 'Cold Call', status: 'Inactive' },
                {
                    id: 7,
                    image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar7.png',
                    active: true,
                    name: 'Guy Hawkins',
                    title: 'Director',
                    company: { name: 'Wavelength', logo: 'wavelength' },
                    email: 'hi@darrellsteward.com',
                    lead: 'Linkedin',
                    status: 'Active'
                },
                {
                    id: 8,
                    image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar8.png',
                    active: true,
                    name: 'Annette Black',
                    title: 'Manager',
                    company: { name: 'Wavelength', logo: 'wavelength' },
                    email: 'jeromebell@gmail.com',
                    lead: 'Website',
                    status: 'Inactive'
                },
                {
                    id: 9,
                    image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar10.jpg',
                    active: undefined,
                    name: 'Darrell Steward',
                    title: 'Product Manager',
                    company: { name: 'ZenTrailMs', logo: 'zentrailms' },
                    email: 'hi@onyamalimba.co',
                    lead: 'Website',
                    status: 'Active'
                },
                { id: 10, image: '', active: true, name: 'Jerome Bell', capName: 'JB', title: 'Marketing Manager', company: { name: 'Mistranet', logo: 'mistranet' }, email: 'hi@courtneyhenryo', lead: 'Social Media', status: 'Active' },
                {
                    id: 11,
                    image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar12.jpg',
                    active: undefined,
                    name: 'Onyama Limba',
                    title: 'Sales Executive ',
                    company: { name: 'BriteMank', logo: 'britemank' },
                    email: 'hi@arlenemccoy.com',
                    lead: 'Social Media',
                    status: 'Active'
                }
            ],
            companyLogos: {
                mistranet: `
                <svg  xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path class="fill-surface-600 dark:fill-surface-400" fill-rule="evenodd" clip-rule="evenodd" d="M6.82207 0.728516C5.83146 0.728516 4.88145 1.12203 4.18099 1.82249L1.89501 4.10846C1.19454 4.80892 0.801025 5.75895 0.801025 6.74956C0.801025 7.8426 1.27054 8.82597 2.01888 9.509C1.27054 10.192 0.801025 11.1754 0.801025 12.2684C0.801025 13.2591 1.19454 14.2091 1.89501 14.9095L4.18099 17.1955C4.88145 17.896 5.83146 18.2895 6.82207 18.2895C7.91511 18.2895 8.89848 17.82 9.58152 17.0716C10.2646 17.82 11.2479 18.2895 12.341 18.2895C13.3316 18.2895 14.2816 17.896 14.982 17.1955L17.268 14.9095C17.9685 14.2091 18.362 13.2591 18.362 12.2684C18.362 11.1754 17.8925 10.192 17.1442 9.509C17.8925 8.82597 18.362 7.8426 18.362 6.74956C18.362 5.75895 17.9685 4.80892 17.268 4.10846L14.982 1.82249C14.2816 1.12203 13.3316 0.728516 12.341 0.728516C11.2479 0.728516 10.2646 1.19802 9.58152 1.94637C8.89848 1.19802 7.91511 0.728516 6.82207 0.728516ZM11.9859 9.62736C12.0509 9.56231 12.0509 9.45569 11.9859 9.39064L11.4907 8.89547C10.4363 7.84105 8.72674 7.84105 7.67233 8.89547L7.17716 9.39064C7.11211 9.45569 7.11211 9.56231 7.17716 9.62736L7.67233 10.1225C8.72674 11.177 10.4363 11.177 11.4907 10.1225L11.9859 9.62736ZM11.0796 13.2931C10.7451 13.6276 10.5571 14.0814 10.5571 14.5544C10.5571 15.5396 11.3558 16.3383 12.341 16.3383C12.8141 16.3383 13.2678 16.1503 13.6023 15.8158L15.8883 13.5298C16.2229 13.1953 16.4108 12.7415 16.4108 12.2684C16.4108 11.2833 15.6121 10.4846 14.627 10.4846C14.1539 10.4846 13.7001 10.6725 13.3656 11.0071L11.0796 13.2931ZM8.60592 14.5544C8.60592 14.0814 8.41798 13.6276 8.08345 13.2931L5.79743 11.0071C5.4629 10.6725 5.00918 10.4846 4.53608 10.4846C3.5509 10.4846 2.75224 11.2833 2.75224 12.2684C2.75224 12.7415 2.94018 13.1953 3.27471 13.5298L5.56071 15.8158C5.89525 16.1503 6.34898 16.3383 6.82207 16.3383C7.80724 16.3383 8.60592 15.5396 8.60592 14.5544ZM8.60592 4.46357C8.60592 4.93666 8.41798 5.39037 8.08346 5.72489L5.79743 8.01092C5.4629 8.34545 5.00918 8.5334 4.53608 8.5334C3.5509 8.5334 2.75224 7.73473 2.75224 6.74956C2.75224 6.27646 2.94018 5.82274 3.27471 5.48821L5.56071 3.20221C5.89525 2.86767 6.34898 2.67974 6.82207 2.67974C7.80724 2.67974 8.60592 3.47838 8.60592 4.46357ZM13.3656 8.01092L11.0796 5.72489C10.7451 5.39037 10.5571 4.93666 10.5571 4.46357C10.5571 3.47838 11.3558 2.67974 12.341 2.67974C12.8141 2.67974 13.2678 2.86767 13.6023 3.20221L15.8883 5.48821C16.2229 5.82274 16.4108 6.27646 16.4108 6.74956C16.4108 7.73473 15.6121 8.5334 14.627 8.5334C14.1539 8.5334 13.7001 8.34545 13.3656 8.01092Z"/>
                </svg>
                `,
                britemank: `
                <svg class="fill-surface-600 dark:fill-surface-400" xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
<g clip-path="url(#clip0_536_12504)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.3011 5.75643C12.1897 5.68201 12.0754 5.6128 11.9585 5.54894C10.8679 4.95318 9.80103 3.99069 9.80103 2.74805V0.498047C11.581 0.498047 13.3211 1.02589 14.8012 2.01482C16.2812 3.00375 17.4347 4.40936 18.1159 6.05388C18.7971 7.69841 18.9754 9.50804 18.6281 11.2539C18.2808 12.9997 17.4237 14.6033 16.165 15.862C14.9063 17.1207 13.3027 17.9778 11.5568 18.3251C9.81102 18.6724 8.00139 18.4941 6.35686 17.813C4.71234 17.1318 3.30673 15.9782 2.3178 14.4982C1.32887 13.0181 0.801025 11.2781 0.801025 9.49805H3.05103C4.29367 9.49805 5.25615 10.565 5.85191 11.6555C5.91578 11.7724 5.98498 11.8867 6.05941 11.9981C6.55387 12.7381 7.25668 13.3149 8.07897 13.6555C8.90121 13.9961 9.80602 14.0852 10.6789 13.9116C11.5518 13.7379 12.3537 13.3094 12.983 12.68C13.6123 12.0507 14.0409 11.2489 14.2145 10.376C14.3882 9.50304 14.2991 8.59823 13.9585 7.77599C13.6179 6.9537 13.0411 6.25089 12.3011 5.75643Z" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.75102 0.498049C5.50249 0.498049 5.30335 0.700016 5.27854 0.947303C5.23471 1.38414 5.12711 1.81303 4.95848 2.22012C4.73234 2.76609 4.40087 3.26216 3.983 3.68003C3.56514 4.0979 3.06907 4.42936 2.5231 4.65551C2.116 4.82413 1.68711 4.93174 1.25028 4.97557C1.00299 5.00038 0.801026 5.19952 0.801026 5.44805L0.801025 9.49805C1.98292 9.49805 3.15324 9.26526 4.24518 8.81297C5.33711 8.36067 6.32927 7.69773 7.16497 6.86199C8.00071 6.0263 8.66365 5.03414 9.11594 3.9422C9.56824 2.85027 9.80102 1.67994 9.80102 0.498047L5.75102 0.498049Z"/>
</g>
<defs>
<clipPath id="clip0_536_12504">
<rect width="18" height="18" fill="white" transform="translate(0.800049 0.5)"/>
</clipPath>
</defs>
</svg>
                `,
                zentrailms: `
<svg class="fill-surface-600 dark:fill-surface-400" xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.79908 18.5C14.7696 18.5 18.7991 14.4705 18.7991 9.49998C18.7991 4.52944 14.7696 0.5 9.79908 0.5C4.8285 0.5 0.799072 4.52944 0.799072 9.49998C0.799072 14.4705 4.8285 18.5 9.79908 18.5ZM12.6068 4.69258C12.7434 4.20712 12.2723 3.92006 11.8421 4.22658L5.83597 8.5053C5.36937 8.83772 5.44276 9.49998 5.94622 9.49998H7.52779V9.48774H10.6102L8.09862 10.3739L6.99139 14.3074C6.85473 14.7929 7.32579 15.0799 7.75608 14.7734L13.7622 10.4947C14.2288 10.1623 14.1553 9.49998 13.6519 9.49998H11.2535L12.6068 4.69258Z" />
</svg>
                `,
                streamlinz: `<svg class="fill-surface-600 dark:fill-surface-400" xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
<path d="M9.79907 0.498047C8.61719 0.498047 7.44683 0.730864 6.3549 1.18313C5.26297 1.63544 4.27086 2.29835 3.43509 3.13407C2.59938 3.96983 1.93647 4.96194 1.48415 6.05387C1.03189 7.1458 0.799072 8.31616 0.799072 9.49804C0.799072 10.6799 1.03189 11.8503 1.48415 12.9422C1.93647 14.0341 2.59938 15.0262 3.43509 15.862C4.27086 16.6977 5.26297 17.3606 6.3549 17.813C7.44683 18.2652 8.61719 18.498 9.79907 18.498V13.998C9.2081 13.998 8.62295 13.8817 8.07698 13.6555C7.53102 13.4293 7.03494 13.0979 6.61708 12.68C6.19922 12.2622 5.86777 11.7661 5.64164 11.2201C5.41545 10.6742 5.29907 10.089 5.29907 9.49804C5.29907 8.90708 5.41545 8.32192 5.64164 7.77596C5.86777 7.22999 6.19922 6.73391 6.61708 6.31606C7.03494 5.8982 7.53102 5.56674 8.07698 5.34061C8.62295 5.11443 9.2081 4.99804 9.79907 4.99804V0.498047Z" />
<path d="M9.79905 12.5019C11.4559 12.5019 12.799 11.1588 12.799 9.50193C12.799 7.84506 11.4559 6.50195 9.79905 6.50195C8.14218 6.50195 6.79907 7.84506 6.79907 9.50193C6.79907 11.1588 8.14218 12.5019 9.79905 12.5019Z"/>
<path d="M0.799072 9.49805C0.799072 10.6799 1.03189 11.8503 1.48415 12.9422C1.93647 14.0341 2.59938 15.0263 3.43509 15.862C4.27086 16.6977 5.26297 17.3606 6.3549 17.813C7.44683 18.2652 8.61719 18.498 9.79907 18.498C10.9809 18.498 12.1513 18.2652 13.2432 17.813C14.3352 17.3606 15.3273 16.6977 16.163 15.862C16.9988 15.0263 17.6617 14.0341 18.114 12.9422C18.5662 11.8503 18.7991 10.6799 18.7991 9.49805H14.2991C14.2991 10.089 14.1827 10.6742 13.9565 11.2201C13.7304 11.7661 13.3989 12.2622 12.9811 12.68C12.5632 13.0979 12.0671 13.4293 11.5212 13.6555C10.9752 13.8817 10.39 13.998 9.79907 13.998C9.2081 13.998 8.62295 13.8817 8.07698 13.6555C7.53102 13.4293 7.03494 13.0979 6.61708 12.68C6.19922 12.2622 5.86777 11.7661 5.64164 11.2201C5.41545 10.6742 5.29907 10.089 5.29907 9.49805H0.799072Z" />
<path d="M12.7991 9.50199C12.7991 8.70634 12.483 7.94329 11.9204 7.38066C11.3578 6.81803 10.5948 6.50195 9.7991 6.50195C9.00345 6.50195 8.24041 6.81803 7.67778 7.38066C7.11515 7.94329 6.79907 8.70634 6.79907 9.50199H9.7991H12.7991Z" />
</svg>`,
                wavelength: `<svg class="fill-surface-600 dark:fill-surface-400" xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
<path d="M9.79907 0.5C4.82851 0.5 0.799072 4.52943 0.799072 9.5C5.76963 9.5 9.79907 5.47056 9.79907 0.5Z" />
<path d="M9.79907 18.5C14.7696 18.5 18.7991 14.4706 18.7991 9.5C13.8285 9.5 9.79907 13.5294 9.79907 18.5Z" />
<path d="M9.79907 0.5C14.7696 0.5 18.7991 4.52943 18.7991 9.5C13.8285 9.5 9.79907 5.47056 9.79907 0.5Z" />
<path d="M9.79907 18.5C4.82851 18.5 0.799072 14.4706 0.799072 9.5C5.76963 9.5 9.79907 13.5294 9.79907 18.5Z" />
</svg>`
            },
            selectedRows: []
        };
    },
    methods: {
        displayPopover(event) {
            this.hidePopover();

            this.$nextTick(() => {
                this.$refs.op.show(event);
            });
        },
        hidePopover() {
            this.$refs.op.hide();
        }
    }
};
</script>
