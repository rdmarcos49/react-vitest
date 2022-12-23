import { useRef, useState } from "react"

export const First = () => {
  const [giftsToRender, setGiftsToRender] = useState([])
  const inputRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    const giftsToWrap = inputRef.current.value.split(' ').filter(el => el !== '')
    const wrappedGifts = wrapping(giftsToWrap)
    setGiftsToRender(wrappedGifts)
  }

  const handleReset = () => {
    setGiftsToRender([])
    inputRef.current.value = ''
  }

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
    <article>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Type the words you want to wrap...'
          defaultValue={'Example words'}
          ref={inputRef}
        />
        <div className='grid' style={{ gridTemplateColumns: '1fr 1fr' }}>
          <button> Wrap gifts! </button>
          <button onClick={handleReset}> Reset </button>
        </div>
      </form>
      <ul>
        {giftsToRender.map(gift => (
          <li key={gift}> {gift} </li>
        ))}
      </ul>
    </article>
  )
}
