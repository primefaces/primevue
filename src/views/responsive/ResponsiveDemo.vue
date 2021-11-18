<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Responsive Design</h1>
                <p>PrimeVue components are optimized for different screen sizes.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="p-grid">
                <div class="p-col-12 p-md-6 p-fluid">
                    <div class="card">
                        <h5>InputText</h5>
                        <div class="p-grid p-formgrid">
                            <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
                                <InputText type="text" placeholder="Default"></InputText>
                            </div>
                            <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
                                <InputText type="text" placeholder="Disabled" :disabled="true"></InputText>
                            </div>
                            <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
                                <InputText type="text" placeholder="Invalid" class="p-invalid" />
                            </div>
                        </div>

                        <h5>Icons</h5>
                        <div class="p-grid p-formgrid">
                            <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
                                <span class="p-input-icon-left">
                                    <i class="pi pi-user" />
                                    <InputText type="text" placeholder="Username" />
                                </span>
                            </div>
                            <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
                                <span class="p-input-icon-right">
                                    <InputText type="text" placeholder="Search" />
                                    <i class="pi pi-search" />
                                </span>
                            </div>
                            <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
                                <span class="p-input-icon-left p-input-icon-right">
                                    <i class="pi pi-user" />
                                    <InputText type="text" placeholder="Search" />
                                    <i class="pi pi-search" />
                                </span>
                            </div>
                        </div>

                        <h5>Float Label</h5>
                        <span class="p-float-label">
                            <InputText id="username" type="text" v-model="floatValue"/>
                            <label for="username">Username</label>
                        </span>

                        <h5>Textarea</h5>
                        <Textarea placeholder="Your Message" :autoResize="true" rows="3" cols="30" />

                        <h5>AutoComplete</h5>
                        <AutoComplete placeholder="Search" id="dd" :dropdown="true" :multiple="true" v-model="selectedAutoValue" :suggestions="autoFilteredValue" @complete="searchCountry($event)" field="name"/>

                        <h5>Calendar</h5>
                        <Calendar :showIcon="true" :showButtonBar="true" v-model="calendarValue"></Calendar>

                        <h5>Spinner</h5>
                        <InputNumber v-model="inputNumberValue" showButtons mode="decimal"></InputNumber>

                        <h5>Chips</h5>
                        <Chips v-model="chipsValue"/>
                    </div>

                    <div class="card">
                        <h5>Slider</h5>
                        <InputText v-model.number="sliderValue" />
                        <Slider v-model="sliderValue" />

                        <h5>Rating</h5>
                        <Rating v-model="ratingValue"/>

                        <h5>Input Switch</h5>
                        <InputSwitch v-model="switchValue" />
                    </div>
                </div>

                <div class="p-col-12 p-md-6">
                    <div class="card">
                        <h5>RadioButton</h5>
                        <div class="p-grid">
                            <div class="p-col-12 p-md-4">
                                <div class="p-field-radiobutton">
                                    <RadioButton id="option1" name="option" value="Option 1" v-model="radioValue" />
                                    <label for="option1">Option 1</label>
                                </div>
                            </div>
                            <div class="p-col-12 p-md-4">
                                <div class="p-field-radiobutton">
                                    <RadioButton id="option2" name="option" value="Option 2" v-model="radioValue" />
                                    <label for="option2">Option 2</label>
                                </div>
                            </div>
                            <div class="p-col-12 p-md-4">
                                <div class="p-field-radiobutton">
                                    <RadioButton id="option3" name="option" value="Option 3" v-model="radioValue" />
                                    <label for="option3">Option 3</label>
                                </div>
                            </div>
                        </div>

                        <h5>Checkbox</h5>
                        <div class="p-grid">
                            <div class="p-col-12 p-md-4">
                                <div class="p-field-checkbox">
                                    <Checkbox id="checkOption1" name="option" value="Option 1" v-model="checkboxValue" />
                                    <label for="checkOption1">Option 1</label>
                                </div>
                            </div>
                            <div class="p-col-12 p-md-4">
                                <div class="p-field-checkbox">
                                    <Checkbox id="checkOption2" name="option" value="Option 2" v-model="checkboxValue" />
                                    <label for="checkOption2">Option 2</label>
                                </div>
                            </div>
                            <div class="p-col-12 p-md-4">
                                <div class="p-field-checkbox">
                                    <Checkbox id="checkOption3" name="option" value="Option 3" v-model="checkboxValue" />
                                    <label for="checkOption3">Option 3</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card p-fluid">
                        <h5>Listbox</h5>
                        <Listbox v-model="listboxValue" :options="listboxValues" optionLabel="name" :filter="true"/>

                        <h5>Dropdown</h5>
                        <Dropdown v-model="dropdownValue" :options="dropdownValues" optionLabel="name" placeholder="Select" />

                        <h5>MultiSelect</h5>
                        <MultiSelect v-model="multiselectValue" :options="multiselectValues" optionLabel="name" placeholder="Select Countries" :filter="true"></MultiSelect>
                    </div>

                    <div class="card p-fluid">
                        <h5>ToggleButton</h5>
                        <ToggleButton v-model="toggleValue" onLabel="Yes" offLabel="No"/>

                        <h5>SelectButton</h5>
                        <SelectButton v-model="selectButtonValue1" :options="selectButtonValues1" optionLabel="name" />

                        <h5>SelectButton - Multiple</h5>
                        <SelectButton v-model="selectButtonValue2" :options="selectButtonValues2" optionLabel="name" :multiple="true"/>
                    </div>
                </div>

                <div class="p-col-12">
                    <div class="card">
                        <h5>Buttons</h5>
                        <Button label="Submit" class="p-mr-2 p-mb-2" />
                        <Button icon="pi pi-check" class="p-mr-2 p-mb-2" />
                        <Button label="Submit" icon="pi pi-check" class="p-mr-2 p-mb-2" />
                        <Button label="Submit" icon="pi pi-check" iconPos="right" class="p-mr-2 p-mb-2" />
                        <Button label="Disabled" disabled="disabled" class="p-mr-2 p-mb-2" />
                    
                        <h5>Severities</h5>
                        <Button label="Primary" class="p-mr-2 p-mb-2" />
                        <Button label="Secondary" class="p-button-secondary p-mr-2 p-mb-2" />
                        <Button label="Success" class="p-button-success p-mr-2 p-mb-2" />
                        <Button label="Info" class="p-button-info p-mr-2 p-mb-2" />
                        <Button label="Warning" class="p-button-warning p-mr-2 p-mb-2" />
                        <Button label="Help" class="p-button-help p-mr-2 p-mb-2" />
                        <Button label="Danger" class="p-button-danger p-mr-2 p-mb-2" />

                        <h5>Raised Buttons</h5>
                        <Button label="Primary" class="p-button-raised p-mr-2 p-mb-2" />
                        <Button label="Secondary" class="p-button-raised p-button-secondary p-mr-2 p-mb-2" />
                        <Button label="Success" class="p-button-raised p-button-success p-mr-2 p-mb-2" />
                        <Button label="Info" class="p-button-raised p-button-info p-mr-2 p-mb-2" />
                        <Button label="Warning" class="p-button-raised p-button-warning p-mr-2 p-mb-2" />
                        <Button label="Help" class="p-button-raised p-button-help p-mr-2 p-mb-2" />
                        <Button label="Danger" class="p-button-raised p-button-danger p-mb-2" />

                        <h5>Rounded Buttons</h5>
                        <Button label="Primary" class="p-button-rounded p-mr-2 p-mb-2" />
                        <Button label="Secondary" class="p-button-rounded p-button-secondary p-mr-2 p-mb-2" />
                        <Button label="Success" class="p-button-rounded p-button-success p-mr-2 p-mb-2" />
                        <Button label="Info" class="p-button-rounded p-button-info p-mr-2 p-mb-2" />
                        <Button label="Warning" class="p-button-rounded p-button-warning p-mr-2 p-mb-2" />
                        <Button label="Help" class="p-button-rounded p-button-help p-mr-2 p-mb-2" />
                        <Button label="Danger" class="p-button-rounded p-button-danger p-mb-2" />

                        <h5>Text Buttons</h5>
                        <Button label="Primary" class="p-button-text p-mr-2 p-mb-2" />
                        <Button label="Secondary" class="p-button-secondary p-button-text p-mr-2 p-mb-2" />
                        <Button label="Success" class="p-button-success p-button-text p-mr-2 p-mb-2" />
                        <Button label="Info" class="p-button-info p-button-text p-mr-2 p-mb-2" />
                        <Button label="Warning" class="p-button-warning p-button-text p-mr-2 p-mb-2" />
                        <Button label="Help" class="p-button-help p-button-text p-mr-2 p-mb-2" />
                        <Button label="Danger" class="p-button-danger p-button-text p-mr-2 p-mb-2" />
                        <Button label="Plain" class="p-button-text p-button-plain p-mb-2" />

                        <h5>Raised Text Buttons</h5>
                        <Button label="Primary" class="p-button-raised p-button-text p-mr-2 p-mb-2" />
                        <Button label="Secondary" class="p-button-raised p-button-secondary p-button-text p-mr-2 p-mb-2" />
                        <Button label="Success" class="p-button-raised p-button-success p-button-text p-mr-2 p-mb-2" />
                        <Button label="Info" class="p-button-raised p-button-info p-button-text p-mr-2 p-mb-2" />
                        <Button label="Warning" class="p-button-raised p-button-warning p-button-text p-mr-2 p-mb-2" />
                        <Button label="Help" class="p-button-raised p-button-help p-button-text p-mr-2 p-mb-2" />
                        <Button label="Danger" class="p-button-raised p-button-danger p-button-text p-mr-2 p-mb-2" />
                        <Button label="Plain" class="p-button-raised p-button-plain p-button-text p-mb-2" />

                        <h5>Outlined Buttons</h5>
                        <Button label="Primary" class="p-button-outlined p-mr-2 p-mb-2" />
                        <Button label="Secondary" class="p-button-outlined p-button-secondary p-mr-2 p-mb-2" />
                        <Button label="Success" class="p-button-outlined p-button-success p-mr-2 p-mb-2" />
                        <Button label="Info" class="p-button-outlined p-button-info p-mr-2 p-mb-2" />
                        <Button label="Warning" class="p-button-outlined p-button-warning p-mr-2 p-mb-2" />
                        <Button label="Help" class="p-button-outlined p-button-help p-mr-2 p-mb-2" />
                        <Button label="Danger" class="p-button-outlined p-button-danger p-mr-2 p-mb-2" />
                        <Button label="Plain" class="p-button-outlined p-button-plain p-mb-2" />

                        <h5>Rounded Icon Buttons</h5>
                        <Button icon="pi pi-check" class="p-button-rounded p-mr-2 p-mb-2" />
                        <Button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary p-mr-2 p-mb-2" />
                        <Button icon="pi pi-search" class="p-button-rounded p-button-success p-mr-2 p-mb-2" />
                        <Button icon="pi pi-user" class="p-button-rounded p-button-info p-mr-2 p-mb-2" />
                        <Button icon="pi pi-bell" class="p-button-rounded p-button-warning p-mr-2 p-mb-2" />
                        <Button icon="pi pi-heart" class="p-button-rounded p-button-help p-mr-2 p-mb-2" />
                        <Button icon="pi pi-times" class="p-button-rounded p-button-danger p-mb-2" />

                        <h5>Rounded Text Icon Buttons</h5>
                        <Button icon="pi pi-check" class="p-button-rounded p-button-text p-mr-2 p-mb-2" />
                        <Button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary p-button-text p-mr-2 p-mb-2" />
                        <Button icon="pi pi-search" class="p-button-rounded p-button-success p-button-text p-mr-2 p-mb-2" />
                        <Button icon="pi pi-user" class="p-button-rounded p-button-info p-button-text p-mr-2 p-mb-2" />
                        <Button icon="pi pi-bell" class="p-button-rounded p-button-warning p-button-text p-mr-2 p-mb-2" />
                        <Button icon="pi pi-heart" class="p-button-rounded p-button-help p-button-text p-mr-2 p-mb-2" />
                        <Button icon="pi pi-times" class="p-button-rounded p-button-danger p-button-text p-mr-2 p-mb-2" />

                        <h5>Rounded and Outlined Icon Buttons</h5>
                        <Button icon="pi pi-check" class="p-button-rounded p-button-outlined p-mr-2 p-mb-2" />
                        <Button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                        <Button icon="pi pi-search" class="p-button-rounded p-button-success p-button-outlined p-mr-2 p-mb-2" />
                        <Button icon="pi pi-user" class="p-button-rounded p-button-info p-button-outlined p-mr-2 p-mb-2" />
                        <Button icon="pi pi-bell" class="p-button-rounded p-button-warning p-button-outlined p-mr-2 p-mb-2" />
                        <Button icon="pi pi-heart" class="p-button-rounded p-button-help p-button-outlined p-mr-2 p-mb-2" />
                        <Button icon="pi pi-times" class="p-button-rounded p-button-danger p-button-outlined p-mb-2" />

                        <h5>Badges</h5>
                        <Button type="button" label="Emails" badge="8" class="p-mr-2 p-mb-2" />
                        <Button type="button" label="Messages" icon="pi pi-users" class="p-button-warning p-mb-2" badge="8" badgeClass="p-badge-danger" />

                        <h5>Button Set</h5>
                        <span class="p-buttonset">
                            <Button label="Save" icon="pi pi-check" />
                            <Button label="Delete" icon="pi pi-trash" />
                            <Button label="Cancel" icon="pi pi-times" />
                        </span>
                    </div>
                </div>

                <div class="p-col-12">
                    <div class="card">
                        <DataTable :value="customers" :paginator="true" :rows="10"
                            dataKey="id" :rowHover="true" v-model:selection="selectedCustomers" :filters="filters"
                            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[10,25,50]"
                            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries" responsiveLayout="scroll">
                            <template #header>
                                <div class="p-d-flex p-ai-center p-jc-between">
                                    DataTable
                                    <span class="p-input-icon-left">
                                        <i class="pi pi-search" />
                                        <InputText v-model="filters['global'].value" placeholder="Global Search" />
                                    </span>
                                </div>
                            </template>
                            <template #empty>
                                No customers found.
                            </template>
                            <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
                            <Column field="name" header="Name" :sortable="true" style="min-width:16rem">
                                <template #body="slotProps">
                                    {{slotProps.data.name}}
                                </template>
                            </Column>
                            <Column header="Country" :sortable="true" sortField="country.name" filterField="country.name" filterMatchMode="contains" style="min-width:16rem">
                                <template #body="slotProps">
                                    <img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.data.country.code" width="30" class="p-mr-2" />
                                    <span class="image-text">{{slotProps.data.country.name}}</span>
                                </template>
                            </Column>
                            <Column field="status" header="Status" :sortable="true" filterMatchMode="equals" style="min-width:16rem">
                                <template #body="slotProps">
                                    <span :class="'customer-badge status-' + slotProps.data.status">{{slotProps.data.status}}</span>
                                </template>
                            </Column>
                            <Column field="activity" header="Activity" :sortable="true" filterMatchMode="gte" style="min-width:16rem">
                                <template #body="slotProps">
                                    <ProgressBar :value="slotProps.data.activity" :showValue="false" style="width: 100px"/>
                                </template>
                            </Column>
                        </DataTable>
                    </div>
                </div>
                <div class="p-col-12 p-md-6">
                    <div class="card">
                        <h5>AccordionPanel</h5>
                        <Accordion :multiple="true" :activeIndex="[0]">
                            <AccordionTab header="Header I">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </AccordionTab>
                            <AccordionTab header="Header II">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
                                    ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                                    voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                    Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                            </AccordionTab>
                            <AccordionTab header="Header III">
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                                    et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                                    quo minus.</p>
                            </AccordionTab>
                        </Accordion>
                    </div>
                    <div class="card">
                        <h5>TabView</h5>
                        <TabView>
                            <TabPanel header="Header I">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></TabPanel>
                            <TabPanel header="Header II">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
                                    ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                                    voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                    Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                            </TabPanel>
                            <TabPanel header="Header III">
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                                    et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                                    quo minus.</p>
                            </TabPanel>
                        </TabView>
                    </div>
                </div>
                <div class="p-col-12 p-md-6">
                    <div class="card">
                        <h5>Panel</h5>
                        <Panel header="Header" :toggleable="true">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </Panel>
                    </div>
                    <div class="card">
                        <h5>Fieldset</h5>
                        <Fieldset legend="Legend" :toggleable="true">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </Fieldset>
                    </div>
                </div>
                <div class="p-col-12 p-md-3">
                    <div class="card p-fluid">
                        <h5>Overlay Panel</h5>
                        <Button type="button" label="Choose" @click="toggle" icon="pi pi-search" />
                        <OverlayPanel ref="op" appendTo="body" :showCloseIcon="true" style="width: 450px" :breakpoints="{'960px':'75vw'}">
                            <DataTable :value="products" v-model:selection="selectedProduct" selectionMode="single" :paginator="true" :rows="5" @row-select="onProductSelect">
                                <Column field="name" header="Name" sortable></Column>
                                <Column header="Image">
                                    <template #body="slotProps">
                                        <img :src="'demo/images/product/' + slotProps.data.image" :alt="slotProps.data.image" class="product-image" />
                                    </template>
                                </Column>
                                <Column field="price" header="Price" sortable>
                                    <template #body="slotProps">
                                        {{formatCurrency(slotProps.data.price)}}
                                    </template>
                                </Column>
                            </DataTable>
                        </OverlayPanel>
                    </div>
                </div>
                <div class="p-col-12 p-md-3">
                    <div class="card p-fluid">
                        <h5>Dialog</h5>
                        <Dialog header="Dialog" v-model:visible="display" :style="{width: '50vw'}" :breakpoints="{'960px':'75vw'}" :modal="true">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <template #footer>
                                <Button label="Dismiss" @click="close" icon="pi pi-check" class="p-button-text"/>
                            </template>
                        </Dialog>
                        <Button label="Show" icon="pi pi-external-link" @click="open" class="p-button-secondary"/>
                    </div>
                </div>
                <div class="p-col-12 p-md-3">
                    <div class="card p-fluid">
                        <h5>Confirm Popup</h5>
                        <Button type="button" label="Confirm" @click="confirmWithPopup" class="p-button-success" icon="pi pi-check" />
                        <ConfirmPopup group="popup"></ConfirmPopup>
                    </div>
                </div>
                <div class="p-col-12 p-md-3">
                    <div class="card p-fluid">
                        <h5>Confirm Dialog</h5>
                        <Button type="button" label="Confirm" @click="confirmWithDialog" class="p-button-help" icon="pi pi-check" />
                        <ConfirmDialog group="dialog">></ConfirmDialog>
                    </div>
                </div>
                <div class="p-col-12">
                    <div class="card card-w-title">
                        <h5>Menubar</h5>
                        <Menubar :model="tieredMenuItems">
                            <template #end>
                                <span class="p-input-icon-left">
                                    <i class="pi pi-search" />
                                    <InputText type="text" placeholder="Search" />
                                </span>
                            </template>
                        </Menubar>
                    </div>
                </div>

                <div class="p-col-12 p-md-4">
                    <div class="card">
                        <h5>Plain Menu</h5>
                        <Menu :model="menuitems" />
                    </div>
                </div>

                <div class="p-col-12 p-md-4">
                    <div class="card">
                        <h5>Overlay Menu</h5>

                        <Menu ref="menu" :model="menuitems" :popup="true" />
                        <Button type="button" label="Options" icon="pi pi-angle-down" @click="toggleMenu" style="width: auto"/>
                    </div>

                    <div class="card" @contextmenu="onContextRightClick">
                        <h5>ContextMenu</h5>
                        Right click to display.
                        <ContextMenu ref="contextMenu" :model="contextMenuItems" />
                    </div>
                </div>

                <div class="p-col-12 p-lg-6">
                    <div class="card">
                        <h5>Messages</h5>
                        <Message severity="info">Info Message</Message>
                        <Message severity="success">Success Message</Message>
                        <Message severity="warn">Warning Message</Message>
                        <Message severity="error">Error Message</Message>
                    </div>
                </div>

                <div class="p-col-12 p-lg-6">
                    <div class="card">
                        <h5>Toast</h5>

                        <Toast />
                        <Button @click="showToast('info')" label="Info" class="p-button-info p-mr-2 p-mb-2" />
                        <Button @click="showToast('success')" label="Success" class="p-button-success p-mr-2 p-mb-2" />
                        <Button @click="showToast('warn')" label="Warn" class="p-button-warning p-mr-2 p-mb-2" />
                        <Button @click="showToast('error')" label="Error" class="p-button-danger p-mb-2" />
                    </div>

                    <div class="card">
                        <h5>Timeline</h5>
                        <Timeline :value="timelineEvents" align="alternate">
                            <template #content="slotProps">
                                {{slotProps.item.status}}
                            </template>
                        </Timeline>
                    </div>
                </div>

                <div class="p-col-12 p-lg-8">
                    <div class="card">
                        <h5>Inline Message</h5>
                        <div class="p-formgroup-inline" style="margin-bottom:.5rem">
                            <label for="username1" class="p-sr-only">Username</label>
                            <InputText id="username1" type="text" placeholder="Username" class="p-invalid p-mr-2" />
                            <InlineMessage>Username is required</InlineMessage>
                        </div>
                        <div class="p-formgroup-inline">
                            <label for="email" class="p-sr-only">email</label>
                            <InputText id="email" placeholder="Email" class="p-invalid p-mr-2" />
                            <InlineMessage />
                        </div>
                    </div>
                </div>

                <div class="p-col-12 p-lg-4">
                    <div class="card">
                        <h5>Helper Text</h5>
                        <div class="p-field p-fluid">
                            <label for="username2">Username</label>
                            <InputText id="username2" type="text" class="p-invalid" aria-describedby="username-help" />
                            <small id="username-help" class="p-error">Enter your username to reset your password.</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <AppDoc name="ResponsiveDemo" :sources="sources" :service="['CustomerService', 'CountryService', 'ProductService']" 
            :data="['customers-large', 'countries', 'products-small']" github="responsive/ResponsiveDemo.vue" />
    </div>
