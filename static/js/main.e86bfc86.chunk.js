(this.webpackJsonpdatamass=this.webpackJsonpdatamass||[]).push([[0],{50:function(e,a,t){"use strict";t.r(a);var r=t(3),i=t(1),s=t.n(i),c=t(18),n=t.n(c),l=(t(40),t(41),t(29)),o=t(61),j=t(62),d=t(63),b=t(65),u=t(33),h=t(64),x=t(66);var p=function(){return Object(r.jsxs)(h.a,{bg:"dark",variant:"dark",children:[Object(r.jsx)(h.a.Brand,{href:"#home",children:"DataMass"}),Object(r.jsxs)(x.a,{className:"mr-auto",children:[Object(r.jsx)(x.a.Link,{href:"#myaccount",children:"My Account"}),Object(r.jsx)(x.a.Link,{href:"#hive",children:"Project Hive"})]})]})},O=t(53),m=t(54),v=t(55),f=t(56),y=t(57),g=t(58),B=t(59),G=t(60);var k={shareButton:{margin:"0 5px",display:"inline-block"}},D=function(e){var a=e.url,t="Get upto 50 GB FREE DATA to your Dialog, Mobitel, AirTel or Hutch mobile! Hurry now, it's a limited time offer!!";return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{style:k.shareButton,children:Object(r.jsx)(O.a,{url:a,title:t,separator:":: ",children:Object(r.jsx)(m.a,{size:40,round:!0})})}),Object(r.jsx)("div",{style:k.shareButton,children:Object(r.jsx)(v.a,{url:a,title:t,children:Object(r.jsx)(f.a,{size:40,round:!0})})}),Object(r.jsx)("div",{style:k.shareButton,children:Object(r.jsx)(y.a,{url:a,appId:"459734535423100",children:Object(r.jsx)(g.a,{size:40,round:!0})})}),Object(r.jsx)("div",{style:k.shareButton,children:Object(r.jsx)(B.a,{url:a,title:t,children:Object(r.jsx)(G.a,{size:40,round:!0})})})]})};var L={banner:{padding:10},socialIconsBox:{padding:10}},M=function(e){var a=e.firebase,t=Object(u.a)(),s="http://datamass.tech/#/?r=".concat(t),c=Object(i.useState)(!1),n=Object(l.a)(c,2),h=n[0],x=n[1],O=Object(i.useState)(!1),m=Object(l.a)(O,2),v=m[0],f=m[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("header",{children:Object(r.jsx)(p,{})}),Object(r.jsx)(o.a,{style:L.banner,children:Object(r.jsxs)(j.a,{children:[Object(r.jsx)("p",{children:"DataMass is providing FREE data for a limited number of people that are signing up on DataMass platform, as our initial project campaing. This is a major step we are going to make in the technology industry, and we are so thrilled to launch our services soon on the internet!"}),Object(r.jsx)("p",{children:Object(r.jsx)(d.a,{variant:"primary",children:"DataMass Hive Project"})})]})}),Object(r.jsxs)(o.a,{children:[Object(r.jsx)("h3",{children:"To receive your FREE data to your Dialog, Mobitel, AirTel, or Hutch mobile, please fill the form below. (You will also be creating a DataMass account)"}),Object(r.jsxs)(b.a,{noValidate:!0,validated:h,onSubmit:function(e){if(!1===e.currentTarget.checkValidity())e.preventDefault(),e.stopPropagation();else{e.preventDefault(),e.stopPropagation();var r=e.target.elements,i={name:r.fullName.value,email:r.email.value,gender:r.gender.value,phone:r.mobile.value,data:r.data.value};a.database().ref("/users/".concat(t)).set(i).then((function(e){f(!0)}))}x(!0)},children:[Object(r.jsxs)(b.a.Group,{children:[Object(r.jsx)(b.a.Label,{children:"Your Name"}),Object(r.jsx)(b.a.Control,{id:"fullName",type:"text",placeholder:"Enter your full name here",required:!0})]}),Object(r.jsxs)(b.a.Group,{children:[Object(r.jsx)(b.a.Label,{children:"Your Email"}),Object(r.jsx)(b.a.Control,{id:"email",type:"email",placeholder:"Enter your full email here",required:!0})]}),Object(r.jsxs)(b.a.Group,{children:[Object(r.jsx)(b.a.Label,{children:"Gender"}),Object(r.jsxs)(b.a.Control,{as:"select",id:"gender",required:!0,children:[Object(r.jsx)("option",{value:"",children:"Choose..."}),Object(r.jsx)("option",{value:"male",children:"Male"}),Object(r.jsx)("option",{value:"female",children:"Female"})]})]}),Object(r.jsxs)(b.a.Group,{children:[Object(r.jsx)(b.a.Label,{children:"Your Mobile Number"}),Object(r.jsx)(b.a.Control,{id:"mobile",type:"number",placeholder:"077xxxxxxx",required:!0})]}),Object(r.jsxs)(b.a.Group,{children:[Object(r.jsx)(b.a.Label,{children:"Data Amount You Wish to Receive"}),Object(r.jsxs)(b.a.Control,{as:"select",id:"data",required:!0,children:[Object(r.jsx)("option",{value:"1",children:"1 GB"}),Object(r.jsx)("option",{value:"5",children:"5 GB"}),Object(r.jsx)("option",{value:"10",children:"10 GB"}),Object(r.jsx)("option",{value:"20",children:"20 GB"}),Object(r.jsx)("option",{value:"50",children:"50 GB"})]})]}),Object(r.jsx)(d.a,{variant:"primary",type:"submit",children:"Get Free Data"})]})]}),v&&Object(r.jsxs)(o.a,{children:[Object(r.jsxs)("p",{children:["You will receive your data in the next 24 hours, in the meantime share this refferral link to your friends to receive ",Object(r.jsx)("b",{children:"20%"})," ","bonus everytime they claim: ",Object(r.jsx)("code",{children:s})]}),Object(r.jsx)("p",{children:"Share your refferal link on social medias:"}),Object(r.jsx)(D,{url:s,style:L.socialIconsBox})]}),Object(r.jsx)("div",{style:{margin:50}})]})},w=t(32),E=(t(46),w.a.initializeApp({apiKey:"AIzaSyCFH_TQ0uUa5L2SKJwJsngLuqk03RC9VZQ",authDomain:"datamass8343.firebaseapp.com",databaseURL:"https://datamass8343.firebaseio.com",projectId:"datamass8343",storageBucket:"datamass8343.appspot.com",messagingSenderId:"589290816967",appId:"1:589290816967:web:1d1e6627a8adec475b85e2",measurementId:"G-QYGJB882XL"}));n.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(M,{firebase:E})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.e86bfc86.chunk.js.map