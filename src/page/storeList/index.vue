<template>
    <div class="store">
        <van-nav-bar
                left-text="美食"
                left-arrow
                @click-left="$router.push('/')"
        >
            <template #right>
                <van-search v-model="selectName" shape="round" placeholder="请输入搜索关键词"/>
            </template>
        </van-nav-bar>

        <div class="storeList">
            <van-dropdown-menu active-color="#1989fa">
                <van-dropdown-item v-model="value" :options="option" />
                <van-dropdown-item v-model="value" :options="option" />
                <van-dropdown-item v-model="value" :options="option" />
                <van-dropdown-item v-model="value" :options="option" />
            </van-dropdown-menu>

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
                value: 0,
                selectName: '',
                option: [
                    { text: '全部商品', value: 0 },
                    { text: '新款商品', value: 1 },
                    { text: '活动商品', value: 2 },
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