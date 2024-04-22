<script setup>
import { Plus, Upload } from '@element-plus/icons-vue'
import {ref} from 'vue'
const uploadRef = ref()


// 用户信息
import {useUserInfoStore} from '@/stores/user.js'
const userInfoStore = useUserInfoStore()
const imgUrl=ref(userInfoStore.info.userPic)

// 上传头像(代码未写)
//调用接口，更新头像url
import {userAvatarUpdateService} from '@/api/user.js'
import {ElMessage} from 'element-plus'
const updateAvatar = async ()=>{
  console.log('上传头像 el-upload未完成代码编写' )
  // let result = await userAvatarUpdateService(imgUrl.value)
  // ElMessage.success(result.message? result.message:'修改成功')
  //更新pinia中的数据
  // userInfoStore.info.userPic=imgUrl.value
}
</script>

<template>
  <el-card class="page-container">

    <template #header>
      <div class="header">
        <span>更换头像</span>
      </div>
    </template>

    <el-row>
      <el-col :span="12">
        <!--        -------代码未写---------        -->
        <el-upload
            ref="uploadRef"
            class="avatar-uploader"
            :show-file-list="false"
        >
          <img v-if="imgUrl" :src="imgUrl" class="avatar" />
          <img v-else src="@/assets/avatar.jpg" width="278" />
        </el-upload>

        <br />

        <el-button type="primary" :icon="Plus" size="large"  @click="uploadRef.$el.querySelector('input').click()">
          选择图片
        </el-button>
        <el-button type="success" :icon="Upload" size="large" @click="updateAvatar">
          上传头像
        </el-button>

      </el-col>
    </el-row>
  </el-card>
</template>

<style lang="scss" scoped>
.avatar-uploader {
  :deep() {
    .avatar {
      width: 278px;
      height: 278px;
      display: block;
    }

    .el-upload {
      border: 1px dashed var(--el-border-color);
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: var(--el-transition-duration-fast);
    }

    .el-upload:hover {
      border-color: var(--el-color-primary);
    }

    .el-icon.avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 278px;
      height: 278px;
      text-align: center;
    }
  }
}
</style>