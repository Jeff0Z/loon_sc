function indexAD(obj) {
  let data = obj.data;
  let lsit = data["list"];
  data["list"] = lsit.filter(item => item.flag != 2);
  obj.data = data;
  return obj;
}

let obj = JSON.parse($response.body);
$done({ body: JSON.stringify(indexAD(obj)) });
