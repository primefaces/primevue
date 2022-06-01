this.primevue = this.primevue || {};
this.primevue.toasteventbus = (function (utils) {
	'use strict';

	var ToastEventBus = utils.EventBus();

	return ToastEventBus;

})(primevue.utils);
