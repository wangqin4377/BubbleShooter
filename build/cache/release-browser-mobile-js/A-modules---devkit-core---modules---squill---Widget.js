f7ff13d53213aac7e4d2e29cf085d342
jsio("from util.browser import $");jsio("import .Element, .Events, .global");jsio("import .i18n");jsio("import .Delegate");jsio("import .models.Model as Model");jsio("import .models.bindings as bindings");jsio("import .transitions");jsio("from .__imports__ import classes as WIDGET_CLASSES");var uid=0;function shallowCopy(e){var a={},b;for(b in e)e.hasOwnProperty(b)&&(a[b]=e[b]);return a}
var WidgetSet=__class__,WidgetSet=WidgetSet(function(){return this.init&&this.init.apply(this,arguments)},function(){this.init=function(e){this._target=e;this.events=[]};this.getTarget=function(){return this._target};this.hasWidget=function(e){return!!this._target[e]};this.addWidget=function(e,a){this._target[e]=a};this.addSubscription=function(e,a){this._target.dispatchEvent&&e.subscribe.apply(e,[a,this._target,"dispatchEvent",e.getId()].concat(Array.prototype.slice.call(arguments,2)))}}),modules_devkit_core_modules_squill_Widget=
__class__,Widget=exports=modules_devkit_core_modules_squill_Widget(function(){return this.init&&this.init.apply(this,arguments)},[Element,Events],function(){function e(a){a=$.id(a);a.parentNode.insertBefore(this._el,a);a.parentNode.removeChild(a)}this._css="widget";this._name="";this.__getDef__=function(){function a(a){for(var b in a)"attrs"==b||"style"==b?d[b]=merge(d[b],a[b]):"className"==b&&d.className?d.className=a.className+" "+d.className:"children"==b?d.children?d.children.push(a.children):
d.children=[a.children]:d.hasOwnProperty(b)||(d[b]=a[b])}var b=this.constructor,d={};do b.prototype.hasOwnProperty("_def")&&a(b.prototype._def);while(b=b.prototype.__parentClass__);this.hasOwnProperty("_def")&&a(this._def);return d};this.init=function(a){a=a||{};this._children=[];var b=this._def=this.__getDef__();this._id=b.id;this.__model=new Model(a.model||b.model);b.className&&(a.className=a.className?a.className+" "+b.className:b.className);b.attrs&&(a.attrs=merge(a.attrs,b.attrs));b.style&&(a.style=
merge(a.style,b.style));this._opts=a;for(var d in b)"children"!=d&&(!a.hasOwnProperty(d)&&b.hasOwnProperty(d))&&(a[d]=b[d]);a.name&&(this._name=a.name);a.delegate&&(this.delegate=a.delegate);var c;a.widgetParent&&(c=a.widgetParent);this.controller=a.controller||c;a.parent&&(b=a.parent,b instanceof Widget?(c||(c=a.parent),a.parent=b.getContainer()):b.appendChild||delete a.parent);c?c.addWidget(this):(a.parent||a.el)&&this.build(a.el)};this.getOpts=function(){return this._opts};this.getId=function(){return this._id||
this._el&&this._el.id};this.build=function(a){if(!this._el||this._el!=a){var a=this._opts,b=a.children;b&&delete a.children;this._el=$.create(this._opts);b&&(a.children=b);this.buildContent()}return this};this.getParent=function(){return this._el&&this._el.parentNode};this.getWidgetParent=function(){return this._widgetParent};this.setWidgetParent=function(a){this._widgetParent!=a&&(this._widgetParent.removeWidget(this),a.addWidget(this),this._widgetParent=a)};this.getChildren=function(){return this._children};
this.forEachDescend=function(a,b){for(var d=this._children.length,c=0;c<d;++c){var e=this._children[c];a.call(b,e);e.forEachDescend&&e.forEachDescend(a,b)}};this.getFirstChild=function(){return this._children&&this._children.length?this._children[0]:null};this.dispatchEvent=function(a,b){this.delegate.apply(this,arguments)};this.addElement=function(a){this._el.appendChild(a)};this.addChild=this.addWidget=function(a,b,d){this._el||this.build();b=a.parent||b||this.getContainer()||this._el;if(!(a instanceof
Widget)){var c=merge({},a,{parent:b,__result:d});if(c.children){var e=c.children;delete c.children}"type"in c&&!c.type&&logger.WARN&&console.warn("WARN","squill.Widget","Did you forget to provide a type?",c);!c.type||"string"==typeof c.type?WIDGET_CLASSES[c.type]?a=new (jsio("import "+WIDGET_CLASSES[c.type]))(c):d?("image"==c.type&&(c=merge({tag:"img"},c)),a=$(c)):a=new Widget(c):a=new c.type(c);d&&(c.id&&!d.hasWidget(c.id))&&d.addWidget(c.id,a)}a instanceof Widget&&(a.getWidgetParent()!=this&&((c=
a.getWidgetParent())&&c.removeWidget(this),a._widgetParent=this,a.controller||(a.controller=this),this._children.push(a)),a.getParent()!=b&&a.setParent(b));if(e)if(a.buildChildren)d||(d=new WidgetSet(a)),a.buildChildren(e,null,d);else for(b=0;c=e[b];++b)this.addWidget(c,a,d);return a};this.removeChild=function(a){a.remove&&a.remove();this.removeWidget(a)};this.removeWidget=function(a){a=this._children.indexOf(a);0<=a&&this._children.splice(a,1)};this.getContainer=function(){return this._el};this.getName=
function(){return this._name};this.setName=function(a){this._name=a};this.buildContent=function(){var a=this._opts;null!==global.getWidgetPrefix()&&$.addClass(this._el,global.getWidgetPrefix()+this._css);this.delegate||(this.delegate=new Delegate);a.errorLabel&&(this._errorLabel=$.create({html:a.errorLabel,className:global.getWidgetPrefix()+"textInputErrorLabel",parent:this._el}));var b=this._def;if(b.children)for(var d=new WidgetSet(this),c=b.children.length-1;0<=c;--c)this.buildChildren(b.children[c],
null,d);b=a.__result||d||new WidgetSet(this);a.children&&this.buildChildren(a.children,null,b);a.data&&this.setData&&bindings.parseData(this,a.data);this.buildWidget(this._el,b)};this.buildChildren=function(a,b,d){b||(b=this.getContainer()||this._el);for(var c=0,e=a.length;c<e;++c)this.addWidget(a[c],b,d)};this.buildWidget=function(){};this.errors=function(){return this.validators.map(function(a){if(!1==a.isValid)return a.message})};this.validate=function(){for(var a=!0,b=0,d=this.validators.length;b<
d;++b)var c=this.validators[b],a=a&&(c.isValid=c.call(this));return this._isValid=a};this._isValid=!0;this.isValid=function(){return this._isValid};this.validators=[];this.getI18n=function(a,b){var d=a in this._opts?this._opts:i18n.get(b||this._opts.id);return d&&d[a]||""};this.getElement=function(){this._el||this.build();return this._el};this.addClass=function(a){$.addClass(this._el,a)};this.removeClass=function(a){$.removeClass(this._el,a)};this.hasClass=function(a){return 0<=(" "+this._el.className+
" ").indexOf(a)};this.toggleClass=function(a,b){void 0===b&&(b=!this.hasClass(a));b?this.addClass(a):this.removeClass(a)};this.onBeforeShow=function(){for(var a=0,b;b=this._children[a];++a)b.onBeforeShow.apply(b,arguments)};this.onShow=function(){this._isShowing=!0;for(var a=0,b;b=this._children[a];++a)b.onShow.apply(b,arguments)};this.onBeforeHide=function(){for(var a=0,b;b=this._children[a];++a)b.onBeforeHide.apply(b,arguments)};this.onHide=function(){this._isShowing=!1;for(var a=0,b;b=this._children[a];++a)b.onHide.apply(b,
arguments)};this.isShowing=function(){return"beforeVisible"==this._visibleState||"visible"==this._visibleState};this.show=function(){this._visibleState="beforeVisible";var a=this.getElement(),a=new (this._opts.hideTransition||transitions.CSSTransition)({target:a});this.onBeforeShow&&a.on("start",bind(this,"onBeforeShow"));a.on("start",bind(this,function(){var a=this._opts&&this._opts.style,a=a&&"none"!=a.display&&a.display||"";this._el&&"beforeVisible"==this._visibleState&&(this._el.style.display=
a,"none"==getComputedStyle(this._el,"display")&&(this._el.style.display="block"),this._visibleState="visible")}));this.onShow&&a.on("end",bind(this,"onShow"));return a};this.hide=function(){this._visibleState="beforeHidden";var a=this.getElement(),b=new (this._opts.hideTransition||transitions.CSSTransition)({target:a});this.onBeforeHide&&b.on("start",bind(this,"onBeforeHide"));b.on("end",bind(this,function(){"beforeHidden"==this._visibleState&&$.hide(a)}));this.onHide&&b.on("end",bind(this,"onHide"));
return b};this.removeChildren=function(){this._children.forEach(function(a){a.remove()})};this.remove=function(){this.onBeforeHide();$.remove(this.getElement());this.onHide()};this.getModel=function(){return this.__model};this.setModel=function(a,b){1==arguments.length?this.__model.setObject(a):this.__model.set(a,b);return this};this.putHere=function(){this._el||this.build();var a="jsioWidgetId"+ ++uid;global.getTargetDocument().write('<div id="'+a+'"></div>');setTimeout(bind(this,e,a),0);return this};
this.appendTo=this.setParent=function(a){if(a=a&&(a.getContainer&&a.getContainer()||a.appendChild&&a||$.id(a)))this._el?a.appendChild(this._el):(this._opts.parent=a,this.build());return this}}),map={},lowerCaseMap={};Widget.register=function(e,a){if(a in map)throw Error("A widget with name '"+a+"' is already registered");map[a]=e;lowerCaseMap[a.toLowerCase()]=e};Widget.get=function(e){return lowerCaseMap[e.toLowerCase()]};Widget.WidgetSet=WidgetSet;
