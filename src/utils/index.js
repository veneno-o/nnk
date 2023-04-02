import { onMounted } from 'vue'

const observer = new IntersectionObserver(entries => {
  // console.log(3)
  entries.forEach(entry => {
    // 判断当前元素是否可见
    if (entry.isIntersecting) {
      console.log("触发懒加载...")
      const dom = entry.target;
      // dom.style.marginTop = (parseInt(dom.style.marginTop) - 20) + "px";
      dom.style.transform = 'translateY(0)';
      dom.style.opacity = 1;
      // 解除观察，有几张图片就触发几次
      observer.unobserve(dom)
    }
  })
})

export function lazyLoad(...domRefList) {
  onMounted(()=>{
    for (const domRef of domRefList) {
      console.log("dom2", domRef.value)
      observer.observe(domRef.value);
    }
  })
}
