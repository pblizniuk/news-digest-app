import {QueryClient, QueryClientProvider} from 'react-query'
import './App.css'
import { Main } from './pages'

// Initialze the client
const queryClient = new QueryClient();

function App() {
  return (
		<QueryClientProvider client={queryClient}>
			<Main />
		</QueryClientProvider>
	);

  // return (
  //   <Main />
  // )
}

export default App
