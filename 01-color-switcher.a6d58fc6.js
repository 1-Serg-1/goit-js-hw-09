const t={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]")};let n;function e(){const n=`#${Math.floor(16777215*Math.random()).toString(16)}`;t.btnStart.parentElement.style.background=`${n}`}t.btnStart.addEventListener("click",(function(){t.btnStart.disabled=!0,t.btnStop.disabled=!1,n=setInterval(e,1e3)})),t.btnStop.addEventListener("click",(function(){t.btnStart.disabled=!1,t.btnStop.disabled=!0,clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.a6d58fc6.js.map
