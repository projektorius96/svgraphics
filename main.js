import './style.css';
import * as SVGraphics from './src/index.js';

document.addEventListener('DOMContentLoaded', ()=>{

  document.body.appendChild(
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
    )
  );

  if (document){
    SVGraphics.Helpers.findBy('circle-1').options.on.call(SVGraphics.Helpers.findBy('circle-1'))
  }
  

});