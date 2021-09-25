import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './store/reducer'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
)

// const Site_key: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
// const secret_key: '6LdAw40cAAAAADNOyfPuKIyqakd6ueZy_f4rbPCF'
ReactDOM.render(
  <Provider store={store}>
    <GoogleReCaptchaProvider reCaptchaKey=
    '6LdAw40cAAAAAIE5JvOGlWSY1gI1B0c9w7SZhjCF'
    >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </GoogleReCaptchaProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
