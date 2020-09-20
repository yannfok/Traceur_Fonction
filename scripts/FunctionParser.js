function exp(x)
{

    return Math.exp(x);

}

function log(x) {

    return Math.log(x);

}

function sin(x)
{

    return Math.sin(x);

}

function cos(x)
{

    return Math.cos(x);

}

function tan(x)
{

    return Math.tan(x);

}

class FunctionParser{

    static parse(expression,functional)
    {
        functional.expr = "f(x) = " + expression;
        return x=>eval(expression);
    }

}