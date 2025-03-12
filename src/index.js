import { svg_circle } from './views/svg-circle/index.js';

export const Views = {
    Circle: customElements.get(svg_circle)
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