</template>

<script>
import { FilterMatchMode, FilterOperator } from 'primevue/api';
import CustomerService from '../../service/CustomerService';
import CountryService from '../../service/CountryService';
import ProductService from '../../service/ProductService';
    
export default {
    data() {
        return {
            customers: null,
            selectedCustomers: null,
            products: null,
            selectedProduct: null,
            filters: null,
            floatValue: null,
            autoValue: null,
            selectedAutoValue: null,
            autoFilteredValue: [],
            calendarValue: null,
            inputNumberValue: null,
            chipsValue: null,
            sliderValue: null,
            ratingValue: null,
            colorValue: '1976D2',
            radioValue: null,
            checkboxValue: [],
            switchValue: false,
            display: false,
            listboxValues: [
                {name: 'New York', code: 'NY'},
                {name: 'Rome', code: 'RM'},
                {name: 'London', code: 'LDN'},
                {name: 'Istanbul', code: 'IST'},
                {name: 'Paris', code: 'PRS'}
            ],
            listboxValue: null,
            dropdownValues: [
                {name: 'New York', code: 'NY'},
                {name: 'Rome', code: 'RM'},
                {name: 'London', code: 'LDN'},
                {name: 'Istanbul', code: 'IST'},
                {name: 'Paris', code: 'PRS'}
            ],
            dropdownValue: null,
            multiselectValue: null,
            multiselectValues: [
                {name: 'Australia', code: 'AU'},
                {name: 'Brazil', code: 'BR'},
                {name: 'China', code: 'CN'},
                {name: 'Egypt', code: 'EG'},
                {name: 'France', code: 'FR'},
                {name: 'Germany', code: 'DE'},
                {name: 'India', code: 'IN'},
                {name: 'Japan', code: 'JP'},
                {name: 'Spain', code: 'ES'},
                {name: 'United States', code: 'US'}
            ],
            toggleValue: false,
            selectButtonValues1: [
                {name: 'Option 1', code: 'O1'},
                {name: 'Option 2', code: 'O2'},
                {name: 'Option 3', code: 'O3'},
            ],
            selectButtonValue1: null,
            selectButtonValues2: [
                {name: 'Option 1', code: 'O1'},
                {name: 'Option 2', code: 'O2'},
                {name: 'Option 3', code: 'O3'},
            ],
            selectButtonValue2: null,
			tieredMenuItems: [
				{
					label:'Customers',
					icon:'pi pi-fw pi-table',
					items:[
						{
							label:'New',
							icon:'pi pi-fw pi-user-plus',
							items:[
								{
									label:'Customer',
									icon:'pi pi-fw pi-plus'
								},
								{
									label:'Duplicate',
									icon:'pi pi-fw pi-copy'
								},

							]
						},
						{
							label:'Edit',
							icon:'pi pi-fw pi-user-edit'
						}
					]
				},
				{
					label:'Orders',
					icon:'pi pi-fw pi-shopping-cart',
					items:[
						{
							label:'View',
							icon:'pi pi-fw pi-list'
						},
						{
							label:'Search',
							icon:'pi pi-fw pi-search'
						},

					]
				},
				{
					label:'Shipments',
					icon:'pi pi-fw pi-envelope',
					items:[
						{
							label:'Tracker',
							icon:'pi pi-fw pi-compass'

						},
						{
							label:'Map',
							icon:'pi pi-fw pi-map-marker'

						},
						{
							label:'Manage',
							icon:'pi pi-fw pi-pencil'
						}
					]
				},
				{
					label:'Profile',
					icon:'pi pi-fw pi-user',
					items:[
						{
							label:'Settings',
							icon:'pi pi-fw pi-cog'
						},
						{
							label:'Billing',
							icon:'pi pi-fw pi-file'
						}
					]
				},
				{
					separator:true
				},
				{
					label:'Quit',
					icon:'pi pi-fw pi-sign-out'
				}
			],
			menuitems: [
				{
					label:'Customers',
					items:[
						{
							label:'New',
							icon:'pi pi-fw pi-plus',
						},
						{
							label:'Edit',
							icon:'pi pi-fw pi-user-edit'
						}
					]
				},
				{
					label:'Orders',
					items:[
						{
							label:'View',
							icon:'pi pi-fw pi-list'
						},
						{
							label:'Search',
							icon:'pi pi-fw pi-search'
						},

					]
				}
			],
			contextMenuItems: [
				{
					label: 'Save',
					icon: 'pi pi-save'
				},
				{
					label: 'Update',
					icon: 'pi pi-refresh'
				},
				{
					label: 'Delete',
					icon: 'pi pi-trash'
				},
				{
					separator: true
				},
				{
					label: 'Options',
					icon: 'pi pi-cog'
				},
            ],
            message: [],
            timelineEvents: [
                {status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg'},
                {status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7'},
                {status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800'},
                {status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B'}
            ],
            sources: {
                'options-api': {
                    tabName: 'Options API Source',
                    content: `
<template>
    <div>
        <h1>Responsive Design</h1>
        <div class="p-grid">
            <div class="p-col-12 p-md-6 p-fluid">
                <div class="card">
                    <h5>InputText</h5>
                    <div class="p-grid p-formgrid">
                        <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
                            <InputText type="text" placeholder="Default"></InputText>
                        </div>
                        <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
                            <InputText type="text" placeholder="Disabled" :disabled="true"></InputText>
                        </div>
                        <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
                            <InputText type="text" placeholder="Invalid" class="p-invalid" />
                        </div>
                    </div>

                    <h5>Icons</h5>
                    <div class="p-grid p-formgrid">
                        <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
                            <span class="p-input-icon-left">
                                <i class="pi pi-user" />
                                <InputText type="text" placeholder="Username" />
                            </span>
                        </div>
                        <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
                            <span class="p-input-icon-right">
                                <InputText type="text" placeholder="Search" />
                                <i class="pi pi-search" />
                            </span>
                        </div>
                        <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
                            <span class="p-input-icon-left p-input-icon-right">
                                <i class="pi pi-user" />
                                <InputText type="text" placeholder="Search" />
                                <i class="pi pi-search" />
                            </span>
                        </div>
                    </div>

                    <h5>Float Label</h5>
                    <span class="p-float-label">
                        <InputText id="username" type="text" v-model="floatValue"/>
                        <label for="username">Username</label>
                    </span>

                    <h5>Textarea</h5>
                    <Textarea placeholder="Your Message" :autoResize="true" rows="3" cols="30" />

                    <h5>AutoComplete</h5>
                    <AutoComplete placeholder="Search" id="dd" :dropdown="true" :multiple="true" v-model="selectedAutoValue" :suggestions="autoFilteredValue" @complete="searchCountry($event)" field="name"/>

                    <h5>Calendar</h5>
                    <Calendar :showIcon="true" :showButtonBar="true" v-model="calendarValue"></Calendar>

                    <h5>Spinner</h5>
                    <InputNumber v-model="inputNumberValue" showButtons mode="decimal"></InputNumber>

                    <h5>Chips</h5>
                    <Chips v-model="chipsValue"/>
                </div>

                <div class="card">
                    <h5>Slider</h5>
                    <InputText v-model.number="sliderValue" />
                    <Slider v-model="sliderValue" />

                    <h5>Rating</h5>
                    <Rating v-model="ratingValue"/>

                    <h5>Input Switch</h5>
                    <InputSwitch v-model="switchValue" />
                </div>
            </div>

            <div class="p-col-12 p-md-6">
                <div class="card">
                    <h5>RadioButton</h5>
                    <div class="p-grid">
                        <div class="p-col-12 p-md-4">
                            <div class="p-field-radiobutton">
                                <RadioButton id="option1" name="option" value="Option 1" v-model="radioValue" />
                                <label for="option1">Option 1</label>
                            </div>
                        </div>
                        <div class="p-col-12 p-md-4">
                            <div class="p-field-radiobutton">
                                <RadioButton id="option2" name="option" value="Option 2" v-model="radioValue" />
                                <label for="option2">Option 2</label>
                            </div>
                        </div>
                        <div class="p-col-12 p-md-4">
                            <div class="p-field-radiobutton">
                                <RadioButton id="option3" name="option" value="Option 3" v-model="radioValue" />
                                <label for="option3">Option 3</label>
                            </div>
                        </div>
                    </div>

                    <h5>Checkbox</h5>
                    <div class="p-grid">
                        <div class="p-col-12 p-md-4">
                            <div class="p-field-checkbox">
                                <Checkbox id="checkOption1" name="option" value="Option 1" v-model="checkboxValue" />
                                <label for="checkOption1">Option 1</label>
                            </div>
                        </div>
                        <div class="p-col-12 p-md-4">
                            <div class="p-field-checkbox">
                                <Checkbox id="checkOption2" name="option" value="Option 2" v-model="checkboxValue" />
                                <label for="checkOption2">Option 2</label>
                            </div>
                        </div>
                        <div class="p-col-12 p-md-4">
                            <div class="p-field-checkbox">
                                <Checkbox id="checkOption3" name="option" value="Option 3" v-model="checkboxValue" />
                                <label for="checkOption3">Option 3</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card p-fluid">
                    <h5>Listbox</h5>
                    <Listbox v-model="listboxValue" :options="listboxValues" optionLabel="name" :filter="true"/>

                    <h5>Dropdown</h5>
                    <Dropdown v-model="dropdownValue" :options="dropdownValues" optionLabel="name" placeholder="Select" />

                    <h5>MultiSelect</h5>
                    <MultiSelect v-model="multiselectValue" :options="multiselectValues" optionLabel="name" placeholder="Select Countries" :filter="true"></MultiSelect>
                </div>

                <div class="card p-fluid">
                    <h5>ToggleButton</h5>
                    <ToggleButton v-model="toggleValue" onLabel="Yes" offLabel="No"/>

                    <h5>SelectButton</h5>
                    <SelectButton v-model="selectButtonValue1" :options="selectButtonValues1" optionLabel="name" />

                    <h5>SelectButton - Multiple</h5>
                    <SelectButton v-model="selectButtonValue2" :options="selectButtonValues2" optionLabel="name" :multiple="true"/>
                </div>
            </div>

            <div class="p-col-12">
                <div class="card">
                    <h5>Buttons</h5>
                    <Button label="Submit" class="p-mr-2 p-mb-2" />
                    <Button icon="pi pi-check" class="p-mr-2 p-mb-2" />
                    <Button label="Submit" icon="pi pi-check" class="p-mr-2 p-mb-2" />
                    <Button label="Submit" icon="pi pi-check" iconPos="right" class="p-mr-2 p-mb-2" />
                    <Button label="Disabled" disabled="disabled" class="p-mr-2 p-mb-2" />
                    
                    <h5>Severities</h5>
                    <Button label="Primary" class="p-mr-2 p-mb-2" />
                    <Button label="Secondary" class="p-button-secondary p-mr-2 p-mb-2" />
                    <Button label="Success" class="p-button-success p-mr-2 p-mb-2" />
                    <Button label="Info" class="p-button-info p-mr-2 p-mb-2" />
                    <Button label="Warning" class="p-button-warning p-mr-2 p-mb-2" />
                    <Button label="Help" class="p-button-help p-mr-2 p-mb-2" />
                    <Button label="Danger" class="p-button-danger p-mr-2 p-mb-2" />

                    <h5>Raised Buttons</h5>
                    <Button label="Primary" class="p-button-raised p-mr-2 p-mb-2" />
                    <Button label="Secondary" class="p-button-raised p-button-secondary p-mr-2 p-mb-2" />
                    <Button label="Success" class="p-button-raised p-button-success p-mr-2 p-mb-2" />
                    <Button label="Info" class="p-button-raised p-button-info p-mr-2 p-mb-2" />
                    <Button label="Warning" class="p-button-raised p-button-warning p-mr-2 p-mb-2" />
                    <Button label="Help" class="p-button-raised p-button-help p-mr-2 p-mb-2" />
                    <Button label="Danger" class="p-button-raised p-button-danger p-mb-2" />

                    <h5>Rounded Buttons</h5>
                    <Button label="Primary" class="p-button-rounded p-mr-2 p-mb-2" />
                    <Button label="Secondary" class="p-button-rounded p-button-secondary p-mr-2 p-mb-2" />
                    <Button label="Success" class="p-button-rounded p-button-success p-mr-2 p-mb-2" />
                    <Button label="Info" class="p-button-rounded p-button-info p-mr-2 p-mb-2" />
                    <Button label="Warning" class="p-button-rounded p-button-warning p-mr-2 p-mb-2" />
                    <Button label="Help" class="p-button-rounded p-button-help p-mr-2 p-mb-2" />
                    <Button label="Danger" class="p-button-rounded p-button-danger p-mb-2" />

                    <h5>Text Buttons</h5>
                    <Button label="Primary" class="p-button-text p-mr-2 p-mb-2" />
                    <Button label="Secondary" class="p-button-secondary p-button-text p-mr-2 p-mb-2" />
                    <Button label="Success" class="p-button-success p-button-text p-mr-2 p-mb-2" />
                    <Button label="Info" class="p-button-info p-button-text p-mr-2 p-mb-2" />
                    <Button label="Warning" class="p-button-warning p-button-text p-mr-2 p-mb-2" />
                    <Button label="Help" class="p-button-help p-button-text p-mr-2 p-mb-2" />
                    <Button label="Danger" class="p-button-danger p-button-text p-mr-2 p-mb-2" />
                    <Button label="Plain" class="p-button-text p-button-plain p-mb-2" />

                    <h5>Raised Text Buttons</h5>
                    <Button label="Primary" class="p-button-raised p-button-text p-mr-2 p-mb-2" />
                    <Button label="Secondary" class="p-button-raised p-button-secondary p-button-text p-mr-2 p-mb-2" />
                    <Button label="Success" class="p-button-raised p-button-success p-button-text p-mr-2 p-mb-2" />
                    <Button label="Info" class="p-button-raised p-button-info p-button-text p-mr-2 p-mb-2" />
                    <Button label="Warning" class="p-button-raised p-button-warning p-button-text p-mr-2 p-mb-2" />
                    <Button label="Help" class="p-button-raised p-button-help p-button-text p-mr-2 p-mb-2" />
                    <Button label="Danger" class="p-button-raised p-button-danger p-button-text p-mr-2 p-mb-2" />
                    <Button label="Plain" class="p-button-raised p-button-plain p-button-text p-mb-2" />

                    <h5>Outlined Buttons</h5>
                    <Button label="Primary" class="p-button-outlined p-mr-2 p-mb-2" />
                    <Button label="Secondary" class="p-button-outlined p-button-secondary p-mr-2 p-mb-2" />
                    <Button label="Success" class="p-button-outlined p-button-success p-mr-2 p-mb-2" />
                    <Button label="Info" class="p-button-outlined p-button-info p-mr-2 p-mb-2" />
                    <Button label="Warning" class="p-button-outlined p-button-warning p-mr-2 p-mb-2" />
                    <Button label="Help" class="p-button-outlined p-button-help p-mr-2 p-mb-2" />
                    <Button label="Danger" class="p-button-outlined p-button-danger p-mr-2 p-mb-2" />
                    <Button label="Plain" class="p-button-outlined p-button-plain p-mb-2" />

                    <h5>Rounded Icon Buttons</h5>
                    <Button icon="pi pi-check" class="p-button-rounded p-mr-2 p-mb-2" />
                    <Button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary p-mr-2 p-mb-2" />
                    <Button icon="pi pi-search" class="p-button-rounded p-button-success p-mr-2 p-mb-2" />
                    <Button icon="pi pi-user" class="p-button-rounded p-button-info p-mr-2 p-mb-2" />
                    <Button icon="pi pi-bell" class="p-button-rounded p-button-warning p-mr-2 p-mb-2" />
                    <Button icon="pi pi-heart" class="p-button-rounded p-button-help p-mr-2 p-mb-2" />
                    <Button icon="pi pi-times" class="p-button-rounded p-button-danger p-mb-2" />

                    <h5>Rounded Text Icon Buttons</h5>
                    <Button icon="pi pi-check" class="p-button-rounded p-button-text p-mr-2 p-mb-2" />
                    <Button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary p-button-text p-mr-2 p-mb-2" />
                    <Button icon="pi pi-search" class="p-button-rounded p-button-success p-button-text p-mr-2 p-mb-2" />
                    <Button icon="pi pi-user" class="p-button-rounded p-button-info p-button-text p-mr-2 p-mb-2" />
                    <Button icon="pi pi-bell" class="p-button-rounded p-button-warning p-button-text p-mr-2 p-mb-2" />
                    <Button icon="pi pi-heart" class="p-button-rounded p-button-help p-button-text p-mr-2 p-mb-2" />
                    <Button icon="pi pi-times" class="p-button-rounded p-button-danger p-button-text p-mr-2 p-mb-2" />

                    <h5>Rounded and Outlined Icon Buttons</h5>
                    <Button icon="pi pi-check" class="p-button-rounded p-button-outlined p-mr-2 p-mb-2" />
                    <Button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                    <Button icon="pi pi-search" class="p-button-rounded p-button-success p-button-outlined p-mr-2 p-mb-2" />
                    <Button icon="pi pi-user" class="p-button-rounded p-button-info p-button-outlined p-mr-2 p-mb-2" />
                    <Button icon="pi pi-bell" class="p-button-rounded p-button-warning p-button-outlined p-mr-2 p-mb-2" />
                    <Button icon="pi pi-heart" class="p-button-rounded p-button-help p-button-outlined p-mr-2 p-mb-2" />
                    <Button icon="pi pi-times" class="p-button-rounded p-button-danger p-button-outlined p-mb-2" />

                    <h5>Badges</h5>
                    <Button type="button" label="Emails" badge="8" class="p-mr-2 p-mb-2" />
                    <Button type="button" label="Messages" icon="pi pi-users" class="p-button-warning p-mb-2" badge="8" badgeClass="p-badge-danger" />

                    <h5>Button Set</h5>
                    <span class="p-buttonset">
                        <Button label="Save" icon="pi pi-check" />
                        <Button label="Delete" icon="pi pi-trash" />
                        <Button label="Cancel" icon="pi pi-times" />
                    </span>
                </div>
            </div>

            <div class="p-col-12">
                <div class="card">
                    <DataTable :value="customers" :paginator="true" :rows="10"
                        dataKey="id" :rowHover="true" v-model:selection="selectedCustomers" :filters="filters"
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[10,25,50]"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries" responsiveLayout="scroll">
                        <template #header>
                            <div class="p-d-flex p-ai-center p-jc-between">
                                DataTable
                                <span class="p-input-icon-left">
                                    <i class="pi pi-search" />
                                    <InputText v-model="filters['global'].value" placeholder="Global Search" />
                                </span>
                            </div>
                        </template>
                        <template #empty>
                            No customers found.
                        </template>
                        <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
                        <Column field="name" header="Name" :sortable="true" style="min-width:16rem">
                            <template #body="slotProps">
                                {{slotProps.data.name}}
                            </template>
                        </Column>
                        <Column header="Country" :sortable="true" sortField="country.name" filterField="country.name" filterMatchMode="contains" style="min-width:16rem">
                            <template #body="slotProps">
                                <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :class="'flag flag-' + slotProps.data.country.code" width="30" class="p-mr-2" />
                                <span class="image-text">{{slotProps.data.country.name}}</span>
                            </template>
                        </Column>
                        <Column field="status" header="Status" :sortable="true" filterMatchMode="equals" style="min-width:16rem">
                            <template #body="slotProps">
                                <span :class="'customer-badge status-' + slotProps.data.status">{{slotProps.data.status}}</span>
                            </template>
                        </Column>
                        <Column field="activity" header="Activity" :sortable="true" filterMatchMode="gte" style="min-width:16rem">
                            <template #body="slotProps">
                                <ProgressBar :value="slotProps.data.activity" :showValue="false" style="width: 100px"/>
                            </template>
                        </Column>
                    </DataTable>
                </div>
            </div>

            <div class="p-col-12 p-md-6">
                <div class="card">
                    <h5>AccordionPanel</h5>
                    <Accordion :multiple="true" :activeIndex="[0]">
                        <AccordionTab header="Header I">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </AccordionTab>
                        <AccordionTab header="Header II">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
                                ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                                voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                        </AccordionTab>
                        <AccordionTab header="Header III">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                                et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                                Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                                quo minus.</p>
                        </AccordionTab>
                    </Accordion>
                </div>

                <div class="card">
                    <h5>TabView</h5>
                    <TabView>
                        <TabPanel header="Header I">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></TabPanel>
                        <TabPanel header="Header II">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
                                ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                                voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                        </TabPanel>
                        <TabPanel header="Header III">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                                et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                                Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                                quo minus.</p>
                        </TabPanel>
                    </TabView>
                </div>
            </div>

            <div class="p-col-12 p-md-6">
                <div class="card">
                    <h5>Panel</h5>
                    <Panel header="Header" :toggleable="true">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Panel>
                </div>
                <div class="card">
                    <h5>Fieldset</h5>
                    <Fieldset legend="Legend" :toggleable="true">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Fieldset>
                </div>
            </div>

            <div class="p-col-12 p-md-3">
                <div class="card p-fluid">
                    <h5>Overlay Panel</h5>
                    <Button type="button" label="Choose" @click="toggle" icon="pi pi-search" />
                    <OverlayPanel ref="op" appendTo="body" :showCloseIcon="true" style="width: 450px" :breakpoints="{'960px':'75vw'}">
                        <DataTable :value="products" v-model:selection="selectedProduct" selectionMode="single" :paginator="true" :rows="5" @row-select="onProductSelect">
                            <Column field="name" header="Name" sortable></Column>
                            <Column header="Image">
                                <template #body="slotProps">
                                    <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.data.image" class="product-image" />
                                </template>
                            </Column>
                            <Column field="price" header="Price" sortable>
                                <template #body="slotProps">
                                    {{formatCurrency(slotProps.data.price)}}
                                </template>
                            </Column>
                        </DataTable>
                    </OverlayPanel>
                </div>
            </div>

            <div class="p-col-12 p-md-3">
                <div class="card p-fluid">
                    <h5>Dialog</h5>
                    <Dialog header="Dialog" v-model:visible="display" :style="{width: '50vw'}" :breakpoints="{'960px':'75vw'}" :modal="true">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <template #footer>
                            <Button label="Dismiss" @click="close" icon="pi pi-check" class="p-button-text"/>
                        </template>
                    </Dialog>
                    <Button label="Show" icon="pi pi-external-link" @click="open" class="p-button-secondary"/>
                </div>
            </div>

            <div class="p-col-12 p-md-3">
                <div class="card p-fluid">
                    <h5>Confirm Popup</h5>
                    <Button type="button" label="Confirm" @click="confirmWithPopup" class="p-button-success" icon="pi pi-check" />
                    <ConfirmPopup group="popup"></ConfirmPopup>
                </div>
            </div>
            <div class="p-col-12 p-md-3">
                <div class="card p-fluid">
                    <h5>Confirm Dialog</h5>
                    <Button type="button" label="Confirm" @click="confirmWithDialog" class="p-button-help" icon="pi pi-check" />
                    <ConfirmDialog group="dialog">></ConfirmDialog>
                </div>
            </div>
            <div class="p-col-12">
                <div class="card card-w-title">
                    <h5>Menubar</h5>
                    <Menubar :model="tieredMenuItems">
                        <template #end>
                            <span class="p-input-icon-left">
                                <i class="pi pi-search" />
                                <InputText type="text" placeholder="Search" />
                            </span>
                        </template>
                    </Menubar>
                </div>
            </div>

            <div class="p-col-12 p-md-4">
                <div class="card">
                    <h5>Plain Menu</h5>
                    <Menu :model="menuitems" />
                </div>
            </div>

            <div class="p-col-12 p-md-4">
                <div class="card">
                    <h5>Overlay Menu</h5>

                    <Menu ref="menu" :model="menuitems" :popup="true" />
                    <Button type="button" label="Options" icon="pi pi-angle-down" @click="toggleMenu" style="width: auto"/>
                </div>

                <div class="card" @contextmenu="onContextRightClick">
                    <h5>ContextMenu</h5>
                    Right click to display.
                    <ContextMenu ref="contextMenu" :model="contextMenuItems" />
                </div>
            </div>

            <div class="p-col-12 p-lg-6">
                <div class="card">
                    <h5>Messages</h5>
                    <Message severity="info">Info Message</Message>
                    <Message severity="success">Success Message</Message>
                    <Message severity="warn">Warning Message</Message>
                    <Message severity="error">Error Message</Message>
                </div>
            </div>

            <div class="p-col-12 p-lg-6">
                <div class="card">
                    <h5>Toast</h5>

                    <Toast />
                    <Button @click="showToast('info')" label="Info" class="p-button-info p-mr-2 p-mb-2" />
                    <Button @click="showToast('success')" label="Success" class="p-button-success p-mr-2 p-mb-2" />
                    <Button @click="showToast('warn')" label="Warn" class="p-button-warning p-mr-2 p-mb-2" />
                    <Button @click="showToast('error')" label="Error" class="p-button-danger p-mb-2" />
                </div>

                <div class="card">
                    <h5>Timeline</h5>
                    <Timeline :value="timelineEvents" align="alternate">
                        <template #content="slotProps">
                            {{slotProps.item.status}}
                        </template>
                    </Timeline>
                </div>
            </div>

            <div class="p-col-12 p-lg-8">
                <div class="card">
                    <h5>Inline Message</h5>
                    <div class="p-formgroup-inline" style="margin-bottom:.5rem">
                        <label for="username1" class="p-sr-only">Username</label>
                        <InputText id="username1" type="text" placeholder="Username" class="p-invalid p-mr-2" />
                        <InlineMessage>Username is required</InlineMessage>
                    </div>
                    <div class="p-formgroup-inline">
                        <label for="email" class="p-sr-only">email</label>
                        <InputText id="email" placeholder="Email" class="p-invalid p-mr-2" />
                        <InlineMessage />
                    </div>
                </div>
            </div>

            <div class="p-col-12 p-lg-4">
                <div class="card">
                    <h5>Helper Text</h5>
                    <div class="p-field p-fluid">
                        <label for="username2">Username</label>
                        <InputText id="username2" type="text" class="p-invalid" aria-describedby="username-help" />
                        <small id="username-help" class="p-error">Enter your username to reset your password.</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { FilterMatchMode, FilterOperator } from 'primevue/api';
import CustomerService from './service/CustomerService';
import CountryService from './service/CountryService';
import ProductService from './service/ProductService';
    
export default {
    data() {
        return {
            customers: null,
            selectedCustomers: null,
            products: null,
            selectedProduct: null,
            filters: null,
            floatValue: null,
            autoValue: null,
            selectedAutoValue: null,
            autoFilteredValue: [],
            calendarValue: null,
            inputNumberValue: null,
            chipsValue: null,
            sliderValue: null,
            ratingValue: null,
            colorValue: '1976D2',
            radioValue: null,
            checkboxValue: [],
            switchValue: false,
            display: false,
            listboxValues: [
                {name: 'New York', code: 'NY'},
                {name: 'Rome', code: 'RM'},
                {name: 'London', code: 'LDN'},
                {name: 'Istanbul', code: 'IST'},
                {name: 'Paris', code: 'PRS'}
            ],
            listboxValue: null,
            dropdownValues: [
                {name: 'New York', code: 'NY'},
                {name: 'Rome', code: 'RM'},
                {name: 'London', code: 'LDN'},
                {name: 'Istanbul', code: 'IST'},
                {name: 'Paris', code: 'PRS'}
            ],
            dropdownValue: null,
            multiselectValue: null,
            multiselectValues: [
                {name: 'Australia', code: 'AU'},
                {name: 'Brazil', code: 'BR'},
                {name: 'China', code: 'CN'},
                {name: 'Egypt', code: 'EG'},
                {name: 'France', code: 'FR'},
                {name: 'Germany', code: 'DE'},
                {name: 'India', code: 'IN'},
                {name: 'Japan', code: 'JP'},
                {name: 'Spain', code: 'ES'},
                {name: 'United States', code: 'US'}
            ],
            toggleValue: false,
            selectButtonValues1: [
                {name: 'Option 1', code: 'O1'},
                {name: 'Option 2', code: 'O2'},
                {name: 'Option 3', code: 'O3'},
            ],
            selectButtonValue1: null,
            selectButtonValues2: [
                {name: 'Option 1', code: 'O1'},
                {name: 'Option 2', code: 'O2'},
                {name: 'Option 3', code: 'O3'},
            ],
            selectButtonValue2: null,
			tieredMenuItems: [
				{
					label:'Customers',
					icon:'pi pi-fw pi-table',
					items:[
						{
							label:'New',
							icon:'pi pi-fw pi-user-plus',
							items:[
								{
									label:'Customer',
									icon:'pi pi-fw pi-plus'
								},
								{
									label:'Duplicate',
									icon:'pi pi-fw pi-copy'
								},

							]
						},
						{
							label:'Edit',
							icon:'pi pi-fw pi-user-edit'
						}
					]
				},
				{
					label:'Orders',
					icon:'pi pi-fw pi-shopping-cart',
					items:[
						{
							label:'View',
							icon:'pi pi-fw pi-list'
						},
						{
							label:'Search',
							icon:'pi pi-fw pi-search'
						},

					]
				},
				{
					label:'Shipments',
					icon:'pi pi-fw pi-envelope',
					items:[
						{
							label:'Tracker',
							icon:'pi pi-fw pi-compass'

						},
						{
							label:'Map',
							icon:'pi pi-fw pi-map-marker'

						},
						{
							label:'Manage',
							icon:'pi pi-fw pi-pencil'
						}
					]
				},
				{
					label:'Profile',
					icon:'pi pi-fw pi-user',
					items:[
						{
							label:'Settings',
							icon:'pi pi-fw pi-cog'
						},
						{
							label:'Billing',
							icon:'pi pi-fw pi-file'
						}
					]
				},
				{
					separator:true
				},
				{
					label:'Quit',
					icon:'pi pi-fw pi-sign-out'
				}
			],
			menuitems: [
				{
					label:'Customers',
					items:[
						{
							label:'New',
							icon:'pi pi-fw pi-plus',
						},
						{
							label:'Edit',
							icon:'pi pi-fw pi-user-edit'
						}
					]
				},
				{
					label:'Orders',
					items:[
						{
							label:'View',
							icon:'pi pi-fw pi-list'
						},
						{
							label:'Search',
							icon:'pi pi-fw pi-search'
						},

					]
				}
			],
			contextMenuItems: [
				{
					label: 'Save',
					icon: 'pi pi-save'
				},
				{
					label: 'Update',
					icon: 'pi pi-refresh'
				},
				{
					label: 'Delete',
					icon: 'pi pi-trash'
				},
				{
					separator: true
				},
				{
					label: 'Options',
					icon: 'pi pi-cog'
				},
            ],
            message: [],
            timelineEvents: [
                {status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg'},
                {status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7'},
                {status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800'},
                {status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B'}
            ]
        }
    },
    countryService: null,
    created() {
        this.countryService = new CountryService();
        this.customerService = new CustomerService();
        this.productService = new ProductService();
        this.initFilters();
    },
    mounted() {
        this.countryService.getCountries().then(data => this.autoValue = data);
        this.customerService.getCustomersLarge().then(data => this.customers = data);
        this.productService.getProductsSmall().then(data => this.products = data);
    },
    methods: {
        toggleMenu(event) {
			this.$refs.menu.toggle(event);
        },
        onContextRightClick(event) {
            this.$refs.contextMenu.show(event);
        },
        searchCountry(event) {
            setTimeout(() => {
                if (!event.query.trim().length) {
                    this.autoFilteredValue = [...this.autoValue];
                }
                else {
                    this.autoFilteredValue = this.autoValue.filter((country) => {
                        return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                    });
                }
            }, 250);
        },
        addMessage(severity) {
            this.message = [{severity: severity, content: 'Message Detail'}]
        },
        showToast(severity) {
            this.$toast.add({severity: severity, summary: 'Message Summary', detail:'Message Detail', life: 3000});
        },
        open() {
			this.display = true;
		},
		close() {
			this.display = false;
        },
        toggle(event) {
			this.$refs.op.toggle(event);
        },
        confirmWithPopup(event) {
            this.$confirm.require({
                target: event.currentTarget,
                group: 'popup',
                message: 'Are you sure you want to proceed?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.$toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});
                },
                reject: () => {
                    this.$toast.add({severity:'info', summary:'Rejected', detail:'You have rejected', life: 3000});
                }
            });
        },
        confirmWithDialog() {
            this.$confirm.require({
                group: 'dialog',
                header: 'Confirm',
                message: 'Are you sure you want to proceed?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.$toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});
                },
                reject: () => {
                    this.$toast.add({severity:'info', summary:'Rejected', detail:'You have rejected', life: 3000});
                }
            });
        },
        formatCurrency(value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        },
        onProductSelect(event) {
            this.$refs.op.hide();
            this.$toast.add({severity:'info', summary: 'Product Selected', detail: event.data.name, life: 3000});
        },
        initFilters() {
            this.filters = {
                'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
                'name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
                'country.name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
                'representative': {value: null, matchMode: FilterMatchMode.IN},
                'date': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.DATE_IS}]},
                'balance': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
                'status': {operator: FilterOperator.OR, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
                'activity': {value: null, matchMode: FilterMatchMode.BETWEEN},
                'verified': {value: null, matchMode: FilterMatchMode.EQUALS}
            }
        }
    }
}
<\\/script>

<style scoped lang="scss">
.image-text {
    vertical-align: middle;
}

.p-progressbar {
    height: 4px;
}

.customer-badge {
    border-radius: 2px;
    padding: .25em .5rem;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: .3px;

    &.status-qualified {
        background-color: #C8E6C9;
        color: #256029;
    }

    &.status-unqualified {
        background-color: #FFCDD2;
        color: #C63737;
    }

    &.status-negotiation {
        background-color: #FEEDAF;
        color: #8A5340;
    }

    &.status-new {
        background-color: #B3E5FC;
        color: #23547B;
    }

    &.status-renewal {
        background-color: #ECCFFF;
        color: #694382;
    }

    &.status-proposal {
        background-color: #FFD8B2;
        color: #805B36;
    }
}

.product-image {
    width: 50px;
    box-shadow: 0 3px 6px rgba(0,0,0,.16), 0 3px 6px rgba(0,0,0,.23);
}    

::v-deep(.p-paginator) {
    .p-paginator-current {
        margin-left: auto;
    }
}
</style>                    
`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <h1>Responsive Design</h1>
        <div class="p-grid">
            <div class="p-col-12 p-md-6 p-fluid">
                <div class="card">
                    <h5>InputText</h5>
                    <div class="p-grid p-formgrid">
                        <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
                            <InputText type="text" placeholder="Default"></InputText>
                        </div>
                        <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
                            <InputText type="text" placeholder="Disabled" :disabled="true"></InputText>
                        </div>
                        <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
                            <InputText type="text" placeholder="Invalid" class="p-invalid" />
                        </div>
                    </div>

                    <h5>Icons</h5>
                    <div class="p-grid p-formgrid">
                        <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
                            <span class="p-input-icon-left">
                                <i class="pi pi-user" />
                                <InputText type="text" placeholder="Username" />
                            </span>
                        </div>
                        <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
                            <span class="p-input-icon-right">
                                <InputText type="text" placeholder="Search" />
                                <i class="pi pi-search" />
                            </span>
                        </div>
                        <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
                            <span class="p-input-icon-left p-input-icon-right">
                                <i class="pi pi-user" />
                                <InputText type="text" placeholder="Search" />
                                <i class="pi pi-search" />
                            </span>
                        </div>
                    </div>

                    <h5>Float Label</h5>
                    <span class="p-float-label">
                        <InputText id="username" type="text" v-model="floatValue"/>
                        <label for="username">Username</label>
                    </span>

                    <h5>Textarea</h5>
                    <Textarea placeholder="Your Message" :autoResize="true" rows="3" cols="30" />

                    <h5>AutoComplete</h5>
                    <AutoComplete placeholder="Search" id="dd" :dropdown="true" :multiple="true" v-model="selectedAutoValue" :suggestions="autoFilteredValue" @complete="searchCountry($event)" field="name"/>

                    <h5>Calendar</h5>
                    <Calendar :showIcon="true" :showButtonBar="true" v-model="calendarValue"></Calendar>

                    <h5>Spinner</h5>
                    <InputNumber v-model="inputNumberValue" showButtons mode="decimal"></InputNumber>

                    <h5>Chips</h5>
                    <Chips v-model="chipsValue"/>
                </div>

                <div class="card">
                    <h5>Slider</h5>
                    <InputText v-model.number="sliderValue" />
                    <Slider v-model="sliderValue" />

                    <h5>Rating</h5>
                    <Rating v-model="ratingValue"/>

                    <h5>Input Switch</h5>
                    <InputSwitch v-model="switchValue" />
                </div>
            </div>

            <div class="p-col-12 p-md-6">
                <div class="card">
                    <h5>RadioButton</h5>
                    <div class="p-grid">
                        <div class="p-col-12 p-md-4">
                            <div class="p-field-radiobutton">
                                <RadioButton id="option1" name="option" value="Option 1" v-model="radioValue" />
                                <label for="option1">Option 1</label>
                            </div>
                        </div>
                        <div class="p-col-12 p-md-4">
                            <div class="p-field-radiobutton">
                                <RadioButton id="option2" name="option" value="Option 2" v-model="radioValue" />
                                <label for="option2">Option 2</label>
                            </div>
                        </div>
                        <div class="p-col-12 p-md-4">
                            <div class="p-field-radiobutton">
                                <RadioButton id="option3" name="option" value="Option 3" v-model="radioValue" />
                                <label for="option3">Option 3</label>
                            </div>
                        </div>
                    </div>

                    <h5>Checkbox</h5>
                    <div class="p-grid">
                        <div class="p-col-12 p-md-4">
                            <div class="p-field-checkbox">
                                <Checkbox id="checkOption1" name="option" value="Option 1" v-model="checkboxValue" />
                                <label for="checkOption1">Option 1</label>
                            </div>
                        </div>
                        <div class="p-col-12 p-md-4">
                            <div class="p-field-checkbox">
                                <Checkbox id="checkOption2" name="option" value="Option 2" v-model="checkboxValue" />
                                <label for="checkOption2">Option 2</label>
                            </div>
                        </div>
                        <div class="p-col-12 p-md-4">
                            <div class="p-field-checkbox">
                                <Checkbox id="checkOption3" name="option" value="Option 3" v-model="checkboxValue" />
                                <label for="checkOption3">Option 3</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card p-fluid">
                    <h5>Listbox</h5>
                    <Listbox v-model="listboxValue" :options="listboxValues" optionLabel="name" :filter="true"/>

                    <h5>Dropdown</h5>
                    <Dropdown v-model="dropdownValue" :options="dropdownValues" optionLabel="name" placeholder="Select" />

                    <h5>MultiSelect</h5>
                    <MultiSelect v-model="multiselectValue" :options="multiselectValues" optionLabel="name" placeholder="Select Countries" :filter="true"></MultiSelect>
                </div>

                <div class="card p-fluid">
                    <h5>ToggleButton</h5>
                    <ToggleButton v-model="toggleValue" onLabel="Yes" offLabel="No"/>

                    <h5>SelectButton</h5>
                    <SelectButton v-model="selectButtonValue1" :options="selectButtonValues1" optionLabel="name" />

                    <h5>SelectButton - Multiple</h5>
                    <SelectButton v-model="selectButtonValue2" :options="selectButtonValues2" optionLabel="name" :multiple="true"/>
                </div>
            </div>

            <div class="p-col-12">
                <div class="card">
                    <h5>Buttons</h5>
                    <Button label="Submit" class="p-mr-2 p-mb-2" />
                    <Button icon="pi pi-check" class="p-mr-2 p-mb-2" />
                    <Button label="Submit" icon="pi pi-check" class="p-mr-2 p-mb-2" />
                    <Button label="Submit" icon="pi pi-check" iconPos="right" class="p-mr-2 p-mb-2" />
                    <Button label="Disabled" disabled="disabled" class="p-mr-2 p-mb-2" />
                    
                    <h5>Severities</h5>
                    <Button label="Primary" class="p-mr-2 p-mb-2" />
                    <Button label="Secondary" class="p-button-secondary p-mr-2 p-mb-2" />
                    <Button label="Success" class="p-button-success p-mr-2 p-mb-2" />
                    <Button label="Info" class="p-button-info p-mr-2 p-mb-2" />
                    <Button label="Warning" class="p-button-warning p-mr-2 p-mb-2" />
                    <Button label="Help" class="p-button-help p-mr-2 p-mb-2" />
                    <Button label="Danger" class="p-button-danger p-mr-2 p-mb-2" />

                    <h5>Raised Buttons</h5>
                    <Button label="Primary" class="p-button-raised p-mr-2 p-mb-2" />
                    <Button label="Secondary" class="p-button-raised p-button-secondary p-mr-2 p-mb-2" />
                    <Button label="Success" class="p-button-raised p-button-success p-mr-2 p-mb-2" />
                    <Button label="Info" class="p-button-raised p-button-info p-mr-2 p-mb-2" />
                    <Button label="Warning" class="p-button-raised p-button-warning p-mr-2 p-mb-2" />
                    <Button label="Help" class="p-button-raised p-button-help p-mr-2 p-mb-2" />
                    <Button label="Danger" class="p-button-raised p-button-danger p-mb-2" />

                    <h5>Rounded Buttons</h5>
                    <Button label="Primary" class="p-button-rounded p-mr-2 p-mb-2" />
                    <Button label="Secondary" class="p-button-rounded p-button-secondary p-mr-2 p-mb-2" />
                    <Button label="Success" class="p-button-rounded p-button-success p-mr-2 p-mb-2" />
                    <Button label="Info" class="p-button-rounded p-button-info p-mr-2 p-mb-2" />
                    <Button label="Warning" class="p-button-rounded p-button-warning p-mr-2 p-mb-2" />
                    <Button label="Help" class="p-button-rounded p-button-help p-mr-2 p-mb-2" />
                    <Button label="Danger" class="p-button-rounded p-button-danger p-mb-2" />

                    <h5>Text Buttons</h5>
                    <Button label="Primary" class="p-button-text p-mr-2 p-mb-2" />
                    <Button label="Secondary" class="p-button-secondary p-button-text p-mr-2 p-mb-2" />
                    <Button label="Success" class="p-button-success p-button-text p-mr-2 p-mb-2" />
                    <Button label="Info" class="p-button-info p-button-text p-mr-2 p-mb-2" />
                    <Button label="Warning" class="p-button-warning p-button-text p-mr-2 p-mb-2" />
                    <Button label="Help" class="p-button-help p-button-text p-mr-2 p-mb-2" />
                    <Button label="Danger" class="p-button-danger p-button-text p-mr-2 p-mb-2" />
                    <Button label="Plain" class="p-button-text p-button-plain p-mb-2" />

                    <h5>Raised Text Buttons</h5>
                    <Button label="Primary" class="p-button-raised p-button-text p-mr-2 p-mb-2" />
                    <Button label="Secondary" class="p-button-raised p-button-secondary p-button-text p-mr-2 p-mb-2" />
                    <Button label="Success" class="p-button-raised p-button-success p-button-text p-mr-2 p-mb-2" />
                    <Button label="Info" class="p-button-raised p-button-info p-button-text p-mr-2 p-mb-2" />
                    <Button label="Warning" class="p-button-raised p-button-warning p-button-text p-mr-2 p-mb-2" />
                    <Button label="Help" class="p-button-raised p-button-help p-button-text p-mr-2 p-mb-2" />
                    <Button label="Danger" class="p-button-raised p-button-danger p-button-text p-mr-2 p-mb-2" />
                    <Button label="Plain" class="p-button-raised p-button-plain p-button-text p-mb-2" />

                    <h5>Outlined Buttons</h5>
                    <Button label="Primary" class="p-button-outlined p-mr-2 p-mb-2" />
                    <Button label="Secondary" class="p-button-outlined p-button-secondary p-mr-2 p-mb-2" />
                    <Button label="Success" class="p-button-outlined p-button-success p-mr-2 p-mb-2" />
                    <Button label="Info" class="p-button-outlined p-button-info p-mr-2 p-mb-2" />
                    <Button label="Warning" class="p-button-outlined p-button-warning p-mr-2 p-mb-2" />
                    <Button label="Help" class="p-button-outlined p-button-help p-mr-2 p-mb-2" />
                    <Button label="Danger" class="p-button-outlined p-button-danger p-mr-2 p-mb-2" />
                    <Button label="Plain" class="p-button-outlined p-button-plain p-mb-2" />

                    <h5>Rounded Icon Buttons</h5>
                    <Button icon="pi pi-check" class="p-button-rounded p-mr-2 p-mb-2" />
                    <Button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary p-mr-2 p-mb-2" />
                    <Button icon="pi pi-search" class="p-button-rounded p-button-success p-mr-2 p-mb-2" />
                    <Button icon="pi pi-user" class="p-button-rounded p-button-info p-mr-2 p-mb-2" />
                    <Button icon="pi pi-bell" class="p-button-rounded p-button-warning p-mr-2 p-mb-2" />
                    <Button icon="pi pi-heart" class="p-button-rounded p-button-help p-mr-2 p-mb-2" />
                    <Button icon="pi pi-times" class="p-button-rounded p-button-danger p-mb-2" />

                    <h5>Rounded Text Icon Buttons</h5>
                    <Button icon="pi pi-check" class="p-button-rounded p-button-text p-mr-2 p-mb-2" />
                    <Button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary p-button-text p-mr-2 p-mb-2" />
                    <Button icon="pi pi-search" class="p-button-rounded p-button-success p-button-text p-mr-2 p-mb-2" />
                    <Button icon="pi pi-user" class="p-button-rounded p-button-info p-button-text p-mr-2 p-mb-2" />
                    <Button icon="pi pi-bell" class="p-button-rounded p-button-warning p-button-text p-mr-2 p-mb-2" />
                    <Button icon="pi pi-heart" class="p-button-rounded p-button-help p-button-text p-mr-2 p-mb-2" />
                    <Button icon="pi pi-times" class="p-button-rounded p-button-danger p-button-text p-mr-2 p-mb-2" />

                    <h5>Rounded and Outlined Icon Buttons</h5>
                    <Button icon="pi pi-check" class="p-button-rounded p-button-outlined p-mr-2 p-mb-2" />
                    <Button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" />
                    <Button icon="pi pi-search" class="p-button-rounded p-button-success p-button-outlined p-mr-2 p-mb-2" />
                    <Button icon="pi pi-user" class="p-button-rounded p-button-info p-button-outlined p-mr-2 p-mb-2" />
                    <Button icon="pi pi-bell" class="p-button-rounded p-button-warning p-button-outlined p-mr-2 p-mb-2" />
                    <Button icon="pi pi-heart" class="p-button-rounded p-button-help p-button-outlined p-mr-2 p-mb-2" />
                    <Button icon="pi pi-times" class="p-button-rounded p-button-danger p-button-outlined p-mb-2" />

                    <h5>Badges</h5>
                    <Button type="button" label="Emails" badge="8" class="p-mr-2 p-mb-2" />
                    <Button type="button" label="Messages" icon="pi pi-users" class="p-button-warning p-mb-2" badge="8" badgeClass="p-badge-danger" />

                    <h5>Button Set</h5>
                    <span class="p-buttonset">
                        <Button label="Save" icon="pi pi-check" />
                        <Button label="Delete" icon="pi pi-trash" />
                        <Button label="Cancel" icon="pi pi-times" />
                    </span>
                </div>
            </div>

            <div class="p-col-12">
                <div class="card">
                    <DataTable :value="customers" :paginator="true" :rows="10"
                        dataKey="id" :rowHover="true" v-model:selection="selectedCustomers" :filters="filters"
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[10,25,50]"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries" responsiveLayout="scroll">
                        <template #header>
                            <div class="p-d-flex p-ai-center p-jc-between">
                                DataTable
                                <span class="p-input-icon-left">
                                    <i class="pi pi-search" />
                                    <InputText v-model="filters['global'].value" placeholder="Global Search" />
                                </span>
                            </div>
                        </template>
                        <template #empty>
                            No customers found.
                        </template>
                        <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
                        <Column field="name" header="Name" :sortable="true" style="min-width:16rem">
                            <template #body="slotProps">
                                {{slotProps.data.name}}
                            </template>
                        </Column>
                        <Column header="Country" :sortable="true" sortField="country.name" filterField="country.name" filterMatchMode="contains" style="min-width:16rem">
                            <template #body="slotProps">
                                <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :class="'flag flag-' + slotProps.data.country.code" width="30" class="p-mr-2" />
                                <span class="image-text">{{slotProps.data.country.name}}</span>
                            </template>
                        </Column>
                        <Column field="status" header="Status" :sortable="true" filterMatchMode="equals" style="min-width:16rem">
                            <template #body="slotProps">
                                <span :class="'customer-badge status-' + slotProps.data.status">{{slotProps.data.status}}</span>
                            </template>
                        </Column>
                        <Column field="activity" header="Activity" :sortable="true" filterMatchMode="gte" style="min-width:16rem">
                            <template #body="slotProps">
                                <ProgressBar :value="slotProps.data.activity" :showValue="false" style="width: 100px"/>
                            </template>
                        </Column>
                    </DataTable>
                </div>
            </div>

            <div class="p-col-12 p-md-6">
                <div class="card">
                    <h5>AccordionPanel</h5>
                    <Accordion :multiple="true" :activeIndex="[0]">
                        <AccordionTab header="Header I">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </AccordionTab>
                        <AccordionTab header="Header II">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
                                ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                                voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                        </AccordionTab>
                        <AccordionTab header="Header III">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                                et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                                Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                                quo minus.</p>
                        </AccordionTab>
                    </Accordion>
                </div>

                <div class="card">
                    <h5>TabView</h5>
                    <TabView>
                        <TabPanel header="Header I">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></TabPanel>
                        <TabPanel header="Header II">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
                                ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                                voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                        </TabPanel>
                        <TabPanel header="Header III">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                                et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                                Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                                quo minus.</p>
                        </TabPanel>
                    </TabView>
                </div>
            </div>

            <div class="p-col-12 p-md-6">
                <div class="card">
                    <h5>Panel</h5>
                    <Panel header="Header" :toggleable="true">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Panel>
                </div>
                <div class="card">
                    <h5>Fieldset</h5>
                    <Fieldset legend="Legend" :toggleable="true">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Fieldset>
                </div>
            </div>

            <div class="p-col-12 p-md-3">
                <div class="card p-fluid">
                    <h5>Overlay Panel</h5>
                    <Button type="button" label="Choose" @click="toggle" icon="pi pi-search" />
                    <OverlayPanel ref="op" appendTo="body" :showCloseIcon="true" style="width: 450px" :breakpoints="{'960px':'75vw'}">
                        <DataTable :value="products" v-model:selection="selectedProduct" selectionMode="single" :paginator="true" :rows="5" @row-select="onProductSelect">
                            <Column field="name" header="Name" sortable></Column>
                            <Column header="Image">
                                <template #body="slotProps">
                                    <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.data.image" class="product-image" />
                                </template>
                            </Column>
                            <Column field="price" header="Price" sortable>
                                <template #body="slotProps">
                                    {{formatCurrency(slotProps.data.price)}}
                                </template>
                            </Column>
                        </DataTable>
                    </OverlayPanel>
                </div>
            </div>

            <div class="p-col-12 p-md-3">
                <div class="card p-fluid">
                    <h5>Dialog</h5>
                    <Dialog header="Dialog" v-model:visible="display" :style="{width: '50vw'}" :breakpoints="{'960px':'75vw'}" :modal="true">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <template #footer>
                            <Button label="Dismiss" @click="close" icon="pi pi-check" class="p-button-text"/>
                        </template>
                    </Dialog>
                    <Button label="Show" icon="pi pi-external-link" @click="open" class="p-button-secondary"/>
                </div>
            </div>

            <div class="p-col-12 p-md-3">
                <div class="card p-fluid">
                    <h5>Confirm Popup</h5>
                    <Button type="button" label="Confirm" @click="confirmWithPopup" class="p-button-success" icon="pi pi-check" />
                    <ConfirmPopup group="popup"></ConfirmPopup>
                </div>
            </div>
            <div class="p-col-12 p-md-3">
                <div class="card p-fluid">
                    <h5>Confirm Dialog</h5>
                    <Button type="button" label="Confirm" @click="confirmWithDialog" class="p-button-help" icon="pi pi-check" />
                    <ConfirmDialog group="dialog">></ConfirmDialog>
                </div>
            </div>
            <div class="p-col-12">
                <div class="card card-w-title">
                    <h5>Menubar</h5>
                    <Menubar :model="tieredMenuItems">
                        <template #end>
                            <span class="p-input-icon-left">
                                <i class="pi pi-search" />
                                <InputText type="text" placeholder="Search" />
                            </span>
                        </template>
                    </Menubar>
                </div>
            </div>

            <div class="p-col-12 p-md-4">
                <div class="card">
                    <h5>Plain Menu</h5>
                    <Menu :model="menuitems" />
                </div>
            </div>

            <div class="p-col-12 p-md-4">
                <div class="card">
                    <h5>Overlay Menu</h5>

                    <Menu ref="menu" :model="menuitems" :popup="true" />
                    <Button type="button" label="Options" icon="pi pi-angle-down" @click="toggleMenu" style="width: auto"/>
                </div>

                <div class="card" @contextmenu="onContextRightClick">
                    <h5>ContextMenu</h5>
                    Right click to display.
                    <ContextMenu ref="contextMenu" :model="contextMenuItems" />
                </div>
            </div>

            <div class="p-col-12 p-lg-6">
                <div class="card">
                    <h5>Messages</h5>
                    <Message severity="info">Info Message</Message>
                    <Message severity="success">Success Message</Message>
                    <Message severity="warn">Warning Message</Message>
                    <Message severity="error">Error Message</Message>
                </div>
            </div>

            <div class="p-col-12 p-lg-6">
                <div class="card">
                    <h5>Toast</h5>

                    <Toast />
                    <Button @click="showToast('info')" label="Info" class="p-button-info p-mr-2 p-mb-2" />
                    <Button @click="showToast('success')" label="Success" class="p-button-success p-mr-2 p-mb-2" />
                    <Button @click="showToast('warn')" label="Warn" class="p-button-warning p-mr-2 p-mb-2" />
                    <Button @click="showToast('error')" label="Error" class="p-button-danger p-mb-2" />
                </div>

                <div class="card">
                    <h5>Timeline</h5>
                    <Timeline :value="timelineEvents" align="alternate">
                        <template #content="slotProps">
                            {{slotProps.item.status}}
                        </template>
                    </Timeline>
                </div>
            </div>

            <div class="p-col-12 p-lg-8">
                <div class="card">
                    <h5>Inline Message</h5>
                    <div class="p-formgroup-inline" style="margin-bottom:.5rem">
                        <label for="username1" class="p-sr-only">Username</label>
                        <InputText id="username1" type="text" placeholder="Username" class="p-invalid p-mr-2" />
                        <InlineMessage>Username is required</InlineMessage>
                    </div>
                    <div class="p-formgroup-inline">
                        <label for="email" class="p-sr-only">email</label>
                        <InputText id="email" placeholder="Email" class="p-invalid p-mr-2" />
                        <InlineMessage />
                    </div>
                </div>
            </div>

            <div class="p-col-12 p-lg-4">
                <div class="card">
                    <h5>Helper Text</h5>
                    <div class="p-field p-fluid">
                        <label for="username2">Username</label>
                        <InputText id="username2" type="text" class="p-invalid" aria-describedby="username-help" />
                        <small id="username-help" class="p-error">Enter your username to reset your password.</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { FilterMatchMode, FilterOperator } from 'primevue/api';
import { useToast } from 'primevue/usetoast';
import { useConfirm } from 'primevue/useconfirm';
import CustomerService from './service/CustomerService';
import CountryService from './service/CountryService';
import ProductService from './service/ProductService';
    
export default {
    setup() {
        onMounted(() => {
            countryService.value.getCountries().then(data => autoValue.value = data);
            customerService.value.getCustomersLarge().then(data => customers.value = data);
            productService.value.getProductsSmall().then(data => products.value = data);
        })

        const toast = useToast();
        const confirm = useConfirm();
        const customers = ref(null);
        const selectedCustomers = ref(null);
        const products = ref(null);
        const selectedProduct = ref(null);
        const filters = ref({
            'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
            'name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
            'country.name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
            'representative': {value: null, matchMode: FilterMatchMode.IN},
            'date': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.DATE_IS}]},
            'balance': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
            'status': {operator: FilterOperator.OR, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
            'activity': {value: null, matchMode: FilterMatchMode.BETWEEN},
            'verified': {value: null, matchMode: FilterMatchMode.EQUALS}
        });
        const floatValue = ref(null);
        const autoValue = ref(null);
        const selectedAutoValue = ref(null);
        const autoFilteredValue = ref([]);
        const calendarValue = ref(null);
        const inputNumberValue = ref(null);
        const chipsValue = ref(null);
        const sliderValue = ref(null);
        const ratingValue = ref(null);
        const colorValue = ref('1976D2');
        const radioValue = ref(null);
        const checkboxValue = ref([]);
        const switchValue = ref(false);
        const display = ref(false);
        const listboxValues = ref([
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ]);
        const listboxValue = ref(null);
        const dropdownValues = ref([
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ]);
        const dropdownValue = ref(null);
        const multiselectValue = ref(null);
        const multiselectValues = ref([
            {name: 'Australia', code: 'AU'},
            {name: 'Brazil', code: 'BR'},
            {name: 'China', code: 'CN'},
            {name: 'Egypt', code: 'EG'},
            {name: 'France', code: 'FR'},
            {name: 'Germany', code: 'DE'},
            {name: 'India', code: 'IN'},
            {name: 'Japan', code: 'JP'},
            {name: 'Spain', code: 'ES'},
            {name: 'United States', code: 'US'}
        ]);
        const toggleValue = ref(false);
        const selectButtonValues1 = ref([
            {name: 'Option 1', code: 'O1'},
            {name: 'Option 2', code: 'O2'},
            {name: 'Option 3', code: 'O3'},
        ]);
        const selectButtonValue1 = ref(null);
        const selectButtonValues2 = ref([
            {name: 'Option 1', code: 'O1'},
            {name: 'Option 2', code: 'O2'},
            {name: 'Option 3', code: 'O3'},
        ]);
        const selectButtonValue2= ref(null);
		const tieredMenuItems = ref([
			{
				label:'Customers',
				icon:'pi pi-fw pi-table',
				items:[
					{
						label:'New',
						icon:'pi pi-fw pi-user-plus',
						items:[
							{
								label:'Customer',
								icon:'pi pi-fw pi-plus'
							},
							{
								label:'Duplicate',
								icon:'pi pi-fw pi-copy'
							},

						]
					},
					{
						label:'Edit',
						icon:'pi pi-fw pi-user-edit'
					}
				]
			},
			{
				label:'Orders',
				icon:'pi pi-fw pi-shopping-cart',
				items:[
					{
						label:'View',
						icon:'pi pi-fw pi-list'
					},
					{
						label:'Search',
						icon:'pi pi-fw pi-search'
					},

				]
			},
			{
				label:'Shipments',
				icon:'pi pi-fw pi-envelope',
				items:[
					{
						label:'Tracker',
						icon:'pi pi-fw pi-compass'

					},
					{
						label:'Map',
						icon:'pi pi-fw pi-map-marker'

					},
					{
						label:'Manage',
						icon:'pi pi-fw pi-pencil'
					}
				]
			},
			{
				label:'Profile',
				icon:'pi pi-fw pi-user',
				items:[
					{
						label:'Settings',
						icon:'pi pi-fw pi-cog'
					},
					{
						label:'Billing',
						icon:'pi pi-fw pi-file'
					}
				]
			},
			{
				separator:true
			},
			{
				label:'Quit',
				icon:'pi pi-fw pi-sign-out'
			}
		]);
		const menuitems = ref([
			{
				label:'Customers',
				items:[
					{
						label:'New',
						icon:'pi pi-fw pi-plus',
					},
					{
						label:'Edit',
						icon:'pi pi-fw pi-user-edit'
					}
				]
			},
			{
				label:'Orders',
				items:[
					{
						label:'View',
						icon:'pi pi-fw pi-list'
					},
					{
						label:'Search',
						icon:'pi pi-fw pi-search'
					},
				]
			}
		]);
		const contextMenuItems = ref([
			{
				label: 'Save',
				icon: 'pi pi-save'
			},
			{
				label: 'Update',
				icon: 'pi pi-refresh'
			},
			{
				label: 'Delete',
				icon: 'pi pi-trash'
			},
			{
				separator: true
			},
			{
				label: 'Options',
				icon: 'pi pi-cog'
			},
        ]);
        const message = ref([]);
        const timelineEvents = ref([
            {status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg'},
            {status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7'},
            {status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800'},
            {status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B'}
        ]);
        const countryService = ref(new CountryService());
        const customerService = ref(new CustomerService());
        const productService = ref(new ProductService());

        const menu = ref();
        const contextMenu = ref();
        const op = ref();

        const toggleMenu = (event) => {
			menu.value.toggle(event);
        };
        const onContextRightClick = (event) => {
            contextMenu.value.show(event);
        };
        const searchCountry = (event) => {
            setTimeout(() => {
                if (!event.query.trim().length) {
                    autoFilteredValue.value = [...autoValue.value];
                }
                else {
                    autoFilteredValue.value = autoValue.value.filter((country) => {
                        return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                    });
                }
            }, 250);
        };
        const addMessage = (severity) => {
            message.value = [{severity: severity, content: 'Message Detail'}]
        };
        const showToast = (severity) => {
            toast.add({severity: severity, summary: 'Message Summary', detail:'Message Detail', life: 3000});
        };
        const open = () => {
			display.value = true;
		};
		const close = () => {
			display.value = false;
        };
        const toggle = (event) => {
			op.value.toggle(event);
        };
        const confirmWithPopup = (event) => {
            confirm.require({
                target: event.currentTarget,
                group: 'popup',
                message: 'Are you sure you want to proceed?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});
                },
                reject: () => {
                    toast.add({severity:'info', summary:'Rejected', detail:'You have rejected', life: 3000});
                }
            });
        };
        const confirmWithDialog = () => {
            confirm.require({
                group: 'dialog',
                header: 'Confirm',
                message: 'Are you sure you want to proceed?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});
                },
                reject: () => {
                    toast.add({severity:'info', summary:'Rejected', detail:'You have rejected', life: 3000});
                }
            });
        };
        const formatCurrency = (value) => {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        };
        const onProductSelect = (event) => {
            op.value.hide();
            toast.add({severity:'info', summary: 'Product Selected', detail: event.data.name, life: 3000});
        };

        return { menu, contextMenu, op, customers, selectedCustomers, products, selectedProduct, filters, floatValue, autoValue, selectedAutoValue,
            autoFilteredValue, calendarValue, inputNumberValue, chipsValue, sliderValue, ratingValue, colorValue, radioValue, 
            checkboxValue, switchValue, display, listboxValues, listboxValue, dropdownValues, dropdownValue, multiselectValue, 
            multiselectValues, toggleValue, selectButtonValues1, selectButtonValue1, selectButtonValues2, selectButtonValue2,
            tieredMenuItems, menuitems, contextMenuItems, message, timelineEvents, toggleMenu, onContextRightClick, searchCountry,
            addMessage, showToast, open, close, toggle, confirmWithPopup, confirmWithDialog, formatCurrency, onProductSelect }

    }
}
<\\/script>

<style scoped lang="scss">
.image-text {
    vertical-align: middle;
}

.p-progressbar {
    height: 4px;
}

.customer-badge {
    border-radius: 2px;
    padding: .25em .5rem;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: .3px;

    &.status-qualified {
        background-color: #C8E6C9;
        color: #256029;
    }

    &.status-unqualified {
        background-color: #FFCDD2;
        color: #C63737;
    }

    &.status-negotiation {
        background-color: #FEEDAF;
        color: #8A5340;
    }

    &.status-new {
        background-color: #B3E5FC;
        color: #23547B;
    }

    &.status-renewal {
        background-color: #ECCFFF;
        color: #694382;
    }

    &.status-proposal {
        background-color: #FFD8B2;
        color: #805B36;
    }
}

.product-image {
    width: 50px;
    box-shadow: 0 3px 6px rgba(0,0,0,.16), 0 3px 6px rgba(0,0,0,.23);
}    

::v-deep(.p-paginator) {
    .p-paginator-current {
        margin-left: auto;
    }
}
</style>                    
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/vue-router@4.0.0/dist/vue-router.global.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/textarea/textarea.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/autocomplete/autocomplete.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/calendar/calendar.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/chips/chips.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/slider/slider.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/rating/rating.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/inputswitch/inputswitch.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/radiobutton/radiobutton.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/checkbox/checkbox.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/listbox/listbox.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/multiselect/multiselect.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/togglebutton/togglebutton.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/selectbutton/selectbutton.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/datatable/datatable.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/accordion/accordion.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/accordiontab/accordiontab.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/tabview/tabview.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/tabpanel/tabpanel.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/panel/panel.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/fieldset/fieldset.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/overlaypanel/overlaypanel.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/dialog/dialog.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/confirmpopup/confirmpopup.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/confirmdialog/confirmdialog.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/confirmationservice/confirmationservice.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/menubar/menubar.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/message/message.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/contextmenu/contextmenu.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/toast/toast.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/toastservice/toastservice.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/timeline/timeline.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/inlinemessage/inlinemessage.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/badgedirective/badgedirective.min.js"><\\/script>
        <script src="./CustomerService.js"><\\/script>
        <script src="./CountryService.js"><\\/script>
        <script src="./ProductService.js"><\\/script>`,
                    content: `
        <div id="app">
            <h1>Responsive Design</h1>
            <div class="p-grid">
                <div class="p-col-12 p-md-6 p-fluid">
                    <div class="card">
                        <h5>InputText</h5>
                        <div class="p-grid p-formgrid">
                            <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
                                <p-inputtext type="text" placeholder="Default"></p-inputtext>
                            </div>
                            <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
                                <p-inputtext type="text" placeholder="Disabled" :disabled="true"></p-inputtext>
                            </div>
                            <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
                                <p-inputtext type="text" placeholder="Invalid" class="p-invalid"></p-inputtext>
                            </div>
                        </div>

                        <h5>Icons</h5>
                        <div class="p-grid p-formgrid">
                            <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
                                <span class="p-input-icon-left">
                                    <i class="pi pi-user"></i>
                                    <p-inputtext type="text" placeholder="Username"></p-inputtext>
                                </span>
                            </div>
                            <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
                                <span class="p-input-icon-right">
                                    <p-inputtext type="text" placeholder="Search"></p-inputtext>
                                    <i class="pi pi-search"></i>
                                </span>
                            </div>
                            <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
                                <span class="p-input-icon-left p-input-icon-right">
                                    <i class="pi pi-user"></i>
                                    <p-inputtext type="text" placeholder="Search"></p-inputtext>
                                    <i class="pi pi-search"></i>
                                </span>
                            </div>
                        </div>

                        <h5>Float Label</h5>
                        <span class="p-float-label">
                            <p-inputtext id="username" type="text" v-model="floatValue"></p-inputtext>
                            <label for="username">Username</label>
                        </span>

                        <h5>Textarea</h5>
                        <p-textarea placeholder="Your Message" :autoResize="true" rows="3" cols="30"></p-textarea>

                        <h5>AutoComplete</h5>
                        <p-autocomplete placeholder="Search" id="dd" :dropdown="true" :multiple="true" v-model="selectedAutoValue" :suggestions="autoFilteredValue" @complete="searchCountry($event)" field="name"></p-autocomplete>

                        <h5>Calendar</h5>
                        <p-calendar :show-icon="true" :show-button-bar="true" v-model="calendarValue"></p-calendar>

                        <h5>Spinner</h5>
                        <p-inputnumber v-model="inputNumberValue" show-buttons mode="decimal"></p-inputnumber>

                        <h5>Chips</h5>
                        <p-chips v-model="chipsValue"></p-chips>
                    </div>

                    <div class="card">
                        <h5>Slider</h5>
                        <p-inputtext v-model.number="sliderValue"></p-inputtext>
                        <p-slider v-model="sliderValue"></p-slider>

                        <h5>Rating</h5>
                        <p-rating v-model="ratingValue"></p-rating>

                        <h5>Input Switch</h5>
                        <p-inputswitch v-model="switchValue"></p-inputswitch>
                    </div>
                </div>

                <div class="p-col-12 p-md-6">
                    <div class="card">
                        <h5>RadioButton</h5>
                        <div class="p-grid">
                            <div class="p-col-12 p-md-4">
                                <div class="p-field-radiobutton">
                                    <p-radiobutton id="option1" name="option" value="Option 1" v-model="radioValue"></p-radiobutton>
                                    <label for="option1">Option 1</label>
                                </div>
                            </div>
                            <div class="p-col-12 p-md-4">
                                <div class="p-field-radiobutton">
                                    <p-radiobutton id="option2" name="option" value="Option 2" v-model="radioValue"></p-radiobutton>
                                    <label for="option2">Option 2</label>
                                </div>
                            </div>
                            <div class="p-col-12 p-md-4">
                                <div class="p-field-radiobutton">
                                    <p-radiobutton id="option3" name="option" value="Option 3" v-model="radioValue"></p-radiobutton>
                                    <label for="option3">Option 3</label>
                                </div>
                            </div>
                        </div>

                        <h5>Checkbox</h5>
                        <div class="p-grid">
                            <div class="p-col-12 p-md-4">
                                <div class="p-field-checkbox">
                                    <p-checkbox id="checkOption1" name="option" value="Option 1" v-model="checkboxValue"></p-checkbox>
                                    <label for="checkOption1">Option 1</label>
                                </div>
                            </div>
                            <div class="p-col-12 p-md-4">
                                <div class="p-field-checkbox">
                                    <p-checkbox id="checkOption2" name="option" value="Option 2" v-model="checkboxValue"></p-checkbox>
                                    <label for="checkOption2">Option 2</label>
                                </div>
                            </div>
                            <div class="p-col-12 p-md-4">
                                <div class="p-field-checkbox">
                                    <p-checkbox id="checkOption3" name="option" value="Option 3" v-model="checkboxValue"></p-checkbox>
                                    <label for="checkOption3">Option 3</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card p-fluid">
                        <h5>Listbox</h5>
                        <p-listbox v-model="listboxValue" :options="listboxValues" option-label="name" :filter="true"></p-listbox>

                        <h5>Dropdown</h5>
                        <p-dropdown v-model="dropdownValue" :options="dropdownValues" option-label="name" placeholder="Select"></p-dropdown>

                        <h5>MultiSelect</h5>
                        <p-multiselect v-model="multiselectValue" :options="multiselectValues" option-label="name" placeholder="Select Countries" :filter="true"></p-multiselect>
                    </div>

                    <div class="card p-fluid">
                        <h5>ToggleButton</h5>
                        <p-togglebutton v-model="toggleValue" on-label="Yes" off-label="No"></p-togglebutton>

                        <h5>SelectButton</h5>
                        <p-selectbutton v-model="selectButtonValue1" :options="selectButtonValues1" option-label="name"></p-selectbutton>

                        <h5>SelectButton - Multiple</h5>
                        <p-selectbutton v-model="selectButtonValue2" :options="selectButtonValues2" option-label="name" :multiple="true"></p-selectbutton>
                    </div>
                </div>

                <div class="p-col-12">
                    <div class="card">
                        <h5>Buttons</h5>
                        <p-button label="Submit" class="p-mr-2 p-mb-2"></p-button>
                        <p-button icon="pi pi-check" class="p-mr-2 p-mb-2"></p-button>
                        <p-button label="Submit" icon="pi pi-check" class="p-mr-2 p-mb-2"></p-button>
                        <p-button label="Submit" icon="pi pi-check" iconPos="right" class="p-mr-2 p-mb-2"></p-button>
                        <p-button label="Disabled" disabled="disabled" class="p-mr-2 p-mb-2"></p-button>
                        
                        <h5>Severities</h5>
                        <p-button label="Primary" class="p-mr-2 p-mb-2"></p-button>
                        <p-button label="Secondary" class="p-button-secondary p-mr-2 p-mb-2"></p-button>
                        <p-button label="Success" class="p-button-success p-mr-2 p-mb-2"></p-button>
                        <p-button label="Info" class="p-button-info p-mr-2 p-mb-2"></p-button>
                        <p-button label="Warning" class="p-button-warning p-mr-2 p-mb-2"></p-button>
                        <p-button label="Help" class="p-button-help p-mr-2 p-mb-2"></p-button>
                        <p-button label="Danger" class="p-button-danger p-mr-2 p-mb-2"></p-button>

                        <h5>Raised Buttons</h5>
                        <p-button label="Primary" class="p-button-raised p-mr-2 p-mb-2"></p-button>
                        <p-button label="Secondary" class="p-button-raised p-button-secondary p-mr-2 p-mb-2"></p-button>
                        <p-button label="Success" class="p-button-raised p-button-success p-mr-2 p-mb-2"></p-button>
                        <p-button label="Info" class="p-button-raised p-button-info p-mr-2 p-mb-2"></p-button>
                        <p-button label="Warning" class="p-button-raised p-button-warning p-mr-2 p-mb-2"></p-button>
                        <p-button label="Help" class="p-button-raised p-button-help p-mr-2 p-mb-2"></p-button>
                        <p-button label="Danger" class="p-button-raised p-button-danger p-mb-2"></p-button>

                        <h5>Rounded Buttons</h5>
                        <p-button label="Primary" class="p-button-rounded p-mr-2 p-mb-2"></p-button>
                        <p-button label="Secondary" class="p-button-rounded p-button-secondary p-mr-2 p-mb-2"></p-button>
                        <p-button label="Success" class="p-button-rounded p-button-success p-mr-2 p-mb-2"></p-button>
                        <p-button label="Info" class="p-button-rounded p-button-info p-mr-2 p-mb-2"></p-button>
                        <p-button label="Warning" class="p-button-rounded p-button-warning p-mr-2 p-mb-2"></p-button>
                        <p-button label="Help" class="p-button-rounded p-button-help p-mr-2 p-mb-2"></p-button>
                        <p-button label="Danger" class="p-button-rounded p-button-danger p-mb-2"></p-button>

                        <h5>Text Buttons</h5>
                        <p-button label="Primary" class="p-button-text p-mr-2 p-mb-2"></p-button>
                        <p-button label="Secondary" class="p-button-secondary p-button-text p-mr-2 p-mb-2"></p-button>
                        <p-button label="Success" class="p-button-success p-button-text p-mr-2 p-mb-2"></p-button>
                        <p-button label="Info" class="p-button-info p-button-text p-mr-2 p-mb-2"></p-button>
                        <p-button label="Warning" class="p-button-warning p-button-text p-mr-2 p-mb-2"></p-button>
                        <p-button label="Help" class="p-button-help p-button-text p-mr-2 p-mb-2"></p-button>
                        <p-button label="Danger" class="p-button-danger p-button-text p-mr-2 p-mb-2"></p-button>
                        <p-button label="Plain" class="p-button-text p-button-plain p-mb-2"></p-button>

                        <h5>Raised Text Buttons</h5>
                        <p-button label="Primary" class="p-button-raised p-button-text p-mr-2 p-mb-2"></p-button>
                        <p-button label="Secondary" class="p-button-raised p-button-secondary p-button-text p-mr-2 p-mb-2"></p-button>"
                        <p-button label="Success" class="p-button-raised p-button-success p-button-text p-mr-2 p-mb-2"></p-button>
                        <p-button label="Info" class="p-button-raised p-button-info p-button-text p-mr-2 p-mb-2"></p-button>
                        <p-button label="Warning" class="p-button-raised p-button-warning p-button-text p-mr-2 p-mb-2"></p-button>
                        <p-button label="Help" class="p-button-raised p-button-help p-button-text p-mr-2 p-mb-2"></p-button>
                        <p-button label="Danger" class="p-button-raised p-button-danger p-button-text p-mr-2 p-mb-2"></p-button>
                        <p-button label="Plain" class="p-button-raised p-button-plain p-button-text p-mb-2"></p-button>

                        <h5>Outlined Buttons</h5>
                        <p-button label="Primary" class="p-button-outlined p-mr-2 p-mb-2"></p-button>
                        <p-button label="Secondary" class="p-button-outlined p-button-secondary p-mr-2 p-mb-2"></p-button>
                        <p-button label="Success" class="p-button-outlined p-button-success p-mr-2 p-mb-2"></p-button>
                        <p-button label="Info" class="p-button-outlined p-button-info p-mr-2 p-mb-2"></p-button>
                        <p-button label="Warning" class="p-button-outlined p-button-warning p-mr-2 p-mb-2"></p-button>
                        <p-button label="Help" class="p-button-outlined p-button-help p-mr-2 p-mb-2"></p-button>
                        <p-button label="Danger" class="p-button-outlined p-button-danger p-mr-2 p-mb-2"></p-button>
                        <p-button label="Plain" class="p-button-outlined p-button-plain p-mb-2"></p-button>

                        <h5>Rounded Icon Buttons</h5>
                        <p-button icon="pi pi-check" class="p-button-rounded p-mr-2 p-mb-2"></p-button>
                        <p-button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary p-mr-2 p-mb-2"></p-button>
                        <p-button icon="pi pi-search" class="p-button-rounded p-button-success p-mr-2 p-mb-2"></p-button>
                        <p-button icon="pi pi-user" class="p-button-rounded p-button-info p-mr-2 p-mb-2"></p-button>
                        <p-button icon="pi pi-bell" class="p-button-rounded p-button-warning p-mr-2 p-mb-2"></p-button>
                        <p-button icon="pi pi-heart" class="p-button-rounded p-button-help p-mr-2 p-mb-2"></p-button>
                        <p-button icon="pi pi-times" class="p-button-rounded p-button-danger p-mb-2"></p-button>

                        <h5>Rounded Text Icon Buttons</h5>
                        <p-button icon="pi pi-check" class="p-button-rounded p-button-text p-mr-2 p-mb-2"></p-button>
                        <p-button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary p-button-text p-mr-2 p-mb-2"></p-button>
                        <p-button icon="pi pi-search" class="p-button-rounded p-button-success p-button-text p-mr-2 p-mb-2"></p-button>
                        <p-button icon="pi pi-user" class="p-button-rounded p-button-info p-button-text p-mr-2 p-mb-2"></p-button>
                        <p-button icon="pi pi-bell" class="p-button-rounded p-button-warning p-button-text p-mr-2 p-mb-2"></p-button>
                        <p-button icon="pi pi-heart" class="p-button-rounded p-button-help p-button-text p-mr-2 p-mb-2"></p-button>
                        <p-button icon="pi pi-times" class="p-button-rounded p-button-danger p-button-text p-mr-2 p-mb-2"></p-button>

                        <h5>Rounded and Outlined Icon Buttons</h5>
                        <p-button icon="pi pi-check" class="p-button-rounded p-button-outlined p-mr-2 p-mb-2"></p-button>
                        <p-button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2"></p-button>
                        <p-button icon="pi pi-search" class="p-button-rounded p-button-success p-button-outlined p-mr-2 p-mb-2"></p-button>
                        <p-button icon="pi pi-user" class="p-button-rounded p-button-info p-button-outlined p-mr-2 p-mb-2"></p-button>
                        <p-button icon="pi pi-bell" class="p-button-rounded p-button-warning p-button-outlined p-mr-2 p-mb-2"></p-button>
                        <p-button icon="pi pi-heart" class="p-button-rounded p-button-help p-button-outlined p-mr-2 p-mb-2"></p-button>
                        <p-button icon="pi pi-times" class="p-button-rounded p-button-danger p-button-outlined p-mb-2"></p-button>

                        <h5>Badges</h5>
                        <p-button type="button" label="Emails" badge="8" class="p-mr-2 p-mb-2"></p-button>
                        <p-button type="button" label="Messages" icon="pi pi-users" class="p-button-warning p-mb-2" badge="8" badge-class="p-badge-danger"></p-button>

                        <h5>Button Set</h5>
                        <span class="p-buttonset">
                            <p-button label="Save" icon="pi pi-check"></p-button>
                            <p-button label="Delete" icon="pi pi-trash"></p-button>
                            <p-button label="Cancel" icon="pi pi-times"></p-button>
                        </span>
                    </div>
                </div>

                <div class="p-col-12">
                    <div class="card">
                        <p-datatable :value="customers" :paginator="true" :rows="10"
                            data-key="id" :row-hover="true" v-model:selection="selectedCustomers" :filters="filters"
                            paginator-template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rows-per-page-options="[10,25,50]"
                            current-page-report-template="Showing {first} to {last} of {totalRecords} entries" responsive-layout="scroll">
                            <template #header>
                                <div class="p-d-flex p-ai-center p-jc-between">
                                    DataTable
                                    <span class="p-input-icon-left">
                                        <i class="pi pi-search"></i>
                                        <p-inputtext v-model="filters['global'].value" placeholder="Global Search"></p-inputtext>
                                    </span>
                                </div>
                            </template>
                            <template #empty>
                                No customers found.
                            </template>
                            <p-column selection-mode="multiple" header-style="width: 3rem"></p-column>
                            <p-column field="name" header="Name" :sortable="true" style="min-width:16rem">
                                <template #body="slotProps">
                                    {{slotProps.data.name}}
                                </template>
                            </p-column>
                            <p-column header="Country" :sortable="true" sort-field="country.name" filter-field="country.name" filter-match-mode="contains" style="min-width:16rem">
                                <template #body="slotProps">
                                    <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :class="'flag flag-' + slotProps.data.country.code" width="30" class="p-mr-2" />
                                    <span class="image-text">{{slotProps.data.country.name}}</span>
                                </template>
                            </p-column>
                            <p-column field="status" header="Status" :sortable="true" filter-match-mode="equals" style="min-width:16rem">
                                <template #body="slotProps">
                                    <span :class="'customer-badge status-' + slotProps.data.status">{{slotProps.data.status}}</span>
                                </template>
                            </p-column>
                            <p-column field="activity" header="Activity" :sortable="true" filter-match-mode="gte" style="min-width:16rem">
                                <template #body="slotProps">
                                    <p-progressbar :value="slotProps.data.activity" :show-value="false" style="width: 100px"></p-progressbar>
                                </template>
                            </p-column>
                        </p-datatable>
                    </div>
                </div>

                <div class="p-col-12 p-md-6">
                    <div class="card">
                        <h5>AccordionPanel</h5>
                        <p-accordion :multiple="true" :active-index="[0]">
                            <p-accordiontab header="Header I">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </p-accordiontab>
                            <p-accordiontab header="Header II">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
                                    ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                                    voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                    Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                            </p-accordiontab>
                            <p-accordiontab header="Header III">
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                                    et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                                    quo minus.</p>
                            </p-accordiontab>
                        </p-accordion>
                    </div>

                    <div class="card">
                        <h5>TabView</h5>
                        <p-tabview>
                            <p-tabpanel header="Header I">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></p-tabpanel>
                            <p-tabpanel header="Header II">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
                                    ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                                    voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                    Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                            </p-tabpanel>
                            <p-tabpanel header="Header III">
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                                    et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                                    quo minus.</p>
                            </p-tabpanel>
                        </p-tabview>
                    </div>
                </div>

                <div class="p-col-12 p-md-6">
                    <div class="card">
                        <h5>Panel</h5>
                        <p-panel header="Header" :toggleable="true">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </p-panel>
                    </div>
                    <div class="card">
                        <h5>Fieldset</h5>
                        <p-fieldset legend="Legend" :toggleable="true">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </p-fieldset>
                    </div>
                </div>

                <div class="p-col-12 p-md-3">
                    <div class="card p-fluid">
                        <h5>Overlay Panel</h5>
                        <p-button type="button" label="Choose" @click="toggle" icon="pi pi-search"></p-button>
                        <p-overlaypanel ref="op" append-to="body" :show-close-icon="true" style="width: 450px" :breakpoints="{'960px':'75vw'}">
                            <p-datatable :value="products" v-model:selection="selectedProduct" selection-mode="single" :paginator="true" :rows="5" @row-select="onProductSelect">
                                <p-column field="name" header="Name" sortable></p-column>
                                <p-column header="Image">
                                    <template #body="slotProps">
                                        <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :alt="slotProps.data.image" class="product-image" />
                                    </template>
                                </p-column>
                                <p-column field="price" header="Price" sortable>
                                    <template #body="slotProps">
                                        {{formatCurrency(slotProps.data.price)}}
                                    </template>
                                </p-column>
                            </p-datatable>
                        </p-overlaypanel>
                    </div>
                </div>

                <div class="p-col-12 p-md-3">
                    <div class="card p-fluid">
                        <h5>Dialog</h5>
                        <p-dialog header="Dialog" v-model:visible="display" :style="{width: '50vw'}" :breakpoints="{'960px':'75vw'}" :modal="true">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <template #footer>
                                <p-button label="Dismiss" @click="close" icon="pi pi-check" class="p-button-text"></p-button>
                            </template>
                        </p-dialog>
                        <p-button label="Show" icon="pi pi-external-link" @click="open" class="p-button-secondary"></p-button>
                    </div>
                </div>

                <div class="p-col-12 p-md-3">
                    <div class="card p-fluid">
                        <h5>Confirm Popup</h5>
                        <p-button type="button" label="Confirm" @click="confirmWithPopup" class="p-button-success" icon="pi pi-check"></p-button>
                        <p-confirmpopup group="popup"></p-confirmpopup>
                    </div>
                </div>
                <div class="p-col-12 p-md-3">
                    <div class="card p-fluid">
                        <h5>Confirm Dialog</h5>
                        <p-button type="button" label="Confirm" @click="confirmWithDialog" class="p-button-help" icon="pi pi-check"></p-button>
                        <p-confirmdialog group="dialog">></p-confirmdialog>
                    </div>
                </div>
                <div class="p-col-12">
                    <div class="card card-w-title">
                        <h5>Menubar</h5>
                        <p-menubar :model="tieredMenuItems">
                            <template #end>
                                <span class="p-input-icon-left">
                                    <i class="pi pi-search"></i>
                                    <p-inputtext type="text" placeholder="Search"></p-inputtext>
                                </span>
                            </template>
                        </p-menubar>
                    </div>
                </div>

                <div class="p-col-12 p-md-4">
                    <div class="card">
                        <h5>Plain Menu</h5>
                        <p-menu :model="menuitems"></p-menu>
                    </div>
                </div>

                <div class="p-col-12 p-md-4">
                    <div class="card">
                        <h5>Overlay Menu</h5>

                        <p-menu ref="menu" :model="menuitems" :popup="true"></p-menu>
                        <p-button type="button" label="Options" icon="pi pi-angle-down" @click="toggleMenu" style="width: auto"></p-button>
                    </div>

                    <div class="card" @contextmenu="onContextRightClick">
                        <h5>ContextMenu</h5>
                        Right click to display.
                        <p-contextmenu ref="contextMenu" :model="contextMenuItems"></p-contextmenu>
                    </div>
                </div>

                <div class="p-col-12 p-lg-6">
                    <div class="card">
                        <h5>Messages</h5>
                        <p-message severity="info">Info Message</p-message>
                        <p-message severity="success">Success Message</p-message>
                        <p-message severity="warn">Warning Message</p-message>
                        <p-message severity="error">Error Message</p-message>
                    </div>
                </div>

                <div class="p-col-12 p-lg-6">
                    <div class="card">
                        <h5>Toast</h5>

                        <p-toast></p-toast>
                        <p-button @click="showToast('info')" label="Info" class="p-button-info p-mr-2 p-mb-2"></p-button>
                        <p-button @click="showToast('success')" label="Success" class="p-button-success p-mr-2 p-mb-2"></p-button>
                        <p-button @click="showToast('warn')" label="Warn" class="p-button-warning p-mr-2 p-mb-2"></p-button>
                        <p-button @click="showToast('error')" label="Error" class="p-button-danger p-mb-2"></p-button>
                    </div>

                    <div class="card">
                        <h5>Timeline</h5>
                        <p-timeline :value="timelineEvents" align="alternate">
                            <template #content="slotProps">
                                {{slotProps.item.status}}
                            </template>
                        </p-timeline>
                    </div>
                </div>

                <div class="p-col-12 p-lg-8">
                    <div class="card">
                        <h5>Inline Message</h5>
                        <div class="p-formgroup-inline" style="margin-bottom:.5rem">
                            <label for="username1" class="p-sr-only">Username</label>
                            <p-inputtext id="username1" type="text" placeholder="Username" class="p-invalid p-mr-2"></p-inputtext>
                            <p-inlinemessage>Username is required</p-inlinemessage>
                        </div>
                        <div class="p-formgroup-inline">
                            <label for="email" class="p-sr-only">email</label>
                            <p-inputtext id="email" placeholder="Email" class="p-invalid p-mr-2"></p-inputtext>
                            <p-inlinemessage></p-inlinemessage>
                        </div>
                    </div>
                </div>

                <div class="p-col-12 p-lg-4">
                    <div class="card">
                        <h5>Helper Text</h5>
                        <div class="p-field p-fluid">
                            <label for="username2">Username</label>
                            <p-inputtext id="username2" type="text" class="p-invalid" aria-describedby="username-help"></p-inputtext>
                            <small id="username-help" class="p-error">Enter your username to reset your password.</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <script type="module">
        const { createApp, ref, onMounted } = Vue;
        const { FilterMatchMode, FilterOperator } = primevue.api;
        const { useToast } = primevue.usetoast;
        const { useConfirm } = primevue.useconfirm;
        const BadgeDirective = primevue.badgedirective
            
        const App = {
            setup() {
                onMounted(() => {
                    countryService.value.getCountries().then(data => autoValue.value = data);
                    customerService.value.getCustomersLarge().then(data => customers.value = data);
                    productService.value.getProductsSmall().then(data => products.value = data);
                })

                const toast = useToast();
                const confirm = useConfirm();
                const customers = ref(null);
                const selectedCustomers = ref(null);
                const products = ref(null);
                const selectedProduct = ref(null);
                const filters = ref({
                    'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
                    'name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
                    'country.name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
                    'representative': {value: null, matchMode: FilterMatchMode.IN},
                    'date': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.DATE_IS}]},
                    'balance': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
                    'status': {operator: FilterOperator.OR, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
                    'activity': {value: null, matchMode: FilterMatchMode.BETWEEN},
                    'verified': {value: null, matchMode: FilterMatchMode.EQUALS}
                });
                const floatValue = ref(null);
                const autoValue = ref(null);
                const selectedAutoValue = ref(null);
                const autoFilteredValue = ref([]);
                const calendarValue = ref(null);
                const inputNumberValue = ref(null);
                const chipsValue = ref(null);
                const sliderValue = ref(50);
                const ratingValue = ref(null);
                const colorValue = ref('1976D2');
                const radioValue = ref(null);
                const checkboxValue = ref([]);
                const switchValue = ref(false);
                const display = ref(false);
                const listboxValues = ref([
                    {name: 'New York', code: 'NY'},
                    {name: 'Rome', code: 'RM'},
                    {name: 'London', code: 'LDN'},
                    {name: 'Istanbul', code: 'IST'},
                    {name: 'Paris', code: 'PRS'}
                ]);
                const listboxValue = ref(null);
                const dropdownValues = ref([
                    {name: 'New York', code: 'NY'},
                    {name: 'Rome', code: 'RM'},
                    {name: 'London', code: 'LDN'},
                    {name: 'Istanbul', code: 'IST'},
                    {name: 'Paris', code: 'PRS'}
                ]);
                const dropdownValue = ref(null);
                const multiselectValue = ref(null);
                const multiselectValues = ref([
                    {name: 'Australia', code: 'AU'},
                    {name: 'Brazil', code: 'BR'},
                    {name: 'China', code: 'CN'},
                    {name: 'Egypt', code: 'EG'},
                    {name: 'France', code: 'FR'},
                    {name: 'Germany', code: 'DE'},
                    {name: 'India', code: 'IN'},
                    {name: 'Japan', code: 'JP'},
                    {name: 'Spain', code: 'ES'},
                    {name: 'United States', code: 'US'}
                ]);
                const toggleValue = ref(false);
                const selectButtonValues1 = ref([
                    {name: 'Option 1', code: 'O1'},
                    {name: 'Option 2', code: 'O2'},
                    {name: 'Option 3', code: 'O3'},
                ]);
                const selectButtonValue1 = ref(null);
                const selectButtonValues2 = ref([
                    {name: 'Option 1', code: 'O1'},
                    {name: 'Option 2', code: 'O2'},
                    {name: 'Option 3', code: 'O3'},
                ]);
                const selectButtonValue2= ref(null);
                const tieredMenuItems = ref([
                    {
                        label:'Customers',
                        icon:'pi pi-fw pi-table',
                        items:[
                            {
                                label:'New',
                                icon:'pi pi-fw pi-user-plus',
                                items:[
                                    {
                                        label:'Customer',
                                        icon:'pi pi-fw pi-plus'
                                    },
                                    {
                                        label:'Duplicate',
                                        icon:'pi pi-fw pi-copy'
                                    },

                                ]
                            },
                            {
                                label:'Edit',
                                icon:'pi pi-fw pi-user-edit'
                            }
                        ]
                    },
                    {
                        label:'Orders',
                        icon:'pi pi-fw pi-shopping-cart',
                        items:[
                            {
                                label:'View',
                                icon:'pi pi-fw pi-list'
                            },
                            {
                                label:'Search',
                                icon:'pi pi-fw pi-search'
                            },

                        ]
                    },
                    {
                        label:'Shipments',
                        icon:'pi pi-fw pi-envelope',
                        items:[
                            {
                                label:'Tracker',
                                icon:'pi pi-fw pi-compass'

                            },
                            {
                                label:'Map',
                                icon:'pi pi-fw pi-map-marker'

                            },
                            {
                                label:'Manage',
                                icon:'pi pi-fw pi-pencil'
                            }
                        ]
                    },
                    {
                        label:'Profile',
                        icon:'pi pi-fw pi-user',
                        items:[
                            {
                                label:'Settings',
                                icon:'pi pi-fw pi-cog'
                            },
                            {
                                label:'Billing',
                                icon:'pi pi-fw pi-file'
                            }
                        ]
                    },
                    {
                        separator:true
                    },
                    {
                        label:'Quit',
                        icon:'pi pi-fw pi-sign-out'
                    }
                ]);
                const menuitems = ref([
                    {
                        label:'Customers',
                        items:[
                            {
                                label:'New',
                                icon:'pi pi-fw pi-plus',
                            },
                            {
                                label:'Edit',
                                icon:'pi pi-fw pi-user-edit'
                            }
                        ]
                    },
                    {
                        label:'Orders',
                        items:[
                            {
                                label:'View',
                                icon:'pi pi-fw pi-list'
                            },
                            {
                                label:'Search',
                                icon:'pi pi-fw pi-search'
                            },
                        ]
                    }
                ]);
                const contextMenuItems = ref([
                    {
                        label: 'Save',
                        icon: 'pi pi-save'
                    },
                    {
                        label: 'Update',
                        icon: 'pi pi-refresh'
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-trash'
                    },
                    {
                        separator: true
                    },
                    {
                        label: 'Options',
                        icon: 'pi pi-cog'
                    },
                ]);
                const message = ref([]);
                const timelineEvents = ref([
                    {status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg'},
                    {status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7'},
                    {status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800'},
                    {status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B'}
                ]);
                const countryService = ref(new CountryService());
                const customerService = ref(new CustomerService());
                const productService = ref(new ProductService());

                const menu = ref();
                const contextMenu = ref();
                const op = ref();

                const toggleMenu = (event) => {
                    menu.value.toggle(event);
                };
                const onContextRightClick = (event) => {
                    contextMenu.value.show(event);
                };
                const searchCountry = (event) => {
                    setTimeout(() => {
                        if (!event.query.trim().length) {
                            autoFilteredValue.value = [...autoValue.value];
                        }
                        else {
                            autoFilteredValue.value = autoValue.value.filter((country) => {
                                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                            });
                        }
                    }, 250);
                };
                const addMessage = (severity) => {
                    message.value = [{severity: severity, content: 'Message Detail'}]
                };
                const showToast = (severity) => {
                    toast.add({severity: severity, summary: 'Message Summary', detail:'Message Detail', life: 3000});
                };
                const open = () => {
                    display.value = true;
                };
                const close = () => {
                    display.value = false;
                };
                const toggle = (event) => {
                    op.value.toggle(event);
                };
                const confirmWithPopup = (event) => {
                    confirm.require({
                        target: event.currentTarget,
                        group: 'popup',
                        message: 'Are you sure you want to proceed?',
                        icon: 'pi pi-exclamation-triangle',
                        accept: () => {
                            toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});
                        },
                        reject: () => {
                            toast.add({severity:'info', summary:'Rejected', detail:'You have rejected', life: 3000});
                        }
                    });
                };
                const confirmWithDialog = () => {
                    confirm.require({
                        group: 'dialog',
                        header: 'Confirm',
                        message: 'Are you sure you want to proceed?',
                        icon: 'pi pi-exclamation-triangle',
                        accept: () => {
                            toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});
                        },
                        reject: () => {
                            toast.add({severity:'info', summary:'Rejected', detail:'You have rejected', life: 3000});
                        }
                    });
                };
                const formatCurrency = (value) => {
                    return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
                };
                const onProductSelect = (event) => {
                    op.value.hide();
                    toast.add({severity:'info', summary: 'Product Selected', detail: event.data.name, life: 3000});
                };

                return { menu, contextMenu, op, customers, selectedCustomers, products, selectedProduct, filters, floatValue, autoValue, selectedAutoValue,
                    autoFilteredValue, calendarValue, inputNumberValue, chipsValue, sliderValue, ratingValue, colorValue, radioValue, 
                    checkboxValue, switchValue, display, listboxValues, listboxValue, dropdownValues, dropdownValue, multiselectValue, 
                    multiselectValues, toggleValue, selectButtonValues1, selectButtonValue1, selectButtonValues2, selectButtonValue2,
                    tieredMenuItems, menuitems, contextMenuItems, message, timelineEvents, toggleMenu, onContextRightClick, searchCountry,
                    addMessage, showToast, open, close, toggle, confirmWithPopup, confirmWithDialog, formatCurrency, onProductSelect }

            },
            components: {
                "p-inputtext": primevue.inputtext,
                "p-textarea": primevue.textarea,
                "p-autocomplete": primevue.autocomplete,
                "p-calendar": primevue.calendar,
                "p-inputnumber": primevue.inputnumber,
                "p-chips": primevue.chips,
                "p-slider": primevue.slider,
                "p-rating": primevue.rating,
                "p-inputswitch": primevue.inputswitch,
                "p-radiobutton": primevue.radiobutton,
                "p-checkbox": primevue.checkbox,
                "p-listbox": primevue.listbox,
                "p-dropdown": primevue.dropdown,
                "p-multiselect": primevue.multiselect,
                "p-togglebutton": primevue.togglebutton,
                "p-selectbutton": primevue.selectbutton,
                "p-button": primevue.button,
                "p-datatable": primevue.datatable,
                "p-column": primevue.column,
                "p-progressbar": primevue.progressbar,
                "p-accordion": primevue.accordion,
                "p-accordiontab": primevue.accordiontab,
                "p-tabview": primevue.tabview,
                "p-tabpanel": primevue.tabpanel,
                "p-panel": primevue.panel,
                "p-fieldset": primevue.fieldset,
                "p-overlaypanel": primevue.overlaypanel,
                "p-dialog": primevue.dialog,
                "p-confirmpopup": primevue.confirmpopup,
                "p-confirmdialog": primevue.confirmdialog,
                "p-menubar": primevue.menubar,
                "p-menu": primevue.menu,
                "p-contextmenu": primevue.contextmenu,
                "p-message": primevue.message,
                "p-toast": primevue.toast,
                "p-timeline": primevue.timeline,
                "p-inlinemessage": primevue.inlinemessage
            }
        };

        const routes = [{ path: "/", component: App }];

        const router = VueRouter.createRouter({
            history: VueRouter.createWebHashHistory(),
            routes
        });

        createApp(App)
            .use(router)
            .use(primevue.config.default, { ripple: true })
            .use(primevue.toastservice)
            .use(primevue.confirmationservice)
            .directive('badge', BadgeDirective)
            .mount("#app");
        <\\/script>

        <style>
        .image-text {
            vertical-align: middle;
        }

        .p-progressbar {
            height: 4px;
        }

        .customer-badge {
            border-radius: 2px;
            padding: .25em .5rem;
            text-transform: uppercase;
            font-weight: 700;
            font-size: 12px;
            letter-spacing: .3px;
        }

        .customer-badge .status-qualified {
            background-color: #C8E6C9;
            color: #256029;
        }

        .customer-badge .status-unqualified {
            background-color: #FFCDD2;
            color: #C63737;
        }

        .customer-badge .status-negotiation {
            background-color: #FEEDAF;
            color: #8A5340;
        }

        .customer-badge .status-new {
            background-color: #B3E5FC;
            color: #23547B;
        }

        .customer-badge .status-renewal {
            background-color: #ECCFFF;
            color: #694382;
        }

        .customer-badge .status-proposal {
            background-color: #FFD8B2;
            color: #805B36;
        }

        .product-image {
            width: 50px;
            box-shadow: 0 3px 6px rgba(0,0,0,.16), 0 3px 6px rgba(0,0,0,.23);
        }    

        .p-paginator .p-paginator-current {
            margin-left: auto;
        }
        </style>                    
`
                }
            }
        }
    },
    countryService: null,
    created() {
        this.countryService = new CountryService();
        this.customerService = new CustomerService();
        this.productService = new ProductService();
        this.initFilters();
    },
    mounted() {
        this.countryService.getCountries().then(data => this.autoValue = data);
        this.customerService.getCustomersLarge().then(data => this.customers = data);
        this.productService.getProductsSmall().then(data => this.products = data);
    },
    methods: {
        toggleMenu(event) {
			this.$refs.menu.toggle(event);
        },
        onContextRightClick(event) {
            this.$refs.contextMenu.show(event);
        },
        searchCountry(event) {
            setTimeout(() => {
                if (!event.query.trim().length) {
                    this.autoFilteredValue = [...this.autoValue];
                }
                else {
                    this.autoFilteredValue = this.autoValue.filter((country) => {
                        return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                    });
                }
            }, 250);
        },
        addMessage(severity) {
            this.message = [{severity: severity, content: 'Message Detail'}]
        },
        showToast(severity) {
            this.$toast.add({severity: severity, summary: 'Message Summary', detail:'Message Detail', life: 3000});
        },
        open() {
			this.display = true;
		},
		close() {
			this.display = false;
        },
        toggle(event) {
			this.$refs.op.toggle(event);
        },
        confirmWithPopup(event) {
            this.$confirm.require({
                target: event.currentTarget,
                group: 'popup',
                message: 'Are you sure you want to proceed?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.$toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});
                },
                reject: () => {
                    this.$toast.add({severity:'info', summary:'Rejected', detail:'You have rejected', life: 3000});
                }
            });
        },
        confirmWithDialog() {
            this.$confirm.require({
                group: 'dialog',
                header: 'Confirm',
                message: 'Are you sure you want to proceed?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.$toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});
                },
                reject: () => {
                    this.$toast.add({severity:'info', summary:'Rejected', detail:'You have rejected', life: 3000});
                }
            });
        },
        formatCurrency(value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        },
        onProductSelect(event) {
            this.$refs.op.hide();
            this.$toast.add({severity:'info', summary: 'Product Selected', detail: event.data.name, life: 3000});
        },
        initFilters() {
            this.filters = {
                'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
                'name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
                'country.name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
                'representative': {value: null, matchMode: FilterMatchMode.IN},
                'date': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.DATE_IS}]},
                'balance': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
                'status': {operator: FilterOperator.OR, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
                'activity': {value: null, matchMode: FilterMatchMode.BETWEEN},
                'verified': {value: null, matchMode: FilterMatchMode.EQUALS}
            }
        }
    }
}
</script>

<style scoped lang="scss">
.image-text {
    vertical-align: middle;
}

.p-progressbar {
    height: 4px;
}

.customer-badge {
    border-radius: 2px;
    padding: .25em .5rem;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: .3px;

    &.status-qualified {
        background-color: #C8E6C9;
        color: #256029;
    }

    &.status-unqualified {
        background-color: #FFCDD2;
        color: #C63737;
    }

    &.status-negotiation {
        background-color: #FEEDAF;
        color: #8A5340;
    }

    &.status-new {
        background-color: #B3E5FC;
        color: #23547B;
    }

    &.status-renewal {
        background-color: #ECCFFF;
        color: #694382;
    }

    &.status-proposal {
        background-color: #FFD8B2;
        color: #805B36;
    }
}

.product-image {
    width: 50px;
    box-shadow: 0 3px 6px rgba(0,0,0,.16), 0 3px 6px rgba(0,0,0,.23);
}    

::v-deep(.p-paginator) {
    .p-paginator-current {
        margin-left: auto;
    }
}
</style>