<template>
    <div class="p-accordion p-component">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        multiple: Boolean,
        activeIndex: [Number,Array],
        expandIcon: {
            type: String,
            default: 'pi-chevron-right'
        },
        collapseIcon: {
            type: String,
            default: 'pi-chevron-down'
        }
    },
    data() {
        return {
            d_activeIndex: this.activeIndex
        }
    },
    watch: {
        activeIndex(newValue) {
            this.d_activeIndex = newValue;
        }
    },
    methods: {
        onToggle(event, tab, index, isActive) {
            const eventName = isActive ? 'tab-close' : 'tab-open';

            if (this.multiple) {
                let x = this.d_activeIndex;

                if (x && x.some(i => i === index)) {
                    this.d_activeIndex = x.filter(i => i !== index);
                }

                else x ? this.d_activeIndex.push(index) : this.d_activeIndex = [index]
            }

            else {
                index === this.d_activeIndex ? this.d_activeIndex = null : this.d_activeIndex = index;
            }

            this.$emit('update:activeIndex', this.d_activeIndex);

            this.$emit(eventName, {
                originalEvent: event,
                index: index
            });
        }
    }
}
</script>

<style>
.p-accordion-header-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    user-select: none;
    position: relative;
    text-decoration: none;
}

.p-accordion-header-link:focus {
    z-index: 1;
}

.p-accordion-header-text {
    line-height: 1;
}
</style>