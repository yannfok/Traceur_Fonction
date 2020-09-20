class Line extends CanvasElement {

    constructor(ctx, repere, functional) {
        super(ctx);
        this.repere = repere;
        this.functional = functional;
        let fct_str = '' + this.functional;
        this.expr = 'f(x) = ' + fct_str.substr(3);
    }

    drawNextLine(i)
    {
        this.ctx.beginPath();
        this.ctx.moveTo(
            MID_SIZE_SCALE + i,
            MID_SIZE_SCALE -
            this.repere.scale_value * this.functional(i / this.repere.scale_value)
        );
        this.ctx.lineTo(
            MID_SIZE_SCALE + i + 1,
            MID_SIZE_SCALE -
            this.repere.scale_value *
            this.functional((i + 1) / this.repere.scale_value)
        );
        this.ctx.stroke();
    }

    drawFunction() {
        for (let i = 0; i >= -MID_SIZE_SCALE; i--)
            this.drawNextLine(i);
        for (let i = 0; i <= MID_SIZE_SCALE; i++)
            this.drawNextLine(i);

    }

    drawCircle(x, y) {
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.arc(x, y, 3, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = 'red';
        ctx.fill();
    }

    drawExpression() {
        while (this.expr.includes('Math.'))
            this.expr = this.expr.replace('Math.', '');
        this.ctx.font = '10px Arial';
        this.ctx.fillText(this.expr, 20, 20);
    }

    clean() {
        this.ctx.fillStyle = 'black';
        this.ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
        this.repere.drawXAxis();
        this.repere.drawYAxis();
        this.drawExpression();
        this.drawFunction();
    }

}
