// Code your solution here

function findMatching(array, string){
    return array.filter(function (name){
        return name.toUpperCase() === string.toUpperCase()})
    }

function fuzzyMatch(array, string){
    return array.filter(function (names){
        return names.substring(0,string.length).toUpperCase() === string.toUpperCase()})
}   

function matchName(array, string){
    return array.filter(function(obj){
        return obj.name.toUpperCase() === string.toUpperCase();
    })  
}