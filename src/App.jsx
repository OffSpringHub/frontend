import './stylesheet/Main.scss'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import TestTemplate from './pages/TestTemplate'
import LeftBar from './components/leftBar';
import AddTest from './pages/AddTest';
import QuestionManager from './pages/QuestionManager';
import AddQuestion from './pages/AddQuestion';


function App() {
  return (
        <BrowserRouter>
          <div className="app">
            <LeftBar />
            <div className="content">
                <Routes>
                  <Route path='/' element={<TestTemplate />}/>
                  <Route path='/addTest' element={<AddTest />}/>
                  <Route path='/question' element={<QuestionManager />} />
                  <Route path='/addQuestion' element={<QuestionManager />} />
                  <Route path='/addQuestionToTest' element={<AddQuestion />} />
                </Routes>
            </div>
          </div>
        </BrowserRouter>
  );
}

export default App;
