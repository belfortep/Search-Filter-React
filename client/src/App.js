import { useEffect, useState } from 'react';
import './App.css';
import Table from './Table';

import axios from 'axios'
function App() {

  const [query, setQuery] = useState('');


  const [data, setData] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`http://localhost:5000?q=${query}`)

      setData(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchUsers()    //solo hago esta funcion despues del tercer caracter, o con el 0 para que haga el primer fetch
  }, [query]);





  return (
    <div className='app'>
      <input type='text' placeholder='Search' className='search' onChange={(e) => { setQuery(e.target.value) }} />
      <Table data={data} />  {/* Envio como props la data ya filtrada*/}
    </div>
  );
}

export default App;
