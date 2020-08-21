<template>
    <div class="changeTell">
        <van-nav-bar
                left-text="修改手机号"
                left-arrow
                @click-left="onClickLeft"
        />
        <van-field v-model="value" label="手机号码" placeholder="请输入新的手机号码" />
        <van-field
                v-model="sms"
                center
                clearable
                label="短信验证码"
                placeholder="请输入短信验证码"
        >
            <template #button>
                <van-button size="small" type="primary">发送验证码</van-button>
            </template>
        </van-field>
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