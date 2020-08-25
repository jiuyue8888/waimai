<template>
    <div class="card">

        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
            >
                <div class="card1-list" v-for="(item,id) in list" :key="id">
                    <div v-show="type==1" class="topNO">
                        TOP{{id+1}}
                    </div>
                    <card :data="item" :type="type"></card>
                </div>
            </van-list>
        </van-pull-refresh>


    </div>
</template>
<script>
    import card from '../card/index';
    export default {
        components: {card},
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
