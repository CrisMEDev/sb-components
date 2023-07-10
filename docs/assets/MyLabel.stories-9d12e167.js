import{j as q}from"./jsx-runtime-94f6e698.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const n=({label:s="No label",size:_="normal",color:S="primary",...t})=>q.jsx("span",{className:`label ${_} text-${S}`,style:{color:t.fontColor},children:t.allCaps?s.toUpperCase():s});try{n.displayName="MyLabel",n.__docgenInfo={description:"Componente principal para interacción con usuario",displayName:"MyLabel",props:{label:{defaultValue:{value:"No label"},description:"Nombre del componente",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"¿Qué tan grande debería ser?",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:null,description:"",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},fontColor:{defaultValue:null,description:"",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const V={title:"UI/Etiquetas/MyLabel",component:n,tags:["autodocs"],argTypes:{size:{options:["normal","h1","h2","h3"],control:{type:"select"}},color:{description:"¿Qué color usará?",options:["primary","secondary","tertiary"],control:{type:"select"}},allCaps:{description:"¿Capitalizar el string?",type:"boolean"},fontColor:{description:"Color de la fuente",control:{type:"color"}}}},e={args:{label:"No label",size:"normal",allCaps:!1}},a={args:{label:"No label",size:"normal",allCaps:!0}},r={args:{label:"No label",size:"h2",color:"secondary"}},o={args:{label:"No label",size:"h3",color:"tertiary"}},l={args:{label:"No label",size:"h1"}};var c,i,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'No label',
    size: 'normal',
    allCaps: false
  }
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var u,m,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'No label',
    size: 'normal',
    allCaps: true
  }
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var y,b,g;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'No label',
    size: 'h2',
    color: 'secondary'
  }
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var C,f,N;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'No label',
    size: 'h3',
    color: 'tertiary'
  }
}`,...(N=(f=o.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var h,z,v;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'No label',
    size: 'h1'
  }
}`,...(v=(z=l.parameters)==null?void 0:z.docs)==null?void 0:v.source}}};const M=["Basic","AllCaps","Secondary","Tertiary","CustomColor"];export{a as AllCaps,e as Basic,l as CustomColor,r as Secondary,o as Tertiary,M as __namedExportsOrder,V as default};
//# sourceMappingURL=MyLabel.stories-9d12e167.js.map
