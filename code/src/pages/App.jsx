import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import ManualFIR from '../components/ManualFIR';
import FIRPhotocopy from '../components/FIRPhotocopy';
import IPCLaws from '../components/IPCLaws';
import ContactUs from '../components/ContactUs';

const App = () => {
    console.log("entered in app ")
	return (
		<Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/manualFIR" element={<ManualFIR/>} />
            <Route path="/firPhotocopy" element={<FIRPhotocopy/>} />
            <Route path="/ipcLaws" element={<IPCLaws/>} />
            <Route path="/contactUs" element={<ContactUs/>} /> 
		</Routes>
	)
}

export default App
