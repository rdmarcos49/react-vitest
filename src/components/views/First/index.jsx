import { useEffect, useState } from "react"

export const First = ({ gifts = [] }) => {
  const [giftsToRender, setGiftsToRender] = useState([])

  useEffect(() => {
    setGiftsToRender(wrapping(gifts))
  }, [gifts])

  function wrapping(target) {
    const LINE_BREAK = 'N'
    const WRAP_CHAR = '*'
  
    const wrappedGifts = target.map(gift => {
      const semiWrappedGift = WRAP_CHAR + gift + WRAP_CHAR
      const verticalWrappingSize = semiWrappedGift.length
      const verticalWrapping = WRAP_CHAR.repeat(verticalWrappingSize)
      const topWrap = verticalWrapping + LINE_BREAK
      const bottomWrap = LINE_BREAK + verticalWrapping
  
      return topWrap + semiWrappedGift + bottomWrap
    })
  
    return wrappedGifts
  }

  return (
    <section>
      <ul>
        {giftsToRender.map(gift => (
          <li key={gift}> {gift} </li>
        ))}
      </ul>
    </section>
  )
}
