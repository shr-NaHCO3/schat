module.exports = {
    vars: {},
    set: function(name, value){
        this.vars[name] = value
    },
    get: function(name){
        return this.vars[name]
    }
}