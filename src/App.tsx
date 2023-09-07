import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex
import './index.css'

import { RequestProvider } from './contexts/request-context';

import Wrapper from './components/Wrapper';

function App() {

  return (
    <RequestProvider>
      <Wrapper />
    </RequestProvider>
  )
}

export default App
