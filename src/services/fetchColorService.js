import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = (set) => {
    axiosWithAuth().get('colors')
        .then(res => set(res.data))
        .catch(err => console.log(err))
}

export default fetchColorService;