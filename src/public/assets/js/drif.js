"use strict";!function(){var t=window.driftt=window.drift=window.driftt||[];if(!t.init){if(t.invoked)return void(window.console&&console.error&&console.error("Drift snippet included twice."));t.invoked=!0,t.methods=["identify","config","track","reset","debug","show","ping","page","hide","off","on"],t.factory=function(e){return function(){var r=Array.prototype.slice.call(arguments);return r.unshift(e),t.push(r),t}},t.methods.forEach(function(e){t[e]=t.factory(e)}),t.load=function(t){var e=3e5*Math.ceil(new Date/3e5),r=document.createElement("script");r.type="text/javascript",r.async=!0,r.crossorigin="anonymous",r.src="https://js.driftt.com/include/"+e+"/"+t+".js";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)}}}(),drift.SNIPPET_VERSION="0.3.1",drift.load("hp4fxrgr8huv");