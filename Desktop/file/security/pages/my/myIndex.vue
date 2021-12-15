<!-- 首页 -->
<template>
	<view>
		<view class="user-box">
			<view class="main u-flex u-p-30">
				<view class="head u-m-r-10">
					<u-avatar :src="pic" size="140"></u-avatar>
				</view>
				<view class="u-flex-1">
					<view class="name u-font-18 u-p-b-10">欢迎您！{{name}}</view>
					<view class="u-p-b-10">部门：衡永第二总监办</view>
					<view class="label u-p-10">岗位：安全总监</view>
				</view>
			</view>
		</view>
		<view>
			<u-cell-group :border="false">
				<u-cell-item :border-bottom="false" icon="rmb-circle" title="检查版本"></u-cell-item>
			</u-cell-group>
		</view>
		<view class="u-m-t-10">
			<u-cell-group :border="false">
				<u-cell-item :border-bottom="false" icon="setting" title="切换账号"></u-cell-item>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: '张三',
				pic:'https://uviewui.com/common/logo.png',
			}
		},
		onLoad() {
			
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
page{
	background-color: #f9f9f9;
}
.user-box{
	background-image: url(../../static/image/home/header-bg.png);
	background-size:  100%;
	background-repeat: no-repeat;
	.main {
		color: #ffffff;
		.label {
			display: inline-block;
			background-color: #004aaa;
			border-radius: 10rpx;
		}
	}
}
</style>
