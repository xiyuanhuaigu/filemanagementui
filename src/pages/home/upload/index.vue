<template>
  <div>
    <div class="hint">
        已提交
    </div>
    <el-upload
      class="upload-demo"
      drag
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      multiple
    >
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">
        Drop file here or <em>click to upload</em>
      </div>
      <template #tip>
        <div class="el-upload__tip">
          jpg/png files with a size less than 500kb
        </div>
      </template>
    </el-upload>
  </div>
</template>

<script setup lang="ts">
import { UploadFilled } from "@element-plus/icons-vue";
</script>

<style scoped lang="scss">
.hint{
    font-family: "Open Sans", sans-serif;
    font-size: 20px;
    text-align:center;
    padding-bottom:10px ;
}


</style>
