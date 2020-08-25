<template>
    <div class="card">

        <van-pull-refresh v-model="refreshing" @refresh="onRefresh" v-show="type==0">
            <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
            >
                <div class="card-list" v-for="(item,id) in list" :key="id"
                @click="$router.push('/storeDetail')">
                    <van-card
                            title="星巴克咖啡"
                            thumb="//imgs.1op.cn/i/hxshop/banner/banner.jpg"
                    >

                        <template #tags>
                            <div class="c1">
                                <p>
                                    <span class="yello"><van-icon name="star" />4.6</span>
                                    <span>月售354</span>
                                </p>
                                <p>
                                    <span>30分钟</span>
                                    <span>693米</span>
                                </p>
                            </div>
                            <div class="c2">0元起送 免费配送</div>
                            <div class="c3">
                                <van-tag plain type="danger">35减2</van-tag>
                                <van-tag plain type="danger">35减2</van-tag>
                            </div>
                        </template>
                    </van-card>
                </div>
            </van-list>
        </van-pull-refresh>
        <div v-show="type!==0">
            <div class="card-list" >
                <van-card
                        title="星巴克咖啡"
                        thumb="//imgs.1op.cn/i/hxshop/banner/banner.jpg"
                >

                    <template #tags>
                        <div class="c1">
                            <p>
                                <span class="yello"><van-icon name="star" />4.6</span>
                                <span>月售354</span>
                            </p>
                            <p>
                                <span>30分钟</span>
                                <span>693米</span>
                            </p>
                        </div>
                        <div class="c2">0元起送 免费配送</div>
                        <div class="c3">
                            <van-tag plain type="danger">35减2</van-tag>
                            <van-tag plain type="danger">35减2</van-tag>
                        </div>
                    </template>
                </van-card>
            </div>
            <ul class="flist">
                <li v-for="(item,id) in 3" :key="id">
                    <img src="../../img/user-bg.jpg">
                    <p>瑞士卷</p>
                    <span>$33.9</span>
                </li>
            </ul>
        </div>


    </div>
</template>
<script>

    export default {
        components: {},
        props:['data','type'],
        data() {
            return {
                list:[],
                loading: false,
                finished: false,
                refreshing: false,

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

            },
            onLoad() {
                setTimeout(() => {
                    if (this.refreshing) {
                        this.list = [];
                        this.refreshing = false;
                    }

                    for (let i = 0; i < 10; i++) {
                        this.list.push(this.list.length + 1);
                    }
                    this.loading = false;

                    if (this.list.length >= 40) {
                        this.finished = true;
                    }
                }, 1000);
            },
            onRefresh() {
                // 清空列表数据
                this.finished = false;

                // 重新加载数据
                // 将 loading 设置为 true，表示处于加载状态
                this.loading = true;
                this.onLoad();
            },
        }
    }
</script>

<style lang="less">
    @import './index.less';
</style>
