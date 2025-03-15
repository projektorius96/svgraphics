import { getNamespace } from "../utils.js";

export const svg_circle = getNamespace(import.meta.url);
customElements.define(svg_circle, class extends HTMLElement {

    constructor({options}) {

        if ( super() ) {

            /* if (options.draggable) this.enableDraggingFor(null, options) ; */

            /**
             * @html
             */
            let html;
            this.setHTMLUnsafe(/* html */`
                    <circle
                    id=${ options.id }
                    fill="${ options.fill || 'none' }"
                    cx="${ options.translateX || 0 }" 
                    cy="${ options.translateY || 0  }" 
                    r=${  options.radius ?? Math.min(window.innerWidth, window.innerHeight)/4 } 
                    />
            `);

            /**
             * @javascript
             * 
             * > The following line makes `options` available within e.g. `connectedCallback` accessed as `this.options`
             */
            let javascript;
            Object.assign(this, {options});

        }

        return ({
            component: this,
            element: this.firstElementChild
        });

    }

    connectedCallback() {

        let { cx, cy, r } = this.firstElementChild.attributes;
        Object.assign(
            this.firstElementChild, Object.freeze({
                options: {
                    toggled: false,
                    ...this.options
                }
                ,
                setter: {
                    fill: (fill)=>{
                        // DEV_NOTE (!) # make sure we're referring to radius prop, not to the radius method itself
                        if (!(fill instanceof Function)){
                            this.style.fill = fill;
                        }
                    }
                    ,
                    translate: ({x, y})=>{
                        cx.value = x;
                        cy.value = y;
                    }
                    ,
                    radius: ({radius})=>{
                        // DEV_NOTE (!) # make sure we're referring to radius prop, not to the radius method itself
                        if (!(radius instanceof Function)){
                            r.value = radius;
                        }
                    }
                }
            })
        );

        typeof this.options.on === 'function' ? this.options.on/* .bind */(/* this,  */{currentTarget: document.getElementById(this.options.id)}) : false ;
    
    }

});