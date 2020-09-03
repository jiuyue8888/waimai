<template>
    <div class="orderDetail">
        <van-nav-bar
                left-arrow
                @click-left="$router.go(-1)"
        />
        <div class="part1">
            <span>
                收货地址
            </span>
            <p>{{detail.detail}}<br/>联系人：{{detail.name}}、
                电话：{{detail.tel}}</p>

        </div>
        <div class="part2">
            <van-cell :title="detail.children[0].shopName" is-link
                      :to="{path:'/storeDetail',query:{id:detail.children[0].shopId}}" />
            <van-card
                    v-for="(item,id) in detail.children"
                    :key="id"
                    :num="item.num"
                    :price="item.price"
                    :desc="描述信息"
                    :title="item.goodsName"
                    :thumb="'//'+item.shoplogo"
            />

            <div v-show="false">
                <p><span>配送费</span><em>¥30</em></p>
                <p><span><van-tag type="danger">减</van-tag>店铺满减</span><em>-¥30</em></p>
                <p><span><van-tag type="danger">红包</van-tag>优惠</span><em>-¥30</em></p>
            </div>

            <van-divider />
            <van-cell title="商家电话" icon="phone" :value="'实付：¥'+detail.countprice" />
        </div>
        <div class="part3">
            <van-cell title="下单" is-link value="预计今日5：00送达" />
            <van-field v-model="remark" label="备注" placeholder="请输入备注信息" label-width="2.2em"/>

        </div>

        <van-submit-bar :price="detail.countprice*100" button-text="立即支付" @submit="onSubmit" />

    </div>
</template>
<script>
    import {getGoodsToOrder,toAddOrderRecord,toPayOrder} from '@/server/index.js';
    import {Toast} from 'vant';
    export default {

        data() {
            return {
                detail:{},
                remark:''
            }
        },
        mounted() {
            getGoodsToOrder({
                shoppingCartId: this.$route.query.id,
                userId: sessionStorage.getItem('id')
            }).then(res => {
                this.detail=res.body.shopList[0]
            })

        },
        onReady() {

        },
        onShow() {


        },

        methods: {
            onSubmit(){
                toAddOrderRecord({
                    userId:sessionStorage.getItem('id'),
                    addressId:this.detail.addressId,
                    payType:1,
                    remark:this.remark,
                    orderPrice:this.detail.countprice,
                    ifKd:this.detail.ifKd,
                    kdPrice:this.detail.kdPrice||0,
                    shopId:this.detail.children[0].shopId,
                    ifNew:this.detail.ifNew,
                    newPrice:this.detail.newPrice||0,
                    shoppingCartId:this.$route.query.id
                }).then(res=>{
                    Toast(res.msg)
                    toPayOrder({
                        money:this.detail.countprice,
                        userId:sessionStorage.getItem('id'),
                        orderNumber:res.body.orderId,
                        type:2
                    }).then(res=>{
                        //window.open(res.body.url)
                        axios.post(res.body.url)
                    })
                })
            }
        }
    }
</script>
<style lang='less'>
    @import "index.less";

</style>