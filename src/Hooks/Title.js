import { useEffect } from "react"

const Title = title =>{
  useEffect(()=>{
    document.title =`${title} - RapidTrip`;
  },[title])
};

export default Title;