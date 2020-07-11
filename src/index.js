import x from './x'
// 引入图片
import png from '../assets/1.png'
console.log(x)

const app = document.querySelector('#app')
app.innerHTML = `<img src=${png}>`

const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = e => {
    // 使用 import() 实现懒加载模块
    const promise = import('./lazy')
    promise.then(module => {
        const fn = module.default
        fn()
    }).catch( error => {
        console.log('模块加载错误！')
        console.log(error);
    })
}

app.appendChild(button)
