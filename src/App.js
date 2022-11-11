import { useEffect, useState } from 'react';
import { intervalToDuration, } from 'date-fns'
import './App.css';

function App() {
  const date = new Date()
  date.setDate(13)
  date.setMonth(12)
  date.setFullYear(2021)
  date.setHours(9)
  date.setMinutes(0)
  date.setSeconds(0)

  const hiringDate = date.valueOf()
  const [text, setText] = useState('')

  const calculateDate = ({ years, months, days, hours, minutes, seconds }) => {
    let arr = []
    let string = ''


    const plural = (numero, singular, plural) => numero > 1 ? `${numero} ${plural} ` : '1 ' + singular + ' '

    if (years) {
      arr.push(plural(years, 'ano', 'anos'))
    }

    if (months) {
      arr.push(plural(months, 'mês', 'meses'))
    }

    if (days) {
      arr.push(plural(days, 'dia', 'dias'))
    }

    if (hours) {
      arr.push(plural(hours, 'hora', 'horas'))
    }

    if (minutes) {
      arr.push(plural(minutes, 'minuto', 'minutos'))
    }

    if (seconds) {
      arr.push(plural(seconds, 'segundo', 'segundos'))
    }

    for (let i = 0; i < arr.length; i++) {
      if (i + 1 >= arr.length) {
        string += `e ${arr[i]}`
        continue
      }

      string += arr[i]
    }


    return string
  }


  useEffect(() => {
    setInterval(() => {
      const interval = intervalToDuration({ start: hiringDate, end: Date.now() })
      interval.years -= 1
      setText(calculateDate(interval))
    }, 1000)

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h2>O Kevin foi demitido hoje?</h2>
        <h1 style={{ color: 'red' }}>NÃO</h1>

        <h4 style={{ marginBottom: '0' }}>O Kevin não é demitido há</h4>
        <h5>{text}</h5>
      </header>
    </div>
  );
}

export default App;
