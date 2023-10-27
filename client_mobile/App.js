// import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, extendTheme } from 'native-base'
import { Login } from './src/pages/Login'

export default function App() {
  const theme = extendTheme({
    colors: {
      // Add new color
      test: {
        400: "#000",
        800: "#203054"
      },
    }
  })

  return (
    <NativeBaseProvider theme={theme}>
      <Login />
    </NativeBaseProvider>
  );
}
