
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
    <Navbar title="SherryTextUtils" aboutText="About"/>

    <div className="container my-3">
      <TextForm heading="Enter Your Text Here to Analyze"/>
    </div>
   
    </>
  );
}

export default App;
