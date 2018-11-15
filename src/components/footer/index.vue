<template>
  <div class="footer-page">
    <div class="footer">
      <div class="nav-item">
        <div class="nav-tit">{{ $t("footer.footer1") }}</div>
        <div class="phone">{{ $t("footer.footer2") }}020-82510334</div>
        <div class="phone">{{ $t("footer.footer3") }}kf@90qkl.cn</div>
        <div class="phone">{{ $t("footer.footer4") }}</div>
      </div>
      <div class="nav-item">
        <div class="nav-tit">{{ $t("footer.footer5") }}</div>
        <div class="from">
          <div class="info-name">
            <div class="name-l">
              <div class="name">{{ $t("footer.footer6") }}</div>
              <div class="input"><input v-model="userName" type="text"></div>
            </div>
            <div class="phone-r">
              <div class="phone">{{ $t("footer.footer2") }}</div>
              <div class="input"><input  v-model="userTel"  type="text" :maxlength="11"></div>
            </div>
          </div>
          <div class="mailbox">
            <div class="email">{{ $t("footer.footer3") }}</div>
            <div class="input"><input v-model="userMail" type="text"></div>
          </div>
          <div class="write">
            <textarea :placeholder="$t('footer.footer13')" v-model="textContent"></textarea>
          </div>
          <div @click="sendMail([$i18n.locale])" class="submit">{{ $t("footer.footer7") }}</div>
        </div>
      </div>
      <div class="nav-item">
        <div class="nav-tit">{{ $t("footer.footer8") }}</div>
        <div class="attention">
          <div class="attention-code">
            <img src="../../assets/img/code.jpg" alt="">
          </div>
          <div class="attention-info">
            <div class="design"><img src="../../assets/img/facebook.png" alt=""></div>
            <div class="design"><img src="../../assets/img/twitter.png" alt=""></div>
            <div class="design"><img src="../../assets/img/linkedin.png" alt=""></div>
            <div class="design"><img src="../../assets/img/qq.png" alt=""></div>
            <div class="design"><img src="../../assets/img/weibo.png" alt=""></div>
            <div class="design"><img src="../../assets/img/weixi.png" alt=""></div>
          </div>
        </div>
      </div>

      <div class="footer-bttom">
        <span>{{ $t("footer.footer11") }}</span>
        <span>{{ $t("footer.footer12") }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      userName:null,
      userTel:null,
      userMail:null,
      textContent:''
    };
  },
  methods:{
    sendMail([lang]){
      if(lang == 'en'){
        if(this.userName==null||this.userName==''){
          Toast('Please enter the name')
          return        
        }

        if(this.userTel==null||this.userTel==''){
          Toast('Please enter the contact phone')
          return 
        }

        if(this.userMail==null||this.userMail==''){
          Toast('Please enter the contact mailbox')
          return 
        }
      }
      else {
        if(this.userName==null||this.userName==''){
          Toast('请输入姓名')
          return        
        }

        if(this.userTel==null||this.userTel==''){
          Toast('请输入联系电话')
          return 
        }

        if(this.userMail==null||this.userMail==''){
          Toast('请输入联系邮箱')
          return 
        }
      }
      
      let p = {
        'userName':this.userName,
        'userTel':this.userTel,
        'userMail':this.userMail,
        'textContent':this.textContent,
      }
      this.axios.post(`${this.api.baseURL}/home/emailData`,p)
      .then(res => {
         if(lang == 'en'){
          Toast('Your information has been submitted and we will contact you as soon as possible!')
        }
        else {
          Toast('您的信息已提交，我们会尽快联系您!')
        }
      })
    } 
  }  
};
</script>
<style lang="stylus" scoped>
@import '../../assets/styles/mixins.styl';

