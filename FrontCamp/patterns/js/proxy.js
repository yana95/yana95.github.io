/**
 * Created by Yana_Zaitsava on 1/8/2018.
 */
import getItems from './getItems';
import constants from './constants';

function ArticlesProxy() {
    var cache = {};

    return {
        getArticles: function(id) {
            if (!cache[id]) {
                return getItems(`${constants.ARTICLES}?sources=${id}&apiKey=${constants.API_KEY}`)
                    .then( data => {
                        cache[id] = data.articles;
                    });
            } else{
                return cache[id];
            }

        },
        getCount: function() {
            var count = 0;
            for (var article in cache) { count++; }
            return count;
        }
    };
};

export default ArticlesProxy;