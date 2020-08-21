<template>
    <div class="join">

        <van-nav-bar title="加盟合作" left-arrow @click-left="$router.push('/center')"/>

        <van-cell center>
            <template #title>
                <div class="titie">
                    <img src="../../../static/img/index/cs.png">
                    <p>商家入驻<br><span>各式商家都可入驻</span></p>

                </div>

            </template>
            <template #right-icon>
                <van-button plain type="info" size="mini" @click="$router.push('/storeJoin')">立即申请</van-button>
            </template>
        </van-cell>
        <van-cell center>
            <template #title>
                <div class="titie">
                    <img src="../../../static/img/index/cs.png">
                    <p>骑手招募<br><span>海量订单 多劳多得</span></p>

                </div>

            </template>
            <template #right-icon>
                <van-button plain type="info" size="mini" @click="$router.push('/qishouJoin')">立即申请</van-button>
            </template>
        </van-cell>

    </div>
</template>
<script>


    export default {
        components: {

        },
        data(){
            return {

            }
        },
        onLoad(){


        },
        onReady() {

        },
        onShow(){


        },

        methods: {
            rightClick(){

            },

        }
    }
</script>
<style lang='less'>
    @import "index.less";

</style>