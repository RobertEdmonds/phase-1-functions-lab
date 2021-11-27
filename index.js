// Code your solution in this file!
function distanceFromHqInBlocks(baseStart){
    if (baseStart > 42){
        return baseStart - 42
    }else {
        return 42 - baseStart
    }
}
function distanceFromHqInFeet(feetStart){
    if (feetStart > 42){
        return (feetStart - 42)*264
    }else {
        return (42 - feetStart)*264
    }
}
function distanceTravelledInFeet(start, end){
    if (start > end){
        return (start - end) * 264
    }else{
        return (end - start) * 264
    }
}
function calculatesFarePrice(on, off){
    if ((on - off) *264 <= 400){
        return 0
    }else if ((on - off)*264 > 2500){
        return 'cannot travel that far'
    }
    else if ((on - off) *264 > 400 && (on - off)*264 < 1999){
        return (((on - off) * 264)- 400)*.02
    }else if((on - off) *264 >= 2000 && (on - off)* 264 < 2499){
        return 25
    }

}
