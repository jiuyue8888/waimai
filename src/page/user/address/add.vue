<template>
	<div class="star">
		<van-nav-bar

				:left-text="userId?'修改地址':'新增地址'"
				:right-text="userId?'删除':''"
				left-arrow
				@click-left="$router.push('/address')"
				@click-right="onDelete"
		/>
        <div class="add">
            <van-field v-model="name" label-width="2.2em" label="姓名" placeholder="请输入姓名" />
            <van-field v-model="telephone" label-width="2.2em" label="电话" placeholder="请输入电话" />
            <van-field v-model="remarks" label-width="2.2em" label="地址" placeholder="请输入地址" />
        </div>
        <van-cell title="设为默认地址">
            <template #right-icon>
                <van-switch v-model="ifMr" />
            </template>
        </van-cell>
        <van-button type="info" @click="onSave" round style="display:block;width: 90%;margin: 20px auto;">确定</van-button>
	</div>
</template>
<script>
	import { addAddress,getAddressDetailById,updateAddress,deleteAddress } from '@/server/index.js';
	import areaList from '@/utils/area.js';
    import {Toast} from 'vant';
	export default {
		components: {

		},
		data(){
			return {
				areaList,
				searchResult: [],
                id:'',
                userId:'',
                name:'',
                telephone:'',
                remarks:'',
                ifMr:'',
			}
		},
		created(){
            this.userId = this.$route.query.id;
            getAddressDetailById({
                id:this.$route.query.id
            }).then(res=>{
                this.name=res.body.addressDetail.name;
                this.telephone=res.body.addressDetail.telephone;
                this.remarks=res.body.addressDetail.remarks;
                this.ifMr=res.body.addressDetail.ifMr==1;
            })
		},
		onReady() {

		},
		onShow(){


		},

		methods: {
			onSave() {
			    if(this.userId){
                    updateAddress({
                        id:this.$route.query.id,
                        openId:sessionStorage.getItem("id"),
                        name:this.name,
                        telephone:this.telephone,
                        remarks:this.remarks,
                        ifMr:this.ifMr?1:0,
                    }).then(res=>{
                        Toast(res.msg)
                        if(res.errorCode!=-1){
                            return;
                        }
                        this.$router.push('/address')
                    })
                }else{
                    addAddress({
                        id:sessionStorage.getItem("id"),
                        name:this.name,
                        telephone:this.telephone,
                        remarks:this.remarks,
                        ifMr:this.ifMr?1:0,
                    }).then(res=>{
                        Toast(res.msg)
                        if(res.errorCode!=-1){
                            return;
                        }
                        this.$router.push('/address')
                    })
                }


			},
			onDelete() {
                deleteAddress({id:this.$route.query.id}).then(res=>{
                    Toast(res.msg)
                    if(res.errorCode!=-1){
                        return;
                    }
                    this.$router.push('/address')
                })
			},


		}
	}
</script>
<style lang='less'>
	@import "index.less";

</style>