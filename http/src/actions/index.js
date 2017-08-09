import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const POST_FRIENDS = 'POST_FRIENDS';

export const getFriends = () => {
    // Add the code for this action
     const promise = axios.get('http://localhost:5000/friends');
     return {
        type: GET_FRIENDS,
        payload: promise
     };
    
}

export const postFriends = (name, age, email) => {
    const promise = axios.post('http://localhost:5000/new-friend', {
        name,
        age,
        email
    });
    return {
        type: POST_FRIENDS,
        payload: promise
    }
}

