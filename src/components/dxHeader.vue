<template>
	<header >
			<div class="box">
				<div class="home-logo home-logo2"></div>
				<ul class="menu">
					<li>
						<a href="#" title="保险选购">首页 </a>
					</li>
					<li>
						<a href="#" title="儿童保险">大象指南 </a>
					</li>
					<li>
						<a href="#" title="成人保险">保险指南 </a>
					</li>
					<li>
						<a href="#" title="中老年保险">新闻中心 </a>
					</li>
					<li class="about">
						<a href="" title="保险选购">关于大象 </a>
						<div class="s-warpper">
							<ul class="submenu">
								<li>
									<div class="triangle-border-up">
										<span></span>
									</div>
									<a href="#" title="养老保险" style="line-height: 20px;">关于我们</a>
								</li>
								<li>
									<div class="triangle-border-up">
										<span></span>
									</div>
									<a href="#" title="宠物保险" style="line-height: 20px;">加入我们</a>
								</li>
							</ul>
						</div>
					</li>
					<li class="downApp" title="保险选购">
						<a href="#" title="旅游保险">下载App</a>
						<div class="ewmBox">
							<img src="../../static/images/home_ewm_icon.png" class="home-ewm"/>
						</div>
					</li>
				</ul>
			</div>
	</header>
</template>

<script>
	export default{
		name:'dxHeader',
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped="scoped">
	@import '../../static/css/dxHeader.css';
	header {
	position: fixed;
	left:0;
	right:0;
	z-index: 9999;
	height: 80px;
	background: inherit;
    box-shadow:none;
}
header li a {
	color: #fff;
    line-height: 80px;
}
.headerBox {
	background: #fff;
	box-shadow: 0px 0px 6px 0px rgba(178, 178, 178, 0.35)!important;
}
.headerBox a {
	color: #666!important;
    line-height: 80px;
}
.home-logo {
	width:136px!important;
	height:36px!important;
	background:url(../../static/images/home_logo.png)!important;
	background-size: cover!important;
}
.home-logo2 {
	width:136px!important;
	height:36px!important;
	background:url(../../static/images/logo.png) !important;
	background-size: cover!important;
}
.active a {
	color: #fff;
    line-height: 80px;
}

.swiper-pagination-bullet-active{
    background: #ff3838;
}

.headerBox a:hover{
    color: #333!important;
}

.submenu li a:hover{
    color: #333;
}
</style>