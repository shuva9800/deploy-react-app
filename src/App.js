// import './App.css';
// import { BrowserRouter , Routes, Route} from 'react-router-dom';

// import Todo from './components/Todo'
// import Home from './components/Home';
// function App() {
  
  
//     return (
   
//    <BrowserRouter>
//     <Routes>
//       <Route exact path="/" component={Home} />
//       <Route path="/todo" component={Todo} />
//     </Routes>
//    </BrowserRouter>
//   );
// }

// export default App;










// // function App() {
// //   return (
// //     <div>
// //       <Navbar />
// //       <Middle />
// //       <Footer />
// //     </div>
// //   );
// // }

// // function Navbar() {
// //   return <h1>Navbar</h1>;
// // }

// // function Middle() {
// //   return <p>Main Content</p>;
// // }

// // function Footer() {
// //   return <footer>Footer</footer>;
// // }




import React from 'react';
// import Parentcomponent from './components/Parentcomponent';
// import MyComponent  from './components/MyComponent';
import Formcomponent from './components/Formcomponent'


function App() {
  return (
    <div>
      <h3>React App.js page</h3>
     <Formcomponent/>
    </div>
  );
}

export default App;
