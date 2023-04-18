import { Icon } from '../../icons/index';
import { GlobalComponentConstructor } from '../../ts-helpers';

declare class UndoIcon extends Icon {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        UndoIcon: GlobalComponentConstructor<UndoIcon>;
    }
}

export default UndoIcon;
