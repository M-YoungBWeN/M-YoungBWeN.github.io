var posts=["2024/11/18/NER浅层理解/","2024/11/16/Node-Hexo/","2024/09/22/判断目标是否在雷达波束范围内/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };