import{e as b,r as o,j as e,c as r,B as m}from"./index-CHJKWIYa.js";import{d as h}from"./minna_n_nihon_1_vocabulary-B-BacEYM.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],w=b("ArrowLeft",y);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],v=b("ArrowRight",T),R=o.forwardRef(({className:a,...l},s)=>e.jsx("div",{className:"relative w-full overflow-auto",children:e.jsx("table",{ref:s,className:r("w-full caption-bottom text-sm",a),...l})}));R.displayName="Table";const f=o.forwardRef(({className:a,...l},s)=>e.jsx("thead",{ref:s,className:r("[&_tr]:border-b",a),...l}));f.displayName="TableHeader";const j=o.forwardRef(({className:a,...l},s)=>e.jsx("tbody",{ref:s,className:r("[&_tr:last-child]:border-0",a),...l}));j.displayName="TableBody";const k=o.forwardRef(({className:a,...l},s)=>e.jsx("tfoot",{ref:s,className:r("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",a),...l}));k.displayName="TableFooter";const i=o.forwardRef(({className:a,...l},s)=>e.jsx("tr",{ref:s,className:r("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",a),...l}));i.displayName="TableRow";const c=o.forwardRef(({className:a,...l},s)=>e.jsx("th",{ref:s,className:r("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",a),...l}));c.displayName="TableHead";const n=o.forwardRef(({className:a,...l},s)=>e.jsx("td",{ref:s,className:r("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",a),...l}));n.displayName="TableCell";const L=o.forwardRef(({className:a,...l},s)=>e.jsx("caption",{ref:s,className:r("mt-4 text-sm text-muted-foreground",a),...l}));L.displayName="TableCaption";function _(){const[a,l]=o.useState([]),[s,x]=o.useState(1),u=t=>{var d;l((d=h.lessons.filter(g=>g.lesson==t)[0])==null?void 0:d.vocabulary)};o.useEffect(()=>{u(s)},[s]);const N=()=>{x(t=>t+1)},p=()=>{x(t=>t-1)};return e.jsxs("div",{className:"flex flex-col w-full p-3",children:[e.jsx("div",{className:"",children:e.jsxs("div",{className:"flex select-none justify-center items-center flex-1 gap-8",children:[e.jsx(m,{size:"icon",onClick:p,className:r(s==1&&"invisible","size-6"),children:e.jsx(w,{})}),e.jsxs("h3",{className:"text-center text-xl",children:["অধ্যায়-",s]}),e.jsx(m,{size:"icon",onClick:N,className:r(h.lessons.length==s&&"invisible","size-6"),children:e.jsx(v,{})})]})}),e.jsx("div",{className:"container mx-auto max-h-[80dvh] lg:max-h-[75dvh] bg-card rounded-lg overflow-y-auto mt-2",children:e.jsxs("table",{className:"w-full table-auto",children:[e.jsx(f,{className:"sticky bg-card top-0 z-10",children:e.jsxs(i,{children:[e.jsx(c,{children:"No."}),e.jsx(c,{className:"hidden lg:table-cell",children:"Romaji"}),e.jsx(c,{children:"Nihongo"}),e.jsx(c,{children:"Bengali"}),e.jsx(c,{children:"English"})]})}),e.jsx(j,{className:"lg:text-xl",children:a.map((t,d)=>e.jsxs(i,{className:"text-left",children:[e.jsx(n,{children:d+1}),e.jsx(n,{className:"hidden lg:table-cell",children:t.romaji}),e.jsx(n,{className:"font-medium lg:whitespace-nowrap",children:t.word}),e.jsx(n,{children:t.bengali}),e.jsx(n,{children:t.english})]},t.word))})]})})]})}export{_ as Vocabulary,_ as default};
