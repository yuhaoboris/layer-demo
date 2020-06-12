(function ($) {
  var defaults

  $.modal = function(params, onOpen) {
    params = $.extend({}, defaults, params)

    var buttons = params.buttons

    var buttonsHtml = buttons.map(function (btn, index) {
      return `<a href="javascript:;" class="diyui-dialog__btn ${btn.className || ''}">${btn.text}</a>`
    }).join('')

    var tpl = `<div class="diyui-dialog"><div class="diyui-dialog__hd"><strong class="diyui-dialog__title">${params.title}</strong></div><div class="diyui-dialog__bd">${params.content || ''}</div><div class="diyui-dialog__ft">${buttonsHtml}</div></div>`
    
    var dialog = $.openModal(tpl, onOpen)

    dialog.find('.diyui-dialog__btn').each(function(index, elem) {
      $(elem).click(function() {
        if(params.autoClose) $.closeModal()

        if(buttons[index].onClick) {
          buttons[index].onClick.call(dialog)
        }
      })
    })

    return dialog;
  }

  $.openModal = function(tpl, onOpen) {
    var mask = $('<div class="diyui-mask"></div>').appendTo(document.body)
    mask.show()

    var dialog = $(tpl).appendTo(document.body)
 
    if (onOpen) {
      dialog.transitionEnd(function () {
        onOpen.call(dialog)
      });
    }   

    dialog.show()
    mask.addClass('diyui-mask--visible')
    dialog.addClass('diyui-dialog--visible')


    return dialog;
  }

  $.closeModal = function() {
    $('.diyui-mask--visible').remove()
    $('.diyui-dialog--visible').remove()
  }

  $.alert = function(text, callback) {
    var config

    if (Object.prototype.toString.call(text) === '[object Object]') {
      config = text
    } else if(typeof text === 'string') {
      config = {
        content: text,
        onOK: callback
      }
    }

    return $.modal({
      title: config.title || defaults.title,
      content: config.content,
      buttons: [{
        text: config.buttonOK || defaults.buttonOK,
        className: config.buttonOKClass || defaults.buttonOKClass,
        onClick: config.onOK
      }]
    })
  }

  $.confirm = function(text, okCallback, cancelCallback) {
    var config

    if (Object.prototype.toString.call(text) === '[object Object]') {
      config = text
    } else if (typeof text === 'string') {
      config = {
        content: text,
        onOK: okCallback,
        onCancel: cancelCallback
      }
    }

    return $.modal({
      title: config.title || defaults.title,
      content: config.content,
      buttons: [
      {
        text: config.buttonCancel || defaults.buttonCancel,
        className: config.buttonCancelClass || defaults.buttonCancelClass,
        onClick: config.onCancel
      },
      {
        text: config.buttonOK || defaults.buttonOK,
        className: config.buttonOKClass || defaults.buttonOKClass,
        onClick: config.onOK
      }]
    })
  }

  defaults = $.modal.prototype.defaults = {
    title: "提示",
    content: undefined,
    buttonOK: "确定",
    buttonCancel: "取消",
    buttonOKClass: 'primary',
    buttonCancelClass: 'default',
    autoClose: true
  }
})($)
