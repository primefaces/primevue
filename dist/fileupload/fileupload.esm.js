import Button from 'primevue/button';
import ProgressBar from 'primevue/progressbar';
import Message from 'primevue/message';
import { DomHandler } from 'primevue/utils';
import Ripple from 'primevue/ripple';
import { resolveComponent, resolveDirective, openBlock, createElementBlock, createElementVNode, withDirectives, normalizeClass, normalizeStyle, withKeys, toDisplayString, createBlock, createCommentVNode, Fragment, renderList, withCtx, createTextVNode, createVNode, renderSlot } from 'vue';

var script = {
    name: 'FileUpload',
    emits: ['select', 'uploader', 'before-upload', 'progress', 'upload', 'error', 'before-send', 'clear', 'remove'],
    props: {
        name: {
            type: String,
            default: null
        },
        url: {
            type: String,
            default: null
        },
        mode: {
            type: String,
            default: 'advanced'
        },
		multiple: {
			type: Boolean,
			default: false
		},
        accept: {
            type: String,
            default: null
        },
        disabled: {
            type: Boolean,
            default: false
        },
        auto: {
            type: Boolean,
            default: false
        },
        maxFileSize: {
            type: Number,
            default: null
        },
        invalidFileSizeMessage: {
            type: String,
            default: '{0}: Invalid file size, file size should be smaller than {1}.'
        },
        invalidFileTypeMessage: {
            type: String,
            default: '{0}: Invalid file type, allowed file types: {1}.'
        },
        fileLimit: {
            type: Number,
            default: null
        },
        invalidFileLimitMessage: {
            type: String,
            default: 'Maximum number of files exceeded, limit is {0} at most.'
        },
        withCredentials: {
            type: Boolean,
            default: false
        },
        previewWidth: {
            type: Number,
            default: 50
        },
        chooseLabel: {
            type: String,
            default: null
        },
        uploadLabel: {
            type: String,
            default: null
        },
        cancelLabel: {
            type: String,
            default: null
        },
        customUpload: {
            type: Boolean,
            default: false
        },
        showUploadButton: {
            type: Boolean,
            default: true
        },
        showCancelButton: {
            type: Boolean,
            default: true
        },
        chooseIcon: {
            type: String,
            default: 'pi pi-plus'
        },
        uploadIcon: {
            type: String,
            default: 'pi pi-upload'
        },
        cancelIcon: {
            type: String,
            default: 'pi pi-times'
        },
        style: null,
        class: null
    },
    duplicateIEEvent: false,
    data() {
        return {
            uploadedFileCount: 0,
            files: [],
            messages: [],
            focused: false,
            progress: null
        }
    },
    methods: {
        onFileSelect(event) {
            if (event.type !== 'drop' && this.isIE11() && this.duplicateIEEvent) {
                this.duplicateIEEvent = false;
                return;
            }

            this.messages = [];
            this.files = this.files || [];
            let files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
            for (let file of files) {
                if (!this.isFileSelected(file)) {
                    if (this.validate(file)) {
                        if (this.isImage(file)) {
                            file.objectURL = window.URL.createObjectURL(file);
                        }
                        this.files.push(file);
                    }
                }
            }

            this.$emit('select', {originalEvent: event, files: this.files});

            if (this.fileLimit) {
                this.checkFileLimit();
            }

            if (this.auto && this.hasFiles && !this.isFileLimitExceeded()) {
                this.upload();
            }

            if (event.type !== 'drop' && this.isIE11()) {
                this.clearIEInput();
            }
            else {
                this.clearInputElement();
            }
        },
        choose() {
            this.$refs.fileInput.click();
        },
        upload() {
            if (this.customUpload) {
                if (this.fileLimit) {
                    this.uploadedFileCount += this.files.length;
                }

                this.$emit('uploader', {files: this.files});
                this.clear();
            }
            else {
                let xhr = new XMLHttpRequest();
                let formData = new FormData();

                this.$emit('before-upload', {
                    'xhr': xhr,
                    'formData': formData
                });

                for (let file of this.files) {
                    formData.append(this.name, file, file.name);
                }

                xhr.upload.addEventListener('progress', (event) => {
                    if (event.lengthComputable) {
                        this.progress = Math.round((event.loaded * 100) / event.total);
                    }

                    this.$emit('progress', {
                        originalEvent: event,
                        progress: this.progress
                    });
                });

                xhr.onreadystatechange = () => {
                    if (xhr.readyState === 4) {
                        this.progress = 0;

                        if (xhr.status >= 200 && xhr.status < 300) {
                            if (this.fileLimit) {
                                this.uploadedFileCount += this.files.length;
                            }

                            this.$emit('upload', {
                                xhr: xhr,
                                files: this.files
                            });
                        }
                        else {
                            this.$emit('error', {
                                xhr: xhr,
                                files: this.files
                            });
                        }

                        this.clear();
                    }
                };

                xhr.open('POST', this.url, true);

                this.$emit('before-send', {
                    'xhr': xhr,
                    'formData': formData
                });

                xhr.withCredentials = this.withCredentials;

                xhr.send(formData);
            }
        },
        clear() {
            this.files = [];
            this.messages = null;
            this.$emit('clear');

            if (this.isAdvanced) {
                this.clearInputElement();
            }
        },
        onFocus() {
            this.focused = true;
        },
        onBlur() {
            this.focused = false;
        },
        isFileSelected(file) {
            if (this.files && this.files.length) {
                for (let sFile of this.files) {
                    if ((sFile.name + sFile.type + sFile.size) === (file.name + file.type + file.size))
                        return true;
                }
            }

            return false;
        },
        isIE11() {
            return !!window['MSInputMethodContext'] && !!document['documentMode'];
        },
        validate(file) {
            if (this.accept && !this.isFileTypeValid(file)) {
                this.messages.push(this.invalidFileTypeMessage.replace('{0}', file.name).replace('{1}', this.accept));
                return false;
            }

            if (this.maxFileSize && file.size > this.maxFileSize) {
                this.messages.push(this.invalidFileSizeMessage.replace('{0}', file.name).replace('{1}', this.formatSize(this.maxFileSize)));
                return false;
            }

            return true;
        },
        isFileTypeValid(file) {
            let acceptableTypes = this.accept.split(',').map(type => type.trim());
            for(let type of acceptableTypes) {
                let acceptable = this.isWildcard(type) ? this.getTypeClass(file.type) === this.getTypeClass(type)
                    : file.type == type || this.getFileExtension(file).toLowerCase() === type.toLowerCase();

                if (acceptable) {
                    return true;
                }
            }

            return false;
        },
        getTypeClass(fileType) {
            return fileType.substring(0, fileType.indexOf('/'));
        },
        isWildcard(fileType){
            return fileType.indexOf('*') !== -1;
        },
        getFileExtension(file) {
            return '.' + file.name.split('.').pop();
        },
        isImage(file) {
            return /^image\//.test(file.type);
        },
        onDragEnter(event) {
            if (!this.disabled) {
                event.stopPropagation();
                event.preventDefault();
            }
        },
        onDragOver(event) {
            if (!this.disabled) {
                DomHandler.addClass(this.$refs.content, 'p-fileupload-highlight');
                event.stopPropagation();
                event.preventDefault();
            }
        },
        onDragLeave() {
            if (!this.disabled) {
                DomHandler.removeClass(this.$refs.content, 'p-fileupload-highlight');
            }
        },
        onDrop(event) {
            if (!this.disabled) {
                DomHandler.removeClass(this.$refs.content, 'p-fileupload-highlight');
                event.stopPropagation();
                event.preventDefault();

                const files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
                const allowDrop = this.multiple || (files && files.length === 1);

                if (allowDrop) {
                    this.onFileSelect(event);
                }
            }
        },
        onBasicUploaderClick() {
            if (this.hasFiles)
                this.upload();
            else
                this.$refs.fileInput.click();
        },
        remove(index) {
            this.clearInputElement();
            let removedFile = this.files.splice(index, 1)[0];
            this.files = [...this.files];
            this.$emit('remove', {
                file: removedFile,
                files: this.files
            });
        },
        clearInputElement() {
            this.$refs.fileInput.value = '';
        },
        clearIEInput() {
            if (this.$refs.fileInput) {
                this.duplicateIEEvent = true; //IE11 fix to prevent onFileChange trigger again
                this.$refs.fileInput.value = '';
            }
        },
        formatSize(bytes) {
            if (bytes === 0) {
                return '0 B';
            }
            let k = 1000,
            dm = 3,
            sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            i = Math.floor(Math.log(bytes) / Math.log(k));

            return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
        },
        isFileLimitExceeded() {
            if (this.fileLimit && this.fileLimit <= this.files.length + this.uploadedFileCount && this.focused) {
                this.focused = false;
            }

            return this.fileLimit && this.fileLimit < this.files.length + this.uploadedFileCount;
        },
        checkFileLimit() {
            if (this.isFileLimitExceeded()) {
                this.messages.push(this.invalidFileLimitMessage.replace('{0}', this.fileLimit.toString()));
            }
        },
        onMessageClose() {
            this.messages = null;
        }
    },
    computed: {
        isAdvanced() {
            return this.mode === 'advanced';
        },
        isBasic() {
            return this.mode === 'basic';
        },
        advancedChooseButtonClass() {
            return ['p-button p-component p-fileupload-choose', this.class, {
                    'p-disabled': this.disabled,
                    'p-focus': this.focused
                }
            ];
        },
        basicChooseButtonClass() {
            return ['p-button p-component p-fileupload-choose', this.class, {
                'p-fileupload-choose-selected': this.hasFiles,
                'p-disabled': this.disabled,
                'p-focus': this.focused
            }];
        },
        advancedChooseIconClass() {
            return ['p-button-icon p-button-icon-left pi-fw', this.chooseIcon];
        },
        basicChooseButtonIconClass() {
            return ['p-button-icon p-button-icon-left',
                !this.hasFiles || this.auto ? this.uploadIcon : this.chooseIcon
            ];
        },
        basicChooseButtonLabel() {
            return this.auto ? this.chooseButtonLabel : (this.hasFiles ? this.files.map(f => f.name).join(', ') : this.chooseButtonLabel);
        },
        hasFiles() {
            return this.files && this.files.length > 0;
        },
        chooseDisabled() {
            return this.disabled || (this.fileLimit && this.fileLimit <= this.files.length + this.uploadedFileCount);
        },
        uploadDisabled() {
            return this.disabled || !this.hasFiles || (this.fileLimit && this.fileLimit < this.files.length);
        },
        cancelDisabled() {
            return this.disabled || !this.hasFiles;
        },
        chooseButtonLabel() {
            return this.chooseLabel || this.$primevue.config.locale.choose;
        },
        uploadButtonLabel() {
            return this.uploadLabel || this.$primevue.config.locale.upload;
        },
        cancelButtonLabel() {
            return this.cancelLabel || this.$primevue.config.locale.cancel;
        }
    },
    components: {
        'FileUploadButton': Button,
        'FileUploadProgressBar': ProgressBar,
        'FileUploadMessage': Message
    },
    directives: {
        'ripple': Ripple
    }
};

