
		var vox =document.getElementById('box');
		var oNavlist = document.getElementById('nav').children;
		var slider = document.getElementById('slider');
		var left = document.getElementById('left');
		var right = document.getElementById('right');

		var index = 1;
		var timer;
		var isMoving = false;


		function next(){
			if(isMoving){
				return;
			}
			isMoving  = true;
			index++;
			navmove();
			animate(slider,{left:-1200*index},function(){
				if(index==6){
					slider.style.left = '-1200px';
					index = 1;
				}
				isMoving = false;
			});
		}
		var timer = setInterval(next,3000);

		function prev(){
			if(isMoving){
				return;
			}
			isMoving  = true;
			index--;
			navmove();
			animate(slider,{left:-1200*index},function(){
				if(index==0){
					slider.style.left = '-6000px';
					index = 5;
				}
				isMoving =false;
			});
		}

		//左右箭头的变化
		box.onmouseover = function(){
			animate(left,{opacity:50});
			animate(right,{opacity:50});
			clearInterval(timer);
		}
		box.onmouseout = function(){
			animate(left,{opacity:0});
			animate(right,{opacity:0});
			timer = setInterval(next,3000);
		}
		right.onclick = next;
		left.onclick = prev;

		for (var i = 0; i < oNavlist.length; i++) {
			oNavlist[i].index = i;
			oNavlist[i].onclick = function(){
				index = this.index+1;
				navmove();
				animate(slider,{left:-1200*index});
			}
		}
		
	//  小按钮颜色
		function navmove(){
			for(var i =0;i<oNavlist.length;i++){
				oNavlist[i].className = '';
			}
			if(index==6){
				oNavlist[0].className = "active";
			}else if(index ==0){
				oNavlist[4].className = "active";
			}else {
				oNavlist[index-1].className  = "active";
			}
		}


		//文字滚动
		var box2 = document.getElementById('box2');
		var a = 720;
		function WMove(){
			
			a-=2;
			if(a<=-400){
				a=720;
			}else{
				box2.style.left = a+'px';
			}
		}
		setInterval(WMove,30);
				