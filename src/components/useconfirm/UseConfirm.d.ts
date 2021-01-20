export declare function useConfirm(): { 
    require(args:{ 
        message?: string;
        target?: EventTarget;
        group?: string;
        icon?: string;
        header?: string;
        accept?: Function;
        reject?: Function;
        acceptLabel?: string;
        rejectLabel?: string;
        acceptIcon?: string;
        rejectIcon?: string;
        blockScroll?: boolean;
        acceptClass?: string;
        rejectClass?: string;
    }): void 

    close(): void 
}