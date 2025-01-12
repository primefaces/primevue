<template>
    <DocSectionText v-bind="$attrs">
        <p>Animation classes are defined with the <i>enterClass</i> and <i>leaveClass</i> properties. This example utilizes PrimeFlex animations however any valid CSS animation is supported.</p>
    </DocSectionText>
    <div class="card flex flex-col items-center overflow-hidden">
        <div class="flex flex-col items-center gap-2">
            <span class="text-xl font-medium">Scroll Down</span>
            <span class="animate-bounce h-8 w-8 bg-primary text-primary-contrast rounded-full inline-flex items-center justify-center">
                <i class="pi pi-arrow-down" />
            </span>
        </div>
        <div class="h-[30rem]"></div>
        <div class="flex flex-wrap gap-8">
            <div
                v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }"
                class="flex flex-col border border-surface shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
            >
                <div class="rounded-full bg-primary text-primary-contrast w-12 h-12 flex items-center justify-center">
                    <i class="pi pi-user !text-2xl"></i>
                </div>
                <span class="text-2xl font-bold">Individual</span>
                <span class="text-muted-color text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div
                v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }"
                class="flex flex-col border border-surface shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
            >
                <div class="rounded-full bg-primary text-primary-contrast w-12 h-12 flex items-center justify-center">
                    <i class="pi pi-users !text-2xl"></i>
                </div>
                <span class="text-2xl font-bold">Team</span>
                <span class="text-muted-color text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div
                v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-r-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }"
                class="flex flex-col border border-surface shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
            >
                <div class="rounded-full bg-primary text-primary-contrast w-12 h-12 flex items-center justify-center">
                    <i class="pi pi-building !text-2xl"></i>
                </div>
                <span class="text-2xl font-bold">Enterprise</span>
                <span class="text-muted-color text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
        </div>
        <div class="h-[30rem]"></div>
        <div class="flex flex-wrap gap-8">
            <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000' }" class="flex flex-col border border-primary-200 shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4">
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" size="xlarge" />
                <span class="text-2xl font-medium">Jenna Thompson</span>
                <span class="text-muted-color text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000' }" class="flex flex-col border border-primary-200 shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4">
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" shape="circle" size="xlarge" />
                <span class="text-2xl font-medium">Isabel Garcia</span>
                <span class="text-muted-color text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000' }" class="flex flex-col border border-primary-200 shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4">
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle" size="xlarge" />
                <span class="text-2xl font-medium">Xavier Mason</span>
                <span class="text-muted-color text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
        </div>
        <div class="h-[30rem]"></div>
        <div class="flex flex-wrap gap-8">
            <div
                v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 spin-in-45 slide-in-from-t-12 animate-duration-1000' }"
                class="flex flex-col bg-primary text-primary-contrast border-primary shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
            >
                <span class="bg-white/10 text-xl font-medium rounded-xl px-4 py-2">850K</span>
                <span class="text-2xl font-bold">Customers</span>
                <span class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div
                v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-50 slide-in-from-t-20 animate-duration-1000' }"
                class="flex flex-col bg-primary text-primary-contrast border-primary shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
            >
                <span class="bg-white/10 text-xl font-medium rounded-xl px-4 py-2">$1.5M</span>
                <span class="text-2xl font-bold">Revenue</span>
                <span class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div
                v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 spin-in-[-45deg] slide-in-from-t-16 animate-duration-1000' }"
                class="flex flex-col bg-primary text-primary-contrast border-primary shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
            >
                <span class="bg-white/10 text-xl font-medium rounded-xl px-4 py-2">140K</span>
                <span class="text-2xl font-bold">Sales</span>
                <span class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
        </div>
        <div class="h-[30rem]"></div>
        <div class="flex flex-wrap gap-8">
            <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-50 animate-duration-1000' }" class="flex flex-col bg-purple-500 text-white border-purple-500 shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4">
                <div class="rounded-full border-2 border-white w-12 h-12 flex items-center justify-center">
                    <i class="pi pi-wifi !text-2xl"></i>
                </div>
                <span class="text-2xl font-bold">Bandwidth</span>
                <span class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-75 animate-duration-1000' }" class="flex flex-col bg-teal-500 text-white border-teal-500 shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4">
                <div class="rounded-full border-2 border-white w-12 h-12 flex items-center justify-center">
                    <i class="pi pi-database !text-2xl"></i>
                </div>
                <span class="text-2xl font-bold">Storage</span>
                <span class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-50 animate-duration-1000' }" class="flex flex-col bg-indigo-500 text-white border-indigo-500 shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4">
                <div class="rounded-full border-2 border-white w-12 h-12 flex items-center justify-center">
                    <i class="pi pi-arrows-v !text-2xl"></i>
                </div>
                <span class="text-2xl font-bold">Requests</span>
                <span class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<div class="flex flex-wrap gap-8">
    <div
        v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }"
        class="flex flex-col border border-surface shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
    >
        <div class="rounded-full bg-primary text-primary-contrast w-12 h-12 flex items-center justify-center">
            <i class="pi pi-user !text-2xl"></i>
        </div>
        <span class="text-2xl font-bold">Individual</span>
        <span class="text-muted-color text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
    </div>
    <div
        v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }"
        class="flex flex-col border border-surface shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
    >
        <div class="rounded-full bg-primary text-primary-contrast w-12 h-12 flex items-center justify-center">
            <i class="pi pi-users !text-2xl"></i>
        </div>
        <span class="text-2xl font-bold">Team</span>
        <span class="text-muted-color text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
    </div>
    <div
        v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-r-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }"
        class="flex flex-col border border-surface shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
    >
        <div class="rounded-full bg-primary text-primary-contrast w-12 h-12 flex items-center justify-center">
            <i class="pi pi-building !text-2xl"></i>
        </div>
        <span class="text-2xl font-bold">Enterprise</span>
        <span class="text-muted-color text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
    </div>
