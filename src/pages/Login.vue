<template>
<div>
    <button  style="display:block" @click="backAction">back</button>
    <input type="text" placeholder="用户名" v-model="userName">
    <input type="text" placeholder="密码" v-model="password">
    <button @click="login">登录</button>
</div>
</template>

<script>
import MintUI from 'mint-ui'
export default {
    data() {
        return {
            userName:"",
            password:""
        }
    },

    methods:{
        login:function(){
            console.log('loginAciton');
            let url = "http://localhost:8079/LoginServlet";
            MintUI.Indicator.open({text: '加载中...',spinnerType: 'triple-bounce'})
            this.$http.get(url,{
                // axios.get(url,{
                params:{
                    "username":this.userName,
                    "password":this.password   
                }
            }).then((responseData)=>{
                console.log(responseData);
                var ret = responseData.data.ret;
                if(0 == ret){
                    console.log("登录成功");
                }else{
                    console.log("登录失败");
                }
                MintUI.Indicator.close();
            },(response)=>{
                MintUI.Indicator.close();
                console.log(response);
            })
        },
        backAction(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss">

   
</style>