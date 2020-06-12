# 业务弹层说明

目前业务弹层整理为三种：对话框、轻提示、动作面板 Popup。

Popup 弹层需要额外时间整理。

对话框
  - $.alert()
  - $.confirm()

轻提示
  - $.toast()

动作面板
  - $.action()

## 弹层库和样式**

每个弹层都独立为一个文件：

`libs/modal.js`, `libs/toast.js`, `libs/action.js`, `libs/ui.css`

使用说明：

1. 引入相应的弹层组件库
2. 引入 `ui.css` 样式文件

## 对话框

### $.alert(text, okCallback)

**配置参数**

- title: string 类型, 对话框的标题，默认为'提示'
- content: string 类型，对话框的内容
- buttonOK: string 类型，OK 按钮的文字, 默认为'确定'
- buttonOKClass: string 类型，OK 按钮的样式类名，默认为 'primary'
- onOK: function 类型，点击 OK 按钮后的回调操作

**使用示例**

```js
// 支持两种传参方式

// 方式一
$.alert('提示内容', function () {
  console.log('on click ok button')
})

// 方式二
$.alert({
  title: '提示',
  content: '提示内容',
  buttonOK: '我知道了',
  buttonOKClass: 'btn-info',
  onOK: function () {
    console.log('on click ok button')
  }
})
```

### $.confirm(text, okCallback, cancelCallback)

**配置参数**

- title: string 类型, 对话框的标题，默认为'提示'
- content: string 类型，对话框的内容
- buttonOK: string 类型，OK 按钮的文字, 默认为'确定'
- buttonOKClass: string 类型，OK 按钮的样式类名，默认为 'primary'
- onOK: function 类型，点击 OK 按钮后的回调操作

```js
// 支持两种传参方式

// 方式一
$.confirm('提示内容', function () {
  console.log('on click ok button')
}, function () {
  console.log('on click cancel button')
})

// 方式二
$.confirm({
  title: '重新登录',
  content: '登录超时，请重新登录',
  buttonOK: '登录',
  buttonCancel: '取消',
  buttonOKClass: 'btn-success',
  buttonCancelClass: 'btn-info',
  onOK: function () {
    console.log('on click ok button')
  },
  onCancel: function () {
    console.log('on click cancel button')
  }
})
```

## 轻提示

### $.toast(text, style, callback)

**参数说明**

- text: string 类型，提示内容
- style: string 类型，弹层类型，支持：'text', 'success', 'info'，默认为'text'。不传值同样默认为'text'

**使用示例**

```js
$.toast('图片已上传')

$.toast('操作成功', 'success')

$.toast('非法操作', 'info')
```

### $.showLoading(text) && $.hideLoading()

**参数说明**

- text: string 类型，提示内容，默认为'加载中'

**使用示例**

```js
$.showLoading()
setTimeout(function () {
  $.hideLoading()
})

$.showLoading('正在上传')
setTimeout(function () {
  $.hideLoading()
})
```

## 动作面板

### $.action(params)

**参数说明**

- params.title: string 类型，面板标题，默认为''
- params.buttons: array 类型，必填，按钮对象数组 button
- 按钮对象 button
  - button.text: string 类型，按钮文字
  - button.className: string 类型，按钮样式类名
  - button.onClick: function 类型，点击按钮后的回调操作
- params.onClose: function 类型，面板关闭后的回调操作

**使用示例**

```js
$.actions({
  buttons: [
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
    console.log('action sheet closed)
  }
})
```
