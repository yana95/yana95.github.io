let Observable = function () {
    let observers = [];
    this.sendMessage = function ( percent ) {
        for(let i=0; i < observers.length; i++ ){
            observers[i].notify(percent);
        }
    };
    this.addObserver = function (observer) {
        observers.push(observer)
    };
};

let Observer = function (behavior) {
    this.notify = function (msg) {
        behavior(msg);
    }
};
