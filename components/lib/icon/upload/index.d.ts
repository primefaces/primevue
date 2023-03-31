import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class UploadIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        UploadIcon: GlobalComponentConstructor<UploadIcon>;
    }
}

export default UploadIcon;
