import { Route, BrowserRouter, Routes } from "react-router-dom";
import Homepage from './components/Home/Homepage';

function App() {
  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <Routes>
            <Route exact path="/*" element={<Homepage/>}/>
          </Routes>
          {/* <Route path="cv" element={<Content/>} />
          <Route path="about" element={<Content />} />
          <Route path="project" element={<Content />} />
          <Route path="contact" element={<Content />} /> */}
        </BrowserRouter>
      </main>
      {/* <Homepage/> */}
    </div>
  );
}

export default App;
