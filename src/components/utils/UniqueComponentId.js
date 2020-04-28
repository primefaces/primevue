var lastId = 0;

export default function (prefix = 'pv_id_') {
    lastId++;
    return `${prefix}${lastId}`;
}