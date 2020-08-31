<template>
    <div class="join">

        <van-nav-bar title="加盟申请" left-arrow @click-left="$router.push('/center')"/>

        <van-form @submit="onSubmit" label-width="8.2em">
            <van-field
                    v-model="name"
                    name="name"
                    label="线下店铺名"
                    :rules="[{ required: true, message: '请填写线下店铺牌匾名' }]"
            />
            <van-field
                    readonly
                    clickable
                    name="add"
                    :value="add"
                    label="门店地址"
                    @click="showArea = true"
            />
            <van-field
                    v-model="type"
                    name="type"
                    label="经营品类"
                    :rules="[{ required: true, message: '请填写经营品类' }]"
            />

            <van-field name="photo" class="tips-text" label="门脸照" error-message="建议拍摄营业中的商户门店；照片须清晰
，无黑、白、彩色边框；需拍全，包含完
整的牌匾">
                <template #input>
                    <van-uploader v-model="photo" />

                </template>
            </van-field>
            <van-field name="photoT" class="tips-text" label="店内照" error-message="真实提供食堂区域">
                <template #input>
                    <van-uploader v-model="photoT" />

                </template>
            </van-field>
            <van-field name="logo" class="tips-text" label="门店LOGO" error-message="图片需与商家实际经营相关">
                <template #input>
                    <van-uploader v-model="logo" />

                </template>
            </van-field>


            <van-field
                    v-model="phone"
                    name="phone"
                    label="外卖电话"
                    :rules="[{ required: true, message: '请填写外卖电话' }]"
            />
            <van-field
                    v-model="tel"
                    name="tel"
                    label="联系人电话"
                    :rules="[{ required: true, message: '请填写联系人电话' }]"
            />
            <van-field name="zizhi" class="tips-text" label="资质证照" error-message="图片需与商家实际资质证照相关">
                <template #input>
                    <van-uploader v-model="zizhi" />

                </template>
            </van-field>
            <van-field
                    v-model="kname"
                    name="kname"
                    label="开店人姓名"
                    :rules="[{ required: true, message: '请填写开店人姓名' }]"
            />
            <van-field
                    v-model="idcard"
                    name="idcard"
                    label="开店人身份证号"
                    :rules="[{ required: true, message: '请填写开店人身份证号' }]"
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
                    @confirm="onConfirm1"
                    @cancel="showPicker = false"
            />
        </van-popup>
    </div>
</template>
<script>
    import {toApplyShop} from '@/server/index.js';
    import {Toast} from 'vant';
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
                columns: ['分类1', '分类2', '温州', '嘉兴', '湖州'],
                userId:'',
                name:'',
                add:'',
                type:'',
                photo:[],
                photoT:[],
                zizhi:[],
                logo:[],
                phone:'',
                tel:'',
                kname:'',
                idcard:'',
            }
        },
        created(){

        },
        onReady() {

        },
        onShow(){


        },

        methods: {
            onSubmit(values) {
                console.log('submit', values);
                toApplyShop(Object.assign(values,{
                    userId:sessionStorage.getItem('id'),
                    photo:values.photo[0],
                    photoT:[],
                    zizhi:[],
                    logo:[]
                })).then(res=>{
                    Toast(res.msg)
                    if(res.errorCode==-1){
                        this.$router.push('/center')
                    }
                })
            },
            onConfirm(values) {
                this.add = values.map((item) => item.name).join('/');
                this.showArea = false;
            },
            onConfirm1(values) {

                this.type = values;
                this.showPicker = false;
            },
        }
    }
</script>
<style lang='less'>
    @import "index.less";

</style>