import { setStyles } from "./index.css.js";
import { setCoords, getNamespace } from "../utils.js";

export const svg_circle = getNamespace(import.meta.url);
customElements.define(svg_circle, class extends HTMLElement {
    
    constructor({options}) {

        if ( super() ) {

            /**
             * @css
             */
            setStyles.call(this, {options})

            let [translateX, translateY] = [window.innerWidth/2, window.innerHeight/2];
            this.setHTMLUnsafe(/* html */`
                <svg id=${getNamespace(import.meta.url)}>
                    <circle id="circle" cx=${ options.translateX ?? translateX } cy=${ options.translateY ?? translateY  } r=${ options.radius ?? translateY/2 } />
                </svg>
            `);

        }

    }

    connectedCallback() {
        setCoords(this, svg_circle)

        window.addEventListener('resize', ()=>{
            let svgElement = this.children[svg_circle];
                svgElement.setAttribute('viewBox', `0,0,${window.innerWidth},${window.innerHeight}`);
                svgElement.children.circle.setAttribute('cx', window.innerWidth/2)  ;
                svgElement.children.circle.setAttribute('cy', window.innerHeight/2) ;
        })
    }

});