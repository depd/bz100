

var marginLefts = 0;

function inter(){
	marginLefts-=2;
	if(marginLefts > -1050){
		$(".his_img .boxes").css({
			"marginLeft":marginLefts
		})
	}else{
		marginLefts = 0;
		$(".his_img .boxes").css({
			"marginLeft":marginLefts
		})
	}	
}
var inters = setInterval(inter,20);


$(".his_img").mouseenter(function(){
	clearInterval(inters);
});
$(".his_img").mouseleave(function(){
	inters = setInterval(inter,20);
});

