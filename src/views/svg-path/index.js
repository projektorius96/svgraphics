import { getNamespace } from "../utils.js";

export const svg_path = getNamespace(import.meta.url);
customElements.define(svg_path, class extends HTMLElement {

    #generateSVGPath(points) {
    
        if (points.length === 0) return "";
    
        // Start with moveTo (M)
        let path = `M ${points[0].x} ${points[0].y}`;
            points.forEach((point, i) => {
                if (i > 0){
                    path += ` L ${point.x} ${point.y}`;
                }
            });
        
        return path;
    }
    
    constructor({options}) {

        if ( super() ) {

            /* if (options.draggable) this.enableDraggingFor(this, options) ; */

            /**
             * @html
             */
            this.setHTMLUnsafe(/* html */`
                    <path 
                        id="${ options.id }" 
                        d="${ this.#generateSVGPath(options.points) }"
                        style="stroke:${options.stroke || 'black'}; stroke-width:${options.strokeWidth || 3}; fill:${options.fill || 'none'};"
                    />
            `);

            /**
             * @javascript
             * 
             * > The following line makes `options` available within e.g. `connectedCallback` accessed as `this.options`
             */
            Object.assign(this, {
                options,
                generateSVGPath: this.#generateSVGPath 
            });
            

        }

        return ({
            component: this,
            element: this.firstElementChild
        });

    }

});