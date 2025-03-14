import { setCoords, getNamespace } from "../utils";

export const svg_container = getNamespace(import.meta.url);
customElements.define(svg_container, class extends HTMLElement {

    constructor({options}) {

        if ( super() ) {

            /**
             * @css
             */
            let css;
            this.style.cssText = /* style */`
                display: block;
                width: calc(100vw - (100vw - 100%));
                height: 100vh;
            `;

            /**
             * @html
             */
            let html;
            this.setHTMLUnsafe(/* html */`
                <svg id="${ svg_container }" viewBox="0 0 ${options.clientWidth || window.innerWidth} ${options.clientHeight || window.innerHeight}">
                    <rect id="rect-1" x="0" y="0" width="${ 1 * (options.scalingFactor || 1) }" height="${ 1 * (options.scalingFactor || 1) }" fill="red"></rect>
                    <rect id="rect-2" x="0" y="0" width="${ 1 * (options.scalingFactor || 1) }" height="${ 1 * (options.scalingFactor || 1) }" fill="blue"></rect>
                </svg>
            `);

            /**
             * @javascript
             * 
             * > The following line makes `options` available within e.g. `connectedCallback` accessed as `this.options`
             */
            let javascript;
            Object.assign(this, {options});

            /* this.id = options.id || 'svg-container' */

        }

    }

    connectedCallback(){

        let svgElement = this.firstElementChild;
            svgElement.style.cssText = /* style */`
                display: inherit;
                width: inherit;
                height: inherit;
            `;

        /* let svgRect = this.children?.namedItem('svg-container').viewBox.baseVal;
            svgRect.x = 0;
            svgRect.y = 0;
            svgRect.width = Math.ceil(window.innerWidth);
            svgRect.height = Math.ceil(window.innerHeight); */

        window.addEventListener('resize', ()=>{
        
            /*  svgRect.x = 0;
            svgRect.y = 0;
            svgRect.width = Math.ceil(window.innerWidth);
            svgRect.height = Math.ceil(window.innerHeight); */

            this.children.namedItem(svg_container).setAttribute('viewbox', `${0} ${0} ${this.options.clientWidth || window.innerWidth} ${this.options.clientHeight || window.innerHeight}`);
            
        })

        }
        
})

/* export default customElements.get(svg_container); */