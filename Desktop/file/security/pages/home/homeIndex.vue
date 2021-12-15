<!-- 首页 -->
<template>
	<view>
		<view class="user-box">
			<view class="main u-flex u-p-30">
				<view class="head u-m-r-10">
					<u-avatar :src="pic" size="140"></u-avatar>
				</view>
				<view class="u-flex-1">
					<view class="name u-font-18 u-p-b-20">欢迎您！{{name}}</view>
					<view class="time u-font-14 u-tips-color u-p-10">2021年9月6日 星期一</view>
				</view>
			</view>
			<u-row class="jobs u-m-l-30 u-m-r-30">
				<u-col span="6" class="u-flex">
					<u-image class="u-m-l-20 u-m-r-10" width="80rpx" height="80rpx" :src="pic"></u-image>
					<view class="u-flex-1">
						<view class="title">部门</view>
						<view>衡永第二总监办</view>
					</view>
				</u-col>
				<u-col span="6" class="u-flex">
					<u-image class="u-m-l-20 u-m-r-10" width="80rpx" height="80rpx" :src="pic"></u-image><view>
						<view class="u-flex-1">
							<view class="title">岗位</view>
							<view>安全总监</view>
						</view>
					</view>
				</u-col>
			</u-row>
		</view>
		<view class="todo">
			<view class="list">
				<u-card title="您有一条新的隐患待整改" :thumb="pic">
					<view slot="body">
						<view>隐患名称：</view>
						<view>隐患地点：</view>
					</view>
				</u-card>
				<u-card title="您的某某隐患已整改并验收通过" :thumb="pic">
					<view slot="body">
						<view>隐患名称：</view>
						<view>隐患地点：</view>
					</view>
				</u-card>
			</view>
			<u-loadmore :status="status" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: '张三',
				pic:'https://uviewui.com/common/logo.png',
				status: 'loadmore',
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
	background-size:  100% calc(100% - 77.5rpx);
	background-repeat: no-repeat;
	.main {
		.name {
			color: #ffffff;
		}
		.time {
			color: #ffffff;
			display: inline-block;
			background-color: #004aaa;
			border-radius: 10rpx;
		}
	}
	.jobs {
		background-color: #ffffff;
		height: 155rpx;
		border-radius: 20rpx;
		.title {
			font-weight: bold;
		}
	}
}
</style>
