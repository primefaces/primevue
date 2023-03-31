import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class InfoCircleIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        InfoCircleIcon: GlobalComponentConstructor<InfoCircleIcon>;
    }
}

export default InfoCircleIcon;
