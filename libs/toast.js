(function ($) {
  var show = function (html, className) {
    className = className || ''

    var $mask = $('<div class="diyui-mask_transparent"></div>').appendTo(document.body)
    var tpl = `<div class="diyui-toast ${className}">${html}</div>`
    var $dialog = $(tpl).appendTo(document.body)

    $dialog.addClass('diyui-toast--visible')
    $dialog.show()
  }

  var hide = function (callback) {
    $('.diyui-mask_transparent').remove()
    var $el = $('.diyui-toast--visible').removeClass('diyui-toast--visible').remove()
    callback && callback()
  }

  $.toast = function (text, style, callback) {
    if(typeof style === 'function') {
      callback = style
    }

    var className, iconClassName = 'diyui-icon-success-no-circle'
    var duration = toastDefaults.duration

    if(style == 'info') {
      className = 'diyui-toast_info';
      iconClassName = 'diyui-icon-info-circle'
    } else if(style == 'forbidden') {
      className = 'diyui-toast--forbidden';
      iconClassName = 'diyui-icon-warn'
    } else if(style == 'text') {
      className = 'diyui-toast--text';
    } else if(typeof style === typeof 1) {
      duration = style
    }

    show(`<i class="${iconClassName} diyui-icon_toast"></i><p class="diyui-toast_content">${text || ''}</p>`, className)

    setTimeout(function () {
      hide(callback)
    }, duration)
  }

  $.showLoading = function (text) {
    var html = '<div class="diyui_loading">'
    html += '<i class="diyui-loading diyui-icon_toast"></i>'
    html += '</div>'
    html += '<p class="diyui-toast_content">' + (text || "加载中") + '</p>'
    show(html, 'diyui_loading_toast')
  }

  $.hideLoading = function() {
    hide()
  }

  var toastDefaults = $.toast.prototype.defaults = {
    duration: 2500
  }
})($)
