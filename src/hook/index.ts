import React, { useState, useEffect } from 'react';
import { apiAll, apiSearch } from "../api/api"

export function getPhotos(params:String) {
  const [arr,setArr] = useState<Array>([])
  const txt:String = "" // params

  async function func(params:type) {
    if (txt.lenght >= 1) {
      setArr(await apiSearch(txt))
    } else {
      setArr(await apiAll())
    }
  }

  useEffect(()=>{
    func()
  })

  return arr
}