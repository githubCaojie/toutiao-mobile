<!-- 
	隐患列表：
	考虑到app端手机操作特性，暂时仅做隐患列表查看功能；
	要求为树型五级结构；
	可收起展开；
 -->
<template>
	<view>
		<leo-tree :data="troubleData" @node-click="nodeClick"></leo-tree>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				troubleData: [
					{
						id: '1',
						label: '施工单位',
						children: [
							{
								id: '11',
								label: '基础单位',
								children: [
									{
										id: '111',
										label: '安全管理机构和人员',
										children: [
											{
												id: '1111',
												label: '从业人员劳动保护',
												children: [
													{
														id: '11111',
														label: '未建立人员台账，扣2分'
													},
												]
											}
										],
									}
								]
							}
						]
					},
					{
						id: '2',
						label: '现场公路部分',
						children: [
							{
								id: '21',
								label: '二级2-1'
							}
						]
					},
					{
						id: '3',
						label: '安全监测',
						children: [
							{
								id: '31',
								label: '二级3-1',
								children: [
									{
										id: '32',
										label: '二级3-1-1'
									}
								]
							},
							{
								id: '32',
								label: '二级3-2',
								children: [
									{
										id: '321',
										label: '二级3-2-1'
									}
								]
							},
							{
								id: '33',
								label: '二级3-3',
								children: [
									{
										id: '331',
										label: '二级3-3-1'
									}
								]
							}
						]
					}
				]
			}
		},
		methods: {
			nodeClick(e) {
				console.log(e)
			}
		}
	}
</script>

<style>
</style>