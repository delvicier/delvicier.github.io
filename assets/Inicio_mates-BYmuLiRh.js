import{j as s,L as l}from"./index-agcFoake.js";const o=({nombre:a,categoria:r,logo:c,docente:d,descripcion:n,fecha:e,estado:i})=>s.jsxs("div",{className:"inicio-mates",children:[s.jsx("div",{className:"head-i-mates",children:s.jsxs("span",{children:["Materia: ",a]})}),s.jsx("div",{className:"head-i-mates-categ",children:s.jsxs("p",{children:[s.jsx("strong",{children:"Categoria:"})," ",r," "]})}),s.jsxs("picture",{className:"logo-i-mates",children:[s.jsx("img",{className:"logo-i-mates-img",src:c,alt:"card",title:"logo"}),s.jsxs("div",{className:"logo-i-mates-state",children:[s.jsx("p",{children:"Estado /"}),s.jsx("h4",{children:i?"Activada":"Desactivada"})]})]}),s.jsxs("div",{className:"parrafo-i-mates",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"Descripción:"})," ",n]}),s.jsx(l,{to:"/perfil/docente/2",className:"parrafo-i-m-doce",children:s.jsxs("p",{children:[s.jsx("strong",{children:"Docentes asignados: "}),d," "]})}),s.jsxs("div",{className:"parrafo-i-mates-det",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"Creación de la materia:"})," ",e]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Estado de materia: "}),i?"Activada":"Desactivada"]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Inicio de clases:"})," ",e]}),s.jsxs("p",{children:[s.jsx("strong",{children:"Finalización:"})," ",e]})]})]})]});export{o as default};
