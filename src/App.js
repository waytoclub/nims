import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { saveMovie, getMovie } from './service';
import ListMovie from './listmoview';

function App() {


    useEffect(() => {
    async function fetchMyAPI() {
      const movieData = await getMovie();
      setList(movieData) 
    }
    fetchMyAPI()
  }, [])

  const [error, setError] = useState(false);

  const [movie, setMovie] = useState({
    title: '',
    description: '',
    release: '',
    genre: ''
  })

  const [list, setList] = useState([])
  
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if(movie.title === '' || movie.description === '' || movie.release === '' || movie.genre === '') {
      setError(true);
    } else {
      saveMovie(movie)
      Object.keys(movie).forEach((v) => (movie[v] = ""));
      const movieData = await getMovie();
      setList(movieData)
    }
   
  }

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value })
  }

  return (
    <div className="App">
      <div className='container'> 
        <div className='row'>
           <span>{ error }</span>
           <div className='col-md-4'></div>
           <div className='col-md-4'>
             <form onSubmit={handleOnSubmit}>
                <div className='col-md-12'>
                  <span>Enter Moview Name</span><br />
                  <input type='text' name='title' id='title' onChange={(e) => handleChange(e)} required />
                </div>
                <br />
                <div className='col-md-12'>
                <span>Enter Moview Description</span><br />
                  <textarea name='description' id='description' onChange={(e) => handleChange(e)} cols={23} rows={5} required></textarea>
                </div>
                <br />
                <div className='col-md-12'>
                <span>Enter Moview Release Date</span><br />
                  <input type='date' name='release' id='release' onChange={(e) => handleChange(e)} required />
                </div>
                <br />
                <div className='col-md-12'>
                <span>Enter Moview genre</span><br />
                  <select name='genre' id='genre' onChange={(e) => handleChange(e)} required>
                    <option>Select Genre</option>
                    <option value="Action">Action</option>
                    <option value="Action">Comedy</option>
                    <option value="Action">Drama</option>
                  </select>
                </div>
                <br />
                <div className='col-md-12'>
                    <Button type="submit" className="primary">Save</Button>
                </div>
             </form>
           </div>
           <div className='col-md-4'></div>
        </div>
        <br /><br />
        <ListMovie list={list} />
      </div>
    </div>
  );
}

export default App;
