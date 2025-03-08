import { usePageContext } from 'vike-react/usePageContext'

export default function Page() {
  const { is404 } = usePageContext()
  if (is404) {
    return <h1 className='text-4xl'>404 Page Not Found</h1>
  }
  return <h1 className='text-4xl'>500 Internal Server Error</h1>
}
