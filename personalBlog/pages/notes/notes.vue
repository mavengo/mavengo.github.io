<template>
	<view>
		nodes界面
		<button type="default" @click="goback()">返回登录页面</button>
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
					url:'/pages/login/login'
				})
			},
		}
	}
</script>

<style lang="scss">

</style>
