import type { R as ResolverOptions, a as ResolverResult } from '@primeuix/forms/dist/index.d-BMK_1xX7.d.mts';
import type { RegleRoot } from '@regle/core';

declare const regleResolver: <T extends Record<string, unknown>>(r$: RegleRoot<T>, resolverOptions?: ResolverOptions) => ({ values, name }: any) => Promise<ResolverResult<T>>;

export { regleResolver };
