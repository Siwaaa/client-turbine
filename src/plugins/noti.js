const noti = {
  show(text, type = 'success', opts = {}) {
		const params = Object.assign({}, this.options, opts, {
			type,
			text
		})
		return noty.show()
	},
	success(text, opts = {}) {
		return this.show(text, 'success', opts)
	},

	error(text, opts = {}) {
		return this.show(text, 'error', opts)
	},

	warning(text, opts = {}) {
		return this.show(text, 'warning', opts)
	},

	info(text, opts = {}) {
		return this.show(text, 'info', opts)
	},

  install: function(Vue, options){
    // 4. добавление метода экземпляра
    Vue.prototype.$noti = function (methodOptions) {
    // некоторая логика ...
    }
  }
}

export default noti