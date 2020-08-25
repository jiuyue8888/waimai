<template>
	<div class="login">
		<van-nav-bar
				title="登陆"
				left-text=""
				left-arrow
				@click-left="$router.push('/center')"
		/>

		<img src="../../../img/logo.png">
		<van-cell-group>
			<van-field
					v-model="value1"
					label-width="1em"
					placeholder="请输入手机号／邮箱"
			>
				<template #label>
					<i class="el-icon-message"></i>
				</template>
			</van-field>




			<van-field
					v-model="value1"
					label-width="1em"
					placeholder="请输入密码"
			>
				<template #label>
					<i class="el-icon-lock"></i>
				</template>

			</van-field>

		</van-cell-group>
		<p class="text"></p>
		<van-button type="default" style="display:block;width: 90%;margin: 0 auto 0">登陆</van-button>
		<p class="down">
			<span @click="$router.push('/register')">注册</span>
			<span @click="$router.push('/forget')">忘记密码</span>
		</p>
	</div>
</template>
<script>


	export default {
		components: {},
		data() {
			return {}
		},
		onLoad() {


		},
		onReady() {

		},
		onShow() {


		},

		methods: {}
	}
</script>
<style lang='less'>
	@import "index.less";

</style>