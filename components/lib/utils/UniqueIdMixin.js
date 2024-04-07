import UniqueComponentId from './UniqueComponentId';

const isNuxt = typeof window === 'undefined' || (typeof process !== 'undefined' && Boolean(process.client || process.server));

const defaultPropName = 'id';
const defaultSourcePropertyGetter = (vm) => vm.$attrs.id;

export default function (propName = defaultPropName, sourcePropertyGetter = defaultSourcePropertyGetter) {
    propName ??= defaultPropName;
    sourcePropertyGetter ??= defaultSourcePropertyGetter;

    return {
        data: (vm) => {
            vm.$watch(
                sourcePropertyGetter.bind(null, vm),
                (value) => {
                    vm[propName] = value || UniqueComponentId();
                },
                {
                    immediate: !isNuxt
                }
            );

            return {
                [propName]: sourcePropertyGetter(vm)
            };
        },

        mounted() {
            if (isNuxt) {
                this[propName] = sourcePropertyGetter(this) || UniqueComponentId();
            }
        }
    };
}
