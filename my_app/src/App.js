import React from 'react';
import { Route , Routes} from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
	return (
	<Routes>
	<Route path="/login" element={<Login />} />
	<Route path="/register" element={<Signup />} />
</Routes>
	);
}

export default App;
