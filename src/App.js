import Header from './Components/Header'
import Content from './Components/Content'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

//NOTES:-
//1. By default any value without expression{} is String.
//2. With expression {}, we need to specify expression for the data,
//  For eg:- {"Hello"} is treated as string while, {11} is treated as number.
//           <p>1, 2, 3</p>, O/P = 1, 2, 3  String
//           <p>{[1, 2, 3]}</p>, O/P = 123  Array
//3. Object, Boolean type is not valid, and cannot be rendered.
//4. <p>{name}</p> return name varible.
