import { resolve } from '@primeuix/utils';
import { computed, mergeProps, nextTick, onMounted, reactive, toValue, watch } from 'vue';

function tryOnMounted(fn, sync = true) {
    if (getCurrentInstance()) onMounted(fn);
    else if (sync) fn();
    else nextTick(fn);
}

export const useForm = (options = {}) => {
    const states = reactive({});
    const valid = computed(() => Object.values(states).every((field) => !field.invalid));

    const getInitialState = (field) => {
        return {
            value: options.defaultValues?.[field],
            touched: false,
            dirty: false,
            pristine: true,
            valid: true,
            invalid: false,
            errors: []
        };
    };

    const isFieldValidate = (field, validateOn) => {
        const value = resolve(validateOn, field);

        return value === true || (Array.isArray(value) && value.includes(field));
    };

    const defineField = (field, fieldOptions) => {
        states[field] ||= getInitialState(field);

        const props = mergeProps(resolve(fieldOptions, states[field])?.props, resolve(fieldOptions?.props, states[field]), {
            name: field,
            onBlur: () => {
                states[field].touched = true;
                (fieldOptions?.validateOnBlur ?? isFieldValidate(field, options.validateOnBlur)) && validate(field);
            },
            onChange: (event) => {
                states[field].value = event.hasOwnProperty('value') ? event.value : event.target.type === 'checkbox' || event.target.type === 'radio' ? event.target.checked : event.target.value;
            },
            onInvalid: (errors) => {
                states[field].invalid = true;
                states[field].errors = errors;
            }
        });

        watch(
            () => states[field].value,
            (newValue, oldValue) => {
                if (states[field].pristine) {
                    states[field].pristine = false;
                }

                if (newValue !== oldValue) {
                    states[field].dirty = true;
                }

                (fieldOptions?.validateOnBlur ?? isFieldValidate(field, options.validateOnValueUpdate ?? true)) && validate(field);
            }
        );

        return [states[field], props];
    };

    const handleSubmit = (callback) => {
        return async (event) => {
            let results = undefined;

            (options.validateOnSubmit ?? true) && (results = await validate());

            return callback({
                originalEvent: event,
                valid: toValue(valid),
                states: toValue(states),
                ...results
            });
        };
    };

    const validate = async (field) => {
        const values = Object.entries(states).reduce((acc, [key, val]) => {
            acc[key] = val.value;

            return acc;
        }, {});

        const result = (await options.resolver?.({ values })) ?? {};

        for (const sField of Object.keys(states)) {
            if (sField === field || !field) {
                const errors = result.errors?.[sField] ?? [];
                const value = result.values?.[sField] ?? states[sField].value;

                states[sField].invalid = errors.length > 0;
                states[sField].valid = !states[sField].invalid;
                states[sField].errors = errors;
                states[sField].value = value;
            }
        }

        return result;
    };

    const reset = () => {
        Object.keys(states).forEach((field) => (states[field] = getInitialState(field)));
    };

    options.validateOnMount && tryOnMounted(validate);

    return {
        defineField,
        handleSubmit,
        validate,
        reset,
        valid: toValue(valid),
        states: toValue(states)
    };
};
