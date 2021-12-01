import { ComponentCustomProps, VNodeProps, EmitsOptions, AllowedComponentProps, ObjectEmitsOptions } from 'vue';

declare type PublicProps = VNodeProps & AllowedComponentProps & ComponentCustomProps;

declare type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;

declare type EmitFn<Options = ObjectEmitsOptions, Event extends keyof Options = keyof Options> = Options extends Array<infer V> ? (event: V, ...args: any[]) => void : {} extends Options ? (event: string, ...args: any[]) => void : UnionToIntersection<{
  [key in Event]: Options[key] extends ((...args: infer Args) => any) ? (event: key, ...args: Args) => void : (event: key, ...args: any[]) => void;
}[Event]>;

export class ClassComponent<Props, Slots, Emits extends EmitsOptions = {}> {
  $props: Props & PublicProps;
  $slots: Slots;
  $emit: EmitFn<Emits>;
}

export type GlobalComponentConstructor<T> = {
  new (): T;
}

/**
 * Custom types
 */
export declare type Booleanish = boolean | 'true' | 'false';

export declare type Numberish = number | string;

export declare type Nullable<T = void> = T | null | undefined;
