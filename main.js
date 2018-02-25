//前端代码

myButton.addEventListener('click', (e)=>{
  let request = new XMLHttpRequest()
  request.open('get', 'http://jack.com:8002/xxx') // 配置request
  request.setRequesHeader('frank','18');
  request.setRequesHeader('Content-type','x-www-form-urlencoded');
  request.send('这是设置request第四部分')
  request.onreadystatechange = ()=>{
    if(request.readyState === 4){
      if(request.status >= 200 && request.status < 300){
        let string = request.responseText
        // 把符合 JSON 语法的字符串
        // 转换成 JS 对应的值
        let object = window.JSON.parse(string) 
        // JSON.parse 是浏览器提供的
      }else if(request.status >= 400){
      }
    }
  }
})

myButton.addEventListener('click',(e)=>{
  window.jQuery.ajax({
    url:'/xxx',
    method:'get',
    successFn:(x)=>{
      console.log(x)
    },
    failFn:(x)=>{
      console.log(x)
      console.log(x.status)
      console.log(x.responseText)
    }
  })
})




