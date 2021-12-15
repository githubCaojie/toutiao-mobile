<template>
	<view class="msg">
		<view class="search">
			<uni-search-bar @confirm="search" @input="input" ></uni-search-bar>
		</view>
		<view class="main">
			<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="text" activeColor="#003a7c"></uni-segmented-control>
			<view class="content">
				<view v-show="current === 0">
					<uni-card class="card-item" title="待办单据名称">
						<view class="main">
							<text>业务申请：周星</text>
							<text>2021-07-09</text>
						</view>
					</uni-card>
				</view>
				<view v-show="current === 1">
					<uni-card class="card-item" title="已办单据名称">
						<view class="main">
							<text>业务申请：周星</text>
							<text>2021-07-09</text>
						</view>
					</uni-card>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				items: ['待办', '已办']
			}
		},
		methods: {
			onClickItem(res) {
				this.current = res.currentIndex
			}
		}
	}
</script>

<style lang="less" scoped>
	.msg {
		.main {
			.segmented-control {
				background-color: #ffffff;
				height: 80rpx;
				/deep/ .segmented-control__item {
					margin: 0 15%;
					.segmented-control__text {
						font-size: 32rpx;
					}
				}
			}
			.content {
				.card-item {
					.main {
						display: flex;
						justify-content: space-between;
						color: #808e99;
						font-size: 28rpx;
					}
					/deep/ .uni-card__header {
						padding: 32rpx 36rpx 18rpx 32rpx;
						&::after {
							display: none;
						}
						.uni-card__header-title-text {
							font-size: 36rpx;
							color: #415261;
						}
					}
					/deep/ .uni-card__content {
						padding: 18rpx 32rpx 36rpx;
					}
				}
			}
		}
	}
</style>
