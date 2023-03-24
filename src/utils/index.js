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