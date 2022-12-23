import { useRef, useState } from 'react'

export const Second = () => {
  const [year, setYear] = useState(2022)
  const [validYear, setValidYear] = useState(true)
  const [extraHours, setExtraHours] = useState(null)
  const [skippedWords, setSkippedWords] = useState([])
  const daysRef = useRef(null)
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const [goodWords, badWords] = getDays()
    const hours = countHours(year, goodWords)

    setExtraHours(hours)
    setSkippedWords(badWords)
  }

  const handleChangeYear = (event) => {
    const { value } = event.target
    const numberValue = Number(value)
    if (numberValue >= 1900 && numberValue <= 2999) {
      setValidYear(true)
    } else {
      setValidYear(false)
    }
    setYear(numberValue)
  }

  function getDays () {
    const { value } = daysRef.current
    const goodFormat = []
    const badFormat = []

    const separatedWords = value.split(' ').filter(elem => elem !== '')
    const correctFormat = /^[0-9]{2}\/[0-9]{2}$/g
    separatedWords.forEach(word => {
      if (word.match(correctFormat)) {
        goodFormat.push(word)
      } else {
        badFormat.push(word)
      }
    })

    return [goodFormat, badFormat]
  }

  function countHours(year, holidays) {
    function getDate (year, monthAndDay) {
      const [month, day] = monthAndDay.split('/')
      const fixedMonth = Number(month) - 1
      return new Date(year, fixedMonth, day)
    } 
    function isAWeekDay (date) {
      const SUNDAY = 0
      const SATURDAY = 6
      const currentDate = date.getDay()
      return currentDate > SUNDAY && currentDate < SATURDAY
    }
  
    let extraHours = 0
  
    holidays.forEach(holiday => {
      const date = getDate(year, holiday)
      if (isAWeekDay(date)) extraHours += 2
    })
  
    return extraHours
  }

  const handleReset = () => {
    daysRef.current.value = ''
    setExtraHours(null)
    setSkippedWords([])
    setYear('')
  }

  return (
    <article>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Type the year you want to proccess... (format: YYYY)'
          defaultValue={year}
          onChange={handleChangeYear}
        />
        <input
          placeholder='Type the days you want to proccess... (format: MM/DD)'
          defaultValue={'01/06 04/01 12/25'}
          ref={daysRef}
        />
        <div className='grid' style={{ gridTemplateColumns: '1fr 1fr' }}>
          <button disabled={!validYear}> Calculate extra hours! </button>
          <button onClick={handleReset}> Reset </button>
        </div>
      </form>
      
      <div>
        <p>Extra hours: {extraHours ?? '(there isn\'t extra hours calculated yet)'}</p>
        {skippedWords.length ? (
          <div>
            <p>Skipped words (wrong format):</p>
            <ul>
              {skippedWords.map((word, index) => <li key={index}>{word}</li>)}
            </ul>
          </div>
        ) : null}
      </div>
    </article>
  )
}
