<template>
    <div class="page-tabbar">
        <div>
            <mt-cell class="page-part" title="当前选中" :value="selected" />
        </div>
        <div class="page-wrap">
            <mt-tab-container class="page-tabbar-container" v-model="selected">
                <mt-tab-container-item id="外卖">
                    <div v-for="meModel in meList" :key="meModel.descriptioin" @click="clickItem(meModel)">
                        <mt-cell :title="meModel.descriptioin"/>
                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="订单">
                    <mt-cell v-for="n in 5" :title="'订单 ' + n" :key="n"/>
                </mt-tab-container-item>
                <mt-tab-container-item id="发现">
                    <mt-cell v-for="n in 7" :title="'发现 ' + n" :key="n"/>
                </mt-tab-container-item>
                <mt-tab-container-item id="我的">
                    <div class="page-part">
                    <!-- cell -->
                        <mt-cell v-for="n in 12" :title="'我的 ' + n" :key="n"/>
                    </div>
                    <router-link to="/">
                    <!-- button -->
                        <mt-button type="danger" size="large">退出</mt-button>
                    </router-link>
                </mt-tab-container-item>
            </mt-tab-container>
            <button class="maskBottom">btn</button>
        </div>
        <mt-tabbar v-model="selected" fixed>
            <mt-tab-item id="外卖">
                <img slot="icon" src="../assets/logo.png">
                外卖
            </mt-tab-item>
            <mt-tab-item id="订单">
                <img slot="icon" src="../assets/logo.png">
                订单
            </mt-tab-item>
            <mt-tab-item id="发现">
                <img slot="icon" src="../assets/logo.png">
                发现
            </mt-tab-item>
            <mt-tab-item id="我的">
                <img slot="icon" src="../assets/logo.png">
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
    
</template>

<script>
import { meListRouters } from "../router/listRouters.js";
// import listRouters from '../router/listRouters.js'
export default {
  data() {
    return {
      selected: "外卖",
      meList: []
    };
  },

  mounted() {
    // console.log('meListRouters'+JSON.stringify(meListRouters));
    this.meList = meListRouters;
  },
  methods: {
    clickItem(meModel) {
      console.log("click item:" + JSON.stringify(meModel));
      //   this.$router.push("/login");
      this.$router.push(meModel.link);
    }
  }
};
</script>

<style lang="scss">
.maskBottom {
  width: 100%;
  height: 55px;
  visibility: hidden;
}
</style>