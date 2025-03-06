import type { ConfirmationOptions } from 'primevue-vaultic/confirmationoptions';

export declare function useConfirm(): {
    require: (option: ConfirmationOptions) => void;
    close: () => void;
};
