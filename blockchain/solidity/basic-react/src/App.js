import { useState, useEffect } from "react";
import './App.css';
import web3 from './web3';
import lottery from './lottery';

function App() {
  web3.eth.getAccounts().then(console.log);

  const [manager, setManager] = useState('');
  const [players, setPlayers] = useState([]);
  const [balance, setBalance] = useState('');
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');

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

  const onEnter = async (event) => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();

    setMessage('Waiting on transaction success...');

    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(value, 'ether')
    });

    setMessage('You have been entered!');
  };

  const onClick = async () => {
    const accounts = await web3.eth.getAccounts();

    setMessage('Waiting on transaction success...');

    await lottery.methods.pickWinner().send({
      from: accounts[0]

    });

    setMessage('A winner has bean picked!');
  }

  return (
    <div>
      <h2>Lottery Contract</h2>
      <p>
        This contract is managed by {manager}.
        There are currently {players.length} people entered,
        competing to win {web3.utils.fromWei(balance, 'ether')} ether!
      </p>

      <hr />

      <form onSubmit={onEnter}>
        <h4>Want to try your lock?</h4>
        <div>
          <label>Amount of ether to enter</label>
          <input
            value={value}
            onChange={event => setValue(event.target.value)}
          />
        </div>
        <button>Enter</button>
      </form>

      <hr />

      <h4>Ready to pick a winner?</h4>
      <button onClick={onClick}>Pick a winner!</button>
      <hr />

      <h1>{message}</h1>
    </div>



  );
}

export default App;
