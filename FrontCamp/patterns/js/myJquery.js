let $ = (function (selector) {
    var jquery = {};
    var elements = document.querySelectorAll(selector);
    jquery.addClass = function (newClass) {
        for(let i=0; i < elements.length; i++){
            let classes = newClass.split(" ");
            for( let j=0; j < classes.length; j++){
                elements[i].classList.add(classes[j]);
            }
        }
    }

    return jquery;
});

export default $;