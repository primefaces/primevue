<template>
    <DocSectionText v-bind="$attrs">
        <p>Sample implementation of a login form using a divider with content.</p>
    </DocSectionText>
    <div class="card">
        <div class="flex flex-col md:flex-row">
            <div class="w-full md:w-5/12 flex flex-col items-center justify-center gap-4 py-8">
                <div class="flex flex-wrap justify-center items-center gap-2">
                    <label class="w-24">Username</label>
                    <InputText id="username" type="text" class="w-48" />
                </div>
                <div class="flex flex-wrap justify-center items-center gap-2">
                    <label class="w-24">Password</label>
                    <InputText id="password" type="password" class="w-48" />
                </div>
                <Button label="Login" icon="pi pi-user" class="w-40 mx-auto"></Button>
            </div>
            <div class="w-full md:w-2/12">
                <Divider layout="vertical" class="hidden md:flex"><b>OR</b></Divider>
                <Divider layout="horizontal" class="flex md:hidden" align="center"><b>OR</b></Divider>
            </div>
            <div class="w-full md:w-5/12 flex items-center justify-center py-8">
                <Button label="Sign Up" icon="pi pi-user-plus" severity="success" class="w-40"></Button>
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
<div class="flex flex-col md:flex-row">
    <div class="w-full md:w-5/12 flex flex-col items-center justify-center gap-4 py-8">
        <div class="flex flex-wrap justify-center items-center gap-2">
            <label class="w-24">Username</label>
            <InputText id="username" type="text" class="w-48" />
        </div>
        <div class="flex flex-wrap justify-center items-center gap-2">
            <label class="w-24">Password</label>
            <InputText id="password" type="password" class="w-48" />
        </div>
        <Button label="Login" icon="pi pi-user" class="w-40 mx-auto"></Button>
    </div>
    <div class="w-full md:w-2/12">
        <Divider layout="vertical" class="hidden md:flex"><b>OR</b></Divider>
        <Divider layout="horizontal" class="flex md:hidden" align="center"><b>OR</b></Divider>
    </div>
    <div class="w-full md:w-5/12 flex items-center justify-center py-8">
        <Button label="Sign Up" icon="pi pi-user-plus" severity="success" class="w-40"></Button>
    </div>
</div>
`,
                options: `
<template>
    <div class="card">
        <div class="flex flex-col md:flex-row">
            <div class="w-full md:w-5/12 flex flex-col items-center justify-center gap-4 py-8">
                <div class="flex flex-wrap justify-center items-center gap-2">
                    <label class="w-24">Username</label>
                    <InputText id="username" type="text" class="w-48" />
                </div>
                <div class="flex flex-wrap justify-center items-center gap-2">
                    <label class="w-24">Password</label>
                    <InputText id="password" type="password" class="w-48" />
                </div>
                <Button label="Login" icon="pi pi-user" class="w-40 mx-auto"></Button>
            </div>
            <div class="w-full md:w-2/12">
                <Divider layout="vertical" class="hidden md:flex"><b>OR</b></Divider>
                <Divider layout="horizontal" class="flex md:hidden" align="center"><b>OR</b></Divider>
            </div>
            <div class="w-full md:w-5/12 flex items-center justify-center py-8">
                <Button label="Sign Up" icon="pi pi-user-plus" severity="success" class="w-40"></Button>
            </div>
        </div>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <div class="flex flex-col md:flex-row">
            <div class="w-full md:w-5/12 flex flex-col items-center justify-center gap-4 py-8">
                <div class="flex flex-wrap justify-center items-center gap-2">
                    <label class="w-24">Username</label>
                    <InputText id="username" type="text" class="w-48" />
                </div>
                <div class="flex flex-wrap justify-center items-center gap-2">
                    <label class="w-24">Password</label>
                    <InputText id="password" type="password" class="w-48" />
                </div>
                <Button label="Login" icon="pi pi-user" class="w-40 mx-auto"></Button>
            </div>
            <div class="w-full md:w-2/12">
                <Divider layout="vertical" class="hidden md:flex"><b>OR</b></Divider>
                <Divider layout="horizontal" class="flex md:hidden" align="center"><b>OR</b></Divider>
            </div>
            <div class="w-full md:w-5/12 flex items-center justify-center py-8">
                <Button label="Sign Up" icon="pi pi-user-plus" severity="success" class="w-40"></Button>
            </div>
        </div>
    </div>
</template>

<script setup>
<\/script>
`
            }
        };
    }
};
</script>
