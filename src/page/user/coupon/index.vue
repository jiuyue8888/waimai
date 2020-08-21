<template>
	<div class="coupon">
		<van-nav-bar

				left-text="优惠券"
				left-arrow
				@click-left="$router.push('/center')"
		/>
		<van-tabs v-model="active">
			<van-tab title="最新领券"></van-tab>
			<van-tab title="即将到期"></van-tab>
		</van-tabs>

		<div class="couponList">
			<div class="van-coupon" v-for="(item,id) in coupons">

				<div class="top">
					<img src="../../../static/img/user/user-bg.jpg">
					<p>
						周黑鸭<br>
						<span>2020.07.21 15:56-2020.07.21 23:59</span>
					</p>
					<p>
						¥6<br>
						<span>满49可用</span>
					</p>
				</div>
				<div class="down">
					<span>仅用于指定商家</span>
					<van-button round type="danger" size="mini">去使用</van-button>
				</div>
			</div>
		</div>

	</div>
</template>
<script>

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
			}
		},
		onLoad(){


		},
		onReady() {

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