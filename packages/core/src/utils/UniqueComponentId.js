import { uuid } from '@primeuix/utils/uuid';

/**
 * @deprecated since v4.3.0. Use `uuid` from @primeuix/utils instead.
 * @param {string} prefix
 * @return {string}
 */
export default function (prefix = 'pv_id_') {
    return uuid(prefix);
}
