<template>
    <DocSectionText v-bind="$attrs">
        <p>FilterService can be extended by adding new constraints using the register function.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
FilterService.register('isPrimeNumber', (value, filter): boolean => {
    if (filter === undefined || filter === null || filter.trim() === '') {
        return true;
    }

    if (value === undefined || value === null) {
        return false;
    }

    return value.toString() === filter.toString();
});

FilterService.filters['isPrimeNumber'](3);                      //true
FilterService.filters['isPrimeNumber'](5);                      //true
FilterService.filters['isPrimeNumber'](568985673);              //false
`
            }
        };
    }
};
</script>
