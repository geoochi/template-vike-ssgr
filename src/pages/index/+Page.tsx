import { MoonIcon, SunIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import useTheme from '@/hooks/use-theme'
import { useState, useEffect } from 'react'

const Home: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch('/api/get-count')
      .then(res => res.json())
      .then(data => setCount(data.count))
  }, [])

  return (
    <>
      <p className='text-3xl'>template - vike@0.4.224 - react@19 - shadcn@canary - tailwindcss@4 - SSR/SSG</p>
      <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} variant='ghost' size='icon'>
        {theme === 'light' ? <SunIcon /> : <MoonIcon />}
      </Button>
      <a href='/about'>→ About Page</a>
      <Button
        onClick={() => {
          fetch('/api/count-plus')
          setCount(count + 1)
        }}
      >
        count++
      </Button>
      <p>server count: {count}</p>
    </>
  )
}

export default Home
