import './style.css';
import * as SVGraphics from './src/index.js';

document.addEventListener('DOMContentLoaded', ()=>{

  document.body.appendChild(
    Reflect.construct(
      SVGraphics.Views.Circle
      ,
      ArgsList({
        options: {
          id: `${SVGraphics.Views.Circle}-123`,
          radius: 60,
          fill: 'orange'
        }
      })
    )
  );

});