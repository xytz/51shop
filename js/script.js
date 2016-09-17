$(function(){
	//search 搜索切换//
	(function(){
		var arrText = [
			'例如：荷棠鱼坊烧鱼 或 樱花日本料理',
			'例如：昌平区育新站龙旗广场2号楼609室',
			'例如：万达影院双人情侣券',
			'例如：东莞出事了，大老虎是谁？',
			'例如：北京初春降雪，天气变幻莫测'
		];
		var oText = $(".form .text");
		var aLi = $(".menu li");
		var iNum = 0;
		oText.val(arrText[iNum]);
		aLi.each(function(index){
			$(this).click(function(){
				aLi.attr("class","gradient");
				$(this).attr("class","active");
				iNum = index;
				oText.val(arrText[iNum]);
			})
		})
		oText.focus(function(){
			if($(this).val() == arrText[iNum]){
				oText.val("");
			}
		})
		oText.blur(function(){
			if($(this).val() ==""){
				oText.val(arrText[iNum]);
			}
		})
	})();

	//update 文字滚动//
	(function(){
		var arrData = [
		{ "name":"萱萱", "time":4, "title":"那些灿烂华美的瞬间"},
		{ "name":"舒舒", "time":5, "title":"小米推4000元高端机"},
		{ "name":"畅畅", "time":6, "title":"万物互联网时代的开始"},
		{ "name":"菲菲", "time":7, "title":"谷歌收购法国图像识别公司"},
		{ "name":"军军", "time":8, "title":"那些灿烂华美的瞬间"},
		{ "name":"阳阳", "time":9, "title":"快递实名制为啥难落地？"}
		];
		var oUl = $(".update ul");
		var str = "";
		var dataLength=arrData.length
		for(var i=0; i<dataLength; i++){
			str += '<li><a href="#"><strong>'+arrData[i].name+" </strong><span>"+arrData[i].time+"分钟前</span>写了一篇文章："+arrData[i].title+"</a></li>";
		}
		oUl.html(str);
		oUl.append(oUl.find("li").eq(0).clone());
		var liH = oUl.find("li").height();
		var iNow = 0;
		function move(num){
			iNow += num;
			if(iNow>0){
				iNow = - (dataLength-1);
				oUl.css("top",(iNow-1)*liH);
			}
			if(Math.abs(iNow)>(dataLength)){
				iNow = -1;
				oUl.css("top",0);
			}
			oUl.stop().animate({top:iNow*liH},1000);
		}
		function autoplay(){
				move(-1);
			}
		$(".upBtn").click(function(){
			move(1);
		})
		$(".downBtn").click(function(){
			autoplay();
		})
		var timer = setInterval(autoplay,3000);
		$(".update").hover(function(){
			clearInterval( timer );
		},function(){
			timer = setInterval(autoplay,3000);
		})
	})();

	//options 选项卡切换
	(function(){
		function fnTab(tabNav,tabCon,sEvent){
			tabNav.find("li").each(function(index){
				tabCon.hide().eq(0).show();
				$(this).on(sEvent,function(){
					tabNav.find("li").removeClass("active").addClass("gradient");
					$(this).removeClass("gradient").addClass("active");
					tabNav.find("li a").attr("class","triangle down_gray");
					$(this).find("a").attr("class","triangle down_red");
					tabCon.hide().eq(index).show();
				});
			})
		}
		fnTab($(".tabNav1"),$(".tabCon1"),'click');
		fnTab($(".tabNav2"),$(".tabCon2"),'click');
		fnTab($(".tabNav3"),$(".tabCon3"),'mouseover');
		fnTab($(".tabNav4"),$(".tabCon4"),'mouseover');
	})();

	//pic 自动播放的焦点图
	(function(){
		var oDiv = $(".pic");
		var aUlLi = oDiv.find("ul li");
		var aOlLi = oDiv.find("ol li");
		var aP = oDiv.find("p");
		var arrText = [
			"爸爸去哪儿~","人像摄影中的光影感","娇柔妩媚、美艳大方"
		]
		var iNum = 0;
		function autoPlay(){
			iNum++;
			iNum %= arrText.length;
			aOlLi.eq(iNum).addClass("active").siblings().removeClass("active");
			aUlLi.hide().eq(iNum).stop().fadeIn();
			aP.text(arrText[iNum]);
		}
		aOlLi.each(function(index){
			$(this).click(function(){
				iNum = index-1;
				autoPlay(iNum);
			})
		})
		var timer = setInterval(autoPlay,2000);
		oDiv.hover(function(){
			clearInterval(timer);
		},function(){
			timer = setInterval(autoPlay,2000);
		})
	})();
	
	
	//BBS 高亮切换
	$(".bbs ol li").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
	});
	
	//HOT 半透明
	(function(){
		var arrText = [
			"",
			"用户名：赵敏<br/>人气：12345",
			"用户名：张无忌<br/>人气：12345",
			"用户名：张三丰<br/>人气：12222",
			"用户名：阿朱<br/>人气：11125",
			"用户名：小昭<br/>人气：12225",
			"用户名：周芷若<br/>人气：13345",
			"用户名：金毛狮王<br/>人气：11115",
			"用户名：白眉鹰王<br/>人气：11345",
			"用户名：紫衫龙王<br/>人气：11145",
			"用户名：青翼蝠王<br/>人气：10345"
		];
		$(".hot ul li").mouseover(function(){
			if($(this).index()==0){
				return;
			}
			$(".hot ul li div").remove();
			/* alert($(this).width()); */
			$(this).append('<div style="width:'+$(this).width()+'px"><p>'+arrText[$(this).index()]+'</p></div>').addClass("active");
		})
	})();
	 
})