<template>
    <div class="faxian">
        <van-nav-bar
                left-text="发现"
                left-arrow
                @click-left="$router.push('/')"
        />
        <van-tabs v-model="active" sticky>
            <van-tab v-for="(tab,ids) in tab" :title="tab.name" :key="ids">
                <ul class="flist">
                    <li v-for="(item,id) in data[ids]" :key="id"
                        @click="$router.push({
                        path:'/fdetail',
                        query:{id:item.id}
                    })">
                        <img :src="'//'+item.pic">
                        <h3>{{item.intro}}</h3>
                        <p>
                    <span>
                        <img :src="'//'+item.logo">
                        <i>{{item.name}}</i>
                    </span>
                            <span>
                        <van-icon name="good-job-o"/>
                        <em>{{item.num}}</em>
                    </span>
                        </p>
                    </li>
                </ul>
            </van-tab>
        </van-tabs>


    </div>
</template>
<script>
    import {getUniversityList,getBounced} from '@/server/index.js';
    import card from '@/components/card/index.vue';
    import {Toast} from 'vant';

    export default {
        components: {
            'vCard': card,
        },
        data() {
            return {
                tab: [],
                active:0,
                data: [],
            }
        },
        onLoad() {


        },
        onReady() {

        },
        created() {
            let arr=[];
            getUniversityList({}).then(res=>{
                this.tab=res.body.universityList;
                res.body.universityList.map(item=>{
                    getBounced({id:item.id}).then(ress=>{
                        arr.push(ress.body.listmap);
                    })
                })
                this.data = arr;

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