import { EventBus } from '@primeuix/utils/eventbus';

export const getPrimeVueServiceInstance = () => EventBus();

const PrimeVueService = getPrimeVueServiceInstance();

export default PrimeVueService;
