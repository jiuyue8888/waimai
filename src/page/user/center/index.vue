<template>  
    <div class="center">
        <div class="top">
            <div class="user">

                <img v-if="photo!='no'" :src="photo">
                <img v-else src="../../../static/img/user/missing-face.png">
                <p v-if="isLogin">
                    {{name}}
                    <br>  <van-icon name="diamond" />超级会员
                </p>
                <p v-else><span @click="$router.push('/login')">登陆／</span>
                    <span @click="$router.push('/register')">注册</span></p>
            </div>
            <van-icon name="setting-o" class="setting" @click="$router.push('/setting')"/>
        </div>
        <div class="part1">
            <van-cell title="我的订单" is-link value="查看全部订单" to="/orderList"/>
            <van-grid :border="false">
                <van-grid-item icon="pending-payment" text="待付款" />
                <van-grid-item icon="logistics" text="待收货" />
                <van-grid-item icon="records" text="待评价" />
                <van-grid-item icon="refund-o" text="全部订单" />
            </van-grid>
        </div>
        <div class="part2" v-show="isLogin">
            <van-grid :border="false" :column-num="3">
                <van-grid-item icon="coupon" text="优惠券" @click="$router.push('/coupon')"/>
                <van-grid-item icon="star" text="我的收藏" @click="$router.push('/star')"/>
                <van-grid-item icon="map-marked" text="我的地址" @click="$router.push('/address')"/>
                <van-grid-item icon="friends" text="骑手招募" @click="$router.push('/qishouJoin')"/>
                <van-grid-item icon="bell" text="点餐提醒" @click="$router.push('/remind')"/>
                <van-grid-item icon="shop-collect" text="加盟代理" @click="$router.push('/join')"/>
            </van-grid>
        </div>
		<vTabBar :active="3"/>
    </div>  
</template>  
<script>  
	import tabBar from '@/components/tabBar';
    import {getCusMsg} from '@/server/index.js';
    import {Toast} from 'vant';
    export default {
		components: {
			'vTabBar':tabBar
		},
		data(){
			return {
			    isLogin:sessionStorage.getItem("tel")!==''&&sessionStorage.getItem("tel")!==null&&
                sessionStorage.getItem("tel")!==undefined,
               name:'',
                photo:'no',
                tel:''
			}
		},
		onLoad(){

		},
		created() {
		    console.log(sessionStorage.getItem("tel"))
		    if(sessionStorage.getItem("tel")==''){
		        return;
            }
            getCusMsg({phone:sessionStorage.getItem("tel")}).then(res=>{
                if(res.errorCode!=-1){
                    Toast(res.msg)
                    return;
                }
                this.name=res.body.map.name;
                this.photo=(res.body.map.logo==''||res.body.map.logo==null||res.body.map.logo==undefined)?
                'no':res.body.map.logo;
                this.tel=res.body.map.tel;
                sessionStorage.setItem("id",res.body.map.id)
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