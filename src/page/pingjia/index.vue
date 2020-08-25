<template>
    <div class="pj">
        <van-nav-bar

                title="评价"
                left-arrow
                @click-left="$router.go(-1)"
        />

        <van-cell>
            <template #title>
                <p class="storeName"><img src="../../img/b1.jpg">店铺名称</p>
            </template>
            <template #default>
                <van-rate v-model="value" />
            </template>
        </van-cell>
        <van-field
                v-model="message"
                rows="2"
                autosize
                type="textarea"
                minlength="50"
                autosize
                placeholder="请写下您对商家的评价"
                show-word-limit
        />
        <el-button type="warning" round>提交评价</el-button>

    </div>
</template>
<script>

    export default {
        components: {

        },
        data(){
            return {
                value:3,
                message:''
            }
        },
        onLoad(){


        },
        onReady() {

        },
        onShow(){


        },

        methods: {

        }
    }
</script>
<style lang='less'>
    @import "index.less";

</style>