import { AllowedComponentProps, ComponentCustomProps, MethodOptions, ObjectEmitsOptions, SlotsType, VNode, VNodeProps, DefineComponent as _DefineComponent } from 'vue';

declare type PublicProps = VNodeProps & AllowedComponentProps & ComponentCustomProps;

declare type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

export declare type EmitFn<Options = ObjectEmitsOptions, Event extends keyof Options = keyof Options> = Options extends Array<infer V>
    ? (e: V, ...args: any[]) => void
    : {} extends Options
    ? (e: string, ...args: any[]) => void
    : UnionToIntersection<
          {
              [key in Event]: Options[key] extends (...args: infer Args) => any ? (e: key, ...args: Args) => void : (e: key, ...args: any[]) => void;
          }[Event]
      >;

export type DefineComponent<P = {}, S = {}, E = {}, M = {}> = _DefineComponent<P, {}, {}, {}, M & MethodOptions, {}, {}, E & ObjectEmitsOptions, string, {}, {}, {}, S & SlotsType>;

export type GlobalComponentConstructor<P = {}, S = {}, E = {}, M = {}> = {
    new (): {
        $props: P & PublicProps;
        $slots: S;
        $emit: E;
    } & M;
};

/**
 * Custom types
 */
export declare type Booleanish = boolean | 'true' | 'false';

export declare type Numberish = number | string;

export declare type Nullable<T = void> = T | null | undefined;

export declare type PassThrough<T = void> = T | object | undefined;

export declare type DesignToken<T = void> = T | object | undefined;

export declare type DefaultPassThrough<T = void> = T | ((instance?: VNode) => T | undefined) | undefined;

export declare type HintedString<T extends string> = (string & {}) | T;

/**
 * Modules
 */
export * from '@primevue/core/api';
export * from '@primevue/core/base/style';
export * from '@primevue/core/basecomponent';
export * from '@primevue/core/basecomponent/style';
export * from '@primevue/core/basedirective';
export * from '@primevue/core/config';
export { default as PrimeVue } from '@primevue/core/config';
export * from '@primevue/core/service';
export * from '@primevue/core/usestyle';
export * from '@primevue/core/utils';
