const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Paragraph1_Block-DxwmrAGb.js","assets/index-agcFoake.js","assets/index-KvGjaAGg.css","assets/Paragraph1_Block-B_2HmtLA.css","assets/Link1_Block-DRyNrpCI.js","assets/link-ChXv6Ilt.css","assets/Image1_Block-BfjBU1kW.js","assets/Image1_Block-CyKpLPxp.css","assets/Card1_Block-Cs9HRmxK.js","assets/Card1_Block-CVrniL3e.css","assets/TitleHr_Block-D7nwVEz-.js","assets/title-Bhm7P8QU.css","assets/TitleH2_block-DW_omjOG.js","assets/LinkYoutube_Block-D2RZtADQ.js","assets/TitleH1_block-DeIb8rh_.js","assets/Text_Block-DKKoqLSi.js","assets/Text_Block-lrR_2e5Z.css","assets/Html_Block-C_IXiV5F.js","assets/Html_Block-DDFN37GT.css"])))=>i.map(i=>d[i]);
import{r,_ as s,f as L,j as t,A as O,X as A,H as I,g as T,h as R,P as w,k as S,Y as b,l as D,m as V,I as J,v as Y}from"./index-agcFoake.js";import{N as E}from"./notebook-text-Gp33nRTN.js";import{S as F}from"./save-sXNYZzoG.js";const G=r.lazy(()=>s(()=>import("./Paragraph1_Block-DxwmrAGb.js"),__vite__mapDeps([0,1,2,3]))),q=r.lazy(()=>s(()=>import("./Link1_Block-DRyNrpCI.js"),__vite__mapDeps([4,1,2,5]))),M=r.lazy(()=>s(()=>import("./Image1_Block-BfjBU1kW.js"),__vite__mapDeps([6,1,2,7]))),W=r.lazy(()=>s(()=>import("./Card1_Block-Cs9HRmxK.js"),__vite__mapDeps([8,1,2,9]))),X=r.lazy(()=>s(()=>import("./TitleHr_Block-D7nwVEz-.js"),__vite__mapDeps([10,1,2,11]))),$=r.lazy(()=>s(()=>import("./TitleH2_block-DW_omjOG.js"),__vite__mapDeps([12,1,2,11]))),K=r.lazy(()=>s(()=>import("./LinkYoutube_Block-D2RZtADQ.js"),__vite__mapDeps([13,1,2,5]))),Q=r.lazy(()=>s(()=>import("./TitleH1_block-DeIb8rh_.js"),__vite__mapDeps([14,1,2,11]))),Z=r.lazy(()=>s(()=>import("./Text_Block-DKKoqLSi.js"),__vite__mapDeps([15,1,2,16]))),U=r.lazy(()=>s(()=>import("./Html_Block-C_IXiV5F.js"),__vite__mapDeps([17,1,2,18]))),n="",N=L,u={title:{name:"Título H1",component:Q,defaultContent:"Nuevo Título H1",additionalContent1:n,additionalContent2:n},titleH2:{name:"Título H2",component:$,defaultContent:"Nuevo Título H2",additionalContent1:n,additionalContent2:n},titleHr:{name:"Título HR",component:X,defaultContent:"Nuevo Título Hr",additionalContent1:n,additionalContent2:n},paragraph:{name:"Parrafo",component:G,defaultContent:"Nuevo Párrafo",additionalContent1:n,additionalContent2:n},text:{name:"Texto Corto",component:Z,defaultContent:"Nuevo Texto",additionalContent1:n,additionalContent2:n},img:{name:"Imagen",component:M,defaultContent:N,additionalContent1:n,additionalContent2:n},card:{name:"Tarjeta",component:W,defaultContent:N,additionalContent1:"Título",additionalContent2:"Párrafo"},link:{name:"Enlaces",component:q,defaultContent:"https://www.google.com/",additionalContent1:"Enlace externo",additionalContent2:n},youtube:{name:"Youtube",component:K,defaultContent:n,additionalContent1:n,additionalContent2:n},html:{name:"Html",component:U,defaultContent:"<h1>Hola mundo</h1>",additionalContent1:"710",additionalContent2:"480"}},nt=({bloques:l,onUpdateBlocks:c,index:x})=>{const k=o=>{const e={id:Y(),typeBlock:o,content1:u[o].defaultContent,content2:u[o].additionalContent1,content3:u[o].additionalContent2};c([...l,e])},m=(o,e,a)=>{const i=l.map(d=>d.id===o?{...d,[a]:e}:d);c(i)},z=(o,e)=>{if(e<0||e>=l.length)return;const a=[...l],[i]=a.splice(o,1);a.splice(e,0,i),c(a)},y=o=>{const e=l.filter(a=>a.id!==o);c(e)},P=()=>{const o=`data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify(l))}`,e=document.createElement("a");e.href=o,e.download="blocks.json",e.click()},[B,h]=r.useState(!1),[j,p]=r.useState(null),H=o=>{var i;const e=(i=o.target.files)==null?void 0:i[0];if(!e)return;if(!e.name.endsWith(".json")){p("El archivo debe ser un archivo JSON.");return}h(!0),p(null);const a=new FileReader;a.onload=d=>{var g;const C=(g=d.target)==null?void 0:g.result;if(typeof C=="string")try{const f=JSON.parse(C).filter(_=>_&&_.id&&_.typeBlock);if(f.length===0)throw new Error("No se encontraron bloques válidos.");c([...l,...f])}catch(v){console.error("Error al analizar el archivo JSON:",v),p("Archivo JSON inválido.")}h(!1)},a.readAsText(e)};return t.jsxs("div",{className:"block-orquestador-page",children:[l?t.jsx("section",{className:"content-page mb-1",children:l.map((o,e)=>{const a=u[o.typeBlock].component;return t.jsxs("div",{className:"select-block group relative",children:[t.jsx("div",{className:"absolute -left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 cursor-move",children:t.jsx("button",{name:"arriba",title:"arriba",onClick:()=>z(e,e-1),className:"text-white hover:opacity-50",children:t.jsx(O,{size:20})})}),t.jsx(a,{contenido:o.content1,modificacion:i=>m(o.id,i,"content1"),contenido2:o.content2,modificacion2:i=>m(o.id,i,"content2"),contenido3:o.content3,modificacion3:i=>m(o.id,i,"content3")}),t.jsx("div",{className:"absolute -right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100",children:t.jsx("button",{name:"borrar",title:"borrar",onClick:()=>y(o.id),className:"text-red-500 hover:text-red-700",children:t.jsx(A,{size:20})})})]},o.id)})}):t.jsx("section",{className:"content-page",children:" "}),t.jsxs("section",{className:"blocks-edit-orques",children:[t.jsx("h1",{children:"Agregar Bloques"}),t.jsx("div",{className:"flex-blocks-edit-orques",children:Object.entries(u).map(([o,{name:e}])=>t.jsxs("button",{name:"agregar",title:"agregar","data-tipo-bloque":o,onClick:a=>k(a.currentTarget.dataset.tipoBloque),children:[e==="Título H1"&&t.jsx(I,{size:22}),e==="Título H2"&&t.jsx(T,{size:22}),e==="Título HR"&&t.jsx(T,{size:22}),e==="Texto Corto"&&t.jsx(R,{size:22}),e==="Parrafo"&&t.jsx(w,{size:22}),e==="Enlaces"&&t.jsx(S,{size:22}),e==="Youtube"&&t.jsx(b,{size:22}),e==="Tarjeta"&&t.jsx(D,{size:22}),e==="Html"&&t.jsx(V,{size:22}),e==="Imagen"&&t.jsx(J,{size:22}),t.jsx("p",{children:e})]},o))})]}),t.jsx("section",{className:"blocks-save-orques",children:t.jsxs("div",{className:"flex-blocks-save-orques",children:[t.jsxs("button",{name:"importar",title:"importar",children:[t.jsxs("label",{htmlFor:String(x),children:[t.jsx(E,{size:32}),t.jsx("p",{children:"Importar Pagina"})]}),t.jsx("input",{type:"file",id:String(x),accept:".json",onChange:H,hidden:!0})]}),t.jsxs("button",{name:"exportar",title:"exportar",onClick:P,children:[t.jsx(E,{size:32}),t.jsx("p",{children:"Exportar Pagina"})]}),t.jsxs("button",{name:"guardar",title:"guardar",children:[t.jsx(F,{size:32}),t.jsx("p",{children:"Guardar Pagina"})]})]})}),B&&t.jsx("p",{children:"Cargando archivo..."}),j&&t.jsx("p",{className:"error",children:j})]})};export{nt as default};
