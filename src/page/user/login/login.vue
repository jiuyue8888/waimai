<template>
	<view class="main-login">
		<view class="login">
			<hx-navbar :status-bar="true" :back="false" barPlaceholder="hidden" :fixed="true" transparent="hidden" @click-left="closePage">
				<view slot="left">
					<view>
						<uni-icons type='closeempty' size="40"></uni-icons>
					</view>
				</view>
			</hx-navbar>
			<view class="content">
				<!-- 头部logo -->
				<view class="header">
					<image :src="logoImage"></image>
				</view>
				<!-- 主体表单 -->
				<view class="main">
					<!-- <view >
						<image class="email" src="../../../static/img/user/email.png" mode=""></image>
					</view> -->
					<view class="main-list oBorder">
						<input class="main-input" v-model="username" type="text" maxlength="30" placeholder="用户名/电话/邮箱">
					</view>
					<!-- <view>
						<image class="email"  src="../../../static/img/user/password.png" mode=""></image>
					</view> -->
					<view class="main-list oBorder">
						
						<input class="main-input" v-model="passData" type="text" maxlength="30" placeholder="密码">
					</view>

				</view>

				<wButton text="登 录" :rotate="isRotate" @click.native="startLogin()"></wButton>
				<!-- 其他登录 -->
				<view class="other_login cuIcon">
					<view class="login_icon">
						<view class="cuIcon-weixin" @tap="login_weixin"></view>
					</view>
					<view class="login_icon">
						<view class="cuIcon-weibo" @tap="login_weibo"></view>
					</view>
					<view class="login_icon">
						<view class="cuIcon-github" @tap="login_github"></view>
					</view>
				</view>

				<!-- 底部信息 -->
				<view class="footer">
					<navigator url="../forget/forget" open-type="navigate">找回密码</navigator>
					<text>|</text>
					<navigator url="../register/register" open-type="navigate">注册账号</navigator>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var that;
	// import wInput from "@/components/watch-login/watch-input.vue" //input
	import wButton from "@/components/watch-login/watch-button.vue" //button

	const CryptoJS = require("crypto-js");
	export default {
		data() {
			return {
				//logo图片 base64
				logoImage: '../../../static/img/user/logo.jpg',
				username: '', //用户/电话/邮箱
				passData: '', //密码
				isRotate: false, //是否加载旋转
			};
		},
		components: {
			// wInput,
			wButton
		},
		onLoad() {
			let that = this;
			//获取历史登录用户

			let u = uni.getStorageSync('historyUser');
			if (u) {
				that.username = u.username;
			}
		},
		mounted() {
			that = this;
			this.isLogin();
		},
		computed: {
			userData: function() {
				return that.$store.state.userData;
			}
		},
		methods: {
			isLogin() {
				//判断缓存中是否登录过，直接登录
			},


			//字符串加密
			/* strEncode($data){
				var key = CryptoJS.enc.Latin1.parse('BC1F5E3BAEE198AC');
				var iv = CryptoJS.enc.Latin1.parse('1F5E3BAEE198ACE1');
				var encoded = CryptoJS.AES.encrypt($data, key,{
						 iv: iv,
						 mode: CryptoJS.mode.CBC,//模式
						 adding: CryptoJS.pad.ZeroPadding
					}).toString();
				if(!encoded){
					return '';
				}
				return encoded
			}, */



			//登录提交
			startLogin() {
				//登录
				if (this.isRotate) {
					//判断是否加载中，避免重复点击请求
					return false;
				}
				if (this.username.length == "") {
					uni.showToast({
						icon: 'none',
						position: 'bottom',
						title: '用户名不能为空'
					});
					return;
				}
				if (this.passData.length < 5) {
					uni.showToast({
						icon: 'none',
						position: 'bottom',
						title: '密码不正确'
					});
					return;
				}



				that.isRotate = true
				/* setTimeout(function(){
					that.isRotate=false
				},3000); */

				var d = that.$strEncode(JSON.stringify({
					username: this.username,
					password: this.passData,
					user_type: 1, //用户名类型
					client_type: 1 //客户端类型
				}));
				if (!d) {
					uni.showToast({
						icon: 'none',
						position: 'bottom',
						title: '异常错误'
					});
					return;
				}
				var data = {
					u_name: d
				};
				that.$api.user.login(data).then((res) => {
					that.isRotate = false;
					console.log(res);
					if (res.data.code != '0') {
						uni.showToast({
							icon: 'none',
							position: 'bottom',
							title: res.data.msg
						});
						return;
					}
					that.$store.dispatch("setUserData", res.data.data); //存入状态
					that.$store.dispatch("setHistoryUser", {
						loginType: 1, //登录方式：1手机号 2邮箱 3用户名
						username: that.username,
						face: res.data.data.member.face, //头像
						time: res.data.data.time //登录时间
					});
					uni.showToast({
						icon: 'success',
						position: 'bottom',
						title: '登录成功'
					});

					setTimeout(function() {
						that.closePage()
					}, 1000);

				}).catch((err) => {
					that.isRotate = false;
					uni.showToast({
						icon: 'none',
						position: 'bottom',
						title: '网络连接失败！'
					});
				})
			},
			login_weixin() {
				//微信登录
				uni.showToast({
					icon: 'none',
					position: 'bottom',
					title: '...'
				});
			},
			login_weibo() {
				//微博登录
				uni.showToast({
					icon: 'none',
					position: 'bottom',
					title: '...'
				});
			},
			login_github() {
				//github登录
				uni.showToast({
					icon: 'none',
					position: 'bottom',
					title: '...'
				});
			}
		}
	}
