/**
 * Created by Yana_Zaitsava on 1/8/2018.
 */
let Iterator = function(items) {
    this.index = 0;
    this.items = items;
};

Iterator.prototype = {
    first: function() {
        this.reset();
        return this.next();
    },
    next: function() {
        return this.items[this.index++];
    },
    hasNext: function() {
        return this.index <= this.items.length;
    },
    reset: function() {
        this.index = 0;
    },
    each: function(callback) {
        for (let item = this.first(); this.hasNext(); item = this.next()) {
            callback(item);
        }
    }
};

export default Iterator;