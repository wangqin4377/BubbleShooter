55d42dea8575695c9274f323d28fe19b
jsio("from util.browser import $");jsio("import .Widget");jsio("import .hint as hint");
var Users_tsunami_projects_devkitPoj_BubbleShooter_modules_devkit_core_modules_squill_Graph=__class__,Graph=exports=Users_tsunami_projects_devkitPoj_BubbleShooter_modules_devkit_core_modules_squill_Graph(function(){return this.init&&this.init.apply(this,arguments)},Widget,function(v){this._css="cnvs";this._type="canvas";this.init=function(b){params=merge(b,{tag:"canvas"});v(this,"init",arguments);this.setSettings(b.settings||{});this._width=b.width||400;this._height=b.height||400;this._rectangles=
[];this._data=!1;$.onEvent(this._el,"mousemove",this,this._onMouseMove);$.onEvent(this._el,"mouseout",this,this._onMouseOut)};this._onMouseMove=function(b){for(var a=this._rectangles,c,d=!1,i=a.length;i;)if(c=a[--i],b.offsetX>=c.x1&&b.offsetY>=c.y1&&b.offsetX<=c.x2&&b.offsetY<=c.y2){d=!0;break}d?hint.show(b.pageX+15,b.pageY+15,c.label):hint.hide()};this._onMouseOut=function(){hint.hide()};this.buildWidget=function(){var b=this._el;this.initMouseEvents(b);this.initKeyEvents(b)};this._renderBackground=
function(b){var a=this._el,c=a.width,a=a.height;this._currentWidth=c;this._currentHeight=a;this._settings.fillColor?(b.fillStyle=this._settings.fillColor,b.fillRect(0,0,c,a)):b.clearRect(0,0,c,a)};this._calculateSegments=function(b,a){var c=this._settings,d=0,i=0,h,m=a.length,k,j;for(h=0;h<m;h++){item=a[h];i=Math.max(b.measureText(item.title).width,i);i>c.maxLabelSize&&(i=c.maxLabelSize);k=0;for(j=item.points.length;k<j;k++)d=Math.max(item.points[k],d)}c=[0.5,0.25,0.2,0.125,0.1];h=0;for(m=1;10<d/
(c[h]*m);)h++,h>=c.length&&(h=0,m*=10);d=Math.ceil(d/(c[h]*m));return{steps:d,step:c[h],max:d*c[h]*m,maxLabel:i+4,factor:m}};this._trimLabel=function(b,a,c){if(a.measureText(c).width>b.maxLabel){for(;a.measureText(c+"...").width>b.maxLabel;)c=c.substr(0,c.length-1);c+="..."}return c};this._renderHorizontalAxis=function(b,a,c){var d=this._settings,i=d.valueSpace,h=d.mainPadding,m=this._currentWidth-2*h-i,k=this._currentHeight-2*h-b.maxLabel,j=m/c.length,f,e,g,l;a.strokeStyle=d.barBackground;for(g=
0;2>g;g++)e=i+h+0.5+g*m,a.beginPath(),a.moveTo(e,h),a.lineTo(e,h+k),a.stroke();a.textAlign="right";a.textBaseline="top";g=0;for(l=c.length;g<l;g++)e=i+h+g*j,a.save(),a.rotate(-0.5*Math.PI),f=this._trimLabel(b,a,c[g].title),a.fillStyle=this._settings.textColor,a.fillText(f,-(h+k+4),e),a.restore(),0===(g&1)&&(a.fillStyle=d.barBackground,a.fillRect(e,h,j,k));a.strokeStyle=this._settings.lineColor;a.fillStyle="#000000";c=0;g=k;for(l=0;0<=g;)f=(l*b.step).toString(10),e=f.indexOf("."),-1!==e&&(e=f.length-
e-1,e>c&&(c=e)),g=Math.ceil(g-k/b.steps),l++;g=k;for(l=0;0<=g;){e=h+i;f=h+~~g+0.5;a.beginPath();a.moveTo(e,f);a.lineTo(e+m,f);a.stroke();f=(l*b.step).toString(10);if(c&&-1===f.indexOf(".")){f+=".";for(e=0;e<c;e++)f+="0"}a.fillStyle=this._settings.textColor;a.fillText(f,i+h-2,h+g-8);g=Math.ceil(g-k/b.steps);l++}a.textAlign="left";f=d.mainLabel+" x"+b.factor;g=h;l=h+k/2+(a.measureText(f).width+d.itemSize)/2;a.save();a.rotate(-0.5*Math.PI);a.fillStyle=this._settings.textColor;a.fillText(f,-l-d.itemSize,
g);a.restore();l-=a.measureText(f).width;a.beginPath();a.moveTo(g+7.5,l);a.lineTo(g+7.5,l+26);a.stroke();a.beginPath();a.moveTo(g+3.5,l+5.5);a.lineTo(g+7.5,l);a.lineTo(g+11.5,l+5.5);a.stroke()};this._renderVerticalBars=function(b,a,c){var d=this._settings,i=d.valueSpace,h=d.mainPadding,m=this._currentHeight-2*h-b.maxLabel,k=(this._currentWidth-2*h-i)/c.length,j=k-2*d.barPadding,f,e,g,l,n,p,o,t;a.globalAlpha=0.9;n=0;for(p=c.length;n<p;n++){l=c[n];f=l.points;t=f.length;f=~~(j/t);for(o=0;o<t;o++)e=l.points[o]/
b.max*m,g=i+h+n*k+d.barPadding,barY=h+m-e,a.fillStyle=d.dataColors[o%d.dataColors.length],a.fillRect(g+o*f,barY,f-1,e)}a.globalAlpha=1};this._renderVerticalPoints=function(b,a,c){var d=this._settings,i=-1!==d.types.indexOf("points"),h=-1!==d.types.indexOf("lines"),m=-1!==d.types.indexOf("area"),k=d.valueSpace,j=d.mainPadding,f=this._currentHeight-2*j-b.maxLabel,e=(this._currentWidth-2*j-k)/c.length,g=e-2*d.barPadding,l,n,p,o=[],t,s,r,q,u;pointYLast=null;r=0;for(q=c.length;r<q;r++){s=c[r];p=s.points;
t=null!==pointYLast;null===pointYLast&&(pointYLast=[]);l=~~(k+j+r*e+d.barPadding+g/2);u=0;for(p=p.length;u<p;u++)n=~~(j+f-s.points[u]/b.max*f),o[u]||(o[u]=[]),o[u].push({x:l,y:n}),a.strokeStyle=d.dataColors[u%d.dataColors.length],i&&a.strokeRect(l-4.5,n-4.5,10,10),t&&h&&(a.beginPath(),a.moveTo(pointXLast,pointYLast[u]),a.lineTo(l,n),a.stroke()),pointYLast[u]=n;pointXLast=l}if(m){a.globalAlpha=0.05;r=0;for(q=o.length;r<q;r++){a.beginPath();a.lineTo(o[r][0].x,j+f);u=0;for(p=o[r].length;u<p;u++)b=o[r][u],
a.lineTo(b.x,b.y);a.lineTo(o[r][p-1].x,j+f);a.closePath();a.fillStyle=d.dataColors[r%d.dataColors.length];a.fill()}a.globalAlpha=1}};this._renderVerticalAxis=function(b,a,c){var d=this._settings,i=d.mainPadding,h=this._currentWidth-2*i-b.maxLabel,m=this._currentHeight-2*i-d.valueSpace,k=m/c.length,j,f,e,g;a.strokeStyle=d.barBackground;for(e=0;2>e;e++)f=i+0.5+e*m,a.beginPath(),a.moveTo(i+b.maxLabel,f),a.lineTo(i+b.maxLabel+h,f),a.stroke();a.textAlign="right";a.textBaseline="top";e=0;for(g=c.length;e<
g;e++)f=i+e*k,j=this._trimLabel(b,a,c[e].title),a.fillStyle=this._settings.textColor,a.fillText(j,i+b.maxLabel-4,f+4),this._rectangles.push({x1:i+b.maxLabel-4-a.measureText(j).width,y1:f+4,x2:i+b.maxLabel-4,y2:f+20,label:c[e].title}),0===(e&1)&&(a.fillStyle=d.barBackground,a.fillRect(i+b.maxLabel,f,h,k));a.textAlign="center";a.strokeStyle=this._settings.lineColor;a.fillStyle="#000000";for(g=e=c=0;e<=h;)j=(g*b.step).toString(10),f=j.indexOf("."),-1!==f&&(f=j.length-f-1,f>c&&(c=f)),e=Math.floor(e+h/
b.steps),g++;for(g=e=0;e<=h;){j=i+b.maxLabel+~~e+0.5;f=i;a.beginPath();a.moveTo(j,f);a.lineTo(j,f+m);a.stroke();j=(g*b.step).toString(10);if(c&&-1===j.indexOf(".")){j+=".";for(f=0;f<c;f++)j+="0"}a.fillStyle=this._settings.textColor;a.fillText(j,i+b.maxLabel+e,i+m+2);e=Math.floor(e+h/b.steps);g++}a.textAlign="left";j=d.mainLabel+" x"+b.factor;e=i+h/2-(a.measureText(j).width+d.itemSize)/2+b.maxLabel;g=i+m+18;a.fillStyle=this._settings.textColor;a.fillText(j,e,g);e+=a.measureText(j).width;a.beginPath();
a.moveTo(e+4,g+7.5);a.lineTo(e+d.itemSize,g+7.5);a.stroke();a.beginPath();a.moveTo(e+d.itemSize-4,g+3.5);a.lineTo(e+d.itemSize,g+7.5);a.lineTo(e+d.itemSize-4,g+11.5);a.stroke()};this._renderHorizontalBars=function(b,a,c){var d=this._settings,i=d.mainPadding,h=this._currentWidth-2*i-b.maxLabel,m=(this._currentHeight-2*i-d.valueSpace)/c.length,k,j=m-2*d.barPadding,f,e,g,l,n,p,o,t;a.globalAlpha=0.9;n=0;for(p=c.length;n<p;n++){l=c[n];k=l.points;t=k.length;f=~~(j/t);for(o=0;o<t;o++)k=~~(l.points[o]/b.max*
h),e=b.maxLabel+i,g=~~i+n*m+d.barPadding,a.fillStyle=d.dataColors[o%d.dataColors.length],a.fillRect(e,g+o*f,k,f-1)}a.globalAlpha=1};this._renderHorizontalPoints=function(b,a,c){var d=this._settings,i=-1!==d.types.indexOf("points"),h=-1!==d.types.indexOf("lines"),m=-1!==d.types.indexOf("area"),k=d.mainPadding,j=this._currentWidth-2*k-b.maxLabel,f=(this._currentHeight-2*k-d.valueSpace)/c.length,e=f-2*d.barPadding,g,l,n,p=[],o,t,s,r,q;pointXLast=null;s=0;for(r=c.length;s<r;s++){t=c[s];n=t.points;o=null!==
pointXLast;null===pointXLast&&(pointXLast=[]);l=~~(k+s*f+d.barPadding+e/2);q=0;for(n=n.length;q<n;q++)g=~~(k+t.points[q]/b.max*j+b.maxLabel),p[q]||(p[q]=[]),p[q].push({x:g,y:l}),a.strokeStyle=d.dataColors[q%d.dataColors.length],i&&a.strokeRect(g-4.5,l-4.5,10,10),o&&h&&(a.beginPath(),a.moveTo(pointXLast[q],pointYLast),a.lineTo(g,l),a.stroke()),pointXLast[q]=g;pointYLast=l}if(m){a.globalAlpha=0.05;s=0;for(r=p.length;s<r;s++){a.beginPath();a.moveTo(k+b.maxLabel,p[s][0].y);q=0;for(n=p[s].length;q<n;q++)c=
p[s][q],a.lineTo(c.x,c.y);a.lineTo(k+b.maxLabel,p[s][n-1].y);a.closePath();a.fillStyle=d.dataColors[s%d.dataColors.length];a.fill()}a.globalAlpha=1}};this.setData=function(b){var a=this._el,c=a.getContext("2d"),d=this._settings,i=d.types,h=function(){},m=function(){},k=function(){};switch(d.orientation){case "horizontal":a.width=this._width;a.height=b.length*d.itemSize+this._settings.valueSpace;h=bind(this,this._renderVerticalAxis);m=bind(this,this._renderHorizontalBars);k=bind(this,this._renderHorizontalPoints);
break;case "vertical":a.width=b.length*d.itemSize+this._settings.valueSpace,a.height=this._height,h=bind(this,this._renderHorizontalAxis),m=bind(this,this._renderVerticalBars),k=bind(this,this._renderVerticalPoints)}c.font=d.font;this._renderBackground(c);b.length&&(a=this._calculateSegments(c,b),h(a,c,b),(-1!==i.indexOf("points")||-1!==i.indexOf("area")||-1!==i.indexOf("lines"))&&k(a,c,b),-1!==i.indexOf("bars")&&m(a,c,b));this._data=b};this.setSettings=function(b){b.mainLabel=b.mainLabel||"";b.textColor=
b.textColor||"#000000";b.fillColor=void 0===b.fillColor?"#FFFFFF":b.fillColor;b.lineColor=b.lineColor||"#000000";b.orientation=b.oriantation||"horizontal";b.types=b.types||"bars,lines,area,points";b.barPadding=b.barPadding||2;b.barBackground=b.barBackground||"#F8F8F8";b.mainPadding=b.mainPadding||10;b.valueSpace=b.valueSpace||40;b.dataColors=b.dataColors||["#DD0000","#00DD00","#0000DD"];b.font=b.font||"13px Verdana";b.maxLabelSize=b.maxLabelSize||200;b.itemSize=b.itemSize||50;this._settings=b};this.update=
function(){this._data&&this.setData(this._data)}});
