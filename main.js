import './style.css';
import * as SVGraphics from './src/index.js';
import { enableDraggingFor } from './src/views/global.mixin.js';

document.addEventListener('DOMContentLoaded', ()=>{

    const 
      [
        circle,
        path,
      ] = [
        new SVGraphics.Views.Circle({ 
          options: { 
            id: 'svg-circle',
            draggable: true,
            scalingFactor: 100,
            fill: 'coral', 
            radius: 150,
            translateX: window.innerWidth/2,
            translateY: window.innerHeight/2,
            on: function ({currentTarget}) {

              console.log(currentTarget);
  
            }
          } 
        }),
        new SVGraphics.Views.Line({ 
          options: { 
            id: 'svg-path',
            draggable: true,
            scalingFactor: 100,
            points: [
              { x: 50, y: 50 },
              { x: 150, y: 50 },
              { x: 100, y: 100 },
              { x: 50, y: 50 },
            ],
            fill: 'yellow',
            stroke: 'blue',
            strokeWidth: 4,
          } 
        })
      ]
      ,
      container = 
      new SVGraphics.Views.Container({
        options: { 
          id: 'top-level',
          scalingFactor: 100, 
        }, 
        childrenList: [
          circle.component,
          path.component,
        ]       
      })
      ;

    document.body.appendChild(container.component)

    const svgContainer = document.querySelector('#top-level');
      if ( svgContainer ) {

        // DEV_NOTE # this scope is planned to be moved to earlier-defined `on` attribute
        Array.from(svgContainer.children).forEach((shape, i)=>{

          shape.addEventListener('click', (e)=>{
            enableDraggingFor(e.currentTarget)
          });

          if (shape.id === 'rect-2'){
            console.log(container?.firstElementChild);
            
            container.element.children.namedItem('rect-1').setAttribute( 'x', Number( shape.getAttribute('x') + shape.getAttribute('width') ) )
            container.element.children.namedItem('rect-1').setAttribute( 'y', Number( shape.getAttribute('y') + shape.getAttribute('height') ) )            
          }

        });

      }
  
});