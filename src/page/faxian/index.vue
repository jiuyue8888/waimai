<template>
    <div class="faxian">
        <van-nav-bar
                left-text="发现"
                left-arrow
                @click-left="$router.push('/')"
        />
        <van-tabs v-model="active" sticky>
            <van-tab v-for="tab in tab" :title="tab">
                <ul class="flist">
                    <li v-for="(item,id) in data" :key="id">
                        <img src="../../img/user-bg.jpg">
                        <h3>{{item.title}}</h3>
                        <p>
                    <span>
                        <img src="../../img/user-bg.jpg">
                        <i>这里是昵称</i>
                    </span>
                            <span>
                        <van-icon name="good-job-o"/>
                        <em>3</em>
                    </span>
                        </p>
                    </li>
                </ul>
            </van-tab>
        </van-tabs>


    </div>
</template>
<script>
    import {getUniversityList} from '@/server/index.js';
    import card from '@/components/card/index.vue';
    import {Toast} from 'vant';

    export default {
        components: {
            'vCard': card,
        },
        data() {
            return {
                tab: ['推荐', '美食', '旅行', '购物'],
                data: [
                    {
                        img: '',
                        title: '这里是名文案描述这里是名文案描述这里是名文案描述'
                    }, {
                        img: '',
                        title: '这里是名文案描述这里是名文案描述这里是名文案描述这里是名文案描述这里是名文案描述这里是名文案描述'
                    }, {
                        img: '',
                        title: '这里是名文案描述这里是名文案'
                    }, {
                        img: '',
                        title: '这里是名文案描述这里是名这里是名文案描述这里是名文案文案'
                    }
                ],
            }
        },
        onLoad() {


        },
        onReady() {

        },
        created() {
            getUniversityList({}).then(res=>{

            })

        },

        methods: {}
    }
</script>
<style lang='less'>
    @import "index.less";

</style>