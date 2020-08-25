<template>
    <div class="storeDetail">
        <van-nav-bar

                left-text=""
                title="商家店铺"
                left-arrow
                @click-left="$router.push('/')"
        >
            <template #right>
                <van-icon name="star" size="18"/>
            </template>
        </van-nav-bar>

        <img src="../../img/dpt.jpg" class="topimg">
        <div class="part1">
            <van-cell is-link>
                <!-- 使用 title 插槽来自定义标题 -->
                <template #title>
                    <h3 class="custom-title">汉堡店</h3>
                    <p>骑手约30分钟送达·月售156·可自取</p>
                    <van-tag type="danger">¥6 无门槛<em>领</em></van-tag>
                    <div>
                        <van-tag plain type="primary" color="#f00">30减5</van-tag>
                        <van-tag plain type="primary" color="#f00">30减5</van-tag>
                    </div>
                    <p>公告:温馨提示：雨天路由点化</p>

                </template>
                <template #right-icon>
                    <img src="../../img/dpt.jpg" width="60" height="60">
                </template>
            </van-cell>


        </div>
        <div class="part2">
            <van-tabs v-model="active">
                <van-tab title="点餐">
                    <img src="../../img/b1.jpg" class="kv">
                    <div class="diancan">
                        <van-sidebar v-model="activeKey" @change="onChange">
                            <van-sidebar-item title="标签名称"/>
                            <van-sidebar-item title="标签名称"/>
                            <van-sidebar-item title="标签名称"/>
                        </van-sidebar>
                        <div class="order-list">
                            <van-card
                                    price="2.00"
                                    desc="描述信息"
                                    title="商品标题"
                                    @click-thumb="$router.push('/productDetail')"
                                    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                            >
                                <template #tags>
                                    <span>月售300 好评100%</span>
                                </template>
                                <template #footer>
                                    <van-stepper v-model.number="value" theme="round" min="0"
                                                 button-size="18"/>

                                </template>
                            </van-card>
                        </div>
                    </div>
                    <van-action-sheet v-model="show" title="购物车列表">
                        <div class="content">
                            <div>
                                <p><img src="../../img/b1.jpg"/>商品标题</p>
                                <van-stepper v-model.number="value" theme="round" min="0"
                                             button-size="18"/>
                            </div>
                            <div>
                                <p><img src="../../img/b1.jpg"/>商品标题</p>
                                <van-stepper v-model.number="value" theme="round" min="0"
                                             button-size="18"/>
                            </div>
                            <div>
                                <p><img src="../../img/b1.jpg"/>商品标题</p>
                                <van-stepper v-model.number="value" theme="round" min="0"
                                             button-size="18"/>
                            </div>
                        </div>
                    </van-action-sheet>
                    <van-goods-action>
                        <van-goods-action-icon icon="cart-o" text="购物车" badge="5" @click="show=true"/>
                        <van-goods-action-button type="warning" text="加入购物车"/>
                        <van-goods-action-button type="danger" text="立即下单" @click="$router.push('/orderDetail')"/>
                    </van-goods-action>

                </van-tab>
                <van-tab title="评价">
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
                                    text="我要评价"
                                    @click="$router.push('/pingjia')"
                            />
                        </van-goods-action>

                    </div>
                </van-tab>
                <van-tab title="商家">
                    <div class="imgs" style="padding-left: 0.3rem;margin: 0.3rem 0">
                        <img src="../../img/user-bg.jpg">
                        <img src="../../img/user-bg.jpg">
                        <img src="../../img/user-bg.jpg">
                    </div>
                    <van-cell title="商家介绍" class="noFlex" value="" label="描述信息描述信息描述信息描述信息"/>
                    <van-cell title="联系电话" class="noFlex" value="" label="188888888"/>
                    <van-cell title="店铺地址" class="noFlex" value="" label="店铺地址店铺地址店铺地址店铺地址店铺地址"/>
                </van-tab>
            </van-tabs>
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
                active: 0,
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