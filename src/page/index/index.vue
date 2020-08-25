<template>
    <div class="home">
        <div class="head-box">
            <div class="container">
                <div class="address-box">
                    <van-icon name="location" color="rgb(0, 122, 255)"/>
                    <span>正在获取位置正在获取位置</span>
                </div>
                <van-search v-model="selectName" placeholder="请输入搜索关键词"/>
            </div>
        </div>
        <div class="container menu-box">


            <div class="item-box" v-for="(item,i) in menuList" :key="i">
                <img src="@/static/img/index/cs.png"/>
                <div class="tit">
                    <span>{{item.tit}}</span>
                </div>
            </div>
        </div>

        <!-- 轮播图 -->
        <div class=" bannerimg-box">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(item,index) in bannerData" :key="index">
                    <img :src="item.src" class="loaded"/>
                </van-swipe-item>
            </van-swipe>

        </div>
        <!-- 优惠专区 -->
        <div class="container margin-top sort-box">
            <div class="item-box">
                <span class="tit">优惠专区</span>
            </div>
            <div class="store-box">
                <div class="imgcls" v-for="(item,id) in dptjList" :key="id">
                    <img :src="'//'+item.disPic"/>
                    <div class="imgtitle"><img :src="'//'+item.shopLogo">
                        <span>{{item.shopName}}</span></div>
                    <div class="content">根据您看过的店推荐</div>
                </div>

            </div>

        </div>
        <!-- 去发现 -->
        <div class="faxian">
            <div class="btn-find">
                去发现
            </div>
        </div>

        <!-- 附近商家 到店自取 -->
        <van-tabs v-model="active" sticky>
            <van-tab v-for="(item,index) in items" :key="index" :title="item" title-style="titleList">
                <vCard :data="data" :type="type"></vCard>
            </van-tab>
        </van-tabs>

        <vTabBar :active="0"></vTabBar>

    </div>
</template>
<script>

    import card from '@/components/card/index.vue';
    import tabBar from '@/components/tabBar/index.vue';
    import {getClassifyList, getBannerList, getMainGoodsList, getShopStoreList} from '@/server/index';

    export default {
        components: {
            'vCard':card,
            'vTabBar':tabBar
        },
        data() {
            return {
                active:0,
                type:'0',
                lon: '',//经度
                lat: '',//纬度
                selectName: '',//商铺搜索名称
                defaultSelected: [],
                items: ['附近商家', '到店自取', '0元派送'],
                filterData: [{"name": "综合排序", "value": "综合排序"}, {"name": "距离最近", "value": "距离最近"}],
                current: 0,
                MPPR: 0,
                GDHEAD: 0,
                //显示没有更多商户
                showFoot: 0,
                downOption: {
                    auto: false //是否在初始化后,自动执行downCallback; 默认true
                },

                //导航列表
                menuList: [

                    {
                        img: '@/static/img/index/cs.png',
                        tit: '美食'
                    },
                    {
                        img: '@/static/img/index/sc.png',
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
                    {
                        img: '@/static/img/index/cs.png',
                        tit: '美食'
                    },
                    {
                        img: '@/static/img/index/sc.png',
                        tit: '同城闪购'
                    },

                ],

                //店铺推荐
                dptjList: [
                    {
                        img: '',
                        icon: '',
                        name: '披萨来了',
                        text: '根据您看过的店推荐'
                    }, {
                        img: '',
                        icon: '',
                        name: '披萨来了',
                        text: '根据您看过的店推荐'
                    }, {
                        img: '',
                        icon: '',
                        name: '披萨来了',
                        text: '根据您看过的店推荐'
                    }, {
                        img: '',
                        icon: '',
                        name: '披萨来了',
                        text: '根据您看过的店推荐'
                    }
                ],

                //附近商家
                fjsjList: [
                    {
                        img:'',
                        title:''
                    },{
                        img:'',
                        title:''
                    },{
                        img:'',
                        title:''
                    }
                ],
                //到店自取
                ddzqList: [
                    {
                        img:'',
                        title:''
                    },{
                        img:'',
                        title:''
                    },{
                        img:'',
                        title:''
                    }
                ],
                //0元派送
                lypsList: [
                    {
                        img:'',
                        title:''
                    },{
                        img:'',
                        title:''
                    },{
                        img:'',
                        title:''
                    }
                ],
                data:[],//商家列表

                //轮播图
                bannerData: [
                    {
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
            this.init();
        },
        methods: {
            init() {
                console.log(223)
                this.data = this.fjsjList;
                //获取导航
                getClassifyList({}).then(res => {
                })
                //获取优惠专区店铺
                getShopStoreList({}).then(res => {
                    this.dptjList = res.body.shopList
                })

                //获取周边商铺
                getMainGoodsList({
                    lon: this.lon,
                    lat: this.lat,
                    selectName: this.selectName
                }).then(res => {
                })

                //获取轮播
                getBannerList({type: 1}).then(res => {

                })
            },
            onClickItem(e) {
                if (this.current !== e.currentIndex) {
                    this.current = e.currentIndex;
                }
            },
            upCallback(page) {
                let that = this;
                //加载门店数据
                that.storeList = testData.storeList;
                //无更多商家
                that.showFoot = true;
                //隐藏加载
                that.mescroll.endSuccess(10);
            },
            //搜索
            goSearch() {
                uni.navigateTo({
                    url: '/pages/search/search?type=home'
                })
            }
        }
    }
</script>

<style lang="less">
    @import './index.less';
</style>
