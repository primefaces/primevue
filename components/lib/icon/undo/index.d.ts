import { GlobalComponentConstructor } from '../../ts-helpers';
import { Icon } from '../index';

declare class UndoIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        UndoIcon: GlobalComponentConstructor<UndoIcon>;
    }
}

export default UndoIcon;
