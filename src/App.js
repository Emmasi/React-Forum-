import {Routes,Route,Link} from 'react-router-dom'
import './App.css';
import Posts from './components/posts';
import PostsID from './components/postID';

function App() {
  return (
    <div className="App">
            <header className="App-header"><h1>Rubrik</h1></header>
 
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/post/:id" 
      //   loader={await = ()=>{
      //     if(!title){
      //       return fetch ('https://jsonplaceholder.typicode.com/posts',{
      //         method: "post",
      //         body: JSON.stringify({

      //       })
      //     }

      // }}
        element={<PostsID />} />
      </Routes>
      <footer className='App-footer'></footer>


      
    </div>
  );
}

export default App;
