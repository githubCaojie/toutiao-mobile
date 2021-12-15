<template>
	<view class="my">
		<view class="head">
			<image class="bg" src="../../static/image/my-head-bg.png" mode=""></image>
			<view class="left">
				<view class="portrait">
					赵六
				</view>
			</view>
			<view class="right">
				<view class="name">赵六</view>
				<view class="unit">湖南省交通水利建设集团有限公司</view>
				<view class="post">综合管理部-业务专干</view>
			</view>
		</view>
		<view class="main">
			<uni-list>
				<uni-list-item title="我的信息" link thumb="../../static/image/my-listicon-message.png"></uni-list-item>
			</uni-list>
			<uni-list>
				<uni-list-item title="帮助指南" link thumb="../../static/image/my-listicon-help.png"></uni-list-item>
				<uni-list-item title="设置" link thumb="../../static/image/my-listicon-set.png"></uni-list-item>
			</uni-list>
		</view>
	</view>
</template>

<script>
	
</script>

<style lang="less" scoped>
	.my {
		.head {
			position: relative;
			width: 686rpx;
			height: 332rpx;
			padding: 88rpx 32rpx 0;
			display: flex;
			align-items: center;
			z-index: 1;
			.bg {
				position: absolute;
				width: 100%;
				height: 100%;;
				top: 0;
				left: 0;
				z-index: -1;
			}
			.left {
				margin-right: 32rpx;
				.portrait {
					width: 128rpx;
					height: 128rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					background-color: #ffffff;
					border-radius: 64rpx;
					font-size: 40rpx;
					color: #004ea2;
				}
			}
			.right {
				.name {
					color: #ffffff;
					font-size: 40rpx;
				}
				.unit {
					color: #a3bcd6;
					font-size: 28rpx;
					margin-top: 24rpx;
				}
				.post {
					margin-top: 16rpx;
					display: inline-block;
					color: #ef8a54;
					font-size: 24rpx;
					padding: 10rpx 16rpx;
					background-color: #fff2eb;
				}
			}
		}
		.main {
			.uni-list {
				&:first-child {
					margin-bottom: 16rpx;
				}
				.uni-list-item {
					background-color: #ffffff;
				}
			}
		}
	}
</style>
