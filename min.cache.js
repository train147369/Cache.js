+function(e,t){var n=e.localStorage,o=t.querySelector("head"),r={init:function(){var e,t=r.getFiles("css"),n=r.getFiles("js");t.forEach(function(t){e=r.getStoredContent(t),e?r.insertCSS(e):r.getRemoteFileContent(t,function(e){r.onGetRemoteCSS(t,e)})}),n.forEach(function(t){e=r.getStoredContent(t),e?r.execJS(e):r.getRemoteFileContent(t,function(e){r.onGetRemoteJS(t,e)})})},getFiles:function(e){var n,o=[],r='link[rel="cache/stylesheet"]',i="data-href";"js"===e&&(r='script[type="cache/javascript"]',i="data-src"),n=t.querySelectorAll(r);for(var c=n.length-1;c>=0;c--)o.push(n[c].getAttribute(i));return o.reverse()},getStoredContent:function(e){return n.getItem(e)},getRemoteFileContent:function(t,n){var o=new XMLHttpRequest||e.XMLHttpRequest,r=function(){var e=o.responseText;n(e)};o.onload=r,o.open("get",t,!0),o.send(null)},onGetRemoteCSS:function(e,t){r.insertCSS(t),n.setItem(e,t)},onGetRemoteJS:function(e,t){r.execJS(t),n.setItem(e,t)},insertCSS:function(e){var n=t.createElement("style");n.innerText=e,o.appendChild(n)},execJS:function(e){new Function(e)()}};r.init()}(this,document);