
window.onload = function() {
	
	
	
	var figura = [
					 [[2,2,0,0],
					  [2,0,0,0],
					  [2,0,0,0],
					  [0,0,0,0]],
					   
					 [[2,2,0,0],
					  [0,2,0,0],
					  [0,2,0,0],
					  [0,0,0,0]],
					  
					 [[0,0,0,0],
					  [0,2,2,2],
					  [0,0,2,0],
					  [0,0,0,0]],

					 [[0,0,0,0],
					  [2,2,2,2],
					  [0,0,0,0],
					  [0,0,0,0]],
					 
					 [[0,0,0,0],
					  [0,2,2,0],
					  [0,2,2,0],
					  [0,0,0,0]],
					  
					 [[0,0,0,0],
					  [0,2,2,0],
					  [2,2,0,0],
					  [0,0,0,0]],
					
					 [[0,0,0,0],
					  [2,2,0,0],
					  [0,2,2,0],
					  [0,0,0,0]],
					  
					  [[0,0,0,0],
					   [2,2,2,2],
					   [2,0,2,0],
					   [0,0,0,0]]];	
	
	var pole = [[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,0,0,0,0,0,0,0,0,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1]];
	
	
	var timer, timeout;
	var
		max_k = 20, /***максимальное кол-во очков***/
		fps = 2,
		pt_x = 120,
		pt_y = 0,
		rnd_color = 0,
		rnd = Math.floor( Math.random()*figura.length ), /***случайная фигура***/	
		start = pause = stolknovenie_y = false,		
		canv = document.getElementById('tetris'),	
		ctx = canv.getContext("2d");
		
		
	var new_game = document.getElementById('new_game');
	var level = document.getElementById('level');
	
	var left = document.getElementById('left');
	var right = document.getElementById('right');
	var up = document.getElementById('up');
	var down = document.getElementById('down');
	
	
	var md = new Model();	
	var vw = new View(canv, ctx, 360, 600);	
	
	//vw.message("Нажмите ЛКМ, чтобы начать игру", 30);	
	
	vw.clearCanvas();
	vw.otrisovka(figura[rnd], pole, pt_x, pt_y, md.getset_line.a);
		
	
	
	
	/****УПРАВЛЕНИЕ******/
	
	/*****ВВЕРХ ПОВОРОТ*****/
	function rotate_figure() {
		if (!md.gameOver(pole) && !md.you_win(max_k) && !pause && start) {
			vw.clearCanvas();				
			if (!md.instanceRect(figura[rnd], pole, pt_x, pt_y, 0)) figura[rnd] = md.rotate90(figura[rnd]);				
			
			else if (!md.instanceRect(figura[rnd], pole, pt_x, pt_y, -1)) {			
				pt_x -= 30;
				figura[rnd] = md.rotate90(figura[rnd]);
			}			
			else if (!md.instanceRect(figura[rnd], pole, pt_x, pt_y, -2)) {				
				pt_x -= 60;
				figura[rnd] = md.rotate90(figura[rnd]);
			}	
			
			
			else if (!md.instanceRect(figura[rnd], pole, pt_x, pt_y, 1)) {				
				pt_x += 30;
				figura[rnd] = md.rotate90(figura[rnd]);
			}			
			else if (!md.instanceRect(figura[rnd], pole, pt_x, pt_y, 2)) {				
				pt_x += 60;
				figura[rnd] = md.rotate90(figura[rnd]);
			}				
			
			vw.otrisovka(figura[rnd], pole, pt_x, pt_y, md.getset_line.a);					
		}
	}
	
	/*****ВНИЗ УСКОРЕНИЕ*****/
	function down_figure() {
		if (!md.gameOver(pole) && !md.you_win(max_k) && !pause && start) {
			fps = 20;
		}
	}
	
	/*****ОТМЕНА УСКОРЕНИЯ*****/
	function cancel_down_figure() {
		if (!md.gameOver(pole) && !md.you_win(max_k) && !pause && start) {
			fps = 2;
		}
	}
	
	
	/*****ВЛЕВО*****/
		function left_figure() {
			if (!md.gameOver(pole) && !md.you_win(max_k) && !pause && start) {
				if (!md.stolknovenie_x(figura[rnd],pole,pt_x,pt_y,-1)) {
					vw.clearCanvas();
					pt_x -= 30;	
					vw.otrisovka(figura[rnd], pole, pt_x, pt_y, md.getset_line.a);	
				}
			}
		}
	
	
	
	/*****ВПРАВО*****/
	function right_figure() {
			if (!md.gameOver(pole) && !md.you_win(max_k) && !pause && start) {
				if (!md.stolknovenie_x(figura[rnd],pole,pt_x,pt_y,1)) {
					vw.clearCanvas();
					pt_x += 30;	
					vw.otrisovka(figura[rnd], pole, pt_x, pt_y, md.getset_line.a);	
				}
			}
		}
		
	
	
	
	/***Event buttons***/
	
	up.onclick = function() { rotate_figure(); }
	left.onclick = function() { left_figure(); }
	right.onclick = function() { right_figure(); }
	down.onmousedown = function() { down_figure(); }
	down.onmouseup = function() { cancel_down_figure(); }
	
	
	
	/***Event keys***/	
	
	window.onkeydown = function(event) {			
			
			if (event.keyCode == 38) rotate_figure();				
			
			if (event.keyCode == 37) left_figure();			
			
			if (event.keyCode == 39) right_figure();			
			
			if (event.keyCode == 40) down_figure();
			
			
			/***пауза***/
			if (event.keyCode == 80) {
				pause = !pause;
				step();
			}		
	};
	
		
	window.onkeyup = function(event) {				
		if (event.keyCode == 40) cancel_down_figure();
	};
	
	
	
	
	/******АНИМАЦИЯ*******/
	
	function step() {		
		
		if (!md.gameOver(pole) && !md.you_win(max_k) && !pause && start) {
			vw.clearCanvas();				
			
			timeout = setTimeout(function() {	
				timer = window.requestAnimationFrame(step);
				stolknovenie_y = md.stolknovenie(figura[rnd], pole, pt_x, pt_y);
				if (!stolknovenie_y) pt_y += 30;			
			}, 1000 / fps);	

			vw.otrisovka(figura[rnd], pole, pt_x, pt_y);		
			level.innerHTML = "Очки: " + md.getset_line.a;
			
			if (stolknovenie_y) {
				
				md.update_pole(figura[rnd], pole, pt_x, pt_y);
				rnd_color = Math.round(Math.random()*3)+2;				
				
				for (let elem = 0; elem < figura.length; elem++)
					for (let m = 0; m < figura[elem].length; m++)
						for (let n = 0; n < figura[elem].length; n++)
							if (figura[elem][m][n] !== 0) figura[elem][m][n] = rnd_color;	
						
					md.line(pole);								
					stolknovenie_y = false;					
					pt_x = 120;
					pt_y = 0;					
					rnd = Math.floor(Math.random()*figura.length);	

				}
		}
		else if (pause) {
			vw.message("Pause", 40);
			window.cancelAnimationFrame(timer);
			clearTimeout(timeout);	
		}
		else {					
			vw.clearCanvas();			
			level.innerHTML = "Очки: " + md.getset_line.a;
			vw.otrisovka(figura[rnd], pole, pt_x, pt_y);
			if (md.gameOver(pole)) vw.message("Game over", 30);		
			if (md.you_win(max_k)) vw.message("You win!", 30);		
			window.cancelAnimationFrame(timer);
			clearTimeout(timeout);	
		}
	};
	
	
	/*****************Вызываем*/

	
	
	new_game.onclick = function() {		
		if (!start) {
			new_game.innerHTML = "Новая игра"; 
			start = true;
			step();			
		}
		else if ((pause || md.gameOver(pole) || md.you_win(max_k))) {			
			
			pause = false; 
			stolknovenie_y = false;				
			pt_x = 120;
			pt_y = 0;					
			rnd = Math.floor(Math.random()*figura.length);	
			md.clear_pole(pole);
			md.getset_line.a = 0;
			vw.clearCanvas();
			vw.otrisovka(figura[rnd], pole, pt_x, pt_y);
			fps = 2;
			step();
		}
		else {
			stolknovenie_y = false;				
			pt_x = 120;
			pt_y = 0;					
			rnd = Math.floor(Math.random()*figura.length);	
			md.clear_pole(pole);
			md.getset_line.a = 0;
		}
	}	

};


