<template>
	<div class="coupon">
		<van-nav-bar

				left-text="优惠券"
				left-arrow
				@click-left="$router.push('/center')"
		/>
		<van-tabs v-model="active">
			<van-tab title="最新领券">
				<div class="couponList">
					<div class="van-coupon" v-for="(item,id) in coupons">

						<div class="top">
							<img :src="'//'+item.logo">
							<p>
								{{item.shopName}}<br>
								<span>{{item.startDate}}-{{item.endDate}}</span>
							</p>
							<p>
								¥{{item.fees}}<br>
								<span>满{{item.charge}}可用</span>
							</p>
						</div>
						<div class="down">
							<span>仅用于指定商家</span>
							<van-button round type="danger" size="mini">去使用</van-button>
						</div>
					</div>
				</div>
			</van-tab>
			<van-tab title="即将到期">
				<div class="couponList">
					<div class="van-coupon" v-for="(item,id) in disabledCoupons">

						<div class="top">
							<img :src="'//'+item.logo">
							<p>
								{{item.shopName}}<br>
								<span>{{item.startDate}}-{{item.endDate}}</span>
							</p>
							<p>
								¥{{item.fees}}<br>
								<span>满{{item.charge}}可用</span>
							</p>
						</div>
						<div class="down">
							<span>仅用于指定商家</span>
							<van-button round type="danger" size="mini">去使用</van-button>
						</div>
					</div>
				</div>
			</van-tab>
		</van-tabs>



	</div>
</template>
<script>

	import {getCounList} from '@/server/index.js';
	import { Toast } from 'vant';
	const coupon = {
		available: 1,
		condition: '无使用门槛\n最多优惠12元',
		reason: '',
		value: 150,
		name: '优惠券名称',
		startAt: 1489104000,
		endAt: 1514592000,
		valueDesc: '1.5',
		unitDesc: '元',
	};
	export default {
		components: {

		},
		data(){
			return {
				coupons: [coupon,coupon,coupon],
				disabledCoupons: [coupon],
				active:'0'
			}
		},
		onLoad(){


		},
		created() {
			getCounList({type:0}).then(res=>{
				this.coupons=res.body.list
			})
			getCounList({type:1}).then(res=>{
				this.disabledCoupons=res.body.list
			})
		},
		onShow(){


		},

		methods: {


		}
	}
</script>
<style lang='less'>
	@import "index.less";

</style>