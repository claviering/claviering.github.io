import"./modulepreload-polyfill.b7f2da20.js";/* empty css             */const c={"#CSS":"css-tag","#SOLVED":"solved-tag","#D3":"d3-tag","#canvas":"canvas-tag","#react":"react-tag","#protobuf":"protobuf-tag"},o=[{title:"protobuf demo",link:"https://github.com/claviering/protobuf-demo",tag:"#protobuf",content:"Go + JS",update:"update: 2022-06-15"},{title:"crop image",link:"https://github.com/claviering/crop-image",tag:"#canvas",content:"crop image any ratio or constant ratio",update:"update: 2022-06-06"},{title:"Learning D3",link:"src/pages/d3/index.html",tag:"#D3",content:"bring data to life using HTML, SVG, and CSS.",update:"update: 2022-06-03"},{title:"[SOLVED] GitHub Copilot could not connect to server",link:"src/pages/solved/github-copilot-could-not-connect-to-server/index.html",tag:"#SOLVED",content:"Request timeout for api.github.com.",update:"update: 2022-06-03"},{title:"calc reactive image size",link:"src/pages/css/calc-reactive-image-size/index.html",tag:"#CSS",content:"easy to calc the length of vw in rendering size of reactive image.",update:"update: 2022-05-29"}];function n(){let a=document.querySelector(".article-list"),i="";for(let e=0;e<o.length;e++){const t=o[e];i+=`<div class="article-list-item">
    <h4 class="t-t-cap m-0">
      <a href="${t.link}" target="_blank">${t.title}</a>
      <span class="tag ${c[t.tag]}">${t.tag}</span>
    </h4>
    <p class="m-0">
    ${t.content}
    </p>
    <small class="t-t-cap">${t.update}</small>
  </div>`}a&&(a.innerHTML=i)}n();
