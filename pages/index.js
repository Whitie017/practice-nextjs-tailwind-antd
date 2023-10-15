import { Button } from 'antd'
import App from './test'
import NavigationBar from './NavigationBar'
import Header from './Header'
import Page from './Page'


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
