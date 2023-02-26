import { ThemeProvider } from '@mui/material/styles';
import { custom_theme } from './theme/custom_theme.js';
import PageControlContextProvider from './hooks/PageControlContextProvider';
import FormikComponent from './components/FormikComponent/FormikComponent'

function App() {
  return (
    <ThemeProvider theme={custom_theme}>
      <PageControlContextProvider>
        <FormikComponent />
      </PageControlContextProvider>
  </ThemeProvider>
  );
}

export default App;
