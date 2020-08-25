<template>
    <div class="login">
        <van-nav-bar
                title="注册"
                left-text=""
                right-text="登陆"
                left-arrow
                @click-left="$router.push('/center')"
                @click-right="$router.push('/login')"
        />

        <img src="../../../img/logo.png">
        <van-cell-group>
            <van-field
                    v-model="value1"
                    label-width="1em"
                    placeholder="请输入手机号／邮箱"
            >
                <template #label>
                    <i class="el-icon-message"></i>
                </template>
            </van-field>


            <van-field
                    v-model="sms"
                    label-width="1em"
                    center
                    clearable
                    placeholder="请输入短信验证码"
            >
                <template #label>
                    <i class="el-icon-key"></i>
                </template>
                <template #button>
                    <van-button size="small" type="primary">发送验证码</van-button>
                </template>
            </van-field>

            <van-field
                    v-model="value1"
                    label-width="1em"
                    placeholder="请输入密码"
            >
                <template #label>
                    <i class="el-icon-lock"></i>
                </template>

            </van-field>
            <van-field
                    v-model="value1"
                    label-width="1em"
                    placeholder="请再次输入密码"
            >
                <template #label>
                    <i class="el-icon-lock"></i>
                </template>
            </van-field>
        </van-cell-group>
        <p class="text">注册即表示同意并遵守《注册使用协议》</p>
        <van-button type="default" style="display:block;width: 90%;margin: 0 auto">立即注册</van-button>
    </div>
</template>
<script>


    export default {
        components: {},
        data() {
            return {}
        },
        onLoad() {


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