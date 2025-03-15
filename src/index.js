import { svg_container } from './views/svg-container/index.js';
import { svg_circle } from './views/svg-circle/index.js';
import { svg_path } from './views/svg-path/index.js';

import { enableDraggingFor } from './views/global.mixin.js';

export const Views = {
    Container: customElements.get(svg_container),
    Circle: customElements.get(svg_circle),
    Line: customElements.get(svg_path),
}

export const Helpers = {
    findBy(id){
        return (
            document?.getElementById(id)
        )
    }
}

Object.freeze(Views);
Object.freeze(Helpers);

[Views.Circle, Views.Line]
.forEach((view)=>{
    Object.assign(view.prototype, {
        enableDraggingFor
    })
})