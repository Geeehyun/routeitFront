import { jwtDecode } from 'jwt-decode'

function isTokenValid(token) {
    if (!token) return false
    try {
        const { exp } = jwtDecode(token);
        return exp * 1000 > Date.now();
    } catch(e) {
        console.error('[isTokenValid] error : ', e);
        return false
    }
};



export { isTokenValid };
