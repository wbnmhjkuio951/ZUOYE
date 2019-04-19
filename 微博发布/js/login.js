class Login{
	constructor(btn){
		this.btn=document.querySelector(btn);
		this.container=document.querySelector("#container");
		this.a=document.querySelector("#a");
		this.date=new Date();
		//console.log(this.a);
		this.bindEvents();
	}

//给按钮绑定事件
bindEvents () {	
	let _this=this;
	
	//点击事件
	this.btn.onclick=function(){
		//console.log(_this);
		
		//创建登录框
		_this.container.innerHTML='<h4>微博发布</h4>'+
	'<a id="closeBtn" class="close_btn" href="javascript:;">×</a>'+
	'<p><label>用户名：<input id="username" type="text"></label></p>'+
	'<p><label>内　容：<input id="password" type="text"></label></p>'+
	'<p><button id="loginBtn" class="logonBtn" type="button">确认发布</button></p>';
	
	
	//使登录框居中 调用common
	common.showCenter(_this.container);
	
	//模态层
	_this.modal=document.createElement("div");
	_this.modal.className="modal";
	document.body.appendChild(_this.modal);
	}
	
	//关闭
	this.container.onclick = function (e) {
			e = e || window.event;
			var target = e.target || e.srcElement;			
			switch(target.id) {
				case "loginBtn":
					let username = document.querySelector("#username").value;
					let password = document.querySelector("#password").value;
					//创建div 发布框
					var shuchu=document.createElement("div");
					this.a.appendChild(shuchu);
					shuchu.innerHTML="用户:"+username+"    ："+password+"<br>"+"发送时间："
					+this.date+"<br>"+"<hr>";
					
					
				case "closeBtn" :
					_this.container.style.display = "none";
					document.body.removeChild(_this.modal);
			}	
	}.bind(this);
	
	
	//右键撤销
	var box=document.getElementsByTagName("ul")[0];
			//console.log(box);
	var lis=document.querySelectorAll("li");
    this.a.oncontextmenu = function (e) {
				e = e || event;
				if(e.preventDefault){
					//IE
					e.preventDefault();
				}else{
					// 非IE
					window.event.returnValue = false;
				}				 
				if(e.button==2){
					console.log(2);
					box.className="bl";
					for (var i=0;i<lis.length;i++) {
						lis[i].className="bl";
					}
					box.style.top=e.clientY+"px";
					box.style.left=e.clientX+"px";
				}
				window.onclick=function(){
					box.className="";
					
				}
				}.bind(this);
}

}
