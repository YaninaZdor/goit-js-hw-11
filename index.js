import{S as d,a as m,i as c}from"./assets/vendor-Cgc9PhsO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();new d(".gallery a",{captionsData:"alt",captionDelay:250});function p(s){const{largeImageURL:r,webformatURL:n,tags:a,likes:e,views:t,comments:i,downloads:u}=s;return`<li class="photo-card"><a class="gallery-link" href="${r}"><img class="gallery-image" src="${n}" alt="${a}"/></a><div class="info"><div class="block">
  <h2 class="tittle">Likes</h2>
  <p class="amount">${e}</p>
</div>
<div class="block">
  <h2 class="tittle">Views</h2>
  <p class="amount">${t}</p>
</div>
<div class="block">
  <h2 class="tittle">Comments</h2>
  <p class="amount">${i}</p>
</div>
<div class="block">
  <h2 class="tittle">Downloads</h2>
  <p class="amount">${u}</p>
</div></div></li>`}function f(){o.gallery.classList.add("hidden"),o.loader.classList.remove("hidden")}function l(){o.loader.classList.add("hidden"),o.gallery.classList.remove("hidden")}function h(s){return l(),s.map(p).join("")}const o={form:document.querySelector(".form"),input:document.querySelector("#input"),button:document.querySelector("button-search"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader-text")};let g=new d(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){const r="https://pixabay.com/api/",a={key:"49126238-069e1a94ee3ccc35c34a34de0",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"};return m.get(r,{params:a}).then(({data:e})=>{if(e.hits.length===0)c.info({title:"No Results",message:"No images found for your search.",position:"topRight"}),l(),o.gallery.classList.add("hidden");else{o.input.value="";const t=h(e.hits);o.gallery.innerHTML=t,l(),g.refresh()}}).catch(e=>{l(),c.error({title:"Error",message:"❌ Error fetching images. Please try again!",position:"topRight"})})}o.form.addEventListener("submit",s=>{s.preventDefault();const r=s.target.elements.input.value.trim();if(f(),!r){l(),c.error({title:"Error",message:"Please enter a search query.",position:"topRight"}),o.gallery.classList.add("hidden");return}y(r)});
//# sourceMappingURL=index.js.map
