<!-- 我的上报 -->
<template>
	<view class="report">
		<view>
			<u-tabs-swiper ref="uTabs" :list="list" :current="current" @change="tabsChange" :is-scroll="false"
			 swiperWidth="750"></u-tabs-swiper>
		</view>
		<swiper class="swiprer" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
			<swiper-item>
				<scroll-view>
					<u-form :model="reportForm">
						<u-form-item label-width="150" label="项目编码：" prop="num">
							<u-input type="text" v-model="reportForm.num" />
						</u-form-item>
						<u-form-item label-width="150" label="项目名称：" prop="name">
							<u-input type="text" v-model="reportForm.name" />
						</u-form-item>
						<u-form-item label-width="150" label="隐患地点：" prop="place">
							<u-input type="text" v-model="reportForm.place" />
						</u-form-item>
						<u-form-item label-width="150" label="隐患描述：" prop="intro">
							<u-input type="textarea" v-model="reportForm.intro" />
						</u-form-item>
					</u-form>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view>
					2
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						name: '立即上报'
					}, 
					{
						name: '我的上报'
					},
				],
				// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
				reportForm: {
					num: '',
					name: '',
					place: '',
					describe: '',	
					intro: ''
				}
			}
		},
		methods: {
			// tabs通知swiper切换
			tabsChange(index) {
				this.swiperCurrent = index;
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			// scroll-view到底部加载更多
			onreachBottom() {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.report {
		.swiprer {
			height: 800rpx;
		}
	}
</style>
