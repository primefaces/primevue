import { toValues } from '@primeuix/forms/utils';
import { flatErrors } from '@regle/core';

export const regleResolver = (r$, resolverOptions) => {
    return async ({ values, name }) => {
        const { raw = false } = resolverOptions || {};

        r$.$value = values;
        const { valid, data: result } = await r$.$validate();

        if (valid) {
            return {
                values: toValues(raw ? values : undefined, name),
                errors: {}
            };
        }

        const errors = flatErrors(r$.$errors, { includePath: true }).reduce((acc, { error, path }) => {
            if (path) {
                acc[path] ||= [];
                acc[path].push({ message: error });
            }

            return acc;
        }, {});

        return {
            values: toValues(raw ? values : result, name),
            errors
        };
    };
};
