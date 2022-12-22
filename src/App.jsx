import { useState } from 'react'
import { First } from './components/views/First'
import { Second } from './components/views/Second'

const CHALLENGES = {
  1: <First />,
  2: <Second />
}

export const App = () => {
  const [currentIndexChallenge, setCurrentIndexChallenge] = useState(1)
  const handlePrev = () => {
    setCurrentIndexChallenge(curr => curr - 1)
  }
  const handleNext = () => {
    setCurrentIndexChallenge(curr => curr + 1)
  }
  return (
    <main>
      <section>
        <button disabled={currentIndexChallenge === 1} onClick={handlePrev}>
          Prev challenge
        </button>
        <button disabled={currentIndexChallenge === Object.keys(CHALLENGES).length} onClick={handleNext}>
          Next challenge
        </button>
        <span> Challenge #{currentIndexChallenge}</span>
      </section>

      <section>
        {CHALLENGES[currentIndexChallenge]}
      </section>
    </main>
  )
}
