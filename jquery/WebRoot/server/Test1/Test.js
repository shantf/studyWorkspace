		$(function(){
				$("#div").html($("#menu").html())	//��idΪmenu��html�������idΪdiv��Ԫ����
				$(".has_children").click(function(){
					$(this).addClass("highlight")	//Ϊ��ǰԪ������highlight��
					.children("a").show().end()	//���ӽڵ�<a>��λ�����������¶�λ���ϴβ�����Ԫ��
					.siblings().removeClass("highlight")	//��ȡԪ�ص��ֵ�Ԫ�أ���ȥ�����ǵ�highlight��
					.children("a").hide();	//���ֵ�Ԫ���µ�<a>Ԫ������
				});
			});
			$(function(){
				var $cr=$("#ch");
				var cr=$cr.get(0);
				$cr.click(function(){
					if(cr.checked){	//dom��ʽ�ж�
						alert("��л����֧�֣������Լ���������dom�ж�");
						}
				});
			});
			$(document).ready(function(){
				var $cr=$("#ch");
				$cr.click(function(){
					if($cr.is(":checked")){//jquery��ʽ�ж�
						alert("��л����֧�֣�jquery�ж�");
					}
				});
			});
			$(document).ready(function(){
				$(".dian").click(function(){
					alert("��ϲ�������н��ˣ�");
				});
				$('p').css("color","blue");
			});
		/**	var $j=jQuery.noConflict();  //$j���൱��֮ǰ��$,jQuery�ͽ�$�ƽ�������
			$j(function(){
				alert("�����ɹ���");
			});*/