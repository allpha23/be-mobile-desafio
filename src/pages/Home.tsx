import '../styles/pages/Home.css'
import Table from '../components/Table';
import SVGSearch from '../icons/SVGSearch';
import { useState } from 'react';

const Home = () => {
  const [search, setSearch] = useState('')

  return (
    <div className='search-section'>
      <div className='search'>
        <h4 className='title'>Funcionários</h4>
        <div className='search-input-container'>
          <input
            className='search-input'
            type="text"
            placeholder='Pesquisar'
            onChange={e => setSearch(e.target.value)}
            value={search}
          />
          <SVGSearch className='search-icon' />
        </div>
      </div>
      <Table search={search}/>
    </div>
  );
}

export default Home;
