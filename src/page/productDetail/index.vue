<template>
    <div class="productDetail">
        <van-nav-bar

                left-text=""
                title="商品详情"
                left-arrow
                @click-left="$router.go(-1)"
        >

        </van-nav-bar>

        <img src="../../img/toptu.jpg" class="topimg">
        <div class="part1">
            <h3 class="custom-title">商品名称</h3>
            <p>月售303 好评100%</p>

            <div>
                <span>¥12.00</span> <van-tag plain type="primary" color="#f00">7折</van-tag>
            </div>
        </div>
        <div class="part2">
            <van-cell title="商品详情" class="noFlex" value="" label="描述信息描述信息描述信息描述信息"/>
            <p style="padding: 10px 0 0 16px;">评价</p>
            <div class="pingjia">
                <p>(100%好评)</p>
                <dl>
                    <dt><img src="../../img/user-bg.jpg"></dt>
                    <dd>
                        <h3><span>匿名用户</span><em>2020-02-02</em></h3>
                        <van-rate v-model="rate" size="16"/>
                        <p>好吃，料很足u，推荐</p>
                        <div class="imgs">
                            <img src="../../img/user-bg.jpg">
                        </div>
                    </dd>
                </dl>
                <van-goods-action>
                    <van-goods-action-button
                            type="danger"
                            text="加入购物车"
                            @click="$router.push('/pingjia')"
                    />
                </van-goods-action>

            </div>

        </div>

    </div>
</template>
<script>
    import card from '@/components/card/index.vue';
    import {Toast} from 'vant';

    export default {
        components: {
            'vCard': card,
        },
        data() {
            return {
                activeKey: 0,
                active: 1,
                value: 0,
                rate:4.5,
                show: false,


                data: [
                    {
                        img: '',
                        title: ''
                    }, {
                        img: '',
                        title: ''
                    }, {
                        img: '',
                        title: ''
                    }
                ],
            }
        },
        onLoad() {


        },
        onReady() {

        },
        onShow() {


        },

        methods: {

            onChange() {
            }
        }
    }
</script>
<style lang='less'>
    @import "index.less";

</style>