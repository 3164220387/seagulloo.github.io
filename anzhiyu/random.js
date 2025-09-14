var posts=["2025/09/13/安知鱼主题自定义教程/","2025/09/12/Hexo+Github搭建个人网站笔记/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };