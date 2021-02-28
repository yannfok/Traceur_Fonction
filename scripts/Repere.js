/**
 * Draw the axis of the Plan
 */

class Repere extends CanvasElement{

    constructor(ctx,scale_value,scale_size)
    {

        super(ctx);
        this.scale_value = scale_value;
        this.scale_size = scale_size;

    }

    drawXNumbers()
    {

        this.ctx.font = "10px Arial";
        for(let i=0;i<=CANVAS_SIZE;i+=this.scale_value){
            let value = (-1*((600-i)-300)/this.scale_value);
            if(value!==0) this.ctx.fillText(""+value,i-5,MID_SIZE_SCALE-this.scale_size/2-15)
        }
    }

    drawYNumbers()
    {

        this.ctx.font = "10px Arial";
        for(let i=0;i<=CANVAS_SIZE;i+=this.scale_value)
        {
            let value = (((600-i)-300)/this.scale_value);
            if(value !== 0) this.ctx.fillText(""+value,MID_SIZE_SCALE-this.scale_size/2-15,i+5);
        }

    }

    drawXAxis()
    {

        this.ctx.beginPath();
        this.ctx.moveTo(0,MID_SIZE_SCALE);
        this.ctx.lineTo(CANVAS_SIZE, MID_SIZE_SCALE);
        this.ctx.stroke();
        for(let i=0;i<=CANVAS_SIZE;i+=this.scale_value)
        {
            this.ctx.beginPath();
            this.ctx.moveTo(i,MID_SIZE_SCALE-this.scale_size/2);
            this.ctx.lineTo(i,MID_SIZE_SCALE+this.scale_size/2);
            this.ctx.stroke();
        }
        this.drawXNumbers();

    }

    drawYAxis()
    {

        this.ctx.beginPath();
        this.ctx.moveTo(MID_SIZE_SCALE,0);
        this.ctx.lineTo(MID_SIZE_SCALE,CANVAS_SIZE);
        this.ctx.stroke();
        for(let i=0;i<=CANVAS_SIZE;i+=this.scale_value)
        {
            this.ctx.beginPath();
            this.ctx.moveTo(MID_SIZE_SCALE-this.scale_size/2,i);
            this.ctx.lineTo(MID_SIZE_SCALE+this.scale_size/2,i);
            this.ctx.stroke();
        }

        this.drawYNumbers();

    }

    setNextScaleValue(deltaY)
    {
        if(deltaY<0 && this.scale_value !== MAX_SCALE_VALUE)
        {
            let i = this.scale_value+1;
            while(i<=MAX_SCALE_VALUE && 300%i !== 0) i++;
            this.scale_value = i;
        }
        else if(deltaY>0 && this.scale_value !== MIN_SCALE_VALUE)
        {
            let i = this.scale_value-1;
            while(i>=MIN_SCALE_VALUE && 300%i !== 0) i--;
            this.scale_value = i;
        }
    }

}