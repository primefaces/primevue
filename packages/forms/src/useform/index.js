import { isArray, isEmpty, isNotEmpty, mergeKeys, resolve } from '@primeuix/utils';
import { computed, getCurrentInstance, mergeProps, nextTick, onMounted, reactive, ref, toValue, watch } from 'vue';

function tryOnMounted(fn, sync = true) {
    if (getCurrentInstance()) onMounted(fn);
    else if (sync) fn();
    else nextTick(fn);
}

function watchPausable(source, callback, options) {
    const isActive = ref(true);

    const stop = watch(
        source,
        (newValue, oldValue) => {
            if (!isActive.value) return;
            callback(newValue, oldValue);
        },
        options
    );

    return {
        stop,
        pause: () => {
            isActive.value = false;
        },
        resume: () => {
            isActive.value = true;
        }
    };
}

// @todo: move to utils
function groupKeys(obj) {
    return Object.entries(obj).reduce((result, [key, value]) => {
        /* eslint-disable-next-line no-useless-escape */
        key.split(/[\.\[\]]+/)
            .filter(Boolean)
            .reduce((acc, curr, idx, arr) => (acc[curr] ??= isNaN(arr[idx + 1]) ? (idx === arr.length - 1 ? value : {}) : []), result);

        return result;
    }, {});
}

function getValueByPath(obj, path) {
    if (!obj || !path) {
        // short circuit if there is nothing to resolve
        return null;
    }

    try {
        const value = obj[path];

        if (isNotEmpty(value)) return value;
    } catch {
        // do nothing and continue to other methods to resolve path data
    }

    /* eslint-disable-next-line no-useless-escape */
    const keys = path.split(/[\.\[\]]+/).filter(Boolean);

    return keys.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
}

export const useForm = (options = {}) => {
    const _states = reactive({});
    const fields = reactive({});
    const valid = computed(() => Object.values(_states).every((field) => !field.invalid));
    const states = computed(() => groupKeys(_states));

    const getInitialState = (field, initialValue) => {
        return {
            value: initialValue ?? getValueByPath(options.initialValues, field),
            touched: false,
            dirty: false,
            pristine: true,
            valid: true,
            invalid: false,
            error: null,
            errors: []
        };
    };

    const isFieldValidate = (field, validateOn) => {
        const value = resolve(validateOn, field);

        return value === true || (isArray(value) && value.includes(field));
    };

    const validateOn = async (option, defaultValue) => {
        let results = {};

        isArray(options[option]) ? (results = await validate(options[option])) : (options[option] ?? defaultValue) && (results = await validate());
        const fieldArr = Object.keys(fields).filter((field) => fields[field]?.options?.[option]) || [];

        isNotEmpty(fieldArr) && (results = await validate(fieldArr));

        return results;
    };

    const validateFieldOn = (field, fieldOptions, option, defaultValue) => {
        (fieldOptions?.[option] ?? isFieldValidate(field, options[option] ?? defaultValue)) && validate(field);
    };

    const defineField = (field, fieldOptions) => {
        if (!field) {
            //console.warn('The `name` attribute is required for the field definition.');

            return []; // prevent errors
        }

        fields[field]?._watcher.stop();

        _states[field] ||= getInitialState(field, fieldOptions?.initialValue);

        const props = mergeProps(resolve(fieldOptions, _states[field])?.props, resolve(fieldOptions?.props, _states[field]), {
            name: field,
            onBlur: () => {
                _states[field].touched = true;
                validateFieldOn(field, fieldOptions, 'validateOnBlur');
            },
            onInput: (event) => {
                _states[field].value = event && Object.hasOwn(event, 'value') ? event.value : event.target.value;
            },
            onChange: (event) => {
                _states[field].value = event && Object.hasOwn(event, 'value') ? event.value : event.target.type === 'checkbox' || event.target.type === 'radio' ? event.target.checked : event.target.value;
            },
            onInvalid: (errors) => {
                _states[field].invalid = true;
                _states[field].errors = errors;
                _states[field].error = errors?.[0] ?? null;
            }
        });

        const _watcher = watchPausable(
            () => _states[field].value,
            (newValue, oldValue) => {
                if (_states[field].pristine) {
                    _states[field].pristine = false;
                }

                if (newValue !== oldValue) {
                    _states[field].dirty = true;
                }

                validateFieldOn(field, fieldOptions, 'validateOnValueUpdate', true);
            }
        );

        fields[field] = { props, states: _states[field], options: fieldOptions, _watcher };

        return [_states[field], props];
    };

    const handleSubmit = (callback) => {
        return async (event) => {
            const results = await validateOn('validateOnSubmit', true);

            return callback({
                originalEvent: event,
                valid: toValue(valid),
                states: toValue(states),
                reset,
                ...results
            });
        };
    };

    const handleReset = (callback) => {
        return async (event) => {
            reset();

            return callback({
                originalEvent: event
            });
        };
    };

    const validate = async (field) => {
        const resolverOptions = Object.entries(_states).reduce(
            (acc, [key, val]) => {
                acc.names.push(key);
                acc.values[key] = val.value;

                return acc;
            },
            { names: [], values: {} }
        );

        const [names, values] = [resolverOptions.names, groupKeys(resolverOptions.values)];

        let result = (await options.resolver?.({ names, values })) ?? { values };

        result.errors ??= {};

        const flattenFields = [field].flat();

        for (const [fieldName, fieldInst] of Object.entries(fields)) {
            if (flattenFields.includes(fieldName) || !field || isEmpty(result.errors)) {
                const fieldResolver = fieldInst.options?.resolver;

                if (fieldResolver) {
                    const fieldValue = fieldInst.states.value;
                    const fieldResult = (await fieldResolver({ values: fieldValue, value: fieldValue, name: fieldName })) ?? { values: fieldValue };

                    isArray(fieldResult.errors) && (fieldResult.errors = { [fieldName]: fieldResult.errors });

                    result = mergeKeys(result, fieldResult);
                }

                const errors = getValueByPath(result.errors, fieldName) ?? [];

                //const value = result.values?.[fieldName] ?? _states[sField].value;
                _states[fieldName].invalid = errors.length > 0;
                _states[fieldName].valid = !_states[fieldName].invalid;
                _states[fieldName].errors = errors;
                _states[fieldName].error = errors?.[0] ?? null;
                //states[fieldName].value = value;
            }
        }

        return {
            ...result,
            errors: groupKeys(result.errors)
        };
    };

    const reset = () => {
        Object.keys(_states).forEach(async (field) => {
            const watcher = fields[field]._watcher;

            watcher.pause();
            fields[field].states = _states[field] = getInitialState(field, fields[field]?.options?.initialValue);
            await nextTick();
            watcher.resume();
        });
    };

    const setFieldValue = (field, value) => {
        _states[field].value = value;
    };

    const getFieldState = (field) => {
        return fields[field]?.states;
    };

    const setValues = (values) => {
        Object.keys(values).forEach((field) => setFieldValue(field, values[field]));
    };

    const validateOnMounted = () => {
        validateOn('validateOnMount');
    };

    tryOnMounted(validateOnMounted);

    return {
        defineField,
        setFieldValue,
        getFieldState,
        handleSubmit,
        handleReset,
        validate,
        setValues,
        reset,
        valid,
        states,
        fields
    };
};
