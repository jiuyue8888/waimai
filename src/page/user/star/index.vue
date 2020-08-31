<template>
    <div class="star">
        <van-nav-bar

                left-text="我的收藏"
                left-arrow
                @click-left="$router.push('/center')"
        />

        <div class="starList">
            <vCard :data="data" :type="0"></vCard>
        </div>

    </div>
</template>
<script>
    import card from '@/components/card/index.vue';
    import { Toast } from 'vant';
    import {toMyApplyShop} from '@/server/index.js';

    export default {
        components: {
            'vCard':card,
        },
        data(){
            return {
                data: [],
            }
        },
        created(){

            toMyApplyShop({userId:sessionStorage.getItem("id")}).then(res=>{
                this.data = res.body.list;
            })
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