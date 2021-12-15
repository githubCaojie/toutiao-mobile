<template>
	<view class="application">
		<view class="search">
			<uni-search-bar @confirm="search" @input="input" ></uni-search-bar>
		</view>
		<view class="main">
			<uni-card title="国资监管" class="card-item gzjg-card card-item1">
				<uni-grid :column="4" :showBorder="false"  :square="false" class="card-grid">
					<uni-grid-item>
						<view class="grid-item">
							<view class="icon">
								<image class="img" src="../../static/image/app-navclass1-1.png" mode=""></image>
							</view>
							<text class="text">监管指标</text>
						</view>
					</uni-grid-item>
					<uni-grid-item>
						<view class="grid-item">
							<view class="icon">
								<image class="img" src="../../static/image/app-navclass1-2.png" mode=""></image>
							</view>
							<text class="text">三重一大</text>
						</view>
					</uni-grid-item>
					<uni-grid-item>
						<view class="grid-item">
							<view class="icon">
								<image class="img" src="../../static/image/app-navclass1-3.png" mode=""></image>
							</view>
							<text class="text">监督追责</text>
						</view>
					</uni-grid-item>
					<uni-grid-item>
						<view class="grid-item">
							<view class="icon">
								<image class="img" src="../../static/image/app-navclass1-4.png" mode=""></image>
							</view>
							<text class="text">综合维稳</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</uni-card>
			<uni-card title="日常管理" class="card-item gzjg-card card-item2">
				<uni-grid :column="4" :showBorder="false"  :square="false" class="card-grid">
					<uni-grid-item>
						<view class="grid-item">
							<view class="icon">
								<image class="img" src="../../static/image/app-navclass2-1.png" mode=""></image>
							</view>
							<text class="text">人资系统</text>
						</view>
					</uni-grid-item>
					<uni-grid-item>
						<view class="grid-item">
							<view class="icon">
								<image class="img" src="../../static/image/app-navclass2-2.png" mode=""></image>
							</view>
							<text class="text">OA管理</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</uni-card>
			<uni-card title="财务资产" class="card-item gzjg-card card-item3">
				<uni-grid :column="4" :showBorder="false"  :square="false" class="card-grid">
					<uni-grid-item>
						<view class="grid-item">
							<view class="icon">
								<image class="img" src="../../static/image/app-navclass3-1.png" mode=""></image>
							</view>
							<text class="text">财务系统</text>
						</view>
					</uni-grid-item>
					<uni-grid-item>
						<view class="grid-item">
							<view class="icon">
								<image class="img" src="../../static/image/app-navclass3-2.png" mode=""></image>
							</view>
							<text class="text">资产管理</text>
						</view>
					</uni-grid-item>
					<uni-grid-item>
						<view class="grid-item">
							<view class="icon">
								<image class="img" src="../../static/image/app-navclass3-3.png" mode=""></image>
							</view>
							<text class="text">产权管理</text>
						</view>
					</uni-grid-item>
					<uni-grid-item>
						<view class="grid-item">
							<view class="icon">
								<image class="img" src="../../static/image/app-navclass3-4.png" mode=""></image>
							</view>
							<text class="text">审计系统</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</uni-card>
			<uni-card title="视频会议" class="card-item gzjg-card card-item4">
				<uni-grid :column="4" :showBorder="false"  :square="false" class="card-grid">
					<uni-grid-item>
						<view class="grid-item">
							<view class="icon">
								<image class="img" src="../../static/image/app-navclass4-1.png" mode=""></image>
							</view>
							<text class="text">视频会议中心</text>
						</view>
					</uni-grid-item>
				</uni-grid>
			</uni-card>
		</view>
	</view>
</template>

<script>
</script>

<style lang="less" scoped>
	.main {
		.card-item1 {
			background-color: #ef8a54;
		}
		.card-item2 {
			background-color: #1e9bd4;
		}
		.card-item3 {
			background-color: #1a68bf;
		}
		.card-item4 {
			background-color: #20368c;
		}
		.card-item {
			margin: 24rpx;
			box-shadow: unset;
			position: relative;
			&::before {
				content: "";
				width: 30%;
				height: 200%;
				background: linear-gradient(#000000 0%, #6D6D6D 100%);
				opacity: 0.05;
				transform: scale(1);
				position: absolute;
				border-radius: unset;
				bottom: 0;
				left: unset;
				top: -50%;
				right: 4%;
				border: unset;
				transform: rotate(-44deg);
			}
			&::after {
				content: "";
				width: 30%;
				height: 200%;
				background: linear-gradient(#000000 0%, #6D6D6D 100%);
				opacity: 0.05;
				transform: scale(1);
				position: absolute;
				border-radius: unset;
				left: unset;
				right: 12%;
				border: unset;
				transform: rotate(-44deg);
			}
			/deep/ .uni-card__header {
				padding: 32rpx 36rpx 18rpx 32rpx;
				&::after {
					display: none;
				}
				.uni-card__header-title-text {
					font-size: 36rpx;
					color: #ffffff;
				}
			}
			/deep/ .uni-card__content {
				padding: 18rpx 32rpx 36rpx;
				.card-grid {
					.grid-item {
						display: flex;
						flex-direction: column;
						align-items: center;
						.icon {
							width: 108rpx;
							height: 108rpx;
							background-color: #ffffff;
							border-radius: 54rpx;
							display: flex;
							align-items: center;
							justify-content: center;
							.img {
								width: 96rpx;
								height: 96rpx;
							}
						}
						.text {
							color: #ffffff;
							font-size: 26rpx;
							margin-top: 16rpx;
						}
					}
				}
			}
		}
	}
</style>
