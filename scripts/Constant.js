/**
 * All the Constant goes here
 */


let canvas = document.getElementById("canvas");
const CANVAS_SIZE = canvas.getAttribute("width");
const MID_SIZE_SCALE = CANVAS_SIZE/2;
const controller = new Controller(canvas,document.querySelector("input"));
const MAX_SCALE_VALUE = 150;
const MIN_SCALE_VALUE = 15;
const DEFAULT_SCALE_VALUE = 30;