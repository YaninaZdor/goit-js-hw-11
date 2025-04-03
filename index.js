import{S as d,a as m,i as c}from"./assets/vendor-Cgc9PhsO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();new d(".gallery a",{captionsData:"alt",captionDelay:250});function p(o){const{largeImageURL:s,webformatURL:n,tags:a,likes:e,views:t,comments:i,downloads:u}=o;return`<li class="photo-card"><a class="gallery-link" href="${s}"><img class="gallery-image" src="${n}" alt="${a}"/></a><div class="info"><div class="block">
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
</div></div></li>`}function f(){r.gallery.classList.add("hidden"),r.loader.classList.remove("hidden")}function l(){r.loader.classList.add("hidden"),r.gallery.classList.remove("hidden")}function g(){r.gallery.innerHTML=""}function h(o){return l(),g(),o.map(p).join("")}const r={form:document.querySelector(".form"),input:document.querySelector("#input"),button:document.querySelector("button-search"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader-text")};let y=new d(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){const s="https://pixabay.com/api/",a={key:"49126238-069e1a94ee3ccc35c34a34de0",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"};return m.get(s,{params:a}).then(({data:e})=>{if(e.hits.length===0)c.info({title:"No Results",message:"No images found for your search.",position:"topRight"}),l(),r.gallery.classList.add("hidden");else{r.input.value="";const t=h(e.hits);r.gallery.innerHTML=t,l(),y.refresh()}}).catch(e=>{l(),r.gallery.innerHTML="",c.error({title:"Error",message:"❌ Error fetching images. Please try again!",position:"topRight"})})}r.form.addEventListener("submit",o=>{o.preventDefault();const s=o.target.elements.input.value.trim();if(f(),!s){l(),c.error({title:"Error",message:"Please enter a search query.",position:"topRight"}),r.gallery.classList.add("hidden");return}L(s)});
//# sourceMappingURL=index.js.map
