// UnicomScript
const url = $request.url;
if (url.includes('selectRule=')) {
  const newUrl = url.replace(/(selectRule=)\d+(&|$)/, '$1319$2');
  console.log(`[联通选号] 规则已修改: ${newUrl}`);
  $done({url: newUrl});
} else {
  $done({});
}
