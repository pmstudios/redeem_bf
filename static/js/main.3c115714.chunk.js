(this.webpackJsonpredeem_bf=this.webpackJsonpredeem_bf||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),i=a.n(l),o=(a(13),a(4)),c=a(5),s=a(1),d=a(6),m=a(7),u=(a(14),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={visibleDownloadLink:!1,visibleError:!1,redeemCode:""},n.handleLink=function(){},n.renderDownloadLink=function(){return r.a.createElement("div",{className:"signin vertical-center"},r.a.createElement("p",null,"Google Drive Link - ",r.a.createElement("a",{href:"#",onClick:n.handleLink},"Download")),r.a.createElement("p",null,"Direct Download Link - ",r.a.createElement("a",{href:"#",onClick:n.handleLink},"Download")))},n.renderErrorMsg=function(){return r.a.createElement("div",{className:"errmsg"},r.a.createElement("p",null,"Invalid Redeem Code"))},n.handleSignin=function(){},n.updateInput=n.updateInput.bind(Object(s.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(s.a)(n)),n}return Object(c.a)(a,[{key:"updateInput",value:function(e){this.setState({redeemCode:e.target.value})}},{key:"handleSubmit",value:function(){"FS72P5"===this.state.redeemCode?this.setState({visibleDownloadLink:!0,visibleError:!1}):this.setState({visibleDownloadLink:!1,visibleError:!0})}},{key:"handleChange",value:function(e){console.log(e)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"frame"},r.a.createElement("div",{className:"top center"},r.a.createElement("div",{className:"left"},r.a.createElement("a",{href:"https://pm-studios.com",target:"_blank"},"PM-Studios")),r.a.createElement("div",{className:"right"},r.a.createElement("a",{href:"https://www.pm-studios.com/Projects/Bladed-Fury",target:"_blank"},"Bladed Fury Website")),r.a.createElement("img",{src:"./images/bladedfury.jpg",alt:"bf"})),r.a.createElement("div",{className:"middle center"},r.a.createElement("div",{className:"signup"},r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"Enter Redeem Code for Bladed Fury")),r.a.createElement("form",null,r.a.createElement("input",{type:"text",name:"code",placeholder:"Redeem Code",onChange:this.updateInput,onKeyPress:this.updateInput,maxLength:"10",required:!0}),r.a.createElement("div",{onClick:this.handleSubmit,className:"submit"},r.a.createElement("p",null,"Submit"))),r.a.createElement("div",{className:"errmsg"},this.state.visibleError&&this.renderErrorMsg())),this.state.visibleDownloadLink&&this.renderDownloadLink())))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.3c115714.chunk.js.map