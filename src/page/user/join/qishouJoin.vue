<template>
    <div class="join">

        <van-nav-bar title="骑手招募" left-arrow @click-left="$router.push('/center')"/>

        <van-form validate-first>
            <p class="label">期望工作地点</p>
            <van-field
                    readonly
                    clickable
                    name="add"
                    :value="add"
                    placeholder="点击选择省市区"
                    @click="showArea = true"
            />
            <p class="label">选择工作类型</p>
            <van-field name="radio">
                <template #input>
                    <van-radio-group v-model="apply" direction="horizontal" class="radioStyle">
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
                    v-model="tel"
                    name="tel"
                    placeholder="请输入手机号"
                    :rules="[{ pattern, message: '请输入正确手机号' }]"
            />
            <p class="label">手机验证码</p>
            <van-field
                    v-model="code"
                    name="code"
                    center
                    clearable
                    placeholder="请输入短信验证码"
            >
                <template #button>
                    <van-button size="small" type="primary" @click="getCode">发送验证码</van-button>
                </template>
            </van-field>
            <p class="label">姓名</p>
            <van-field
                    v-model="kname"
                    name="kname"
                    placeholder="请输入姓名"
            />

            <p class="label" style="padding-bottom: 20px;color: #999;font-size: 12px;">感谢您的报名，我们会及时反馈</p>
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit" @click="submit">
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

    import {toApplyRider,toSendMsg} from '@/server/index.js';
    import areaList from '@/utils/area.js';
    import {Toast} from 'vant';
    export default {
        components: {},
        data(){
            return {
                showArea:false,
                areaList:areaList,

                pattern: /\d{6}/,
                add:'',
                apply:'1',
                tel:'',
                kname:'',
                idcard:'',
                code: '',
            }
        },
        created(){


        },
        onReady() {

        },
        onShow(){


        },

        methods: {
            onConfirm(values) {
                this.add = values.map((item) => item.name).join('/');
                this.showArea = false;
            },
            getCode(){
                toSendMsg({
                    tel:this.tel
                }).then(res=>{
                    Toast(res.msg)
                    const st = setInterval(()=>{
                        if(s==0){
                            this.status=61;
                            clearInterval(st)
                            return
                        }
                        s--;
                        this.status=s;
                    },1000)
                })
            },

            submit(){
                toApplyRider({
                    userId:sessionStorage.getItem('id'),
                    add:this.add,
                    apply:this.apply,
                    tel:this.tel,
                    kname:this.kname,
                    code: this.code,
                }).then(res=>{
                    Toast(res.msg)
                    if(res.errorCode==-1){
                        this.$router.push('/center')
                    }
                })
            }

        }
    }
</script>
<style lang='less'>
    @import "index.less";

</style>