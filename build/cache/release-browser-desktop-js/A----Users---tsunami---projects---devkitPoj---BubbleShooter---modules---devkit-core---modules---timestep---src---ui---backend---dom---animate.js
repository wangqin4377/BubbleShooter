5a4db9041b1912dd2270caf8523fe4a6
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
jsio("import ui.backend.canvas.animate as canvasAnimate");exports=function(a){return"_node"in a?a.getAnimation():canvasAnimate(a)};exports.linear=canvasAnimate.linear;exports.easeIn=canvasAnimate.easeIn;exports.easeInOut=canvasAnimate.easeInOut;exports.easeOut=canvasAnimate.easeOut;
