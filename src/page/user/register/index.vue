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
                    v-model="tel"
                    label-width="1em"
                    placeholder="请输入手机号／邮箱"
            >
                <template #label>
                    <i class="el-icon-message"></i>
                </template>
            </van-field>


            <van-field
                    v-model="code"
                    label-width="1em"
                    center
                    clearable
                    placeholder="请输入短信验证码"
            >
                <template #label>
                    <i class="el-icon-key"></i>
                </template>
                <template #button>
                    <van-button size="small" type="primary" @click="getCode" style="width: 100px">
                        {{status>60?'发送验证码':status}}</van-button>
                </template>
            </van-field>

            <van-field
                    v-model="pwd"
                    label-width="1em"
                    type="password"
                    placeholder="请输入密码"
            >
                <template #label>
                    <i class="el-icon-lock"></i>
                </template>

            </van-field>
            <van-field
                    v-model="pwd1"
                    label-width="1em"
                    type="password"
                    placeholder="请再次输入密码"
            >
                <template #label>
                    <i class="el-icon-lock"></i>
                </template>
            </van-field>
        </van-cell-group>
        <p class="text">注册即表示同意并遵守《注册使用协议》</p>
        <van-button type="default" style="display:block;width: 90%;margin: 0 auto" @click="btnClick">立即注册</van-button>
    </div>
</template>
<script>

    import {toRegisterCus,toSendMsg} from '@/server/index.js';
    import { Toast } from 'vant';
    export default {
        components: {},
        data() {
            return {
                tel:'',
                code:'',
                pwd:'',
                pwd1:'',
                status:'61'
            }
        },
        onLoad() {


        },
        onReady() {

        },
        onShow() {


        },

        methods: {
            getCode(){
                let s = this.status;
                toSendMsg({
                    tel:this.tel
                }).then(res=>{
                    Toast(res.msg)
                    const st = setInterval(()=>{
                        if(s==0){
                            this.status=61;
                            clearInterval(st)
                            return
                        }
                        s--;
                        this.status=s;
                    },1000)
                })
            },
            btnClick(){
                if(this.pwd!==this.pwd1){
                    Toast('密码不一致')
                    return;
                }
                toRegisterCus({
                    tel:this.tel,
                    code:this.code,
                    pwd:this.pwd,
                }).then(res=>{
                    Toast(res.msg)
                    if(res.errorCode!=-1){
                        return;
                    }
                    this.$router.push('/login')
                })
            }
        }
    }
</script>
<style lang='less'>
    @import "index.less";

</style>