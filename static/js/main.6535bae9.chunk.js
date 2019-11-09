(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(41)},30:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),c=a.n(l),i=(a(30),a(31),a(11)),o=a(5),s=a(6),d=a(8),u=a(7),m=a(9),p=(a(32),function(e){var t=e.id,a=e.description,n=e.deadline,l=e.done;return r.a.createElement("li",{className:!0===l?"true":""},t," ",a," ",n)}),E=function(){return r.a.createElement("ul",{className:"static-list"},r.a.createElement(p,{description:"Get out of bed",deadline:"Wed Sep 13 2017"}),r.a.createElement(p,{description:"Brush teeth",deadline:"Thu Sep 14 2017"}),r.a.createElement(p,{description:"Eat breakfast",deadline:"Fri Sep 15 2017"}),r.a.createElement(p,{description:"Play sport",deadline:"Sat Sep 16 2017"}),r.a.createElement(p,{description:"Do homework",deadline:"Sun Sep 17 2017"}),r.a.createElement(p,{description:"Go to party",deadline:"Mon Sep 18 2017"}))},h=function(e){var t=e.data.map(function(e){var t=e.id,a=e.done,n=e.description,l=e.deadline;return r.a.createElement(p,{key:t,id:t,description:n,deadline:l,done:a})});return r.a.createElement("ul",{className:"dynamic-list"},t)},f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).todoObject=[{id:1,description:"Get out of bed",deadline:"2017-09-11",done:!0},{id:2,description:"Brush teeth",deadline:"2017-09-10",done:!1},{id:3,description:"Eat breakfast",deadline:"2017-09-09",done:!1}],a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"week1"},r.a.createElement("h2",null,"Static List"),r.a.createElement(E,null),r.a.createElement("h2",null,"Dynamic List"),r.a.createElement(h,{data:this.todoObject}))}}]),t}(r.a.Component),b=a(24),v=a(21),k=(a(33),function(e){var t=e.id,a=e.description,n=e.deadline,l=e.done,c=e.removeItem;return r.a.createElement("li",{className:!0===l?"true":""},a," ",n," ",l,r.a.createElement("span",{className:"delete",onClick:function(){return c(t)}},"DELETE"))}),g=function(e){var t=e.toDoList,a=e.removeItem,n=t.length?t.map(function(e){var t=e.id,n=e.done,l=e.description,c=e.deadline;return r.a.createElement(k,{key:t,id:t,description:l,deadline:c,done:n,removeItem:a})}):r.a.createElement("p",null,"There is no items");return r.a.createElement("ul",{className:"todo-items"},n)},y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={description:"",deadline:""},a.handelChange=function(e){a.setState(Object(v.a)({},e.target.id,e.target.value))},a.handelSubmit=function(e){e.preventDefault(),""!==e.target.description.value&&""!==e.target.deadline.value?(a.props.addItem(a.state),a.setState({description:"",deadline:""})):a.errorMessage()},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"errorMessage",value:function(){document.getElementById("error").classList.remove("displayMessage")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handelSubmit},r.a.createElement("label",null,"Description: "),r.a.createElement("input",{type:"text",id:"description",value:this.state.description,placeholder:"Enter a short description here...",onChange:this.handelChange}),r.a.createElement("label",null,"Deadline: "),r.a.createElement("input",{type:"date",id:"deadline",placeholder:"Enter deadline...",value:this.state.deadline,onChange:this.handelChange}),r.a.createElement("input",{type:"submit",value:"Add",className:"add"})))}}]),t}(r.a.Component),j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={toDoList:[{id:1,description:"Get out of bed",deadline:"2017-09-11",done:!0},{id:2,description:"Brush teeth",deadline:"2017-09-10",done:!1},{id:3,description:"Eat breakfast",deadline:"2017-09-09",done:!1}]},a.removeItem=function(e){var t=a.state.toDoList.filter(function(t){return t.id!==e});a.setState({toDoList:t})},a.addItem=function(e){var t=Math.round(9999*Math.random());e.id=t;var n=a.state.toDoList;n.push(e),a.setState({items:Object(b.a)(n)})},a.displayMessage=function(){document.getElementById("error").classList.add("displayMessage")},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"week2"},r.a.createElement("h2",null,"To Do App"),r.a.createElement(y,{addItem:this.addItem}),r.a.createElement("h2",null,"To Do List"),r.a.createElement(g,{toDoList:this.state.toDoList,removeItem:this.removeItem}),r.a.createElement("div",{className:"error displayMessage",id:"error"},r.a.createElement("div",{className:"message_box "},r.a.createElement("p",null,"All fields are required please insert all fields","  ",r.a.createElement("i",{className:"fa fa-exclamation-triangle"})),r.a.createElement("button",{className:"ok-button",onClick:this.displayMessage},"OK"))))}}]),t}(r.a.Component),O=(a(34),function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("table",{className:"table table-dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{scope:"col"},"Surname"),r.a.createElement("th",{scope:"col"},"Gender"),r.a.createElement("th",{scope:"col"},"Region"))),r.a.createElement("tbody",null,this.props.users?this.props.users.map(function(e,t){var a=e.name,n=e.surname,l=e.gender,c=e.region;return r.a.createElement("tr",{key:t},r.a.createElement("th",{scope:"row"},t+1),r.a.createElement("td",null,a),r.a.createElement("td",null,n),r.a.createElement("td",null,l),r.a.createElement("td",null,c))}):r.a.createElement("tr",null,r.a.createElement("td",null,"Data Loading...")))))}}]),t}(n.Component)),w="https://uinames.com/api/?amount=10";var N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={users:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(w).then(function(e){return e.json()}).then(function(t){return e.setState({users:t})})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"HomeworkWeek3"),r.a.createElement("div",{className:"container week3"},r.a.createElement(O,{users:this.state.users})))}}]),t}(r.a.Component),S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Home page"),r.a.createElement("p",null,"Please click one of the links above..."))},D=a(10),L=(a(35),function(){return r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{class:""},r.a.createElement("li",null,r.a.createElement(D.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(D.b,{to:"/week1"},"Week 1")),r.a.createElement("li",null,r.a.createElement(D.b,{to:"/week2"},"Week 2")),r.a.createElement("li",null,r.a.createElement(D.b,{to:"/week3"},"Week 3"))))}),I=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Not Found 404"))};a(40);var C=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(L,null),r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/week1",component:f}),r.a.createElement(i.b,{path:"/week2",component:j}),r.a.createElement(i.b,{path:"/week3",component:N}),r.a.createElement(i.b,{path:"/notfound",component:I}),r.a.createElement(i.b,{path:"/",exact:!0,component:S}),r.a.createElement(i.a,{to:"/notfound"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(D.a,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.6535bae9.chunk.js.map