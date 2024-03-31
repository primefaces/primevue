<template>
    <DocSectionText v-bind="$attrs">
        <p>Filters are accessed with <i>FilterService.filters</i>.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
const value = 'PrimeVue';

FilterService.filters.equals(value, 'Vue');                            //false
FilterService.filters.equals(value, 8);                                //false
FilterService.filters.equals(value, new Date());                       //false
FilterService.filters.contains(value, 'Vue');                          //true
FilterService.filters.startsWith(value, 'Vue');                        //false
FilterService.filters.endsWith(value, 'Vue');                          //true
FilterService.filters.lt(10, 20);                                      //true
FilterService.filters.gt(50, 20);                                      //true
FilterService.filters.in(value, ['PrimeFaces', 'PrimeVue']);           //true   `
            }
        };
    }
};
</script>