</div>

<div class="flex flex-wrap gap-8">
    <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000' }" class="flex flex-col border border-primary-200 shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4">
        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" size="xlarge" />
        <span class="text-2xl font-medium">Jenna Thompson</span>
        <span class="text-muted-color text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
    </div>
    <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000' }" class="flex flex-col border border-primary-200 shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4">
        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" shape="circle" size="xlarge" />
        <span class="text-2xl font-medium">Isabel Garcia</span>
        <span class="text-muted-color text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
    </div>
    <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000' }" class="flex flex-col border border-primary-200 shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4">
        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle" size="xlarge" />
        <span class="text-2xl font-medium">Xavier Mason</span>
        <span class="text-muted-color text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
    </div>
</div>

<div class="flex flex-wrap gap-8">
    <div
        v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 spin-in-45 slide-in-from-t-12 animate-duration-1000' }"
        class="flex flex-col bg-primary text-primary-contrast border-primary shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
    >
        <span class="bg-white/10 text-xl font-medium rounded-xl px-4 py-2">850K</span>
        <span class="text-2xl font-bold">Customers</span>
        <span class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
    </div>
    <div
        v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-50 slide-in-from-t-20 animate-duration-1000' }"
        class="flex flex-col bg-primary text-primary-contrast border-primary shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
    >
        <span class="bg-white/10 text-xl font-medium rounded-xl px-4 py-2">$1.5M</span>
        <span class="text-2xl font-bold">Revenue</span>
        <span class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
    </div>
    <div
        v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 spin-in-[-45deg] slide-in-from-t-16 animate-duration-1000' }"
        class="flex flex-col bg-primary text-primary-contrast border-primary shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
    >
        <span class="bg-white/10 text-xl font-medium rounded-xl px-4 py-2">140K</span>
        <span class="text-2xl font-bold">Sales</span>
        <span class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
    </div>
</div>

<div class="flex flex-wrap gap-8">
    <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-50 animate-duration-1000' }" class="flex flex-col bg-purple-500 text-white border-purple-500 shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4">
        <div class="rounded-full border-2 border-white w-12 h-12 flex items-center justify-center">
            <i class="pi pi-wifi !text-2xl"></i>
        </div>
        <span class="text-2xl font-bold">Bandwidth</span>
        <span class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
    </div>
    <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-75 animate-duration-1000' }" class="flex flex-col bg-teal-500 text-white border-teal-500 shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4">
        <div class="rounded-full border-2 border-white w-12 h-12 flex items-center justify-center">
            <i class="pi pi-database !text-2xl"></i>
        </div>
        <span class="text-2xl font-bold">Storage</span>
        <span class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
    </div>
    <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-50 animate-duration-1000' }" class="flex flex-col bg-indigo-500 text-white border-indigo-500 shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4">
        <div class="rounded-full border-2 border-white w-12 h-12 flex items-center justify-center">
            <i class="pi pi-arrows-v !text-2xl"></i>
        </div>
        <span class="text-2xl font-bold">Requests</span>
        <span class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
    </div>
</div>
`,
                options: `
