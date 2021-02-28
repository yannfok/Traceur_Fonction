/**
 * Main Script
 */

let ctx = canvas.getContext("2d");
let rep = new Repere(ctx,DEFAULT_SCALE_VALUE,12);
rep.drawXAxis();
rep.drawYAxis();
let functionDraw = new Line(ctx,rep,x=>1/x);
functionDraw.drawFunction();
functionDraw.drawExpression();
controller.zoom(functionDraw);
controller.logPos(functionDraw);
controller.inputFunction(functionDraw);