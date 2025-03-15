import { setCoords, getNamespace } from "../utils";

export const svg_container = getNamespace(import.meta.url);
customElements.define(svg_container, class extends HTMLElement {

    constructor({options, childrenList}) {

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
            
            let interpolatedHTML = '';
                childrenList.forEach((svgElement)=>interpolatedHTML += svgElement?.getHTML());         

            /**
             * @html
             */
            /* let html; */
            this.setHTMLUnsafe(/* html */`
                <svg id="${ options.id || svg_container }" >
                    <!-- <rect id="rect-1" x="0" y="0" width="${ 1 * (options.scalingFactor || 1) }" height="${ 1 * (options.scalingFactor || 1) }" fill="red"></rect>
                    <rect id="rect-2" x="0" y="0" width="${ 1 * (options.scalingFactor || 1) }" height="${ 1 * (options.scalingFactor || 1) }" fill="blue"></rect> -->
                    ${ interpolatedHTML }
                </svg>
            `);

            /**
             * @javascript
             * 
             * > The following line makes `options` available within e.g. `connectedCallback` accessed as `this.options`
             */
            let javascript;
            Object.assign(this, {options});
            Object.assign(this, {childrenList});

        }

        return ({
            component: this,
            element: this.firstElementChild
        });

    }

    connectedCallback(){
            
            setCoords.call(this)
            window.addEventListener('resize', ()=>{
                
                setCoords.call(this)
                
            });

        }
        
})