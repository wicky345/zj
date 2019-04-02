<template>
<div>
  <zj-header></zj-header>
  <!-- main部分 -->
  <div class="main-newsdate">
    <div class="layui-container">
      <p class="news"><a href="news.html">实时新闻</a> > 新闻详情</p>
      <h1>这家引爆ins的奶茶店终于空降南昌，开放加盟啦！</h1>
      <p class="pushtime">发布时间：<span>2018-06-06</span></p>
      <p class="introTop">TA家的珍珠是用黑糖熬制的，要熬整整四个小时才行，每熬一锅黑糖只能做出40杯奶茶，好味，是值得等待的。</p>
      <div><img src="/static/img/news_big.jpg" alt="新闻详情图"></div>
      <p class="introBott">北极光的制作，需要300g葡萄来完成，要选用最新鲜的葡萄，才能做出最灿烂的北极光。满满一瓶葡萄，看着就让人倍感满足。喝之前，要先摇9下，才能喝出最好的果味。晨曦的寓意是，清晨的阳光。要用到一整颗百香果的晨曦，喝起来酸酸甜甜，果味浓郁。晨曦喝起来果味极浓，不仅仅有百香果，还有芒果、橙汁...的味道，十分清新，彷佛夏日的一抹凉风！</p>
    </div> 
  </div>
  <!-- footer部分 -->
  <zj-footer></zj-footer>
  </div>
</template>
<script>
import zjHeader from '../components/header'
import zjFooter from '../components/footer'
export default{
    data(){
        return{

        }
    },
    components:{
    zjHeader,
    zjFooter
    }
}
</script>
<style>
/*动态详情页*/
.main-newsdate{width:90%;margin: 80px auto 0px auto; text-align: center;}
.main-newsdate .news{text-align: left; line-height: 104px;}
.main-newsdate .news a{color:#333;text-decoration: none;}
.main-newsdate .news a:hover{color:#777;}
.main-newsdate h1{padding-top: 6px;}
.main-newsdate .pushtime{color: #686868; font-size: 18px; line-height: 82px;}
.main-newsdate .introTop{padding-bottom: 28px; font-size: 18px; line-height: 20px; text-align: left;}
.main-newsdate .introBott{font-size: 18px; line-height: 42px; text-align: justify; padding: 40px 0 102px 0;}
.main-newsdate img{max-width: 100%;}

</style>