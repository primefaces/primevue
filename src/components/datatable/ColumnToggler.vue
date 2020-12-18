<template>
    <div ref="toggler" :style="buttonPosition" class="p-datatable-toggler">
        <i
            v-if="!visible"
            class="pi pi-plus p-toggler-icon"
            @click="show($event)"
        ></i>
        <i
            v-if="visible"
            class="pi pi-minus p-toggler-icon"
            @click="hide()"
        ></i>
        <div
            ref="togglePanel"
            tabindex="0"
            v-if="visible"
            class="p-toggler-panel"
            :style="panelPosition"
        >
            <div v-for="(column, index) in columns" :key="index">
                <div class="p-field-checkbox">
                    <Checkbox
                        :id="'chkBx' + column.props.field + index"
                        :value="column.props.header"
                        v-model="checkedColumns"
                    />
                    <label label :for="'chkBx' + column.props.field + index">
                        {{ column.props.header }}
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Checkbox from "../checkbox/Checkbox.vue";

export default {
    props: {
        position: {
            type: [Boolean, Object],
            default: null
        },
        columns: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            visible: false,
            checkedColumns: []
        };
    },
    computed: {
        buttonPosition() {
            const pos = { top: "-1rem", left: "-1rem" };

            if (typeof this.position === "object")
                Object.assign(pos, this.position);
            if ("right" in pos) delete pos.left;
            if ("bottom" in pos) delete pos.top;
            return pos;
        },
        panelPosition() {
            const pos = { ...this.buttonPosition };
            const rect = this.$refs.toggler.getBoundingClientRect();

            if ("top" in pos) pos.top = "0px";
            if ("bottom" in pos) pos.bottom = "0px";
            if ("left" in pos) pos.left = rect.width + 4 + "px";
            if ("right" in pos) pos.right = rect.width + 4 + "px";
            return pos;
        }
    },
    methods: {
        show() {
            this.visible = true;
            document.addEventListener("mouseup", this.hideOnMouseClickOutSide);
        },
        hide() {
            this.visible = false;
            document.removeEventListener(
                "mouseup",
                this.hideOnMouseClickOutSide
            );
        },
        hideOnMouseClickOutSide(e) {
            let el = e.target;
            while (el !== this.$refs.togglePanel && el != null) {
                el = el.parentElement;
            }
            if (!el) this.hide();
        }
    },
    watch: {
        columns() {
            console.log(this.columns);
        }
    },
    components: {
        Checkbox: Checkbox
    }
};
</script>

<style lang="scss">
.p-datatable-toggler {
    position: absolute;
    z-index: 996;
    user-select: none; /* standard syntax */
    -webkit-user-select: none; /* webkit (safari, chrome) browsers */
    -moz-user-select: none; /* mozilla browsers */
    -khtml-user-select: none; /* webkit (konqueror) browsers */
    -ms-user-select: none; /* IE10+ */
}

.p-toggler-icon {
    padding: 0.2rem;
    font-size: 1.5rem;
    border: 1px solid var(--surface-a);
    border-radius: 35%;
    background-color: var(--primary-color);
    color: var(--surface-a);
    cursor: pointer;
}

.p-toggler-panel {
    position: absolute;
    padding: 10px 10px 0px 10px;
    background-color: var(--surface-a);
    border: 1px solid var(--primary-color);
    z-index: 995;
    outline: none;
}
</style>
