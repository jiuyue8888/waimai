<template>
    <div class="remind">

        <van-nav-bar left-text="点餐提醒" left-arrow @click-left="$router.push('/center')">
            <template #right>
                <van-icon name="plus" size="18" @click="show = true"/>
            </template>
        </van-nav-bar>
        <div class="remindList">
            <van-swipe-cell>
                <van-cell title="07:50" center>
                    <template #right-icon>
                        <van-switch v-model="checked" size="24" />
                    </template>
                </van-cell>
                <template #right>
                    <van-button square type="danger" text="删除" />
                </template>
            </van-swipe-cell>

            <van-swipe-cell>
                <van-cell title="07:50" center>
                    <template #right-icon>
                        <van-switch v-model="checked" size="24" />
                    </template>
                </van-cell>
                <template #right>
                    <van-button square type="danger" text="删除" />
                </template>
            </van-swipe-cell>
        </div>
        <van-action-sheet v-model="show">
            <van-datetime-picker
                    v-model="currentTime"
                    type="time"
                    title="选择时间"
                    :min-hour="10"
                    :max-hour="20"
                    @confirm="show=false"
                    @cancel="show=false"
            />
            <p class="cf">重复</p>
            <p class="cf">
                <span v-for="(item,id) in week" :key="id" @click="curr=id" :class="curr==id?'curr':''">{{item}}</span>
            </p>
            <van-button type="info">保存</van-button>
        </van-action-sheet>

    </div>
</template>
<script>

    import { Toast } from 'vant';

    export default {
        components: {

        },
        data(){
            return {
                show:false,
                currentTime: '12:00',
                checked: true,
                curr:-1,
                week:['日','一','二','三','四','五','六']
            }
        },
        onLoad(){


        },
        onReady() {

        },
        onShow(){


        },

        methods: {
            rightClick(){

            },

        }
    }
</script>
<style lang='less'>
    @import "index.less";

</style>