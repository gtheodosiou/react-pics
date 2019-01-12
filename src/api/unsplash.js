import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 9246b76b3fdcfa857b16202d6900106de6844acafe55bf049d0a9b9955d12ad1'
    }
});
