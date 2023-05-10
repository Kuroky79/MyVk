import React from 'react'
import ReactDOM from 'react-dom'
import Routess from './components/routes/Routess'
import './index.css'

import * as firebase from 'firebase/app'
import { AuthProvider } from './components/providers/AuthProvider'


firebase.initializeApp({
    apiKey: "AIzaSyDNsP6zcmUgUAqMQ1CqK6wsWLtgXma9Sak",
    authDomain: "vk-copyyy.firebaseapp.com",
    projectId: "vk-copyyy",
    storageBucket: "vk-copyyy.appspot.com",
    messagingSenderId: "928304341943",
    appId: "1:928304341943:web:35cd55610260ff16777e32"
})

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <Routess />
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
