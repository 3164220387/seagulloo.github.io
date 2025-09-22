var posts=["2025/09/23/Seagull-Game-暂定-开发日记/","2025/09/12/Hexo+Github搭建个人网站笔记/","2025/09/13/安知鱼主题自定义教程/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };