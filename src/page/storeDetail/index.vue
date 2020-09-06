<template>
    <div class="storeDetail">
        <van-nav-bar

                left-text=""
                title="商家店铺"
                left-arrow
                @click-left="$router.push('/')"
        >
            <template #right>
                <van-icon name="star" size="18" v-show="false"/>
            </template>
        </van-nav-bar>

        <img src="../../img/dpt.jpg" class="topimg">
        <div class="part1">
            <van-cell is-link>
                <!-- 使用 title 插槽来自定义标题 -->
                <template #title>
                    <h3 class="custom-title">{{detail.shopName}}</h3>
                    <p>{{detail.shopRemark}}</p>
                    <van-tag type="danger" v-for="(item,id) in detail.coupList" :key="id">¥{{item.fees}} 无门槛<em
                            v-show="false">领</em></van-tag>
                    <div>
                        <van-tag plain type="primary" color="#f00">{{detail.man_fee}}减{{detail.send_fee}}</van-tag>

                    </div>


                </template>
                <template #right-icon>
                    <img :src="detail.logo" width="60" height="60">
                </template>
            </van-cell>


        </div>
        <div class="part2">
            <van-tabs v-model="active">
                <van-tab title="点餐">
                    <img src="../../img/b1.jpg" class="kv">
                    <div class="diancan">
                        <van-sidebar v-model="activeKey" @change="onChange">

                            <van-sidebar-item :title="item.classifyName" :key="id" v-for="(item,id) in classifyList"/>

                        </van-sidebar>
                        <div class="order-list">
                            <!--@click-thumb="$router.push('/productDetail')"-->
                            <van-card
                                    v-for="(item,id) in orderList"
                                    :price="item.price"
                                    :key="id"

                                    :title="item.name"

                                    :thumb="item.pigUrl"
                            >
                                <template #tags>
                                    <span style="margin-top: 10px;display: block;">月售{{item.stockNum}} 好评100%</span>
                                </template>
                                <template #footer>
                                    <van-stepper v-model="item.carNum" theme="round" min="0" disable-input
                                                 @plus="plus(item)" @minus="minus(item)"
                                                 button-size="18"/>

                                </template>
                            </van-card>
                        </div>
                    </div>
                    <van-action-sheet v-model="show" title="购物车列表">
                        <div class="content">
                            <div v-for="(item,id) in shopCarList" :key="id" v-show="item.num>0">
                                <p><img :src="item.picUrl"/>{{item.goodsName}}</p>
                                <van-stepper v-model="item.num" theme="round" min="0" disable-input
                                             @plus="plus(item,'1')" @minus="minus(item,'1')"
                                             button-size="18"/>
                            </div>
                        </div>
                    </van-action-sheet>
                    <van-goods-action>
                        <van-goods-action-icon icon="cart-o" text="购物车" :badge="len" @click="show=true;getCart()"/>

                        <van-goods-action-button type="danger" text="立即下单" @click="submit"/>
                    </van-goods-action>

                </van-tab>
                <van-tab title="评价">
                    <div class="pingjia">
                        <p>(100%好评)</p>
                        <dl v-for="(item,id) in pj" :key="id">
                            <dt><img :src="item.userInfoAvatar"></dt>
                            <dd>
                                <h3><span>{{item.nickName}}</span><em>{{item.appDate}}</em></h3>
                                <van-rate v-model="item.dicId" size="16"/>
                                <p>{{item.appContent}}</p>
                                <div class="imgs" v-show="false">
                                    <img src="../../img/user-bg.jpg">
                                </div>
                            </dd>
                        </dl>
                        <van-goods-action>
                            <van-goods-action-button
                                    type="danger"
                                    text="我要评价"
                                    @click="$router.push({
                                    path:'/pingjia',
                                    query:{
                                    id:id
                                    }
                                    })"
                            />
                        </van-goods-action>

                    </div>
                </van-tab>
                <van-tab title="商家">
                    <div class="imgs" style="padding-left: 0.3rem;margin: 0.3rem 0;" v-show="false">
                        <img src="../../img/user-bg.jpg">
                        <img src="../../img/user-bg.jpg">
                        <img src="../../img/user-bg.jpg">
                    </div>
                    <van-cell title="商家介绍" class="noFlex" value="" :label="detail.detail"/>
                    <van-cell title="联系电话" class="noFlex" value="" :label="detail.shopKeeperTel"/>
                    <van-cell title="店铺地址" class="noFlex" value="" :label="detail.address"/>
                </van-tab>
            </van-tabs>
        </div>

    </div>
