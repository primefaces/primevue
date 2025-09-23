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

        const errors = flatErrors(r$.$errors, { includePath: true }).reduce((acc, { message, path }) => {
            if (path) {
                const joinedPath = path.join('.');

                acc[joinedPath] ||= [];
                acc[joinedPath].push({ message });
            }

            return acc;
        }, {});

        return {
            values: toValues(raw ? values : result, name),
            errors
        };
    };
};
