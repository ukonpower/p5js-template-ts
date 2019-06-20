import * as p5 from 'p5';
import CanvasDownloader from './utils/CanvasDownloader'
import * as dat from 'dat.gui'

//キャプチャするかどうか
let capture = false;

const sketch = (p: p5) => {

  let frame = 0;

  const sizeX = 2000;
  const sizeY = 2000;

  const data = {
    x : -50,
    y : 50
  }

  const gui = new dat.GUI();

  gui.add( data, 'x');
  gui.add( data, 'y');

  let renderer: p5.Renderer;

  p.preload = () => {

  };

  p.setup = () => {

    //craete canvas
    renderer = p.createCanvas( sizeX, sizeY );
    ( renderer.elt as HTMLCanvasElement ).removeAttribute( 'style' );
    
  };

  p.windowResized = () => {

    p.resizeCanvas( sizeX, sizeY );

  };

  p.draw = () => {

    /*--------DO SOMETHING HERE----------*/

    // console.log(frame);

    /* --------------------------------- */

    if( capture ){

      downloader.downloadCanvas( renderer.elt, frame.toString() );

		}

    frame++;

  }
}

//--------------------------------------------------------------------

//donloader
let downloader: CanvasDownloader;

//始まるよ
window.addEventListener('load', () => {

  downloader = new CanvasDownloader;

	const sketchP5 = new p5( sketch );

});
