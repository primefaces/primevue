<template>
    <div class="flex gap-4 h-full flex-1 w-full overflow-auto">
        <div class="w-64 h-full overflow-hidden border border-surface rounded-2xl flex flex-col">
            <div class="flex items-center justify-between gap-2 p-4 border-b border-surface">
                <div class="text-xl font-medium leading-7 text-color">Mails</div>
                <Button icon="pi pi-plus" class="w-8 h-8" />
            </div>
            <div class="flex-1 flex flex-col overflow-auto justify-between gap-4 pt-4 pb-4 px-4">
                <div class="flex-1 overflow-auto flex flex-col gap-2">
                    <div v-for="(navData, i) of inboxNavs" :key="i" class="flex flex-col gap-2">
                        <div class="text-sm font-medium leading-5 text-surface-400 dark:text-surface-500">{{ navData.title }}</div>
                        <button
                            v-for="(nav, j) of navData.navs"
                            :key="j"
                            @click="activeInboxNav = nav.name"
                            :class="activeInboxNav === nav.name ? 'text-color bg-emphasis' : 'text-muted-color bg-transparent'"
                            class="px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-emphasis transition-all"
                        >
                            <i :class="nav.icon"></i>
                            <span class="font-medium">{{ nav.name }}</span>
                        </button>
                    </div>
                </div>
                <div>
                    <div class="border border-surface rounded-border px-4 pb-4 pt-3 mb-4">
                        <div class="font-medium text-color mb-4">Free Version</div>
                        <ProgressBar
                            :value="75"
                            :pt="{
                                value: {
                                    class: 'bg-red-600'
                                }
                            }"
                        >
                            <span class="w-full text-center text-sm font-normal text-primary-contrast leading-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">4 days left</span>
                        </ProgressBar>
                    </div>
                    <Button label="Upgrade to PRO 🚀" variant="outlined" class="w-full" />
                </div>
            </div>
        </div>
        <div class="flex-1 h-full overflow-hidden flex border border-surface rounded-2xl">
            <DataTable
                v-model:selection="selectedRows"
                scrollable
                :value="tableData"
                :rows="10"
                :pt="{
                    root: {
                        class: 'w-full flex-1 overflow-x-auto'
                    },
                    thead: {
                        class: 'hidden'
                    },
                    header: {
                        class: 'sticky top-0 z-10'
                    },
                    column: {
                        bodyCell: {
                            class: '!border-transparent'
                        }
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
                <template #header>
                    <div class="flex xl:items-center justify-between gap-2 flex-col xl:flex-row">
                        <div class="flex items-center gap-2">
                            <Checkbox v-model="checked" :binary="true" class="mr-1" @update:modelValue="onSelectionChange" />
                            <Button icon="pi pi-envelope" variant="outlined" severity="secondary" />
                            <Button icon="pi pi-exclamation-circle" variant="outlined" severity="secondary" />
                            <Button icon="pi pi-tag" variant="outlined" severity="secondary" />
                            <Button icon="pi pi-inbox" label="Archive" variant="outlined" severity="secondary" />
                            <Button icon="pi pi-trash" label="Trash" variant="outlined" severity="secondary" />
                        </div>
                        <div class="flex items-center gap-2">
                            <IconField class="w-6/12 xl:max-w-36">
                                <InputIcon class="pi pi-search"> </InputIcon>
                                <InputText v-model="search" placeholder="Search" class="w-full" />
                            </IconField>
                            <Button icon="pi pi-filter" variant="outlined" severity="secondary" />
                            <Divider layout="vertical" class="m-0" />
                            <Button icon="pi pi-refresh" variant="outlined" severity="secondary" />
                            <Button label="1 of 15" class="!whitespace-nowrap" variant="outlined" severity="secondary" />
                            <Button icon="pi pi-chevron-left" variant="outlined" severity="secondary" />
                            <Button icon="pi pi-chevron-right" variant="outlined" severity="secondary" />
                        </div>
                    </div>
                </template>
                <template #empty>Inbox is empty.</template>
                <Column selectionMode="multiple" headerStyle="width: 1rem" style="width: 1rem"></Column>
                <Column field="bookmarked" headerStyle="width: 1rem" style="width: 1rem; padding: 0.5rem">
                    <template #body="{ data }">
                        <div @click="data.bookmarked = !data.bookmarked" @click.stop>
                            <i :class="data.bookmarked ? 'pi pi-bookmark-fill' : 'pi pi-bookmark'"></i>
                        </div>
                    </template>
                </Column>
                <Column field="name">
                    <template #body="{ data }">
                        <div class="flex items-center">
                            <OverlayBadge severity="danger" class="w-fit">
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
                <Column field="title" style="min-width: 14rem; max-width: 20rem">
                    <template #body="{ data }">
                        <div class="truncate">
                            <span class="text-color leading-6 mr-2">{{ data.title }}</span>
                            <span class="text-muted-color leading-5 text-sm">{{ data.message }}</span>
                        </div>
                    </template>
                </Column>
                <Column field="type" style="width: 4rem">
                    <template #body="{ data }">
                        <Tag v-if="data.type" severity="secondary" :value="data.type" class="font-medium"></Tag>
                    </template>
                </Column>
                <Column field="time" style="width: 4rem">
                    <template #body="{ data }">
                        <div class="text-right text-sm leading-5 text-muted-color">{{ data.time }}</div>
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Inbox',
    redrawListener: null,
    data() {
        return {
            checked: false,
            search: '',
            activeInboxNav: 'Inbox',
            inboxNavs: [
                {
                    title: 'Navigation',
                    navs: [
                        { name: 'Inbox', icon: 'pi pi-inbox' },
                        { name: 'Starry', icon: 'pi pi-star' },
                        { name: 'Drafts', icon: 'pi pi-file-o' },
                        { name: 'Important', icon: 'pi pi-file-import' },
                        { name: 'Sent', icon: 'pi pi-send' },
                        { name: 'Archive', icon: 'pi pi-inbox' },
                        { name: 'Spam', icon: 'pi pi-info-circle' },
                        { name: 'Trash', icon: 'pi pi-trash' }
                    ]
                },
                {
                    title: 'Other',
                    navs: [
                        { name: 'Security', icon: 'pi pi-tag' },
                        { name: 'Update', icon: 'pi pi-tag' },
                        { name: 'Marketing', icon: 'pi pi-tag' },
                        { name: 'HR', icon: 'pi pi-tag' }
                    ]
                }
            ],
            tableData: [
                {
                    id: 1,
                    bookmarked: false,
                    image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar12.jpg',
                    active: false,
                    name: 'Brook Simmons',
                    type: 'Security',
                    time: '3:24 PM',
                    title: 'Important Account Update',
                    message: "Dear customer, we've made updates to enhance your account security. Please log in to review and complete the necessary steps. Thank you for choosing ABC Corporation."
                },
                {
                    id: 2,
                    bookmarked: false,
                    image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar2.png',
                    active: false,
                    name: 'Dianne Russell',
                    type: 'Update',
                    time: '11:24 AM',
                    title: 'Weekly Project Update',
                    message: 'Hi team, attached is the weekly project update. Kindly review the progress and come prepared for our discussion in the upcoming meeting on [Date and Time].'
                },
                {
                    id: 3,
                    bookmarked: true,
                    image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar13.jpg',
                    active: false,
                    name: 'Amy Elsner',
                    type: 'Security',
                    time: '9:24 AM',
                    title: 'Urgent: Security Alert - Account Compromise',
                    message: 'Dear user, we detected unauthorized access to your account. Take immediate action to secure your account. Follow the provided link to reset your password. Thank you.'
                },
                {
                    id: 4,
                    bookmarked: false,
                    image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/main-avatar.png',
                    active: false,
                    name: 'Jacob Jones',
                    type: 'Marketing',
                    time: 'Jan 21',
                    title: 'Exclusive Offer Inside - Limited Time Only',
                    message: "Greetings, check out our exclusive offer! Don't miss this limited-time deal. Details enclosed in the attached flyer. Act fast; the offer expires on [Date]."
                },
                {
                    id: 5,
                    bookmarked: false,
                    image: '',
                    active: false,
                    name: 'Cameron Watson',
                    capName: 'CW',
                    type: 'HR',
                    time: 'Jan 15',
                    title: 'Employee Appreciation Event - Save the Date',
                    message: 'Hello team, mark your calendars for our upcoming Employee Appreciation Event on [Date]. Stay tuned for more details and get ready for a day of celebration!'
                },
                {
                    id: 6,
                    bookmarked: true,
                    image: '',
                    active: false,
                    name: 'Wade Warren',
                    capName: 'WW',
                    type: 'Invoice',
                    time: 'Jan 12',
                    title: 'Your Recent Purchase - Order Confirmation',
                    message: 'Hi Wade Warren, secure your spot at the XYZ Conference 2024 with early bird registration. Enjoy discounted rates until [Date].'
                },
                {
                    id: 7,
                    bookmarked: false,
                    image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar7.png',
                    active: false,
                    name: 'Guy Hawkins',
                    type: 'Events',
                    time: 'Jan 11',
                    title: 'Early Bird Registration Open - XYZ Conference 2024',
                    message: ' Attention users, we have scheduled system maintenance on Jan 17. Expect minimal service disruption during this period. Thank you for your understanding.'
                },
                {
                    id: 8,
                    bookmarked: false,
                    image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar8.png',
                    active: false,
                    name: 'Annette Black',
                    type: '',
                    time: 'Jan 8',
                    title: 'Upcoming System Maintenance Notice',
                    message: "Dear valued customer, as a token of appreciation, we're offering exclusive discounts for VIP customers. Explore the savings in the attached catalog. Expires [Date]."
                },
                {
                    id: 9,
                    bookmarked: true,
                    image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar10.jpg',
                    active: false,
                    name: 'Darrell Steward',
                    type: 'Discount',
                    time: 'Jan 4',
                    title: 'Special Discounts for VIP Customers',
                    message: 'Hello Darrell Steward, stay updated with our latest news and highlights in the January edition of our newsletter. Enjoy the read!'
                },
                {
                    id: 10,
                    bookmarked: true,
                    image: '',
                    active: false,
                    name: 'Jerome Bell',
                    capName: 'JB',
                    type: 'Newsletter',
                    time: 'Jan 2',
                    title: 'Monthly Newsletter - January Edition',
                    message: "Dear user, we've updated our Terms of Service. Please review the changes to ensure compliance. Your continued use of our services implies acceptance. Thank you."
                },
                {
                    id: 11,
                    bookmarked: false,
                    image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar11.jpg',
                    active: false,
                    name: 'Onyama Limba',
                    type: '',
                    time: 'Jan 2',
                    title: 'Exclusive Travel Packages for You',
                    message: 'Greetings traveler, explore our exclusive travel packages tailored just for you. Plan your next adventure with XYZ Travel. Offers valid until [Date].'
                },
                {
                    id: 12,
                    bookmarked: false,
                    image: '',
                    active: false,
                    name: 'Robert Fox',
                    capName: 'RF',
                    type: 'Invitation',
                    time: '12.12.2023',
                    title: 'Invitation to Amsterdam',
                    message: "Hello Robert Fox, you're invited to our upcoming webinar on Amsterdam. Join us on [Date and Time] for an insightful session. Reserve your spot now!"
                },
                {
                    id: 13,
                    bookmarked: true,
                    image: '',
                    active: false,
                    name: 'Courtney Henry',
                    capName: 'CH',
                    type: '',
                    time: '12.09.2023',
                    title: 'New Arrivals - Check Out the Latest Books',
                    message: 'Book enthusiasts, discover our latest arrivals! Explore the attached catalog and dive into the world of new releases. Available for purchase starting [Date].'
                },
                {
                    id: 14,
                    bookmarked: true,
                    image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar9.jpg',
                    active: false,
                    name: 'Arlene McCoy',
                    type: '',
                    time: '12.04.2023',
                    title: 'New Product Demo',
                    message: 'Exclusive demo of our latest product on Thursday.'
                },
                {
                    id: 15,
                    bookmarked: false,
                    image: '',
                    active: false,
                    name: 'Jerome Bell',
                    capName: 'JB',
                    type: 'Newsletter',
                    time: '10.01.2023',
                    title: 'Monthly Newsletter - January Edition',
                    message: "Dear user, we've updated our Terms of Service. Please review the changes to ensure compliance. Your continued use of our services implies acceptance. Thank you."
                }
            ],
            selectedRows: []
        };
    },
    methods: {
        onSelectionChange(checked) {
            if (checked) {
                this.selectedRows = this.tableData;
            } else {
                this.selectedRows = [];
            }
        }
    }
};
</script>
