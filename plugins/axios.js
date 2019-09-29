// Adds header: `Authorization: 123` to all requests
// this.$axios.setHeader('Authorization', '123')

// Overrides `Authorization` header with new value
// this.$axios.setHeader('Authorization', '456')

// Adds header: `Content-Type: application/x-www-form-urlencoded` to only post requests

// this.$axios.setHeader('Content-Type', 'application/x-www-form-urlencoded', [
//  'post'
// ])

// Removes default Content-Type header from `post` scope
// this.$axios.setHeader('Content-Type', false, ['post'])

import {pathOr, pipe} from 'ramda';
import {Observable} from 'rxjs';
import { retry, map, throttle } from 'rxjs/operators';
import qs from 'qs';


const getCode = pipe(
  pathOr(0,['response','status']),
  parseInt,
)

function successForPromise(url, response, resolve, reject, fliterData,defaultData) {
  // Vue.$indicator.close();
  if (response.status === 200) {
      // console.log("response--------------->",response.data);
      // resolve(response.data);
      const fdfn = pipe(...fliterData);
      resolve(fdfn(response.data));
  } else {
      reject && reject(response);
  }
}

function successForRx(url,response,subscriber,fliterData,defaultData){
  switch (response.code) {
    case value:
      // xxxx

      subscriber.next(r)
      break;

    default:
      break;
  }
}






export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError(error => {
    // 获得原始的http状态
    const code = getCode(error);

    console.log("error-info------------------>",error);
    // if (code === 400) {
    //   redirect('/400')
    // }
  })

  $axios.onResponse(r=>{
    // console.log("$axios.onResponse----------------->",r);
  })



  $axios.getByRx = function(options){
    const {url,params = {},filterData=[],defaultData} = options;
    let $ajax  =  Observable.create(subscriber => {
      $axios.$get(url, {params}).then(r=>{
        console.log("r---------->",r);
        // TODO 
        successForRx(url,r,subscriber,filterData,defaultData)
      }).catch(e=>{
        subscriber.error(e)
      })
    })
    return $ajax.pipe(
      retry(1), //重试
      map(r=>r.data) //过滤数据
    );
  }

  
}