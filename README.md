<h1>性能优化</h1>

- 打包大小减少41%
- 初次渲染快55%, 更新渲染快133%
- 内存减少54%
- 使用Proxy代替defineProperty实现数据响应式
- 重写虚拟DOM的实现和Tree-Shaking

<h1>使用Vite创建项目</h1>
  vite 是一个由原生 ESM 驱动的 Web 开发构建工具。在开发环境下基于浏览器原生 ES imports 开发，

  它做到了***本地快速开发启动***, 在生产环境下基于 Rollup 打包。

  快速的冷启动，不需要等待打包操作；
  即时的热模块更新，替换性能和模块数量的解耦让更新飞起；
  真正的按需编译，不再等待整个应用编译完成，这是一个巨大的改变。
</div>

<h1>watch 和 watchEffect</h1>
watch(user, () => {
  
}, {
  immediate: true,  // 是否初始化立即执行一次, 默认是false
  deep: true, // 是否是深度监视, 默认是false
})

***会默认执行一次，比watch聪明一些***
watchEffect(() => {

})
