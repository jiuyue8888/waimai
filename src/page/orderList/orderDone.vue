<template>
    <div class="orderDone">
        <van-nav-bar
                left-text="返回"
                left-arrow
                @click-left="$router.go(-1)"
        />
        <div class="part1">
            <van-cell title="订单已完成">
                <template #default>
                    <van-tag type="primary">再来一单</van-tag>
                    <van-tag type="primary">联系商家</van-tag>

                </template>
            </van-cell>

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
            <van-cell title="下单" value="预计今日5：00送达" />
            <van-cell title="收货地址">
                <template #default>
                    <p style="font-size: 12px">这里是地址这里是地址这里是<br/>联系人：张三<br/>电话：1268833772</p>
                </template>
            </van-cell>
            <van-cell title="备注" value="这里是备注" />
            <van-cell title="配送骑手">
                <template #default>
                    <p style="color: #2b7ff1"><van-icon name="phone" />电话骑手</p>
                </template>
            </van-cell>
        </div>

        <div class="part3">
            <van-cell title="订单号" value="9238747472332" />
            <van-cell title="支付方式" value="在线支付" />
            <van-cell title="下单时间" value="2020-02-02" />
        </div>


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