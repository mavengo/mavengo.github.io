<template>
	<view class="content">
		<p>Login</p>
		<view class="login">
			<uni-forms :modelValue="formData">
				<uni-forms-item label="姓名" name="name">
					<input type="text" v-model="formData.username" placeholder="请输入姓名" value="" />
				</uni-forms-item>
				<uni-forms-item required name="hobby" label="密码">
					<input type="text" v-model="formData.password" placeholder="请输入密码" value="" />
				</uni-forms-item>
			</uni-forms>
			<button class="loginBtn" @click="submitForm">登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				formData: {
					username: '',
					password: ''
				}

			}
		},
		onLoad() {

		},
		methods: {
			submitForm(){
				if (this.formData.username == 'mavengo' && this.formData.password == 123456) {
					uni.navigateTo({
						url:'/pages/notes/notes'
					})
				} else{
					uni.showToast({
					    title: '账号或密码错误！',
					    duration: 2000,
						icon:'error',
					});
				}
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 94vh;
		background: url(../../static/index_bgm.jpg) center/cover;
	}

	p {
		padding: 50rpx;
		font-size: 89rpx;
		font-weight: 900;
		color: #1e5167;
	}

	.login {
		padding: 20rpx;
		box-sizing: border-box;
		width: 90%;
		height: 200px;
		background-color: #FFFFFF;
		border-radius: 20rpx;
		box-shadow: 0 0 20rpx rgb(23, 45, 67);
	}
	
	input {
		padding: 0 20rpx;
		box-sizing: border-box;
		width: 90%;
		height: 90rpx;
		line-height: 90rpx;
		border: 1px solid rgb(95, 95, 84);
		box-shadow: 0 0 20rpx rgb(53, 72, 103);
		border-radius: 20rpx;
	}
	
	.loginBtn {
		width: 80%;
		background-color: #007AFF;
		border-radius: 20rpx;
	}
</style>
