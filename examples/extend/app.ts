import axios from "../../src";


axios({
  url: '/extend/post',
  method: 'post',
  data: {
    a: 1,
    b: 2
  },
});

axios('/extend/post', {
  method: 'post',
  data: {
    a: 1,
    b: 2
  },
});

axios.request({
  url: '/extend/post',
  method: 'post',
  data: {
    a: 1,
    b: 2
  },
});

axios.get('/extend/get');
axios.options('/extend/options');
axios.delete('/extend/delete');
axios.post('/extend/post', {msg: 'post'});
axios.put('/extend/put', {msg: 'put'});
axios.patch('/extend/patch', {msg: 'patch'});
