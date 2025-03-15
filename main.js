import './style.css';
import * as SVGraphics from './src/index.js';

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
            translateY: window.innerHeight/2
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
            fill: 'orange',
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

        // DEV_NOTE (!) # the line below ensures that each web-component's life cycle method `connectedCallback` is triggered
        SVGraphics.Helpers.registerComponents(container.component.childrenList)

        // DEV_NOTE # this scope is planned to be moved to earlier-defined `on` attribute
        Array.from(svgContainer.children).forEach((shape)=>{

          shape.addEventListener('click', (e)=>{
            console.log(e.currentTarget)
          });

          if (shape.id === 'rect-2'){
            console.log(container?.firstElementChild);
            
            container.element.children.namedItem('rect-1').setAttribute( 'x', Number( shape.getAttribute('x') + shape.getAttribute('width') ) )
            container.element.children.namedItem('rect-1').setAttribute( 'y', Number( shape.getAttribute('y') + shape.getAttribute('height') ) )            
          }

        });

      }

  /* === IGNORE === */

  // document.body.append(...[
  //   Reflect.construct(
  //     SVGraphics.Views.Circle
  //     ,
  //     ArgsList({
  //       options: {
  //         id: `circle-1`,
  //         radius: 150,
  //         fill: 'red',
  //         draggable: true,
  //         on: function (/* {currentTarget} */) {
          
  //           this.addEventListener('click', ()=>{
              
  //             if ( this.options.toggled = !(this.options.toggled) ){
  //               this.style.fill = 'green';
  //             } else {
  //               this.style.fill = this.options.fill;
  //             }

  //           })

  //         }
  //       }
  //     })
  //   ),
  //   // DEV_NOTE (!) # `SVGraphics.Views.Line` must be added before `SVGraphics.Views.Circle`, in order the later's events to work, thus top-most in the stack is the one focused for further events to take action 
  //   Reflect.construct(
  //     SVGraphics.Views.Line
  //     ,
  //     ArgsList({
  //       options: {
  //         id: `path-1`,
          // points: [
          //   { x: 50, y: 50 },
          //   { x: 150, y: 50 },
          //   { x: 100, y: 100 },
          //   { x: 50, y: 50 } /* <= # manually closing the path */,
          // ],
          // fill: 'orange',
          // stroke: 'blue',
          // strokeWidth: 4,
  //         draggable: !true, /* <= DEV_NOTE (!) # modifications required to work: i.e. translate works via `transform="translate(x,y)";`, and not via pair of cx|cy attributes  */
  //         on: function (/* {currentTarget} */) {
          
  //           this.addEventListener('click', ()=> console.log(this))

  //         }
  //       }
  //     })
  //   ),
  // ]);

  // if (document){
  //   SVGraphics.Helpers.findBy('circle-1').options.on.call(SVGraphics.Helpers.findBy('circle-1'))
  //   SVGraphics.Helpers.findBy('path-1').options.on.call(SVGraphics.Helpers.findBy('path-1'))
  // }
  
});