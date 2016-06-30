var getEventTarget = function (e) {
  var eventPathTagName = e.path.map(function(item) {
    return item.tagName;
  })
  return e.path[eventPathTagName.indexOf('BUTTON')];
}

var addRippleEffect = function (e) {
    //返回事件冒泡流中的button元素
    var target = getEventTarget(e)
    if(!target){
      return false;
    }

    //获取当前元素的二维数据
    var rect = target.getBoundingClientRect();
    //创建ripple

    var ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
    target.appendChild(ripple);

    //当动画结束时销毁ripple
    ripple.addEventListener("animationend", function() {
      ripple.parentNode.removeChild(ripple);
    }, false);
    ripple.classList.remove('show');

    //ripple在父元素中的位置计算
    if(target.className.split(" ").indexOf('button-outline')>0){
      var top = (rect.height/2) - (ripple.offsetHeight/2)
      var left = 0;
    }else{
      var top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop;
      var left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
    }

    ripple.style.top = top + 'px';
    ripple.style.left = left + 'px';
    ripple.classList.add('show');

    return false;
}

document.addEventListener('mousedown', addRippleEffect, false);
