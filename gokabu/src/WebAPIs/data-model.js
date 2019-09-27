const API = process.env.REACT_APP_GOKABU_API_KEY;

var request = (method, api, params, success, error) => {
    fetch(api)
        .then(res => res.json())
        .then(res => success(res))
        .catch(error => {console.log(error)})
}

var navModel = {
    // nearby-eats
    nearby_eats: (params, success, error) => {
        request('POST', API, params, success, error);
    }
};

export {navModel}
