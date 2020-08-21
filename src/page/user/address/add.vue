<template>
	<div class="star">
		<van-nav-bar

				left-text="新增地址"
				left-arrow
				@click-left="$router.push('/address')"
		/>
		<van-address-edit
				:area-list="areaList"
				show-postal
				show-delete
				show-set-default
				show-search-result
				:search-result="searchResult"
				:area-columns-placeholder="['请选择', '请选择', '请选择']"
				@save="onSave"
				@delete="onDelete"
				@change-detail="onChangeDetail"
		/>


	</div>
</template>
<script>
	import { Toast } from 'vant';
	import areaList from '@/utils/area.js';
	export default {
		components: {

		},
		data(){
			return {
				areaList,
				searchResult: [],
			}
		},
		onLoad(){


		},
		onReady() {

		},
		onShow(){


		},

		methods: {
			onSave() {
				Toast('save');
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