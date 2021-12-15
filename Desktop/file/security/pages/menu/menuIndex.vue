<!-- 菜单 -->
<template>
	<view>
		<view class="menu u-m-l-20 u-m-r-20" v-for="item in menuData">
			<u-grid :col="4" :border="false">
				<u-grid-item
					v-for="childItem in item.list"
					bg-color="unset"
					:custom-style="itemStyle"
					@click="menuClickHandler(childItem.url)"
				>
					<u-icon name="star-fill" :size="70"></u-icon>
					<view class="grid-text">{{childItem.name}}</view>
				</u-grid-item>
			</u-grid>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				menuData: [
					{
						title: '隐患排查',
						list: [
							{
								name: '隐患列表',
								url: 'pages/trouble/troubleIndex'
								
							},
							{
								name: '我的计划',
								url: 'pages/plan/planIndex'
							},
							{
								name: '我的检查'
							},
							{
								name: '我的上报',
								url: 'pages/report/reportIndex'
							},
							{
								name: '我的接报'
							},
							{
								name: '我的整改'
							},
							{
								name: '我的验收'
							}
						]
					},
					{
						title: '安全动态',
						list: [
							{
								name: '安全动态上报'
							},
							{
								name: '安全动态总览'
							},
							{
								name: '安全动态查看'
							}
						]
					}
				],
				itemStyle: {
					background: '#ffffff',
					width: 'calc(100% - 20rpx)',
					marginTop: '20rpx',
					boxShadow: '10rpx 10rpx 10rpx #f0f0f0',
					borderRadius: '20rpx',
					fontSize: '24rpx'
				}
			}
		},
		methods: {
			menuClickHandler(url) {
				this.$u.route({
					url: url
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
page{
	background-color: #f9f9f9;
}
.menu {
	.grid-text {
		margin-top: 15rpx;
	}
}
</style>
