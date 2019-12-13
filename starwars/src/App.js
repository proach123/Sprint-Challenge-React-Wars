import React, {useState,useEffect} from 'react';
import axios from 'axios';
import PeopleCard from './components/peopleCard'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {
const [peopleArrayData,setPeopleArray] = useState([])

  useEffect(() => {
    const fetchData = () =>{
    axios.get("https://swapi.co/api/people/" )
      .then(res => ( setPeopleArray(res.data.results)))
      .catch(err => console.log(err, 'axios call failed'));
    }
  

    fetchData()
  }, []);

  if (peopleArrayData === []) return <h3>Loading...</h3>;

console.log(peopleArrayData)

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      
        <div className='cards'>{
          peopleArrayData.map((elem)=>{
            return <PeopleCard key={elem.name} name={elem.name} birthyear={elem.birth_year} />
          })
            }
        </div>
    </div>
  );
}

export default App;
