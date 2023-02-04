// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
import {APP_KEY} from "@env" 

const key = APP_KEY 
const url =  "https://api.unsplash.com/"

async function apiAll() {
  return await fetch(url+"photos?per_page=30&client_id="+key).then(res=>res.json())
} 
// como fazer ele buscar mais paginas?
// um for para contar as paaginas e salvar em cache?

async function apiSearch(params:String) {
  return await fetch(url+"search/photos?query="+params+"&client_id="+key).then(res=>res.json())
} // ok

export {apiAll, apiSearch}