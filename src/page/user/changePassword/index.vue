<template>
    <div class="changePassword">
        <van-nav-bar
                left-text="修改密码"
                left-arrow
                @click-left="onClickLeft"
        />
        <van-field v-model="pwdOld" type="password" placeholder="请输入当前密码" />
        <van-field v-model="pwd" type="password" placeholder="请输入新密码" />
        <van-field v-model="pwd1" type="password" placeholder="再次输入新密码" />

        <van-button type="info" @click="saveChange">保存</van-button>
    </div>
</template>
<script>
    import {toUpdatePwd} from '@/server/index.js';
    import { Toast } from 'vant';
    export default {
        components: {

        },
        data(){
            return {
                pwd: '',
                pwd1: '',
                pwdOld: '',
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
            saveChange(){
                if(this.pwd!==this.pwd1){
                    Toast('密码不一致');
                    return;
                }
                toUpdatePwd({
                    pwd:this.pwd,
                    pwdOld:this.pwdOld,
                    phone:'13641286838',
                }).then(res=>{

                })
            }


        }
    }
</script>
<style lang='less'>
    @import "index.less";

</style>