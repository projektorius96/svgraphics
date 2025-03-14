import setStyling from "./index.css.js";
import { setCoords, getNamespace } from "../utils.js";

export const svg_circle = getNamespace(import.meta.url);
customElements.define(svg_circle, class extends HTMLElement {

    static getNamespace(){

        return svg_circle;

    }
    
    constructor({options}) {

        if ( super() ) {

            if (options.draggable) this.enableDraggingFor(this, options) ;

            /**
             * @css
             */
            let css;
            setStyling.call(this, {options});

            /**
             * @html
             */
            let html;
            this.setHTMLUnsafe(/* html */`
                <svg id=${ getNamespace(import.meta.url) } >
                    <circle 
                        id=${ options.id }
                        cx=${ options.translateX ?? window.innerWidth/2 } 
                        cy=${ options.translateY ?? window.innerHeight/2 } 
                        r=${  options.radius ?? Math.min(window.innerWidth, window.innerHeight)/4 } 
                    />
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

    }

    connectedCallback() {

        let { cx, cy, r } = document.getElementById(this.options.id).attributes;
        Object.assign(
            document.getElementById(this.options.id), Object.freeze({
                options: {
                    toggled: false,
                    ...this.options
                },
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

        if ( setCoords(this, svg_circle) ) {

            window.addEventListener('resize', ()=>{

                setCoords(this, svg_circle);
                
            });

            typeof this.options.on === 'function' ? this.options.on.bind(this, {currentTarget: document.getElementById(this.options.id)}) : false ;

        }
    
    }

});