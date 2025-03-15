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

        Object.assign(this.firstElementChild, {
            a: 123
        })

        return ({
            component: this,
            element: this.firstElementChild
        });

    }

});