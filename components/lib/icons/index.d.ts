import { ClassComponent } from '../ts-helpers';

export interface IconProps {
    label?: string | undefined;
    spin?: boolean;
}

export interface IconSlots {}

export interface IconEmits {}

export declare class Icon extends ClassComponent<IconProps, IconSlots, IconEmits> {}
