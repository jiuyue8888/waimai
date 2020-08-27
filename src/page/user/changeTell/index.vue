<template>
    <div class="changeTell">
        <van-nav-bar
                left-text="修改手机号"
                left-arrow
                @click-left="onClickLeft"
        />
        <van-field v-model="tel" label="手机号码" placeholder="请输入新的手机号码" />
        <van-field
                v-model="code"
                center
                clearable
                label="短信验证码"
                placeholder="请输入短信验证码"
        >
            <template #button>
                <van-button size="small" type="primary" @click="sendCode">发送验证码</van-button>
            </template>
        </van-field>
        <van-button type="info" @click="save">保存</van-button>
    </div>
</template>
<script>

    import { Toast } from 'vant';
    import {toSendMsg,toUpdateTel} from '@/server/index.js';
    export default {
        components: {

        },
        data(){
            return {
                tel: '',
                code: '',
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
            save(){
                toUpdateTel({
                    code:this.code,
                    tel:this.tel
                }).then(res=>{
                    if(res.errorCode==-1){
                        Toast('修改成功');

                        this.$router.push('/setting')
                    }else{
                        Toast(res.msg);
                    }

                })
            },
            sendCode(){
                toSendMsg({
                    tel:this.tel
                }).then(res=>{
                    Toast(res.msg);

                })


            }



        }
    }
</script>
<style lang='less'>
    @import "index.less";

</style>