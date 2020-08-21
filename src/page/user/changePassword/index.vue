<template>
    <div class="changePassword">
        <van-nav-bar
                left-text="修改密码"
                left-arrow
                @click-left="onClickLeft"
        />
        <van-field v-model="value" placeholder="请输入当前密码" />
        <van-field v-model="value" placeholder="请输入新密码" />
        <van-field v-model="value" placeholder="再次输入新密码" />

        <van-button type="info">保存</van-button>
    </div>
</template>
<script>

    import { Toast } from 'vant';
    export default {
        components: {

        },
        data(){
            return {
                value: '',
            }
        },
        onLoad(){


        },
        onReady() {

        },
        onShow(){


        },

        methods: {
            onClickLeft() {
                this.$router.push('/setting')
            },



        }
    }
</script>
<style lang='less'>
    @import "index.less";

</style>