		$(function(){
				$("#div").html($("#menu").html())	//将id为menu的html代码放入id为div的元素中
				$(".has_children").click(function(){
					$(this).addClass("highlight")	//为当前元素增加highlight类
					.children("a").show().end()	//将子节点<a>点位出来，并重新定位到上次操作的元素
					.siblings().removeClass("highlight")	//获取元素的兄弟元素，并去掉他们的highlight类
					.children("a").hide();	//将兄弟元素下的<a>元素隐藏
				});
			});
			$(function(){
				var $cr=$("#ch");
				var cr=$cr.get(0);
				$cr.click(function(){
					if(cr.checked){	//dom方式判断
						alert("感谢您的支持，您可以继续操作！dom判断");
						}
				});
			});
			$(document).ready(function(){
				var $cr=$("#ch");
				$cr.click(function(){
					if($cr.is(":checked")){//jquery方式判断
						alert("感谢您的支持！jquery判断");
					}
				});
			});
			$(document).ready(function(){
				$(".dian").click(function(){
					alert("恭喜您！您中奖了！");
				});
				$('p').css("color","blue");
			});
		/**	var $j=jQuery.noConflict();  //$j就相当于之前的$,jQuery就将$移交出来了
			$j(function(){
				alert("操作成功！");
			});*/