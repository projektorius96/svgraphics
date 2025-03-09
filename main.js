import './style.css';
import * as SVGgraphics from './src/index.js';

document.addEventListener('DOMContentLoaded', ()=>{

  document.body.appendChild(
    new (
      customElements.get(SVGgraphics.Views.Namespaces.svg_circle)
    )
  );

})