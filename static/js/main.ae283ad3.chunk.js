(window["webpackJsonpsolid-beer-app-demo"]=window["webpackJsonpsolid-beer-app-demo"]||[]).push([[0],{218:function(e,t,n){e.exports=n(453)},223:function(e,t,n){},240:function(e,t){},242:function(e,t){},250:function(e,t){},252:function(e,t){},293:function(e,t){},295:function(e,t){},343:function(e,t){},344:function(e,t){},405:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=405},434:function(e,t){},437:function(e,t){},447:function(e,t){},448:function(e,t){},451:function(e,t,n){},453:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n.n(a),u=n(214),o=n.n(u),s=n(0),i=n(1),c=n(5),l=n(7),p=n(59),d=n(8),h=(n(223),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(l.a)(t).call(this,e))).animateButton=function(e){e.preventDefault(),n.setState({className:"animate"}),setTimeout((function(){n.setState({className:""})}),700),n.props.onClick()},n.state={className:""},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{className:"bubbly-button "+this.state.className,onClick:this.animateButton},"One up the BEER")}}]),t}(r.a.Component)),f=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=1===this.props.value?"BEER":"BEERS";return r.a.createElement("div",{className:"record"},r.a.createElement("p",{className:"topRecord"},"on ",this.props.date," you drank"),r.a.createElement("p",{className:"bottomRecord"},this.props.value," ",e))}}]),t}(r.a.Component),b=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.beerCounter.getOrderedDateList().map((function(t){return r.a.createElement(f,{key:t,date:t,value:String(e.props.beerCounter.getValueOnDate(t)).padStart(2,"0")})}));return r.a.createElement("div",{className:"listContainer"},t)}}]),t}(r.a.Component),v=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=1===this.props.beers?"BEER":"BEERS";return r.a.createElement("div",{className:"today"},r.a.createElement("p",null,"Today You Drank"),r.a.createElement("p",{className:"amount"},r.a.createElement("span",{className:"todayBeer"},this.props.beers," ",e)))}}]),t}(r.a.Component),m=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{onClick:this.props.onClick,className:"authButton"},"Log Out")}}]),t}(r.a.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{onClick:this.props.onClick,className:"authButton"},"Log In")}}]),t}(r.a.Component),g=n(9),k=n.n(g),O=n(36),w=n(122),C=n(452),j=C.Namespace("http://www.w3.org/ns/solid/terms#"),E=C.Namespace("http://purl.org/dc/terms/"),S=C.Namespace("http://www.w3.org/1999/02/22-rdf-syntax-ns#"),x=C.Namespace("https://ozcanseker.inrupt.net/vocabulary#"),D=C.Namespace("http://www.w3.org/ns/pim/space#"),B=C.sym("https://ozcanseker.inrupt.net/vocabulary#BeerCounterRecord");function N(e){var t=e.split("/");return new Date(Date.UTC(t[2],t[1]-1,t[0]))}var L=function(){function e(t,n,a,r){Object(s.a)(this,e),this.webid=t,this.applocation=n,this.appStore=a,this.beerCounter=r,this.beerCounter.subscribe(this),this.queryList=[],this.networking=!1}return Object(i.a)(e,[{key:"update",value:function(){var e={date:this.beerCounter.getDateToday(),amount:this.beerCounter.getBeerCount()};this.queryList.push(e),this.networking||this.startSendingFile()}},{key:"startSendingFile",value:function(){var e=Object(O.a)(k.a.mark((function e(){var t,n,a,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(this.networking=!0;this.queryList.length>0;)t=this.queryList.shift(),n=t.date,(a=this.appStore.any(null,null,N(n)))?this.appStore.any(a,S("value"),null).value=t.amount+"":(a=C.blankNode(),this.appStore.add(a,S("type"),x("BeerCounterRecord")),this.appStore.add(a,E("created"),N(n)),this.appStore.add(a,S("value"),t.amount));return e.next=4,C.serialize(void 0,this.appStore,"text/turtle");case 4:return r=e.sent,console.log(this.applocation),e.next=8,w.updateFile(this.applocation,r);case 8:this.queryList.length>0?this.startSendingFile():this.networking=!1;case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}],[{key:"build",value:function(){var t=Object(O.a)(k.a.mark((function t(n){var a,r,u,o,s,i,c,l;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.checkSession();case 2:return a=t.sent,r=C.sym(a.webId),t.next=6,this.getUserCard(a);case 6:return u=t.sent,t.next=9,this.getPPILocation(r,u);case 9:return o=t.sent,t.next=12,this.getStorePublic(r,u);case 12:return s=t.sent,t.next=15,this.getApplicationLocation(o.ppi,o.store,s);case 15:return i=t.sent,t.next=18,this.getAppStore(i);case 18:return c=t.sent,l=this.getDatesAndCountsFromStore(c),n.setCountsPerDate(l),t.abrupt("return",new e(a.webId,i,c,n));case 22:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getAppStore",value:function(){var e=Object(O.a)(k.a.mark((function e(t){var n,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=C.graph(),e.next=3,w.fetch(t);case 3:return a=e.sent,e.next=6,C.parse(a,n,t,"text/turtle");case 6:return e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getApplicationLocation",value:function(){var e=Object(O.a)(k.a.mark((function e(t,n,a){var r,u;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=C.sym(t.value+"#BeerCounter"),u=n.any(r,j("instance"))){e.next=8;break}return e.next=5,this.createAppNodeForPublicTypeIndex(n,t,a,r);case 5:return e.abrupt("return",e.sent);case 8:return e.abrupt("return",u.value);case 9:case"end":return e.stop()}}),e,this)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"getUserCard",value:function(){var e=Object(O.a)(k.a.mark((function e(t){var n,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.fetch(t.webId);case 2:return n=e.sent,a=C.graph(),C.parse(n,a,t.webId,"text/turtle"),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPPILocation",value:function(){var e=Object(O.a)(k.a.mark((function e(t,n){var a,r,u;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.any(t,j("publicTypeIndex")),r=C.graph(),e.next=4,w.fetch(a.value);case 4:return u=e.sent,C.parse(u,r,a.value,"text/turtle"),e.abrupt("return",{store:r,ppi:a});case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getStorePublic",value:function(e,t){return t.any(e,D("storage")).value+"public"}},{key:"getDatesAndCountsFromStore",value:function(e){var t=e.each(null,null,x("BeerCounterRecord")),n=new Map;return t.forEach((function(t){var a=e.any(t,S("value")),r=e.any(t,E("created"));r=function(e){var t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),a=e.getFullYear();return t+"/"+n+"/"+a}(new Date(r.value)),n.set(r,a.value)})),n}},{key:"createAppNodeForPublicTypeIndex",value:function(){var e=Object(O.a)(k.a.mark((function e(t,n,a,r){var u,o;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=a+"/beercounter.ttl",e.next=3,w.updateFile(u,"");case 3:return u=C.sym(u),t.add(n,E("references"),r),t.add(r,S("type"),j("TypeRegistration")),t.add(r,j("forClass"),B),t.add(r,j("instance"),u),e.next=10,C.serialize(void 0,t,n.value,"text/turtle");case 10:return o=e.sent,e.next=13,w.updateFile(n.value,o);case 13:return e.abrupt("return",u.value);case 14:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}()},{key:"addExampleNodes",value:function(){var e=Object(O.a)(k.a.mark((function e(t,n){var a,r,u,o,s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=C.sym(n),a=C.blankNode(),r=C.blankNode(),u=C.blankNode(),o=C.blankNode(),t.add(n,E("references"),a),t.add(n,E("references"),r),t.add(n,E("references"),u),t.add(n,E("references"),o),t.add(a,S("type"),x("BeerCounterRecord")),t.add(a,S("value"),4),t.add(a,E("created"),N("17/09/2019")),t.add(r,S("type"),x("BeerCounterRecord")),t.add(r,S("value"),5),t.add(r,E("created"),N("16/09/2019")),t.add(u,S("type"),x("BeerCounterRecord")),t.add(u,S("value"),16),t.add(u,E("created"),N("15/09/2019")),t.add(o,S("type"),x("BeerCounterRecord")),t.add(o,S("value"),2),t.add(o,E("created"),N("14/09/2019")),e.next=23,C.serialize(void 0,t,"text/turtle");case 23:return s=e.sent,e.abrupt("return",s);case 25:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),T=function(){function e(){Object(s.a)(this,e),this.subscribers=[],this.countsPerDate=new Map}return Object(i.a)(e,[{key:"getOrderedDateList",value:function(){return Array.from(this.countsPerDate.keys()).sort().reverse()}},{key:"getValueOnDate",value:function(e){return this.countsPerDate.get(e)}},{key:"setCountsPerDate",value:function(e){this.countsPerDate=e,this.upDateSubScribers()}},{key:"getBeerCount",value:function(){return this.countsPerDate.has(this.dateToday())?this.getValueOnDate(this.dateToday()):0}},{key:"getDateToday",value:function(){return this.dateToday()}},{key:"increaeCountToday",value:function(){var e,t=this.dateToday();e=this.countsPerDate.has(t)?this.countsPerDate.get(t):0,e++,this.countsPerDate.set(t,e),this.upDateSubScribers()}},{key:"upDateSubScribers",value:function(){this.subscribers.map((function(e){return e.update()}))}},{key:"subscribe",value:function(e){this.subscribers.push(e)}},{key:"unsubscribe",value:function(e){this.subscribers.filter((function(t){return t===e}))}},{key:"dateToday",value:function(){var e=new Date;return String(e.getDate()).padStart(2,"0")+"/"+String(e.getMonth()+1).padStart(2,"0")+"/"+e.getFullYear()}}]),e}(),P=n(122),F=n(120),I=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(l.a)(t).call(this,e))).checkForLogin=function(){n.state.beerCounter&&n.state.beerCounter.unsubscribe(),P.checkSession().then((function(e){var t=new T;t.subscribe(Object(p.a)(n)),e?(n.setState({isLoggedIn:!0,beerCounter:t}),L.build(t).then((function(e){n.setState({hasFetched:!0,amountOfBeersToday:n.state.beerCounter.getBeerCount(),dateToday:n.state.beerCounter.getDateToday()})}))):n.setState({isLoggedIn:!1})}),(function(e){return n.setState({isLoggedIn:!1})}))},n.update=function(){n.setState({amountOfBeersToday:n.state.beerCounter.getBeerCount(),dateToday:n.state.beerCounter.getDateToday()})},n.handleLogIn=function(){F.popupLogin({popupUri:"./popup.html"}).then((function(){n.checkForLogin()}))},n.handleLogOut=function(){P.logout().then(n.setState({isLoggedIn:!1}))},n.increaseBeers=function(){n.state.beerCounter.increaeCountToday()},n.state={isLoggedIn:!1},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.checkForLogin()}},{key:"render",value:function(){var e,t,n;if(this.state.isLoggedIn)if(e=r.a.createElement(m,{onClick:this.handleLogOut}),this.state.hasFetched){var a=r.a.createElement(b,{beerCounter:this.state.beerCounter}),u=r.a.createElement(h,{onClick:this.increaseBeers}),o=r.a.createElement(v,{date:this.state.dateToday,beers:this.state.amountOfBeersToday});t=r.a.createElement("section",null,o,u,a)}else n=r.a.createElement("section",{id:"rendering"},r.a.createElement("h3",null,"Fetching data"),r.a.createElement("div",{id:"fetchinAnimation"}));else e=r.a.createElement(y,{onClick:this.handleLogIn}),n=r.a.createElement("section",{id:"rendering"},r.a.createElement("h3",null,"Please log in"));return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h1",null,"Beer counter")),r.a.createElement("section",{id:"authDiv"},e),n,t,r.a.createElement("footer",null,r.a.createElement("span",null,"This application is powered by"),r.a.createElement("a",{href:"https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies"},r.a.createElement("img",{alt:"Solid inrupt",src:"/Solid-Pod-beer-counter/Knipsel.png"}))))}}]),t}(r.a.Component);n(451),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[218,1,2]]]);
//# sourceMappingURL=main.ae283ad3.chunk.js.map