</template>
<script>
    import card from '@/components/card/index.vue';
    import {
        getGoodsListByshopId, getDetailByshopId, getGoodsByClassifyId, appraiseList,
        getShoppingCartAllList, addShoppingCart, getGoodsToOrder, updateShoppingCart,toShoppingCartList
    } from '@/server/index.js';
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
                rate: 4.5,
                show: false,
                len:0,
                detail: {},
                classifyList: [],
                orderList: [],
                shopCarList: [],
                shoppingCartId: [],
                id: '',
                pj: [],
                aid: 0,
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
        mounted() {
            let id = this.$route.query.id;
            this.id = id;
            const that = this;
            /*
            toShoppingCartList({
                shopId: id,
                userId:sessionStorage.getItem('id')
            }).then(res=>{
                that.orderList = res.body.shopCarList
            })*/

            getGoodsListByshopId({shopId: id}).then(res => {
                this.classifyList = res.body.classifyList;
            if(that.$route.query.type=='22'){
                res.body.classifyList.map((item,id)=>{
                    if(item.classifyId == that.$route.query.bid){
                    that.activeKey = id;
                    console.log(that.activeKey)
                }
            })
            }

                this.getGoods();
            })

            getDetailByshopId({shopId: id}).then(res => {
                that.detail = res.body
            })

            appraiseList({shopId: id}).then(res => {
                that.pj = res.body.appraiseList
            })

            this.getCart();

        },
        onReady() {

        },
        onShow() {


        },

        methods: {
            getGoods() {
                const that = this;
                let id = this.$route.query.id;

                getGoodsByClassifyId({
                    classifyId: this.classifyList[that.aid].classifyId,
                    shopId: id,
                    userId: sessionStorage.getItem('id')
                }).then(res => {
                    that.orderList = res.body.goodsList;

                })

            },

            //获取购物车列表
            getCart() {
                getShoppingCartAllList({
                    userId: sessionStorage.getItem('id')
                }).then(res => {
                    this.shopCarList = res.body.shopCarList[0]&&res.body.shopCarList[0].children;

                    let arr = [];
                    let len=0
                    res.body.shopCarList[0].children.map(item => {
                        arr.push(item.shoppingCartId)
                        len+=item.num;
                    })
                    this.shoppingCartId = arr;
                    this.len=len;
                })
            },
            minus(item,type) {
                setTimeout(() => {
                    updateShoppingCart({
                        shoppingCartId: item.shoppingCartId,
                        userId: sessionStorage.getItem('id'),
                        num: item.num
                    }).then(res => {
                        if (res.errorCode == -1) {
                            this.getCart()

                        }
                        this.getGoods()
                    })
                }, 300)
            },
            //添加
            plus(item,type) {
                setTimeout(() => {
                    addShoppingCart({
                        goodsId: item.goodsId,
                        openId: sessionStorage.getItem('id'),
                        price: item.price,
                        num: 1
                    }).then(res => {
                        if (res.errorCode == -1) {
                            this.getCart()

                        }
                        this.getGoods()
                    })
                }, 300)


            },
            onChange(value) {

                this.aid = value;
                this.getGoods();
            },
            submit() {
                getGoodsToOrder({
                    shoppingCartId: this.shoppingCartId.toString(),
                    userId: sessionStorage.getItem('id')
                }).then(res => {
                    Toast(res.msg)
                    if(res.errorCode==-1){
                        this.$router.push({
                            path:'/orderDetail',
                            query:{
                                id:this.shoppingCartId.toString()
                            }
                        })
                    }
                })
            }

        }
    }
</script>
<style lang='less'>
    @import "index.less";

</style>