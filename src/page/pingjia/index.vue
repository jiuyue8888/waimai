<template>
    <div class="pj">
        <van-nav-bar

                title="评价"
                left-arrow
                @click-left="$router.go(-1)"
        />

        <van-cell>
            <template #title>
                <p class="storeName"><img :src="'//'+detail.logo">{{detail.shopName}}</p>
            </template>
            <template #default>
                <van-rate v-model="dicId" />
            </template>
        </van-cell>
        <van-field
                v-model="appContent"
                rows="2"
                autosize
                type="textarea"
                minlength="50"
                autosize
                placeholder="请写下您对商家的评价"
                show-word-limit
        />
        <el-button type="warning" round @click="submit">提交评价</el-button>

    </div>
</template>
<script>

    import {addAppraise,getDetailByshopId} from '@/server/index.js';
    import {Toast} from 'vant';

    export default {
        components: {

        },
        data(){
            return {
                dicId:5,
                appContent:'',
                detail:{}
            }
        },
        mounted(){
            getDetailByshopId({shopId:this.$route.query.id}).then(res=>{
                this.detail=res.body
            })

        },
        onReady() {

        },
        onShow(){


        },

        methods: {
            submit(){
                addAppraise({
                    userId:sessionStorage.getItem('id'),
                    shopId:this.$route.query.id,
                    appContent:this.appContent,
                    dicId:this.dicId
                }).then(res=>{
                    if(res.errorCode==-1){
                        Toast('评价成功')
                        this.$router.push({
                            path:'/storeDetail',
                            query:{id:this.$route.query.id}
                        })
                    }else{
                        Toast(res.msg)
                    }
                })
            }
        }
    }
</script>
<style lang='less'>
    @import "index.less";

</style>