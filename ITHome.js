function indexAD(obj) {
  let data = obj.data;
  let lsit = data["list"];
  data["list"] = lsit.filter(item => item.smallTags.tagType != 2);
  return obj;
}

let obj = JSON.parse($response.body);
$done({ body: JSON.stringify(indexAD(obj)) });
