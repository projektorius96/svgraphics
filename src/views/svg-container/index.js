/* import setStyling from "./svg-circle/index.css"; */
import { setCoords, getNamespace } from "./utils";

export const svg_container = getNamespace(import.meta.url);
customElements.define('svg-container', class extends HTMLElement {

    constructor({options}) {

        if ( super() ) {

            /**
             * @css
             */
            let css;
            /* setStyling.call(this, {options}); */
            this.style.cssText = /* style */`
                width: 100%;
                height: 100vh;
            `;

            /**
             * @html
             */
            let html;
            this.setHTMLUnsafe(/* html */`
                <svg id="${ svg_container }"></svg>
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

        this.children.namedItem(svg_container).setAttribute('style', /* style */`width:inherit; height: inherit;`)

        // let svgRect = this.children?.namedItem('svg-container').viewBox.baseVal;
        //     svgRect.x = 0;
        //     svgRect.y = 0;
        //     svgRect.width = Math.ceil(window.innerWidth);
        //     svgRect.height = Math.ceil(window.innerHeight);

        this.children.namedItem(svg_container).setAttribute('viewbox', `${0} ${0} ${window.innerWidth} ${window.innerHeight}`);

        window.addEventListener('resize', ()=>{
        
            // svgRect.x = 0;
            // svgRect.y = 0;
            // svgRect.width = Math.ceil(window.innerWidth);
            // svgRect.height = Math.ceil(window.innerHeight);

            this.children.namedItem(svg_container).setAttribute('viewbox', `${0} ${0} ${window.innerWidth} ${window.innerHeight}`);
            
        })

        }
        
})

export default customElements.get(svg_container);