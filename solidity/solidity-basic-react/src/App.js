import { useState, useEffect } from "react";
import './App.css';
import web3 from './web3';
import lottery from './lottery';

function App() {
  web3.eth.getAccounts().then(console.log);

  const [manager, setManager] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      let manager = await lottery.methods.manager().call();
      setManager(manager);
    }

    fetchData().catch(console.log);
  }, []);

  return (
    <div>
      <h2>Lottery Contract</h2>
      <p>This contract is managed by {manager}</p>
    </div>
  );
}

export default App;
