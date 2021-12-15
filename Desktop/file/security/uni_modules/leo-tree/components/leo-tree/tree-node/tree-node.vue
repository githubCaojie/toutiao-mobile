<template>
	<view class="tree-item">
		<view class="head" @click.stop="changeShow">
			<image src="../../../static/down-rect.png" :class="show ? 'rt45' : ''" mode="scaleToFill" class="left-icon" 
				v-if="item[defaultProps.children] && item[defaultProps.children].length > 0"></image>
			<text class="txt">{{item[defaultProps.label]}}</text>
		</view>
		<view class="content" 
			v-if="item[defaultProps.children] && item[defaultProps.children].length > 0"
			v-show="show">
			<tree-node v-for="sitem in item[defaultProps.children]" 
				:item="sitem" 
				:key="sitem[defaultProps.id]" :defaultProps="defaultProps"></tree-node>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'TreeNode',
		componentName: 'TreeNode',
		props: {
			item: {
				type: Object,
				default: () => {
					return {}
				}
			}
		},
		inject: ['defaultProps', 'onClickItem'],
		data() {
			return {
				show: false
			}
		},
		methods: {
			changeShow() {
				this.onClickItem(this.item);
				if (this.item[this.defaultProps.children] && this.item[this.defaultProps.children].length > 0) {
					this.show = !this.show;
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	@mixin animate2 {
	    -moz-transition: all .2s linear;
	    -webkit-transition: all .2s linear;
	    -o-transition: all .2s linear;
	    -ms-transition: all .2s linear;
	    transition: all .2s linear;
	}
	.tree-item{
		.head{
			display: flex;
			align-items: center;
			line-height: 60rpx;
			.txt{
				font-size: 30rpx;
				color: #222;
			}
		}
		.left-icon{
			width: 40rpx;
			height: 40rpx;
			@include animate2;
			transform: rotate(-90deg);
			-ms-transform:rotate(-90deg);
			-moz-transform:rotate(-90deg);
			-webkit-transform: rotate(-90deg);
			-o-transform:rotate(-90deg);
			&.rt45{
				transform: rotate(0deg);
				-ms-transform:rotate(0deg);
				-moz-transform:rotate(0deg);
				-webkit-transform: rotate(0deg);
				-o-transform:rotate(0deg);
			}
		}
		.content{
			padding-left: 40rpx;
		}
	}
	
</style>
