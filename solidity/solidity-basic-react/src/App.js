import { useState, useEffect } from "react";
import './App.css';
import web3 from './web3';
import lottery from './lottery';

function App() {
  web3.eth.getAccounts().then(console.log);

  const [manager, setManager] = useState('');
  const [players, setPlayers] = useState([]);
  const [balance, setBalance] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      let manager = await lottery.methods.manager().call();
      let players = await lottery.methods.getPlayers().call();
      let balance = await web3.eth.getBalance(lottery.options.address);
      console.log();
      setManager(manager);
      setPlayers(players);
      setBalance(balance);
    }

    fetchData().catch(console.log);
  }, []);

  return (
    <div>
      <h2>Lottery Contract</h2>
      <p>This contract is managed by {manager}.</p>
      There are currently {players.length} people entered,
      competing to win {web3.utils.fromWei(balance, 'ether')} ether!
    </div>
  );
}

export default App;
