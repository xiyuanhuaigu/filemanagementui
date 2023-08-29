<template>
  <div class="container">
    <hander></hander>
    <div class="top">
      <div class="binlist">
        <div class="binli">
          <a class="text">111111</a>
        </div>
        <div class="binli">
          <a>111111</a>
        </div>
        <div class="binli">
          <a>111111</a>
        </div>
      </div>
    </div>
    <div class="upload">
        <div class="top">
        </div>
        <div class="bottom">
            <upload></upload>
        </div>   
    </div>
  </div>
</template>

<script setup lang="ts">
import upload from './upload/index.vue'
import hander from '@/components/hander.vue';

</script>

<style scoped lang="scss">
.container {
    background-image: linear-gradient( 135deg, #CE9FFC 10%, #7367F0 100%);
    height: 50rem;
  .top {
    display: flex;
    justify-content: center;
    width: 100%;
    animation: bounceInDown; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 2s; /* don't forget to set a duration! */
    .binlist {
      display: flex;
      -webkit-border-radius: 5px;
      margin: 0 100px 0 100px;
      flex-wrap: wrap;
      background-color: rgba(255, 255, 255, 0.2);
      margin-top:30px ;
      .binli {
        -webkit-border-radius: 5px;
        min-width: 130px;
        padding:10px 0  10px 0;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        .text {
          text-align: center;
        }
      }
      .binli:hover{
        background-color: white;
        cursor: pointer;
      }
    }
  }
  .upload{
    animation: zoomIn; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 2s; /* don't forget to set a duration! */
    width: 100%;
    display: flex;
    margin-top:200px ;
    flex-direction:column;
    align-items: center;
    .bottom{
        width: 50%;
        
    }
  }
}
</style>
