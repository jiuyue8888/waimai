<template>
    <div class="orderList">
        <van-nav-bar

                left-arrow
                @click-left="$router.go(-1)"
        />
        <van-cell label="预计30分后到达" title="正在为您配送">
            <template #default>
                <van-tag type="primary"><a :href="'tel:' + detail.couriertel" style="color: #fff;">催单</a></van-tag>
                <van-tag type="success" v-show="detail.type!=2">
                    联系商家</van-tag>
            </template>

        </van-cell>
        <van-cell label="好评100%">

            <template #title>
                <p class="doing"><img src="../../img/bg.jpg"> {{detail.courierName}}</p>
            </template>
            <template #default>
                <a :href="'tel:' + detail.couriertel" style="color: #666">
                    <van-icon name="phone" style="font-size: 25px"/>
                </a>
            </template>

        </van-cell>


    </div>
</template>
<script>

    import {toOrderRecordDetail} from '@/server/index.js';
    import {Toast} from 'vant';

    export default {

        data() {
            return {
                detail:{}
            }
        },
        mounted() {
            toOrderRecordDetail({
                orderRecordPId:this.$route.query.id,
                userId:sessionStorage.getItem('id'),
                type:this.$route.query.type,
            }).then(res=>{
                this.detail=res.body.list
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