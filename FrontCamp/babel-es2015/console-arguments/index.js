module.exports = function ({ types: t }) {
    var params = [];
    return  {
        visitor: {
            CallExpression(path) {
                if(path.node.arguments){
                    path.node.arguments.forEach(function(item){
                        if(item.value){
                            console.log(item.value);
                        }
                    });
                }
            }
        }
    };
}