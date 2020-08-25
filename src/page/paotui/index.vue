<template>
    <div class="paotui">

        <van-tabs v-model="active" sticky>
            <van-tab title="帮我取">
                <van-cell-group>
                    <van-cell>
                        <template #title>
                            <van-tag mark type="primary">取</van-tag>
                        </template>
                        <template #label>
                            <van-field v-model="value" label="联系人" placeholder="请输入联系人姓名" label-width="4.2em"/>
                            <van-field v-model="value" label="联系电话" placeholder="请输入联系人电话" label-width="4.2em"/>
                            <van-field v-model="value" label="取货地址" placeholder="请输入取货地址" label-width="4.2em"/>
                        </template>
                    </van-cell>


                    <van-cell>
                        <template #title>
                            <van-tag mark type="success">送</van-tag>
                        </template>
                        <template #label>
                            <van-field v-model="value" label="联系人" placeholder="请输入联系人姓名" label-width="4.2em"/>
                            <van-field v-model="value" label="联系电话" placeholder="请输入联系人电话" label-width="4.2em"/>
                            <van-field v-model="value" label="送货地址" placeholder="请输入送货地址" label-width="4.2em"/>
                        </template>
                    </van-cell>
                </van-cell-group>
                <van-cell-group>
                    <van-cell title="下单" is-link value="预计今日5：00送达" />
                    <van-field v-model="text" label="物品" placeholder="请输入物品类型及重量" label-width="2.2em"/>
                    <van-field v-model="text" label="备注" placeholder="请输入备注信息" label-width="2.2em"/>
                    <!-- 优惠券单元格 -->
                    <van-coupon-cell
                            :coupons="coupons"
                            title="红包"
                            :show-exchange-bar="false"
                            :chosen-coupon="chosenCoupon"
                            @click="showList = true"
                    />
                </van-cell-group>
                <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
            </van-tab>
            <van-tab title="帮我送">
                <van-cell-group>
                <van-cell>
                    <template #title>
                        <van-tag mark type="success">送</van-tag>
                    </template>
                    <template #label>
                        <van-field v-model="value" label="联系人" placeholder="请输入联系人姓名" label-width="4.2em"/>
                        <van-field v-model="value" label="联系电话" placeholder="请输入联系人电话" label-width="4.2em"/>
                        <van-field v-model="value" label="送货地址" placeholder="请输入送货地址" label-width="4.2em"/>
                    </template>
                </van-cell>
                <van-cell>
                    <template #title>
                        <van-tag mark type="primary">取</van-tag>
                    </template>
                    <template #label>
                        <van-field v-model="value" label="联系人" placeholder="请输入联系人姓名" label-width="4.2em"/>
                        <van-field v-model="value" label="联系电话" placeholder="请输入联系人电话" label-width="4.2em"/>
                        <van-field v-model="value" label="取货地址" placeholder="请输入取货地址" label-width="4.2em"/>
                    </template>
                </van-cell>
                </van-cell-group>
                <van-cell-group>
                    <van-cell title="下单" is-link value="预计今日5：00送达" />
                    <van-field v-model="text" label="物品" placeholder="请输入物品类型及重量" label-width="2.2em"/>
                    <van-field v-model="text" label="备注" placeholder="请输入备注信息" label-width="2.2em"/>
                    <!-- 优惠券单元格 -->
                    <van-coupon-cell
                            :coupons="coupons"
                            title="红包"
                            :show-exchange-bar="false"
                            :chosen-coupon="chosenCoupon"
                            @click="showList = true"
                    />
                </van-cell-group>

            </van-tab>
        </van-tabs>
        <!-- 优惠券列表 -->
        <van-popup
                v-model="showList"
                round
                position="bottom"
                style="height: 90%; padding-top: 4px;"
        >
            <van-coupon-list
                    :coupons="coupons"
                    :chosen-coupon="chosenCoupon"
                    :disabled-coupons="disabledCoupons"
                    @change="onChange"
                    @exchange="onExchange"
            />
        </van-popup>
        <vTabBar :active="1"/>
    </div>
</template>
<script>
    import tabBar from '@/components/tabBar';
    const coupon = {
        available: 1,
        condition: '无使用门槛\n最多优惠12元',
        reason: '',
        value: 150,
        name: '优惠券名称',
        startAt: 1489104000,
        endAt: 1514592000,
        valueDesc: '1.5',
        unitDesc: '元',
    };
    export default {
        components: {
            'vTabBar':tabBar
        },
        data(){
            return {
                showList:false,
                isLogin:false,
                active:0,
                value:'',
                chosenCoupon: -1,
                coupons: [coupon],
                disabledCoupons: [coupon],
            }
        },
        onLoad(){


        },
        onReady() {

        },
        onShow(){


        },

        methods: {

            onChange(index) {
                this.showList = false;
                this.chosenCoupon = index;
            },
            onExchange(code) {
                this.coupons.push(coupon);
            },

        }
    }
</script>
<style lang='less'>
    @import "index.less";

</style>