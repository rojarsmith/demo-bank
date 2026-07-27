import { initializeStore } from "../redux/store";
import React from "react";

const isServer = typeof window === "undefined";
const __NEXT_REDUX_STORE__ = "__NEXT_REDUX_STORE__";

///////////////////////////////////////////////////////

function getOrCreateStore(initialState) {
  //三種狀況
  // Always make a new store if server, otherwise state is shared between requests

  //第一種狀況就是server端運作，一定是重做一個store，這樣才可以避免每個人會拿到一樣的state
  if (isServer) {
    return initializeStore(initialState);
  }

  // Create store if unavailable on the client and set it on the window object
  // 第二種狀況，就是brower端運作，那就把store做出來，放到window全域裡面，然後回傳
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }

  //第三種情況，如果已經有store就重用
  return window[__NEXT_REDUX_STORE__];
}

////////////////////////////////////////////////////////

export default (App) => {
  return class AppWithRedux extends React.Component {
   
    ///////////////////////////////////////////////////////////////////
    // For the initial page load, 
    // getInitialProps will run on the server only. 
    // getInitialProps will then run on the client 
    // when navigating to a different route via the next/link component or by using next/router.
    
    static async getInitialProps(appContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      
      const reduxStore = getOrCreateStore();

      // // Provide the store to getInitialProps of pages
      // appContext.ctx.reduxStore = reduxStore;
      //console.log(appContext)


      let appProps = {};
      if (typeof App.getInitialProps === "function") {
        appProps = await App.getInitialProps(appContext);
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState(),
      };
    }
    
    /////////////////////////////////////////////////////////////////
    

    constructor(props) {
      super(props);
      //下面這個是state的應用
      //getInitialProps可以把初始資料帶進來
      //props.initialReduxState就是它帶進來的
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return <App {...this.props} reduxStore={this.reduxStore} />;
    }
  };
};
