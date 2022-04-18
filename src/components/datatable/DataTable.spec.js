import { mount } from '@vue/test-utils';
import DataTable from './DataTable.vue';
import ColumnGroup from '@/components/columngroup/ColumnGroup.vue';
import Row from '@/components/row/Row.vue';
import Column from '@/components/column/Column.vue';
import Button from '@/components/button/Button.vue';
import InputText from '@/components/inputtext/InputText.vue';
import {FilterMatchMode} from 'primevue/api';

window.URL.createObjectURL = function() {};

const smallData = [
    {
        "id": "1000",
        "code": "vbb124btr",
        "name": "Game Controller"
    },
    {
        "id": "1001",
        "code": "nvklal433",
        "name": "Black Watch"
    },
    {
        "id": "1002",
        "code": "zz21cz3c1",
        "name": "Blue Band"
    }
];

const data = [
    {
        "id": "1000",
        "code": "vbb124btr",
        "name": "Game Controller"
    },
    {
        "id": "1001",
        "code": "nvklal433",
        "name": "Black Watch"
    },
    {
        "id": "1002",
        "code": "zz21cz3c1",
        "name": "Blue Band"
    },
    {
        "id": "1003",
        "code": "244wgerg2",
        "name": "Blue T-Shirt"
    },
    {
        "id": "1004",
        "code": "h456wer53",
        "name": "Bracelet"
    },
    {
        "id": "1005",
        "code": "cm230f032",
        "name": "Gaming Set"
    },
    {
        "id": "1006",
        "code": "bib36pfvm",
        "name": "Chakra Bracelet"
    },
    {
        "id": "1007",
        "code": "mbvjkgip5",
        "name": "Galaxy Earrings"
    },
    {
        "id": "1008",
        "code": "f230fh0g3",
        "name": "Bamboo Watch"
    },
    {
        "id": "1009",
        "code": "av2231fwg",
        "name": "Brown Purse"
    }
];

