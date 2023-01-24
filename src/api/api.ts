// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

const key = "YOUR_ACCESS_KEY"  // dotenv
const url =  "https://api.unsplash.com/"

async function apiAll() {
  return await fetch(url+"photos/?client_id="+key).then(res=>res.json())
} // ok data.urls.raw

async function apiSearch(params:String) {
  return await fetch(url+"search/photos?query="+params+"&client_id="+key).then(res=>res.json())
} // ok

export {apiAll, apiSearch}