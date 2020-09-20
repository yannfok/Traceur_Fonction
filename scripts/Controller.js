class Controller{

    constructor(canvas)
    {

        this.canvas = canvas;

    }

    zoom(ligne)
    {

        this.canvas.addEventListener("wheel",(e)=>{
            ligne.repere.setNextScaleValue(e.deltaY);
            ligne.clean();
        });

    }

    logPos(functional)
    {

        this.canvas.addEventListener("mousemove",e=>{
            let ctx = this.canvas.getContext("2d");
            ctx.font = "10px Arial";
            let x_pos = this.getPosOnCanvas(e).x;
            let x = Math.round(((x_pos-MID_SIZE_SCALE)/functional.repere.scale_value + Number.EPSILON)*1000)/1000;
            let y = Math.round((functional.functional(x)+Number.EPSILON)*1000)/1000;
            let expr = "x = "+ x + " y = " + y;
            functional.clean();
            ctx.fillText(expr,500,590);
            functional.drawCircle(x_pos,MID_SIZE_SCALE-(y*functional.repere.scale_value));
        });

    }

    getPosOnCanvas(event)
    {

        return {
            x : event.clientX - this.canvas.getBoundingClientRect().left,
            y : event.clientY - this.canvas.getBoundingClientRect().top
        };

    }

}