import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class InfoCircleIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        InfoCircleIcon: GlobalComponentConstructor<InfoCircleIcon>;
    }
}

export default InfoCircleIcon;
