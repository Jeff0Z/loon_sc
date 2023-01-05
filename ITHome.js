function indexAD(obj) {
  console.log("开始!");
  let data = obj.data;
  let list = data["list"];
  console.log(list.length);
  let newItems = [];
  newItems = list.filter(item => item.feedContent.flag != 2);
  console.log(newItems.length);
  data.list = newItems;
  obj.data = data;
  console.log("结束!");
  return obj;
}

let obj = JSON.parse($response.body);
$done({ body: JSON.stringify(indexAD(obj)) });
