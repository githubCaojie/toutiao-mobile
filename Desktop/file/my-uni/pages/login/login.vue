<template>
	<view class="login">
		<image class="bg" src="../../static/image/loginbackground.png" mode=""></image>
		<image class="logo" src="../../static/image/logo.png" mode=""></image>
		<form class="form" @submit="loginHandler">
			<view class="uni-form-item uni-column item">
				<view class="title">
					<image class="icon" src="../../static/image/usericon.png" mode=""></image>
				</view>
				<input class="input" type="text" placeholder="用户名" v-model="ruleForm.userName" />
			</view>
			<view class="uni-form-item uni-column item">
				<view class="title">
					<image class="icon" src="../../static/image/passicon.png" mode=""></image>
				</view>
				<input class="input" type="text" password placeholder="登录密码" v-model="ruleForm.userPass" />
			</view>
			<view class="account">
				<button class="button register" type="default" size="mini">注册用户</button>
				<button class="button forget-pass" type="default" size="mini">忘记密码?</button>
			</view>
			<button
				class="login-button"
				type="default"
				form-type="submit"
				style="background: linear-gradient(90deg, #1F8ECD 0%, #003A7C 100%);"
			>登录</button>
		</form>
		<view class="else-login">
			<button class="button" type="default">
				<image class="icon" src="../../static/image/wechaticon.png" mode=""></image>
			</button>
			<view class="space">
				<view class="icon"></view>
				其他登录方式
				<view class="icon"></view>
			</view>
			<button class="button" type="default">
				<image class="icon" src="../../static/image/qqicon.png" mode=""></image>
			</button>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'login',
		data() {
			return {
				ruleForm: {
					userName: '15116241711',
					userPass: '123456'
				}
			}
		},
		methods: {
			loginHandler() {
				let rule = this.ruleForm
				if(rule.userName == "") {
					return uni.showToast({
						icon: 'none',
						title: '请输入用户名',
						duration: 2000
					});
				}
				if(rule.userPass == "") {
					return uni.showToast({
						icon: 'none',
						title: '请输入登录密码',
						duration: 2000
					});
				}else {
					uni.switchTab({
						url: "../my/my"
					})
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.button {
		padding: 0;
		margin: 0;
		background-color: transparent;
		&::after {
			border: 0;
		}
	}
	.login {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
		.bg {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
		}
		.logo {
			width: 246rpx;
			height: 207rpx;
		}
		.form {
			width: 650rpx;
			margin-top: 107rpx;
			position: relative;
			z-index: 1;
			.item {
				height: 90rpx;
				display: flex;
				align-items: center;
				border-bottom: 2rpx solid #dde5eb;
				margin-top: 30rpx;
				&:first-child {
					margin-top: 0;
				}
				.icon {
					width: 50rpx;
					height: 50rpx;
				}
				.input {
					width: calc(100% - 75rpx);
					margin-left: 25rpx;
					font-size: 33rpx;
				}
			}
			.account {
				display: flex;
				justify-content: space-between;
				margin-top: 30rpx;
				.button {
					font-size: 29rpx;
				}
				.register {
					color: #1f8ecd;
				}
				.forget-pass {
					color: #808e99;
				}
			}
			.login-button {
				color: #ffffff;
				font-size: 33rpx;
				height: 96rpx;
				line-height: 96rpx;
				background: linear-gradient(90deg, #1F8ECD 0%, #003A7C 100%);
				margin-top: 120rpx;
			}
		}
		.else-login {
			width: 650rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: absolute;
			bottom: 66rpx;
			.button {
				width: 92rpx;
				height: 92rpx;
				line-height: unset;
				border: 2rpx solid #dde5eb;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 46rpx;
				.icon {
					width: 55rpx;
					height: 50rpx;
					flex: 0 0 55rpx;
				}
			}
			.space {
				display: flex;
				justify-content: space-between;
				align-items: center;
				color: #aab6c0;
				font-size: 29rpx;
				flex: 1;
				.icon {
					height: 2rpx;
					background: linear-gradient(270deg, #DDE5EB 0%, rgba(221, 229, 235, 0) 100%);
					width: 131rpx;
					&:last-child {
						background: linear-gradient(90deg, #DDE5EB 0%, rgba(221, 229, 235, 0) 100%);
					}
				}
			}
		}
	}
</style>