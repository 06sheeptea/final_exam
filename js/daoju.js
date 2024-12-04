class Daoju{
	constructor(select){
		this.map=document.querySelector(select)
		// 创建道具
		this.daoju=document.createElement("div")
		this.daoju.className="daoju"
		//在地图中生成
		this.map.appendChild(this.daoju)
		this.x=0
		this.y=0
		//调用随机生成坐标
		this.daojuPos()
	}
	//随机
	daojuPos(){
		//获取地图范围
		const w_nub=this.map.clientWidth/20
		const h_nub=this.map.clientHeight/20
		//随机生成坐标
		let n1=Math.floor(Math.random()*w_nub)
		let n2=Math.floor(Math.random()*h_nub)
		this.x=n1*20
		this.y=n2*20
		this.daoju.style.left=this.x+"px"
		this.daoju.style.top=this.y+"px"
		}
}