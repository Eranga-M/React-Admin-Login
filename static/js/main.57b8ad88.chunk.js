(this["webpackJsonpreact-login"]=this["webpackJsonpreact-login"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(5),i=n.n(s),r=(n(10),n(3)),o=n(2),l=n(0);var j=function(e){var t=e.Login,n=e.error,c=Object(a.useState)({name:"",email:"",password:""}),s=Object(r.a)(c,2),i=s[0],j=s[1];return Object(l.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(i)},children:Object(l.jsxs)("div",{className:"form-inner",children:[Object(l.jsx)("h2",{children:"Login"}),""!=n?Object(l.jsxs)("div",{className:"error",children:[n," "]}):"",Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{type:"text",name:"name",id:"name",onChange:function(e){return j(Object(o.a)(Object(o.a)({},i),{},{name:e.target.value}))},value:i.name})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email: "}),Object(l.jsx)("input",{type:"email",name:"email",id:"email",onChange:function(e){return j(Object(o.a)(Object(o.a)({},i),{},{email:e.target.value}))},value:i.email})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"password",children:"Password: "}),Object(l.jsx)("input",{type:"password",name:"password",id:"password",onChange:function(e){return j(Object(o.a)(Object(o.a)({},i),{},{password:e.target.value}))},value:i.password})]}),Object(l.jsx)("input",{type:"submit",value:"LOGIN"})]})})};var m=function(){var e="admin@gmail.com",t="admin123",n=Object(a.useState)({name:"",email:""}),c=Object(r.a)(n,2),s=c[0],i=c[1],o=Object(a.useState)(""),m=Object(r.a)(o,2),d=m[0],u=m[1];return Object(l.jsx)("div",{className:"App",children:""!=s.email?Object(l.jsxs)("div",{className:"welcome",children:[Object(l.jsxs)("h2",{children:[" Welcome, ",Object(l.jsx)("span",{children:s.name})]}),Object(l.jsx)("button",{onClick:function(){i({name:"",email:""})},children:"Logout"})]}):Object(l.jsx)(j,{Login:function(n){console.log(n),n.email==e&&n.password==t?(console.log("Logged in"),i({name:n.name,email:n.email})):(console.log("Details do not match!"),u("Details do not match!"))},error:d})})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),d()}},[[12,1,2]]]);
//# sourceMappingURL=main.57b8ad88.chunk.js.map