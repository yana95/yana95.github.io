/**
 * Created by Yana_Zaitsava on 1/8/2018.
 */
import redux from './redux';
const Singleton = (function () {
    let instance;
    function createInstance () {
        return redux;
    }
    return {
        getInstance: function () {
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    }
})();

export default Singleton;