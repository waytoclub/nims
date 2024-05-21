import axios from "axios";


const url = "http://localhost:3000"
const saveMovie = async (data) => {
    try {
        let res = await axios({
            method: 'post',
            url: `${url}/movie/create-movie`,
            data: data
          });
      if (res.request.statusText === 'Created') {
        return {
          'state': true,
          'message': 'created'
        };
      } else {
        return {
          'state': false,
          'error': 'an error occured'
        };
      }
    } catch (err) {
      console.log("err",err)
      throw new Error(err?.response?.data?.error)
    }
}

const getMovie = async () => {
  try {
      let res = await axios({
          method: 'get',
          url: `${url}/movie/get-movies`
        });
    if (res.status === 200) {
      return res?.data;
    } else {
      return {
        'state': false,
        'message': res?.data?.message,
        'error': res?.data?.error
      };
    }
  } catch (err) {
    console.log("err",err)
    throw new Error(err?.response?.data?.error)
  }
}


const getMovieBySearch = async (search) => {
  try {
      let res = await axios({
          method: 'get',
          url: `${url}/movie/search-movies/${search}`
        });
    if (res.status === 200) {
      return res?.data;
    } else {
      return {
        'state': false,
        'message': res?.data?.message,
        'error': res?.data?.error
      };
    }
  } catch (err) {
    console.log("err",err)
    throw new Error(err?.response?.data?.error)
  }
}

  export {
    saveMovie,
    getMovie,
    getMovieBySearch
  }