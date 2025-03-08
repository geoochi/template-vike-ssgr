import logoUrl from '@/assets/logo.svg'
import '@/assets/style.css'
import Link from '@/components/Link'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        maxWidth: 900,
        margin: 'auto',
      }}
    >
      <Sidebar>
        <Logo />
        <Link href='/'>Welcome</Link>
        <Link href='/todo'>Todo</Link>
        {''}
      </Sidebar>
      <Content>{children}</Content>
    </div>
  )
}

const Sidebar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      id='sidebar'
      style={{
        padding: 20,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        lineHeight: '1.8em',
        borderRight: '2px solid #eee',
      }}
    >
      {children}
    </div>
  )
}

const Content: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div id='page-container'>
      <div
        id='page-content'
        style={{
          padding: 20,
          paddingBottom: 50,
          minHeight: '100vh',
        }}
      >
        {children}
      </div>
    </div>
  )
}

const Logo: React.FC = () => {
  return (
    <div
      style={{
        marginTop: 20,
        marginBottom: 10,
      }}
    >
      <a href='/'>
        <img src={logoUrl} height={64} width={64} alt='logo' />
      </a>
    </div>
  )
}

export default Layout
