(()=>{function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}document.addEventListener("DOMContentLoaded",(function(){function t(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;n||(n=document);var r=n.querySelectorAll(e);Array.from(r).forEach(t)}function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return t||(t=document),t.querySelector(e)}var r=n(".x-config"),i=n(".x-content",r),o=r.parentNode.querySelector("form");o.parentNode.removeChild(o),i.appendChild(o);var a=n(".x-tabs",r),c=sessionStorage.getItem("x-active")||".x-notice";if(t(c,(function(e){e.classList.add("active")}),i),t('[data-class="'.concat(c.replace(".",""),'"]'),(function(e){e.classList.add("active")}),a),Array.from(a.querySelectorAll(":scope > li")).forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),e.stopPropagation(),window.scrollTo(0,0),t(".x-tabs li",(function(e){e.classList.remove("active")})),e.target.classList.add("active");var n="."+e.target.dataset.class;sessionStorage.setItem("x-active",n),t(".x-item",(function(e){e.classList.remove("active")}),i),t(n,(function(e){e.classList.add("active")}),i)}))})),"string"==typeof window.XEditorUpldateURL&&window.XEditorUpldateURL.startsWith("http")&&fetch(window.XEditorUpldateURL).then((function(e){return e.text()})).then((function(e){var t,i=document.createElement("div");i.innerHTML=e,e=null===(t=i.querySelector(".post-content,.entry-content"))||void 0===t?void 0:t.innerHTML;var o=i.querySelector("h2, h3"),a=o.innerText.substring(0,5),c=n(".x-notice",r),l=n(".title",r);n(".loading",l).remove(),n(".latest.version",l).innerHTML=o.innerText,n(".message",c).innerHTML=e,n(".latest.version",l).classList.add("active"),function(e,t){for(var n=e.split("."),r=t.split("."),i=Math.min(n.length,r.length),o=0;o<i;o++){var a=parseInt(n[o]),c=parseInt(r[o]);if(a>c)return 1;if(a<c)return-1}if(n.length>r.length){for(var l=i;l<n.length;l++)if(0!==parseInt(n[l]))return 1;return 0}if(n.length<r.length){for(var u=i;u<r.length;u++)if(0!==parseInt(r[u]))return-1;return 0}return 0}(a,l.dataset.version)>0?n(".latest.found",l).classList.add("active"):n(".latest",l).classList.add("active")})).catch((function(e){return console.log("Request Failed",e)})),location.hash){var l=document.querySelector(location.hash);if(l&&l.classList.contains("x-item")){document.querySelectorAll(".x-item.active").forEach((function(e){return e.classList.remove("active")}));var u=JSON.parse(JSON.stringify(e(l.classList)));u=u.filter((function(e){return e.startsWith("x-")&&"x-item"!==e})),document.querySelector('[data-class="'.concat(u[0],'"]')).click()}}if(window.XEditorModules&&document.querySelector('input[name="XModules"]')){var s=function(t){d.value=JSON.stringify(e(f.parentNode.querySelectorAll('input[type="checkbox"]')).filter((function(e){return e.checked})).map((function(e){return e.value})))},d=document.querySelector('input[name="XModules"]'),f=d.nextElementSibling;d.classList.add("hidden"),window.XEditorModules.forEach((function(e){var t=document.createElement("span"),n=document.createElement("input");n.type="checkbox",n.value=e.file,n.id="module-"+e.file.replaceAll(".","-");var r=document.createElement("label");r.innerText=e.title+"【"+e.description+"】",r.setAttribute("for","module-"+e.file.replaceAll(".","-")),n.addEventListener("change",s),t.appendChild(n),t.appendChild(r),t.classList.add("multiline"),f.before(t)})),JSON.parse(d.value||"[]").forEach((function(e){var t=d.parentNode.querySelector('input[value="'.concat(e,'"]'));t&&(t.checked=!0)}));var v=document.createElement("button");v.innerText="全选",v.type="button",v.addEventListener("click",(function(){Array.from(d.parentNode.querySelectorAll('input[type="checkbox"]')).forEach((function(e){e.checked=!1,e.click()}))}));var p=document.createElement("button");p.innerText="全不选",p.type="button",p.addEventListener("click",(function(){Array.from(d.parentNode.querySelectorAll('input[type="checkbox"]')).forEach((function(e){e.checked=!0,e.click()}))})),d.previousElementSibling.appendChild(v),d.previousElementSibling.appendChild(p)}}))})();
//# sourceMappingURL=config.js.map