// --no-ignore
// 在 iframe 页面中劫持 console 等 API，在保留原有的控制台输出的功能的前提下，
// 把相关的信息通过 postMessage 的方式把它们输出给父页面，父页面监听到 message 以后把信息整理后输出到页面上，实现 Console 面板

function rewriteConsole(type) {
  const origin = console[type] // 保存原始的 console[type] 方法的引用, 以便后面调用原始方法时使用
  // 重写 console[type] 方法：
  console[type] = (...args) => {
    // 在调用原始方法之前，通过 window.parent.postMessage 发送消息到父窗口
    window.parent.postMessage({ from: 'codeRunner', type, data: args }, '*')
    // 调用原始的 console[type] 方法
    origin.apply(console, args)
  }
}

rewriteConsole('log')
rewriteConsole('info')
rewriteConsole('debug')
rewriteConsole('warn')
rewriteConsole('error')
rewriteConsole('table')
rewriteConsole('time')
rewriteConsole('timeEnd')

// 给 iframe 设置 sandbox 属性来限制其部分权限，但是这里有一个套娃的隐患，
// 就是如果在 iframe 里面执行 window.parent.document 相关 API 的话，可以让 iframe 去改写父页面的内容，
// 甚至改写 sandbox 属性，这肯定是不安全的，因此我们需要在 iframe 中把这相关 API 给屏蔽掉

Object.defineProperty(window, 'disableParent', {
  get() {
    throw new Error('无法调用 window.parent 属性！')
  },
  set() {}
})

// 在调用父页面的 iframeDoc.write(code) 之前，我们需要先把用户输入的自定义代码 code 进行一次 replace，
// 把当中的所有 parent.document 改成 window.disableParent。当用户调用 parent.document 相关 API 时，
// 实际在 iframe 运行的是 window.disableParent，届时将会直接报错无法调用 window.parent 属性！，有效避免了套娃的安全隐患
