$(function(){
	$("div:hidden").show().css("background","#bbffaa");//show��jquery�ķ�����ʱ����**������ȫ����
});
$(function(){
	$("div:has(.mini)").css("background","#bbffaa");//classΪmini��div�ı���ɫ
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
//	alert("�пո��Ϊ"+length1);
//	alert("û�ո��Ϊ"+length2);
//});
