import { Redirect } from 'expo-router'

const App = () => {
  return (
    // <Redirect href={'/home'} />
    // <Redirect href={'/tabs/home'} />
    <Redirect href={'/drawer/user'} />
  )
}

export default App