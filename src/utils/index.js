import { onMounted } from 'vue'

const observer = new IntersectionObserver(entries => {
  // console.log(3)
  entries.forEach(entry => {
    // 判断当前元素是否可见
    if (entry.isIntersecting) {
      const dom = entry.target;
      dom.style.marginTop = (parseInt(dom.style.marginTop) - 20) + "px";
      // 解除观察，有几张图片就触发几次
      observer.unobserve(dom)
    }
  })
})

// 函数节流
function throttle(func, delay) {
  let timer = null;
  return function () {
    const context = this;
    const args = arguments;
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(context, args);
        timer = null;
      }, delay);
    }
  };
}

// 图片懒加载
export function lazyLoad(dom) {
  onMounted(()=>{
    observer.observe(dom);
  })
}