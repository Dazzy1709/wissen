// Variabeln für das Quiz
const rundenAnzeige = document.getElementById("Rundenanzahl");
const punkteAnzeige = document.getElementById("Punkteanzahl");
let rundenAnzahl = 0;
let punkteAnzahl = 0;

// Alle Fragen zusammenfassen
const einfacheFragen = [
    { frage: "Welches Metall wird traditionell für die Herstellung von Münzen verwendet?", antworten: ["Gold", "Silber", "Kupfer", "Eisen"], richtig: "Kupfer" },
    { frage: "Welche Währung wird in Großbritannien verwendet?", antworten: ["Euro", "Pfund", "Dollar", "Yen"], richtig: "Pfund" },
    { frage: "Wie nennt man eine Person, die Geld von einer Bank ausleiht?", antworten: ["Kreditgeber", "Kreditnehmer", "Sparer", "Bankier"], richtig: "Kreditnehmer" },
    { frage: "Welche Farbe haben in den USA die 1-Dollar-Noten?", antworten: ["Grün", "Blau", "Rot", "Gelb"], richtig: "Grün" },
    { frage: "Welche Münze wird oft als Glückssymbol betrachtet, wenn sie mit dem Rücken nach oben liegt?", antworten: ["Penny", "Nickel", "Dime", "Quarter"], richtig: "Penny" },
    { frage: "Welche Währung wird in Russland verwendet?", antworten: ["Rubel", "Euro", "Pfund", "Yen"], richtig: "Rubel" },
    { frage: "Welche Währung wird in Indien verwendet?", antworten: ["Euro", "Yen", "Dollar", "Rupie"], richtig: "Rupie" }
];

const schwereFragen = [
    { frage: "Was ist der offizielle Name der Währung in Brasilien?", antworten: ["Peso", "Real", "Escudo", "Sol"], richtig: "Real" },
    { frage: "Wer war der erste Präsident der Europäischen Zentralbank (EZB)?", antworten: ["Mario Draghi", "Jean-Claude Trichet", "Wim Duisenberg", "Christine Lagarde"], richtig: "Wim Duisenberg" },
    { frage: "Welche Währung wird in der Türkei verwendet?", antworten: ["Dinar", "Tenge", "Lira", "Rubel"], richtig: "Lira" },
    { frage: "Wer ist auf der ALTEN 100-Schweizer-Franken-Banknote abgebildet?", antworten: ["Albert Einstein", "William Tell", "Carl Jung", "Paracelsus"], richtig: "Carl Jung" },
    { frage: "Welches Land hat den größten Anteil am Goldreserven weltweit?", antworten: ["USA", "Deutschland", "China", "Russland"], richtig: "USA" },
    { frage: "Welche Währung wird in Südafrika verwendet?", antworten: ["Rand", "Dollar", "Euro", "Yen"], richtig: "Rand" },
    { frage: "Welche Währung wird in Australien verwendet?", antworten: ["Rand", "Dollar", "Rupie", "Pfund"], richtig: "Dollar" }
];

const allQuestions = [...einfacheFragen, ...schwereFragen];

const quizContainer = document.getElementById("Quiz1-main");
const questionDisplay = document.getElementById("Frage");
const answersDisplay = document.querySelectorAll(".antwort p");
const currentRoundDisplay = document.getElementById("Rundenanzahl");
const scoreDisplay = document.getElementById("Punkteanzahl");
const antwortContainer = document.querySelector(".antwort-container")

function displayQuestion(questionObj) {
    questionDisplay.textContent = questionObj.frage;

    answersDisplay.forEach((answer, index) => {
        answer.textContent = questionObj.antworten[index];
        answer.parentElement.removeEventListener("click", answerHandler);
        answer.parentElement.addEventListener("click", answerHandler);
    });
}

function answerHandler(event) {
    const selectedAnswer = event.target.textContent;
    const questionObj = allQuestions[rundenAnzahl];

    if (selectedAnswer === questionObj.richtig) {
        quizContainer.style.backgroundColor = "green";
        punkteAnzahl++;
    } else {
        quizContainer.style.backgroundColor = "red";
    }

    punkteAnzeige.textContent = punkteAnzahl;
    setTimeout(nextQuestion, 2000);
}

function nextQuestion() {
    rundenAnzahl++;
    currentRoundDisplay.textContent = "Runde: " + rundenAnzahl;

    if (rundenAnzahl === 6) {
        quizContainer.innerHTML = "<h2>Quiz beendet!</h2>";
        return;
    }

    quizContainer.style.backgroundColor = "white";
    displayQuestion(allQuestions[rundenAnzahl]);
}

displayQuestion(allQuestions[rundenAnzahl]);
