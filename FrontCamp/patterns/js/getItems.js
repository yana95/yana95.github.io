/**
 * Created by Yana_Zaitsava on 11/26/2017.
 */
 import 'whatwg-fetch';

function Proxy() {
    var geocoder = new GeoCoder();
    var geocache = {};

    return {
        getLatLng: function(address) {
            if (!geocache[address]) {
                geocache[address] = geocoder.getLatLng(address);
            }
            log.add(address + ": " + geocache[address]);
            return geocache[address];
        },
        getCount: function() {
            var count = 0;
            for (var code in geocache) { count++; }
            return count;
        }
    };
};

const getItems = (url) => {
    const promise = fetch(url);    //Using ES6 fetch
    return promise.then((res) => res.json()); //Using ES6 promise
}

export default getItems;

