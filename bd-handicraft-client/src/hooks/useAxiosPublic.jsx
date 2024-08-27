import axios from 'axios';

const useAxiosPublic = () => {
    return axios.create({
        baseURL: "http://localhost:5000", // Change to your backend URL
    });
};

export default useAxiosPublic;
