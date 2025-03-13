import setStyling from "./index.css.js";
import { setCoords, getNamespace } from "../utils.js";

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

            if (options.draggable) this.enableDraggingFor(this, options) ;

            /**
             * @css
             */
            setStyling.call(this, {options});

            /**
             * @html
             */
            this.setHTMLUnsafe(/* html */`
                <svg id=${ getNamespace(import.meta.url) } >
                    <path id=${ options.id } d style="stroke:${options.stroke || 'black'};stroke-width:${options.strokeWidth || 3};fill=${options.fill || 'none'}">
                </svg>
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

    }

    connectedCallback() {

        let { d } = document.getElementById(this.options.id).attributes;
            d.value = this.generateSVGPath(this.options.points);
        
        Object.assign(
            document.getElementById(this.options.id), Object.freeze({
                options: {
                    toggled: false,
                    ...this.options
                },
                getter: {
                    points: ()=>{
                        return ({
                            'points': d.value
                        });
                    }
                }
                ,
                setter: {
                    points: (points)=>{
                        return ({
                            'points': this.generateSVGPath(points || this.options.points)
                        });
                    }
                }
            })
        );

        if ( setCoords(this, svg_path) ) {

            window.addEventListener('resize', ()=>{
                setCoords(this, svg_path);
            });

            typeof this.options.on === 'function' ? this.options.on.bind(this, {currentTarget: document.getElementById(this.options.id)}) : false ;

        }
    
    }

});