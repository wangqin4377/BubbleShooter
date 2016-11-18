1a307c41b2a9fb8cf4a89df465cadcb0
jsio("import ui.View");jsio("import ui.ImageView");jsio("import ui.TextView");jsio("import animate");jsio("import src.Bullet as Bullet");jsio("import src.Gun as Gun");jsio("import src.SoundController as sound");jsio("import src.Config as config");jsio("import math.geom.Point as Point");jsio("import ui.ParticleEngine as ParticleEngine");var Users_tsunami_projects_devkitPoj_BubbleShooter_src_GameScreen=__class__;
exports=Users_tsunami_projects_devkitPoj_BubbleShooter_src_GameScreen(function(){return this.init&&this.init.apply(this,arguments)},ui.ImageView,function(b){this.init=function(a){a=merge(a,{x:0,y:0,width:GLOBAL.SCREEN_SIZE.width,height:GLOBAL.SCREEN_SIZE.height,image:"resources/images/background_1.jpg"});b(this,"init",[a]);this._bubbles={};this._sound=sound.getSound();this._keyPosition=this._timeBoard=this._gun=null;this._gameStart=this._isRemoving=!1;this.build()};this.build=function(){buildGun.call(this);
this.on("app:start",startGameFlow.bind(this));this.on("app:end",endGameFlow.bind(this));checkEachFrame.call(this);this._perfect=new ui.ImageView({superview:this,x:GLOBAL.SCREEN_SIZE.width/2,y:GLOBAL.SCREEN_SIZE.height/2,image:"resources/images/perfect.png",width:260,height:61,offsetX:-130,offsetY:-30,visible:!1});this._great=new ui.ImageView(merge({image:"resources/images/great.png",width:198,height:58,offsetX:-99,offsetY:-29},this._perfect._opts));this._nice=new ui.ImageView(merge({image:"resources/images/nice.png",
width:138,height:57,offsetX:-69,offsetY:-28.5},this._perfect._opts))}});
function startGameFlow(){var b=this,a=new ui.TextView({superview:this,fontFamily:"Comic Sans MS",x:0,y:15,width:GLOBAL.SCREEN_SIZE.width,height:50,autoSize:!1,size:38,verticalAlign:"middle",horizontalAlign:"center",wrap:!1,color:"#fffc88"});b._sound.stop("main_music");animate(a).wait(1E3).then(function(){a.setText("Ready...");b._sound.play("start_ready")}).wait(1E3).then(function(){a.setText("Go!");b._sound.play("start_go")}).wait(1E3).then(function(){b._sound.play("bg_music");a.removeFromSuperview();
play_game.call(b)})}function play_game(){this._gun.emit("gun:loaded");initBubbles.call(this);initTimeBoard.call(this);this._gameStart=!0}function buildGun(){var b=new Gun({superview:this});this._gun=b;this.on("InputMove",function(a,c){b.emit("gun:setTarget",c)});this.on("InputSelect",function(a,c){b.emit("gun:fire",c)})}
function checkEachFrame(){GC.app.engine.on("Tick",bind(this,function(){if(this._gun&&this._gameStart){var b=this._gun,a=b._bullet;if(a){if(a._animate.hasFrames()){a.bulletParticle();a.updateAsFlyingBullet();for(var c in this._bubbles)if(6!=Object.keys(this._bubbles[c]._edges).length&&(this._bubbles[c].updateAsNormalBubble(b),a._hit))break;if(a._hit&&a.style.y>GLOBAL.LOSE_LINE){this.emit("app:end",!1);return}a._isLoaded||b.emit("gun:loaded")}for(c in this._bubbles)this._bubbles[c].updateParticle()}}}))}
function initBubbles(){for(var b=GLOBAL.BUBBLE_RADIUS,a=GLOBAL.BUBBLE_RADIUS2,c=GLOBAL.TYPES,g=Math.floor(6*Math.random())+1,j=0,d=-b;d<=GLOBAL.SCREEN_SIZE.height*config.initBubbleAreaHeight;d+=2*b)for(var f=a;f<=GLOBAL.SCREEN_SIZE.width-a+5;f+=3*a){var e;d==-b?e=new Bullet({superview:this,x:f,y:d,type:-1,image:""}):(e=++j==g?config.keyType:Math.floor(Math.random()*config.numberOfColor),e==config.keyType&&(this._keyPosition={x:f,y:d}),e=new Bullet({superview:this,x:f,y:d,type:e,image:c[e]}));this._bubbles[e.uid]=
e}for(f=2.5*a;f<=GLOBAL.SCREEN_SIZE.width-2.5*a+5;f+=3*a)for(d=2*b;d<=GLOBAL.SCREEN_SIZE.height*config.initBubbleAreaHeight;d+=2*b)e=Math.floor(Math.random()*config.numberOfColor),e=new Bullet({superview:this,x:f,y:d,type:e,image:c[e]}),this._bubbles[e.uid]=e;var a=this._bubbles,h;for(h in a){var c=a[h],i;for(i in a)i!=h&&(g=a[i],j=new Point(c.style.x,c.style.y),d=new Point(g.style.x,g.style.y),j.subtract(d).getMagnitude()<=2*b+config.bias&&(c._edges[i]=g,g._edges[h]=c))}}
function initTimeBoard(){var b=0,a=0;this._timeBoard=new ui.TextView({superview:this,x:0,y:400,width:GLOBAL.SCREEN_SIZE.width,height:20,autoSize:!1,verticalAlign:"middle",horizontalAlign:"right",wrap:!1,color:"#65f9ff",text:"00:00",opacity:0.5,padding:[0,14,0,0]});this._timer=setInterval(bind(this,function(){60<=a&&(a=0,b+=1);60<=b&&this.emit("app:end");this._timeBoard.setText((10>b?"0"+b.toString():b.toString())+":"+(10>a?"0"+a.toString():a.toString()));a+=1}),1E3)}
function endGameFlow(b){this._gameStart=!1;this._sound.stop("bg_music");var a=new ui.ImageView({superview:this,x:this._keyPosition.x,y:this._keyPosition.y,image:"resources/images/big_key.png",anchorX:0.5,anchorY:0.5,width:1,height:1}),c=this;b?animate(a).now({scale:300,x:GLOBAL.SCREEN_SIZE.width/2,y:GLOBAL.SCREEN_SIZE.width/2},1500).then(function(){a.removeFromSuperview();resetGame.call(c);c.emit("gamescreen:end",c._timeBoard.getText())}):(c.emit("gamescreen:end",!1),resetGame.call(c))}
function resetGame(){clearInterval(this._timer);this._timeBoard.removeFromSuperview();for(var b in this._bubbles)this._bubbles[b].removeFromSuperview();this._bubbles={};this._gun._bullet&&this._gun._bullet.removeFromSuperview()};
