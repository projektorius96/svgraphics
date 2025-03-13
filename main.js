import './style.css';
import * as SVGraphics from './src/index.js';

import SVGgraphicsContainer from './src/views/svg-container.js'

document.addEventListener('DOMContentLoaded', ()=>{

  const svgContainer = new SVGgraphicsContainer({ options: {} });

  svgContainer.children.namedItem('svg-container').insertAdjacentHTML(
    'beforeend'
    ,
    Reflect.construct(
      SVGraphics.Views.Circle
      ,
      ArgsList({
        options: {
          id: `circle-1`,
          radius: 150,
          fill: 'red',
          draggable: true,
          on: function (/* {currentTarget} */) {
          
            this.addEventListener('click', ()=>{
              
              if ( this.options.toggled = !(this.options.toggled) ){
                this.style.fill = 'green';
              } else {
                this.style.fill = this.options.fill;
              }

            })

          }
        }
      })
    ).getHTML()
  )

  svgContainer.children.namedItem('svg-container').insertAdjacentHTML(
    'beforeend'
    ,
    Reflect.construct(
      SVGraphics.Views.Line
      ,
      ArgsList({
        options: {
          id: `path-1`,
          points: [
            { x: 50, y: 50 },
            { x: 150, y: 50 },
            { x: 100, y: 100 },
            { x: 50, y: 50 } /* <= # manually closing the path */,
          ],
          fill: 'orange',
          stroke: 'blue',
          strokeWidth: 4,
          draggable: !true, /* <= DEV_NOTE (!) # modifications required to work: i.e. translate works via `transform="translate(x,y)";`, and not via pair of cx|cy attributes  */
          on: function (/* {currentTarget} */) {
          
            /* this.addEventListener('click', ()=> console.log(this)) */

          }
        }
      })
    ).getHTML()
  )

  // /* svgContainer */svgContainer.children.namedItem('svg-container').append(...[
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
    // Reflect.construct(
    //   SVGraphics.Views.Line
    //   ,
    //   ArgsList({
    //     options: {
    //       id: `path-1`,
    //       points: [
    //         { x: 50, y: 50 },
    //         { x: 150, y: 50 },
    //         { x: 100, y: 100 },
    //         { x: 50, y: 50 } /* <= # manually closing the path */,
    //       ],
    //       fill: 'orange',
    //       stroke: 'blue',
    //       strokeWidth: 4,
    //       draggable: !true, /* <= DEV_NOTE (!) # modifications required to work: i.e. translate works via `transform="translate(x,y)";`, and not via pair of cx|cy attributes  */
    //       on: function (/* {currentTarget} */) {
          
    //         this.addEventListener('click', ()=> console.log(this))

    //       }
    //     }
    //   })
    // ),
  // ])

  document.body.append(svgContainer);

  if (document){
    
    SVGraphics.Helpers.findBy('circle-1').onclick = function () {
      console.log(this)
    }

    SVGraphics.Helpers.findBy('path-1').onclick = function () {
      console.log(this)
    }
    
    //SVGraphics.Helpers.findBy('circle-1').options.on.call(SVGraphics.Helpers.findBy('circle-1'))
    // SVGraphics.Helpers.findBy('path-1').options.on.call(SVGraphics.Helpers.findBy('path-1'))
  }
  

});