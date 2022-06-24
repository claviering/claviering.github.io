import"./modulepreload-polyfill.b7f2da20.js";/* empty css             */import{i as c}from"./request.874b412c.js";const i={"#CSS":"css-tag","#css":"css-tag","#SOLVED":"solved-tag","#D3":"d3-tag","#canvas":"canvas-tag","#react":"react-tag","#protobuf":"protobuf-tag","#svg":"svg-tag"};async function r(){let a=await c.get("/api/article/list");console.log(a);let e=document.querySelector(".article-list"),l="";for(let s=0;s<a.data.length;s++){const t=a.data[s];l+=`<div class="article-list-item">
    <h4 class="t-t-cap m-0">
      <a href="${t.link}" target="_blank">${t.title}</a>
      <span class="tag ${i[t.tag]}">${t.tag}</span>
    </h4>
    <p class="m-0">
    ${t.content}
    </p>
    <small class="t-t-cap">${t.updateTime}</small>
  </div>`}e&&(e.innerHTML=l)}r();
