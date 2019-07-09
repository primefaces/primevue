<template>
    <div class="content-section implementation">
        <div class="p-grid">
            <div class="p-col-12 p-md-6">
                <div :class="containerClass" :style= "style">
                    <div class="p-orderlist-controls">
                        <button @click="up()" type="button" class="p-button p-component p-button-icon-only">
                            <span class="pi pi-angle-up p-c p-button-icon-left"></span>
                            <span class="p-button-text p-c">p-btn</span>
                        </button>
                        <button @click="doubleUp()" type="button" class="p-button p-component p-button-icon-only">
                            <span class="pi pi-angle-double-up p-c p-button-icon-left"></span>
                            <span class="p-button-text p-c">p-btn</span>
                        </button>
                        <button @click="down()" type="button" class="p-button p-component p-button-icon-only">
                            <span class="pi pi-angle-down p-c p-button-icon-left"></span>
                            <span class="p-button-text p-c">p-btn</span>
                        </button>
                        <button @click="doubleDown() " type="button" class="p-button p-component p-button-icon-only">
                            <span class="pi pi-angle-double-down p-c p-button-icon-left"></span>
                            <span class="p-button-text p-c">p-btn</span>
                        </button>
                    </div>
                    <div class="p-orderlist-list-container">
                        <div class="p-orderlist-caption">{{header}}</div>
                        <ul id="container" class="p-orderlist-list" :style="[listStyleMethod(), listStyle]">
                            <div v-for="(val, index) in dataArray" :key="index">

                                <li class="p-orderlist-droppoint"></li>
                                <li @click= "selectRow(index)" :class= "highlightClass(index)" draggable="true" tabindex="0">
                                    <div class="p-clearfix">
                                        <slot :row= "val">
                                        </slot>
                                    </div>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script> 
import DomHandler from '../utils/DomHandler';

export default {

    data() {
        return {
            selectedRow: null,
            dataArray: this.value,
        }        
    },
    props: {
        id: {
            type: String,
            default: null
        },
        value: {
            type: Array,
            default: null
        },
        header: {
            type: String,
            default: null
        },
        className: {
            type: String,
            default: null
        },
        listStyle: {
            type: String,
            default: null
        },
        responsive: {
            type: Boolean,
            default: false
        },
        dragdrop: {
            type: Boolean,
            default: false
        },
        dragdropscope: {
            type: Boolean,
            default: false
        },
        itemTemplate: {
            type: Function,
            default: null
        },
        tabIndex: {
            type: String,
            default: null
        }
    },
    computed: {
        containerClass() {
                return ['p-orderlist p-component', this.className, {
                        'p-orderlist-responsive': this.responsive === true,
                        'p-dragdrop': this.dragdrop === true,
                        'p-dragdropscope': this.dragdropscope,
                        'p-itemTemplate': this.itemTemplate,
                        'p-tabIndex': this.tabIndex
                    }
                ]
        },
        sortedArray() {}
    },
    methods: {
        selectRow(index){
            this.selectedRow = index;
        },
        highlightClass(index) {
            return {
                'p-orderlist-item': true,
                'p-highlight': (this.selectedRow == index)
            }
        },
        down() {
            if(this.selectedRow !== null) {

                if(this.selectedRow !== this.dataArray.length-1) {

                    let temp = this.dataArray[this.selectedRow];
                    this.dataArray[this.selectedRow] = this.dataArray[this.selectedRow+1];
                    this.dataArray[this.selectedRow+1] = temp;
                    this.selectedRow++;
                }
            }
        },
        doubleDown() {
            if(this.selectedRow !== null) {
                this.dataArray.push(null);

                    let temp = this.dataArray[this.selectedRow];
                    this.dataArray[this.selectedRow] = this.dataArray[this.dataArray.length-1];
                    this.dataArray[this.dataArray.length-1] = temp;
                    this.dataArray.splice(this.selectedRow, 1);
                    this.selectedRow = this.dataArray.length-1;
                    console.log(this.dataArray);
                    var objDiv = document.getElementById("container");
                    objDiv.scrollTop = objDiv.scrollHeight;

            }
        },
        up() {
             if(this.selectedRow !== null) {
                if(this.selectedRow !== 0) {

                    let temp = this.dataArray[this.selectedRow];
                    this.dataArray[this.selectedRow] = this.dataArray[this.selectedRow-1];
                    this.dataArray[this.selectedRow-1] = temp;
                    this.selectedRow--;
                }
            }
        },
        doubleUp() {
             if(this.selectedRow !== null) {
                this.dataArray.unshift(null);

                    let temp = this.dataArray[this.selectedRow+1];
                    this.dataArray[this.selectedRow+1] = this.dataArray[0];
                    this.dataArray[0] = temp;
                    this.dataArray.splice(this.selectedRow+1, 1);
                    this.selectedRow = 0;
                    console.log(this.dataArray);
                    var objDiv = document.getElementById("container");
                    objDiv.scrollTop= 0;
            }
        },
        listStyleMethod() {
                return {
                    'height': '20em'
                }
        }
    }  
}

