import * as p5 from 'p5';

//キャプチャするかどうか
let capture = false;

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

      isAnimate = false;

      return;
      
    }

    /*--------DO SOMETHING HERE----------*/

    console.log(frame);

    /* --------------------------------- */

    if( capture ){

			let b = canvasToBlob( renderer.elt );

			downloadBlob( b, frame.toString() );

		}

    frame++;

  }
}

//--------------------------------------------------------------------

//frame系
let isAnimate = true;
let frame = 0;

//始まるよ
window.addEventListener('load', () => {

	const sketchP5 = new p5( sketch );

});

let canvasToBlob = ( canvas: HTMLCanvasElement ): Blob => {
	
	let base64 = canvas.toDataURL('image/png');
	let bin = atob(base64.replace(/^.*,/, ''));
	let buffer = new Uint8Array(bin.length);
	
	for (let i = 0; i < bin.length; i++) {
	
		buffer[i] = bin.charCodeAt(i);
	
	}
	
	try {
	
		const blob = new Blob([buffer.buffer], {
			type: 'image/png'
		});

		return blob
	
	} catch (e) {
	
		return null;
	
	}

}

let downloadBlob = ( blob: Blob, filename: string ) => {  
	
	var event = document.createEvent("MouseEvents");
  event.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
	
	var a = document.createElement( "a" ) as HTMLAnchorElement;
	a.href = window.URL.createObjectURL(blob);

	a.download = filename;
	
	a.dispatchEvent(event);

}