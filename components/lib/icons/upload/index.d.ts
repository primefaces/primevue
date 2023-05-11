import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class UploadIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        UploadIcon: GlobalComponentConstructor<UploadIcon>;
    }
}

export default UploadIcon;
