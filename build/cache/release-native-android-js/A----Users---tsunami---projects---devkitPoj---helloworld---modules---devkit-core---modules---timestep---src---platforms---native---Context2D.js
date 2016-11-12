fdd7ac9c985731c1c53382e1168a1cd6
/*

 This file is part of the Game Closure SDK.

 The Game Closure SDK is free software: you can redistribute it and/or modify
 it under the terms of the Mozilla Public License v. 2.0 as published by Mozilla.

 The Game Closure SDK is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 Mozilla Public License v. 2.0 for more details.

 You should have received a copy of the Mozilla Public License v. 2.0
 along with the Game Closure SDK.  If not, see <http://mozilla.org/MPL/2.0/>.
*/
jsio("import std.uri");jsio("import lib.Enum as Enum");jsio("import util.setProperty");jsio("import .BufferedCanvas");jsio("import device");jsio("import .FontRenderer");jsio("import ui.resource.Font as Font");var _createdOnscreenCanvas=!1,Users_tsunami_projects_devkitPoj_helloworld_modules_devkit_core_modules_timestep_src_platforms_native_Context2D=__class__;
exports=Users_tsunami_projects_devkitPoj_helloworld_modules_devkit_core_modules_timestep_src_platforms_native_Context2D(function(){return this.init&&this.init.apply(this,arguments)},BufferedCanvas,function(m){this.updateState=function(a,b){b.font=a.font;b.textAlign=a.textAlign;b.textBaseline=a.textBaseline;b.fillStyle=a.fillStyle;b.strokeStyle=a.strokeStyle;return b};this.init=function(a){m(this,"init",arguments);this._stack=[];this._stackPos=0;a=merge(a,{width:480,height:320,offscreen:!0});this.unloadListener=
a.unloadListener;_createdOnscreenCanvas&&(a.offscreen=!0);this.canvas=a.canvas||{width:a.width,height:a.height};(this._isOffscreen=a.offscreen)||(_createdOnscreenCanvas=!0);this.resize(this.canvas.width,this.canvas.height);for(var b=0;64>b;b++)this._stack[b]=this.updateState(this,{})};this.destroy=function(){this.canvas._src&&(NATIVE.gl.forgetCanvas(this.canvas._src),this._isOffscreen&&(this._ctx=null,NATIVE.gl.deleteTexture(this.canvas._src)))};this.resize=function(a,b){this.canvas._width=a;this.canvas._height=
b;if(this._isOffscreen){var c;this._ctx?(c=this._ctx.resize(a,b),this.canvas._src!=c._src&&(NATIVE.gl.updateCanvasURL(this.canvas._src,c._src),this.canvas.__gl_name=c.__gl_name,this.canvas._src=c._src)):(c=NATIVE.gl.makeCanvas(a,b,this.unloadListener),this.canvas.__gl_name=c.__gl_name,this.canvas._src=c._src,this._ctx=new NATIVE.gl.Context2D(this.canvas,this.canvas._src,this.canvas.__gl_name))}else this._ctx||(this.canvas.__gl_name=-1,this.canvas._src="onscreen",this._ctx=new NATIVE.gl.Context2D(this.canvas,
this.canvas._src,this.canvas.__gl_name))};this.getNativeCtx=function(){return this._ctx};this.getElement=function(){return this.canvas};this.font="10px "+device.defaultFontFamily;this.textAlign="start";this.textBaseline="alphabetic";this.fillStyle="rgb(255,255,255)";this.strokeStyle="rgb(0,0,0)";this.show=function(){};this.hide=function(){};this.clear=function(){this._ctx.clear()};this.swap=function(){NATIVE.gl.flushImages()};this.loadIdentity=function(){this._ctx.loadIdentity()};this.save=function(){this._stack.length<=
this._stackPos&&(logger.LOG&&console.log("LOG",".Context2D","expanding stack"),this._stack.push({}));this.updateState(this,this._stack[this._stackPos++]);this._ctx.save()};this.restore=function(){this._ctx.restore();this.updateState(this._stack[this._stackPos--],this)};this.clipRect=function(a,b,c,d){this._ctx.enableScissor(a,b,c,d)};this.drawImage=function(a,b,c,d,e,g,k,h,i){if(a&&a.complete){var f=arguments.length;3==f?this._ctx.drawImage(a.__gl_name,a._src,0,0,a.width,a.height,b,c,a.width,a.height):
5==f?this._ctx.drawImage(a.__gl_name,a._src,0,0,a.width,a.height,b,c,d,e):this._ctx.drawImage(a.__gl_name,a._src,b,c,d,e,g,k,h,i)}};this.translate=function(a,b){this._ctx.translate(a,b)};this.rotate=function(a){this._ctx.rotate(a)};this.scale=function(a,b){this._ctx.scale(a,b)};this.setFilter=function(a){this._ctx.addFilter(a.getType(),a.get())};this.setFilters=function(a){logger.WARN&&console.warn("WARN",".Context2D","ctx.setFilters is deprecated, use ctx.setFilter instead.");for(var b in a)this._ctx.addFilter(b,
a[b].get())};this.clearFilter=function(){this._ctx.clearFilters()};this.clearFilters=function(){logger.WARN&&console.warn("WARN",".Context2D","ctx.clearFilters is deprecated, use ctx.clearFilter instead.");this._ctx.clearFilters()};this.setTransform=function(a,b,c,d,e,g){this._ctx.setTransform(a,b,c,d,e,g)};util.setProperty(this,"globalAlpha",{get:function(){return this._ctx.getGlobalAlpha()},set:function(a){return this._ctx.setGlobalAlpha(a)}});var l=new Enum({"source-atop":1337,"source-in":1338,
"source-out":1339,"source-over":1340,"destination-atop":1341,"destination-in":1342,"destination-out":1343,"destination-over":1344,lighter:1345,xor:1346,copy:1347});util.setProperty(this,"globalCompositeOperation",{get:function(){return l[this._ctx.getGlobalCompositeOperation()]},set:function(a){return this._ctx.setGlobalCompositeOperation(l[a.toLowerCase()])}});this.clearRect=function(a,b,c,d){this._ctx.clearRect(a,b,c,d)};this.fillRect=function(a,b,c,d){if("object"==typeof this.fillStyle){var e=
this.fillStyle.img,g=e.width,k=e.height,h,i,f,j;switch(this.fillStyle.repeatPattern){case "repeat":for(f=0;f<c;f+=g){h=Math.min(g,c-f);for(j=b;j<d;j+=k)i=Math.min(k,d-j),this._ctx.drawImage(e.__gl_name,e._src,0,0,h,i,a+f,b+j,h,i)}break;case "repeat-x":for(f=0;f<c;f+=g)h=Math.min(g,c-f),this._ctx.drawImage(e.__gl_name,e._src,0,0,h,i,a+f,b,h,i);break;case "repeat-y":for(j=0;j<d;j+=k)i=Math.min(k,d-j),this._ctx.drawImage(e.__gl_name,e._src,0,0,h,i,a,b+j,h,i);break;default:h=Math.min(g,c),i=Math.min(k,
d),this._ctx.drawImage(e.__gl_name,e._src,0,0,h,i,a,b,h,i)}}else this._ctx.fillRect(a,b,c,d,this.fillStyle)};this.strokeRect=function(a,b,c,d){this._ctx.strokeRect(a,b,c,d,this.strokeStyle,this.lineWidth||1)};this.createPattern=function(a,b){return{img:a,repeatPattern:b}};this._checkPath=function(){this._path||(this._path=[]);void 0===this._pathIndex&&(this._pathIndex=0);return 0<this._pathIndex};this.beginPath=function(){this._pathIndex=0};this.moveTo=this.lineTo=function(a,b){this._checkPath();
this._path[this._pathIndex]={x:a,y:b};this._pathIndex++};this.pointSprite=null;this.pointSpriteStep=2;this.drawPointSprites=function(a,b,c,d){this._ctx.drawPointSprites(this.pointSprite.src,this.lineWidth||5,this.pointSpriteStep||2,this.strokeStyle,a,b,c,d)};this.closePath=function(){};this.fill=function(){this._checkPath()&&this._ctx.fill(this._path,this._pathIndex,this.fillStyle)};this.stroke=function(){this._checkPath()&&this._ctx.stroke(this._path,this._pathIndex,this.strokeStyle)};var n=window.Uint8ClampedArray||
window.CanvasPixelArray||window.Uint8Array||window.Array;this.createImageData=function(a,b){"object"===typeof a&&"width"in a&&(b=a.height,a=a.width);return{width:a,height:b,data:new n(a*b)}};this.fillText=FontRenderer.wrapFillText(function(a,b,c,d){var e=Font.parse(this.font),g=e.getName();this._ctx.fillText(a+"",b,c,d||0,this.fillStyle,e.getSize(),g,this.textAlign,this.textBaseline)});this.fill=function(){};this.stroke=function(){};this.strokeText=FontRenderer.wrapStrokeText(function(a,b,c,d){var e=
Font.parse(this.font),g=e.getName();this._ctx.strokeText(a+"",b,c,d||0,this.strokeStyle,e.getSize(),g,this.textAlign,this.textBaseline,this.lineWidth)});this.measureText=FontRenderer.wrapMeasureText(function(a){var b=Font.parse(this.font),c=b.getName();return this._ctx.measureText(a+"",b.getSize(),b.getWeight()+" "+c)})});