</script>

<style scoped>

.p-orderlist {
    display: table;
}

.p-orderlist .p-orderlist-controls {
    height: 12.5em;
    padding: 0 .25em;
    vertical-align: middle;
    display: table-cell;
}

.p-orderlist .p-orderlist-controls .p-button {
    display: block;
    margin-bottom: 0.25em;
}

.p-orderlist .p-orderlist-list-container {
    display: table-cell;
    vertical-align: top;
}

.p-orderlist .p-orderlist-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow:auto;
    height: 12.5em;
    width: 12.5em;
}

.p-orderlist .p-orderlist-caption {
    text-align: center;
    padding: .5em .75em;
    border-bottom: 0 none;
}

.p-orderlist .p-orderlist-list .p-orderlist-item {
    margin: 1px;
    padding: .125em;
    cursor: pointer;
    border: 0 none;
    font-weight: inherit;
}

.p-orderlist .p-orderlist-filter-container {
    position: relative;
    width: 100%;
    padding: .5em .6em;
    border-bottom: 0 none;
}

.p-orderlist .p-orderlist-filter-container .p-inputtext {
    text-indent: 1.1em;
    width: 100%;
}

.p-orderlist .p-orderlist-filter-container .p-orderlist-filter-icon {
    position: absolute;
    top: 50%;
    left: 1em;
    margin-top: -.6em;
}

.p-orderlist.p-disabled .p-orderlist-item,
.p-orderlist.p-disabled .p-button {
    cursor: default;
}

.p-orderlist.p-disabled .p-orderlist-list {
    overflow:hidden;
}

/* Responsive */
.p-orderlist.p-orderlist-responsive {
    width: 100%;
}

.p-orderlist.p-orderlist-responsive .p-orderlist-controls {
    width: 16.66666%;
    padding-right: .5em;
}

.p-orderlist.p-orderlist-responsive .p-orderlist-list-container {
    width: 83.33333%;
}

.p-orderlist.p-orderlist-responsive .p-orderlist-list,
.p-orderlist.p-orderlist-responsive .p-orderlist-caption {
    width: 100%;
}

.p-orderlist.p-orderlist-responsive .p-orderlist-controls > .p-button {
    width: 100%;
}

.p-orderlist .p-orderlist-droppoint {
    height: 6px;
    list-style-type: none;
}

@media (max-width: 40em) {
    .p-orderlist.p-orderlist-responsive .p-orderlist-controls {
        text-align: center;
        width: 100%;
        display: block;
        height: auto;
    }

    .p-orderlist.p-orderlist-responsive .p-orderlist-controls .p-button {
        display: inline-block;
        width: 20%;
        margin-right: .25em;
    }

    .p-orderlist.p-orderlist-responsive .p-orderlist-list-container {
        width: 100%;
        display: block;
    }

    .bigger-area > span {
  min-height: 90vh;
  display: block;
}
.drag-item {
  padding: 15px 10px;
  background-color: whitesmoke;
  min-width: 30vw;
  max-width: 90vw;
  margin: 0 auto 10px;
  cursor: -moz-grab;
  cursor: -webkit-grab;
  cursor: grab;
  transition: transform 0.25s cubic-bezier(0.02, 1.01, 0.94, 1.01);
  will-change: transform;
}
.list-complete-enter,
.list-complete-leave-active {
  opacity: 0;
}
}

</style>