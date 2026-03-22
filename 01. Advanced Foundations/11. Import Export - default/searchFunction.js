export default function getSpaceCraftArr(arr, keyword){
    return arr.filter(function(craft){
        return craft.description.toLowerCase().includes(keyword)
    })
}