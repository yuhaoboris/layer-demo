$(function () {
  // Alert Demo
  $('#dialog-alert-1').click(function () {
    $.alert('代码是写给人看的，附带能在机器上运行', function () {
      console.log('知道了')
    })
  })

  $('#dialog-alert-2').click(function () {
    $.alert({
      title: '提示',
      content: '代码是写给人看的，附带能在机器上运行',
      buttonOKClass: 'fail',
      onOK: function () {
        console.log('好的')
      }
    })
  })

  $('#dialog-confirm-1').click(function () {
    $.confirm('代码是写给人看的，附带能在机器上运行，你同意吗？', function () {
      console.log('同意')
    }, function () {
      console.log('不同意')
    })
  })

  $('#dialog-confirm-2').click(function () {
    $.confirm({
      title: '提示',
      content: '代码是写给人看的，附带能在机器上运行，你同意吗？',
      buttonOK: '同意',
      buttonCancel: '不同意',
      onOK: function () {
        console.log('同意')
      },
      onCancel: function () {
        console.log('不同意')
      }
    })
  })

  $('#dialog-login').click(function () {
    $.confirm({
      title: '重新登录',
      content: $('#tpl-login').html(),
      buttonOK: '登录',
      onOK: function () {
        console.log('登录')
      },
      onCancel: function () {
        console.log('取消')
      }
    })
  })

  // Toast Demo
  $('#toast-text').click(function () {
    $.toast('套版完成')
  })

  $('#toast-success').click(function () {
    $.toast('操作成功', 'success')
  })

  $('#toast-fail').click(function () {
    $.toast('非法操作', 'info')
  })

  $('#toast-loading').click(function () {
    $.showLoading()
    setTimeout(function () {
      $.hideLoading()
    }, 2000)
  })

  // ActionSheet Demo
  $('#action-sheet').click(function () {
    $.actions({
      actions: [
        {
          text: '发送给朋友',
          onClick: function () {
            console.log('发送给朋友')
          }
        },
        {
          text: '收藏',
          onClick: function () {
            console.log('已收藏')
          }
        },
        {
          text: '保存图片',
          onClick: function () {
            console.log('已保存')
          }
        },
        {
          text: '编辑',
          onClick: function () {
            console.log('编辑')
          }
        },
        {
          text: '定位到聊天位置',
          onClick: function () {
            console.log('定位到聊天位置')
          }
        }
      ],
      onClose: function () {
        console.log('Action Sheet Closed')
      }
    })
  })
})
