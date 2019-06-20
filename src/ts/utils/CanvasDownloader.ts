export default class CanvasDownloader{
	
	constructor(){

	}

	public canvasToBlob ( canvas: HTMLCanvasElement ): Blob {
	
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
	
	public downloadBlob ( blob: Blob, filename: string ) {  
		
		var event = document.createEvent("MouseEvents");
	  	event.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		
		var a = document.createElement( "a" ) as HTMLAnchorElement;
		a.href = window.URL.createObjectURL(blob);
	
		a.download = filename;
		
		a.dispatchEvent(event);
	
	}

	public downloadCanvas( canvas: HTMLCanvasElement, filename? : string ){

		let b = this.canvasToBlob( canvas );
		
		this.downloadBlob( b, filename ? filename : 'untitled');

	}
}