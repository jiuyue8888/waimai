<template>
    <div class="join">

        <van-nav-bar title="加盟申请" left-arrow @click-left="$router.push('/center')"/>

        <van-form @submit="onSubmit" label-width="8.2em">
            <van-field
                    v-model="username"
                    label="线下店铺名"
                    :rules="[{ required: true, message: '请填写线下店铺牌匾名' }]"
            />
            <van-field
                    readonly
                    clickable
                    name="area"
                    :value="value"
                    label="门店地址"
                    @click="showArea = true"
            />
            <van-field
                    readonly
                    clickable
                    name="picker"
                    :value="value"
                    label="经营品类"
                    @click="showPicker = true"
            />
            <van-field name="uploader" class="tips-text" label="门脸照" error-message="建议拍摄营业中的商户门店；照片须清晰
，无黑、白、彩色边框；需拍全，包含完
整的牌匾">
                <template #input>
                    <van-uploader v-model="uploader" />

                </template>
            </van-field>
            <van-field name="uploader" class="tips-text" label="店内照" error-message="真实提供食堂区域">
                <template #input>
                    <van-uploader v-model="uploader" />

                </template>
            </van-field>
            <van-field name="uploader" class="tips-text" label="门店LOGO" error-message="图片需与商家实际经营相关">
                <template #input>
                    <van-uploader v-model="uploader" />

                </template>
            </van-field>


            <van-field
                    v-model="username"
                    label="外卖电话"
                    :rules="[{ required: true, message: '请填写线下店铺牌匾名' }]"
            />
            <van-field
                    v-model="username"
                    label="联系人电话"
                    :rules="[{ required: true, message: '请填写线下店铺牌匾名' }]"
            />
            <van-field name="uploader" class="tips-text" label="资质证照" error-message="图片需与商家实际资质证照相关">
                <template #input>
                    <van-uploader v-model="uploader" />

                </template>
            </van-field>
            <van-field
                    v-model="username"
                    label="开店人姓名"
                    :rules="[{ required: true, message: '请填写线下店铺牌匾名' }]"
            />
            <van-field
                    v-model="username"
                    label="开店人身份证号"
                    :rules="[{ required: true, message: '请填写线下店铺牌匾名' }]"
            />
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
        <van-popup v-model="showPicker" position="bottom">
            <van-picker
                    show-toolbar
                    :columns="columns"
                    @confirm="onConfirm"
                    @cancel="showPicker = false"
            />
        </van-popup>
    </div>
</template>
<script>

    import areaList from '@/utils/area.js';

    export default {
        components: {

        },
        data(){
            return {
                areaList,
                username:'',
                showArea:false,
                showPicker: false,
                uploader: [],
                columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
            }
        },
        onLoad(){


        },
        onReady() {

        },
        onShow(){


        },

        methods: {
            onSubmit(values) {
                console.log('submit', values);
            },
            onConfirm(values) {
                this.value = values.map((item) => item.name).join('/');
                this.showArea = false;
            },

        }
    }
</script>
<style lang='less'>
    @import "index.less";

</style>