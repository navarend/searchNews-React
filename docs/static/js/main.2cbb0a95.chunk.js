(window["webpackJsonpnews-app"]=window["webpackJsonpnews-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),s=a.n(c),l=(a(15),a(6)),o=a.n(l),i=a(9),m=a(1),u=a(2),p=a(4),v=a(3),h=a(5),w=function(e){var t=e.title;return r.a.createElement("nav",{className:"nav-wrapper blackNavBar darken-3"},r.a.createElement("a",{href:"#!",className:"brand-logo"},t))},d=function(e){var t=e.news,a=t.description,n=t.title,c=t.url,s=t.urlToImage,l=t.source,o=s?r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:s,alt:n}),r.a.createElement("span",{className:"card-title"},l.name)):null;return r.a.createElement("div",{className:"col s12 m6 l4"},r.a.createElement("div",{className:"card"},o,r.a.createElement("div",{className:"card-content"},r.a.createElement("h3",null,n),r.a.createElement("p",null,a)),r.a.createElement("div",{className:"card-action"},r.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"waves-effect waves-light btn"},"See complete new"))))},f=function(e){var t=e.news;return r.a.createElement("div",{className:"row"},t.map(function(e){return r.a.createElement(d,{key:e.url,news:e})}))},E=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={category:"business"},a.changeCategory=function(e){a.setState({category:e.target.value},function(){a.props.reviewNew(a.state.category)})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"search row"},r.a.createElement("div",{className:"col s12 m8 offset-m2"},r.a.createElement("form",null,r.a.createElement("h2",null,"Find News by Category"),r.a.createElement("div",{className:"input-field col s12 offset-m2"},r.a.createElement("select",{onChange:this.changeCategory},r.a.createElement("option",{value:"business"},"Business"),r.a.createElement("option",{value:"entertainment"},"Entertainment"),r.a.createElement("option",{value:"general"},"General"),r.a.createElement("option",{value:"health"},"Health"),r.a.createElement("option",{value:"science"},"Science"),r.a.createElement("option",{value:"sports"},"Sports"),r.a.createElement("option",{value:"technology"},"Technology"))))))}}]),t}(n.Component),g=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={news:[]},a.checkNews=Object(i.a)(o.a.mark(function e(){var t,n,r,c,s=arguments;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:"business",n="https://newsapi.org/v2/top-headlines?country=us&category=".concat(t,"&apiKey=f9909a85725b46bfadc41a2ee5c6de63"),e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:c=e.sent,a.setState({news:c.articles});case 9:case"end":return e.stop()}},e)})),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.checkNews()}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(w,{title:"Search News"}),r.a.createElement("div",{className:"container white news-container"},r.a.createElement(E,{reviewNew:this.checkNews}),r.a.createElement(f,{news:this.state.news})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.2cbb0a95.chunk.js.map