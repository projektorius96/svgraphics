export function enableDraggingFor(thisArg, options){

    let targetElement = null;
    function mousemove(e){
            document.getElementById(options.id)
            .setter.translate({x: e.pageX, y: e.pageY});
    }
    function mouseup(){
        document.rm('mousemove', mousemove);
        targetElement = null;
    }
    function mousedown(e){
        if (targetElement === null) {
            targetElement = e.currentTarget;
        }
        const { altKey } = e;
        if    ( altKey )   {
            e.preventDefault();
            document.on('mousemove', mousemove);
        } 
    }
    thisArg.on('mousedown', mousedown);
    document.on('mouseup', mouseup);

}