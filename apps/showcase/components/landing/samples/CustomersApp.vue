<template>
    <div class="h-full flex-1 flex flex-col overflow-hidden border border-surface rounded-2xl p-6">
        <div class="flex items-start gap-2 justify-between">
            <div>
                <div class="text-2xl leading-8 text-color font-medium">Customers</div>
                <div class="mt-1 leading-6 text-muted-color">The analysis list here shows all users</div>
            </div>
            <Button icon="pi pi-circle-fill text-green-500" label="950 Active User" outlined severity="secondary" />
        </div>
        <div class="mt-10 mb-4 flex items-center justify-between">
            <IconField iconPosition="left">
                <InputIcon class="pi pi-search"> </InputIcon>
                <InputText v-model="search" placeholder="Search" />
            </IconField>
            <div class="flex items-center gap-3">
                <Button icon="pi pi-filter" outlined severity="secondary" />
                <Divider layout="vertical" class="m-0" />
                <Button icon="pi pi-refresh" outlined severity="secondary" />
                <Button label="1 of 15" outlined severity="secondary" />
                <Button icon="pi pi-chevron-left" outlined severity="secondary" />
                <Button icon="pi pi-chevron-right" outlined severity="secondary" />
            </div>
        </div>
        <div class="flex-1 last:[&>td]:border-0 rounded-lg border border-surface w-full overflow-auto">
            <DataTable
                v-model:selection="selectedRows"
                selectionMode="multiple"
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
                            <Button @click="visibleRight = true" icon="pi pi-ellipsis-h" outlined severity="secondary" />
                        </div>
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
    <Drawer
        v-model:visible="visibleRight"
        :containerVisible="true"
        header="Right Sidebar"
        position="right"
        closeIcon="pi pi-sign-out"
        :pt="{
            root: {
                class: '!max-w-2xl !w-full !h-[100vh] rounded-l-2xl'
            },
            footer: {
                class: 'hidden'
            },
            content: {
                class: 'flex-1 flex flex-col'
            }
        }"
    >
        <template #container="">
            <div class="flex flex-col h-[100vh] overflow-auto">
                <div class="">
                    <div class="flex align-items-center gap-3 p-6">
                        <Avatar image="https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar11.jpg" size="large" class="rounded-xl overflow-hidden" />
                        <div class="flex-1">
                            <div class="leading-6 text-color font-medium">Brook Simmons</div>
                            <div class="mt-1 leading-5 text-muted-color text-sm">Sales Executive</div>
                        </div>
                        <Button icon="pi pi-sign-out" text rounded severity="secondary" />
                    </div>
                    <SelectButton
                        v-model="selectedSidebarOption"
                        :options="sidebarOptions"
                        :pt="{
                            root: {
                                class: 'px-6 py-3 w-full'
                            },
                            pcButton: {
                                root: {
                                    class: 'flex-1 py-2.5'
                                },
                                label: {
                                    class: 'text-sm'
                                }
                            }
                        }"
                    />
                </div>
                <div v-if="selectedSidebarOption === 'Interaction Logs'" class="h-[calc(100%-172px)] flex flex-col gap-4 p-6">
                    <div class="h-1/3 flex flex-col p-3 rounded-xl bg-emphasis">
                        <div class="flex items-start justify-between">
                            <div class="leading-6 font-medium text-color">Call Logs</div>
                            <Button icon="pi pi-download text-sm" class="w-8 h-8 !border-surface !bg-surface-0 dark:!bg-surface-900 hover:opacity-75 transition-all" severity="secondary" text />
                        </div>
                        <div class="overflow-y-auto flex-1 bg-surface-0 dark:bg-surface-900 mt-2 flex flex-col rounded-lg overflow-hidden divide-y divide-surface-200 dark:divide-surface-800">
                            <div v-for="(data, index) of callLogs" :key="index" class="flex items-center gap-3 p-2">
                                <OverlayBadge severity="success" class="w-fit">
                                    <Avatar :image="data.image" size="small" class="rounded-md w-10 h-10 overflow-hidden flex" />
                                </OverlayBadge>

                                <div class="flex-1">
                                    <div class="text-sm leading-5 font-medium text-color">{{ data.name }}</div>
                                    <div class="mt-1 text-sm leading-5 text-muted-color">{{ data.time }}</div>
                                </div>
                                <Button icon="pi pi-phone text-sm" text class="bg-primary/10 dark:bg-primary/20 w-8 h-8" />
                            </div>
                        </div>
                    </div>
                    <div class="h-1/3 flex flex-col p-3 rounded-xl bg-emphasis">
                        <div class="flex items-start justify-between">
                            <div class="leading-6 font-medium text-color">Email Records</div>
                            <Button icon="pi pi-download text-sm" class="w-8 h-8 !border-surface !bg-surface-0 dark:!bg-surface-900 hover:opacity-75 transition-all" severity="secondary" text />
                        </div>
                        <div class="overflow-y-auto flex-1 bg-surface-0 dark:bg-surface-900 mt-2 flex flex-col rounded-lg overflow-hidden divide-y divide-surface-200 dark:divide-surface-800">
                            <div v-for="(data, index) of emailRecords" :key="index" class="flex items-center gap-3 p-2">
                                <OverlayBadge severity="danger" class="w-fit">
                                    <Avatar :image="data.image" size="small" class="rounded-md overflow-hidden w-10 h-10 flex" />
                                </OverlayBadge>
                                <div class="w-1/5 text-sm leading-5 font-medium text-color">{{ data.name }}</div>
                                <div class="flex-1">
                                    <div class="text-sm leading-5 font-medium text-color line-clamp-2">
                                        {{ data.title }}
                                        <span class="text-muted-color">
                                            {{ data.text }}
                                        </span>
                                    </div>
                                </div>
                                <div class="w-1/6 text-sm leading-5 text-muted-color text-right">{{ data.time }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="h-1/3 flex flex-col p-3 rounded-xl bg-emphasis">
                        <div class="flex items-start justify-between">
                            <div class="leading-6 font-medium text-color">Meeting Notes</div>
                            <Button icon="pi pi-download text-sm" class="w-8 h-8 !border-surface !bg-surface-0 dark:!bg-surface-900 hover:opacity-75 transition-all leading-none" severity="secondary" text />
                        </div>
                        <div class="overflow-y-auto flex-1 bg-surface-0 dark:bg-surface-900 mt-2 p-4 flex flex-col rounded-lg overflow-hidden">
                            <div class="flex items-start justify-between gap-1">
                                <div class="text-sm text-color font-medium max-w-60">Subject: Meeting Wrap-up & Action Items: Jacob Jones</div>
                                <div class="text-sm text-muted-color">February 14, 2024 / 2:00 PM</div>
                            </div>
                            <div class="text-sm text-muted-color mt-6">
                                Here's a quick review of our meeting with Brook Simmons and next steps. Summary:
                                <br />
                                <ul class="list-disc pl-5">
                                    <li>Reviewed our SaaS solution and its features.</li>
                                    <li>Arlene McCoy intrigued by user experience potential.</li>
                                    <li>Voiced concerns on integration with current system.Action Items:</li>
                                </ul>
                                Demo: Schedule product demo with Arlene McCoy. (Assigned to: Jerome Bell)<br /><br />
                                Integration Blueprint: Draft and deliver technical blueprint. (Assigned to: Cameron Williamson)<br /><br />
                                Follow-up Meeting: Arrange to discuss any queries post-demo. (Assigned to: Dianne Russell)
                                <br /><br />
                                Please act on these items promptly.
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="selectedSidebarOption === 'Preferences'" class="h-[calc(100%-72px)] flex flex-col gap-4 p-6">
                    <div v-for="(data, i) of preferences" :key="i" class="h-1/4 flex flex-col p-3 rounded-xl bg-emphasis">
                        <div class="leading-6 font-medium text-color p-2">{{ data.title }}</div>
                        <div class="overflow-y-auto flex-1 bg-surface-0 dark:bg-surface-900 mt-2 p-4 flex flex-col gap-3 rounded-lg">
                            <div v-for="(pref, j) of data.prefs" :key="j" class="flex items-center gap-2">
                                <i class="text-lg text-color" :class="pref.icon"></i>
                                <div class="font-medium text-color flex-1">{{ pref.title }}</div>
                                <ToggleSwitch v-model="pref.checked" />
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="selectedSidebarOption === 'Opportunities'" class="grid grid-cols-2 gap-6 p-6">
                    <div v-for="(data, i) of opportunities" :key="i" class="flex flex-col p-3 rounded-xl bg-emphasis">
                        <div class="flex items-start justify-between gap-2">
                            <div class="font-medium text-color mt-0.5">{{ data.title }}</div>
                            <NuxtLink :to="data.link" target="_blank" rel="noopener">
                                <Button icon="pi pi-arrow-up-right text-sm !leading-none" class="w-8 h-8 !border-surface !bg-surface-0 dark:!bg-surface-900" severity="secondary" text />
                            </NuxtLink>
                        </div>
                        <img class="w-full rounded-lg mt-2 block" :src="data.image" alt="Opportunutiy Image" />
                        <div class="flex-1 mt-2 p-2 rounded-lg bg-surface-0 dark:bg-surface-900 text-xs text-color">
                            {{ data.text }}
                        </div>
                    </div>
                </div>
                <div v-if="selectedSidebarOption === 'Statistics'" class="h-[calc(100%-160px)] p-6">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="w-full h-full flex flex-col p-3 rounded-xl bg-emphasis">
                            <div class="flex items-center justify-between gap-2">
                                <div class="font-medium text-color p-2">Customer Satisfaction Score</div>
                            </div>
                            <div class="flex-1 py-4 mt-2 flex items-center justify-center rounded-lg bg-surface-0 dark:bg-surface-900 shadow-sm">
                                <Knob v-model="customerSatisfaction" :size="150" :strokeWidth="8" valueTemplate="{value}%" class="pointer-events-none" />
                            </div>
                        </div>
                        <div class="w-full h-full flex flex-col p-3 rounded-xl bg-emphasis">
                            <div class="flex items-center justify-between gap-2">
                                <div class="font-medium text-color p-2">Estimated Lifetime Value</div>
                            </div>
                            <div class="flex-1 flex items-center gap-2 justify-center mt-2 p-2 rounded-lg bg-surface-0 dark:bg-surface-900 shadow-sm">
                                <div class="font-semibold text-lg leading-none text-color border border-surface py-3.5 px-2 rounded-lg">$</div>
                                <div class="font-semibold text-lg leading-none text-color border border-surface py-3.5 px-2 rounded-lg">272</div>
                                <div class="font-semibold text-lg leading-none text-color border border-surface py-3.5 px-2 rounded-lg">123</div>
                                <div class="font-semibold text-lg leading-none text-color border border-surface py-3.5 px-2 rounded-lg">000</div>
                            </div>
                        </div>
                        <div class="w-full h-full flex flex-col p-3 rounded-xl bg-emphasis">
                            <div class="flex items-center justify-between gap-2">
                                <div class="font-medium text-color p-2">Product Usage</div>
                            </div>
                            <div class="flex-1 mt-2 py-4 rounded-lg bg-surface-0 dark:bg-surface-900 shadow-sm">
                                <Chart type="line" :data="lineChartData" :options="lineChartOptions" class="min-h-44 w-full" />
                            </div>
                        </div>
                        <div class="w-full h-full flex flex-col p-3 rounded-xl bg-emphasis">
                            <div class="font-medium text-color p-2">Churn Risk</div>
                            <div class="flex-1 py-4 mt-2 flex items-center justify-center rounded-lg bg-surface-0 dark:bg-surface-900 shadow-sm">
                                <Knob v-model="churnRisk" :size="150" :strokeWidth="8" valueTemplate="{value}%" class="pointer-events-none" />
                            </div>
                        </div>
                    </div>
                    <div class="mt-4 w-full flex flex-col p-3 rounded-xl bg-emphasis">
                        <div class="font-medium text-color p-2">Total Purchases</div>
                        <div class="flex-1 py-4 px-2 w-full mt-2 flex items-center justify-center rounded-lg bg-surface-0 dark:bg-surface-900 shadow-sm">
                            <Chart type="bar" :data="chartData" :options="chartOptions" class="h-60 w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </Drawer>
</template>

<script>
import EventBus from '@/layouts/AppEventBus';
export default {
    name: 'Inbox',
    redrawListener: null,
    data() {
        return {
            search: '',
            lineChartData: {},
            lineChartOptions: {},
            chartData: {},
            chartOptions: {},
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
            selectedRows: [],
            visibleRight: false,
            selectedSidebarOption: 'Statistics',
            sidebarOptions: ['Interaction Logs', 'Preferences', 'Statistics', 'Opportunities'],
            callLogs: [
                { image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar6.png', name: 'Brook Simmons', time: '02.02.2024 | 45 min' },
                { image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar12.jpg', name: 'Jacob Jones', time: '02.02.2024 | 45 min' },
                { image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar13.jpg', name: 'Annette Black', time: '02.03.2024 | 13 min' },
                { image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar9.jpg', name: 'Arlene McCoy', time: '02.03.2024 | 14 min' },
                { image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar10.jpg', name: 'Arlene Simmons', time: '02.03.2024 | 14 min' },
                { image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar11.jpg', name: 'Michael Brown', time: '02.04.2024 | 20 min' }
            ],
            emailRecords: [
                {
                    image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar2.png',
                    name: 'Brook Simmons',
                    time: '3:24 PM',
                    title: 'Unleash Business Potential',
                    text: 'Automate, analyze, and accelerate with our SaaS platform. Unshackle from mundane tasks and focus on scaling your business. Contact us for a demo today!'
                },
                {
                    image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar7.png',
                    name: 'Jacob Jones',
                    time: '12.23.2023',
                    title: 'Optimized Workflow Revolution  ',
                    text: "Experience a workflow revolution with our intuitive SaaS tool. With enhanced features and optimized processes, it's efficiency like never before. Let's get in touch for a brief demo!"
                },
                {
                    image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar8.png',
                    name: 'Annette Black',
                    time: '12.17.2023',
                    title: 'Innovation at Fingertips',
                    text: 'With our SaaS solution, innovation is only a click away. Shape your future with pioneering features and minimalist design. Join us for your solution walk-through today!'
                },
                {
                    image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar11.jpg',
                    name: 'Arlene McCoy',
                    time: '06.17.2023',
                    title: 'Seamless Integration',
                    text: 'Integrate effortlessly with our user-friendly SaaS tools. Streamline your operations and boost productivity. Discover more in our demo session.'
                },
                {
                    image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar13.jpg',
                    name: 'Arlene Simmons',
                    time: '04.17.2023',
                    title: 'Transform Your Business',
                    text: 'Empower your team with our innovative SaaS solutions. Achieve unparalleled efficiency and drive growth. Book a demo to explore the possibilities.'
                },
                {
                    image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar2.png',
                    name: 'Michael Brown',
                    time: '01.05.2024',
                    title: 'Next-Gen Collaboration',
                    text: 'Experience the future of collaboration with our cutting-edge SaaS platform. Enhance teamwork and streamline communication. Contact us for a demo today!'
                }
            ],
            preferences: [
                {
                    title: 'Email',
                    prefs: [
                        { icon: 'pi pi-bell', title: 'Notification', checked: true },
                        { icon: 'pi pi-inbox', title: 'Newsletter', checked: false },
                        { icon: 'pi pi-sync', title: 'Product Updates', checked: false }
                    ]
                },
                {
                    title: 'Telephone',
                    prefs: [
                        { icon: 'pi pi-mobile', title: 'Phone Call', checked: true },
                        { icon: 'pi pi-volume-down', title: 'Voicemail', checked: false },
                        { icon: 'pi pi-comments', title: 'SMS text', checked: false }
                    ]
                },
                {
                    title: 'Social Media',
                    prefs: [
                        { icon: 'pi pi-clock', title: 'Automated Post', checked: true },
                        { icon: 'pi pi-user', title: 'Direct Message', checked: false }
                    ]
                },
                {
                    title: 'Data Privacy',
                    prefs: [
                        { icon: 'pi pi-box', title: 'Share Data with 3rd Parties', checked: true },
                        { icon: 'pi pi-file', title: 'Cookies', checked: false }
                    ]
                }
            ],
            opportunities: [
                {
                    title: 'Apollo',
                    link: 'https://primevue.org/templates/apollo/',
                    image: 'https://primefaces.org/cdn/primevue/images/layouts/apollo-vue.jpg',
                    text: 'Keep your application fresh with Apollo, the newest and most modern template available.'
                },
                {
                    title: 'Ultima',
                    link: 'https://primevue.org/templates/ultima/',
                    image: 'https://primefaces.org/cdn/primevue/images/layouts/ultima-vue.jpg',
                    text: "Elevate your application's intuitiveness with Ultima's premium Material Design interface."
                },
                {
                    title: 'Diamond',
                    link: 'https://primevue.org/templates/diamond/',
                    image: 'https://primefaces.org/cdn/primevue/images/layouts/diamond-vue.jpg',
                    text: "Handle complex operations with elegance with Diamond's robust and powerful premium design."
                },
                {
                    title: 'Atlantis',
                    link: 'https://primevue.org/templates/atlantis/',
                    image: 'https://primefaces.org/cdn/primevue/images/layouts/atlantis-vue.jpg',
                    text: "Boost your application's capabilities, customization with the Atlantis template."
                },
                {
                    title: 'Verona',
                    link: 'https://primevue.org/templates/verona/',
                    image: 'https://primefaces.org/cdn/primevue/images/layouts/verona-vue.jpg',
                    text: "Achieve sophistication and subtlety with Verona's minimalistic, content-focused design."
                },
                {
                    title: 'Freya',
                    link: 'https://primevue.org/templates/freya/',
                    image: 'https://primefaces.org/cdn/primevue/images/layouts/freya-vue.png',
                    text: "Give your application a sleek, updated look with Freya's chic and modern premium template."
                }
            ],
            customerSatisfaction: 56,
            churnRisk: 24
        };
    },
    beforeUnmount() {
        EventBus.off('dark-mode-toggle-complete', this.redrawListener);
        EventBus.off('theme-palette-change', this.redrawListener);
    },
    mounted() {
        this.chartData = this.setChartData();
        this.chartOptions = this.setChartOptions();
        this.lineChartData = this.setLineChartData();
        this.lineChartOptions = this.setLineChartOptions();

        this.redrawListener = () => {
            this.chartOptions = this.setChartOptions();
            this.chartData = this.setChartData();
            this.lineChartData = this.setLineChartData();
            this.lineChartOptions = this.setLineChartOptions();
        };

        EventBus.on('theme-palette-change', this.redrawListener);
        EventBus.on('dark-mode-toggle-complete', this.redrawListener);
    },
    methods: {
        toggle(event) {
            this.$refs.menu.toggle(event);
        },
        setChartData() {
            const documentStyle = getComputedStyle(document.documentElement);
            const darkMode = document.documentElement.classList.contains('p-dark');

            return {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [
                    {
                        type: 'bar',
                        label: 'Investment Wallet',
                        backgroundColor: 'color-mix(in srgb, ' + documentStyle.getPropertyValue(darkMode ? '--p-surface-700' : '--p-surface-200') + ' 100%, transparent)',
                        data: [100, 201, 404, 300, 140, 220, 314, 520, 145, 234, 325, 147],
                        borderRadius: {
                            topLeft: 4,
                            topRight: 4
                        },
                        borderSkipped: true,
                        barThickness: 20,
                        hoverBackgroundColor: 'color-mix(in srgb, ' + documentStyle.getPropertyValue(darkMode ? '--p-surface-0' : '--p-surface-800') + ' 100%, transparent)',
                        hoverTransition: '1s ease all'
                    }
                ]
            };
        },
        setChartOptions() {
            const darkMode = document.documentElement.classList.contains('p-dark');
            const documentStyle = getComputedStyle(document.documentElement);

            const backgroundColor = documentStyle.getPropertyValue(darkMode ? '--p-surface-900' : '--p-surface-0');
            const textColor = documentStyle.getPropertyValue('--p-text-color');
            const borderColor = documentStyle.getPropertyValue(darkMode ? '--p-surface-800' : '--p-surface-100');
            const textMutedColor = documentStyle.getPropertyValue(darkMode ? '--p-surface-500' : '--p-surface-400');

            const getOrCreateTooltip = (chart) => {
                let tooltipEl = chart.canvas.parentNode.querySelector('div.chartjs-tooltip');

                if (!tooltipEl) {
                    tooltipEl = document.createElement('div');
                    tooltipEl.classList.add('chartjs-tooltip');
                    tooltipEl.style.backgroundColor = backgroundColor;
                    tooltipEl.style.boxShadow =
                        ' 0px 33.12px 9.399px 0px rgba(0, 0, 0, 0.00), 0px 21.036px 8.504px 0px rgba(0, 0, 0, 0.01), 0px 12.084px 7.161px 0px rgba(0, 0, 0, 0.05), 0px 5.371px 5.371px 0px rgba(0, 0, 0, 0.09), 0px 1.343px 2.685px 0px rgba(0, 0, 0, 0.10)';
                    tooltipEl.style.borderRadius = '7px';
                    tooltipEl.style.color = textColor;
                    tooltipEl.style.opacity = 1;
                    tooltipEl.style.padding = '14.5px';
                    tooltipEl.style.pointerEvents = 'none';
                    tooltipEl.style.position = 'absolute';
                    tooltipEl.style.transform = 'translate(-50%, 0)';
                    tooltipEl.style.transition = 'all .2s ease';
                    chart.canvas.parentNode.appendChild(tooltipEl);
                }

                return tooltipEl;
            };

            return {
                maintainAspectRatio: false,
                aspectRatio: 0.8,
                plugins: {
                    chartAreaBorder: {
                        borderColor: 'red',
                        borderWidth: 2,
                        borderDash: [5, 5],
                        borderDashOffset: 2
                    },
                    tooltip: {
                        enabled: false,
                        padding: 5,
                        position: 'nearest',
                        external: function (context) {
                            // Tooltip Element
                            const { chart, tooltip } = context;
                            const tooltipEl = getOrCreateTooltip(chart);

                            // Hide if no tooltip
                            if (tooltip.opacity === 0) {
                                tooltipEl.style.opacity = 0;

                                return;
                            }

                            if (tooltip.body) {
                                const bodyLines = tooltip.body.map((b) => {
                                    const strArr = b.lines[0].split(':');
                                    const data = {
                                        text: strArr[0].trim(),
                                        value: strArr[1].trim()
                                    };

                                    return data;
                                });

                                // Clear old content
                                tooltipEl.innerHTML = '';
                                bodyLines.forEach((body, i) => {
                                    const text = document.createElement('div');

                                    text.appendChild(document.createTextNode('$' + body.value + 'K'));
                                    text.style.fontWeight = '500';
                                    text.style.lineHeight = '21px';
                                    text.style.fontSize = '14px';
                                    tooltipEl.appendChild(text);
                                });
                            }

                            const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

                            // Display, position, and set styles for font
                            tooltipEl.style.opacity = 1;
                            tooltipEl.style.left = positionX + tooltip.caretX + 'px';
                            tooltipEl.style.top = positionY + tooltip.caretY + 'px';
                            tooltipEl.style.font = tooltip.options.bodyFont.string;
                            tooltipEl.style.padding = tooltip.options.padding + 'px ' + tooltip.options.padding + 'px';
                        }
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        stacked: true,
                        ticks: {
                            color: textMutedColor,
                            font: {
                                weight: 'lighter'
                            }
                        },
                        grid: {
                            color: 'transparent',
                            borderColor: 'transparent'
                        }
                    },
                    y: {
                        border: {
                            display: false
                        },
                        stacked: true,
                        ticks: {
                            color: textMutedColor,
                            font: {
                                weight: 'lighter'
                            }
                        },
                        grid: {
                            color: borderColor,
                            borderColor: 'transparent'
                        }
                    }
                }
            };
        },
        setLineChartData() {
            const darkMode = document.documentElement.classList.contains('p-dark');

            return {
                labels: ['31', '1', '2', '3', '4', '5', '6', '7', '8'],
                datasets: [
                    {
                        label: 'My First Dataset',
                        data: [60, 64, 57, 52, 58, 70, 75, 70, 60],
                        fill: true,
                        borderColor: '#16A34A',
                        tension: 0.4,
                        borderWidth: 1.5,
                        pointBackgroundColor: '#16A34A',
                        pointBorderColor: darkMode ? '#09090B' : '#FFF',
                        pointBorderWidth: 3,

                        hideInLegendAndTooltip: false,
                        pointStyle: function (context) {
                            let index = context.dataIndex;

                            if (index == 6) {
                                return 'circle';
                            } else {
                                return 'line';
                            }
                        },
                        pointRadius: function (context) {
                            let index = context.dataIndex;

                            if (index == 6) {
                                return 6;
                            } else {
                                return 0.1;
                            }
                        },
                        backgroundColor: (context) => {
                            const bgColor = ['rgba(22,163,74,0.16)', 'rgba(22,163,74,0)'];

                            if (!context.chart.chartArea) {
                                return;
                            }

                            const {
                                ctx,
                                data,
                                chartArea: { top, bottom }
                            } = context.chart;
                            const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
                            const colorTranches = 1 / (bgColor.length - 1);

                            for (let i = 0; i < bgColor.length; i++) {
                                gradientBg.addColorStop(0 + i * colorTranches, bgColor[i]);
                            }

                            return gradientBg;
                        }
                    }
                ],
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top'
                        },
                        title: {
                            display: true,
                            text: 'Chart.js Line Chart'
                        }
                    }
                }
            };
        },
        setLineChartOptions() {
            const darkMode = document.documentElement.classList.contains('p-dark');
            const documentStyle = getComputedStyle(document.documentElement);

            const backgroundColor = documentStyle.getPropertyValue(darkMode ? '--p-surface-900' : '--p-surface-0');
            const textColor = documentStyle.getPropertyValue('--p-text-color');
            const borderColor = documentStyle.getPropertyValue(darkMode ? '--p-surface-800' : '--p-surface-100');
            const textMutedColor = documentStyle.getPropertyValue(darkMode ? '--p-surface-500' : '--p-surface-400');

            const getOrCreateTooltip = (chart) => {
                let tooltipEl = chart.canvas.parentNode.querySelector('div.chartjs-tooltip');

                if (!tooltipEl) {
                    tooltipEl = document.createElement('div');
                    tooltipEl.classList.add('chartjs-tooltip');
                    tooltipEl.style.backgroundColor = backgroundColor;
                    tooltipEl.style.boxShadow =
                        ' 0px 33.12px 9.399px 0px rgba(0, 0, 0, 0.00), 0px 21.036px 8.504px 0px rgba(0, 0, 0, 0.01), 0px 12.084px 7.161px 0px rgba(0, 0, 0, 0.05), 0px 5.371px 5.371px 0px rgba(0, 0, 0, 0.09), 0px 1.343px 2.685px 0px rgba(0, 0, 0, 0.10)';
                    tooltipEl.style.borderRadius = '7px';
                    tooltipEl.style.color = textColor;
                    tooltipEl.style.opacity = 1;
                    tooltipEl.style.padding = '2px';
                    tooltipEl.style.pointerEvents = 'none';
                    tooltipEl.style.position = 'absolute';
                    tooltipEl.style.transform = 'translate(-50%, 0)';
                    tooltipEl.style.transition = 'all .2s ease';
                    chart.canvas.parentNode.appendChild(tooltipEl);
                }

                return tooltipEl;
            };

            return {
                maintainAspectRatio: false,
                aspectRatio: 0.8,
                plugins: {
                    chartAreaBorder: {
                        borderColor: 'red',
                        borderWidth: 2,
                        borderDash: [5, 5],
                        borderDashOffset: 2
                    },
                    tooltip: {
                        enabled: false,
                        padding: 8,
                        position: 'nearest',
                        external: function (context) {
                            // Tooltip Element
                            const { chart, tooltip } = context;
                            const tooltipEl = getOrCreateTooltip(chart);

                            // Hide if no tooltip
                            if (tooltip.opacity === 0) {
                                tooltipEl.style.opacity = 0;

                                return;
                            }

                            if (tooltip.body) {
                                const bodyLines = tooltip.body.map((b) => {
                                    const strArr = b.lines[0].split(':');
                                    const data = {
                                        text: strArr[0].trim(),
                                        value: strArr[1].trim()
                                    };

                                    return data;
                                });

                                // Clear old content
                                tooltipEl.innerHTML = '';
                                bodyLines.forEach((body, i) => {
                                    const text = document.createElement('div');

                                    text.appendChild(document.createTextNode(body.value + '.000'));
                                    text.style.fontWeight = '500';
                                    text.style.lineHeight = '21px';
                                    text.style.fontSize = '14px';
                                    tooltipEl.appendChild(text);
                                });
                            }

                            const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

                            // Display, position, and set styles for font
                            tooltipEl.style.opacity = 1;
                            tooltipEl.style.left = positionX + tooltip.caretX + 'px';
                            tooltipEl.style.top = positionY + tooltip.caretY - 40 + 'px';
                            tooltipEl.style.font = tooltip.options.bodyFont.string;
                            tooltipEl.style.padding = tooltip.options.padding + 'px ' + tooltip.options.padding + 'px';
                        }
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        stacked: true,
                        ticks: {
                            color: textMutedColor,
                            font: {
                                weight: 'lighter'
                            }
                        },
                        grid: {
                            color: 'transparent',
                            borderColor: 'transparent'
                        }
                    },
                    y: {
                        display: false,
                        grace: 14
                    }
                }
            };
        }
    },
    components: {}
};
</script>
