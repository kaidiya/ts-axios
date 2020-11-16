import axios from "../../src";

axios({
  method: 'GET',
  url: '/base/get',
  params: {
    foo: ['bar', 'baz'],
  },
});

axios({
  method: 'GET',
  url: '/base/get',
  params: {
    foo: {
      bar: 'baz'
    },
  },
});

const date = new Date();
axios({
  method: 'GET',
  url: '/base/get',
  params: {
    date,
  },
});

axios({
  method: 'GET',
  url: '/base/get',
  params: {
    foo: '@:$, ',
  },
});

axios({
  method: 'GET',
  url: '/base/get',
  params: {
    foo: 'bar', 
    baz: null,
  },
});

axios({
  method: 'GET',
  url: '/base/get#hash',
  params: {
    foo: 'bar', 
  },
});

axios({
  method: 'GET',
  url: '/base/get?foo=bar',
  params: {
    bar: 'bar', 
  },
});

axios({
  method: 'post',
  url: '/base/post',
  data: {
    bar: 'bar', 
    a: 1,
    b: 2
  },
});

axios({
  method: 'post',
  url: '/base/post',
  data: {
    bar: 'bar', 
    a: 1,
    b: 2
  },
  headers: {
    'content-type': 'application/json',
    'Accept': 'application/json, text/plain, */*'
  },
});

const paramsString = 'q=URLUtils.searchParams&topic=api';
const searchParams = new URLSearchParams(paramsString);
axios({
  method: 'post',
  url: '/base/post',
  data: searchParams,
});

const arr = new Int32Array([21, 31])
axios({
  method: 'post',
  url: '/base/buffer',
  data: arr,
});

axios({
  method: 'post',
  url: '/base/post',
  data: {
    bar: 'bar', 
    a: 1,
    b: 2
  },
}).then(res => {
  console.log(res);
});

axios({
  method: 'post',
  url: '/base/post',
  data: {
    bar: 'bar', 
    a: 1,
    b: 2
  },
  responseType: 'json',
}).then(res => {
  console.log(res);
});
