import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { LanguageProvider } from '../context/LanguageContext';
import Layout from '../components/Layout';
import store from '../store';
import '../index.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <LanguageProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LanguageProvider>
    </Provider>
  );
};

export default App;
