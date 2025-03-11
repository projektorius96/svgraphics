import './style.css';
import './utils.js';
import * as SVGraphics from './src/index.js';

document.addEventListener('DOMContentLoaded', ()=>{

  document.body.appendChild(
    Reflect.construct(
      SVGraphics.Views.Circle
      ,
      ArgsList({
        options: {
          radius: 60,
          fill: 'orange'
        }
      })
    )
  );

})