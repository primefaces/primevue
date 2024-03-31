import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class ExclamationTriangleIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        ExclamationTriangleIcon: GlobalComponentConstructor<ExclamationTriangleIcon>;
    }
}

export default ExclamationTriangleIcon;
