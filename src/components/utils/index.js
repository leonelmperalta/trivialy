export function shuffleArray(array) {
    const a = array;
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

export function convertToMMSS(miliseconds){
    let auxMinutes = miliseconds / 60000;
    let seconds = Math.round((auxMinutes % 1) * 60);
    let minutes = parseInt(auxMinutes / 1);
    return `${minutes}:${seconds}`;
}
