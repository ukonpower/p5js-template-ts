import * as p5 from 'p5';
import CanvasDownloader from './utils/CanvasDownloader'
import * as dat from 'dat.gui'

//キャプチャするかどうか
let capture = false;

const sketch = (p: p5) => {

  let frame = 0;

  const sizeX = 2000;
  const sizeY = 2000;

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

	if( !data.animate ) return;

    /*--------DO SOMETHING HERE----------*/

    // console.log(frame);

    /* --------------------------------- */

    if( capture ){

      downloader.downloadCanvas( renderer.elt, frame.toString() );

		}

    frame++;

  }

  let reset = () => {

		frame = 0;

	}

	let download = () => {
		
		downloader.downloadCanvas( renderer.elt, frame.toString() );

  }

  /*--------dat.GUI----------*/

	const gui = new dat.GUI();

	const data = {
		animate: true,
		reset: reset,
		screenshot: download
	}

	gui.add( data, 'animate' );
	gui.add( data, 'screenshot');
	gui.add( data, 'reset');

	/*-------------------------*/
  
}

//--------------------------------------------------------------------

//donloader
let downloader: CanvasDownloader;

//始まるよ
window.addEventListener('load', () => {

  downloader = new CanvasDownloader;

	const sketchP5 = new p5( sketch );

});
