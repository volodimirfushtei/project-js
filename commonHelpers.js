(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const c=document.querySelector(".cover-section");function u(i){const t=i.getBoundingClientRect();return t.top<window.innerHeight&&t.left<window.innerWidth&&t.bottom>0&&t.right>0}function l(){u(c)?(c.classList.contains("scrolling")||console.log('Section is in viewport".'),c.classList.add("scrolling")):(c.classList.contains("scrolling")&&console.log('Section is out of viewport".'),c.classList.remove("scrolling"))}function a(i,t){let n;return function(...r){clearTimeout(n),n=setTimeout(()=>i.apply(this,r),t)}}const f=a(l,100);window.addEventListener("scroll",f);l();function p(){const i=document.querySelector(".cover-section .cover-container");if(!document.querySelector(".cover-list.desktop")){const t=document.createElement("ul");t.classList.add("cover-list","desktop");const n=document.createElement("li");n.innerHTML=`
        <picture class="cover-picture">
          <source srcset="./img/Rectangle-1-1x.jpg 1x, ./img/Rectangle-1-2x.jpg 2x" media="(min-width: 1440px)" />

          <img src="./img/Rectangle-1-1x.jpg" alt="Banking" width="282" class="cover-img" />
        </picture>
      `,t.appendChild(n);const r=i.querySelectorAll(".cover-list");i.insertBefore(t,r[0])}}function d(){window.innerWidth>=1440?p():removeDesktopItems()}window.addEventListener("load",d);window.addEventListener("resize",d);
//# sourceMappingURL=commonHelpers.js.map
