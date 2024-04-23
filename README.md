# big-Event
+ vue3
+ Element Plus
+ sass
+ axios

## 总结
### (一)请求
+ URLSearchParams()*
+ axios请求拦截器*(统一添加请求头内容：token)
+ axios响应拦截器*
+ 跨域问题,配置代理*

### (二)登录/注册功能
#### 表单组件
  + ref
  + 数据绑定*
  + 定义表单校验规则* 
  + v-if v-else
#### 请求
  + 提交请求

### (三)主页
#### 路由
  + vue-router
#### element组件
  + el-dropdown下拉菜单
  + el-menu菜单 侧边导航栏 sub-menu二级菜单
  + el-container外层容器
  + el-aside侧边容器
  + el-header顶部容器
  + el-main主要容器
  + el-footer底部容器
### (四)主页-文章分类
  + el-table表格
  + el-card卡片
  + Pinia状态管理
  + Pinia持久化插件：pinia-persistedstate-plugin
  + el-dialog弹窗
  + MessageBox消息弹框
### (五)主页-文章管理
  + el-select
  + el-pagination分页
  + el-drawer抽屉
  + el-option选择器
  + el-upload代码未写
  + el-dropdown
  + 富文本编辑器 Quill
### (六)主页-个人信息
  + el-upload代码未写

## 疑问
 + 请求格式为x-www-form-urlencoded时，如何将请求参数转为json格式，使用URLSearchParams()对象
 ```js
/**
 * 1.注册接口(请求参数格式：x-www-form-urlencoded)
 */
export const registerService = (registerData) => {
    var params = new URLSearchParams();
    for(let key in registerData){
        params.append(key, registerData[key]);
    }
    return request.post('/user/register', params)
}
 ```