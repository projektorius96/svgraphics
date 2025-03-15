export function enableDraggingFor(currentTarget){

    let targetElement = null;
    function mousemove(e){

        switch (currentTarget.tagName) {
            case 'circle':
                document.getElementById(currentTarget.id).setAttribute('cx', e.pageX)
                document.getElementById(currentTarget.id).setAttribute('cy', e.pageY)
                break;
            case 'path':
                document.getElementById(currentTarget.id).setAttribute('transform', `translate(${e.pageX}, ${e.pageY})`)
                break;
        }

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
    currentTarget.on('mousedown', mousedown);
    document.on('mouseup', mouseup);

}