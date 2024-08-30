import type { EventBusOptions } from '@primeuix/utils/eventbus';
import { EventBus } from '@primeuix/utils/eventbus';

export interface PrimeVueService extends EventBusOptions {}

export default EventBus() as PrimeVueService;
