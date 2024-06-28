import accordion from './accordion';
import autocomplete from './autocomplete';
import avatar from './avatar';
import avatargroup from './avatargroup';
import badge from './badge';
import badgedirective from './badgedirective';
import blockui from './blockui';
import breadcrumb from './breadcrumb';
import button from './button';
import calendar from './calendar';
import card from './card';
import carousel from './carousel';
import cascadeselect from './cascadeselect';
import checkbox from './checkbox';
import chip from './chip';
import chips from './chips';
import colorpicker from './colorpicker';
import confirmpopup from './confirmpopup';
import contextmenu from './contextmenu';
import datatable from './datatable';
import dataview from './dataview';
import dataviewlayoutoptions from './dataviewlayoutoptions';
import deferred from './deferred';
import dialog from './dialog';
import divider from './divider';
import dock from './dock';
import dropdown from './dropdown';
import fieldset from './fieldset';
import fileupload from './fileupload';
import floatlabel from './floatlabel';
import galleria from './galleria';
import global from './global';
import iconfield from './iconfield';
import image from './image';
import inlinemessage from './inlinemessage';
import inplace from './inplace';
import inputgroup from './inputgroup';
import inputgroupaddon from './inputgroupaddon';
import inputmask from './inputmask';
import inputnumber from './inputnumber';
import inputotp from './inputotp';
import inputswitch from './inputswitch';
import inputtext from './inputtext';
import knob from './knob';
import listbox from './listbox';
import megamenu from './megamenu';
import menu from './menu';
import menubar from './menubar';
import message from './message';
import metergroup from './metergroup';
import multiselect from './multiselect';
import orderlist from './orderlist';
import organizationchart from './organizationchart';
import overlaypanel from './overlaypanel';
import paginator from './paginator';
import panel from './panel';
import panelmenu from './panelmenu';
import password from './password';
import picklist from './picklist';
import progressbar from './progressbar';
import progressspinner from './progressspinner';
import radiobutton from './radiobutton';
import rating from './rating';
import ripple from './ripple';
import scrollpanel from './scrollpanel';
import scrolltop from './scrolltop';
import selectbutton from './selectbutton';
import sidebar from './sidebar';
import skeleton from './skeleton';
import slider from './slider';
import speeddial from './speeddial';
import splitbutton from './splitbutton';
import splitter from './splitter';
import splitterpanel from './splitterpanel';
import stepper from './stepper';
import steps from './steps';
import tabmenu from './tabmenu';
import tabview from './tabview';
import tag from './tag';
import terminal from './terminal';
import textarea from './textarea';
import tieredmenu from './tieredmenu';
import timeline from './timeline';
import toast from './toast';
import togglebutton from './togglebutton';
import toolbar from './toolbar';
import tooltip from './tooltip';
import tree from './tree';
import treeselect from './treeselect';
import treetable from './treetable';
import tristatecheckbox from './tristatecheckbox';

export default {
    global,
    directives: {
        badge: badgedirective,
        ripple,
        tooltip
    },

    //forms
    autocomplete,
    dropdown,
    inputnumber,
    inputtext,
    calendar,
    checkbox,
    radiobutton,
    inputswitch,
    selectbutton,
    slider,
    chips,
    rating,
    multiselect,
    togglebutton,
    cascadeselect,
    listbox,
    colorpicker,
    inputgroup,
    inputgroupaddon,
    inputmask,
    knob,
    treeselect,
    tristatecheckbox,
    textarea,
    password,
    iconfield,
    floatlabel,
    inputotp,

    //buttons
    button,
    splitbutton,
    speeddial,

    //data
    paginator,
    datatable,
    tree,
    dataview,
    dataviewlayoutoptions,
    organizationchart,
    orderlist,
    picklist,
    treetable,
    timeline,

    //panels
    accordion,
    panel,
    fieldset,
    card,
    tabview,
    divider,
    toolbar,
    scrollpanel,
    splitter,
    splitterpanel,
    stepper,
    deferred,

    //file
    fileupload,

    //menu
    contextmenu,
    menu,
    menubar,
    steps,
    tieredmenu,
    breadcrumb,
    panelmenu,
    megamenu,
    dock,
    tabmenu,

    //overlays
    dialog,
    overlaypanel,
    sidebar,
    confirmpopup,

    //messages
    message,
    inlinemessage,
    toast,

    //media
    carousel,
    galleria,
    image,

    //misc
    badge,
    avatar,
    avatargroup,
    tag,
    chip,
    progressbar,
    skeleton,
    scrolltop,
    terminal,
    blockui,
    metergroup,
    inplace,
    progressspinner
};
