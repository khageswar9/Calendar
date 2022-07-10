function isSelected(day , value){
    return value.isSame(day,"day")
}
function Today(day){
    return day.isSame(new Date(),"day")
}
function Before(day){
    return day.isBefore(new Date() , "day");
}
export default function dayStyle(day,value){
    if(Before(day)) return "before";
    if(isSelected(day,value)) return "selected";
    if(Today(day)) return "today";
    return ""

}