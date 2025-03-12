import './style.css';
import * as SVGraphics from './src/index.js';

document.addEventListener('DOMContentLoaded', ()=>{

  document.body.appendChild(
    Reflect.construct(
      SVGraphics.Views.Circle
      ,
      ArgsList({
        options: {
          id: `svg-circle-123`,
          radius: 150,
          fill: 'red',
          draggable: true,
          on: function ({currentTarget: circle_123}) {
            circle_123.addEventListener('click', ()=>{
              
              document.getElementById(this.id).toggled = !(document.getElementById(this.id).toggled)
              
              if (document.getElementById(this.id).toggled){
                circle_123.style.fill = 'green';
              } else {
                circle_123.style.fill = this.fill;
              }

            })
          }
        }
      })
    )
  );

});