.footer-page {
  width: 100%;
  height: 100%;

  .footer {
    padding: px2rem(40px) 0;
    width: 100%;
    height: px2rem(1389px);
    background: url('../../assets/img/footer.png') no-repeat;
    background-size: 100% 100%;
    color: #fff;

    .nav-item {
      padding: 0 px2rem(20px) px2rem(74px) px2rem(20px);
      width: 100%;

      .nav-tit {
        position: relative;
        margin-bottom: px2rem(20px);
        font-size: px2rem(32px);
        color: #fff;

        &:after {
          content: ' ';
          position: absolute;
          top: 50%;
          left: px2rem(180px);
          transform: translateY(-50%);
          width: 74%;
          height: 1px;
          background-color: #a9aaaf;
        }
      }

      .phone {
        margin-bottom: px2rem(20px);
        font-size: px2rem(30px);

        &:last-child {
          margin-bottom: 0;
        }
      }

      .from {
        width: 100%;

        .info-name {
          width: 100%;
          height: px2rem(60px);
          color: #000;

          &::after {
            display: block;
            clear: both;
            content: ' ';
          }

          .name-l {
            float: left;
            padding: 0 px2rem(16px);
            width: 40%;
            height: px2rem(60px);
            background-color: #fff;

            &::after {
              display: block;
              clear: both;
              content: ' ';
            }

            .name {
              float: left;
              width: 37%;
              line-height: px2rem(60px);
              font-size: px2rem(28px);
            }

            .input {
              float: right;
              width: 63%;
              height: 100%;

              > input {
                width: 100%;
                height: 100%;
                vertical-align: top;
              }
            }
          }

          .phone-r {
            float: right;
            padding: 0 px2rem(16px);
            width: 58%;
            height: 100%;
            background-color: #fff;

            &::after {
              display: block;
              clear: both;
              content: ' ';
            }

            .phone {
              float: left;
              width: 30%;
              line-height: px2rem(60px);
              font-size: px2rem(28px);
            }

            .input {
              float: right;
              width: 70%;
              height: 100%;

              > input {
                width: 100%;
                height: 100%;
                vertical-align: top;
              }
            }
          }
        }

        .mailbox {
          padding: 0 px2rem(16px);
          margin-top: px2rem(20px);
          width: 100%;
          height: px2rem(60px);
          font-size: px2rem(28px);
          background-color: #fff;
          color: #000;

          &::after {
            display: block;
            clear: both;
            content: ' ';
          }

          .email {
            float: left;
            width: 15%;
            height: px2rem(60px);
            line-height: px2rem(60px);
          }

          .input {
            float: right;
            width: 85%;
            height: 100%;

            > input {
              width: 100%;
              height: 100%;
              vertical-align: top;
            }
          }
        }

        .write {
          margin-top: px2rem(20px);
          width: 100%;
          height: px2rem(100px);

          > textarea {
            padding: px2rem(24px);
            width: 100%;
            height: 100%;
            resize: none;
          }
        }

        .submit {
          margin-top: px2rem(40px);
          width: 100%;
          height: px2rem(60px);
          line-height: px2rem(60px);
          text-align: center;
          font-size: px2rem(28px);
          background-color: #0984e3;
          border-radius: px2rem(10px);
          color: #fff;
        }
      }

      .attention {
        width: 100%;

        &::after {
          display: block;
          clear: both;
          content: ' ';
        }

        .attention-code {
          float: left;
          width: px2rem(220px);
          height: px2rem(200px);
          background-color: #fff;

          > img {
            width: 100%;
            height: 100%;
          }
        }

        .attention-info {
          margin-top: px2rem(40px);
          margin-left: px2rem(80px);
          float: left;
          width: px2rem(320px);

          .design {
            width:px2rem(61px);
            margin-top: px2rem(40px);
            margin-right: px2rem(60px);
            float: left;

            &:nth-child(1) {
              margin-top: 0;
            }

            &:nth-child(2) {
              margin-top: 0;
            }

            &:nth-child(3) {
              margin-top: 0;
            }

            &:nth-child(3n) {
              margin-right: 0;
            }
          }
        }
      }
    }

    .footer-bttom {
      padding:px2rem(20px) 0;
      margin-top:px2rem(-4px);
      width:100%;
      text-align:center;
      font-size:px2rem(24px);
      background-color:#252533;
      color:#5d5d5d;

      > span {
        display: block;
      }
    }
  }
}
</style>
