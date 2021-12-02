<template>
	<view>
		博客首页
		<button class="subBtn" type="default" @click="goback()">返回登录页面</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			goback(){
				uni.navigateTo({
					url:'/pages/index/index'
				})
			},
		}
	}
</script>

<style lang="scss">
	.subBtn {
		margin: 10px auto;
		width: 200px;
		height: 50px;
		background-color: #2194ff;
		color: #FFFFFF;
		border-radius: 20px;
	}
</style>
