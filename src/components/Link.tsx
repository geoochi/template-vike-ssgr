import { usePageContext } from 'vike-react/usePageContext'

const Link: React.FC<{ href: string; children: string }> = ({ href, children }) => {
  const pageContext = usePageContext()
  const { urlPathname } = pageContext
  const isActive = href === '/' ? urlPathname === href : urlPathname.startsWith(href)
  return (
    <a href={href} className={isActive ? 'is-active' : undefined}>
      {children}
    </a>
  )
}

export default Link
