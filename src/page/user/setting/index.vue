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
		<van-cell title="昵称" value="这里是昵称" is-link to="/changeName"/>
		<van-cell title="修改手机号码" is-link to="/changeTell" />
		<van-cell title="修改登陆密码" is-link to="/changePassword" />
		</van-cell-group>
		<van-cell-group>
		<van-cell title="问题反馈" is-link to="index" />
		<van-cell title="关于我们" is-link to="index" />
		</van-cell-group>
		<van-cell-group>
		<van-cell title="切换账号" is-link to="index" />
		<van-cell title="退出登录" is-link to="index" />
		</van-cell-group>
	</div>
</template>
<script>


	export default {
		components: {

		},
		data(){
			return {

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


		}
	}
</script>
<style lang='less'>
	@import "index.less";

</style>