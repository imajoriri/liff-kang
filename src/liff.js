import liff from "liff";

liff.init( data => {
  console.log(data);
},
  err => {
  }
);

var tmpContext = {};
if(liff._auth){
  tmpContext = liff._auth.context;
}

export default liff;
export const liffContext = tmpContext;

/*
 liff >> liff.openWindow({})とか

 liff._auth: {
  "context":{
    "userId":"U4af498...",
    "type":"group",
    "groupId":"Ca5637c...",
    "viewType":"full"
  }
}
*/

