import { Button } from 'antd'
import App from './test'
import NavigationBar from '../components/NavigationBar'
import Header from '../components/Header'
import Page from '../components/Page'


export default function Home() {
  return (
    <html>

      <Header />
      <br></br>
      <NavigationBar />
      <br></br>
      <Page />

    </html>
  )
}
