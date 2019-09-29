<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        nuxt-a
      </h1>
      
      <span class="iconfont">&#xe601;</span>


      <span class="iconfont icon-bianji"></span>

      <button v-stream:click="plus$">+</button>
      <h1>count is {{count}}</h1>
      <nuxt-link to="/two">去第二个页面 test by hanfei</nuxt-link>
      <h2 class="subtitle">
        My lovely Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
        <img src="../assets/hy.jpg" alt="" srcset="">
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { map, startWith, scan } from 'rxjs/operators'

export default {
  components: {
    Logo
  },
  domStreams: ['plus$'],
  subscriptions () {
    // use this.plus$
    return {
      count: this.plus$.pipe(
        map((event) => 1),
        startWith(0),
        scan((total, change) => total + change)
      )
    }
  },
  methods: {
      // 会发三个请求
      async fetchSomething() {
        let apiMap = {
          url: '/api/500',// '/api/getJson',
          params:{}
        }
        this.$axios.getByRx(apiMap).subscribe(r=>{
            console.log(r);
        },e=>{
            console.log(e);
        });

        // let p = this.$axios.getRx();
        // let s1 = p.pipe(map(r=>{
        //   return r
        // })).subscribe((r)=>{
        //   console.log("it is --s1---------------->",r)
        // })

        // let s2 = p.pipe(map(r=>{
        //   return r
        // })).subscribe((r)=>{
        //   console.log("it is -s2----------------->",r)
        // });

        // let s3 = p.pipe(map(r=>{
        //   return r
        // })).subscribe((r)=>{
        //   console.log("it is ---s3--------------->",r)
        // });
      }
        // /api/getJson  /api/500'
        // this.$axios.getRx(apiMap.order.list)
        // .subscribe(r=>{
        //   console.log(r);
        // },e=>{
        //    console.log(e);
        // });



      //   // const ip = await this.$axios.$get('/api/getJson').then(r=>{
      //   //     console.log("fetchSomething--------------------------------------->",r);
      //   // })

      //   // this.ip = ip
      // }







  },
  mounted(){
    // setInterval(() => {
    //   this.fetchSomething();
    // }, 2000)
    this.fetchSomething();
    // console.log("this.plus$ -------------------->",this.plus$);
    // console.log("this.count -------------------->",this.count);
  }
}
</script>

<style lang="scss">
@import '../css/values';


.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color:$bg-color;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
