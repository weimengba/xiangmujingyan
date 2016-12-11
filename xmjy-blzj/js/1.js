$(document).ready(function(){
//	输入悬停导航条
	$('#jsddm > li').bind('mouseover', function(){
		$('ul',this).css('visibility','visible');
	});
	$('#jsddm > li').bind('mouseout', function(){
		$('ul',this).css('visibility','hidden');
	});
	
//  图片轮播	
	$('.bxslider1').bxSlider({
	    auto:true,
	    infiniteLoop: true,
	    hideControlOnEnd: true
	});
	
//	新闻动态
	function blurtitle(v){ //鼠标滑过显示内容方法
		for(var i=0;i<5;i++){ //以3个标题举例
			if("title"+i == v.id){ //当前循环的i如果是正确的标题，将内容的display设为block，即显示
				document.getElementById("content"+i).style.display = "block";
			}else{ //当前循环的i是其他标题，将内容设为none，即隐藏
				document.getElementById("content"+i).style.display = "none"; 
			}
		}
	}
	
//	产品中心
		
//	var mouseovers= $(".cp_neixin>ul>li>a");
//	function toggleCPZX(mouseovers){
//		for(var i=1;i<=mouseovers.length;i++){
//			mouseovers[i].onmouseover=function
//		}
//	}
		
// 	function toggle(targetid){
// 		document.getElementById("div"+targetid).style.display="block";        
//	 	for(var i =1;i<=4;i++){
//			if(targetid != i){
//				document.getElementById("div"+i).style.display="none";
//			}
//		}
// 	}	
})