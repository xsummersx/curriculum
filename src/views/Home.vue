<template>
  <div class="home">
    <el-header>
      <h2>elementUI按钮</h2>
    </el-header>
    <el-main>
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>
      <br />
      <el-row>
        <el-button plain>朴素按钮</el-button>
        <el-button type="primary" plain>主要按钮</el-button>
        <el-button type="success" plain>成功按钮</el-button>
        <el-button type="info" plain>信息按钮</el-button>
        <el-button type="warning" plain>警告按钮</el-button>
        <el-button type="danger" plain>危险按钮</el-button>
      </el-row>
      <br />
      <el-row>
        <el-button round>圆角按钮</el-button>
        <el-button type="primary" round>主要按钮</el-button>
        <el-button type="success" round>成功按钮</el-button>
        <el-button type="info" round>信息按钮</el-button>
        <el-button type="warning" round>警告按钮</el-button>
        <el-button type="danger" round>危险按钮</el-button>
      </el-row>
      <br />
      <el-row>
        <el-button icon="el-icon-search" circle></el-button>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="success" icon="el-icon-check" circle></el-button>
        <el-button type="info" icon="el-icon-message" circle></el-button>
        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </el-row>
      <br />
      <div class="tip">按钮主要常用的四个属性:1.type用来表示类型（也可以理解为颜色）；2.plain朴素表示淡色的按钮；round表示圆角按钮；circle表示圆形按钮</div>
    </el-main>
    <el-header>
      <h2>BUTTONS</h2>
    </el-header>
    <el-main>
      <a class="button button-primary">点我交互比elementButton好</a>
      <a class="button button-raised button-primary">点我交互比elementButton好</a>
      <a class="button button-raised button-primary button-pill">点我交互比elementButton好</a>
      <br />
      <a class="button button-3d button-primary button-rounded">我是3D按钮很炫酷</a>
      <a class="button button-3d button-action button-pill">我是3D按钮很炫酷</a>
      <br />
      <a class="button button-glow button-rounded button-raised button-primary">我是会呼吸的</a>
      <a class="button button-glow button-border button-rounded button-primary">我是会呼吸的</a>
      <br />
    </el-main>
    <el-header>
      <h2>elementUI字体</h2>
    </el-header>
    <el-main>
      忽略不计
    </el-main>
    <el-header>
      <h2>别的字体</h2>
    </el-header>
    <el-main>
      <h3 style="font-family:'hylxjt'">汉仪菱心体简</h3>
      <h3 style="font-family:'sxslst'">苏新诗卵石体</h3>
    </el-main>
    <el-header>
      <h2>elementUI图标</h2>
    </el-header>
    <el-main>
      <i class="el-icon-edit"></i>
      <i class="el-icon-edit" style="font-size:24px"></i>
      <i class="el-icon-edit" style="color:#F56C6C"></i>
    </el-main>
    <el-header>
      <h2>阿里矢量图</h2>
    </el-header>
    <el-main>
      <h3>方法一：</h3>
      <h3><svg style="width:28px;height:28px;" t="1599486538222" class="icon" viewBox="0 0 1024 1024" version="1.1"
          xmlns="http://www.w3.org/2000/svg" p-id="1577" width="200" height="200">
          <path
            d="M999.04982 198.574348L825.43283 24.967598a85.318594 85.318594 0 0 0-120.615424 0L33.747549 696.047695c-0.317436 0.317436-0.419835 0.74751-0.716791 1.085426a28.24156 28.24156 0 0 0-5.242813 7.89494c-0.081919 0.184318-0.225277 0.348156-0.307197 0.542713a28.31324 28.31324 0 0 0-1.945575 8.007578L0.119817 992.993675a28.446358 28.446358 0 0 0 28.323479 31.006325c0.860149 0 1.710058 0 2.570207-0.112639l279.425563-25.405116a28.364439 28.364439 0 0 0 8.017818-1.945575c0.194558-0.081919 0.368635-0.235517 0.563193-0.317436a28.221081 28.221081 0 0 0 7.87446-5.232574c0.327676-0.296956 0.75775-0.399355 1.085426-0.716791l533.39481-533.394809 0.081919-0.0512s0-0.061439 0.051199-0.081919l137.541929-137.541929a85.390273 85.390273 0 0 0 0-120.625664z m-411.745158 24.30945l213.828958 213.828958-493.264761 493.264761L94.039901 716.148559zM59.838737 964.178682l16.824105-185.013965 168.189859 168.189859z m899.009355-685.180398L841.345588 396.500788 627.50639 182.68207 745.019134 65.169326a28.405398 28.405398 0 0 1 40.211968 0l173.61699 173.59651a28.497557 28.497557 0 0 1 0 40.232448z"
            p-id="1578" fill="#1296db"></path>
          <path
            d="M333.273976 719.16932a28.333719 28.333719 0 0 0 20.100864-8.325014l254.040926-254.030686a28.426902 28.426902 0 1 0-40.201728-40.201728L313.173112 670.642578a28.425878 28.425878 0 0 0 20.100864 48.526742z"
            p-id="1579" fill="#1296db"></path>
        </svg></h3>
      <h3>方法二：</h3>
      <h3>
        <span class="iconfont icon-pan_icon" style="font-size:24px;color:#F56C6C"></span>
      </h3>
    </el-main>
    <el-header>
      <h2>弹窗</h2>
    </el-header>
    <el-main>
      <el-button style="float:left;margin-right:30px;" type="text" @click="eleOpen">elementUI弹窗</el-button>
      <h3 @click="layerOpen">layer弹窗</h3>
      <h3 @click="sweetOpen">sweetAlert弹窗</h3>
      <h3 @click="sweetOpen2">sweetAlert弹窗2</h3>
    </el-main>
    <el-header>
      <h2>elementUI动画</h2>
    </el-header>
    <el-main>
      <el-button @click="show2 = !show2">Click Me</el-button>
      <el-button @click="show3 = !show3">Click Me</el-button>
      <div>
        <transition name="el-zoom-in-center">
          <div v-show="show2" class="transition-box">.el-zoom-in-center</div>
        </transition>
        <transition name="el-zoom-in-top">
          <div v-show="show2" class="transition-box">.el-zoom-in-top</div>
        </transition>
        <transition name="el-zoom-in-bottom">
          <div v-show="show2" class="transition-box">.el-zoom-in-bottom</div>
        </transition>
        <div style="float:right;margin-right:200px">
          <el-collapse-transition>
            <div v-show="show3">
              <div class="transition-box">el-collapse-transition</div>
            </div>
          </el-collapse-transition>
        </div>
      </div>
    </el-main>
    <el-header>
      <h2>animate.css动画</h2>
    </el-header>
    <el-main style="overflow:hidden">
      <el-button style="float:left;margin-right:50px" @click="show4 = !show4">动画1</el-button>
      <span style="float:left" v-show="show4" class="animate__animated animate__hinge">An animated element</span>
      <el-button style="float:left;margin-right:50px" @click="show5 = !show5">动画2</el-button>
      <span style="float:left" v-show="show5" class="animate__animated animate__flip">An animated element</span>
    </el-main>
    <el-header>
      <h2>elementUI时间控件</h2>
    </el-header>
    <el-main>
      <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
    </el-main>
    <el-header>
      <h2>没有其他时间控件，没有了，有个好用的moment.js</h2>
    </el-header>
    <el-main>
      <el-tag>moment().format('LL'); // 2020年9月8日</el-tag>
      <span>{{$moment().locale('zh-cn').format('LL')}}</span>
      <el-tag>几天前</el-tag>
      <span>{{$moment('20200905').locale('zh-cn').endOf('hour').fromNow()}}</span>
    </el-main>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      dialogVisible: false,
      show2: true,
      show3: true,
      show4: true,
      show5: true,
      value1: '',
      value2: '',
      time: ''
    }
  },
  mounted () {

  },
  methods: {
    eleOpen () {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: () => {

        }
      });
    },

    layerOpen () {
      this.$layer.confirm('您是如何看待前端开发？', {
        btn: ['重要', '奇葩'] //按钮
      }, (layerid) => {
        this.$layer.close(layerid)
      }, (layerid) => {
        this.$layer.close(layerid)
      });
    },
    sweetOpen () {
      this.$swal("支付成功", "支付宝到账1000元!", "success");
    },
    sweetOpen2 () {
      this.$swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            this.$swal("Poof! Your imaginary file has been deleted!", {
              icon: "success",
            });
          } else {
            this.$swal("Your imaginary file is safe!");
          }
        });
    }
  },
  components: {

  }
}
</script>
<style lang="scss" scoped>
h2 {
  color: #409eff;
  background: rgba(64, 158, 255, 0.2);
}
h3 {
  margin-right: 30px;
  float: left;
  font-family: "PingFang SC";
}
.tip {
  padding: 8px 16px;
  background-color: #ecf8ff;
  border-radius: 4px;
  border-left: 5px solid #50bfff;
  margin: 20px 0;
}
.button {
  margin-right: 30px;
  margin-bottom: 30px;
}
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
  float: left;
}
</style>
