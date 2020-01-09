import vue from 'vue'
import LoadingComponent from './loading.vue'

const LoadingConstructor = vue.extend(LoadingComponent)

function showLoading({type, callback}) {
    const loadingDom = new LoadingConstructor({
        el: document.createElement('div'),
        data () {
            return {
                showLoading: true, // 是否显示
                type: type, // 类型 auto 自动 default 手动
                callback: callback,
            }
        }
    })
    // 添加节点
    document.body.appendChild(loadingDom.$el)
    // 过渡时间
    return loadingDom
}
// 全局注册
function registryLoading () {
    vue.prototype.$loadingui = showLoading
}

export default registryLoading
