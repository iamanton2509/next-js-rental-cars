import AuthProvider from '@/components/providers/AuthProvider';
import {TypeComponentAuthFields} from '@/interfaces/page.interface';
import {Provider} from 'react-redux';
import type {AppProps} from 'next/app';
import store from '@/store/store';
import '@/firebase';
import '@/styles/globals.scss';

type TypeApp = AppProps & TypeComponentAuthFields;

export default function App({ Component, pageProps }: TypeApp) {
  return (
    <Provider store={store}>
      <AuthProvider Component={Component}>
        <Component {...pageProps} />
      </AuthProvider>
    </Provider>
  )
}
