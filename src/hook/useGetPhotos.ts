import { useState, useEffect } from 'react';
import { apiAll, apiSearch } from "../api/api"

export default function useGetPhotos(params:String) {
  const [arr,setArr] = useState([])
  var txt:String= params

  async function func(): Promise<void> {
    if (txt != null) {
      setArr(await apiSearch(txt).then(res=>res.results))
    } else {
      setArr(await apiAll())
    }
  }

  useEffect(()=>{
    func()
  },[txt])
  
  return arr
}