var arrEng = new Array();
var arrVIE = new Array();
// function addElements() {
//     let value = document.getElementById("addWord").value;
//     for (let i = 0; i < arrEng.length; i++) {
//         if (arrEng[i] == value || arrVIE[i] == value) {
//             alert("This word is already in Dictionary Database");
//             return;
//         }
//     }
//     var answer;
//     do {
//         answer = prompt("Is the word English or Vietnamese");
//         if(answer != "English" && answer != "Vietnamese"){
//             alert("Enter the language again");
//         }
//     }while(answer != "English" && answer != "Vietnamese");
//
//     if (answer == "Vietnamese") {
//         arrVIE.push(value);
//         let wordEngEquivalent = prompt("Enter English equivalent word ");
//         arrEng.push(wordEngEquivalent);
//     }
//     if (answer == "English") {
//         arrEng.push(value);
//         let wordVieEquivalent = prompt("Enter Vietnamese equivalent word");
//         arrVIE.push(wordVieEquivalent);
//     }
// }
function addElements() {
    let value = document.getElementById("addWord").value;
    for (let i = 0; i < arrEng.length; i++) {
        if (arrEng[i] == value || arrVIE[i] == value) {
            alert("This word is already in Dictionary Database");
            return;
        }
    }
    let rad = document.getElementsByName("radio");
    if(rad[0].checked){
        arrEng.push(value);
        let wordEngEquivalent = prompt("Enter Vietnamese equivalent word ");
        arrVIE.push(wordEngEquivalent);
    }
    if(rad[1].checked){
        arrVIE.push(value);
        let wordEngEquivalent = prompt("Enter English equivalent word ");
        arrEng.push(wordEngEquivalent);
    }
}

function search() {
    let searchedWord = document.getElementById("searchedWord").value;
    for (let i = 0; i < arrEng.length; i++) {
        if (arrEng[i] == searchedWord) {
            document.getElementById("show").innerHTML = arrEng[i] + " (English) : " + arrVIE[i] + "(Tiếng Việt)";
            break;
        }else if(arrVIE[i] == searchedWord){
            document.getElementById("show").innerHTML = arrVIE[i] + " (Tiếng Việt) : " + arrEng[i] + "(English)";
            break;
        }
        else{
            document.getElementById("show").innerHTML = "<b>" + searchedWord + "</b> is unknowned";
            break;
        }
    }
}