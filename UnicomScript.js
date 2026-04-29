const url = $request.url;
// 匹配 selectRule= 后面的所有内容（直到 & 为止），并强制替换
if (url.includes('selectRule=')) {
  // 核心修改：这里把 selectRule 的值完全替换为 "319"（单个值）
  // 如果你想试其他规则，把下面的 "319" 改成 "318" 或 "320" 或 "101"
  const newUrl = url.replace(/(selectRule=)[^&]*/, '$1319');
  
  console.log(`🔔【联通选号】规则已强制修改`);
  console.log(`原参数: ${url.match(/selectRule=[^&]*/)[0]}`);
  console.log(`新参数: selectRule=319`);
  console.log(`----------------------------------------`);
  
  $done({url: newUrl});
} else {
  $done({});
}
