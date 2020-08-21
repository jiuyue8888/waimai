<template>
    <div class="star">
        <van-nav-bar

                left-text="美食"
                left-arrow
                @click-left="$router.push('/')"
        />

        <div class="starList">
            <vCard :data="data" :type="0"></vCard>
        </div>

    </div>
</template>
<script>
    import card from '@/components/card/index.vue';
    import { Toast } from 'vant';

    export default {
        components: {
            'vCard':card,
        },
        data(){
            return {
                data: [
                    {
                        img:'',
                        title:''
                    },{
                        img:'',
                        title:''
                    },{
                        img:'',
                        title:''
                    }
                ],
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