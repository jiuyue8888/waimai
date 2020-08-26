<template>
	<div class="star">
		<van-nav-bar

				left-text="我的地址"
				left-arrow
				@click-left="$router.push('/center')"
		/>

		<van-address-list
				v-model="chosenAddressId"
				:list="list"
				default-tag-text="默认"
				@add="onAdd"
				@edit="onEdit"
		/>

	</div>
</template>
<script>
	import { toAddressList } from '@/server/index.js';
	import {Toast} from 'vant';
	export default {
		components: {

		},
		data(){
			return {
				chosenAddressId: '1',
				list: []
			}
		},
		onLoad(){


		},
		onReady() {

		},
		mounted(){
			let arr = [];

			toAddressList({
				id:sessionStorage.getItem("id")
			}).then(res=>{
				if(res.errorCode!=-1){
					Toast(res.msg)
					return;
				}
			res.body.addressList.map(item=>{
				arr.push({
					id:item.id,
                    name:item.name,
                    address:item.remarks,
                    tel:item.telephone
				})
			})
				this.list = arr
			})
		},

		methods: {
			onAdd() {
				this.$router.push('/add');
			},
			onEdit(item, index) {

				this.$router.push({
				    path:'/add',
                    query:{
				        id:item.id
                    }
                });
			},

		}
	}
</script>
<style lang='less'>
	@import "index.less";

</style>