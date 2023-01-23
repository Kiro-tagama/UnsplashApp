// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

const key = "/?client_id=YOUR_ACCESS_KEY"  // dotenv
const url =  "https://api.unsplash.com/"

async function apiAll(params:type) {
  return await fatch(url+"photos"+key).then(res=>res.json()).then((data) => console.log(data));
}

async function apiSearch(params:String) {
  return await fatch(url+"search"+key).then(res=>res.json())
}

export {apiAll, apiSearch}