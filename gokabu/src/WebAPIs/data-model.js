const API = 'http://eats-user-api-dev.kabueats.ca/api/stores/nearby?geoHash=49.1358909,-123.10220849999999';

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
