import React from 'react';
import { Route,Routes} from 'react-router-dom';
import Layout from './Component/Layout/Layout';
import Form from './Component/Sign_Add/Form'
import AllUsers from './Component/AllUsers/AllUsers';
import Friend from './Component/Friends/Friends';
import Home from './Component/Home/Home';




function App() {

  return (
    <div className="App">
      
      <Routes>
       <Route  exact path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route exact path='/friend' element={<Friend/>}/>
        <Route path='/friend/:friendId' element={<Friend/>}/>
        <Route path='/userList' element={<AllUsers/>}/>
        <Route path='/form' element={<Form/>}/>
       </Route>
       </Routes>
    </div>
  );
}

export default App;
