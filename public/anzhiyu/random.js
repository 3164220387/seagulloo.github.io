var posts=["2025/09/10/hello-world/","2025/09/12/Hexo使用笔记/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };