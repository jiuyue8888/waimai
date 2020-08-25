<template>
	<div class="forget">
		<van-nav-bar
				title="忘记密码"
				left-arrow
				@click-left="$router.push('/center')"

		/>

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
					v-model="sms"
					label-width="1em"
					center
					clearable
					placeholder="请输入短信验证码"
			>
				<template #label>
					<i class="el-icon-key"></i>
				</template>
				<template #button>
					<van-button size="small" type="primary">发送验证码</van-button>
				</template>
			</van-field>

			<van-field
					v-model="value1"
					label-width="1em"
					placeholder="新密码"
			>
				<template #label>
					<i class="el-icon-lock"></i>
				</template>

			</van-field>

		</van-cell-group>
		<van-button type="info" style="display:block;width: 90%;margin: 0.4rem auto">确定</van-button>
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