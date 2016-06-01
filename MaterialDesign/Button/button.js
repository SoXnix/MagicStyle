var addRippleEffect = function (e) {
    var rippleEffectTag=['button'];
    var target = e.target;
    if(rippleEffectTag.indexOf(target.tagName.toLowerCase())<0) return false;

    var rect = target.getBoundingClientRect();
    var ripple = target.querySelector('.ripple');

    if (!ripple) {
        ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
        target.appendChild(ripple);
    }
    ripple.classList.remove('show');
    var top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop;
    var left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
    ripple.style.top = top + 'px';
    ripple.style.left = left + 'px';
    ripple.classList.add('show');
    return false;
}
function checkRippleEffectTag(target) {
  var rippleEffectTag=['button'];
  if(rippleEffectTag.indexOf(target.toLowerCase())>=0){
    return true;
  }else{
    return false;
  }
}
document.addEventListener('mousedown', addRippleEffect, false);