const _hoisted_1 = {
  key: 0,
  class: "p-fileupload p-fileupload-advanced p-component"
};
const _hoisted_2 = { class: "p-fileupload-buttonbar" };
const _hoisted_3 = ["multiple", "accept", "disabled"];
const _hoisted_4 = { class: "p-button-label" };
const _hoisted_5 = {
  key: 1,
  class: "p-fileupload-files"
};
const _hoisted_6 = ["alt", "src", "width"];
const _hoisted_7 = { class: "p-fileupload-filename" };
const _hoisted_8 = {
  key: 2,
  class: "p-fileupload-empty"
};
const _hoisted_9 = {
  key: 1,
  class: "p-fileupload p-fileupload-basic p-component"
};
const _hoisted_10 = { class: "p-button-label" };
const _hoisted_11 = ["accept", "disabled", "multiple"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FileUploadButton = resolveComponent("FileUploadButton");
  const _component_FileUploadProgressBar = resolveComponent("FileUploadProgressBar");
  const _component_FileUploadMessage = resolveComponent("FileUploadMessage");
  const _directive_ripple = resolveDirective("ripple");

  return ($options.isAdvanced)
    ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          withDirectives((openBlock(), createElementBlock("span", {
            class: normalizeClass($options.advancedChooseButtonClass),
            style: normalizeStyle($props.style),
            onClick: _cache[1] || (_cache[1] = (...args) => ($options.choose && $options.choose(...args))),
            onKeydown: _cache[2] || (_cache[2] = withKeys((...args) => ($options.choose && $options.choose(...args)), ["enter"])),
            onFocus: _cache[3] || (_cache[3] = (...args) => ($options.onFocus && $options.onFocus(...args))),
            onBlur: _cache[4] || (_cache[4] = (...args) => ($options.onBlur && $options.onBlur(...args))),
            tabindex: "0"
          }, [
            createElementVNode("input", {
              ref: "fileInput",
              type: "file",
              onChange: _cache[0] || (_cache[0] = (...args) => ($options.onFileSelect && $options.onFileSelect(...args))),
              multiple: $props.multiple,
              accept: $props.accept,
              disabled: $options.chooseDisabled
            }, null, 40, _hoisted_3),
            createElementVNode("span", {
              class: normalizeClass($options.advancedChooseIconClass)
            }, null, 2),
            createElementVNode("span", _hoisted_4, toDisplayString($options.chooseButtonLabel), 1)
          ], 38)), [
            [_directive_ripple]
          ]),
          ($props.showUploadButton)
            ? (openBlock(), createBlock(_component_FileUploadButton, {
                key: 0,
                label: $options.uploadButtonLabel,
                icon: $props.uploadIcon,
                onClick: $options.upload,
                disabled: $options.uploadDisabled
              }, null, 8, ["label", "icon", "onClick", "disabled"]))
            : createCommentVNode("", true),
          ($props.showCancelButton)
            ? (openBlock(), createBlock(_component_FileUploadButton, {
                key: 1,
                label: $options.cancelButtonLabel,
                icon: $props.cancelIcon,
                onClick: $options.clear,
                disabled: $options.cancelDisabled
              }, null, 8, ["label", "icon", "onClick", "disabled"]))
            : createCommentVNode("", true)
        ]),
        createElementVNode("div", {
          ref: "content",
          class: "p-fileupload-content",
          onDragenter: _cache[5] || (_cache[5] = (...args) => ($options.onDragEnter && $options.onDragEnter(...args))),
          onDragover: _cache[6] || (_cache[6] = (...args) => ($options.onDragOver && $options.onDragOver(...args))),
          onDragleave: _cache[7] || (_cache[7] = (...args) => ($options.onDragLeave && $options.onDragLeave(...args))),
          onDrop: _cache[8] || (_cache[8] = (...args) => ($options.onDrop && $options.onDrop(...args)))
        }, [
          ($options.hasFiles)
            ? (openBlock(), createBlock(_component_FileUploadProgressBar, {
                key: 0,
                value: $data.progress
              }, null, 8, ["value"]))
            : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList($data.messages, (msg) => {
            return (openBlock(), createBlock(_component_FileUploadMessage, {
              severity: "error",
              key: msg,
              onClose: $options.onMessageClose
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(msg), 1)
              ]),
              _: 2
            }, 1032, ["onClose"]))
          }), 128)),
          ($options.hasFiles)
            ? (openBlock(), createElementBlock("div", _hoisted_5, [
                (openBlock(true), createElementBlock(Fragment, null, renderList($data.files, (file, index) => {
                  return (openBlock(), createElementBlock("div", {
                    class: "p-fileupload-row",
                    key: file.name + file.type + file.size
                  }, [
                    createElementVNode("div", null, [
                      ($options.isImage(file))
                        ? (openBlock(), createElementBlock("img", {
                            key: 0,
                            role: "presentation",
                            alt: file.name,
                            src: file.objectURL,
                            width: $props.previewWidth
                          }, null, 8, _hoisted_6))
                        : createCommentVNode("", true)
                    ]),
                    createElementVNode("div", _hoisted_7, toDisplayString(file.name), 1),
                    createElementVNode("div", null, toDisplayString($options.formatSize(file.size)), 1),
                    createElementVNode("div", null, [
                      createVNode(_component_FileUploadButton, {
                        type: "button",
                        icon: "pi pi-times",
                        onClick: $event => ($options.remove(index))
                      }, null, 8, ["onClick"])
                    ])
                  ]))
                }), 128))
              ]))
            : createCommentVNode("", true),
          (_ctx.$slots.empty && !$options.hasFiles)
            ? (openBlock(), createElementBlock("div", _hoisted_8, [
                renderSlot(_ctx.$slots, "empty")
              ]))
            : createCommentVNode("", true)
        ], 544)
      ]))
    : ($options.isBasic)
      ? (openBlock(), createElementBlock("div", _hoisted_9, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($data.messages, (msg) => {
            return (openBlock(), createBlock(_component_FileUploadMessage, {
              severity: "error",
              key: msg,
              onClose: $options.onMessageClose
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(msg), 1)
              ]),
              _: 2
            }, 1032, ["onClose"]))
          }), 128)),
          withDirectives((openBlock(), createElementBlock("span", {
            class: normalizeClass($options.basicChooseButtonClass),
            style: normalizeStyle($props.style),
            onMouseup: _cache[12] || (_cache[12] = (...args) => ($options.onBasicUploaderClick && $options.onBasicUploaderClick(...args))),
            onKeydown: _cache[13] || (_cache[13] = withKeys((...args) => ($options.choose && $options.choose(...args)), ["enter"])),
            onFocus: _cache[14] || (_cache[14] = (...args) => ($options.onFocus && $options.onFocus(...args))),
            onBlur: _cache[15] || (_cache[15] = (...args) => ($options.onBlur && $options.onBlur(...args))),
            tabindex: "0"
          }, [
            createElementVNode("span", {
              class: normalizeClass($options.basicChooseButtonIconClass)
            }, null, 2),
            createElementVNode("span", _hoisted_10, toDisplayString($options.basicChooseButtonLabel), 1),
            (!$options.hasFiles)
              ? (openBlock(), createElementBlock("input", {
                  key: 0,
                  ref: "fileInput",
                  type: "file",
                  accept: $props.accept,
                  disabled: $props.disabled,
                  multiple: $props.multiple,
                  onChange: _cache[9] || (_cache[9] = (...args) => ($options.onFileSelect && $options.onFileSelect(...args))),
                  onFocus: _cache[10] || (_cache[10] = (...args) => ($options.onFocus && $options.onFocus(...args))),
                  onBlur: _cache[11] || (_cache[11] = (...args) => ($options.onBlur && $options.onBlur(...args)))
                }, null, 40, _hoisted_11))
              : createCommentVNode("", true)
          ], 38)), [
            [_directive_ripple]
          ])
        ]))
      : createCommentVNode("", true)
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\n.p-fileupload-content {\n    position: relative;\n}\n.p-fileupload-row {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.p-fileupload-row > div {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    width: 25%;\n}\n.p-fileupload-row > div:last-child {\n    text-align: right;\n}\n.p-fileupload-content .p-progressbar {\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.p-button.p-fileupload-choose {\n    position: relative;\n    overflow: hidden;\n}\n.p-button.p-fileupload-choose input[type=file] {\n    display: none;\n}\n.p-fileupload-choose.p-fileupload-choose-selected input[type=file] {\n    display: none;\n}\n.p-fileupload-filename {\n    word-break: break-all;\n}\n.p-fluid .p-fileupload .p-button {\n    width: auto;\n}\n";
styleInject(css_248z);

script.render = render;

export { script as default };
