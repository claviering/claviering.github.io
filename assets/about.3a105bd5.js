import"./modulepreload-polyfill.b7f2da20.js";/* empty css             */import{i as n}from"./request.874b412c.js";async function e(){let t=await n.get("/api/github/contributions"),i=document.querySelector(".github-contributions");i&&(i.innerHTML=t&&t.data)}e();
