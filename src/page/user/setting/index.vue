<template>
	<div class="setTing">
		<van-nav-bar
				left-text=""
				title="设置"
				left-arrow
				@click-left="$router.push('/center')"
		/>
		<van-cell-group>
		<van-cell title="头像" center is-link>
			<van-uploader :after-read="afterRead">
				<img src="../../../static/img/user/missing-face.png">
			</van-uploader>

		</van-cell>
		<van-cell title="修改昵称" is-link to="/changeName"/>
		<van-cell title="修改手机号码" is-link to="/changeTell" />
		<van-cell title="修改登陆密码" is-link to="/changePassword" />
		</van-cell-group>
		<van-cell-group>
		<van-cell title="问题反馈" is-link @click="type=1;show=true;"/>
		<van-cell title="关于我们" is-link @click="type=2;show=true;"/>
		</van-cell-group>
		<van-cell-group>
		<van-cell title="退出登录" is-link @click="unlogin"/>
		</van-cell-group>

		<van-dialog v-model="show" :title="type==1?'问题反馈':'关于我们'" :show-cancel-button="type==1"
		@confirm="confirm" >
			<div v-if="type==1">
				<van-field
						v-model="content"
						rows="2"
						autosize
						type="textarea"
						class="fankui"
						placeholder="请输入您的问题，我们将竭诚为您服务"
				/>
			</div>
			<div v-else>
				<div class="about">关于我们</div>
			</div>
		</van-dialog>
	</div>
</template>
<script>

	import {addFeedBack} from '@/server/index.js';
	import {Toast} from 'vant';

	export default {
		components: {

		},
		data(){
			return {
				show:false,
				type:1,
				content:'',
				message:''
			}
		},
		onLoad(){


		},
		onReady() {

		},
		onShow(){


		},

		methods: {
			afterRead(file) {
				// 此时可以自行将文件上传至服务器
				console.log(file);
			},
			unlogin(){
				sessionStorage.setItem("tel",'');
				this.$router.push('/login')
			},

			confirm(){
				if(this.type==2){
					return;
				}
				addFeedBack({
					content:this.content,
					telephone:sessionStorage.getItem("tel")
				}).then(res=>{Toast(res.msg)})
			}
		}
	}
</script>
<style lang='less'>
	@import "index.less";

</style>