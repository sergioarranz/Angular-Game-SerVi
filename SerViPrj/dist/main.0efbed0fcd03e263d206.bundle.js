webpackJsonp([1],{0:function(t,i,e){t.exports=e("cDNt")},cDNt:function(t,i,e){"use strict";function s(t){return a._17(0,[a._14(402653184,1,{mcnv:0}),(t()(),a._16(null,["\n\n"])),(t()(),a._3(0,[[1,0],["mcnv",1]],null,1,"canvas",[["height","900"],["id","mcnv"],["width","1000"]],null,null,null,null,null)),(t()(),a._16(null,["\n\n"]))],null,null)}function n(t){return a._17(0,[(t()(),a._3(0,null,null,1,"app-micanvas",[],null,null,null,s,A)),a._1(114688,null,0,I,[a.z],null,null)],function(t,i){t(i,1,0)},null)}function o(t){return a._17(0,[(t()(),a._16(null,["\n"])),(t()(),a._3(0,null,null,4,"body",[],null,null,null,null,null)),(t()(),a._16(null,["\n  "])),(t()(),a._3(0,null,null,1,"app-micanvas",[],null,null,null,s,A)),a._1(114688,null,0,I,[a.z],null,null),(t()(),a._16(null,["\n"])),(t()(),a._16(null,["\n\n\n"])),(t()(),a._16(null,["\n"]))],function(t,i){t(i,4,0)},null)}function r(t){return a._17(0,[(t()(),a._3(0,null,null,1,"app-root",[],null,null,null,o,C)),a._1(49152,null,0,p,[],null,null)],null,null)}Object.defineProperty(i,"__esModule",{value:!0});var a=e("/oeL"),h={production:!0},c=function(){function t(){}return t}(),p=function(){function t(){this.title="app2",console.log("iggttuffturrtyrty")}return t.ctorParameters=function(){return[]},t}(),u=[""],l=[""],d=function(){function t(t,i){this.blStarted=!1,this.dictRelViews=new Map,this.sRootViewUID=null,this.dictViews=new Map,this.contexto=t,this.ngZone=i}return t.prototype.addViewToParentView=function(t,i){var e=this.dictRelViews[t.uid];void 0==e&&(e=Array()),-1==e.indexOf(i.uid)&&e.push(i.uid),this.dictRelViews[t.uid]=e,this.dictViews[t.uid]=t,this.dictViews[i.uid]=i},t.prototype.setRaiz=function(t){this.sRootViewUID=t.uid},t.prototype.start=function(){var t=this;this.blStarted=!0,requestAnimationFrame(function(){return t.cicle()})},t.prototype.stop=function(){this.blStarted=!1},t.prototype.cicle=function(){var t=this;null!=this.sRootViewUID&&(this.actualizar(this.sRootViewUID,null),this.ngZone.runOutsideAngular(function(){return t.pintar(t.sRootViewUID)})),this.blStarted&&requestAnimationFrame(function(){return t.cicle()})},t.prototype.pintar=function(t){var i=this.dictViews[t];if(i.blVisible){i.paint(this.contexto);var e=this.dictRelViews[t];if(void 0!=e)for(var s=0;s<e.length;s++)this.pintar(e[s])}},t.prototype.actualizar=function(t,i){var e=this.dictViews[t];e.update(i);var s=this.dictRelViews[t];if(void 0!=s)for(var n=0;n<s.length;n++)this.actualizar(s[n],e)},t.prototype.setViewVisibility=function(t,i){this.dictViews[t].blVisible=i;var e=this.dictRelViews[t];if(void 0!=e)for(var s=0;s<e.length;s++)this.setViewVisibility(e[s],i)},t}(),m=function(){function t(){this.nScreenWidth=0,this.nScreenHeight=0,this.nScreenWidth2=0,this.nScreenHeight2=0,this.initScreenSize()}return t.prototype.initScreenSize=function(){var t=0,i=0;"number"==typeof window.innerWidth?(t=window.innerWidth,i=window.innerHeight):document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)?(t=document.documentElement.clientWidth,i=document.documentElement.clientHeight):document.body&&(document.body.clientWidth||document.body.clientHeight)&&(t=document.body.clientWidth,i=document.body.clientHeight),this.nScreenWidth=.99*t,this.nScreenHeight=.96*i,this.nScreenWidth2=this.nScreenWidth>>1,this.nScreenHeight2=this.nScreenHeight>>1},t}();m.instance=new m;var w=function(){function t(){this.arListeners=[],this.blIsMouseClickRegistered=!1,this.arViewsForMouseClick=[],window.addEventListener("resize",this.screenSizeResized)}return t.prototype.addListener=function(t){-1==this.arListeners.indexOf(t)&&this.arListeners.push(t)},t.prototype.addMouseClickToView=function(t){0==this.blIsMouseClickRegistered&&(this.blIsMouseClickRegistered=!0,window.addEventListener("click",this.mouseClick)),-1==this.arViewsForMouseClick.indexOf(t)&&this.arViewsForMouseClick.push(t)},t.prototype.mouseClick=function(i){for(var e=null,s=0;s<t.instance.arViewsForMouseClick.length;s++){var n=t.instance.arViewsForMouseClick[s];n.checkPointInView(i.pageX,i.pageY)&&(e=n)}null!=e&&e.mouseClicked(i)},t.prototype.screenSizeResized=function(){m.instance.initScreenSize();for(var i=0;i<t.instance.arListeners.length;i++)t.instance.arListeners[i].screenSizeChanged(m.instance.nScreenWidth,m.instance.nScreenHeight)},t}();w.instance=new w;var f=function(){function t(){}return t.newGuid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var i=16*Math.random()|0;return("x"==t?i:3&i|8).toString(16)})},t}(),g=function(){function t(t,i,e,s,n){this.xa=0,this.ya=0,this.blVisible=!0,this.x=i,this.y=e,this.w=s,this.h=n,this.motor=t,this.uid=f.newGuid(),this.initFinish()}return t.prototype.initFinish=function(){},t.prototype.paint=function(t){},t.prototype.update=function(t){null!=t&&(this.xa=this.x+t.xa,this.ya=this.y+t.ya)},t.prototype.setSize=function(t,i){this.w=t,this.h=i},t.prototype.checkPointInView=function(t,i){var e=!1;return this.xa<t&&t<this.xa+this.w&&this.ya<i&&i<this.ya+this.h&&this.blVisible&&(e=!0),e},t.prototype.mouseClicked=function(t){},t}(),z=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var e in i)i.hasOwnProperty(e)&&(t[e]=i[e])};return function(i,e){function s(){this.constructor=i}t(i,e),i.prototype=null===e?Object.create(e):(s.prototype=e.prototype,new s)}}(),P=function(t){function i(){var i=null!==t&&t.apply(this,arguments)||this;return i.sColor=null,i}return z(i,t),i.prototype.setColor=function(t){this.sColor=t},i.prototype.paint=function(t){null!=this.sColor&&(t.fillStyle=this.sColor,t.fillRect(this.x,this.y,this.w,this.h))},i}(g),y=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var e in i)i.hasOwnProperty(e)&&(t[e]=i[e])};return function(i,e){function s(){this.constructor=i}t(i,e),i.prototype=null===e?Object.create(e):(s.prototype=e.prototype,new s)}}(),x=function(t){function i(i,e,s,n,o){var r=t.call(this,i,e,s,n,o)||this;return r.blImgLoaded=!1,r.imgBack=new Image,r.imgBack.onload=function(){return r.imageReady(r)},r}return y(i,t),i.prototype.isImgLoaded=function(){return this.blImgLoaded},i.prototype.setImg=function(t){this.imgBack.src=t},i.prototype.imageReady=function(t){this.blImgLoaded=!0},i.prototype.paint=function(t){this.blImgLoaded&&t.drawImage(this.imgBack,this.xa,this.ya,this.w,this.h)},i}(g),V=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var e in i)i.hasOwnProperty(e)&&(t[e]=i[e])};return function(i,e){function s(){this.constructor=i}t(i,e),i.prototype=null===e?Object.create(e):(s.prototype=e.prototype,new s)}}(),_=function(t){function i(i,e,s,n,o){var r=t.call(this,i,e,s,n,o)||this;return r.sColor=null,r.sTexto=null,r.sFontColor="black",r.sAlign="center",r.sBaseLine="top",r.nXText=0,r.nYText=0,r.setTextAttrs("center","middle"),r}return V(i,t),i.prototype.setColor=function(t){this.sColor=t},i.prototype.setTextAttrs=function(t,i){this.sAlign=t,this.sBaseLine=i,"center"==this.sAlign?this.nXText=this.w>>1:"right"==this.sAlign&&(this.nXText=this.w),"top"==this.sBaseLine?this.nYText=0:"middle"==this.sBaseLine?this.nYText=this.h>>1:"bottom"==this.sBaseLine&&(this.nYText=this.h)},i.prototype.setFontStyle=function(t){this.sFontStyle=t},i.prototype.setFontColor=function(t){this.sFontColor=t},i.prototype.paint=function(t){null!=this.sColor&&(t.fillStyle=this.sColor,t.fillRect(this.xa,this.ya,this.w,this.h)),null!=this.sTexto&&(null!=this.sFontStyle&&(t.font=this.sFontStyle),t.fillStyle=this.sFontColor,t.textAlign=this.sAlign,t.textBaseline=this.sBaseLine,t.fillText(this.sTexto,this.xa+this.nXText,this.ya+this.nYText))},i.prototype.setTexto=function(t){this.sTexto=t},i.prototype.getTexto=function(){return this.sTexto},i}(g),S=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var e in i)i.hasOwnProperty(e)&&(t[e]=i[e])};return function(i,e){function s(){this.constructor=i}t(i,e),i.prototype=null===e?Object.create(e):(s.prototype=e.prototype,new s)}}(),b=function(t){function i(i,e,s,n,o,r){var a=t.call(this,i,e,s,n,o)||this;return a.imgBack=null,a.lblTexto=null,a.imgBack=new x(a.motor,0,0,a.w,a.h),a.motor.addViewToParentView(a,a.imgBack),"iz"==r?a.imgBack.setImg("./assets/fichaiz.png"):a.imgBack.setImg("./assets/fichadc.png"),a.lblTexto=new _(a.motor,0,0,a.w,a.h),a.lblTexto.setTexto("Boton"),a.motor.addViewToParentView(a,a.lblTexto),w.instance.addMouseClickToView(a),a}return S(i,t),i.prototype.setTexto=function(t){this.lblTexto.setTexto(t)},i.prototype.getTexto=function(){return this.lblTexto.getTexto()},i.prototype.setListener=function(t){this.listener=t},i.prototype.mouseClicked=function(t){null!=this.listener&&void 0!=this.listener.piezaListenerOnClick&&this.listener.piezaListenerOnClick(this)},i}(g),j=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var e in i)i.hasOwnProperty(e)&&(t[e]=i[e])};return function(i,e){function s(){this.constructor=i}t(i,e),i.prototype=null===e?Object.create(e):(s.prototype=e.prototype,new s)}}(),v=function(t){function i(i,e,s,n,o){var r=t.call(this,i,e,s,n,o)||this;return r.sColor=null,r.pzSalir=null,r.pzSalir=new b(r.motor,.85*m.instance.nScreenWidth,0,.15*m.instance.nScreenWidth,.1*m.instance.nScreenHeight,"iz"),r.motor.addViewToParentView(r,r.pzSalir),r.pzSalir.setTexto("Salir"),r}return j(i,t),i.prototype.paint=function(t){},i}(g),T=function(){function t(t){this.posPareja1=-1,this.posPareja2=-1,this.posPrimera=-1,this.posSegunda=-1,this.numAciertos=0,this.motor=t,this.imagenFondo=new x(this.motor,0,0,m.instance.nScreenWidth,m.instance.nScreenHeight),this.imagenFondo.setImg("./assets/fondo.jpg"),this.motor.setRaiz(this.imagenFondo),this.window=new v(this.motor,0,0,m.instance.nScreenWidth,m.instance.nScreenHeight),this.window.pzSalir.setListener(this),this.crearEscenarioMenu(),this.crearEscenarioJuego()}return t.prototype.crearEscenarioMenu=function(){var t=.6*m.instance.nScreenWidth,i=.6*m.instance.nScreenHeight,e=m.instance.nScreenWidth2-(t>>1),s=m.instance.nScreenHeight2-(i>>1);this.panelMenu=new P(this.motor,e,s,t,i),this.motor.addViewToParentView(this.imagenFondo,this.panelMenu),this.pzInicio=new b(this.motor,this.panelMenu.w/3,0,this.panelMenu.w/3,this.panelMenu.h/3,"iz"),this.motor.addViewToParentView(this.panelMenu,this.pzInicio),this.pzInicio.setTexto("Inicio"),this.pzInicio.setListener(this),this.pzSalir=new b(this.motor,this.panelMenu.w/3,this.panelMenu.h/3*2,this.panelMenu.w/3,this.panelMenu.h/3,"dc"),this.motor.addViewToParentView(this.panelMenu,this.pzSalir),this.pzSalir.setTexto("Salir"),this.pzSalir.setListener(this),this.motor.addViewToParentView(this.imagenFondo,this.window),this.motor.setViewVisibility(this.window.uid,!1)},t.prototype.crearEscenarioJuego=function(){this.arParejas=new Array,this.piezaIz1=new b(this.motor,.2*m.instance.nScreenWidth,.7*m.instance.nScreenHeight,this.panelMenu.w/3,this.panelMenu.h/3,"dc"),this.piezaDc1=new b(this.motor,.7*m.instance.nScreenWidth,.7*m.instance.nScreenHeight,this.panelMenu.w/3,this.panelMenu.h/3,"iz"),this.motor.addViewToParentView(this.window,this.piezaIz1),this.motor.addViewToParentView(this.window,this.piezaDc1),this.piezaIz1.setListener(this),this.piezaDc1.setListener(this),this.piezaIz2=new b(this.motor,.2*m.instance.nScreenWidth,.5*m.instance.nScreenHeight,this.panelMenu.w/3,this.panelMenu.h/3,"dc"),this.piezaDc2=new b(this.motor,.7*m.instance.nScreenWidth,.5*m.instance.nScreenHeight,this.panelMenu.w/3,this.panelMenu.h/3,"iz"),this.motor.addViewToParentView(this.window,this.piezaIz2),this.motor.addViewToParentView(this.window,this.piezaDc2),this.piezaIz2.setListener(this),this.piezaDc2.setListener(this),this.piezaIz3=new b(this.motor,.2*m.instance.nScreenWidth,.3*m.instance.nScreenHeight,this.panelMenu.w/3,this.panelMenu.h/3,"dc"),this.piezaDc3=new b(this.motor,.7*m.instance.nScreenWidth,.3*m.instance.nScreenHeight,this.panelMenu.w/3,this.panelMenu.h/3,"iz"),this.motor.addViewToParentView(this.window,this.piezaIz3),this.motor.addViewToParentView(this.window,this.piezaDc3),this.piezaIz3.setListener(this),this.piezaDc3.setListener(this),this.imagen1=new x(this.motor,.3*m.instance.nScreenWidth,0,.2*m.instance.nScreenWidth,.2*m.instance.nScreenHeight),this.imagen1.setImg("./assets/imagen1.jpg"),this.motor.addViewToParentView(this.window,this.imagen1),this.imagen2=new x(this.motor,.55*m.instance.nScreenWidth,0,.2*m.instance.nScreenWidth,.2*m.instance.nScreenHeight),this.imagen2.setImg("./assets/imagen2.jpg"),this.motor.addViewToParentView(this.window,this.imagen2),this.imagen3=new x(this.motor,.15*m.instance.nScreenWidth,0,.1*m.instance.nScreenWidth,.2*m.instance.nScreenHeight),this.imagen3.setImg("./assets/imagen3.jpg"),this.motor.addViewToParentView(this.window,this.imagen3),this.txtAciertos=new _(this.motor,.5*m.instance.nScreenWidth,.5*m.instance.nScreenHeight,this.panelMenu.w/3,this.panelMenu.h/3),this.motor.addViewToParentView(this.window,this.txtAciertos),this.txtAciertos.setTexto(""),this.arParejas=new Array;var t=["He is","playing with toys"];this.arParejas[0]=t,t=["He likes","to swim"],this.arParejas[1]=t,t=["He loves","to eat pizza"],this.arParejas[2]=t},t.prototype.Aleatorio=function(){for(var t=!1,i=!1,e=!1,s=0;s<this.arParejas.length;s++){var n=Math.floor(3*Math.random())+1;1!=n||t?2!=n||i?3!=n||e?s--:(this.piezaIz3.setTexto(this.arParejas[s][0]),e=!0):(this.piezaIz2.setTexto(this.arParejas[s][0]),i=!0):(this.piezaIz1.setTexto(this.arParejas[s][0]),t=!0)}t=!1,i=!1,e=!1;for(var s=0;s<this.arParejas.length;s++){var n=Math.floor(3*Math.random())+1;1!=n||t?2!=n||i?3!=n||e?s--:(this.piezaDc3.setTexto(this.arParejas[s][1]),e=!0):(this.piezaDc2.setTexto(this.arParejas[s][1]),i=!0):(this.piezaDc1.setTexto(this.arParejas[s][1]),t=!0)}},t.prototype.screenSizeChanged=function(t,i){console.log("SE HA ACTUALIZADO EL TEMA\xd1O DE LA PANTALLA")},t.prototype.comprobar=function(){0==this.posPrimera?this.arParejas[this.posPareja1][1]==this.arParejas[this.posPareja2][this.posSegunda]?(this.motor.setViewVisibility(this.primeraPieza.uid,!1),this.motor.setViewVisibility(this.segundaPieza.uid,!1),this.numAciertos++,0==this.posPareja1?this.motor.setViewVisibility(this.imagen1.uid,!1):1==this.posPareja1?this.motor.setViewVisibility(this.imagen2.uid,!1):2==this.posPareja1&&this.motor.setViewVisibility(this.imagen3.uid,!1),this.posPareja1=-1,this.posPareja2=-1,this.posPrimera=-1,this.posSegunda=-1,3==this.numAciertos&&(this.motor.setViewVisibility(this.window.uid,!1),this.imagenFondo.setImg("./assets/win.png")),this.txtAciertos.setTexto("")):(this.txtAciertos.setTexto("Are you sure? Try again :)"),this.txtAciertos.setFontColor("#ff0000")):1==this.posPrimera&&(this.arParejas[this.posPareja1][0]==this.arParejas[this.posPareja2][this.posSegunda]?(this.motor.setViewVisibility(this.primeraPieza.uid,!1),this.motor.setViewVisibility(this.segundaPieza.uid,!1),this.numAciertos++,0==this.posPareja1?this.motor.setViewVisibility(this.imagen1.uid,!1):1==this.posPareja1?this.motor.setViewVisibility(this.imagen2.uid,!1):2==this.posPareja1&&this.motor.setViewVisibility(this.imagen3.uid,!1),this.posPareja1=-1,this.posPareja2=-1,this.posPrimera=-1,this.posSegunda=-1,3==this.numAciertos&&(this.motor.setViewVisibility(this.window.uid,!1),this.imagenFondo.setImg("./assets/win.png")),this.txtAciertos.setTexto("")):(this.txtAciertos.setTexto("Are you sure? Try again :)"),this.txtAciertos.setFontColor("#ff0000")))},t.prototype.piezaListenerOnClick=function(t){if(t==this.piezaDc1)for(var i=0;i<this.arParejas.length;i++){var e=this.piezaDc1.getTexto(),s=this.arParejas[i].indexOf(e);0==s?this.posPrimera<0?(this.posPrimera=0,this.posPareja1=i,this.primeraPieza=this.piezaDc1):this.posPrimera>=0&&(this.posSegunda=0,this.posPareja2=i,this.segundaPieza=this.piezaDc1,this.comprobar()):1==s&&(this.posPrimera<0?(this.posPrimera=1,this.posPareja1=i,this.primeraPieza=this.piezaDc1):this.posPrimera>=0&&(this.posSegunda=1,this.posPareja2=i,this.segundaPieza=this.piezaDc1,this.comprobar()))}else if(t==this.piezaDc2)for(var i=0;i<this.arParejas.length;i++){var e=this.piezaDc2.getTexto(),s=this.arParejas[i].indexOf(e);0==s?this.posPrimera<0?(this.posPrimera=0,this.posPareja1=i,this.primeraPieza=this.piezaDc2):this.posPrimera>=0&&(this.posSegunda=0,this.posPareja2=i,this.segundaPieza=this.piezaDc2,this.comprobar()):1==s&&(this.posPrimera<0?(this.posPrimera=1,this.posPareja1=i,this.primeraPieza=this.piezaDc2):this.posPrimera>=0&&(this.posSegunda=1,this.posPareja2=i,this.segundaPieza=this.piezaDc2,this.comprobar()))}else if(t==this.piezaDc3)for(var i=0;i<this.arParejas.length;i++){var e=this.piezaDc3.getTexto(),s=this.arParejas[i].indexOf(e);0==s?this.posPrimera<0?(this.posPrimera=0,this.posPareja1=i,this.primeraPieza=this.piezaDc3):this.posPrimera>=0&&(this.posSegunda=0,this.posPareja2=i,this.segundaPieza=this.piezaDc3,this.comprobar()):1==s&&(this.posPrimera<0?(this.posPrimera=1,this.posPareja1=i,this.primeraPieza=this.piezaDc3):this.posPrimera>=0&&(this.posSegunda=1,this.posPareja2=i,this.segundaPieza=this.piezaDc3,this.comprobar()))}else if(t==this.piezaIz1)for(var i=0;i<this.arParejas.length;i++){var e=this.piezaIz1.getTexto(),s=this.arParejas[i].indexOf(e);0==s?this.posPrimera<0?(this.posPrimera=0,this.posPareja1=i,this.primeraPieza=this.piezaIz1):this.posPrimera>=0&&(this.posSegunda=0,this.posPareja2=i,this.segundaPieza=this.piezaIz1,this.comprobar()):1==s&&(this.posPrimera<0?(this.posPrimera=1,this.posPareja1=i,this.primeraPieza=this.piezaIz1):this.posPrimera>=0&&(this.posSegunda=1,this.posPareja2=i,this.segundaPieza=this.piezaIz1,this.comprobar()))}else if(t==this.piezaIz2)for(var i=0;i<this.arParejas.length;i++){var e=this.piezaIz2.getTexto(),s=this.arParejas[i].indexOf(e);0==s?this.posPrimera<0?(this.posPrimera=0,this.posPareja1=i,this.primeraPieza=this.piezaIz2):this.posPrimera>=0&&(this.posSegunda=0,this.posPareja2=i,this.segundaPieza=this.piezaIz2,this.comprobar()):1==s&&(this.posPrimera<0?(this.posPrimera=1,this.posPareja1=i,this.primeraPieza=this.piezaIz2):this.posPrimera>=0&&(this.posSegunda=1,this.posPareja2=i,this.segundaPieza=this.piezaIz2,this.comprobar()))}else if(t==this.piezaIz3)for(var i=0;i<this.arParejas.length;i++){var e=this.piezaIz3.getTexto(),s=this.arParejas[i].indexOf(e);0==s?this.posPrimera<0?(this.posPrimera=0,this.posPareja1=i,this.primeraPieza=this.piezaIz3):this.posPrimera>=0&&(this.posSegunda=0,this.posPareja2=i,this.segundaPieza=this.piezaIz3,this.comprobar()):1==s&&(this.posPrimera<0?(this.posPrimera=1,this.posPareja1=i,this.primeraPieza=this.piezaIz3):this.posPrimera>=0&&(this.posSegunda=1,this.posPareja2=i,this.segundaPieza=this.piezaIz3,this.comprobar()))}else t==this.pzInicio?(this.Aleatorio(),this.motor.setViewVisibility(this.panelMenu.uid,!1),this.motor.setViewVisibility(this.window.uid,!0)):t==this.pzSalir?(this.motor.setViewVisibility(this.panelMenu.uid,!1),this.imagenFondo.setImg("./assets/findejuego.jpg")):t==this.window.pzSalir&&(this.motor.setViewVisibility(this.window.uid,!1),this.motor.setViewVisibility(this.panelMenu.uid,!0),this.posPareja1=-1,this.posPareja2=-1,this.posPrimera=-1,this.posSegunda=-1,this.motor.setViewVisibility(this.piezaDc1.uid,!0),this.motor.setViewVisibility(this.piezaDc2.uid,!0),this.motor.setViewVisibility(this.piezaDc3.uid,!0),this.motor.setViewVisibility(this.piezaIz1.uid,!0),this.motor.setViewVisibility(this.piezaIz2.uid,!0),this.motor.setViewVisibility(this.piezaIz3.uid,!0),this.motor.setViewVisibility(this.imagen1.uid,!0),this.motor.setViewVisibility(this.imagen2.uid,!0),this.motor.setViewVisibility(this.imagen3.uid,!0),this.numAciertos=0)},t}(),I=function(){function t(t){this.ngZone=t}return t.prototype.ngOnInit=function(){m.instance.initScreenSize(),w.instance.addListener(this),this.mcnv.nativeElement.width=m.instance.nScreenWidth,this.mcnv.nativeElement.height=m.instance.nScreenHeight,this.contexto=this.mcnv.nativeElement.getContext("2d"),this.miMotor=new d(this.contexto,this.ngZone),this.miMotor.start(),this.actividad1=new T(this.miMotor)},t.prototype.screenSizeChanged=function(t,i){this.mcnv.nativeElement.width=m.instance.nScreenWidth,this.mcnv.nativeElement.height=m.instance.nScreenHeight},t.ctorParameters=function(){return[{type:a.z}]},t}(),M=[l],A=a._0({encapsulation:0,styles:M,data:{}}),D=(a.Y("app-micanvas",I,n,{},{},[]),[u]),C=a._0({encapsulation:0,styles:D,data:{}}),L=a.Y("app-root",p,r,{},{},[]),O=e("qbdv"),k=e("fc+i"),W=a.Z(c,[p],function(t){return a._12([a._13(512,a.i,a.W,[[8,[L]],[3,a.i],a.x]),a._13(5120,a.v,a._11,[[3,a.v]]),a._13(4608,O.d,O.c,[a.v]),a._13(4608,a.h,a.h,[]),a._13(5120,a.a,a._4,[]),a._13(5120,a.t,a._9,[]),a._13(5120,a.u,a._10,[]),a._13(4608,k.b,k.s,[O.b]),a._13(6144,a.H,null,[k.b]),a._13(4608,k.e,k.f,[]),a._13(5120,k.c,function(t,i,e,s){return[new k.k(t),new k.o(i),new k.n(e,s)]},[O.b,O.b,O.b,k.e]),a._13(4608,k.d,k.d,[k.c,a.z]),a._13(135680,k.m,k.m,[O.b]),a._13(4608,k.l,k.l,[k.d,k.m]),a._13(6144,a.F,null,[k.l]),a._13(6144,k.p,null,[k.m]),a._13(4608,a.L,a.L,[a.z]),a._13(4608,k.g,k.g,[O.b]),a._13(4608,k.i,k.i,[O.b]),a._13(512,O.a,O.a,[]),a._13(1024,a.l,k.q,[]),a._13(1024,a.b,function(t,i){return[k.r(t,i)]},[[2,k.h],[2,a.y]]),a._13(512,a.c,a.c,[[2,a.b]]),a._13(131584,a._2,a._2,[a.z,a.X,a.r,a.l,a.i,a.c]),a._13(2048,a.e,null,[a._2]),a._13(512,a.d,a.d,[a.e]),a._13(512,k.a,k.a,[[3,k.a]]),a._13(512,c,c,[])])});h.production&&Object(a.R)(),Object(k.j)().bootstrapModuleFactory(W).catch(function(t){return console.log(t)})},gFIY:function(t,i){function e(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id="gFIY"}},[0]);