var lastId = 0;

export default function (prefix = 'pr_id_') {
    lastId++;
    return `${prefix}${lastId}`;
}