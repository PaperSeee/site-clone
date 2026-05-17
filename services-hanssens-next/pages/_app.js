import '../styles/globals.css'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    try {
      // append modern overrides stylesheet so it loads after theme CSS
      const id = 'modern-overrides-css'
      if (!document.getElementById(id)) {
        const l = document.createElement('link')
        l.rel = 'stylesheet'
        l.href = '/modern-overrides.css'
        l.id = id
        document.head.appendChild(l)
      }
      document.documentElement.classList.add('modern-overrides-applied')
      // append client script that modernizes DOM
      const sid = 'modern-scripts-js'
      if (!document.getElementById(sid)) {
        const s = document.createElement('script')
        s.src = '/modern-scripts.js'
        s.id = sid
        s.defer = true
        document.body.appendChild(s)
      }
    } catch (e) {
      // ignore in SSR
    }
  }, [])

  return <Component {...pageProps} />
}
