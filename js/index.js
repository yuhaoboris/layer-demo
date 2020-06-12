$(function () {
  $('#dialog-alert').click(function () {
    $.alert({
      title: '提示',
      content: '代码是写给人看的，附带能在机器上运行',
      onOK: function () {
        console.log('alert ok')
      }
    })
  })

  $('#dialog-confirm').click(function () {
    $.confirm({
      title: '请问',
      content: '代码是写给人看的，附带能在机器上运行，你同意吗？',
      onOK: function () {
        console.log('同意')
      },
      onCancel: function () {
        console.log('不同意')
      }
    })
  })

  $('#toast-success').click(function () {
    $.toast('操作成功')
  })

  $('#toast-fail').click(function () {
    $.toast('操作失败', 'info')
  })

  $('#toast-text').click(function () {
    $.toast('套版完成', 'text')
  })

  $('#toast-loading').click(function () {
    $.showLoading()
    setTimeout(function () {
      $.hideLoading()
    }, 2000)
  })

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
