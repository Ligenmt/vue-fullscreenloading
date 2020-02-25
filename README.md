# vue-fullscreenloading

基于Vue的全屏加载动画效果。[线上效果](https://ligenmt.github.io/vue-fullscreenloading/)

[English document](https://github.com/ligenmt/vue-fullscreenloading/blob/master/README_EN.md)

## 效果预览

![Image text](https://ligenmt.gitee.io/resources/images/auto.gif)


## 赞赏

请作者喝瓶可乐吧！(微信号：ligenmt)

![微信扫一扫](https://ligenmt.gitee.io/resources/images/weixin.png)

## 特别鸣谢

- [二麻运维](http://www.ermazi.com/)

## 前言

这是基于vue的全屏加载动画效果，可以显示加载进度，有两种使用方式，一是能获取加载进度时手动控制加载进度效果，二是当不知道加载进度（如调用后端耗时接口）时由控件自动显示平滑的加载进度效果。

## 使用说明

### 手动控制

```js
    let loadingui = this.$loadingui({
        type: 'default',
        callback: () => {
            // 加载结束回调
            console.log("finish")
        },
    })
    let percent = 0
    let obj = setInterval(() => {
        percent += 2
        //控制加载进度显示效果
        loadingui.loadPercent = percent
        if (percent >= m) {
            // 关闭
            loadingui.close()
            clearInterval(obj)
        }
    }, 50)
```

### 自动控制

```js
    let loadingui = this.$loadingui({
        type: 'auto',
        callback: () => {
            // 加载结束回调
            console.log("finish")
        },
    })
    let percent = 0
    let obj = setInterval(() => {
        percent += 1
        if (percent >= 50) {
            // 关闭时不会立刻结束动画效果，而是继续显示加载效果直至100%，显得更友好真实:)
            loadingui.close()
            clearInterval(obj)
        }
    }, 50)
```

## License

[MIT](https://github.com/ligenmt/vue-fullscreenloading/blob/master/LICENSE)
