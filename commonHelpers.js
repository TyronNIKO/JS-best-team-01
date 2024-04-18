import{S as n,N as l,P as d,A as u}from"./assets/vendor-544adac3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();new n(".swiper",{modules:[l,d,u],slidesPerView:1,spaceBetween:0,centeredSlides:!0,loop:!0,autoplay:{delay:3e3,disableOnInteraction:!0},pagination:{el:".swiper-pagination",clickable:!0}});let o;const p=()=>{let s=document.querySelector(".catalog-list");for(let t=0;t<o.length;t++){let i=`
    <li class="catalog-list-item">
        <div class="product-card product-id-${o[t].id}">
            <h3 class="product-card-title">${o[t].name}</h3>
            <p class="product-card-description">${o[t].description}</p>
            <img class="product-card-img" src="${o[t].img}" alt="${o[t].name}">
            <p class="product-card-price">${o[t].curency}${o[t].price}</p>
            <p class="product-card-compare">Compare</p>
            <button class="product-card-btn" type="button">Order</button>
        </div>
    </li>
    `;s.insertAdjacentHTML("afterbegin",i)}};p();
//# sourceMappingURL=commonHelpers.js.map
