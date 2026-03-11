import { useEffect, useState } from "react"

export default function Clock() {
  const [now, setNow] = useState(new Date())
    
  //Используем useEffect для операций, которые не отвечают за рендер(в отличие от useState)
  useEffect(()=>{
    const timer = setInterval(() => {
      setNow(new Date())
    }, 1000)

    //Обязательно очищаем setInterval, чтобы избежать утечки памяти
    return () => {
      clearInterval(timer)
    }
  }, [])

  return(
      <div className="clock">{now.toLocaleTimeString()}</div>
  )
}