/**
 * Created by Yana_Zaitsava on 1/8/2018.
 */
const Observable = function () {
    let observers = [];
    this.sendMessage = function () {
        for( let i = 0; i< observers.length; i++){
            observers[i].notify();
        }
    };
    this.addObserver = function (observer) {
        observers.push(observer);
    }
};

const Observer = function (behavior) {
    this.notify = function () {
        behavior();
    }
};

export {Observable, Observer};