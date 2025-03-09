export const svg_circle = new URL(import.meta.url).pathname.split('/').at(-2);
customElements.define(svg_circle, class extends HTMLElement {
    
    constructor() {

        if ( super() ){

            let [translateX, translateY] = [window.innerWidth/2, window.innerHeight/2];
            this.setHTMLUnsafe(/* html */`
                <style>
                    svg { fill: green; }
                </style>
                <svg id='svg-circle'>
                    <circle cx=${ translateX } cy=${ translateY } r=${ translateY/2 } />
                    <circle cx=${ translateX } cy=${ translateY } r=${ translateY/2 } />
                </svg>
            `);

        }

    }

    connectedCallback(){
        let svgRectCoordsSystem = this.children.namedItem(svg_circle)?.viewBox.baseVal;
            svgRectCoordsSystem.x = 0;
            svgRectCoordsSystem.y = 0;
            svgRectCoordsSystem.width = window.innerWidth;
            svgRectCoordsSystem.height = window.innerHeight;
    }

});