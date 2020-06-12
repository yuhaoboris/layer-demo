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

  $.alert = function(text, title, onOK) {
    var config
    if (typeof text === 'object') {
      config = text
    } else {
      if (typeof title === 'function') {
        onOK = arguments[1]
        title = undefined
      }

      config = {
        content: text,
        title: title,
        onOK: onOK
      }
    }

    return $.modal({
      content: config.content,
      title: config.title,
      buttons: [{
        text: defaults.buttonOK,
        className: 'primary',
        onClick: config.onOK
      }]
    })
  }

  $.confirm = function(text, title, onOK, onCancel) {
    var config
    if (typeof text === 'object') {
      config = text
    } else {
      if (typeof title === 'function') {
        onCancel = arguments[2]
        onOK = arguments[1]
        title = undefined
      }

      config = {
        content: text,
        title: title,
        onOK: onOK,
        onCancel: onCancel
      }
    }

    return $.modal({
      content: config.content,
      title: config.title,
      buttons: [
      {
        text: defaults.buttonCancel,
        className: 'default',
        onClick: config.onCancel
      },
      {
        text: defaults.buttonOK,
        className: 'primary',
        onClick: config.onOK
      }]
    })
  }

  defaults = $.modal.prototype.defaults = {
    title: "提示",
    content: undefined,
    buttonOK: "确定",
    buttonCancel: "取消",
    buttons: [{
      text: "确定",
      className: "primary"
    }],
    autoClose: true
  }
})($)
