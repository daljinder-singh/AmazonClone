
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

ReactDOM.render(
  <Provider store={store}>
    <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_Captcha_Site_key}>
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
