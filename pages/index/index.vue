<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<button :disabled="logining" @click="login()">登录测试示例</button>
		<button @click="getNum()">除登录外的业务网络请求示例1</button>
		<button @click="getList()">除登录外的业务网络请求示例2</button>
	</view>
</template>

<script>
	var _self;
	export default {
		data() {
			return {
				title: 'Hello',
				logining: false,
				mobile:"15638780530",
				password:"ly250",
			}
		},
		onLoad() {
		 
		 
			    
		},
		methods: {
               login:function(){ //登录测试示例
			   console.log('登录测试示例')
		 			if(!this.Http.hasNetwork()){
		 				return;
		 			}
		 			if(this.mobile == "" || this.password == ""){
		 				uni.showToast({
		 					title: "请输入完整信息",
		 					icon:'none'
		 				});
		 				return;
		 			}
		 			this.logining = true;
		 			this.Http.sendLoginOrRegisterRequest({
		 				url : "user/loginApp",
		 				data: {
		 					username : this.mobile,
		 					password : this.password
		 				},
		 				success:function(res){
		 					// uni.setStorageSync("sessionKey",res.token);
		 					_self.Http.setSession(res.token);
		 					uni.showToast({
		 						title: '登录成功',
		 						icon:'none'
		 					});
		 				},
		 				fail:function(e){},
		 				complete:function(){
		 					_self.logining = false;
		 				}
		 			})
		 		},
				
				getNum:function(){//除登录外的业务网络请求示例1
				     console.log('除登录外的业务网络请求示例1')
					 this.Http.sendRequest({
								url : "index/index",
								hideLoading:false,
								success:function(res){
									console.log("getNum:"+ JSON.stringify(res));
									uni.showToast({
										title: "success",
										icon:'none'
									});
								},
								fail:function(e){},
								complete:function(){}
						})
				 },
					
				getList:function() {//除登录外的业务网络请求示例2
				console.log('除登录外的业务网络请求示例2')
							const obj = {
								method: 'POST',
								url: 'machine/index',
								data: {
									token: true,
									keyword:''
								}
							}
							this.Http.HttpRequest(obj).then(res => {
								console.log(JSON.stringify(res))
								uni.showToast({
									title: "success",
									icon:'none'
							});
						})
				 },
		},
		onLoad:function(){
			_self = this;
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
