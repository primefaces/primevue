<template>
    <div class="flex-1 h-full overflow-y-auto overflow-x-clip overflow-hidden flex border border-surface rounded-2xl">
        <div class="w-4/12 xl:w-3/12 min-w-40 overflow-auto flex flex-col gap-6">
            <div class="flex flex-col gap-6 pt-3 pb-2 -mb-2 px-5 sticky top-0 bg-surface-0 dark:bg-surface-950 z-10">
                <div class="flex items-center justify-between gap-6 text-color">
                    <div class="text-2xl font-medium lead">Chats</div>
                    <Button icon="pi pi-plus" text />
                </div>
            </div>
            <div class="px-5">
                <IconField>
                    <InputIcon class="pi pi-search"> </InputIcon>
                    <InputText v-model="search" placeholder="Search" class="w-full" />
                </IconField>
            </div>
            <div class="w-full px-5">
                <SelectButton
                    v-model="value"
                    :options="options"
                    aria-labelledby="basic"
                    :pt="{
                        root: {
                            class: 'w-full'
                        },
                        pcbutton: {
                            root: {
                                class: 'flex-1'
                            }
                        }
                    }"
                />
            </div>
            <div class="flex-1 flex flex-col">
                <div
                    v-for="chat in chats"
                    :key="chat.name"
                    class="flex items-center gap-2 p-4 cursor-pointer hover:bg-emphasis transition-all"
                    :class="{
                        'bg-emphasis': chat.name === activeChat
                    }"
                >
                    <div class="relative">
                        <div v-if="chat.active !== undefined" class="absolute top-0 right-0 p-[1px] bg-surface-0 dark:bg-surface-950 rounded-full flex items-center justify-center">
                            <Badge :severity="chat.active ? 'success' : 'danger'" class="p-1.5"></Badge>
                        </div>
                        <Avatar
                            v-bind="chat.image ? { image: chat.image } : { label: chat.capName }"
                            :class="{
                                '!bg-primary-100 !text-primary-950': !chat.image
                            }"
                            class="text-base font-medium flex"
                            size="large"
                            shape="circle"
                        />
                    </div>
                    <div class="flex-1">
                        <div class="flex items-start gap-1 justify-between">
                            <div class="text-color font-medium leading-6">{{ chat.name }}</div>
                            <div class="text-sm text-muted-color leading-5">{{ chat.time }}</div>
                        </div>
                        <div class="flex items-center gap-5 justify-between mt-1">
                            <div class="text-muted-color text-sm leading-5 line-clamp-1">{{ chat.lastMessage }}</div>
                            <Badge v-if="chat.unreadMessageCount > 0" :value="chat.unreadMessageCount" severity="contrast"></Badge>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-8/12 xl:w-6/12 border-x border-surface flex flex-col">
            <div class="flex items-center p-4 gap-7 border-b border-surface">
                <div class="flex items-center">
                    <Avatar image="https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar-primetek.png" class="mr-2 av" size="large" shape="circle" />
                    <div class="flex-1">
                        <div class="text-color leading-6 cursor-pointer hover:text-muted-color-emphasis transition-colors">PrimeTek</div>
                        <div class="text-muted-color leading-5 line-clamp-1 mt-1">Cody Fisher, Esther Howard, Jerome Bell, Kristin Watson, Ronald Richards, Darrell Steward</div>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <Button icon="pi pi-phone" text />
                    <Button icon="pi pi-search" text />
                    <Button type="button" icon="pi pi-ellipsis-h" text @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
                    <Menu ref="menu" id="overlay_menu" :model="menuItems" :popup="true" />
                </div>
            </div>
            <div class="flex-1 overflow-y-auto flex flex-col gap-8 py-8 px-6">
                <div v-for="message in chatMessages" :key="message.id" class="flex items-start min-w-64 w-fit max-w-[60%]" :class="{ 'ml-auto mr-0 flex-row-reverse': message.type === 'sent' }">
                    <div
                        class="flex items-center gap-2 sticky top-0 transition-all"
                        :class="{
                            'flex-row-reverse': message.type === 'sent'
                        }"
                    >
                        <Avatar
                            v-bind="message.image ? { image: message.image } : { label: message.capName }"
                            :class="{
                                'bg-primary-100 text-primary-950': !message.image
                            }"
                            class="w-10 h-10 text-sm font-medium"
                            shape="circle"
                        />
                        <div>
                            <svg :class="message.type === 'received' ? 'fill-surface-100 dark:fill-surface-800' : 'fill-primary rotate-180'" class="" xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">
                                <path d="M1.79256 7.09551C0.516424 6.31565 0.516426 4.46224 1.79256 3.68238L7 0.500055L7 10.2778L1.79256 7.09551Z" />
                            </svg>
                        </div>
                    </div>
                    <div :class="message.type === 'received' ? 'flex-1 bg-surface-100 dark:bg-surface-800 px-2 py-1 rounded-lg' : 'flex-1 bg-primary px-2 py-1 rounded-lg'">
                        <p :class="message.type === 'received' ? 'text-color leading-6 mb-0' : 'text-primary-contrast leading-6 mb-0'">
                            {{ message.message }}
                        </p>
                        <div v-if="message.attachment" :class="message.type === 'received' ? 'bg-surface-200 dark:bg-surface-700' : 'bg-primary-emphasis'" class="mt-2 w-full rounded-lg mb-0.5 hover:opacity-75 transition-all">
                            <img class="w-full h-auto block cursor-pointer" :src="message.attachment" alt="Message Image" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-4 border-t border-surface flex items-end justify-between gap-2">
                <div class="flex items-end gap-1 flex-1">
                    <Button icon="pi pi-face-smile" text />
                    <Button icon="pi pi-paperclip" text />
                    <Textarea class="ml-1 flex-1 border-0 shadow-none max-h-32 min-h-9 bg-emphasis overflow-auto" autoResize rows="1" placeholder="Write your message..." />
                </div>
                <Button icon="pi pi-send" />
            </div>
        </div>
        <div class="w-3/12 xl:block hidden min-w-40 py-6 px-3 overflow-auto">
            <div class="flex flex-col items-center justify-center">
                <Avatar image="https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar-primetek.png" class="w-32 h-32" size="xlarge" shape="circle" />
                <div class="leading-6 font-medium text-color mt-4 w-full text-center">PrimeTek</div>
                <div class="leading-5 text-sm text-muted-color mt-1 w-full text-center">@primetek</div>
                <div class="flex items-center justify-center flex-wrap gap-1 mt-4">
                    <Button icon="pi pi-phone text-muted-color" severity="secondary" text />
                    <Button icon="pi pi-video text-muted-color" severity="secondary" text />
                    <Button icon="pi pi-sign-in text-muted-color" severity="secondary" text />
                    <Button icon="pi pi-info-circle text-muted-color" severity="secondary" text />
                    <Button type="button" icon="pi pi-ellipsis-v text-muted-color" severity="secondary" text @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
                    <Menu ref="menu" id="overlay_menu" :model="menuItems" :popup="true" />
                </div>
            </div>
            <div class="flex flex-col gap-4 mt-4">
                <div class="flex items-center gap-2">
                    <i class="pi pi-bell text-color"></i>
                    <div class="leading-6 font-medium text-color flex-1">Notification</div>
                    <ToggleSwitch v-model="notification" />
                </div>
                <div class="flex items-center gap-2">
                    <i class="pi pi-volume-down text-color"></i>
                    <div class="leading-6 font-medium text-color flex-1">Sound</div>
                    <ToggleSwitch v-model="sound" />
                </div>
                <div class="flex items-center gap-2">
                    <i class="pi pi-download text-color"></i>
                    <div class="leading-6 font-medium text-color flex-1">Save to downloads</div>
                    <ToggleSwitch v-model="download" />
                </div>
            </div>
            <div class="mt-6">
                <div class="flex items-center gap-2">
                    <div class="flex-1 text-color leading-6 font-medium">Members</div>
                    <Button label="See All" class="text-sm py-0.5 px-2 text-muted-color" text />
                </div>
                <div class="mt-4 flex flex-col gap-4">
                    <div v-for="member in members" :key="member.name" class="flex items-center gap-2 cursor-pointer">
                        <Avatar
                            v-bind="member.image ? { image: member.image } : { label: member.capName }"
                            :class="{
                                'bg-orange-100 text-orange-950': !member.image
                            }"
                            class="font-medium text-xs"
                            shape="circle"
                        />
                        <div class="text-sm text-color hover:text-muted-color-emphasis transition-colors font-medium leading-5 flex-1">
                            {{ member.name }}
                        </div>
                        <i class="pi pi-chevron-right text-xs text-muted-color"></i>
                    </div>
                </div>
            </div>
            <div class="mt-5">
                <SelectButton
                    v-model="media"
                    :options="mediaOptions"
                    :pt="{
                        root: {
                            class: 'w-full'
                        },
                        pcbutton: {
                            root: {
                                class: 'flex-1'
                            }
                        }
                    }"
                />
                <div class="mt-3 mb-5 grid grid-cols-3 gap-2">
                    <div v-for="(media, index) in chatMedia" :key="index" class="bg-emphasis hover:opacity-70 transition-all flex-1 aspect-square rounded-lg border border-surface cursor-pointer">
                        <img class="w-full h-full object-cover block" :src="media" alt="Media Image" />
                    </div>
                    <div class="bg-emphasis hover:opacity-70 transition-all flex-1 aspect-square rounded-lg border border-surface cursor-pointer flex items-center justify-center">
                        <span class="text-muted-color font-medium">99+</span>
                    </div>
                </div>
                <Button
                    label="Show more"
                    icon="pi pi-arrow-right"
                    iconPos="right"
                    variant="outlined"
                    class="w-full text-left"
                    :pt="{
                        root: {
                            class: 'justify-between'
                        }
                    }"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Chat',
    redrawListener: null,
    data() {
        return {
            search: '',
            download: false,
            notification: true,
            sound: false,
            value: 'Chat',
            value2: '',
            options: ['Chat', 'Call'],
            media: 'Media',
            mediaOptions: ['Media', 'Link', 'Docs'],
            activeChat: 'PrimeTek Team',
            menuItems: [
                {
                    label: 'Group Info',
                    icon: 'pi pi-info-circle'
                },
                {
                    label: 'Leave group',
                    icon: 'pi pi-sign-out'
                }
            ],
            chats: [
                {
                    image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar11.jpg',
                    name: 'Cody Fisher',
                    capName: 'CF',
                    active: true,
                    unreadMessageCount: 8,
                    time: '12.30',
                    lastMessage: "Hey there! I've heard about PrimeVue. Any cool tips for getting started?"
                },
                {
                    image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar-primetek.png',
                    name: 'PrimeTek Team',
                    capName: 'PT',
                    active: undefined,
                    unreadMessageCount: 0,
                    time: '11.15',
                    lastMessage: "Let's implement PrimeVue. Elevating our UI game! 🚀"
                },
                {
                    image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar2.png',
                    name: 'Jerome Bell',
                    capName: 'JB',
                    active: true,
                    unreadMessageCount: 4,
                    time: '11.15',
                    lastMessage: "Absolutely! PrimeVue's documentation is gold—simplifies our UI work."
                },
                {
                    image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar12.jpg',
                    name: 'Robert Fox',
                    capName: 'RF',
                    active: false,
                    unreadMessageCount: 0,
                    time: '11.15',
                    lastMessage: "Interesting! PrimeVue sounds amazing. What's your favorite feature?"
                },
                {
                    image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar13.jpg',
                    name: 'Esther Howard',
                    capName: 'EH',
                    active: true,
                    unreadMessageCount: 9,
                    time: '11.15',
                    lastMessage: 'Quick one, team! Anyone using PrimeVue for mobile app development?'
                },
                {
                    image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar9.jpg',
                    name: 'Darlene Robertson',
                    capName: 'DR',
                    active: false,
                    unreadMessageCount: 0,
                    time: '11.15',
                    lastMessage: "Just explored PrimeVue's themes. Can we talk about those stunning designs? 😍"
                },
                {
                    image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar6.png',
                    name: 'Ralph Edwards',
                    capName: 'RE',
                    active: false,
                    unreadMessageCount: 0,
                    time: '11.15',
                    lastMessage: 'PrimeVue is a game-changer, right? What are your thoughts, folks?'
                },
                { image: '', name: 'Ronald Richards', capName: 'RR', active: false, unreadMessageCount: 0, time: '11.15', lastMessage: "Jumping in! PrimeVue's community forum is buzzing. Any engaging discussions?" },
                { image: '', name: 'Kristin Watson', capName: 'KW', active: false, unreadMessageCount: 0, time: '11.15', lastMessage: 'Sharing a quick win-PrimeVue tutorials are leveling up my UI skills. 👩‍💻' },
                {
                    image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar7.png',
                    name: 'Darrell Steward',
                    capName: 'DS',
                    active: false,
                    unreadMessageCount: 0,
                    time: '11.15',
                    lastMessage: "Reflecting on PrimeVue's impact on our workflow. What's your take?"
                }
            ],
            chatMessages: [
                { id: 1, attachment: '', name: '', image: '', capName: 'OS', type: 'received', message: "Awesome! What's the standout feature?" },
                { id: 2, attachment: '', name: '', image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar8.png', capName: 'A', type: 'received', message: 'PrimeVue rocks! Simplifies UI dev with versatile components.' },
                { id: 3, attachment: '', name: '', image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar11.jpg', capName: 'A', type: 'received', message: 'Intriguing! Tell us more about its impact.' },
                {
                    id: 4,
                    attachment: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/message-image.png',
                    name: '',
                    image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar2.png',
                    capName: 'A',
                    type: 'received',
                    message: "It's design-neutral and compatible with Tailwind. Features accessible, high-grade components!"
                },
                { id: 5, attachment: '', name: '', image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar5.png', capName: 'A', type: 'sent', message: 'Customizable themes, responsive design – UI excellence!' },
                { id: 6, attachment: '', name: '', image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar8.png', capName: 'A', type: 'received', message: 'Love it! Fast-tracking our development is key.' },
                { id: 7, attachment: '', name: '', image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar6.png', capName: 'A', type: 'received', message: 'Documentation rocks too – smooth integration for all.' },
                {
                    id: 8,
                    attachment: '',
                    name: '',
                    image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar5.png',
                    capName: 'B',
                    type: 'sent',
                    message: 'The flexibility and ease of use are truly impressive. Have you explored the new components?'
                },
                {
                    id: 9,
                    attachment: '',
                    name: '',
                    image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar12.jpg',
                    capName: 'C',
                    type: 'received',
                    message: 'Absolutely, the new calendar component has saved us a ton of development time!'
                },
                {
                    id: 10,
                    attachment: '',
                    name: '',
                    image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar13.jpg',
                    capName: 'D',
                    type: 'received',
                    message: "And the accessibility features are top-notch. It's great to see a library focusing on inclusivity."
                },
                {
                    id: 11,
                    attachment: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/message-image.png',
                    name: '',
                    image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar5.png',
                    capName: 'E',
                    type: 'sent',
                    message: "I couldn't agree more. Plus, the documentation is incredibly thorough, which makes onboarding new team members a breeze."
                },
                {
                    id: 12,
                    attachment: '',
                    name: '',
                    image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar6.png',
                    capName: 'F',
                    type: 'received',
                    message: 'Do you have any tips for optimizing performance when using multiple complex components?'
                },
                {
                    id: 13,
                    attachment: '',
                    name: '',
                    image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar11.jpg',
                    capName: 'G',
                    type: 'received',
                    message: 'Yes! Lazy loading and code splitting can make a huge difference, especially in larger applications.'
                },
                {
                    id: 14,
                    attachment: '',
                    name: '',
                    image: '',
                    capName: 'HS',
                    type: 'received',
                    message: "I've also found that leveraging the component's internal state management capabilities can help streamline data flow and improve performance."
                },
                {
                    id: 15,
                    attachment: '',
                    name: '',
                    image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar5.png',
                    capName: 'H',
                    type: 'sent',
                    message: "That's great advice. It's amazing how much detail and thought has gone into making PrimeVue such a powerful tool for developers."
                }
            ],
            chatMedia: [
                'https://www.primefaces.org/cdn/primevue/images/landing/apps/chat-image1.png',
                'https://www.primefaces.org/cdn/primevue/images/landing/apps/chat-image2.png',
                'https://www.primefaces.org/cdn/primevue/images/landing/apps/chat-image3.png',
                'https://www.primefaces.org/cdn/primevue/images/landing/apps/chat-image4.png',
                'https://www.primefaces.org/cdn/primevue/images/landing/apps/chat-image5.png'
            ],
            members: [
                { name: 'Robin Jonas', capName: 'RJ', image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar2.png' },
                { name: 'Cameron Williamson', capName: 'CW', image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar11.jpg' },
                { name: 'Eleanor Pena', capName: 'EP', image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar5.png' },
                { name: 'Arlene McCoy', capName: 'AM', image: 'https://www.primefaces.org/cdn/primevue/images/landing/apps/avatar8.png' },
                { name: 'Dianne Russell', capName: 'DR', image: '' }
            ]
        };
    },
    methods: {
        toggle(event) {
            this.$refs.menu.toggle(event);
        }
    },
    components: {}
};
</script>
