import setStyling from "./index.css.js";
import { setCoords, getNamespace } from "../utils.js";

export const svg_circle = getNamespace(import.meta.url);
customElements.define(svg_circle, class extends HTMLElement {
    
    constructor({options}) {

        if ( super() ) {

            Object.assign(this, {options})

            /**
             * @css
             */
            setStyling.call(this, {options});

            this.setHTMLUnsafe(/* html */`
                <svg id=${getNamespace(import.meta.url)}>
                    <circle id=${options.id} cx=${ options.translateX ?? window.innerWidth/2 } cy=${ options.translateY ?? window.innerHeight/2  } r=${ options.radius ?? (Math.min(window.innerWidth, window.innerHeight) / 4) } />
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