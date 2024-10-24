import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import XSS from './components/content/xss_type/xss';
import Relative from './components/content/relative_type/relative';
import RCE from './components/content/rce_type/rce';
import Control from './components/content/control_type/control';
import AdminControl from './components/content/control_type/admin_control';
import Comment from './components/content/comment_type/comment';
import XML from './components/content/robots_type/xml';
import Robots from './components/content/robots_type/robots';
import Create from './components/content/user/create';
import Login from './components/content/user/login';
import SetAdmin from './components/content/user/set_admin';
import Info from './components/content/user/info';
import AdminFunction from './components/content/user/admin_function';

function App() {
  return (
    <div style={{ backgroundColor: '#282c44', height: '100vh' }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RCE/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/your-text' element={<Home/>}/>
          <Route path='/animals' element={<Home/>}/>
          <Route path='/control' element={<Home/>}/>
          <Route path='/admin-control' element={<Home/>}/>
          <Route path='/comment' element={<Home/>}/>
          <Route path='/dns' element={<RCE/>}/>
          <Route path='/data.xml' element={<Home/>}/>
          <Route path='/robots' element={<Home/>}/>
          <Route path='/create' element={<Home/>}/>
          <Route path='/login' element={<Home/>}/>
          <Route path='/set-admin' element={<Home/>}/>
          <Route path='/admin-function' element={<Home/>}/>
          <Route path='/info' element={<Home/>}/>
          <Route path='*' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
