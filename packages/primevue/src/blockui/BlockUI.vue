<template>
    <div ref="container" :class="cx('root')" :aria-busy="isBlocked" v-bind="ptmi('root')">
        <slot></slot>
    </div>
</template>

<script>
import { addClass, createElement, hasCSSAnimation } from '@primeuix/utils/dom';
import { ZIndex } from '@primeuix/utils/zindex';
import { blockBodyScroll, unblockBodyScroll } from 'primevue/utils';
import BaseBlockUI from './BaseBlockUI.vue';

export default {
    name: 'BlockUI',
    extends: BaseBlockUI,
    inheritAttrs: false,
    emits: ['block', 'unblock'],
    mask: null,
    requestQueue: null,
    isBlockingInProgress: false,
    isUnBlockingInProgress: false,
    
    data() {
        return {
            isBlocked: false
        };
    },
    watch: {
        blocked(newValue) {
//            if (newValue === true) this.block();
//            else this.unblock();
			this.requestQueue.push(newValue);
			this.handleBlockUnblockUi();
        }
    },
    mounted() {
    	this.requestQueue = [];
    	this.isBlockingInProgress = false;
    	this.isUnBlockingInProgress = false;
        if (this.blocked) {
            //this.block();
			this.requestQueue.push(this.blocked);
			this.handleBlockUnblockUi();
        }
    },
    methods: {
    	handleBlockUnblockUi() {
            //if blocking or unblocking is in progress, we just wait for it finish first
 			if (this.isBlockingInProgress || this.isUnBlockingInProgress) {
				return;
			}
			
            //if there are multiple requests waiting 
            //we only care about the last one, process the last one, ignore the previous 
			if(this.requestQueue && this.requestQueue.length > 0) {
				const requestLen = this.requestQueue.length;
				const lastRequest = this.requestQueue[requestLen-1];
				this.requestQueue = this.requestQueue.slice(requestLen);
								
				if (lastRequest) {
					this.block();
				} else {
					this.unblock();
				}
			}
        },

        block() {
        	this.isBlockingInProgress = true;
        	try {
	            let styleClass = 'p-blockui-mask p-overlay-mask p-overlay-mask-enter';
	            let newMask = false;
	
	            if (this.fullScreen) {
	            	if(!this.mask || !document.body.contains(this.mask)) {
	            		
		                styleClass += ' p-blockui-mask-document';
		
		                this.mask = createElement('div', {
		                    style: {
		                        position: 'fixed',
		                        top: '0',
		                        left: '0',
		                        width: '100%',
		                        height: '100%'
		                    },
		                    class: !this.isUnstyled && styleClass,
		                    'p-bind': this.ptm('mask')
		                });
						newMask = true;
		                document.body.appendChild(this.mask);
		                blockBodyScroll();
		                document.activeElement.blur();
		           } else {
						//already has this mask, so avoid add multiple masks
		           }
	            } else {
	            	if(!this.mask || !this.$refs.container.contains(this.mask)) {
		                this.mask = createElement('div', {
		                    style: {
		                        position: 'absolute',
		                        top: '0',
		                        left: '0',
		                        width: '100%',
		                        height: '100%'
		                    },
		                    class: !this.isUnstyled && styleClass,
		                    'p-bind': this.ptm('mask')
		                });
		                
		                newMask = true;
		                this.$refs.container.appendChild(this.mask);
					}
	            }
	
	            if (this.autoZIndex && newMask) {
	                ZIndex.set('modal', this.mask, this.baseZIndex + this.$primevue.config.zIndex.modal);
	            }
				
	            this.isBlocked = true;
	            this.$emit('block');
			} finally {
				this.isBlockingInProgress = false;
				this.handleBlockUnblockUi();
			}
        },
        unblock() {
        	this.isUnBlockingInProgress = true;
            if (this.mask) {
                !this.isUnstyled && addClass(this.mask, 'p-overlay-mask-leave');

                const handleAnimationEnd = () => {
                    clearTimeout(fallbackTimer);
                    this.mask.removeEventListener('animationend', handleAnimationEnd);
                    this.mask.removeEventListener('webkitAnimationEnd', handleAnimationEnd);
                };

                const fallbackTimer = setTimeout(() => {
                    this.removeMask();
                }, 10);

                if (hasCSSAnimation(this.mask) > 0) {
                    this.mask.addEventListener('animationend', handleAnimationEnd);
                    this.mask.addEventListener('webkitAnimationEnd', handleAnimationEnd);
                }
            } else {
                this.removeMask();
            }
        },
        removeMask() {
        	try {
	            ZIndex.clear(this.mask);
	
	            if (this.fullScreen) {
	                if(document.body.contains(this.mask)) {
		                document.body.removeChild(this.mask);
					}
		            unblockBodyScroll();
	            } else {
	            	if(this.$refs.container?.contains(this.mask)) {
	                	this.$refs.container?.removeChild(this.mask);
	                }
	            }
	
	            this.isBlocked = false;
	            this.$emit('unblock');
			} finally {
				this.isUnBlockingInProgress = false;
				this.handleBlockUnblockUi();
			}
        }
    }
};
</script>
