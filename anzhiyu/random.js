var posts=["2024/11/16/Node-Hexo/","2024/11/18/NER浅层理解/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };