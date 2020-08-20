<template>
	<div>
		<div class="head-box">
			<div class="navbar"></div>
			<div class="container">
				<div class="right" :style="'padding-right: ' + MPPR + 'px'">
					<div class="address-box">
						<van-icon name="location" color="rgb(0, 122, 255)"/>
						<span>正在获取位置...</span>
					</div>
				</div>
				<div class="left">
					<div class="search-box" :class="{'QZBG':GDHEAD}" :style="GDHEAD ? 'padding-right: ' + MPPR + 'px' : ''">
						<div class="ctn">
							<div class="hx-search-box" @click="goSearch">
								<span>奶茶</span>

							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
		<mescroll-body ref="mescrollRef" :down="downOption" @up="upCallback">
			<view class="container menu-box">
				<view class="item-box" v-for="(item,i) in menuList" :key="i">
					<image :src="item.img" mode=""></image>
					<view class="tit">
						<text>{{item.tit}}</text>
					</view>
				</view>
			</view>
			<view class="container menu-box">
				<view class="item-box" v-for="(item,i) in secondMenuList" :key="i">
					<image :src="item.img" mode=""></image>
					<view class="tit">
						<text>{{item.tit}}</text>
					</view>
				</view>
			</view>
			<!-- 轮播图 -->
			<view class=" bannerimg-box">
				<swiper circular duration="400" interval="10000" autoplay>
					<swiper-item class="swiper-item bannerImg" v-for="(item,index) in bannerData" :key="index">
						<!-- 图片尺寸为 750*250 -->
						<image :src="item.src" class="loaded" mode="widthFix"></image>
					</swiper-item>
				</swiper>
			</view>
			<!-- 优惠专区 -->
			<view class="container margin-top sort-box">
				<view class="item-box">
					<text class="tit">优惠专区</text>
				</view>
				<view class="store-box">
					<view class="imgcls">
						<image src="../../static/img/b1.jpg"></image>
						<view class="imgtitle">
							披萨来了
						</view>
						<view class="content">
							根据您看过的店推荐
						</view>
					</view>
					<view class="imgcls">
						<image src="../../static/img/b1.jpg"></image>
						<view class="imgtitle">
							披萨来了
						</view>
						<view class="content">
							根据您看过的店推荐
						</view>
					</view>

				</view>
				<view class="store-box">
					<view class="imgcls">
						<image src="../../static/img/b1.jpg"></image>
						<view class="imgtitle">
							披萨来了
						</view>
						<view class="content">
							根据您看过的店推荐
						</view>
					</view>
					<view class="imgcls">
						<image src="../../static/img/b1.jpg"></image>
						<view class="imgtitle">
							披萨来了
						</view>
						<view class="content">
							根据您看过的店推荐
						</view>
					</view>
				</view>
			</view>
			<!-- 去发现 -->
			<view class="faxian">
				<view class="btn-find">
					去发现
				</view>
			</view>
			<view class="youhui clearfix">
				<view class="youhui-item">
					<view class="item-left">
						<text class="left-item">减配送费</text>
						<text class="left-bottom">配送费0元起</text>
					</view>
					<view class="item-right">

					</view>
				</view>
				<view class="youhui-item">
					<view class="item-left">
						<text class="left-item">减配送费</text>
						<text class="left-bottom">配送费0元起</text>
					</view>
				</view>
				<view class="youhui-item">
					<view class="item-left">
						<text class="left-item">减配送费</text>
						<text class="left-bottom">配送费0元起</text>
					</view>
				</view>
				<view class="youhui-item">
					<view class="item-left">
						<text class="left-item">减配送费</text>
						<text class="left-bottom">配送费0元起</text>
					</view>
				</view>
			</view>
			<!-- 附近商家 到店自取 -->
			<view class="content">
				<view style="margin-top: 20upx;">
					<zzx-tabs :items="items" :current="current" @clickItem="onClickItem" ref="mytabs">
					</zzx-tabs>
				</view>
				<view style="margin-top: 20upx;margin-left: 40upx;color:#999999;font-size: 30upx;height: auto;">
					<view v-show="current === 0">
						<!-- 欠缺一个筛选功能 -->
						<view class=" store-box" v-if="storeList">
							<view class=" item-box" v-for="(store,i) in storeList" :key="i">
								<view class="container top-box">
									<view class="left">
										<image :src="store.avatar" mode="aspectFill"></image>
									</view>
									<view class="right" >
										<text class="tit">{{store.name}}（{{store.community}}）</text>
										<view class="row justify-content">
											<view class="row-left">
												<i class="hxicon-favorfill "></i>
												<text class="t1">{{store.mark}}</text>
												<text class="t2">月售{{store.monthly_sales}}</text>
											</view>
											<view class="row-right">
												<text>30分钟</text>
											</view>
											<view class="row-right">
												<text>{{store.distance}}米</text>
											</view>
										</view>
										<view class="row">
											<text>起送￥{{store.starting_price}}</text>
											<text class="t2" v-if="store.shipping_dees > 0">配送￥{{store.shipping_dees}} </text>
											<text class="t2" v-else>免费配送</text>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
					<view v-show="current === 1">
						到店自取
					</view>
				</view>
			</view>
		</mescroll-body>
		<div class="footzw"></div>
	</div>
</template>
<script>
	
	//引入测试数据
	
	export default {
		components: {
			
		},
		data() {
			return {
				defaultSelected:[],
				items: ['附近商家', '到店自取'],
				filterData:[{"name":"综合排序","value":"综合排序"},{"name":"距离最近","value":"距离最近"}],
				current: 0,
				MPPR: 0,
				GDHEAD: 0,
				//显示没有更多商户
				showFoot: 0,
				downOption: {
					auto: false //是否在初始化后,自动执行downCallback; 默认true
				},
				menuList: [

					{
						img: '/static/img/index/cs.png',
						tit: '美食'
					},
					{
						img: '/static/img/index/sc.png',
						tit: '同城闪购'
					},
					{
						img: '/static/img/index/sg.png',
						tit: '生鲜蔬果'
					},
					{
						img: '/static/img/index/xh.png',
						tit: '鲜花蛋糕'
					},
					{
						img: '/static/img/index/yd.png',
						tit: '跑腿代购'
					},

				],
				secondMenuList: [

					{
						img: '/static/img/index/cs.png',
						tit: '甜点饮品'
					},
					{
						img: '/static/img/index/sc.png',
						tit: '汉堡快餐'
					},
					{
						img: '/static/img/index/sg.png',
						tit: '火锅外卖'
					},
					{
						img: '/static/img/index/xh.png',
						tit: '到店自取'
					},
					{
						img: '/static/img/index/yd.png',
						tit: '全部分类'
					},

				],
				storeList: [],
				bannerData: [{
						page: '/pages/product/product?id=457',
						src: '//imgs.1op.cn/i/hxshop/banner/banner.jpg'
					},
					{
						page: '/pages/product/product?id=57',
						src: '//imgs.1op.cn/i/hxshop/banner/banner.jpg'
					},
					{
						page: '/pages/product/product?id=95',
						src: '//imgs.1op.cn/i/hxshop/banner/banner.jpg'
					},
					{
						page: '/pages/product/product?id=45',
						src: '//imgs.1op.cn/i/hxshop/banner/banner.jpg'
					}
				],

			}
		},
		onLoad() {
			let that = this;
			
		},
		mounted() {
			let that = this;

		},
		methods: {
			
		}
	}
</script>

<style lang="less">
	@import './index.less';
</style>
