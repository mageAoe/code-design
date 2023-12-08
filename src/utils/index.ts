// 重写console里面的方法
type ConsoleTypes = 'log' | 'info' | 'warn' | 'error' | 'debug'

export function rewriteConsole(type: ConsoleTypes) {
  // eslint-disable-next-line no-console
  const origin = console[type] // 保存原始的 console[type] 方法的引用, 以便后面调用原始方法时使用
  // 重写 console[type] 方法：
  // eslint-disable-next-line no-console
  console[type] = (...args: any[]) => {
    // 在调用原始方法之前，通过 window.parent.postMessage 发送消息到父窗口
    window.parent.postMessage({ from: 'codeRunner', type, data: args }, '*')
    // 调用原始的 console[type] 方法
    origin.apply(console, args)
  }
}
