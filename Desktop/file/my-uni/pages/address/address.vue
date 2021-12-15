<template>
	<view class="address">
		<view class="search">
			<uni-search-bar @confirm="search" @input="input" ></uni-search-bar>
		</view>
		<view class="main">
			<uni-collapse class="unit-collapse">
			    <uni-collapse-item title="湖南省交通水利建设集团有限公司" :show-arrow="false" :open="true"
			        thumb="../../static/image/address-logo.png">
			        <view class="content">
								<uni-list>
									<uni-list-item class="collapse-item" title="组织机构" link thumb="../../static/image/address-child-collapse-icon.png"></uni-list-item>
									<uni-list-item class="collapse-item" title="湖南省交通水利建设集团有限公司" link thumb="../../static/image/address-child-collapse-icon.png"></uni-list-item>
								</uni-list>
			        </view>
			    </uni-collapse-item>
			</uni-collapse>
		</view>
	</view>
</template>

<script>
</script>

<style lang="less" scoped>
	.unit-collapse {
		/deep/ .uni-collapse-item__title-text {
			color: #415261;
			font-size: 36rpx;
		}
		/deep/ .uni-collapse-item__title-img {
			width: 64rpx;
			height: 64rpx;
		}
		.content {
			.collapse-item {
				width: 668rpx;
				padding-left: 82rpx;
				/deep/ .uni-list-item__icon-img {
					width: 20rpx;
					height: 20rpx;
				}
				/deep/ .uni-list-item__content-title {
					color: #415261;
					font-size: 36rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					font-weight: 500;
				}
			}
		}
	}
</style>
