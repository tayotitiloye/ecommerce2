// "use client";
// import React from "react";
// import { Provider } from "react-redux";
// import { store } from "src/store/store";
// //import { store } from "store/store";

// interface Props {
//   children: React.ReactNode;
// }
// const Providers = (props: Props) => {
//   return (
//     <Provider store={store}>{props.children}</Provider>
//   );
// };

//export default Providers;

"use client"
import React from 'react'
import { Provider } from 'react-redux'
import { store } from 'src/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'


interface Props{
    children: React.ReactNode
}

const Providers = (props: Props) => {
   let persistor = persistStore(store)
    
  return (
    <Provider store={store} >
      <PersistGate persistor={persistor}>
        

          {props.children}
       </PersistGate>
    </Provider>
  )
}

export default Providers


