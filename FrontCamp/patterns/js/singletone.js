/**
 * Created by Yana_Zaitsava on 1/8/2018.
 */
import proxy from './proxy';
const Singleton = (function () {
    let instance;
    function createInstance () {
        return new proxy();
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