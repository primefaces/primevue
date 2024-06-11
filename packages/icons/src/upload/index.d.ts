import { GlobalComponentConstructor } from '../../../primevue/src/ts-helpers';
import { Icon } from '../../icons/index';

declare class UploadIcon extends Icon {}

declare module 'vue' {
    export interface GlobalComponents {
        UploadIcon: GlobalComponentConstructor<UploadIcon>;
    }
}

export default UploadIcon;
