import Profile from './Profile/profile';
import './App.css';

function App() {
  const handleName = e => {
    e.preventDefault();
    alert(" Hi Oueslati Ahmed");
  };

  return (
    <div className="App" style={{backgroundColor:"ButtonHighlight",padding:20,textAlign:"center"}}>
      <Profile hnf={handleName} name="Oueslati Ahmed" bio="I am a Front Office & Back Office Administrator " profession="Bank-IT">/Ahmed.jpg</Profile>
    </div>
  );
}

export default App;