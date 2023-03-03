<template>
    <DocSectionText v-bind="$attrs">
        <p>Sample implementation of a login form using a divider with content.</p>
    </DocSectionText>
    <div class="card">
        <div class="flex flex-column md:flex-row">
            <div class="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
                <div class="flex align-items-center gap-2">
                    <label>Username</label>
                    <InputText id="username" type="text" class="w-full" />
                </div>
                <div class="flex align-items-center gap-2">
                    <label>Password</label>
                    <InputText id="password" type="password" class="w-full" />
                </div>
                <Button label="Login" icon="pi pi-user" class="w-10rem"></Button>
            </div>
            <div class="w-full md:w-2">
                <Divider layout="vertical" class="hidden md:flex"><b>OR</b></Divider>
                <Divider layout="horizontal" class="flex md:hidden" align="center"><b>OR</b></Divider>
            </div>
            <div class="w-full md:w-5 flex align-items-center justify-content-center py-5">
                <Button label="Sign Up" icon="pi pi-user-plus" severity="success" class="w-10rem"></Button>
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
<div class="flex flex-column md:flex-row">
    <div class="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
        <div class="flex align-items-center gap-2">
            <label>Username</label>
            <InputText id="username" type="text" class="w-full" />
        </div>
        <div class="flex align-items-center gap-2">
            <label>Password</label>
            <InputText id="password" type="password" class="w-full" />
        </div>
        <Button label="Login" icon="pi pi-user" class="w-10rem"></Button>
    </div>
    <div class="w-full md:w-2">
        <Divider layout="vertical" class="hidden md:flex"><b>OR</b></Divider>
        <Divider layout="horizontal" class="flex md:hidden" align="center"><b>OR</b></Divider>
    </div>
    <div class="w-full md:w-5 flex align-items-center justify-content-center py-5">
        <Button label="Sign Up" icon="pi pi-user-plus" severity="success" class="w-10rem"></Button>
    </div>
</div>`,
                options: `
<template>
    <div class="card">
        <div class="flex flex-column md:flex-row">
            <div class="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
                <div class="flex align-items-center gap-2">
                    <label>Username</label>
                    <InputText id="username" type="text" class="w-full" />
                </div>
                <div class="flex align-items-center gap-2">
                    <label>Password</label>
                    <InputText id="password" type="password" class="w-full" />
                </div>
                <Button label="Login" icon="pi pi-user" class="w-10rem"></Button>
            </div>
            <div class="w-full md:w-2">
                <Divider layout="vertical" class="hidden md:flex"><b>OR</b></Divider>
                <Divider layout="horizontal" class="flex md:hidden" align="center"><b>OR</b></Divider>
            </div>
            <div class="w-full md:w-5 flex align-items-center justify-content-center py-5">
                <Button label="Sign Up" icon="pi pi-user-plus" severity="success" class="w-10rem"></Button>
            </div>
        </div>
    </div>
</template>

<script>
<\/script>`,
                composition: `
<template>
    <div class="card">
        <div class="flex flex-column md:flex-row">
            <div class="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
                <div class="flex align-items-center gap-2">
                    <label>Username</label>
                    <InputText id="username" type="text" class="w-full" />
                </div>
                <div class="flex align-items-center gap-2">
                    <label>Password</label>
                    <InputText id="password" type="password" class="w-full" />
                </div>
                <Button label="Login" icon="pi pi-user" class="w-10rem"></Button>
            </div>
            <div class="w-full md:w-2">
                <Divider layout="vertical" class="hidden md:flex"><b>OR</b></Divider>
                <Divider layout="horizontal" class="flex md:hidden" align="center"><b>OR</b></Divider>
            </div>
            <div class="w-full md:w-5 flex align-items-center justify-content-center py-5">
                <Button label="Sign Up" icon="pi pi-user-plus" severity="success" class="w-10rem"></Button>
            </div>
        </div>
    </div>
</template>

<script setup>
<\/script>`
            }
        };
    }
};
</script>
