// import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, extendTheme } from 'native-base'
import { Login } from './src/pages/Login'

export default function App() {
	const theme = extendTheme({
		colors: {
			// Add new color
			projectBlue: {
				100: '#0969da',
				200: '#0754AD',
			},
		}
	})

	return (
		<NativeBaseProvider theme={theme}>
			<Login />
		</NativeBaseProvider>
	);
}
