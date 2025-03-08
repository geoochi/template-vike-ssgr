import { useState, useEffect } from 'react'

const About: React.FC = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    fetch('/api/get-count')
      .then(res => res.json())
      .then(data => setCount(data.count))
  }, [])
  return (
    <>
      <p className='text-4xl'>About Page</p>
      <a href='/'>← Home Page</a>
      <p>server count: {count}</p>
    </>
  )
}

export default About
