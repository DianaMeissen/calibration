(window.webpackJsonpcalibration=window.webpackJsonpcalibration||[]).push([[0],[,,,,,,,,,function(t,e,a){t.exports=a(18)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(3),o=a.n(r),i=(a(14),a(1)),l=a(4),s=a(5),m=a(7),u=a(6),d=a(8),h=(a(15),a(16),function(t){return c.a.createElement("div",{className:"circles--animated centered",style:{top:"".concat(t.top,"%"),left:"".concat(t.left,"%")}},c.a.createElement("div",{className:"circle big centered"}),c.a.createElement("div",{className:"circle small centered"}))}),f=(a(17),function(){return c.a.createElement("div",{className:"centered"},c.a.createElement("div",{className:"hello-block centered"},c.a.createElement("div",{className:"circles--animated centered"},c.a.createElement("div",{className:"circle big centered"}),c.a.createElement("div",{className:"circle small centered"})),c.a.createElement("span",{className:"hello-text"},"Look directly at calibration points")))}),p=function(t,e){for(var a=[],n=[],c=t-1,r=e-1,o=0,i=10,l=0;l<e;l++){var s=[],m=0;i+=o;for(var u=10,d=0;d<t;d++)n.push("".concat(l,",").concat(d)),u+=m,s.push("".concat(Math.round(i),",").concat(Math.round(u))),m=80/c;o=80/r,a.push(s)}return{circlePointsMatrix:a,randomizer:n}},v=-10,E=-10,b=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(c)))).state={showStartButton:!0,showHelloBlock:!1,circlePointsMatrix:[],randomizer:[]},a.showHelloBlockAndStartAnimation=function(){a.setState({showHelloBlock:!0,showStartButton:!1,top:v,left:E}),new Promise((function(t){setTimeout((function(){a.setState({showHelloBlock:!1}),a.changeCirclePosition()}),3e3)}))},a.createMatrix=function(t,e){var n=p(t,e);a.setState({circlePointsMatrix:n.circlePointsMatrix,randomizer:n.randomizer})},a.getRandomElementFromArray=function(){var t=Object(i.a)(a.state.randomizer),e=Math.floor(Math.random()*t.length),n=t[e];return t.splice(e,1),a.setState({randomizer:t}),n.split(",")},a}return Object(d.a)(e,t),Object(s.a)(e,[{key:"changeCirclePosition",value:function(){for(var t=this,e=Object(i.a)(this.state.circlePointsMatrix),a=0;a<this.state.randomizer.length;a++){var n=this.getRandomElementFromArray(),c=e[n[0]][n[1]].split(",");this.setState({top:c[1],left:c[0]},(function(){return console.log(t.state)}))}}},{key:"componentDidMount",value:function(){this.createMatrix(5,3)}},{key:"render",value:function(){return c.a.createElement("div",{className:"animation-container"},this.state.showStartButton?c.a.createElement("button",{className:"start-button",onClick:this.showHelloBlockAndStartAnimation},"Start"):c.a.createElement("div",{className:"main-scene"},this.state.showHelloBlock&&c.a.createElement(f,null),c.a.createElement(h,{top:this.state.top,left:this.state.left})))}}]),e}(c.a.Component);o.a.render(c.a.createElement(b,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.f7c31f6d.chunk.js.map