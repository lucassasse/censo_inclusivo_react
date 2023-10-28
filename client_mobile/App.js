// import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, extendTheme } from 'native-base'
import { Login } from './src/pages/Login'

export default function App() {
	const theme = extendTheme({
		colors: {
			// Add new color
			projectBlue: {
				100: "#4AC7F5",
				200: "#203054",
				300: '#0969da',
				400: '#0754AD',
			},
		}
	})

	return (
		<NativeBaseProvider theme={theme}>
			<Login />
		</NativeBaseProvider>
	);
}
