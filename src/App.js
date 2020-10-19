import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainLayout from './compoents/Layout'
import rootReducer from './reducer/rootReducer'
import MainScanScreen from './compoents/MainScanScreen'
import QRScan from './compoents/QRScan'
import EpisodContent from './compoents/EpisodContents'
import ShareModal from './compoents/ShareModal'
import EntryFirst from './compoents/front_entry/EntryFirst'
import MakingVideo from './compoents/front_entry/MakingVideo'
import Conclusion from './compoents/front_entry/Conclusion'

const store = createStore(rootReducer);
function App() {
  
  return (
    <Router>
      <Provider store={store}>
      <MainLayout>
        <Switch>
          <Route path='/' exact component={MainScanScreen}/>
          <Route path='/qrscane' component={QRScan}/>
          <Route path='/contents' component={EpisodContent}/>
          <Route path='/help' component='Help'/>
          <Route path='/entry' component={EntryFirst} />
          <Route path='/video' component={MakingVideo} />
          <Route path='/conclusion' component={Conclusion} />
        </Switch> 
        <ShareModal />
      </MainLayout>
      </Provider>
    </Router>
  );
}

export default App;
