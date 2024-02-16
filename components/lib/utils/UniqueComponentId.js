var prefixIds = {};

export default function (prefix = 'pv_id_', suffix = '') {
    if (!prefixIds.hasOwnProperty(prefix)) {
        prefixIds[prefix] = 0;
    }

    prefixIds[prefix]++;

    return `${prefix}${prefixIds[prefix]}${suffix}`;
}
