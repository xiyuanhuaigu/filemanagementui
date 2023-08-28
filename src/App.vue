<template>
    <!--头部文件  -->
    <Header v-if="shouldShowComponent"></Header>
    <!-- 展示路由组件的区域 -->
    <div class="content">
     <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
let shouldShowComponent = () => {
      // 根据路由的 meta 字段判断是否需要显示组件
      return !route.meta.hideComponent;
    };
</script>

<style scoped>

</style>