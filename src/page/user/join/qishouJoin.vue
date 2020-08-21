<template>
    <div class="join">

        <van-nav-bar title="骑手招募" left-arrow @click-left="$router.push('/center')"/>

        <van-form validate-first @failed="onFailed">
            <p class="label">期望工作地点</p>
            <van-field
                    readonly
                    clickable
                    name="area"
                    :value="value"
                    placeholder="点击选择省市区"
                    @click="showArea = true"
            />
            <p class="label">选择工作类型</p>
            <van-field name="radio">
                <template #input>
                    <van-radio-group v-model="radio" direction="horizontal" class="radioStyle">
                        <van-radio name="1">
                            <p>兼职骑士<br><span>自由接单 灵活结算</span></p>
                        </van-radio>
                        <van-radio name="2">
                            <p>全职骑士<br><span>全职工作收入稳定</span></p>
                        </van-radio>
                    </van-radio-group>
                </template>
            </van-field>
            <p class="label">手机号</p>
            <van-field
                    v-model="value1"
                    name="pattern"
                    placeholder="请输入手机号"
                    :rules="[{ pattern, message: '请输入正确手机号' }]"
            />
            <p class="label">手机验证码</p>
            <van-field
                    v-model="sms"
                    center
                    clearable
                    placeholder="请输入短信验证码"
            >
                <template #button>
                    <van-button size="small" type="primary">发送验证码</van-button>
                </template>
            </van-field>
            <p class="label" style="padding-bottom: 20px;color: #999;font-size: 12px;">感谢您的报名，我们会及时反馈</p>
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                    提交
                </van-button>
            </div>
        </van-form>
        <van-popup v-model="showArea" position="bottom">
            <van-area
                    :area-list="areaList"
                    @confirm="onConfirm"
                    @cancel="showArea = false"
            />
        </van-popup>
    </div>
</template>
<script>

    import areaList from '@/utils/area.js';

    export default {
        components: {},
        data(){
            return {
                showArea:false,
                areaList:areaList,
                radio: '1',
                value1: '',
                value: '',
                sms: '',
                pattern: /\d{6}/,
            }
        },
        onLoad(){


        },
        onReady() {

        },
        onShow(){


        },

        methods: {
            onConfirm(values) {
                this.value = values.map((item) => item.name).join('/');
                this.showArea = false;
            },
            // 校验函数返回 true 表示校验通过，false 表示不通过
            validator(val) {
                return /1\d{10}/.test(val);
            },
            // 异步校验函数返回 Promise
            asyncValidator(val) {
                return new Promise((resolve) => {
                    Toast.loading('验证中...');

                    setTimeout(() => {
                        Toast.clear();
                        resolve(/\d{6}/.test(val));
                    }, 1000);
                });
            },
            onFailed(errorInfo) {
                console.log('failed', errorInfo);
            },

        }
    }
</script>
<style lang='less'>
    @import "index.less";

</style>