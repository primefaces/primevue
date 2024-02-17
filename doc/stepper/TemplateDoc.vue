<template>
    <DocSectionText v-bind="$attrs">
        <p>Each StepperPanel content can easily be customized with the default slot instead of using the built-in modes. Additionally, header, content, and separator sections of the StepperPanel are customizable via templating.</p>
    </DocSectionText>
    <div class="card flex flex-column justify-content-center">
        <Stepper
            v-model:activeStep="active"
            :pt="{
                stepperpanel: {
                    separator: ({ context }) => ({
                        style: { background: context.highlighted ? '#b9deb9' : '#ece9fc' }
                    })
                }
            }"
        >
            <StepperPanel>
                <template #header="slotProps">
                    <div :class="slotProps.class" @click="() => slotProps.clickCallback(event)">
                        <Avatar :icon="slotProps.active ? 'pi pi-user' : 'pi pi-check'" :style="{ backgroundColor: slotProps.active ? '#ece9fc' : '#b9deb9' }" size="large" shape="circle" />
                        <span class="text-lg ml-2">Account</span>
                    </div>
                </template>
                <div class="flex flex-column justify-content-center gap-2 mx-auto" style="max-width: 20rem">
                    <h3 class="text-center mt-3">Personal Details</h3>
                    <div class="field p-fluid">
                        <IconField>
                            <InputIcon>
                                <i class="pi pi-user" />
                            </InputIcon>
                            <InputText id="input" v-model="name" type="text" placeholder="Name" />
                        </IconField>
                    </div>
                    <div class="field p-fluid">
                        <IconField>
                            <InputIcon>
                                <i class="pi pi-envelope" />
                            </InputIcon>
                            <InputText id="email" v-model="email" type="email" placeholder="Email" />
                        </IconField>
                    </div>
                    <div class="field p-fluid">
                        <InputText v-model="password" type="text" placeholder="Password" />
                    </div>
                    <div class="field p-fluid">
                        <InputText v-model="cpassword" type="text" placeholder="Confirm Password" />
                    </div>
                </div>
            </StepperPanel>
            <StepperPanel>
                <template #header="slotProps">
                    <div :class="slotProps.class" @click="() => slotProps.clickCallback(event)">
                        <Avatar
                            :icon="slotProps.highlighted || completed ? 'pi pi-check' : 'pi pi-shopping-cart'"
                            :style="{ backgroundColor: slotProps.active ? '#ece9fc' : slotProps.highlighted || completed ? '#b9deb9' : null }"
                            size="large"
                            shape="circle"
                        />
                        <span class="text-lg ml-2">Cart</span>
                    </div>
                </template>
                <DataView :value="products">
                    <template #header>
                        <h3 class="text-center">Cart Details</h3>
                    </template>
                    <template #list="slotProps">
                        <div class="grid grid-nogutter">
                            <div v-for="(item, index) in slotProps.items" :key="index" class="col-12">
                                <div class="flex flex-column sm:flex-row sm:align-items-center p-4 gap-3" :class="{ 'border-top-1 surface-border': index !== 0 }">
                                    <div class="md:w-10rem relative">
                                        <img class="block xl:block mx-auto border-round w-full" :src="`https://primefaces.org/cdn/primevue/images/product/${item.image}`" :alt="item.name" />
                                    </div>
                                    <div class="flex flex-column md:flex-row justify-content-between md:align-items-center flex-1 gap-4">
                                        <div class="flex flex-row md:flex-column justify-content-between align-items-start gap-2">
                                            <div>
                                                <span class="font-medium text-secondary text-sm">{{ item.category }}</span>
                                                <div class="text-lg font-medium text-900 mt-2">{{ item.name }}</div>
                                            </div>
                                            <div class="surface-100 p-1" style="border-radius: 30px">
                                                <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                                    <span class="text-900 font-medium text-sm">{{ item.rating }}</span>
                                                    <i class="pi pi-star-fill text-yellow-500"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex flex-column md:align-items-end gap-5">
                                            <span class="text-xl font-semibold text-900">${{ item.price }}</span>
                                            <div class="flex flex-row-reverse md:flex-row gap-2">
                                                <InputNumber v-model="quantity[index]" showButtons buttonLayout="horizontal" inputClass="w-3rem text-center" :min="0">
                                                    <template #incrementbuttonicon>
                                                        <span class="pi pi-plus" />
                                                    </template>
                                                    <template #decrementbuttonicon>
                                                        <span class="pi pi-minus" />
                                                    </template>
                                                </InputNumber>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </DataView>
            </StepperPanel>
            <StepperPanel>
                <template #header="slotProps">
                    <div :class="slotProps.class" @click="() => slotProps.clickCallback(event)">
                        <Avatar
                            :icon="slotProps.highlighted || completed ? 'pi pi-check' : 'pi pi-money-bill'"
                            :style="{ backgroundColor: slotProps.active ? '#ece9fc' : slotProps.highlighted || completed ? '#b9deb9' : null }"
                            size="large"
                            shape="circle"
                        />
                        <span class="text-lg ml-2">Billing</span>
                    </div>
                </template>
                <h3 class="text-center mt-3">Payment</h3>
                <div class="grid formgrid p-fluid">
                    <div class="col-12 field mb-4">
                        <label class="text-900 font-medium mb-3 ml-1">Card Number</label>
                        <InputMask v-model="cc" mask="9999-9999-9999-9999" placeholder="9999-9999-9999-9999" />
                    </div>
                    <div class="col-12 lg:col-6 field mb-4">
                        <label class="text-900 font-medium mb-3 ml-1">Expiry Date</label>
                        <InputMask v-model="exp" mask="99/99" placeholder="99/99" slotChar="MM/YY" />
                    </div>
                    <div class="col-12 lg:col-6 field mb-4">
                        <label class="text-900 font-medium mb-3 ml-1">CVC</label>
                        <InputMask v-model="cvc" mask="999" placeholder="999" />
                    </div>
                    <div class="col-12 field mb-0">
                        <label for="holderName" class="text-900 font-medium mb-3 ml-1">Cardholder Name</label>
                        <InputText id="holderName" type="text" class="w-full mb-3" />
                    </div>
                </div>
            </StepperPanel>
            <template #end>
                <div v-if="!completed" class="flex justify-content-end gap-2">
                    <Button v-if="active !== 0" label="Back" severity="secondary" @click="active -= 1" />
                    <Button v-if="active !== 2" label="Continue" @click="active += 1" />
                    <Button
                        v-if="active === 2"
                        label="Complete"
                        @click="
                            () => {
                                active = null;
                                completed = true;
                            }
                        "
                    />
                </div>
                <div v-else class="flex flex-column justify-content-center mx-auto">
                    <Message severity="success">The order was submitted successfully.</Message>
                    <Button
                        label="New Order"
                        class="w-10rem mx-auto"
                        @click="
                            () => {
                                active = 0;
                                completed = false;
                            }
                        "
                    />
                </div>
            </template>
        </Stepper>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            active: 0,
            completed: false,
            products: null,
            name: null,
            email: null,
            password: null,
            cpassword: null,
            quantity: [1, 2],
            cc: null,
            cvc: null,
            exp: null,
            code: {
                basic: `
<Stepper
    v-model:activeStep="active"
    :pt="{
        stepperpanel: {
            separator: ({ context }) => ({
                style: { background: context.highlighted ? '#b9deb9' : '#ece9fc' }
            })
        }
    }"
    >
    <StepperPanel>
        <template #header="slotProps">
            <div :class="slotProps.class" @click="() => slotProps.clickCallback(event)">
                <Avatar :icon="slotProps.active ? 'pi pi-user' : 'pi pi-check'" :style="{ backgroundColor: slotProps.active ? '#ece9fc' : '#b9deb9' }" size="large" shape="circle" />
                <span class="text-lg ml-2">Account</span>
            </div>
        </template>
        <div class="flex flex-column justify-content-center gap-2 mx-auto" style="max-width: 20rem">
            <h3 class="text-center mt-3">Personal Details</h3>
            <div class="field p-fluid">
                <IconField>
                    <InputIcon>
                        <i class="pi pi-user" />
                    </InputIcon>
                    <InputText id="input" v-model="name" type="text" placeholder="Name" />
                </IconField>
            </div>
            <div class="field p-fluid">
                <IconField>
                    <InputIcon>
                        <i class="pi pi-envelope" />
                    </InputIcon>
                    <InputText id="email" v-model="email" type="email" placeholder="Email" />
                </IconField>
            </div>
            <div class="field p-fluid">
                <InputText v-model="password" type="text" placeholder="Password" />
            </div>
            <div class="field p-fluid">
                <InputText v-model="cpassword" type="text" placeholder="Confirm Password" />
            </div>
        </div>
    </StepperPanel>
    <StepperPanel>
        <template #header="slotProps">
            <div :class="slotProps.class" @click="() => slotProps.clickCallback(event)">
                <Avatar
                    :icon="slotProps.highlighted || completed ? 'pi pi-check' : 'pi pi-shopping-cart'"
                    :style="{ backgroundColor: slotProps.active ? '#ece9fc' : slotProps.highlighted || completed ? '#b9deb9' : null }"
                    size="large"
                    shape="circle"
                />
                <span class="text-lg ml-2">Cart</span>
            </div>
        </template>
        <DataView :value="products">
            <template #header>
                <h3 class="text-center">Cart Details</h3>
            </template>
            <template #list="slotProps">
                <div class="grid grid-nogutter">
                    <div v-for="(item, index) in slotProps.items" :key="index" class="col-12">
                        <div class="flex flex-column sm:flex-row sm:align-items-center p-4 gap-3" :class="{ 'border-top-1 surface-border': index !== 0 }">
                            <div class="md:w-10rem relative">
                                <img class="block xl:block mx-auto border-round w-full" :src="\`https://primefaces.org/cdn/primevue/images/product/\${item.image}\`" :alt="item.name" />
                            </div>
                            <div class="flex flex-column md:flex-row justify-content-between md:align-items-center flex-1 gap-4">
                                <div class="flex flex-row md:flex-column justify-content-between align-items-start gap-2">
                                    <div>
                                        <span class="font-medium text-secondary text-sm">{{ item.category }}</span>
                                        <div class="text-lg font-medium text-900 mt-2">{{ item.name }}</div>
                                    </div>
                                    <div class="surface-100 p-1" style="border-radius: 30px">
                                        <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                            <span class="text-900 font-medium text-sm">{{ item.rating }}</span>
                                            <i class="pi pi-star-fill text-yellow-500"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-column md:align-items-end gap-5">
                                    <span class="text-xl font-semibold text-900">\${{ item.price }}</span>
                                    <div class="flex flex-row-reverse md:flex-row gap-2">
                                        <InputNumber v-model="quantity[index]" showButtons buttonLayout="horizontal" inputClass="w-3rem text-center" :min="0">
                                            <template #incrementbuttonicon>
                                                <span class="pi pi-plus" />
                                            </template>
                                            <template #decrementbuttonicon>
                                                <span class="pi pi-minus" />
                                            </template>
                                        </InputNumber>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </DataView>
    </StepperPanel>
    <StepperPanel>
        <template #header="slotProps">
            <div :class="slotProps.class" @click="() => slotProps.clickCallback(event)">
                <Avatar
                    :icon="slotProps.highlighted || completed ? 'pi pi-check' : 'pi pi-money-bill'"
                    :style="{ backgroundColor: slotProps.active ? '#ece9fc' : slotProps.highlighted || completed ? '#b9deb9' : null }"
                    size="large"
                    shape="circle"
                />
                <span class="text-lg ml-2">Billing</span>
            </div>
        </template>
        <h3 class="text-center mt-3">Payment</h3>
        <div class="grid formgrid p-fluid">
            <div class="col-12 field mb-4">
                <label class="text-900 font-medium mb-3 ml-1">Card Number</label>
                <InputMask v-model="cc" mask="9999-9999-9999-9999" placeholder="9999-9999-9999-9999" />
            </div>
            <div class="col-12 lg:col-6 field mb-4">
                <label class="text-900 font-medium mb-3 ml-1">Expiry Date</label>
                <InputMask v-model="exp" mask="99/99" placeholder="99/99" slotChar="MM/YY" />
            </div>
            <div class="col-12 lg:col-6 field mb-4">
                <label class="text-900 font-medium mb-3 ml-1">CVC</label>
                <InputMask v-model="cvc" mask="999" placeholder="999" />
            </div>
            <div class="col-12 field mb-0">
                <label for="holderName" class="text-900 font-medium mb-3 ml-1">Cardholder Name</label>
                <InputText id="holderName" type="text" class="w-full mb-3" />
            </div>
        </div>
    </StepperPanel>
    <template #end>
        <div v-if="!completed" class="flex justify-content-end gap-2">
            <Button v-if="active !== 0" label="Back" severity="secondary" @click="active -= 1" />
            <Button v-if="active !== 2" label="Continue" @click="active += 1" />
            <Button
                v-if="active === 2"
                label="Complete"
                @click="
                    () => {
                        active = null;
                        completed = true;
                    }
                "
            />
        </div>
        <div v-else class="flex flex-column justify-content-center mx-auto">
            <Message severity="success">The order was submitted successfully.</Message>
            <Button
                label="New Order"
                class="w-10rem mx-auto"
                @click="
                    () => {
                        active = 0;
                        completed = false;
                    }
                "
            />
        </div>
    </template>
</Stepper>
`,
                options: `
<template>
    <div class="card flex flex-column justify-content-center">
        <Stepper
            v-model:activeStep="active"
            :pt="{
                stepperpanel: {
                    separator: ({ context }) => ({
                        style: { background: context.highlighted ? '#b9deb9' : '#ece9fc' }
                    })
                }
            }"
            >
            <StepperPanel>
                <template #header="slotProps">
                    <div :class="slotProps.class" @click="() => slotProps.clickCallback(event)">
                        <Avatar :icon="slotProps.active ? 'pi pi-user' : 'pi pi-check'" :style="{ backgroundColor: slotProps.active ? '#ece9fc' : '#b9deb9' }" size="large" shape="circle" />
                        <span class="text-lg ml-2">Account</span>
                    </div>
                </template>
                <div class="flex flex-column justify-content-center gap-2 mx-auto" style="max-width: 20rem">
                    <h3 class="text-center mt-3">Personal Details</h3>
                    <div class="field p-fluid">
                        <IconField>
                            <InputIcon>
                                <i class="pi pi-user" />
                            </InputIcon>
                            <InputText id="input" v-model="name" type="text" placeholder="Name" />
                        </IconField>
                    </div>
                    <div class="field p-fluid">
                        <IconField>
                            <InputIcon>
                                <i class="pi pi-envelope" />
                            </InputIcon>
                            <InputText id="email" v-model="email" type="email" placeholder="Email" />
                        </IconField>
                    </div>
                    <div class="field p-fluid">
                        <InputText v-model="password" type="text" placeholder="Password" />
                    </div>
                    <div class="field p-fluid">
                        <InputText v-model="cpassword" type="text" placeholder="Confirm Password" />
                    </div>
                </div>
            </StepperPanel>
            <StepperPanel>
                <template #header="slotProps">
                    <div :class="slotProps.class" @click="() => slotProps.clickCallback(event)">
                        <Avatar
                            :icon="slotProps.highlighted || completed ? 'pi pi-check' : 'pi pi-shopping-cart'"
                            :style="{ backgroundColor: slotProps.active ? '#ece9fc' : slotProps.highlighted || completed ? '#b9deb9' : null }"
                            size="large"
                            shape="circle"
                        />
                        <span class="text-lg ml-2">Cart</span>
                    </div>
                </template>
                <DataView :value="products">
                    <template #header>
                        <h3 class="text-center">Cart Details</h3>
                    </template>
                    <template #list="slotProps">
                        <div class="grid grid-nogutter">
                            <div v-for="(item, index) in slotProps.items" :key="index" class="col-12">
                                <div class="flex flex-column sm:flex-row sm:align-items-center p-4 gap-3" :class="{ 'border-top-1 surface-border': index !== 0 }">
                                    <div class="md:w-10rem relative">
                                        <img class="block xl:block mx-auto border-round w-full" :src="\`https://primefaces.org/cdn/primevue/images/product/\${item.image}\`" :alt="item.name" />
                                    </div>
                                    <div class="flex flex-column md:flex-row justify-content-between md:align-items-center flex-1 gap-4">
                                        <div class="flex flex-row md:flex-column justify-content-between align-items-start gap-2">
                                            <div>
                                                <span class="font-medium text-secondary text-sm">{{ item.category }}</span>
                                                <div class="text-lg font-medium text-900 mt-2">{{ item.name }}</div>
                                            </div>
                                            <div class="surface-100 p-1" style="border-radius: 30px">
                                                <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                                    <span class="text-900 font-medium text-sm">{{ item.rating }}</span>
                                                    <i class="pi pi-star-fill text-yellow-500"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex flex-column md:align-items-end gap-5">
                                            <span class="text-xl font-semibold text-900">\${{ item.price }}</span>
                                            <div class="flex flex-row-reverse md:flex-row gap-2">
                                                <InputNumber v-model="quantity[index]" showButtons buttonLayout="horizontal" inputClass="w-3rem text-center" :min="0">
                                                    <template #incrementbuttonicon>
                                                        <span class="pi pi-plus" />
                                                    </template>
                                                    <template #decrementbuttonicon>
                                                        <span class="pi pi-minus" />
                                                    </template>
                                                </InputNumber>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </DataView>
            </StepperPanel>
            <StepperPanel>
                <template #header="slotProps">
                    <div :class="slotProps.class" @click="() => slotProps.clickCallback(event)">
                        <Avatar
                            :icon="slotProps.highlighted || completed ? 'pi pi-check' : 'pi pi-money-bill'"
                            :style="{ backgroundColor: slotProps.active ? '#ece9fc' : slotProps.highlighted || completed ? '#b9deb9' : null }"
                            size="large"
                            shape="circle"
                        />
                        <span class="text-lg ml-2">Billing</span>
                    </div>
                </template>
                <h3 class="text-center mt-3">Payment</h3>
                <div class="grid formgrid p-fluid">
                    <div class="col-12 field mb-4">
                        <label class="text-900 font-medium mb-3 ml-1">Card Number</label>
                        <InputMask v-model="cc" mask="9999-9999-9999-9999" placeholder="9999-9999-9999-9999" />
                    </div>
                    <div class="col-12 lg:col-6 field mb-4">
                        <label class="text-900 font-medium mb-3 ml-1">Expiry Date</label>
                        <InputMask v-model="exp" mask="99/99" placeholder="99/99" slotChar="MM/YY" />
                    </div>
                    <div class="col-12 lg:col-6 field mb-4">
                        <label class="text-900 font-medium mb-3 ml-1">CVC</label>
                        <InputMask v-model="cvc" mask="999" placeholder="999" />
                    </div>
                    <div class="col-12 field mb-0">
                        <label for="holderName" class="text-900 font-medium mb-3 ml-1">Cardholder Name</label>
                        <InputText id="holderName" type="text" class="w-full mb-3" />
                    </div>
                </div>
            </StepperPanel>
            <template #end>
                <div v-if="!completed" class="flex justify-content-end gap-2">
                    <Button v-if="active !== 0" label="Back" severity="secondary" @click="active -= 1" />
                    <Button v-if="active !== 2" label="Continue" @click="active += 1" />
                    <Button
                        v-if="active === 2"
                        label="Complete"
                        @click="
                            () => {
                                active = null;
                                completed = true;
                            }
                        "
                    />
                </div>
                <div v-else class="flex flex-column justify-content-center mx-auto">
                    <Message severity="success">The order was submitted successfully.</Message>
                    <Button
                        label="New Order"
                        class="w-10rem mx-auto"
                        @click="
                            () => {
                                active = 0;
                                completed = false;
                            }
                        "
                    />
                </div>
            </template>
        </Stepper>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            active: 0,
            completed: false,
            products: null,
            name: null,
            email: null,
            password: null,
            cpassword: null,
            quantity: [1, 2],
            cc: null,
            cvc: null,
            exp: null
        }
    },
    mounted() {
        ProductService.getProductsSmall().then((data) => (this.products = data.slice(0, 2)));
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-column justify-content-center">
        <Stepper
            v-model:activeStep="active"
            :pt="{
                stepperpanel: {
                    separator: ({ context }) => ({
                        style: { background: context.highlighted ? '#b9deb9' : '#ece9fc' }
                    })
                }
            }"
            >
            <StepperPanel>
                <template #header="slotProps">
                    <div :class="slotProps.class" @click="() => slotProps.clickCallback(event)">
                        <Avatar :icon="slotProps.active ? 'pi pi-user' : 'pi pi-check'" :style="{ backgroundColor: slotProps.active ? '#ece9fc' : '#b9deb9' }" size="large" shape="circle" />
                        <span class="text-lg ml-2">Account</span>
                    </div>
                </template>
                <div class="flex flex-column justify-content-center gap-2 mx-auto" style="max-width: 20rem">
                    <h3 class="text-center mt-3">Personal Details</h3>
                    <div class="field p-fluid">
                        <IconField>
                            <InputIcon>
                                <i class="pi pi-user" />
                            </InputIcon>
                            <InputText id="input" v-model="name" type="text" placeholder="Name" />
                        </IconField>
                    </div>
                    <div class="field p-fluid">
                        <IconField>
                            <InputIcon>
                                <i class="pi pi-envelope" />
                            </InputIcon>
                            <InputText id="email" v-model="email" type="email" placeholder="Email" />
                        </IconField>
                    </div>
                    <div class="field p-fluid">
                        <InputText v-model="password" type="text" placeholder="Password" />
                    </div>
                    <div class="field p-fluid">
                        <InputText v-model="cpassword" type="text" placeholder="Confirm Password" />
                    </div>
                </div>
            </StepperPanel>
            <StepperPanel>
                <template #header="slotProps">
                    <div :class="slotProps.class" @click="() => slotProps.clickCallback(event)">
                        <Avatar
                            :icon="slotProps.highlighted || completed ? 'pi pi-check' : 'pi pi-shopping-cart'"
                            :style="{ backgroundColor: slotProps.active ? '#ece9fc' : slotProps.highlighted || completed ? '#b9deb9' : null }"
                            size="large"
                            shape="circle"
                        />
                        <span class="text-lg ml-2">Cart</span>
                    </div>
                </template>
                <DataView :value="products">
                    <template #header>
                        <h3 class="text-center">Cart Details</h3>
                    </template>
                    <template #list="slotProps">
                        <div class="grid grid-nogutter">
                            <div v-for="(item, index) in slotProps.items" :key="index" class="col-12">
                                <div class="flex flex-column sm:flex-row sm:align-items-center p-4 gap-3" :class="{ 'border-top-1 surface-border': index !== 0 }">
                                    <div class="md:w-10rem relative">
                                        <img class="block xl:block mx-auto border-round w-full" :src="\`https://primefaces.org/cdn/primevue/images/product/\${item.image}\`" :alt="item.name" />
                                    </div>
                                    <div class="flex flex-column md:flex-row justify-content-between md:align-items-center flex-1 gap-4">
                                        <div class="flex flex-row md:flex-column justify-content-between align-items-start gap-2">
                                            <div>
                                                <span class="font-medium text-secondary text-sm">{{ item.category }}</span>
                                                <div class="text-lg font-medium text-900 mt-2">{{ item.name }}</div>
                                            </div>
                                            <div class="surface-100 p-1" style="border-radius: 30px">
                                                <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                                    <span class="text-900 font-medium text-sm">{{ item.rating }}</span>
                                                    <i class="pi pi-star-fill text-yellow-500"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex flex-column md:align-items-end gap-5">
                                            <span class="text-xl font-semibold text-900">\${{ item.price }}</span>
                                            <div class="flex flex-row-reverse md:flex-row gap-2">
                                                <InputNumber v-model="quantity[index]" showButtons buttonLayout="horizontal" inputClass="w-3rem text-center" :min="0">
                                                    <template #incrementbuttonicon>
                                                        <span class="pi pi-plus" />
                                                    </template>
                                                    <template #decrementbuttonicon>
                                                        <span class="pi pi-minus" />
                                                    </template>
                                                </InputNumber>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </DataView>
            </StepperPanel>
            <StepperPanel>
                <template #header="slotProps">
                    <div :class="slotProps.class" @click="() => slotProps.clickCallback(event)">
                        <Avatar
                            :icon="slotProps.highlighted || completed ? 'pi pi-check' : 'pi pi-money-bill'"
                            :style="{ backgroundColor: slotProps.active ? '#ece9fc' : slotProps.highlighted || completed ? '#b9deb9' : null }"
                            size="large"
                            shape="circle"
                        />
                        <span class="text-lg ml-2">Billing</span>
                    </div>
                </template>
                <h3 class="text-center mt-3">Payment</h3>
                <div class="grid formgrid p-fluid">
                    <div class="col-12 field mb-4">
                        <label class="text-900 font-medium mb-3 ml-1">Card Number</label>
                        <InputMask v-model="cc" mask="9999-9999-9999-9999" placeholder="9999-9999-9999-9999" />
                    </div>
                    <div class="col-12 lg:col-6 field mb-4">
                        <label class="text-900 font-medium mb-3 ml-1">Expiry Date</label>
                        <InputMask v-model="exp" mask="99/99" placeholder="99/99" slotChar="MM/YY" />
                    </div>
                    <div class="col-12 lg:col-6 field mb-4">
                        <label class="text-900 font-medium mb-3 ml-1">CVC</label>
                        <InputMask v-model="cvc" mask="999" placeholder="999" />
                    </div>
                    <div class="col-12 field mb-0">
                        <label for="holderName" class="text-900 font-medium mb-3 ml-1">Cardholder Name</label>
                        <InputText id="holderName" type="text" class="w-full mb-3" />
                    </div>
                </div>
            </StepperPanel>
            <template #end>
                <div v-if="!completed" class="flex justify-content-end gap-2">
                    <Button v-if="active !== 0" label="Back" severity="secondary" @click="active -= 1" />
                    <Button v-if="active !== 2" label="Continue" @click="active += 1" />
                    <Button
                        v-if="active === 2"
                        label="Complete"
                        @click="
                            () => {
                                active = null;
                                completed = true;
                            }
                        "
                    />
                </div>
                <div v-else class="flex flex-column justify-content-center mx-auto">
                    <Message severity="success">The order was submitted successfully.</Message>
                    <Button
                        label="New Order"
                        class="w-10rem mx-auto"
                        @click="
                            () => {
                                active = 0;
                                completed = false;
                            }
                        "
                    />
                </div>
            </template>
        </Stepper>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data.slice(0, 9)));
});

const active = ref(0);
const completed = ref(false);
const products = ref();
const name = ref();
const email = ref();
const password = ref();
const cpassword = ref();
const quantity = ref([1, 2]);
const cc = ref();
const cvc = ref();
const exp = ref();

<\/script>
`
            }
        };
    },
    mounted() {
        ProductService.getProductsSmall().then((data) => (this.products = data.slice(0, 2)));
    }
};
</script>
