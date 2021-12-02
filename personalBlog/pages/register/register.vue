<template>
	<view class="content">
		<p>Register</p>
		<view class="login">
			<uni-forms label-width="43" :modelValue="formData">
				<uni-forms-item name="name" label="姓名:">
					<input type="text" v-model="formData.username" placeholder="请输入姓名" value="" />
				</uni-forms-item>
				<uni-forms-item name="hobby" label="密码:">
					<input type="text" v-model="formData.password" placeholder="请输入密码" value="" />
				</uni-forms-item>
			</uni-forms>
			<button class="loginBtn" @click="submitForm">注册</button>
			<a @click="goLogin()">去登录</a>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				formData: {
					username: '',
					password: ''
				}
			}
		},
		onLoad() {

		},
		computed:{
			validateUser: function (){
				return this.formData.username.trim() && this.formData.password.trim();
			}
		},
		methods: {
			submitForm(){
				if (this.validateUser) {
					uni.setStorageSync('blogUsername',this.formData.username.trim());
					uni.setStorageSync('blogPassword',this.formData.password.trim());
					uni.showToast({
					    title: '注册成功！',
					    duration: 2000,
						icon:'success',
					});
					setTimeout(()=>{
						uni.navigateTo({
							url:'/pages/login/login'
						})
					},500)
				} else{
					uni.showToast({
					    title: '请输入用户名或密码！',
					    duration: 2000,
						icon:'error',
					});
				}
			},
			goLogin(){
				uni.navigateTo({
					url:'/pages/login/login'
				})
			},
		},
		onHide(){
			// 清空表单数据
			this.formData.username = '';
			this.formData.password = '';
		}
	}
</script>

<style scoped lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		/* justify-content: center; */
		height: 94vh;
		background: url(../../static/index_bgm.jpg) center/cover;
	}

	p {
		margin-top: 100rpx;
		padding: 50rpx;
		font-size: 89rpx;
		font-weight: 900;
		color: #ffffff;
	}

	.login {
		padding: 40rpx 20rpx;
		box-sizing: border-box;
		width: 650rpx;
		height: 430rpx;
		background-color: #FFFFFF;
		border-radius: 20rpx;
		box-shadow: 0 0 20rpx rgb(63, 124, 185);
		
		input {
			padding: 0 20rpx;
			box-sizing: border-box;
			width: 450rpx;
			height: 70rpx;
			line-height: 90rpx;
			box-shadow: 0 0 20rpx rgb(53, 72, 103);
			border-radius: 20rpx;
			color: #eeeee;
		}
		
		input:hover {
			background-color: rgba(158, 242, 249,.3);
		}
		
		.loginBtn {
			width: 450rpx;
			height: 90rpx;
			line-height: 90rpx;
			background-color: #00aaff;
			color: #FFFFFF;
			border-radius: 20rpx;
		}
		
		a {
			margin-left: 428rpx;
		}
	}
	
	
</style>
