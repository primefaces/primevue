<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Responsive Design</h1>
                <p>PrimeVue components are optimized for different screen sizes.</p>
            </div>
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
                        <DataTable :value="customers" :paginator="true" class="p-datatable-customers" :rows="10"
                            dataKey="id" :rowHover="true" v-model:selection="selectedCustomers" :filters="filters"
                            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[10,25,50]"
                            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries">
                            <template #header>
                                <div class="p-d-flex p-ai-center p-jc-between">
                                    DataTable
                                    <span class="p-input-icon-left">
                                        <i class="pi pi-search" />
                                        <InputText v-model="filters['global']" placeholder="Global Search" />
                                    </span>
                                </div>
                            </template>
                            <template #empty>
                                No customers found.
                            </template>
                            <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
                            <Column field="name" header="Name" :sortable="true">
                                <template #body="slotProps">
                                    <span class="p-column-title">Name</span>
                                    {{slotProps.data.name}}
                                </template>
                            </Column>
                            <Column header="Country" :sortable="true" sortField="country.name" filterField="country.name" filterMatchMode="contains">
                                <template #body="slotProps">
                                    <span class="p-column-title">Country</span>
                                    <img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.data.country.code" width="30" class="p-mr-2" />
                                    <span class="image-text">{{slotProps.data.country.name}}</span>
                                </template>
                            </Column>
                            <Column header="Representative" :sortable="true" sortField="representative.name" filterField="representative.name" filterMatchMode="in">
                                <template #body="slotProps">
                                    <span class="p-column-title">Representative</span>
                                    <img :alt="slotProps.data.representative.name" :src="'demo/images/avatar/' + slotProps.data.representative.image" width="32" style="vertical-align: middle" />
                                    <span class="image-text p-ml-2">{{slotProps.data.representative.name}}</span>
                                </template>
                            </Column>
                            <Column field="date" header="Date" :sortable="true" filterMatchMode="equals">
                                <template #body="slotProps">
                                    <span class="p-column-title">Date</span>
                                    <span>{{slotProps.data.date}}</span>
                                </template>
                            </Column>
                            <Column field="status" header="Status" :sortable="true" filterMatchMode="equals">
                                <template #body="slotProps">
                                    <span class="p-column-title">Status</span>
                                    <span :class="'customer-badge status-' + slotProps.data.status">{{slotProps.data.status}}</span>
                                </template>
                            </Column>
                            <Column field="activity" header="Activity" :sortable="true" filterMatchMode="gte">
                                <template #body="slotProps">
                                    <span class="p-column-title">Activity</span>
                                    <ProgressBar :value="slotProps.data.activity" :showValue="false" />
                                </template>
                            </Column>
                            <Column headerStyle="width: 8rem; text-align: center" bodyStyle="text-align: center; overflow: visible">
                                <template #body>
                                    <Button type="button" icon="pi pi-cog" class="p-button-secondary"></Button>
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
                        <OverlayPanel ref="op" appendTo="body" :showCloseIcon="true" style="width: 450px">
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
                        <Dialog header="Dialog" v-model:visible="display" :style="{width: '30vw'}" :modal="true">
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

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
<pre v-code><code><template v-pre>
&lt;div class="p-grid"&gt;
    &lt;div class="p-col-12 p-md-6 p-fluid"&gt;
        &lt;div class="card"&gt;
            &lt;h5&gt;InputText&lt;/h5&gt;
            &lt;div class="p-grid p-formgrid"&gt;
                &lt;div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0"&gt;
                    &lt;InputText type="text" placeholder="Default"&gt;&lt;/InputText&gt;
                &lt;/div&gt;
                &lt;div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0"&gt;
                    &lt;InputText type="text" placeholder="Disabled" :disabled="true"&gt;&lt;/InputText&gt;
                &lt;/div&gt;
                &lt;div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0"&gt;
                    &lt;InputText type="text" placeholder="Invalid" class="p-invalid" /&gt;
                &lt;/div&gt;
            &lt;/div&gt;

            &lt;h5&gt;Icons&lt;/h5&gt;
            &lt;div class="p-grid p-formgrid"&gt;
                &lt;div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0"&gt;
                    &lt;span class="p-input-icon-left"&gt;
                        &lt;i class="pi pi-user" /&gt;
                        &lt;InputText type="text" placeholder="Username" /&gt;
                    &lt;/span&gt;
                &lt;/div&gt;
                &lt;div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0"&gt;
                    &lt;span class="p-input-icon-right"&gt;
                        &lt;InputText type="text" placeholder="Search" /&gt;
                        &lt;i class="pi pi-search" /&gt;
                    &lt;/span&gt;
                &lt;/div&gt;
                &lt;div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0"&gt;
                    &lt;span class="p-input-icon-left p-input-icon-right"&gt;
                        &lt;i class="pi pi-user" /&gt;
                        &lt;InputText type="text" placeholder="Search" /&gt;
                        &lt;i class="pi pi-search" /&gt;
                    &lt;/span&gt;
                &lt;/div&gt;
            &lt;/div&gt;

            &lt;h5&gt;Float Label&lt;/h5&gt;
            &lt;span class="p-float-label"&gt;
                &lt;InputText id="username" type="text" v-model="floatValue"/&gt;
                &lt;label for="username"&gt;Username&lt;/label&gt;
            &lt;/span&gt;

            &lt;h5&gt;Textarea&lt;/h5&gt;
            &lt;Textarea placeholder="Your Message" :autoResize="true" rows="3" cols="30" /&gt;

            &lt;h5&gt;AutoComplete&lt;/h5&gt;
            &lt;AutoComplete placeholder="Search" id="dd" :dropdown="true" :multiple="true" v-model="selectedAutoValue" :suggestions="autoFilteredValue" @complete="searchCountry($event)" field="name"/&gt;

            &lt;h5&gt;Calendar&lt;/h5&gt;
            &lt;Calendar :showIcon="true" :showButtonBar="true" v-model="calendarValue"&gt;&lt;/Calendar&gt;

            &lt;h5&gt;Spinner&lt;/h5&gt;
            &lt;InputNumber v-model="inputNumberValue" showButtons mode="decimal"&gt;&lt;/InputNumber&gt;

            &lt;h5&gt;Chips&lt;/h5&gt;
            &lt;Chips v-model="chipsValue"/&gt;
        &lt;/div&gt;

        &lt;div class="card"&gt;
            &lt;h5&gt;Slider&lt;/h5&gt;
            &lt;InputText v-model.number="sliderValue" /&gt;
            &lt;Slider v-model="sliderValue" /&gt;

            &lt;h5&gt;Rating&lt;/h5&gt;
            &lt;Rating v-model="ratingValue"/&gt;

            &lt;h5&gt;Input Switch&lt;/h5&gt;
            &lt;InputSwitch v-model="switchValue" /&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="p-col-12 p-md-6"&gt;
        &lt;div class="card"&gt;
            &lt;h5&gt;RadioButton&lt;/h5&gt;
            &lt;div class="p-grid"&gt;
                &lt;div class="p-col-12 p-md-4"&gt;
                    &lt;div class="p-field-radiobutton"&gt;
                        &lt;RadioButton id="option1" name="option" value="Option 1" v-model="radioValue" /&gt;
                        &lt;label for="option1"&gt;Option 1&lt;/label&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                &lt;div class="p-col-12 p-md-4"&gt;
                    &lt;div class="p-field-radiobutton"&gt;
                        &lt;RadioButton id="option2" name="option" value="Option 2" v-model="radioValue" /&gt;
                        &lt;label for="option2"&gt;Option 2&lt;/label&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                &lt;div class="p-col-12 p-md-4"&gt;
                    &lt;div class="p-field-radiobutton"&gt;
                        &lt;RadioButton id="option3" name="option" value="Option 3" v-model="radioValue" /&gt;
                        &lt;label for="option3"&gt;Option 3&lt;/label&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;

            &lt;h5&gt;Checkbox&lt;/h5&gt;
            &lt;div class="p-grid"&gt;
                &lt;div class="p-col-12 p-md-4"&gt;
                    &lt;div class="p-field-checkbox"&gt;
                        &lt;Checkbox id="checkOption1" name="option" value="Option 1" v-model="checkboxValue" /&gt;
                        &lt;label for="checkOption1"&gt;Option 1&lt;/label&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                &lt;div class="p-col-12 p-md-4"&gt;
                    &lt;div class="p-field-checkbox"&gt;
                        &lt;Checkbox id="checkOption2" name="option" value="Option 2" v-model="checkboxValue" /&gt;
                        &lt;label for="checkOption2"&gt;Option 2&lt;/label&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                &lt;div class="p-col-12 p-md-4"&gt;
                    &lt;div class="p-field-checkbox"&gt;
                        &lt;Checkbox id="checkOption3" name="option" value="Option 3" v-model="checkboxValue" /&gt;
                        &lt;label for="checkOption3"&gt;Option 3&lt;/label&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;

        &lt;div class="card p-fluid"&gt;
            &lt;h5&gt;Listbox&lt;/h5&gt;
            &lt;Listbox v-model="listboxValue" :options="listboxValues" optionLabel="name" :filter="true"/&gt;

            &lt;h5&gt;Dropdown&lt;/h5&gt;
            &lt;Dropdown v-model="dropdownValue" :options="dropdownValues" optionLabel="name" placeholder="Select" /&gt;

            &lt;h5&gt;MultiSelect&lt;/h5&gt;
            &lt;MultiSelect v-model="multiselectValue" :options="multiselectValues" optionLabel="name" placeholder="Select Countries" :filter="true"&gt;&lt;/MultiSelect&gt;
        &lt;/div&gt;

        &lt;div class="card p-fluid"&gt;
            &lt;h5&gt;ToggleButton&lt;/h5&gt;
            &lt;ToggleButton v-model="toggleValue" onLabel="Yes" offLabel="No"/&gt;

            &lt;h5&gt;SelectButton&lt;/h5&gt;
            &lt;SelectButton v-model="selectButtonValue1" :options="selectButtonValues1" optionLabel="name" /&gt;

            &lt;h5&gt;SelectButton - Multiple&lt;/h5&gt;
            &lt;SelectButton v-model="selectButtonValue2" :options="selectButtonValues2" optionLabel="name" :multiple="true"/&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="p-col-12"&gt;
        &lt;div class="card"&gt;
            &lt;h5&gt;Buttons&lt;/h5&gt;
            &lt;Button label="Submit" class="p-mr-2 p-mb-2" /&gt;
            &lt;Button icon="pi pi-check" class="p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Submit" icon="pi pi-check" class="p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Submit" icon="pi pi-check" iconPos="right" class="p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Disabled" disabled="disabled" class="p-mr-2 p-mb-2" /&gt;
        
            &lt;h5&gt;Severities&lt;/h5&gt;
            &lt;Button label="Primary" class="p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Secondary" class="p-button-secondary p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Success" class="p-button-success p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Info" class="p-button-info p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Warning" class="p-button-warning p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Help" class="p-button-help p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Danger" class="p-button-danger p-mr-2 p-mb-2" /&gt;

            &lt;h5&gt;Raised Buttons&lt;/h5&gt;
            &lt;Button label="Primary" class="p-button-raised p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Secondary" class="p-button-raised p-button-secondary p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Success" class="p-button-raised p-button-success p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Info" class="p-button-raised p-button-info p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Warning" class="p-button-raised p-button-warning p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Help" class="p-button-raised p-button-help p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Danger" class="p-button-raised p-button-danger p-mb-2" /&gt;

            &lt;h5&gt;Rounded Buttons&lt;/h5&gt;
            &lt;Button label="Primary" class="p-button-rounded p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Secondary" class="p-button-rounded p-button-secondary p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Success" class="p-button-rounded p-button-success p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Info" class="p-button-rounded p-button-info p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Warning" class="p-button-rounded p-button-warning p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Help" class="p-button-rounded p-button-help p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Danger" class="p-button-rounded p-button-danger p-mb-2" /&gt;

            &lt;h5&gt;Text Buttons&lt;/h5&gt;
            &lt;Button label="Primary" class="p-button-text p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Secondary" class="p-button-secondary p-button-text p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Success" class="p-button-success p-button-text p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Info" class="p-button-info p-button-text p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Warning" class="p-button-warning p-button-text p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Help" class="p-button-help p-button-text p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Danger" class="p-button-danger p-button-text p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Plain" class="p-button-text p-button-plain p-mb-2" /&gt;

            &lt;h5&gt;Raised Text Buttons&lt;/h5&gt;
            &lt;Button label="Primary" class="p-button-raised p-button-text p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Secondary" class="p-button-raised p-button-secondary p-button-text p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Success" class="p-button-raised p-button-success p-button-text p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Info" class="p-button-raised p-button-info p-button-text p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Warning" class="p-button-raised p-button-warning p-button-text p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Help" class="p-button-raised p-button-help p-button-text p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Danger" class="p-button-raised p-button-danger p-button-text p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Plain" class="p-button-raised p-button-plain p-button-text p-mb-2" /&gt;

            &lt;h5&gt;Outlined Buttons&lt;/h5&gt;
            &lt;Button label="Primary" class="p-button-outlined p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Secondary" class="p-button-outlined p-button-secondary p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Success" class="p-button-outlined p-button-success p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Info" class="p-button-outlined p-button-info p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Warning" class="p-button-outlined p-button-warning p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Help" class="p-button-outlined p-button-help p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Danger" class="p-button-outlined p-button-danger p-mr-2 p-mb-2" /&gt;
            &lt;Button label="Plain" class="p-button-outlined p-button-plain p-mb-2" /&gt;

            &lt;h5&gt;Rounded Icon Buttons&lt;/h5&gt;
            &lt;Button icon="pi pi-check" class="p-button-rounded p-mr-2 p-mb-2" /&gt;
            &lt;Button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary p-mr-2 p-mb-2" /&gt;
            &lt;Button icon="pi pi-search" class="p-button-rounded p-button-success p-mr-2 p-mb-2" /&gt;
            &lt;Button icon="pi pi-user" class="p-button-rounded p-button-info p-mr-2 p-mb-2" /&gt;
            &lt;Button icon="pi pi-bell" class="p-button-rounded p-button-warning p-mr-2 p-mb-2" /&gt;
            &lt;Button icon="pi pi-heart" class="p-button-rounded p-button-help p-mr-2 p-mb-2" /&gt;
            &lt;Button icon="pi pi-times" class="p-button-rounded p-button-danger p-mb-2" /&gt;

            &lt;h5&gt;Rounded Text Icon Buttons&lt;/h5&gt;
            &lt;Button icon="pi pi-check" class="p-button-rounded p-button-text p-mr-2 p-mb-2" /&gt;
            &lt;Button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary p-button-text p-mr-2 p-mb-2" /&gt;
            &lt;Button icon="pi pi-search" class="p-button-rounded p-button-success p-button-text p-mr-2 p-mb-2" /&gt;
            &lt;Button icon="pi pi-user" class="p-button-rounded p-button-info p-button-text p-mr-2 p-mb-2" /&gt;
            &lt;Button icon="pi pi-bell" class="p-button-rounded p-button-warning p-button-text p-mr-2 p-mb-2" /&gt;
            &lt;Button icon="pi pi-heart" class="p-button-rounded p-button-help p-button-text p-mr-2 p-mb-2" /&gt;
            &lt;Button icon="pi pi-times" class="p-button-rounded p-button-danger p-button-text p-mr-2 p-mb-2" /&gt;

            &lt;h5&gt;Rounded and Outlined Icon Buttons&lt;/h5&gt;
            &lt;Button icon="pi pi-check" class="p-button-rounded p-button-outlined p-mr-2 p-mb-2" /&gt;
            &lt;Button icon="pi pi-bookmark" class="p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2" /&gt;
            &lt;Button icon="pi pi-search" class="p-button-rounded p-button-success p-button-outlined p-mr-2 p-mb-2" /&gt;
            &lt;Button icon="pi pi-user" class="p-button-rounded p-button-info p-button-outlined p-mr-2 p-mb-2" /&gt;
            &lt;Button icon="pi pi-bell" class="p-button-rounded p-button-warning p-button-outlined p-mr-2 p-mb-2" /&gt;
            &lt;Button icon="pi pi-heart" class="p-button-rounded p-button-help p-button-outlined p-mr-2 p-mb-2" /&gt;
            &lt;Button icon="pi pi-times" class="p-button-rounded p-button-danger p-button-outlined p-mb-2" /&gt;

            &lt;h5&gt;Badges&lt;/h5&gt;
            &lt;Button type="button" label="Emails" badge="8" class="p-mr-2 p-mb-2" /&gt;
            &lt;Button type="button" label="Messages" icon="pi pi-users" class="p-button-warning p-mb-2" badge="8" badgeClass="p-badge-danger" /&gt;

            &lt;h5&gt;Button Set&lt;/h5&gt;
            &lt;span class="p-buttonset"&gt;
                &lt;Button label="Save" icon="pi pi-check" /&gt;
                &lt;Button label="Delete" icon="pi pi-trash" /&gt;
                &lt;Button label="Cancel" icon="pi pi-times" /&gt;
            &lt;/span&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="p-col-12"&gt;
        &lt;div class="card"&gt;
            &lt;DataTable :value="customers" :paginator="true" class="p-datatable-customers" :rows="10"
                dataKey="id" :rowHover="true" v-model:selection="selectedCustomers" :filters="filters"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[10,25,50]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"&gt;
                &lt;template #header&gt;
                    &lt;div class="p-d-flex p-ai-center p-jc-between"&gt;
                        DataTable
                        &lt;span class="p-input-icon-left"&gt;
                            &lt;i class="pi pi-search" /&gt;
                            &lt;InputText v-model="filters['global']" placeholder="Global Search" /&gt;
                        &lt;/span&gt;
                    &lt;/div&gt;
                &lt;/template&gt;
                &lt;template #empty&gt;
                    No customers found.
                &lt;/template&gt;
                &lt;Column selectionMode="multiple" headerStyle="width: 3em"&gt;&lt;/Column&gt;
                &lt;Column field="name" header="Name" :sortable="true"&gt;
                    &lt;template #body="slotProps"&gt;
                        &lt;span class="p-column-title"&gt;Name&lt;/span&gt;
                        {{slotProps.data.name}}
                    &lt;/template&gt;
                &lt;/Column&gt;
                &lt;Column header="Country" :sortable="true" sortField="country.name" filterField="country.name" filterMatchMode="contains"&gt;
                    &lt;template #body="slotProps"&gt;
                        &lt;span class="p-column-title"&gt;Country&lt;/span&gt;
                        &lt;img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.data.country.code" width="30" class="p-mr-2" /&gt;
                        &lt;span class="image-text"&gt;{{slotProps.data.country.name}}&lt;/span&gt;
                    &lt;/template&gt;
                &lt;/Column&gt;
                &lt;Column header="Representative" :sortable="true" sortField="representative.name" filterField="representative.name" filterMatchMode="in"&gt;
                    &lt;template #body="slotProps"&gt;
                        &lt;span class="p-column-title"&gt;Representative&lt;/span&gt;
                        &lt;img :alt="slotProps.data.representative.name" :src="'demo/images/avatar/' + slotProps.data.representative.image" width="32" style="vertical-align: middle" /&gt;
                        &lt;span class="image-text p-ml-2"&gt;{{slotProps.data.representative.name}}&lt;/span&gt;
                    &lt;/template&gt;
                &lt;/Column&gt;
                &lt;Column field="date" header="Date" :sortable="true" filterMatchMode="equals"&gt;
                    &lt;template #body="slotProps"&gt;
                        &lt;span class="p-column-title"&gt;Date&lt;/span&gt;
                        &lt;span&gt;{{slotProps.data.date}}&lt;/span&gt;
                    &lt;/template&gt;
                &lt;/Column&gt;
                &lt;Column field="status" header="Status" :sortable="true" filterMatchMode="equals"&gt;
                    &lt;template #body="slotProps"&gt;
                        &lt;span class="p-column-title"&gt;Status&lt;/span&gt;
                        &lt;span :class="'customer-badge status-' + slotProps.data.status"&gt;{{slotProps.data.status}}&lt;/span&gt;
                    &lt;/template&gt;
                &lt;/Column&gt;
                &lt;Column field="activity" header="Activity" :sortable="true" filterMatchMode="gte"&gt;
                    &lt;template #body="slotProps"&gt;
                        &lt;span class="p-column-title"&gt;Activity&lt;/span&gt;
                        &lt;ProgressBar :value="slotProps.data.activity" :showValue="false" /&gt;
                    &lt;/template&gt;
                &lt;/Column&gt;
                &lt;Column headerStyle="width: 8rem; text-align: center" bodyStyle="text-align: center; overflow: visible"&gt;
                    &lt;template #body&gt;
                        &lt;Button type="button" icon="pi pi-cog" class="p-button-secondary"&gt;&lt;/Button&gt;
                    &lt;/template&gt;
                &lt;/Column&gt;
            &lt;/DataTable&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col-12 p-md-6"&gt;
        &lt;div class="card"&gt;
            &lt;h5&gt;AccordionPanel&lt;/h5&gt;
            &lt;Accordion :multiple="true" :activeIndex="[0]"&gt;
                &lt;AccordionTab header="Header I"&gt;
                    &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&lt;/p&gt;
                &lt;/AccordionTab&gt;
                &lt;AccordionTab header="Header II"&gt;
                    &lt;p&gt;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
                        ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                        voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Consectetur, adipisci velit, sed quia non numquam eius modi.&lt;/p&gt;
                &lt;/AccordionTab&gt;
                &lt;AccordionTab header="Header III"&gt;
                    &lt;p&gt;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                        et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                        Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                        quo minus.&lt;/p&gt;
                &lt;/AccordionTab&gt;
            &lt;/Accordion&gt;
        &lt;/div&gt;
        &lt;div class="card"&gt;
            &lt;h5&gt;TabView&lt;/h5&gt;
            &lt;TabView&gt;
                &lt;TabPanel header="Header I"&gt;
                    &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&lt;/p&gt;&lt;/TabPanel&gt;
                &lt;TabPanel header="Header II"&gt;
                    &lt;p&gt;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
                        ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                        voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Consectetur, adipisci velit, sed quia non numquam eius modi.&lt;/p&gt;
                &lt;/TabPanel&gt;
                &lt;TabPanel header="Header III"&gt;
                    &lt;p&gt;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                        et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                        Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                        quo minus.&lt;/p&gt;
                &lt;/TabPanel&gt;
            &lt;/TabView&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col-12 p-md-6"&gt;
        &lt;div class="card"&gt;
            &lt;h5&gt;Panel&lt;/h5&gt;
            &lt;Panel header="Header" :toggleable="true"&gt;
                &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&lt;/p&gt;
            &lt;/Panel&gt;
        &lt;/div&gt;
        &lt;div class="card"&gt;
            &lt;h5&gt;Fieldset&lt;/h5&gt;
            &lt;Fieldset legend="Legend" :toggleable="true"&gt;
                &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&lt;/p&gt;
            &lt;/Fieldset&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col-12 p-md-3"&gt;
        &lt;div class="card p-fluid"&gt;
            &lt;h5&gt;Overlay Panel&lt;/h5&gt;
            &lt;Button type="button" label="Choose" @click="toggle" icon="pi pi-search" /&gt;
            &lt;OverlayPanel ref="op" appendTo="body" :showCloseIcon="true" style="width: 450px"&gt;
                &lt;DataTable :value="products" v-model:selection="selectedProduct" selectionMode="single" :paginator="true" :rows="5" @row-select="onProductSelect"&gt;
                    &lt;Column field="name" header="Name" sortable&gt;&lt;/Column&gt;
                    &lt;Column header="Image"&gt;
                        &lt;template #body="slotProps"&gt;
                            &lt;img :src="'demo/images/product/' + slotProps.data.image" :alt="slotProps.data.image" class="product-image" /&gt;
                        &lt;/template&gt;
                    &lt;/Column&gt;
                    &lt;Column field="price" header="Price" sortable&gt;
                        &lt;template #body="slotProps"&gt;
                            {{formatCurrency(slotProps.data.price)}}
                        &lt;/template&gt;
                    &lt;/Column&gt;
                &lt;/DataTable&gt;
            &lt;/OverlayPanel&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col-12 p-md-3"&gt;
        &lt;div class="card p-fluid"&gt;
            &lt;h5&gt;Dialog&lt;/h5&gt;
            &lt;Dialog header="Dialog" v-model:visible="display" :style="{width: '30vw'}" :modal="true"&gt;
                &lt;p&gt;
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                &lt;/p&gt;
                &lt;template #footer&gt;
                    &lt;Button label="Dismiss" @click="close" icon="pi pi-check" class="p-button-text"/&gt;
                &lt;/template&gt;
            &lt;/Dialog&gt;
            &lt;Button label="Show" icon="pi pi-external-link" @click="open" class="p-button-secondary"/&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col-12 p-md-3"&gt;
        &lt;div class="card p-fluid"&gt;
            &lt;h5&gt;Confirm Popup&lt;/h5&gt;
            &lt;Button type="button" label="Confirm" @click="confirmWithPopup" class="p-button-success" icon="pi pi-check" /&gt;
            &lt;ConfirmPopup group="popup"&gt;&lt;/ConfirmPopup&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col-12 p-md-3"&gt;
        &lt;div class="card p-fluid"&gt;
            &lt;h5&gt;Confirm Dialog&lt;/h5&gt;
            &lt;Button type="button" label="Confirm" @click="confirmWithDialog" class="p-button-help" icon="pi pi-check" /&gt;
            &lt;ConfirmDialog group="dialog"&gt;&gt;&lt;/ConfirmDialog&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-col-12"&gt;
        &lt;div class="card card-w-title"&gt;
            &lt;h5&gt;Menubar&lt;/h5&gt;
            &lt;Menubar :model="tieredMenuItems"&gt;
                &lt;template #end&gt;
                    &lt;span class="p-input-icon-left"&gt;
                        &lt;i class="pi pi-search" /&gt;
                        &lt;InputText type="text" placeholder="Search" /&gt;
                    &lt;/span&gt;
                &lt;/template&gt;
            &lt;/Menubar&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="p-col-12 p-md-4"&gt;
        &lt;div class="card"&gt;
            &lt;h5&gt;Plain Menu&lt;/h5&gt;
            &lt;Menu :model="menuitems" /&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="p-col-12 p-md-4"&gt;
        &lt;div class="card"&gt;
            &lt;h5&gt;Overlay Menu&lt;/h5&gt;

            &lt;Menu ref="menu" :model="menuitems" :popup="true" /&gt;
            &lt;Button type="button" label="Options" icon="pi pi-angle-down" @click="toggleMenu" style="width: auto"/&gt;
        &lt;/div&gt;

        &lt;div class="card" @contextmenu="onContextRightClick"&gt;
            &lt;h5&gt;ContextMenu&lt;/h5&gt;
            Right click to display.
            &lt;ContextMenu ref="contextMenu" :model="contextMenuItems" /&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="p-col-12 p-lg-6"&gt;
        &lt;div class="card"&gt;
            &lt;h5&gt;Messages&lt;/h5&gt;
            &lt;Message severity="info"&gt;Info Message&lt;/Message&gt;
            &lt;Message severity="success"&gt;Success Message&lt;/Message&gt;
            &lt;Message severity="warn"&gt;Warning Message&lt;/Message&gt;
            &lt;Message severity="error"&gt;Error Message&lt;/Message&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="p-col-12 p-lg-6"&gt;
        &lt;div class="card"&gt;
            &lt;h5&gt;Toast&lt;/h5&gt;

            &lt;Toast /&gt;
            &lt;Button @click="showToast('info')" label="Info" class="p-button-info p-mr-2 p-mb-2" /&gt;
            &lt;Button @click="showToast('success')" label="Success" class="p-button-success p-mr-2 p-mb-2" /&gt;
            &lt;Button @click="showToast('warn')" label="Warn" class="p-button-warning p-mr-2 p-mb-2" /&gt;
            &lt;Button @click="showToast('error')" label="Error" class="p-button-danger p-mb-2" /&gt;
        &lt;/div&gt;

        &lt;div class="card"&gt;
            &lt;h5&gt;Timeline&lt;/h5&gt;
            &lt;Timeline :value="timelineEvents" align="alternate"&gt;
                &lt;template #content="slotProps"&gt;
                    {{slotProps.item.status}}
                &lt;/template&gt;
            &lt;/Timeline&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="p-col-12 p-lg-8"&gt;
        &lt;div class="card"&gt;
            &lt;h5&gt;Inline Message&lt;/h5&gt;
            &lt;div class="p-formgroup-inline" style="margin-bottom:.5rem"&gt;
                &lt;label for="username1" class="p-sr-only"&gt;Username&lt;/label&gt;
                &lt;InputText id="username1" type="text" placeholder="Username" class="p-invalid p-mr-2" /&gt;
                &lt;InlineMessage&gt;Username is required&lt;/InlineMessage&gt;
            &lt;/div&gt;
            &lt;div class="p-formgroup-inline"&gt;
                &lt;label for="email" class="p-sr-only"&gt;email&lt;/label&gt;
                &lt;InputText id="email" placeholder="Email" class="p-invalid p-mr-2" /&gt;
                &lt;InlineMessage /&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="p-col-12 p-lg-4"&gt;
        &lt;div class="card"&gt;
            &lt;h5&gt;Helper Text&lt;/h5&gt;
            &lt;div class="p-field p-fluid"&gt;
                &lt;label for="username2"&gt;Username&lt;/label&gt;
                &lt;InputText id="username2" type="text" class="p-invalid" aria-describedby="username-help" /&gt;
                &lt;small id="username-help" class="p-error"&gt;Enter your username to reset your password.&lt;/small&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</template>
</code></pre>

<pre v-code.script><code>
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
            filters: {},
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
        }
    }
}

</code></pre>
                </TabPanel>
            </TabView>
        </div>
    </div>
</template>

<script>
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
            filters: {},
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

/* Responsive */
.p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {
    display: none;
}

@media screen and (max-width: 960px) {
    ::v-deep(.p-datatable) {
        &.p-datatable-customers {
            .p-datatable-thead > tr > th,
            .p-datatable-tfoot > tr > td {
                display: none !important;
            }

            .p-datatable-tbody > tr {
                border-bottom: 1px solid var(--layer-2);

                > td {
                    text-align: left;
                    display: block;
                    border: 0 none !important;
                    width: 100% !important;
                    float: left;
                    clear: left;
                    border: 0 none;

                    .p-column-title {
                        padding: .4rem;
                        min-width: 30%;
                        display: inline-block;
                        margin: -.4rem 1rem -.4rem -.4rem;
                        font-weight: bold;
                    }

                    .p-progressbar {
                        margin-top: .5rem;
                    }
                }
            }
        }
    }
}

::v-deep(.p-paginator) {
    .p-paginator-current {
        margin-left: auto;
    }
}
</style>