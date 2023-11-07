import { store } from '@/redux/store'
import React from 'react'
import { Provider } from 'react-redux'


const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <Provider store={store}>
            
        {children}
        </Provider>
        </div>
  )
}

export default Layout