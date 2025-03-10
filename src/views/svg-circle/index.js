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

        let { cx, cy, r } = document.getElementById(this.options.id).attributes;
        Object.assign(
            document.getElementById(this.options.id), {
                getter: {
                    fill: ()=>{
                        return ({
                            'fill': this.style.fill
                        });
                    }
                    ,
                    translate: ()=>{
                        return ({
                            translateX: cx.value,
                            translateY: cy.value,
                        });
                    }
                    ,
                    radius: ()=>{
                        return ({
                            'radius' : r.value
                        });
                    }
                }
                ,
                setter: {
                    fill: (fill)=>{
                        // # make sure we're referring to radius prop, not to radius method itself
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
                        // # make sure we're referring to radius prop, not to radius method itself
                        if (!(radius instanceof Function)){
                            r.value = radius;
                        }
                    }
                }
            }
        )

        setCoords(this, svg_circle);
        window.addEventListener('resize', ()=>{
            setCoords(this, svg_circle)
        });
    
    }

});