// Some embedded mobile viewers expose a desktop layout viewport. Keep the
// document at the actual phone width in that case, without disabling pinch zoom.
(function(){
  function syncPhoneViewport(){
    var root=document.documentElement;
    var deviceWidth=Number(window.screen&&window.screen.width)||0;
    var viewportWidth=Number(window.innerWidth)||root.clientWidth||0;
    var touch=Number(navigator.maxTouchPoints)>0;
    var mobile=/iPhone|iPod|Android.*Mobile/i.test(navigator.userAgent||'');
    var usePhoneWidth=(touch||mobile)&&deviceWidth>0&&deviceWidth<=600&&viewportWidth>deviceWidth+40;
    root.toggleAttribute('data-phone-viewport',usePhoneWidth);
    if(usePhoneWidth)root.style.setProperty('--phone-viewport-width',deviceWidth+'px');
    else root.style.removeProperty('--phone-viewport-width');
  }
  syncPhoneViewport();
  window.addEventListener('resize',syncPhoneViewport,{passive:true});
  window.addEventListener('orientationchange',syncPhoneViewport,{passive:true});
})();
