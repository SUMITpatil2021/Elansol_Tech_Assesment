import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';
import StudentTable from './components/Student';
import MyRegisterForm from './components/RegMongo';
import { Route, Router, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<LoginForm />}/>
          <Route path="/dashboard" element={<StudentTable />} />
          <Route path="/signup" element={<MyRegisterForm/>}/>
          </Routes> 
    </div>
  );
}

export default App;