<template>
    <div class="card flex flex-col items-center overflow-hidden">
        <div class="flex flex-col items-center gap-2">
            <span class="text-xl font-medium">Scroll Down</span>
            <span class="animate-bounce h-8 w-8 bg-primary text-primary-contrast rounded-full inline-flex items-center justify-center">
                <i class="pi pi-arrow-down" />
            </span>
        </div>
        <div class="h-[30rem]"></div>
        <div class="flex flex-wrap gap-8">
            <div
                v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }"
                class="flex flex-col border border-surface shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
            >
                <div class="rounded-full bg-primary text-primary-contrast w-12 h-12 flex items-center justify-center">
                    <i class="pi pi-user !text-2xl"></i>
                </div>
                <span class="text-2xl font-bold">Individual</span>
                <span class="text-muted-color text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div
                v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }"
                class="flex flex-col border border-surface shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
            >
                <div class="rounded-full bg-primary text-primary-contrast w-12 h-12 flex items-center justify-center">
                    <i class="pi pi-users !text-2xl"></i>
                </div>
                <span class="text-2xl font-bold">Team</span>
                <span class="text-muted-color text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div
                v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-r-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }"
                class="flex flex-col border border-surface shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
            >
                <div class="rounded-full bg-primary text-primary-contrast w-12 h-12 flex items-center justify-center">
                    <i class="pi pi-building !text-2xl"></i>
                </div>
                <span class="text-2xl font-bold">Enterprise</span>
                <span class="text-muted-color text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
        </div>
        <div class="h-[30rem]"></div>
        <div class="flex flex-wrap gap-8">
            <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000' }" class="flex flex-col border border-primary-200 shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4">
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" size="xlarge" />
                <span class="text-2xl font-medium">Jenna Thompson</span>
                <span class="text-muted-color text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000' }" class="flex flex-col border border-primary-200 shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4">
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" shape="circle" size="xlarge" />
                <span class="text-2xl font-medium">Isabel Garcia</span>
                <span class="text-muted-color text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000' }" class="flex flex-col border border-primary-200 shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4">
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle" size="xlarge" />
                <span class="text-2xl font-medium">Xavier Mason</span>
                <span class="text-muted-color text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
        </div>
        <div class="h-[30rem]"></div>
        <div class="flex flex-wrap gap-8">
            <div
                v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 spin-in-45 slide-in-from-t-12 animate-duration-1000' }"
                class="flex flex-col bg-primary text-primary-contrast border-primary shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
            >
                <span class="bg-white/10 text-xl font-medium rounded-xl px-4 py-2">850K</span>
                <span class="text-2xl font-bold">Customers</span>
                <span class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div
                v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-50 slide-in-from-t-20 animate-duration-1000' }"
                class="flex flex-col bg-primary text-primary-contrast border-primary shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
            >
                <span class="bg-white/10 text-xl font-medium rounded-xl px-4 py-2">$1.5M</span>
                <span class="text-2xl font-bold">Revenue</span>
                <span class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div
                v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 spin-in-[-45deg] slide-in-from-t-16 animate-duration-1000' }"
                class="flex flex-col bg-primary text-primary-contrast border-primary shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
            >
                <span class="bg-white/10 text-xl font-medium rounded-xl px-4 py-2">140K</span>
                <span class="text-2xl font-bold">Sales</span>
                <span class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
        </div>
        <div class="h-[30rem]"></div>
        <div class="flex flex-wrap gap-8">
            <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-50 animate-duration-1000' }" class="flex flex-col bg-purple-500 text-white border-purple-500 shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4">
                <div class="rounded-full border-2 border-white w-12 h-12 flex items-center justify-center">
                    <i class="pi pi-wifi !text-2xl"></i>
                </div>
                <span class="text-2xl font-bold">Bandwidth</span>
                <span class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-75 animate-duration-1000' }" class="flex flex-col bg-teal-500 text-white border-teal-500 shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4">
                <div class="rounded-full border-2 border-white w-12 h-12 flex items-center justify-center">
                    <i class="pi pi-database !text-2xl"></i>
                </div>
                <span class="text-2xl font-bold">Storage</span>
                <span class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-50 animate-duration-1000' }" class="flex flex-col bg-indigo-500 text-white border-indigo-500 shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4">
                <div class="rounded-full border-2 border-white w-12 h-12 flex items-center justify-center">
                    <i class="pi pi-arrows-v !text-2xl"></i>
                </div>
                <span class="text-2xl font-bold">Requests</span>
                <span class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
        </div>
    </div>
</template>
`,
                composition: `
