<template>
    <DocSectionText v-bind="$attrs">
        <p>Custom content inside a message is defined with the <i>default</i> slot.</p>
        <div class="card">
            <Message
                :style="{
                    border: 'solid #696cff',
                    borderWidth: '0 0 0 6px',
                    color: '#696cff'
                }"
                class="border-primary w-full justify-content-start"
                severity="info"
            >
                <div class="flex align-items-center">
                    <img alt="logo" src="https://primefaces.org/cdn/primevue/images/logo.svg" width="20" />
                    <div class="ml-2">Always bet on Prime.</div>
                </div>
            </Message>
        </div>
        <DocSectionCode :code="code1" />

        <p><i>container</i> templating allows customizing the Message component.</p>
        <div class="card">
            <Message style="border: none">
                <template #container>
                    <div class="flex lg:align-items-start flex-column lg:flex-row p-4 bg-blue-100 border-round border-1 border-blue-300">
                        <div class="flex align-items-start">
                            <i class="pi pi-check-circle text-blue-900 text-2xl mr-3"></i>
                            <div class="mr-3 flex lg:align-items-start flex-column lg:flex-row">
                                <div class="text-blue-900 font-medium mr-0 lg:mr-2 mb-2 lg:mb-0 line-height-3">Information</div>
                                <p class="m-0 p-0 text-blue-700 line-height-3">Bibendum enim facilisis gravida neque convallis a cras semper.</p>
                            </div>
                        </div>
                        <a v-ripple class="flex align-items-center ml-auto no-underline text-blue-900 font-medium mt-3 lg:mt-0 cursor-pointer p-ripple">
                            <span>Learn More</span>
                            <i class="pi pi-arrow-right text-blue-900 ml-2"></i>
                        </a>
                    </div>
                </template>
            </Message>
        </div>
        <DocSectionCode :code="code2" />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
<Message
    :style="{
        border: 'solid #696cff',
        borderWidth: '0 0 0 6px',
        color: '#696cff'
    }"
    class="border-primary w-full justify-content-start"
    severity="info"
>
    <div class="flex align-items-center">
        <img alt="logo" src="/images/logo.svg" width="20" />
        <div class="ml-2">Always bet on Prime.</div>
    </div>
</Message>
`,
                options: `
<template>
    <div class="card">
        <Message
            :style="{
                border: 'solid #696cff',
                borderWidth: '0 0 0 6px',
                color: '#696cff'
            }"
            class="border-primary w-full justify-content-start"
            severity="info"
        >
            <div class="flex align-items-center">
                <img alt="logo" src="https://primefaces.org/cdn/primevue/images/logo.svg" width="20" />
                <div class="ml-2">Always bet on Prime.</div>
            </div>
        </Message>
    </div>
</template>
`,
                composition: `
<template>
    <div class="card">
        <Message
            :style="{
                border: 'solid #696cff',
                borderWidth: '0 0 0 6px',
                color: '#696cff'
            }"
            class="border-primary w-full justify-content-start"
            severity="info"
        >
            <div class="flex align-items-center">
                <img alt="logo" src="https://primefaces.org/cdn/primevue/images/logo.svg" width="20" />
                <div class="ml-2">Always bet on Prime.</div>
            </div>
        </Message>
    </div>
</template>`
            },
            code2: {
                basic: `
<Message style="border: none">
    <template #container>
        <div class="flex lg:align-items-start flex-column lg:flex-row p-4 bg-blue-100 border-round border-1 border-blue-300">
            <div class="flex align-items-start">
                <i class="pi pi-check-circle text-blue-900 text-2xl mr-3"></i>
                <div class="mr-3 flex lg:align-items-start flex-column lg:flex-row">
                    <div class="text-blue-900 font-medium mr-0 lg:mr-2 mb-2 lg:mb-0 line-height-3">Information</div>
                    <p class="m-0 p-0 text-blue-700 line-height-3">Bibendum enim facilisis gravida neque convallis a cras semper.</p>
                </div>
            </div>
            <a v-ripple class="flex align-items-center ml-auto no-underline text-blue-900 font-medium mt-3 lg:mt-0 cursor-pointer p-ripple">
                <span>Learn More</span>
                <i class="pi pi-arrow-right text-blue-900 ml-2"></i>
            </a>
        </div>
    </template>
</Message>
`,
                options: `
<template>
    <div class="card">
        <Message style="border: none">
            <template #container>
                <div class="flex lg:align-items-start flex-column lg:flex-row p-4 bg-blue-100 border-round border-1 border-blue-300">
                    <div class="flex align-items-start">
                        <i class="pi pi-check-circle text-blue-900 text-2xl mr-3"></i>
                        <div class="mr-3 flex lg:align-items-start flex-column lg:flex-row">
                            <div class="text-blue-900 font-medium mr-0 lg:mr-2 mb-2 lg:mb-0 line-height-3">Information</div>
                            <p class="m-0 p-0 text-blue-700 line-height-3">Bibendum enim facilisis gravida neque convallis a cras semper.</p>
                        </div>
                    </div>
                    <a v-ripple class="flex align-items-center ml-auto no-underline text-blue-900 font-medium mt-3 lg:mt-0 cursor-pointer p-ripple">
                        <span>Learn More</span>
                        <i class="pi pi-arrow-right text-blue-900 ml-2"></i>
                    </a>
                </div>
            </template>
        </Message>
    </div>
</template>
`,
                composition: `
<template>
    <div class="card">
        <Message style="border: none">
            <template #container>
                <div class="flex lg:align-items-start flex-column lg:flex-row p-4 bg-blue-100 border-round border-1 border-blue-300">
                    <div class="flex align-items-start">
                        <i class="pi pi-check-circle text-blue-900 text-2xl mr-3"></i>
                        <div class="mr-3 flex lg:align-items-start flex-column lg:flex-row">
                            <div class="text-blue-900 font-medium mr-0 lg:mr-2 mb-2 lg:mb-0 line-height-3">Information</div>
                            <p class="m-0 p-0 text-blue-700 line-height-3">Bibendum enim facilisis gravida neque convallis a cras semper.</p>
                        </div>
                    </div>
                    <a v-ripple class="flex align-items-center ml-auto no-underline text-blue-900 font-medium mt-3 lg:mt-0 cursor-pointer p-ripple">
                        <span>Learn More</span>
                        <i class="pi pi-arrow-right text-blue-900 ml-2"></i>
                    </a>
                </div>
            </template>
        </Message>
    </div>
</template>`
            }
        };
    }
};
</script>
