import { Route, BrowserRouter, Routes } from "react-router-dom";
import Homepage from './components/Home/Homepage';
import './App.css'
function App() {
  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <Routes>
            <Route exact path="/*" element={<Homepage/>}/>
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
