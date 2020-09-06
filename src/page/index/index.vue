<template>
    <div class="home">
        <div class="head-box">
            <div class="container">
                <div class="address-box">
                    <van-icon name="location" color="rgb(0, 122, 255)"/>
                    <span>{{add!=''?add:'正在获取位置正在获取位置'}}</span>
                </div>
                <van-search v-model="selectName" shape="round" placeholder="请输入搜索关键词"/>
            </div>
        </div>
        <div class="container menu-box">


            <div class="item-box" v-for="(item,i) in menuList" :key="i" @click="$router.push({
            path:'storeDetail',
            query:{
            id:item.shopId,
            bid:item.baseUrl,
            type:item.urlType
            }
            })">
                <img :src="item.icon"/>
                <div class="tit">
                    <span>{{item.name}}</span>
                </div>
            </div>
        </div>

        <!-- 轮播图 -->
        <div class=" bannerimg-box">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(item,index) in bannerData" :key="index" @click="$router.push({
            path:'storeDetail',
            query:{
            id:item.shopId,
            bid:item.baseUrl,
            type:item.urlType
            }
            })">
                    <img :src="item.bannerUrl" class="loaded"/>
                </van-swipe-item>
            </van-swipe>

        </div>
        <!-- 优惠专区 -->
        <div class="container margin-top sort-box">
            <div class="item-box">
                <span class="tit">优惠专区</span>
            </div>
            <div class="store-box">
                <div class="imgcls" v-for="(item,id) in dptjList" :key="id" @click="$router.push({
            path:'storeDetail',
            query:{
            id:item.shopId,
            bid:item.baseUrl,
            type:item.urlType
            }
            })">
                    <img :src="item.disPic"/>
                    <div class="imgtitle"><img :src="item.shopLogo">
                        <span>{{item.shopName}}</span></div>
                    <div class="content">根据您看过的店推荐</div>
                </div>

            </div>

        </div>
        <!-- 去发现 -->
        <div class="faxian">
            <div class="btn-find" @click="$router.push('/faxian')">
                去发现
            </div>
        </div>
        <ul class="homeKv">
            <li v-for="(item,id) in kvs" @click="$router.push({path:'/storeDetail',
            query:{
            id:item.shopId,
            bid:item.baseUrl,
            type:item.urlType
            }})">
                <div>
                    <p>{{item.baseName}}</p>
                    <span>{{item.orgName}}</span>
                </div>
                <img :src="item.bannerUrl">
            </li>

        </ul>

        <!-- 附近商家 到店自取 -->
        <div>
            <span class="tit" style="font-size: 20px;line-height: 50px">附近商家</span>
            <vCard :data="data" :type="0"></vCard>
        </div>

        <!--
        <van-tabs v-model="active" sticky>
            <van-tab v-for="(item,index) in items" :key="index" :title="item" title-style="titleList">
                <van-dropdown-menu active-color="#1989fa">
                    <van-dropdown-item v-model="value1" :options="option1" />
                    <van-dropdown-item v-model="value2" :options="option2" />
                    <van-dropdown-item v-model="value2" :options="option2" />
                    <van-dropdown-item v-model="value2" :options="option2" />
                </van-dropdown-menu>

                <vCard :data="data" :type="0"></vCard>
            </van-tab>
        </van-tabs>
        -->

        <vTabBar :active="0"></vTabBar>

    </div>
</template>
<script>

    import card from '@/components/card/index.vue';
    import tabBar from '@/components/tabBar/index.vue';
    import {getClassifyList, getBannerList, getMainGoodsList, getShopStoreList} from '@/server/index';

    export default {
        components: {
            'vCard': card,
            'vTabBar': tabBar
        },
        data() {
            return {
                active: 0,
                type: '0',
                add:'',
                lon: '112.535959',//经度
                lat: '37.867343',//纬度
                selectName: '',//商铺搜索名称
                items: ['附近商家', '', ''],
                value1: 0,
                value2: 'a',
                option1: [
                    {text: '全部商品', value: 0},
                    {text: '新款商品', value: 1},
                    {text: '活动商品', value: 2},
                ],
                option2: [
                    {text: '默认排序', value: 'a'},
                    {text: '好评排序', value: 'b'},
                    {text: '销量排序', value: 'c'},
                ],

                //导航列表
                menuList: [],

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
                //到店自取
                ddzqList: [
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
                //0元派送
                lypsList: [
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
                data: [],//商家列表

                //轮播图
                bannerData: [],
                kvs: []
            }
        },
        onLoad() {
            let that = this;

        },
        mounted() {
            let that = this;
            if (navigator.geolocation) {
                var geolocation = new BMap.Geolocation();
                geolocation.getCurrentPosition(function getinfo(position) {
                    console.log(position)
                    that.add = position.address.city
                    that.lon = position.point.lng;
                    that.lat = position.point.lat
                }, function (e) {
                    alert("获取百度定位位置信息失败");
                }, {provider: 'baidu'});

            }
            this.init();
        },
        methods: {
            init() {
                console.log(223)
                this.data = this.fjsjList;
                //获取导航
                getClassifyList({}).then(res => {
                    this.menuList = res.body.classifyList;
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
                    this.data = res.body.shopList
                })

                //获取轮播
                getBannerList({type: 1}).then(res => {
                    this.bannerData = res.body.bannerList
                })
                //发现轮播
                getBannerList({type: 2}).then(res => {

                })
                // 发现后面的分类
                getBannerList({type: 3}).then(res => {
                    this.kvs = res.body.bannerList
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
