(function ($) {
  var defaults

  var show = function (params) {
    var mask = $('<div class="diyui-mask diyui-actions_mask"></div>').appendTo(document.body)

    var actions = params.actions || []

    var actionsHtml = actions.map(function (act) {
      return `<div class="diyui-actionsheet__cell ${act.className || ''}">${act.text}</div>`
    }).join('')

    var titleHtml = ''
    
    if (params.title) {
      titleHtml = `<div class="diyui-actionsheet__title"><p class="diyui-actionsheet__title-text">${params.title}</p></div>`
    }

    var tpl = `<div class="diyui-actionsheet " id="diyui-actionsheet">${titleHtml}<div class="diyui-actionsheet__menu">${actionsHtml}</div><div class="diyui-actionsheet__action"><div class="diyui-actionsheet__cell diyui-actionsheet_cancel">取消</div></div></div>`

    var dialog = $(tpl).appendTo(document.body)

    dialog.find('.diyui-actionsheet__menu .diyui-actionsheet__cell, .diyui-actionsheet__action .diyui-actionsheet__cell').each(function(i, e) {
      $(e).click(function() {
        $.closeActions()
        params.onClose && params.onClose()
        if(actions[i] && actions[i].onClick) {
          actions[i].onClick()
        }
      })
    })

    mask.show()
    dialog.show()
    mask.addClass('diyui-mask--visible')
    dialog.addClass('diyui-actionsheet_toggle')
  }

  var hide = function() {
    $('.diyui-mask').removeClass('diyui-mask--visible').remove()
    $('.diyui-actionsheet').removeClass('diyui-actionsheet_toggle').remove()
  }

  $.actions = function(params) {
    params = $.extend({}, defaults, params)
    show(params)
  }

  $.closeActions = function() {
    hide()
  }

  $(document).on('click', '.diyui-actions_mask', function() {
    $.closeActions()
  })

  defaults = $.actions.prototype.defaults = {
    title: undefined,
    onClose: undefined
  }
})($)
