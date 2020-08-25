<template>
    <div class="changeName">
        <van-nav-bar
                title="修改昵称"
                left-text="返回"
                right-text="保存"
                left-arrow
                @click-left="onClickLeft"
                @click-right="onClickRight"
        />
        <van-field v-model="value" label="我的昵称" placeholder="请填写您的昵称" />
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
            onClickRight() {


                toUpdatePwd({
                    phone:'13641286838'
                }).then(res=>{

                })
            },


        }
    }
</script>
<style lang='less'>
    @import "index.less";

</style>