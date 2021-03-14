//function to convert from miliseconds to format MM:SS

function convertToMMSS(miliseconds){
    let auxMinutes = miliseconds / 60000;
    let seconds = Math.round((auxMinutes % 1) * 60);
    let minutes = parseInt(auxMinutes / 1);
    return `${minutes}:${seconds}`;
}

export default convertToMMSS;