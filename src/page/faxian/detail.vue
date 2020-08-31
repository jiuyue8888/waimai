<template>
    <div class="faxian">
        <van-nav-bar
                left-text="发现"
                left-arrow
                @click-left="$router.push('/faxian')"
        />
        <div class="detail-top">
            <img :src="detail.logo">
            <div>
                <h3>{{detail.name}}</h3>
                <p><span>点击次数：{{detail.num}}</span><span>{{detail.date}}</span></p>
            </div>
        </div>
        <div class="detail-content" v-html="detail.content"></div>
    </div>
</template>
<script>
    import {toSignUpPage} from '@/server/index.js';
    import card from '@/components/card/index.vue';
    import {Toast} from 'vant';

    export default {
        components: {
            'vCard': card,
        },
        data() {
            return {
                tab: [],
                detail: [],
            }
        },
        onLoad() {


        },
        onReady() {

        },
        created() {
            toSignUpPage({
                id:this.$route.query.id
            }).then(res=>{
                this.detail = res.body;
            })

        },

        methods: {
            getList(){

            }
        }
    }
</script>
<style lang='less'>
    @import "index.less";

</style>