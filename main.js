xxx.onload = function () {
  console.log("图片加载成功");
};
xxx.onerror = function () {
  console.log("图片加载失败");
  xxx.src = "/404.png";
};
