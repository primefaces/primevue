import UniqueComponentId from './UniqueComponentId';

const isNuxt = typeof window === 'undefined' || (typeof process !== 'undefined' && Boolean(process.client || process.server));

const defaultPropName = 'id';
const defaultSourcePropertyGetter = (vm) => vm.$attrs.id;

export default function (propName = defaultPropName, sourcePropertyGetter = defaultSourcePropertyGetter) {
    return {
        data: (vm) => {
            vm.$watch(sourcePropertyGetter.bind(undefined, vm), (value) => {
                vm[propName] = value || UniqueComponentId();
            });

            return {
                [propName]: isNuxt ? sourcePropertyGetter(vm) : sourcePropertyGetter(vm) || UniqueComponentId()
            };
        },

        mounted() {
            if (isNuxt) {
                this[propName] = sourcePropertyGetter(this) || UniqueComponentId();
            }
        }
    };
}
