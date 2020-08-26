<template>
	<div class="star">
		<van-nav-bar

				left-text="新增地址"
				left-arrow
				@click-left="$router.push('/address')"
		/>
        <div class="add">

        </div>
		<van-address-edit
				:area-list="areaList"
				show-set-default
				:area-columns-placeholder="['请选择', '请选择', '请选择']"
				@save="onSave"
				@change-detail="onChangeDetail"
		/>


	</div>
</template>
<script>
	import { addAddress } from '@/server/index.js';
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

		},
		onReady() {

		},
		onShow(){


		},

		methods: {
			onSave(e) {
				console.log(e)
				addAddress({
					id:sessionStorage.getItem("id"),
					name:e.name,
					telephone:e.tel,
					remarks:e.province+','+e.city+','+e.county+','+e.addressDetail,
					ifMr:0,
				}).then(res=>{
                    Toast(res.msg)
                    if(res.errorCode!=-1){
                        return;
                    }
                    this.$router.push('/address')
				})
			},
			onDelete() {
				Toast('delete');
			},
			onChangeDetail(val) {
				if (val) {
					this.searchResult = [
						{
							name: '黄龙万科中心',
							address: '杭州市西湖区',
						},
					];
				} else {
					this.searchResult = [];
				}
			},

		}
	}
</script>
<style lang='less'>
	@import "index.less";

</style>