<template>
    <div class="card flex flex-col items-center overflow-hidden">
        <div class="flex flex-col items-center gap-2">
            <span class="text-xl font-medium">Scroll Down</span>
            <span class="animate-bounce h-8 w-8 bg-primary text-primary-contrast rounded-full inline-flex items-center justify-center">
                <i class="pi pi-arrow-down" />
            </span>
        </div>
        <div class="h-[30rem]"></div>
        <div class="flex flex-wrap gap-8">
            <div
                v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }"
                class="flex flex-col border border-surface shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
            >
                <div class="rounded-full bg-primary text-primary-contrast w-12 h-12 flex items-center justify-center">
                    <i class="pi pi-user !text-2xl"></i>
                </div>
                <span class="text-2xl font-bold">Individual</span>
                <span class="text-muted-color text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div
                v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }"
                class="flex flex-col border border-surface shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
            >
                <div class="rounded-full bg-primary text-primary-contrast w-12 h-12 flex items-center justify-center">
                    <i class="pi pi-users !text-2xl"></i>
                </div>
                <span class="text-2xl font-bold">Team</span>
                <span class="text-muted-color text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div
                v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-r-8 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }"
                class="flex flex-col border border-surface shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
            >
                <div class="rounded-full bg-primary text-primary-contrast w-12 h-12 flex items-center justify-center">
                    <i class="pi pi-building !text-2xl"></i>
                </div>
                <span class="text-2xl font-bold">Enterprise</span>
                <span class="text-muted-color text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
        </div>
        <div class="h-[30rem]"></div>
        <div class="flex flex-wrap gap-8">
            <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000' }" class="flex flex-col border border-primary-200 shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4">
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" size="xlarge" />
                <span class="text-2xl font-medium">Jenna Thompson</span>
                <span class="text-muted-color text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000' }" class="flex flex-col border border-primary-200 shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4">
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" shape="circle" size="xlarge" />
                <span class="text-2xl font-medium">Isabel Garcia</span>
                <span class="text-muted-color text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000' }" class="flex flex-col border border-primary-200 shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4">
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle" size="xlarge" />
                <span class="text-2xl font-medium">Xavier Mason</span>
                <span class="text-muted-color text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
        </div>
        <div class="h-[30rem]"></div>
        <div class="flex flex-wrap gap-8">
            <div
                v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 spin-in-45 slide-in-from-t-12 animate-duration-1000' }"
                class="flex flex-col bg-primary text-primary-contrast border-primary shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
            >
                <span class="bg-white/10 text-xl font-medium rounded-xl px-4 py-2">850K</span>
                <span class="text-2xl font-bold">Customers</span>
                <span class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div
                v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-50 slide-in-from-t-20 animate-duration-1000' }"
                class="flex flex-col bg-primary text-primary-contrast border-primary shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
            >
                <span class="bg-white/10 text-xl font-medium rounded-xl px-4 py-2">$1.5M</span>
                <span class="text-2xl font-bold">Revenue</span>
                <span class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div
                v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 spin-in-[-45deg] slide-in-from-t-16 animate-duration-1000' }"
                class="flex flex-col bg-primary text-primary-contrast border-primary shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
            >
                <span class="bg-white/10 text-xl font-medium rounded-xl px-4 py-2">140K</span>
                <span class="text-2xl font-bold">Sales</span>
                <span class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
        </div>
        <div class="h-[30rem]"></div>
        <div class="flex flex-wrap gap-8">
            <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-50 animate-duration-1000' }" class="flex flex-col bg-purple-500 text-white border-purple-500 shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4">
                <div class="rounded-full border-2 border-white w-12 h-12 flex items-center justify-center">
                    <i class="pi pi-wifi !text-2xl"></i>
                </div>
                <span class="text-2xl font-bold">Bandwidth</span>
                <span class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-75 animate-duration-1000' }" class="flex flex-col bg-teal-500 text-white border-teal-500 shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4">
                <div class="rounded-full border-2 border-white w-12 h-12 flex items-center justify-center">
                    <i class="pi pi-database !text-2xl"></i>
                </div>
                <span class="text-2xl font-bold">Storage</span>
                <span class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-50 animate-duration-1000' }" class="flex flex-col bg-indigo-500 text-white border-indigo-500 shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4">
                <div class="rounded-full border-2 border-white w-12 h-12 flex items-center justify-center">
                    <i class="pi pi-arrows-v !text-2xl"></i>
                </div>
                <span class="text-2xl font-bold">Requests</span>
                <span class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
        </div>
    </div>
</template>
`
            }
        };
    }
};
</script>
