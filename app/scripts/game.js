/*-------JSHint Directives-------*/
/* jshint indent: 2              */
/* global PIXI                   */
/* global requestAnimFrame       */
/*-------------------------------*/
'use strict';


// Create new instance of pixi stage
var stage = new PIXI.Stage(0x66FF99);

// Create a renderer instance
var canvasWidth  = 400;
var canvasHeight = 300;
var renderer = PIXI.autoDetectRenderer(canvasWidth, canvasHeight);

// Add renderer to document body
$('#main-game').append(renderer.view);

// Loop game animation
var animate = function() {
  requestAnimFrame(animate);
  renderer.render(stage);
};
requestAnimFrame(animate);
