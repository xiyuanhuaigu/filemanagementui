<template>
  <div class="container1">
    <div class="left">
        <a>文件收集系统</a>
    </div>
    <div class="right">
        <svg t="1693222972691" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3658" width="50" height="50"><path d="M512 74.666667c241.536 0 437.333333 195.797333 437.333333 437.333333S753.536 949.333333 512 949.333333 74.666667 753.536 74.666667 512 270.464 74.666667 512 74.666667z m0 64C305.813333 138.666667 138.666667 305.813333 138.666667 512S305.813333 885.333333 512 885.333333 885.333333 718.186667 885.333333 512 718.186667 138.666667 512 138.666667z m138.666667 170.666666a32 32 0 0 1 31.850666 28.928L682.666667 341.333333v106.666667a32 32 0 0 1-63.850667 3.072L618.666667 448v-106.666667a32 32 0 0 1 32-32z m-277.333334 0a32 32 0 0 1 31.850667 28.928L405.333333 341.333333v106.666667a32 32 0 0 1-63.850666 3.072L341.333333 448v-106.666667a32 32 0 0 1 32-32z" fill="#ffffff" p-id="3659"></path></svg>
        <a>个人中心</a>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">

.container1{
    background-image: linear-gradient( 135deg, #CE9FFC 10%, #7367F0 100%);
    height: 50px;
    display: flex;
    justify-content: space-between;
    .left{
        display: flex;
        justify-content: center;
        a{
            font-family: "Open Sans", sans-serif;
            font-size: 30px;
            color: white;
            text-align: center;
            line-height: 50px; /* 与容器高度相等 */
        }
    }
    .right{
        display: flex;
        a{
            font-family: "Open Sans", sans-serif;
            font-size: 20px;
            color: white;
            text-align: center;
            line-height: 50px; /* 与容器高度相等 */
        }
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    .right:hover{
        background-color: #CE9FFC;
    }
    
}
</style>
