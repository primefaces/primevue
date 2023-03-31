import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class ExclamationTriangleIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        ExclamationTriangleIcon: GlobalComponentConstructor<ExclamationTriangleIcon>;
    }
}

export default ExclamationTriangleIcon;
