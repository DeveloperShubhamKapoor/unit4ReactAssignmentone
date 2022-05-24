
import './App.css';
import { Button } from './components/Button';
import { Links } from './components/Links';
import { Logo } from './components/Logo';

function App() {

  let links = [{ser:"Services"},{ser:"Project"},{ser:"About"}]

  return (
    <div className="App">
      <div className="Logobakery">
        <Logo/>
        </div>
        <div className="Linksinfo">
              {links.map((info)=>(
                <div className='setInfoLink'>
                <Links {...info} />
                </div>
            ))} 
        </div>
        <Button/>
      
    </div>
  );
}

export default App;
