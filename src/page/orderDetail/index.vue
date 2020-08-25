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
            <p>这里是地址这里是地址这里是地址<br/>联系人：张三、电话：1268833772</p>

        </div>
        <div class="part2">
            <van-cell title="商家店铺" is-link to="/storeDetail" />
            <van-card
                    num="2"
                    price="2.00"
                    desc="描述信息"
                    title="商品标题"
                    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            />
            <van-card
                    num="2"
                    price="2.00"
                    desc="描述信息"
                    title="商品标题"
                    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            />
            <p><span>配送费</span><em>¥30</em></p>
            <p><span><van-tag type="danger">减</van-tag>店铺满减</span><em>-¥30</em></p>
            <p><span><van-tag type="danger">红包</van-tag>优惠</span><em>-¥30</em></p>
            <van-divider />
            <van-cell title="商家电话" icon="phone" value="实付：¥30" />
        </div>
        <div class="part3">
            <van-cell title="下单" is-link value="预计今日5：00送达" />
            <van-field v-model="text" label="备注" placeholder="请输入备注信息" label-width="2.2em"/>

        </div>

        <van-submit-bar :price="3050" button-text="立即支付" @submit="onSubmit" />

    </div>
</template>
<script>

    export default {

        data() {
            return {

            }
        },
        onLoad() {


        },
        onReady() {

        },
        onShow() {


        },

        methods: {}
    }
</script>
<style lang='less'>
    @import "index.less";

</style>