describe('DataTable.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(DataTable, {
            global: {
                components: {
                    Column,
                    Button
                }
            },
            props: {
                value: smallData,
                expandedRows: [],
                paginatorTemplate: 'CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown',
                rowsPerPageOptions: [5, 6, 7],
                currentPageReportTemplate: 'Showing {first} to {last} of {totalRecords}'
            },
            slots: {
                default: `
                    <Column :expander="true" />
                    <Column field="code" header="Code" sortable></Column>
                    <Column field="name" header="Name" sortable></Column>
                `,
                header: `Header Templating`,
                footer: `Footer Templating`,
                expansion: `Expansion Templating`,
                empty: `Empty Templating`,
                paginatorstart: `Paginator Start Templating`,
                paginatorend: `Paginator End Templating`
            }
        });
    });

    it('should exist', () => {
        expect(wrapper.find('.p-datatable.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-datatable-wrapper').exists()).toBe(true);
        expect(wrapper.find('table.p-datatable-table').exists()).toBe(true);
        expect(wrapper.find('thead.p-datatable-thead').exists()).toBe(true);
        expect(wrapper.find('tbody.p-datatable-tbody').exists()).toBe(true);
    });

    it('should have basic demo', () => {
        expect(wrapper.findAll('.p-column-header-content').length).toEqual(3);
        const tbody = wrapper.find('.p-datatable-tbody');

        expect(tbody.findAll('tr').length).toEqual(3);

        const rows = tbody.findAll('tr');

        expect(rows[0].findAll('td').length).toEqual(3);
    });


    // table templating
    it('should have header template', () => {
        expect(wrapper.find('.p-datatable-header').exists()).toBe(true);
        expect(wrapper.find('.p-datatable-header').text()).toBe('Header Templating');
    });

    it('should have footer template', () => {
        expect(wrapper.find('.p-datatable-footer').exists()).toBe(true);
        expect(wrapper.find('.p-datatable-footer').text()).toBe('Footer Templating');
    });

    it('should have expansion template', async () => {
        await wrapper.setProps({ expandedRows: [smallData[0]] });

        expect(wrapper.find('tr.p-datatable-row-expansion').exists()).toBe(true);
        expect(wrapper.find('tr.p-datatable-row-expansion').text()).toBe('Expansion Templating');
    });

    it('should have empty templating', async () => {
        await wrapper.setProps({ value: [] });

        expect(wrapper.find('tr.p-datatable-emptymessage').exists()).toBe(true);
        expect(wrapper.find('tr.p-datatable-emptymessage').text()).toBe('Empty Templating');
    });

    it('should have paginatorstart templating', async () => {
        await wrapper.setProps({ value: data, paginator: true, rows: 5 });

        expect(wrapper.find('.p-paginator-left-content').exists()).toBe(true);
        expect(wrapper.find('.p-paginator-left-content').text()).toBe('Paginator Start Templating');
    });

    it('should have paginatorend templating', async () => {
        await wrapper.setProps({ value: data, paginator: true, rows: 5 });

        expect(wrapper.find('.p-paginator-right-content').exists()).toBe(true);
        expect(wrapper.find('.p-paginator-right-content').text()).toBe('Paginator End Templating');
    });


    // column templating


    // column grouping
    it('should exist', () => {
        wrapper = mount({
            components: {
                DataTable,
                ColumnGroup,
                Row,
                Column
            },
            template: `
                <DataTable :value="sales" responsiveLayout="scroll">
                    <ColumnGroup type="header">
                        <Row>
                            <Column header="Product" :rowspan="3" />
                            <Column header="Sale Rate" :colspan="4" />
                        </Row>
                        <Row>
                            <Column header="Sales" :colspan="2" />
                            <Column header="Profits" :colspan="2" />
                        </Row>
                        <Row>
                            <Column header="Last Year" :sortable="true" field="lastYearSale"/>
                            <Column header="This Year" :sortable="true" field="thisYearSale"/>
                            <Column header="Last Year" :sortable="true" field="lastYearProfit"/>
                            <Column header="This Year" :sortable="true" field="thisYearProfit"/>
                        </Row>
                    </ColumnGroup>
                    <Column field="product" />
                    <Column field="lastYearSale">
                        <template #body="slotProps">
                            {{slotProps.data.lastYearSale}}%
                        </template>
                    </Column>
                    <Column field="thisYearSale">
                        <template #body="slotProps">
                            {{slotProps.data.thisYearSale}}%
                        </template>
                    </Column>
                    <Column field="lastYearProfit">
                        <template #body="slotProps">
                            {{formatCurrency(slotProps.data.lastYearProfit)}}
                        </template>
                    </Column>
                    <Column field="thisYearProfit">
                        <template #body="slotProps">
                            {{formatCurrency(slotProps.data.thisYearProfit)}}
                        </template>
                    </Column>
                    <ColumnGroup type="footer">
                        <Row>
                            <Column footer="Totals:" :colspan="3" footerStyle="text-align:right"/>
                            <Column :footer="lastYearTotal" />
                            <Column :footer="thisYearTotal" />
                        </Row>
                    </ColumnGroup>
                </DataTable>
            `,
            data() {
                return {
                    sales: null
                }
            },
            created() {
                this.sales = [
                    {product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342},
                    {product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122},
                    {product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500}
                ];
            },
            methods: {
                formatCurrency(value) {
                    return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
                }
            },
            computed: {
                lastYearTotal() {
                    let total = 0;
                    for(let sale of this.sales) {
                        total += sale.lastYearProfit;
                    }
        
                    return this.formatCurrency(total);
                },
                thisYearTotal() {
                    let total = 0;
                    for(let sale of this.sales) {
                        total += sale.thisYearProfit;
                    }
        
                    return this.formatCurrency(total);
                }
            }
        });
        expect(wrapper.find('.p-datatable').classes()).toContain('p-datatable-grouped-header');
        expect(wrapper.find('.p-datatable').classes()).toContain('p-datatable-grouped-footer');
    });

    it('should column group and row templating', () => {
        wrapper = mount({
            components: {
                DataTable,
                ColumnGroup,
                Row,
                Column
            },
            template: `
                <DataTable :value="sales" responsiveLayout="scroll">
                    <ColumnGroup type="header">
                        <Row>
                            <Column header="Product" :rowspan="3" />
                            <Column header="Sale Rate" :colspan="4" />
                        </Row>
                        <Row>
                            <Column header="Sales" :colspan="2" />
                            <Column header="Profits" :colspan="2" />
                        </Row>
                        <Row>
                            <Column header="Last Year" :sortable="true" field="lastYearSale"/>
                            <Column header="This Year" :sortable="true" field="thisYearSale"/>
                            <Column header="Last Year" :sortable="true" field="lastYearProfit"/>
                            <Column header="This Year" :sortable="true" field="thisYearProfit"/>
                        </Row>
                    </ColumnGroup>
                    <Column field="product" />
                    <Column field="lastYearSale">
                        <template #body="slotProps">
                            {{slotProps.data.lastYearSale}}%
                        </template>
                    </Column>
                    <Column field="thisYearSale">
                        <template #body="slotProps">
                            {{slotProps.data.thisYearSale}}%
                        </template>
                    </Column>
                    <Column field="lastYearProfit">
                        <template #body="slotProps">
                            {{formatCurrency(slotProps.data.lastYearProfit)}}
                        </template>
                    </Column>
                    <Column field="thisYearProfit">
                        <template #body="slotProps">
                            {{formatCurrency(slotProps.data.thisYearProfit)}}
                        </template>
                    </Column>
                    <ColumnGroup type="footer">
                        <Row>
                            <Column footer="Totals:" :colspan="3" footerStyle="text-align:right"/>
                            <Column :footer="lastYearTotal" />
                            <Column :footer="thisYearTotal" />
                        </Row>
                    </ColumnGroup>
                </DataTable>
            `,
            data() {
                return {
                    sales: null
                }
            },
            created() {
                this.sales = [
                    {product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342},
                    {product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122},
                    {product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500}
                ];
            },
            methods: {
                formatCurrency(value) {
                    return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
                }
            },
            computed: {
                lastYearTotal() {
                    let total = 0;
                    for(let sale of this.sales) {
                        total += sale.lastYearProfit;
                    }
        
                    return this.formatCurrency(total);
                },
                thisYearTotal() {
                    let total = 0;
                    for(let sale of this.sales) {
                        total += sale.thisYearProfit;
                    }
        
                    return this.formatCurrency(total);
                }
            }
        });
        const headerRows = wrapper.findAll('.p-datatable-thead > tr');

        expect(headerRows.length).toEqual(3);

        expect(headerRows[0].findAll('th')[0].attributes().rowspan).toEqual('3');
        expect(headerRows[0].findAll('th')[1].attributes().colspan).toEqual('4');
        expect(headerRows[0].findAll('th')[0].text()).toEqual('Product');
        expect(headerRows[0].findAll('th')[1].text()).toEqual('Sale Rate');

        expect(headerRows[1].findAll('th')[0].attributes().colspan).toEqual('2');
        expect(headerRows[1].findAll('th')[1].attributes().colspan).toEqual('2');
        expect(headerRows[1].findAll('th')[0].text()).toEqual('Sales');
        expect(headerRows[1].findAll('th')[1].text()).toEqual('Profits');

        expect(headerRows[2].findAll('th')[0].text()).toEqual('Last Year');
        expect(headerRows[2].findAll('th')[1].text()).toEqual('This Year');
        expect(headerRows[2].findAll('th')[2].text()).toEqual('Last Year');
        expect(headerRows[2].findAll('th')[3].text()).toEqual('This Year');
    });

    it('should column group templating', () => {
        wrapper = mount({
            components: {
                DataTable,
                ColumnGroup,
                Row,
                Column
            },
            template: `
                <DataTable :value="sales" responsiveLayout="scroll">
                    <ColumnGroup type="header">
                        <Row>
                            <Column header="Product" :rowspan="3" />
                            <Column header="Sale Rate" :colspan="4" />
                        </Row>
                        <Row>
                            <Column header="Sales" :colspan="2" />
                            <Column header="Profits" :colspan="2" />
                        </Row>
                        <Row>
                            <Column header="Last Year" :sortable="true" field="lastYearSale"/>
                            <Column header="This Year" :sortable="true" field="thisYearSale"/>
                            <Column header="Last Year" :sortable="true" field="lastYearProfit"/>
                            <Column header="This Year" :sortable="true" field="thisYearProfit"/>
                        </Row>
                    </ColumnGroup>
                    <Column field="product" />
                    <Column field="lastYearSale">
                        <template #body="slotProps">
                            {{slotProps.data.lastYearSale}}%
                        </template>
                    </Column>
                    <Column field="thisYearSale">
                        <template #body="slotProps">
                            {{slotProps.data.thisYearSale}}%
                        </template>
                    </Column>
                    <Column field="lastYearProfit">
                        <template #body="slotProps">
                            {{formatCurrency(slotProps.data.lastYearProfit)}}
                        </template>
                    </Column>
                    <Column field="thisYearProfit">
                        <template #body="slotProps">
                            {{formatCurrency(slotProps.data.thisYearProfit)}}
                        </template>
                    </Column>
                    <ColumnGroup type="footer">
                        <Row>
                            <Column footer="Totals:" :colspan="3" footerStyle="text-align:right"/>
                            <Column :footer="lastYearTotal" />
                            <Column :footer="thisYearTotal" />
                        </Row>
                    </ColumnGroup>
                </DataTable>
            `,
            data() {
                return {
                    sales: null
                }
            },
            created() {
                this.sales = [
                    {product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342},
                    {product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122},
                    {product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500}
                ];
            },
            methods: {
                formatCurrency(value) {
                    return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
                }
            },
            computed: {
                lastYearTotal() {
                    let total = 0;
                    for(let sale of this.sales) {
                        total += sale.lastYearProfit;
                    }
        
                    return this.formatCurrency(total);
                },
                thisYearTotal() {
                    let total = 0;
                    for(let sale of this.sales) {
                        total += sale.thisYearProfit;
                    }
        
                    return this.formatCurrency(total);
                }
            }
        });
        const footerRows = wrapper.findAll('.p-datatable-tfoot > tr');

        expect(footerRows.length).toEqual(1);

        expect(footerRows[0].findAll('td')[0].attributes().colspan).toEqual('3');
        expect(footerRows[0].findAll('td')[0].text()).not.toEqual('');
        expect(footerRows[0].findAll('td')[0].text()).not.toEqual('');
    });


    // pagination
    it('should have a paginator', async () => {
        await wrapper.setProps({ value: data, paginator: true, rows: 5 });

        expect(wrapper.find('.p-paginator').exists()).toBe(true);
        expect(wrapper.findAll('.p-paginator-page').length).toEqual(2);
        expect(wrapper.find('.p-paginator-next').exists()).toBe(true);
        expect(wrapper.find('.p-paginator-first').classes()).toContain('p-disabled');
        expect(wrapper.findAll('.p-paginator-page')[0].classes()).toContain('p-highlight');
        expect(wrapper.find('.p-paginator-current').text()).toBe('Showing 1 to 5 of 10');

        await wrapper.vm.onPage({page: 1, first: 5, rows: 5, pageCount: 2});
        
        expect(wrapper.findAll('.p-paginator-page')[0].classes()).not.toContain('p-highlight');
        expect(wrapper.findAll('.p-paginator-page')[1].classes()).toContain('p-highlight');
    });


    // sorting
    it('should single sort', async () => {
        const sortableTH = wrapper.findAll('.p-sortable-column')[0];
        const headerClick = jest.spyOn(wrapper.vm, 'onColumnHeaderClick');

        await sortableTH.trigger('click');

        expect(headerClick).toHaveBeenCalled();
        expect(sortableTH.classes()).toContain('p-highlight');
        expect(wrapper.emitted()['update:sortField'][0]).toEqual(['code']);
        expect(wrapper.emitted()['value-change'][0]).not.toBeNull();
    });

    it('should multiple sort', async () => {
        const sortableTHs = wrapper.findAll('.p-sortable-column');
        const headerClick = jest.spyOn(wrapper.vm, 'onColumnHeaderClick');

        await wrapper.setProps({ sortMode: 'multiple' });

        await sortableTHs[0].trigger('click');

        expect(headerClick).toHaveBeenCalled();

        await sortableTHs[1].trigger('click');

        expect(headerClick).toHaveBeenCalled();
        expect(sortableTHs[1].classes()).toContain('p-highlight');
        expect(wrapper.emitted()['update:multiSortMeta'][0]).toEqual([[{ field: 'code', order: 1 }]]);
        expect(wrapper.emitted()['update:multiSortMeta'][1]).toEqual([[{ field: 'name', order: 1 }]]);
        expect(wrapper.emitted()['value-change'][0]).not.toEqual(wrapper.emitted()['value-change'][1]);
    });

    it('should have presort', async () => {
        const presortedTH = wrapper.findAll('.p-sortable-column')[0];

        await wrapper.setProps({ sortOrder: -1, sortField: 'code' });

        expect(presortedTH.classes()).toContain('p-highlight');
    });

    it('should remove sort', async () => {
        const sortableTH = wrapper.findAll('.p-sortable-column')[0];

        await wrapper.setProps({ removableSort: true });

        await sortableTH.trigger('click');

        expect(sortableTH.attributes()['aria-sort']).toBe('ascending');

        await sortableTH.trigger('click');

        expect(sortableTH.attributes()['aria-sort']).toBe('descending');

        await sortableTH.trigger('click');

        expect(sortableTH.attributes()['aria-sort']).toBe('none');
    });


    // filtering
    it('should filtered globally', async () => {
        await wrapper.setProps({ filters: { 'global': {value: 'b', matchMode: FilterMatchMode.STARTS_WITH} }});

        await wrapper.vm.filter(smallData);

        expect(wrapper.emitted().filter[0][0].filteredValue.length).not.toEqual(3);
    });

    it('should filtered with menu display', async () => {
        await wrapper.setProps({ filters: { 'name': {value: 'b', matchMode: FilterMatchMode.STARTS_WITH} },
            filterDisplay: 'menu',
            globalFilterFields: ['name']
        });

        await wrapper.vm.filter(smallData);

        expect(wrapper.emitted()['filter'][0][0].filteredValue.length).not.toEqual(3);
        expect(wrapper.emitted()['value-change'][0][0].length).not.toEqual(3);
    });

    it('should filtered with row display', async () => {
        await wrapper.setProps({ filters: { 'name': {value: 'b', matchMode: FilterMatchMode.STARTS_WITH} },
            filterDisplay: 'row',
            globalFilterFields: ['name']
        });

        await wrapper.vm.filter(smallData);

        expect(wrapper.emitted()['filter'][0][0].filteredValue.length).not.toEqual(3);
        expect(wrapper.emitted()['value-change'][0][0].length).not.toEqual(3);
    });

    // selection
    it('should single select', async () => {
        await wrapper.setProps({ selection: null, selectionMode: 'single'});

        await wrapper.vm.onRowClick({
            originalEvent: {target: wrapper.findAll('tr.p-selectable-row')[0]},
            data: smallData[0],
            index: 0
        });

        expect(wrapper.emitted()['row-click'][0][0].index).toEqual(0);
        expect(wrapper.emitted()['update:selection'][0][0]).toEqual(smallData[0]);
        expect(wrapper.emitted()['row-select'][0][0].index).toEqual(0);
    });

    it('should multiple selection with meta key', async () => {
        await wrapper.setProps({ selection: null, selectionMode: 'multiple'});

        await wrapper.vm.onRowClick({
            originalEvent: {shiftKey: true, target: wrapper.findAll('tr.p-selectable-row')[0]},
            data: smallData[0],
            index: 0
        });

        await wrapper.vm.onRowClick({
            originalEvent: {shiftKey: true, target: wrapper.findAll('tr.p-selectable-row')[1]},
            data: smallData[1],
            index: 1
        });

        expect(wrapper.emitted()['row-click'][0][0].index).toEqual(0);
        expect(wrapper.emitted()['row-click'][1][0].index).toEqual(1);
        expect(wrapper.emitted()['update:selection'][1][0]).toEqual([smallData[0], smallData[1]]);
    });

    it('should multiple selection without meta key', async () => {
        await wrapper.setProps({ selection: null, selectionMode: 'multiple', metaKeySelection: false});

        await wrapper.vm.onRowClick({
            originalEvent: {target: wrapper.findAll('tr.p-selectable-row')[0]},
            data: smallData[0],
            index: 0
        });

        await wrapper.vm.onRowClick({
            originalEvent: {target: wrapper.findAll('tr.p-selectable-row')[1]},
            data: smallData[1],
            index: 1
        });

        expect(wrapper.emitted()['row-click'][0][0].index).toEqual(0);
        expect(wrapper.emitted()['row-click'][1][0].index).toEqual(1);
        expect(wrapper.emitted()['update:selection'][0][0]).toEqual([smallData[0]]);
        expect(wrapper.emitted()['update:selection'][1][0]).toEqual([smallData[1]]);
        expect(wrapper.emitted()['row-select'][0][0].index).toBe(0);
        expect(wrapper.emitted()['row-select'][1][0].index).toBe(1);
    });

    // radio selection
    it('should select when radiobutton selection is enabled', async () => {
        wrapper = mount(DataTable, {
            global: {
                components: {
                    Column
                }
            },
            props: {
                value: smallData,
                selection: null
            },
            slots: {
                default: `
                    <Column selectionMode="single" />
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                `
            }
        });
        
        expect(wrapper.findAll('td.p-selection-column').length).toBe(3);
        expect(wrapper.findAll('.p-radiobutton').length).toBe(3);

        await wrapper.vm.toggleRowWithRadio({originalEvent: {}, data: smallData[0], index: 0});

        expect(wrapper.emitted()['update:selection'][0][0]).toEqual(smallData[0]);
        expect(wrapper.emitted()['row-select'][0][0].index).toBe(0);

        await wrapper.vm.toggleRowWithRadio({originalEvent: {}, data: smallData[1], index: 1});

        expect(wrapper.emitted()['update:selection'][1][0]).toEqual(smallData[1]);
        expect(wrapper.emitted()['row-select'][1][0].index).toBe(1);
    });

    // checkbox selection
    it('should select when checkbox selection is enabled', async () => {
        wrapper = mount(DataTable, {
            global: {
                components: {
                    Column
                }
            },
            props: {
                value: smallData,
                selection: null
            },
            slots: {
                default: `
                    <Column selectionMode="multiple" />
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                `
            }
        });

        expect(wrapper.findAll('.p-checkbox').length).toBe(4);

        await wrapper.vm.toggleRowWithCheckbox({originalEvent: {}, data: smallData[0], index: 0});

        expect(wrapper.emitted()['update:selection'][0][0]).toEqual([smallData[0]]);
        expect(wrapper.emitted()['row-select'][0][0].index).toBe(0);

        await wrapper.vm.toggleRowWithCheckbox({originalEvent: {}, data: smallData[1], index: 1});

        expect(wrapper.emitted()['update:selection'][1][0]).toEqual([smallData[1]]);
        expect(wrapper.emitted()['row-select'][1][0].index).toBe(1);
    });

    it('should select all rows', async () => {
        wrapper = mount(DataTable, {
            global: {
                components: {
                    Column
                }
            },
            props: {
                value: smallData,
                selection: null
            },
            slots: {
                default: `
                    <Column selectionMode="multiple" />
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                `
            }
        });

        await wrapper.vm.toggleRowsWithCheckbox({originalEvent: {}, checked: true});

        expect(wrapper.emitted()['row-select-all'][0][0].data).toEqual(smallData);
        expect(wrapper.emitted()['update:selection'][0][0]).toEqual(smallData);
    });

    it('should unselect all rows', async () => {
        wrapper = mount(DataTable, {
            global: {
                components: {
                    Column
                }
            },
            props: {
                value: smallData,
                selection: smallData
            },
            slots: {
                default: `
                    <Column selectionMode="multiple" />
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                `
            }
        });

        await wrapper.vm.toggleRowsWithCheckbox({originalEvent: {}, checked: false});

        expect(wrapper.emitted()['row-unselect-all'][0][0].data).toBe(undefined);
        expect(wrapper.emitted()['update:selection'][0][0]).toEqual([]);
    });


    // scrolling
    it('should scrolling', async () => {
        await wrapper.setProps({scrollable: true});

        expect(wrapper.find('.p-datatable-scrollable').exists()).toBe(true);
    });

    it('should vertical scroll', async () => {
        await wrapper.setProps({scrollable: true, scrollHeight: '100px'});

        expect(wrapper.find('.p-datatable-wrapper').attributes().style).toBe('max-height: 100px;');
    });

    it('should flex scrolling', async () => {
        await wrapper.setProps({scrollable: true, scrollHeight: 'flex'});

        expect(wrapper.find('.p-datatable-flex-scrollable').exists()).toBe(true);
    });

    it('should both scrolling', async () => {
        await wrapper.setProps({scrollable: true, scrollHeight: '100px', scrollDirection: 'both'});

        expect(wrapper.find('.p-datatable-scrollable-both').exists()).toBe(true);
    });

    it('should have frozen rows', async () => {
        await wrapper.setProps({frozenValue: [smallData[0]], scrollable: true, scrollHeight: '100px', scrollDirection: 'both'});

        expect(wrapper.findAll('.p-datatable-tbody')[0].classes()).toContain('p-datatable-frozen-tbody');
        expect(wrapper.findAll('.p-datatable-tbody')[0].attributes().style).toBe('top: 0px;');
    });

    // frozen columns
    it('should have frozen columns', () => {
        wrapper = null;
        wrapper = mount(DataTable, {
            global: {
                components: {
                    Column
                }
            },
            props: {
                value: smallData,
                selection: null,
                scrollable: true,
                scrollDirection: 'both'
            },
            slots: {
                default: `
                    <Column field="code" header="Code" frozen></Column>
                    <Column field="name" header="Name"></Column>
                `
            }
        });

        expect(wrapper.find('th.p-frozen-column').exists()).toBe(true);
        // expect(wrapper.find('th.p-frozen-column').attributes().style).toBe('left: 0px;');
        expect(wrapper.findAll('td.p-frozen-column').length).toBe(3);
        // expect(wrapper.findAll('td.p-frozen-column')[0].attributes().style).toBe('left: 0px;');
    });


    // lazy loading


    // row expansion
    it('should have row toggler', () => {
        expect(wrapper.findAll('.p-row-toggler').length).toBe(3);
    });

    it('should expand a row', async () => {
        await wrapper.setProps({ expandedRows: [] });

        await wrapper.vm.toggleRow({ originalEvent: {}, data: smallData[0]});

        expect(wrapper.emitted()['update:expandedRows'][0][0]).toEqual([smallData[0]]);
        expect(wrapper.emitted()['row-expand'][0][0].data).toEqual(smallData[0]);
    });

    it('should collapse a row', async () => {
        await wrapper.setProps({ expandedRows: [smallData[0]] });

        await wrapper.vm.toggleRow({ originalEvent: {}, data: smallData[0]});

        expect(wrapper.emitted()['update:expandedRows'][0][0]).toEqual([]);
        expect(wrapper.emitted()['row-collapse'][0][0].data).toEqual(smallData[0]);
    });


    // editing
    // cell editing

    // row editing
    it('should init row editing', async () => {
        wrapper = mount(DataTable, {
            global: {
                components: {
                    Column,
                    InputText
                }
            },
            props: {
                value: smallData,
                editMode: 'row',
                editingRows: []
            },
            slots: {
                default: `
                    <Column field="code" header="Code">
                        <template #editor="{ data, field }">
                            <InputText v-model="data[field]" autofocus />
                        </template>
                    </Column>
                    <Column field="name" header="Name">
                        <template #editor="{ data, field }">
                            <InputText v-model="data[field]" autofocus />
                        </template>
                    </Column>
                    <Column :rowEditor="true" />
                `
            }
        });

        expect(wrapper.findAll('.p-editable-column').length).toBe(6);
        expect(wrapper.findAll('.p-row-editor-init').length).toBe(3);

        await wrapper.vm.onRowEditInit({ data: smallData[0] });

        expect(wrapper.emitted()['update:editingRows'][0][0]).toEqual([smallData[0]]);
        expect(wrapper.emitted()['row-edit-init'][0][0].data).toEqual(smallData[0]);
        expect(wrapper.findAll('.p-datatable-tbody > tr > td')[wrapper.findAll('.p-datatable-tbody > tr > td').length - 1].find('.p-row-editor-init').exists()).toBe(true);
    });

    it('should save row editing', async () => {
        wrapper = mount(DataTable, {
            global: {
                components: {
                    Column,
                    InputText
                }
            },
            props: {
                value: smallData,
                editMode: 'row',
                editingRows: []
            },
            slots: {
                default: `
                    <Column field="code" header="Code">
                        <template #editor="{ data, field }">
                            <InputText v-model="data[field]" autofocus />
                        </template>
                    </Column>
                    <Column field="name" header="Name">
                        <template #editor="{ data, field }">
                            <InputText v-model="data[field]" autofocus />
                        </template>
                    </Column>
                    <Column :rowEditor="true" />
                `
            }
        });

        await wrapper.vm.onRowEditSave({data: { "id": "9999", "code": "vbb124btr", "name": "Game Controller"}});

        expect(wrapper.emitted()['update:editingRows'][0][0]).toEqual([]);
        expect(wrapper.emitted()['row-edit-save'][0][0].data).toEqual({ "id": "9999", "code": "vbb124btr", "name": "Game Controller"});
    });

    it('should cancel row editing', async () => {
        wrapper = mount(DataTable, {
            global: {
                components: {
                    Column,
                    InputText
                }
            },
            props: {
                value: smallData,
                editMode: 'row',
                editingRows: []
            },
            slots: {
                default: `
                    <Column field="code" header="Code">
                        <template #editor="{ data, field }">
                            <InputText v-model="data[field]" autofocus />
                        </template>
                    </Column>
                    <Column field="name" header="Name">
                        <template #editor="{ data, field }">
                            <InputText v-model="data[field]" autofocus />
                        </template>
                    </Column>
                    <Column :rowEditor="true" />
                `
            }
        });
        
        await wrapper.vm.onRowEditCancel({ data: smallData[0] });

        expect(wrapper.emitted()['update:editingRows'][0][0]).toEqual([]);
        expect(wrapper.emitted()['row-edit-cancel'][0][0].data).toEqual(smallData[0]);
    });


    // column resize
    it('should fit mode expanding exists', () => {
        wrapper = mount(DataTable, {
            global: {
                components: {
                    Column
                }
            },
            props: {
                value: smallData,
                resizableColumns: true,
                columnResizeMode: 'fit'
            },
            slots: {
                default: `
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                `
            }
        });

        expect(wrapper.find('.p-datatable.p-component').classes()).toContain('p-datatable-resizable');
        expect(wrapper.find('.p-datatable.p-component').classes()).toContain('p-datatable-resizable-fit');
        expect(wrapper.findAll('.p-column-resizer').length).toBe(2);
    });

    it('should fit mode resize start', async () => {
        wrapper = mount(DataTable, {
            global: {
                components: {
                    Column
                }
            },
            props: {
                value: smallData,
                resizableColumns: true,
                columnResizeMode: 'fit'
            },
            slots: {
                default: `
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                `
            }
        });

        const resizer = wrapper.findAll('.p-column-resizer')[0];

        await wrapper.vm.onColumnResizeStart({target: resizer.element});

        expect(wrapper.componentVM.columnResizing).toBe(true);
        expect(wrapper.find('.p-column-resizer-helper').attributes().style).toContain('display: none;');
    });

    it('should fit mode resize', async () => {
        wrapper = mount(DataTable, {
            global: {
                components: {
                    Column
                }
            },
            props: {
                value: smallData,
                resizableColumns: true,
                columnResizeMode: 'fit'
            },
            slots: {
                default: `
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                `
            }
        });

        await wrapper.vm.onColumnResize({});

        expect(wrapper.find('.p-column-resizer-helper').attributes().style).toContain('display: block;');
    });

    it('should fit mode column resize end', async () => {
        wrapper = mount(DataTable, {
            global: {
                components: {
                    Column
                }
            },
            props: {
                value: smallData,
                resizableColumns: true,
                columnResizeMode: 'fit'
            },
            slots: {
                default: `
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                `
            }
        });

        const resizer = wrapper.findAll('.p-column-resizer')[0];

        await wrapper.vm.onColumnResizeStart({target: resizer.element});

        await wrapper.vm.onColumnResizeEnd();

        expect(wrapper.find('.p-column-resizer-helper').attributes().style).toContain('display: none;');
    });

    it('should expand mode resize start', async () => {
        wrapper = mount(DataTable, {
            global: {
                components: {
                    Column
                }
            },
            props: {
                value: smallData,
                resizableColumns: true,
                columnResizeMode: 'expand'
            },
            slots: {
                default: `
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                `
            }
        });

        const resizer = wrapper.findAll('.p-column-resizer')[0];

        await wrapper.vm.onColumnResizeStart({target: resizer.element});

        expect(wrapper.componentVM.columnResizing).toBe(true);
        expect(wrapper.find('.p-column-resizer-helper').attributes().style).toContain('display: none;');
    });

    it('should fit mode resize', async () => {
        wrapper = mount(DataTable, {
            global: {
                components: {
                    Column
                }
            },
            props: {
                value: smallData,
                resizableColumns: true,
                columnResizeMode: 'expand'
            },
            slots: {
                default: `
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                `
            }
        });

        await wrapper.vm.onColumnResize({});

        expect(wrapper.find('.p-column-resizer-helper').attributes().style).toContain('display: block;');
    });

    it('should fit mode column resize end', async () => {
        wrapper = mount(DataTable, {
            global: {
                components: {
                    Column
                }
            },
            props: {
                value: smallData,
                resizableColumns: true,
                columnResizeMode: 'expand'
            },
            slots: {
                default: `
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                `
            }
        });

        const resizer = wrapper.findAll('.p-column-resizer')[0];

        await wrapper.vm.onColumnResizeStart({target: resizer.element});

        await wrapper.vm.onColumnResizeEnd();

        expect(wrapper.find('.p-column-resizer-helper').attributes().style).toContain('display: none;');
    });


    // column reorder
    it('should reorder columns', async () => {
        await wrapper.setProps({ reorderableColumns: true });

        expect(wrapper.find('.p-datatable-reorder-indicator-up').exists()).toBe(true);
        expect(wrapper.find('.p-datatable-reorder-indicator-down').exists()).toBe(true);
    });


    // row reorder
    it('should exist', () => {
        wrapper = mount(DataTable, {
            global: {
                components: {
                    Column
                }
            },
            props: {
                value: smallData
            },
            slots: {
                default: `
                    <Column :rowReorder="true" />
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                `
            }
        });
        
        expect(wrapper.findAll('.p-datatable-reorderablerow-handle').length).toBe(3);
    });


    // row group
    // subheader grouping
    it('should exist', () => {
        wrapper = mount(DataTable, {
            global: {
                components: {
                    Column
                }
            },
            props: {
                value: smallData,
                rowGroupMode: 'subheader',
                groupRowsBy: 'name',
                sortMode: 'single',
                sortField: 'name',
                sortOrder: 1,
                scrollable: true
            },
            slots: {
                default: `
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                `,
                groupheader: `GroupHeader Templating`,
                groupfooter: `GroupFooter Templating`
            }
        });

        expect(wrapper.find('.p-datatable-tbody').attributes().role).toBe('rowgroup');
        expect(wrapper.findAll('.p-column-header-content').length).toBe(1);
        expect(wrapper.find('.p-column-header-content').text()).toBe('Code');
    });

    it('should have groupheader templating', () => {
        wrapper = mount(DataTable, {
            global: {
                components: {
                    Column
                }
            },
            props: {
                value: smallData,
                rowGroupMode: 'subheader',
                groupRowsBy: 'name',
                sortMode: 'single',
                sortField: 'name',
                sortOrder: 1,
                scrollable: true
            },
            slots: {
                default: `
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                `,
                groupheader: `GroupHeader Templating`,
                groupfooter: `GroupFooter Templating`
            }
        });

        expect(wrapper.findAll('.p-rowgroup-header').length).toBe(3);
        expect(wrapper.find('.p-rowgroup-header').text()).toBe('GroupHeader Templating');
    });

    it('should have groupfooter templating', () => {
        wrapper = mount(DataTable, {
            global: {
                components: {
                    Column
                }
            },
            props: {
                value: smallData,
                rowGroupMode: 'subheader',
                groupRowsBy: 'name',
                sortMode: 'single',
                sortField: 'name',
                sortOrder: 1,
                scrollable: true
            },
            slots: {
                default: `
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                `,
                groupheader: `GroupHeader Templating`,
                groupfooter: `GroupFooter Templating`
            }
        });

        expect(wrapper.findAll('.p-rowgroup-header').length).toBe(3);
        expect(wrapper.find('.p-rowgroup-footer').text()).toBe('GroupFooter Templating');
    });

    // expandable row groups
    it('should expand', () => {
        wrapper = mount(DataTable, {
            global: {
                components: {
                    Column
                }
            },
            props: {
                value: smallData,
                rowGroupMode: 'subheader',
                groupRowsBy: 'name',
                sortMode: 'single',
                sortField: 'name',
                sortOrder: 1,
                scrollable: true,
                expandableRowGroups: true,
                expandedRowGroups: ['Blue Band']
            },
            slots: {
                default: `
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                `,
                groupheader: `GroupHeader Templating`,
                groupfooter: `GroupFooter Templating`
            }
        });

        expect(wrapper.find('.p-column-title').text()).toBe('Code');
    });

    // rowspan grouping
    it('should rowspan', async () => {
        wrapper = mount(DataTable, {
            global: {
                components: {
                    Column
                }
            },
            props: {
                value: smallData,
                rowGroupMode: 'rowspan',
                groupRowsBy: 'name',
                sortMode: 'single',
                sortField: 'name',
                sortOrder: 1,
                scrollable: true
            },
            slots: {
                default: `
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                `,
                groupheader: `GroupHeader Templating`,
                groupfooter: `GroupFooter Templating`
            }
        });

        expect(wrapper.find('td > span').text()).toBe('Code');
    });


    // export
    it('should export table', async () => {
        const exportCSV = jest.spyOn(wrapper.vm, 'exportCSV');

        await wrapper.vm.exportCSV();

        expect(exportCSV).toHaveBeenCalled();
    });


    // state
    it('should get storage', async () => {
        await wrapper.setProps({ stateStorage: 'session', stateKey: 'dt-state-demo-session', paginator: true });

        await wrapper.vm.getStorage();

        expect(wrapper.emitted()['state-save'][0]).not.toBeNull();
    });

    it('should save session storage', async () => {
        jest.spyOn(window.sessionStorage.__proto__, 'setItem');
        window.sessionStorage.__proto__.setItem = jest.fn();

        await wrapper.vm.saveState();

        expect(sessionStorage.setItem).toHaveBeenCalled();
        expect(wrapper.emitted()['state-save'][0]).not.toBeNull();
    });

    it('should save local storage', async () => {
        jest.spyOn(window.localStorage.__proto__, 'setItem');
        window.localStorage.__proto__.setItem = jest.fn();

        await wrapper.vm.saveState();

        expect(localStorage.setItem).toHaveBeenCalled();
        expect(wrapper.emitted()['state-save'][0]).not.toBeNull();
    });


    // contextmenu


    // responsive
    it('should have stack layout', () => {
        expect(wrapper.find('.p-datatable').classes()).toContain('p-datatable-responsive-stack');
    });

    it('should have scroll layout', async () => {
        await wrapper.setProps({ responsiveLayout: 'scroll' });

        expect(wrapper.find('.p-datatable').classes()).toContain('p-datatable-responsive-scroll');
    });


    // row styling
});