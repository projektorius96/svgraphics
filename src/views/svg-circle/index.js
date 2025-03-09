import { setStyles } from "./index.css.js";
import { setCoords, getNamespace } from "../utils.js";

export const svg_circle = getNamespace(import.meta.url);
customElements.define(svg_circle, class extends HTMLElement {
    
    constructor({options}) {

        if ( super() ) {

            Object.assign(this, {options})

            /**
             * @css
             */
            setStyles.call(this, {options})

            let [translateX, translateY] = [window.innerWidth/2, window.innerHeight/2];
            this.setHTMLUnsafe(/* html */`
                <svg id=${getNamespace(import.meta.url)}>
                    <circle id=${options.id} cx=${ options.translateX ?? translateX } cy=${ options.translateY ?? translateY  } r=${ options.radius ?? translateY/2 } />
                </svg>
            `);

        }

    }

    connectedCallback() {

        setCoords(this, svg_circle);

        window.addEventListener('resize', ()=>{
            setCoords(this, svg_circle)
        });
    
    }

});