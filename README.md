# elementUI

## 一、安装

> npm i element-ui -S

## 二、引入 Element

- 在 vue 项目中的 main.js 中引入 element

```
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
```
---

## 三、开始上手使用



### 1.按钮

#### (1)elementui 可以使用 el-button 标签

- 按钮主要常用的四个属性:1.type 用来表示类型（也可以理解为颜色）；2.plain 朴素表示淡色的按钮；round 表示圆角按钮；circle 表示圆形按钮

#### (2)buttons库
 - 引入buttons.css
```
import './assets/buttons.css'
```

- 可增加想要效果的类名，如：button-raised 可以增加质感；button-pill 可以变为圆角；button-3d 可以让按钮看起来是 3D 效果；button-glow 可以让按钮有呼吸效果

---

### 2.字体

- elementUI 字体忽略不计

- 其他字体，汉仪菱心体简；苏新诗卵石体；孙过庭书谱体

  #### (1)下载好所需要的字体

  #### (2)通过字体格式转换器，转换成所需要的格式：https://www.fontke.com/tool/convfont 通常需要五种格式：ttf、eot、woff、woff2、svg

  #### (3)把转好的格式放入 font 文件夹中

  #### (4)用@font-face 预设字体调用的名称

  #### (5)设定该字体样式

---

### 3.图标

#### (1)elementUI 图标

- 使用 i 标签和对应的类名就可以渲染出对应的图标

```
<i class="el-icon-edit"></i>
```

#### (2)阿里图标库

- 找到喜欢的图标；方法一：直接复制 SVG 使用；方法二：下载 CSS 文件调用

### 4.弹窗

#### (1)elementUI 弹窗

- 在按钮中绑定事件
- 直接使用 this.$alert 即可弹出询问框

```
open() {
        this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: () => {

          }
        });
      }
```

#### (2)layer 弹窗

- 安装 vue 环境下的 layer，npm install vue-layer -S
- 在程序入口添加

```
import Vue from 'vue';
import layer from 'vue-layer'
import 'vue-layer/lib/vue-layer.css';
Vue.prototype.$layer = layer(Vue);
```

- 使用 this.$layer.alert("找不到对象！");即可调用
- 其他方法可参考 npm 网站：https://www.npmjs.com/package/vue-layer

#### (3)sweetAlert 弹窗

- 在 vue 环境下安装：npm install sweetalert --save
- 在程序入口添加：import swal from 'sweetalert';
- 可以开始使用了，官网：https://www.sweetalert.cn/guides.html

### 5.动画

#### (1)elementUI 的动画

- zoom 缩放动画、 collapse 展开折叠动画

#### (2)Animate.css 动画

- 丰富多彩
- 安装：npm install animate.css --save
- 引入：import 'animate.css'
- 官网：https://animate.style/
- 参考：https://www.jq22.com/yanshi819

### 6.时间插件

#### (1)elementUI 的时间插件

- 代码中插入控件

```
<el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
</el-date-picker>

```

#### (2)moment.js

- 安装：npm install moment --save
- 引入：import moment from 'moment'
- 官网：http://momentjs.cn/

---

## 四 、一个美好的愿景
- 因为经历了很多系统的开发，也对公司目前UI的设计风格有一定的了解，想基于elementUI封装一套属于我们AI考试辅导的前端框架，这样有利于开发的效率，有利于风格的统一。
- 就目前而言出现的问题，在不同的系统中所使用的“确定”这个按钮有颜色的差别，有大小的差异，感觉不同系统展现的效果并不像是一个产品线上出来的。
- 形成一个统一的框架之后，可以提升产品的交互效果。
- 交互效果有以下4点：
  >  1.形式需反射功能
  - 界面样式（颜色、形状、大小等等）隐喻怎样的功能
  - 例如：蓝色按钮为确定，灰色按钮为取消，绿色钩子表成功，红色叉表失败；让用户对我们的产品形成一个固定的思维模式。
  > 2.预测和减少出错
  - 在重要的环节，设定一些限制能够迫使用户调整自己的行为。比如，发布讲评信息的时候设置询问提示是否确定发布，来限制用户谨慎操作。
  - 目前我们各个产品中遇到的问题是：没有统一性，某些重要的环节是否存在操作询问框完全取决于开发人员想加或者不想加，而不是设计人员在一开始就设计好，用开发规范规定好（如：开发文档），造成了某些重要操作没有提示，某些重要操作又有提示。
  > 3.考虑系统反馈和响应时间
  - 响应（延迟）可以被分为四个阶段: 即刻（少于0.1秒）, 断断续续 (0.1-1 秒), 中断 (1-10 秒), 断开连接，无响应 (超过10秒)。
  - 目前我们产品中遇到的问题是：相应虽有动画，但是没有形成统一的风格，比如数据加载用什么动画，图片加载用什么动画，统计图加载用什么动画，特殊加载（抽题）的动画。
   > 4.战略地安放界面上的每一个元素
   - 这一点应该UI考虑的比较多，比如说按钮大小应该多少尺寸最适合人机交互，按钮应该放在左上角还是左下角比较符合用户操作习惯。


---
文件下载地址：