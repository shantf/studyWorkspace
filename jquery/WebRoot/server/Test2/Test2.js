$(function(){
	$("div:hidden").show().css("background","#bbffaa");//show是jquery的方法，时间是**毫秒完全出现
});
$(function(){
	$("div:has(.mini)").css("background","#bbffaa");//class为mini的div改变颜色
});
$(function(){
	$("div:[id]").css("background","#bbffaa");
});
$(function(){
	$("div:[title*=tes]").css("background","#bbffaa");

});
$(function(){
	$("div.one:nth-child(2)").css("background","#bbffaa");
});
$(function(){
	$("#tt").click(function(){
		$("#tb>tbody").append("<tr class='tx'>"+$(".tx").html()+"</tr>");
	});
	
});
$(function(){
	$("#tl").click(function(){
		$("#tb>tbody>tr:last").remove();
	})
})
//$(function(){
//	var trs=[""];
//	trs.push("<tr>")
//	alert(trs.join(""));
//});
//$(function(){
//	var length1=$(".test :hidden").length;
//	var length2=$(".test:hidden").length;
//	alert("有空格的为"+length1);
//	alert("没空格的为"+length2);
//});
