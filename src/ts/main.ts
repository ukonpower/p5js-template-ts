import * as p5 from 'p5';

//キャプチャするかどうか
const capture = false;

//フレーム長
const frameLength = 100;

const sketch = (p: p5) => {

  const sizeX = 2000;
  const sizeY = 2000;
  let renderer: p5.Renderer;

  p.preload = () => {

  };

  p.setup = () => {

    //craete canvas
    renderer = p.createCanvas( sizeX, sizeY );

  };

  p.windowResized = () => {

    p.resizeCanvas( sizeX, sizeY );

  };

  p.draw = () => {

    if( !isAnimate ) return;

    if( frame > frameLength ){

      if( capture ){

        cap.stop();
        cap.save();
      
      }

      isAnimate = false;

      return;
      
    }

    /*--------DO SOMETHING HERE----------*/

    console.log(frame);

    /* --------------------------------- */

    if( capture ) cap.capture( renderer.elt );
    frame++;

  }
}

//--------------------------------------------------------------------

//frame系
let isAnimate = true;
let frame = 0;

//CCapture
declare var CCapture: any;
const cap = new CCapture( { format: 'png' } );

if( capture ){
  
  cap.start();

}

//始まるよ
window.addEventListener('load', () => {

  const sketchP5 = new p5( sketch );

});