import DefaultPageHead from '../src/components/default-page-head'
import Header from '../src/components/header'
import HomeScreen from '../src/screens/home-screen'

export default function Home() {
  return (
    <div>
      <DefaultPageHead />

      <Header />

      <HomeScreen />
    </div>
  )
}
