import { getNamespace } from "../utils";

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

        }

        return ({
            component: this,
            element: this.firstElementChild
        });

    }

    connectedCallback(){

        let svgElement = this.firstElementChild;
            // svgElement.style.cssText = /* style */`
            //     display: inherit;
            //     width:   inherit;
            //     height:  inherit;
            // `;

        window.addEventListener('resize', ()=>{

            svgElement.setAttribute('viewbox', `${0} ${0} ${document.body.clientWidth || window.innerWidth} ${document.body.clientHeight || window.innerHeight}`);
            
        })

        }
        
})

/* export default customElements.get(svg_container); */