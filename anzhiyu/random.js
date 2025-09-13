var posts=["2025/09/12/Hexo使用笔记/","2025/09/13/安知鱼主题自定义教程/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };