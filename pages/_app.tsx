import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Reset } from 'styled-reset'
import Header from '../Component/Header'
import { RecoilRoot } from 'recoil'
import Footer from '../Component/Footer'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <div className="container">
      <RecoilRoot>
        <Reset />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </RecoilRoot>
    </div>
  )
}
