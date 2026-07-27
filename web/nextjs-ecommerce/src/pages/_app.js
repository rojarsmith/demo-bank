import App from "next/app";
import Head from "next/head";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";
import { ToastProvider } from "react-toast-notifications";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { fetchProducts } from "../redux/actions/productActions";
import products from "../data/products.json";
import "../assets/scss/styles.scss";
import Preloader from "../components/Preloader";

class MyApp extends App {
  constructor(props) {
    super(props);
    this.persistor = persistStore(props.reduxStore);
    //這是with-redux-store最後render傳進來的prop參數
    //透過下面這句，我們可以把products的資料放到redux store裡面，就可以讓所有component讀到
    props.reduxStore.dispatch(fetchProducts(products));
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <>
        <Head>
          <title>React Next JS 模板實作案例</title>
          <link rel="icon" href={process.env.PUBLIC_URL + "/favicon.ico"} />
        </Head>
        <ToastProvider placement="bottom-left">
          <Provider store={reduxStore}>
            <PersistGate loading={<Preloader />} persistor={this.persistor}>
              <Component {...pageProps} />
            </PersistGate>
          </Provider>
        </ToastProvider>
      </>
    );
  }
}

export default withReduxStore(MyApp);
