var common = {
	//获得整个body的寛高
	getbody:function(){
		return{
			width:document.documentElement.clientWidth||document.body.clientWidth,
			height:document.documentElement.clientHeight||document.body.clientHeight
		}
	},
	//设置元素样式
	setStyle:function(obj,attrObj){
		for(var key in attrObj){
			obj.style[key]=attrObj[key];
		}
	},
	
	//让元素在窗口范围内绝对居中
	showCenter:function(obj){
		//让登录框显示
		obj.style.display="block";
		
		//计算坐标
		let _this=this;
		
		function center(){
			var _top=(_this.getbody().height-obj.offsetHeight)/2;
			var _left=(_this.getbody().width-obj.offsetWidth)/2;
			//调用setstyle设置元素样式
			_this.setStyle(obj,{
				position:"absolute",
				left:_left+"px",
				top:_top+"px"
			});
		};
		center();
		//窗口大小改变时重新计算坐标
		window.onresize=center;
	}
}