</script>

<style>
	.email {
		width: 34px;
		height: 26px;
	}
	.main-login {
		background-image: url(../../../static/img/user/logobg.png);
		background-repeat: no-repeat;
		height: 100%;
	}
	/deep/ .uni-input-placeholder {
		color: #fff;
	}
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	/* 头部 logo */
	.header {
		width: 161upx;
		height: 161upx;
		box-shadow: 0upx 0upx 60upx 0upx rgba(0, 0, 0, 0.1);
		border-radius: 50%;
		background-color: #000000;
		margin-top: 128upx;
		margin-bottom: 72upx;
		margin-left: auto;
		margin-right: auto;
	}

	.header image {
		width: 161upx;
		height: 161upx;
		border-radius: 50%;
	}

	/* 主体 */
	.main {
		display: flex;
		flex-direction: column;
		padding-left: 70upx;
		padding-right: 70upx;
		color: #fff;
	}

	.main-input {
		flex: 1;
		text-align: left;
		font-size: 28upx;
		padding-right: 10upx;
		color: #fff;
		background: transparent;
		border: none;
		height: 100%;
		width: 100%;
		background-repeat: no-repeat;
		
	}

	.oBorder {
		border-bottom: 1px solid #fff;
		height: 40px;
	}

	.tips {
		color: #999999;
		font-size: 28upx;
		margin-top: 64upx;
		margin-left: 48upx;
	}

	/* 其他登录方式 */
	.other_login {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-top: 256upx;
		text-align: center;
	}

	.login_icon {
		border: none;
		font-size: 64upx;
		margin: 0 64upx 0 64upx;
		color: rgba(0, 0, 0, 0.7)
	}

	.wechat_color {
		color: #83DC42;
	}

	.weibo_color {
		color: #F9221D;
	}

	.github_color {
		color: #24292E;
	}

	/* 底部 */
	.footer {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 28upx;
		margin-top: 64upx;
		color: rgba(0, 0, 0, 0.7);
		text-align: center;
		height: 40upx;
		line-height: 40upx;
	}

	.footer text {
		font-size: 24upx;
		margin-left: 15upx;
		margin-right: 15upx;
	}

	.plr35 {
		padding: 0 35px;
	}
</style>
