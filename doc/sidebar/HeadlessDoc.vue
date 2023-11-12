<template>
    <DocSectionText v-bind="$attrs">
        <p>Headless mode is enabled by defining a <i>container</i> slot that lets you implement entire UI instead of the default elements.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Sidebar v-model:visible="visible">
            <template #container="{ closeCallback }">
                <div class="flex flex-column h-full">
                    <div class="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
                        <span class="inline-flex align-items-center gap-2">
                            <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z"
                                    fill="var(--primary-color)"
                                />
                                <path
                                    d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z"
                                    fill="var(--text-color)"
                                />
                            </svg>
                            <span class="font-semibold text-2xl text-primary">Your Logo</span>
                        </span>
                        <span>
                            <Button type="button" @click="closeCallback" icon="pi pi-times" rounded outlined class="h-2rem w-2rem"></Button>
                        </span>
                    </div>
                    <div class="overflow-y-auto">
                        <ul class="list-none p-3 m-0">
                            <li>
                                <div
                                    v-ripple
                                    v-styleclass="{
                                        selector: '@next',
                                        enterClass: 'hidden',
                                        enterActiveClass: 'slidedown',
                                        leaveToClass: 'hidden',
                                        leaveActiveClass: 'slideup'
                                    }"
                                    class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple"
                                >
                                    <span class="font-medium">FAVORITES</span>
                                    <i class="pi pi-chevron-down"></i>
                                </div>
                                <ul class="list-none p-0 m-0 overflow-hidden">
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-home mr-2"></i>
                                            <span class="font-medium">Dashboard</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-bookmark mr-2"></i>
                                            <span class="font-medium">Bookmarks</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            v-ripple
                                            v-styleclass="{
                                                selector: '@next',
                                                enterClass: 'hidden',
                                                enterActiveClass: 'slidedown',
                                                leaveToClass: 'hidden',
                                                leaveActiveClass: 'slideup'
                                            }"
                                            class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                                        >
                                            <i class="pi pi-chart-line mr-2"></i>
                                            <span class="font-medium">Reports</span>
                                            <i class="pi pi-chevron-down ml-auto"></i>
                                        </a>
                                        <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                            <li>
                                                <a
                                                    v-ripple
                                                    v-styleclass="{
                                                        selector: '@next',
                                                        enterClass: 'hidden',
                                                        enterActiveClass: 'slidedown',
                                                        leaveToClass: 'hidden',
                                                        leaveActiveClass: 'slideup'
                                                    }"
                                                    class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                                                >
                                                    <i class="pi pi-chart-line mr-2"></i>
                                                    <span class="font-medium">Revenue</span>
                                                    <i class="pi pi-chevron-down ml-auto"></i>
                                                </a>
                                                <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                    <li>
                                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                            <i class="pi pi-table mr-2"></i>
                                                            <span class="font-medium">View</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                            <i class="pi pi-search mr-2"></i>
                                                            <span class="font-medium">Search</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                    <i class="pi pi-chart-line mr-2"></i>
                                                    <span class="font-medium">Expenses</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-users mr-2"></i>
                                            <span class="font-medium">Team</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-comments mr-2"></i>
                                            <span class="font-medium">Messages</span>
                                            <span class="inline-flex align-items-center justify-content-center ml-auto bg-primary border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-calendar mr-2"></i>
                                            <span class="font-medium">Calendar</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-cog mr-2"></i>
                                            <span class="font-medium">Settings</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul class="list-none p-3 m-0">
                            <li>
                                <div
                                    v-ripple
                                    v-styleclass="{
                                        selector: '@next',
                                        enterClass: 'hidden',
                                        enterActiveClass: 'slidedown',
                                        leaveToClass: 'hidden',
                                        leaveActiveClass: 'slideup'
                                    }"
                                    class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple"
                                >
                                    <span class="font-medium">APPLICATION</span>
                                    <i class="pi pi-chevron-down"></i>
                                </div>
                                <ul class="list-none p-0 m-0 overflow-hidden">
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-folder mr-2"></i>
                                            <span class="font-medium">Projects</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-chart-bar mr-2"></i>
                                            <span class="font-medium">Performance</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-cog mr-2"></i>
                                            <span class="font-medium">Settings</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="mt-auto">
                        <hr class="mb-3 mx-3 border-top-1 border-none surface-border" />
                        <a v-ripple class="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                            <span class="font-bold">Amy Elsner</span>
                        </a>
                    </div>
                </div>
            </template>
        </Sidebar>
        <Button icon="pi pi-bars" @click="visible = true" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            visible: false,
            code: {
                basic: `
<Sidebar v-model:visible="visible">
    <template #container="{ closeCallback }">
        <div class="flex flex-column h-full">
            <div class="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
                <span class="inline-flex align-items-center gap-2">
                    <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="..." fill="var(--primary-color-color)" />
                        <path d="..." fill="var(--text-color)" />
                    </svg>
                    <span class="font-semibold text-2xl text-primary">Your Logo</span>
                </span>
                <span>
                    <Button type="button" @click="closeCallback" icon="pi pi-times" rounded outlined class="h-2rem w-2rem"></Button>
                </span>
            </div>
            <div class="overflow-y-auto">
                <ul class="list-none p-3 m-0">
                    <li>
                        <div
                            v-ripple
                            v-styleclass="{
                                selector: '@next',
                                enterClass: 'hidden',
                                enterActiveClass: 'slidedown',
                                leaveToClass: 'hidden',
                                leaveActiveClass: 'slideup'
                            }"
                            class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple"
                        >
                            <span class="font-medium">FAVORITES</span>
                            <i class="pi pi-chevron-down"></i>
                        </div>
                        <ul class="list-none p-0 m-0 overflow-hidden">
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-home mr-2"></i>
                                    <span class="font-medium">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-bookmark mr-2"></i>
                                    <span class="font-medium">Bookmarks</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    v-ripple
                                    v-styleclass="{
                                        selector: '@next',
                                        enterClass: 'hidden',
                                        enterActiveClass: 'slidedown',
                                        leaveToClass: 'hidden',
                                        leaveActiveClass: 'slideup'
                                    }"
                                    class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                                >
                                    <i class="pi pi-chart-line mr-2"></i>
                                    <span class="font-medium">Reports</span>
                                    <i class="pi pi-chevron-down ml-auto"></i>
                                </a>
                                <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                    <li>
                                        <a
                                            v-ripple
                                            v-styleclass="{
                                                selector: '@next',
                                                enterClass: 'hidden',
                                                enterActiveClass: 'slidedown',
                                                leaveToClass: 'hidden',
                                                leaveActiveClass: 'slideup'
                                            }"
                                            class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                                        >
                                            <i class="pi pi-chart-line mr-2"></i>
                                            <span class="font-medium">Revenue</span>
                                            <i class="pi pi-chevron-down ml-auto"></i>
                                        </a>
                                        <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                            <li>
                                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                    <i class="pi pi-table mr-2"></i>
                                                    <span class="font-medium">View</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                    <i class="pi pi-search mr-2"></i>
                                                    <span class="font-medium">Search</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-chart-line mr-2"></i>
                                            <span class="font-medium">Expenses</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-users mr-2"></i>
                                    <span class="font-medium">Team</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-comments mr-2"></i>
                                    <span class="font-medium">Messages</span>
                                    <span class="inline-flex align-items-center justify-content-center ml-auto bg-primary border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-calendar mr-2"></i>
                                    <span class="font-medium">Calendar</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-cog mr-2"></i>
                                    <span class="font-medium">Settings</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul class="list-none p-3 m-0">
                    <li>
                        <div
                            v-ripple
                            v-styleclass="{
                                selector: '@next',
                                enterClass: 'hidden',
                                enterActiveClass: 'slidedown',
                                leaveToClass: 'hidden',
                                leaveActiveClass: 'slideup'
                            }"
                            class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple"
                        >
                            <span class="font-medium">APPLICATION</span>
                            <i class="pi pi-chevron-down"></i>
                        </div>
                        <ul class="list-none p-0 m-0 overflow-hidden">
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-folder mr-2"></i>
                                    <span class="font-medium">Projects</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-chart-bar mr-2"></i>
                                    <span class="font-medium">Performance</span>
                                </a>
                            </li>
                            <li>
                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                    <i class="pi pi-cog mr-2"></i>
                                    <span class="font-medium">Settings</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="mt-auto">
                <hr class="mb-3 mx-3 border-top-1 border-none surface-border" />
                <a v-ripple class="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                    <Avatar image="/images/avatar/amyelsner.png" shape="circle" />
                    <span class="font-bold">Amy Elsner</span>
                </a>
            </div>
        </div>
    </template>
</Sidebar>
<Button icon="pi pi-bars" @click="visible = true" />
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Sidebar v-model:visible="visible">
            <template #container="{ closeCallback }">
                <div class="flex flex-column h-full">
                    <div class="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
                        <span class="inline-flex align-items-center gap-2">
                            <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z"
                                    fill="var(--primary-color)"
                                />
                                <path
                                    d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z"
                                    fill="var(--text-color)"
                                />
                            </svg>
                            <span class="font-semibold text-2xl text-primary">Your Logo</span>
                        </span>
                        <span>
                            <Button type="button" @click="closeCallback" icon="pi pi-times" rounded outlined class="h-2rem w-2rem"></Button>
                        </span>
                    </div>
                    <div class="overflow-y-auto">
                        <ul class="list-none p-3 m-0">
                            <li>
                                <div
                                    v-ripple
                                    v-styleclass="{
                                        selector: '@next',
                                        enterClass: 'hidden',
                                        enterActiveClass: 'slidedown',
                                        leaveToClass: 'hidden',
                                        leaveActiveClass: 'slideup'
                                    }"
                                    class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple"
                                >
                                    <span class="font-medium">FAVORITES</span>
                                    <i class="pi pi-chevron-down"></i>
                                </div>
                                <ul class="list-none p-0 m-0 overflow-hidden">
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-home mr-2"></i>
                                            <span class="font-medium">Dashboard</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-bookmark mr-2"></i>
                                            <span class="font-medium">Bookmarks</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            v-ripple
                                            v-styleclass="{
                                                selector: '@next',
                                                enterClass: 'hidden',
                                                enterActiveClass: 'slidedown',
                                                leaveToClass: 'hidden',
                                                leaveActiveClass: 'slideup'
                                            }"
                                            class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                                        >
                                            <i class="pi pi-chart-line mr-2"></i>
                                            <span class="font-medium">Reports</span>
                                            <i class="pi pi-chevron-down ml-auto"></i>
                                        </a>
                                        <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                            <li>
                                                <a
                                                    v-ripple
                                                    v-styleclass="{
                                                        selector: '@next',
                                                        enterClass: 'hidden',
                                                        enterActiveClass: 'slidedown',
                                                        leaveToClass: 'hidden',
                                                        leaveActiveClass: 'slideup'
                                                    }"
                                                    class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                                                >
                                                    <i class="pi pi-chart-line mr-2"></i>
                                                    <span class="font-medium">Revenue</span>
                                                    <i class="pi pi-chevron-down ml-auto"></i>
                                                </a>
                                                <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                    <li>
                                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                            <i class="pi pi-table mr-2"></i>
                                                            <span class="font-medium">View</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                            <i class="pi pi-search mr-2"></i>
                                                            <span class="font-medium">Search</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                    <i class="pi pi-chart-line mr-2"></i>
                                                    <span class="font-medium">Expenses</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-users mr-2"></i>
                                            <span class="font-medium">Team</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-comments mr-2"></i>
                                            <span class="font-medium">Messages</span>
                                            <span class="inline-flex align-items-center justify-content-center ml-auto bg-primary border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-calendar mr-2"></i>
                                            <span class="font-medium">Calendar</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-cog mr-2"></i>
                                            <span class="font-medium">Settings</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul class="list-none p-3 m-0">
                            <li>
                                <div
                                    v-ripple
                                    v-styleclass="{
                                        selector: '@next',
                                        enterClass: 'hidden',
                                        enterActiveClass: 'slidedown',
                                        leaveToClass: 'hidden',
                                        leaveActiveClass: 'slideup'
                                    }"
                                    class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple"
                                >
                                    <span class="font-medium">APPLICATION</span>
                                    <i class="pi pi-chevron-down"></i>
                                </div>
                                <ul class="list-none p-0 m-0 overflow-hidden">
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-folder mr-2"></i>
                                            <span class="font-medium">Projects</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-chart-bar mr-2"></i>
                                            <span class="font-medium">Performance</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-cog mr-2"></i>
                                            <span class="font-medium">Settings</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="mt-auto">
                        <hr class="mb-3 mx-3 border-top-1 border-none surface-border" />
                        <a v-ripple class="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                            <span class="font-bold">Amy Elsner</span>
                        </a>
                    </div>
                </div>
            </template>
        </Sidebar>
        <Button icon="pi pi-bars" @click="visible = true" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Sidebar v-model:visible="visible">
            <template #container="{ closeCallback }">
                <div class="flex flex-column h-full">
                    <div class="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
                        <span class="inline-flex align-items-center gap-2">
                            <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z"
                                    fill="var(--primary-color)"
                                />
                                <path
                                    d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z"
                                    fill="var(--text-color)"
                                />
                            </svg>
                            <span class="font-semibold text-2xl text-primary">Your Logo</span>
                        </span>
                        <span>
                            <Button type="button" @click="closeCallback" icon="pi pi-times" rounded outlined class="h-2rem w-2rem"></Button>
                        </span>
                    </div>
                    <div class="overflow-y-auto">
                        <ul class="list-none p-3 m-0">
                            <li>
                                <div
                                    v-ripple
                                    v-styleclass="{
                                        selector: '@next',
                                        enterClass: 'hidden',
                                        enterActiveClass: 'slidedown',
                                        leaveToClass: 'hidden',
                                        leaveActiveClass: 'slideup'
                                    }"
                                    class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple"
                                >
                                    <span class="font-medium">FAVORITES</span>
                                    <i class="pi pi-chevron-down"></i>
                                </div>
                                <ul class="list-none p-0 m-0 overflow-hidden">
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-home mr-2"></i>
                                            <span class="font-medium">Dashboard</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-bookmark mr-2"></i>
                                            <span class="font-medium">Bookmarks</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            v-ripple
                                            v-styleclass="{
                                                selector: '@next',
                                                enterClass: 'hidden',
                                                enterActiveClass: 'slidedown',
                                                leaveToClass: 'hidden',
                                                leaveActiveClass: 'slideup'
                                            }"
                                            class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                                        >
                                            <i class="pi pi-chart-line mr-2"></i>
                                            <span class="font-medium">Reports</span>
                                            <i class="pi pi-chevron-down ml-auto"></i>
                                        </a>
                                        <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                            <li>
                                                <a
                                                    v-ripple
                                                    v-styleclass="{
                                                        selector: '@next',
                                                        enterClass: 'hidden',
                                                        enterActiveClass: 'slidedown',
                                                        leaveToClass: 'hidden',
                                                        leaveActiveClass: 'slideup'
                                                    }"
                                                    class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                                                >
                                                    <i class="pi pi-chart-line mr-2"></i>
                                                    <span class="font-medium">Revenue</span>
                                                    <i class="pi pi-chevron-down ml-auto"></i>
                                                </a>
                                                <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                    <li>
                                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                            <i class="pi pi-table mr-2"></i>
                                                            <span class="font-medium">View</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                            <i class="pi pi-search mr-2"></i>
                                                            <span class="font-medium">Search</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                    <i class="pi pi-chart-line mr-2"></i>
                                                    <span class="font-medium">Expenses</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-users mr-2"></i>
                                            <span class="font-medium">Team</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-comments mr-2"></i>
                                            <span class="font-medium">Messages</span>
                                            <span class="inline-flex align-items-center justify-content-center ml-auto bg-primary border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-calendar mr-2"></i>
                                            <span class="font-medium">Calendar</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-cog mr-2"></i>
                                            <span class="font-medium">Settings</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul class="list-none p-3 m-0">
                            <li>
                                <div
                                    v-ripple
                                    v-styleclass="{
                                        selector: '@next',
                                        enterClass: 'hidden',
                                        enterActiveClass: 'slidedown',
                                        leaveToClass: 'hidden',
                                        leaveActiveClass: 'slideup'
                                    }"
                                    class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple"
                                >
                                    <span class="font-medium">APPLICATION</span>
                                    <i class="pi pi-chevron-down"></i>
                                </div>
                                <ul class="list-none p-0 m-0 overflow-hidden">
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-folder mr-2"></i>
                                            <span class="font-medium">Projects</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-chart-bar mr-2"></i>
                                            <span class="font-medium">Performance</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-cog mr-2"></i>
                                            <span class="font-medium">Settings</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="mt-auto">
                        <hr class="mb-3 mx-3 border-top-1 border-none surface-border" />
                        <a v-ripple class="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                            <span class="font-bold">Amy Elsner</span>
                        </a>
                    </div>
                </div>
            </template>
        </Sidebar>
        <Button icon="pi pi-bars" @click="visible = true" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
<\/script>
`
            }
        };
    }
};
</script>
