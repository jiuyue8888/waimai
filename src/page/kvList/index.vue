<template>
    <div class="kvList">
        <van-nav-bar
                left-text="美食排行榜"
                left-arrow
                @click-left="$router.push('/')"
        />
        <img src="../../img/toptu.jpg">
        <div class="kv-list">
            <vCard1 :data="data" :type="1"></vCard1>
        </div>


    </div>
</template>
<script>
    import card1 from '@/components/card1/index.vue';
    import {Toast} from 'vant';
    import {getShopStoreListFx} from '@/server/index.js';


    export default {
        components: {
            'vCard1': card1,
        },
        data() {
            return {
                tab: ['推荐', '美食', '旅行', '购物'],
                data: [],
            }
        },
        created() {
            getShopStoreListFx({
                tagId:this.$route.query.id
            }).then(res=>{
                this.data = res.body.shopList
            })

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