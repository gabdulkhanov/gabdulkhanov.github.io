	
var View = function(canvas, ctnx, width, height) {
	
	this.canv = canvas;
	this.ctx = ctnx;
	this.canv.width = width;
	this.canv.height = height;
	this.canv.style.border = "1px solid black";
	this.ctx.lineWidth = 1;	
	this.clr = ["#090351","#0a4a08","#0812d3","#ed8804","#f7ef04","#f7ef04"];

	this.clearCanvas = function clearCanvas() {
			this.ctx.fillStyle = "#fff";
			this.ctx.fillRect(0, 0, this.canv.width, this.canv.height);
		};	
		
	this.figuraCanvas = function figuraCanvas(mas, point_x, point_y, width) {			
		this.ctx.strokeStyle = "#000";
				
		for (let i = 0; i < mas.length; i++) {
			for (let j = 0; j < mas.length; j++){	
					for (let z = 0; z < this.clr.length; z++)
						if (mas[i][j] === z) this.ctx.fillStyle = this.clr[z];						
					if (mas[i][j] !== 0) {
						this.ctx.fillRect(point_x + j*width, point_y + i*width, width, width);
						this.ctx.strokeRect(point_x + j*width, point_y + i*width, width, width);	
					}							
				 }					
			}						
	};

	this.poleCanvas = function poleCanvas(mas, width) {				
		this.ctx.strokeStyle = "#000";		
		for (let i = 0; i < 20; i++) {				
			for (let j = 1; j < 11; j++) {
				for (let z = 0; z < this.clr.length; z++)
						if (mas[i][j] === z) this.ctx.fillStyle = this.clr[z];								
				if (mas[i][j] !== 0) {
						this.ctx.fillRect(j*width, i*width, width, width);
						this.ctx.strokeRect(j*width, i*width, width, width);
				 }				
			}
		}
	};



	this.otrisovka = function otrisovka(mas1, mas2, ptx, pty) {	
		this.poleCanvas(mas2, 30);
		this.figuraCanvas(mas1, ptx, pty, 30);			
	};
	
	this.message = function message(str, size) {
		this.ctx.font = "italic " + size + "px Arial";		
		this.ctx.fillStyle = "#d00";
		this.ctx.fillText(str, this.canv.width / 2, this.canv.height / 2);
	};
	
}
