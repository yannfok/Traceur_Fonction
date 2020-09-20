class Controller{

    constructor(canvas,element)
    {

        this.canvas = canvas;
        this.element = element;

    }

    zoom(ligne)
    {

        this.canvas.addEventListener("wheel",(e)=>{
            ligne.repere.setNextScaleValue(e.deltaY);
            ligne.clean();
        });

    }

    inputFunction(fct)
    {

        this.element.addEventListener("keydown",(e)=>{
            window.setTimeout(()=>{
                let text = this.element.value;
                try {
                    fct.functional = FunctionParser.parse(text,fct);
                    fct.clean();
                }catch (ignored) {}
            },10);
        });

    }

    logPos(functional)
    {

        this.canvas.addEventListener("mousemove",e=>{
            try {
                let ctx = this.canvas.getContext("2d");
                ctx.font = "10px Arial";
                let x_pos = this.getPosOnCanvas(e).x;
                let x = Math.round(((x_pos-MID_SIZE_SCALE)/functional.repere.scale_value + Number.EPSILON)*1000)/1000;
                let y = Math.round((functional.functional(x)+Number.EPSILON)*1000)/1000;
                let expr = "x = "+ x + " y = " + y;
                functional.clean();
                ctx.fillText(expr,500,590);
                functional.drawCircle(x_pos,MID_SIZE_SCALE-(y*functional.repere.scale_value));
            }catch (ignored) {
            }
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