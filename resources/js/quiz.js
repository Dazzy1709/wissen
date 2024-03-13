
//Variabeln für das Quiz
const rundenAnzeige = document.getElementById("Rundenanzahl").innerText;
const punkteAnzeige = document.getElementById("Punkteanzahl").innerText;
let rundenAnzahl = 0; 
let punkteAnzahl = 0;


//Einfach Fragen
const einfacheFrage1 = {
  frage: "Welches Metall wird traditionell für die Herstellung von Münzen verwendet?",
  antworten: ["Gold", "Silber", "Kupfer", "Eisen"],
  richtig: "Kupfer"
};

const einfacheFrage2 = {
  frage: "Welche Währung wird in Großbritannien verwendet?",
  antworten: ["Euro", "Pfund", "Dollar", "Yen"],
  richtig: "Pfund"
};

const einfacheFrage3 = {
  frage: "Wie nennt man eine Person, die Geld von einer Bank ausleiht?",
  antworten: ["Kreditgeber", "Kreditnehmer", "Sparer", "Bankier"],
  richtig: "Kreditnehmer"
};

const einfacheFrage4 = {
  frage: "Welche Farbe haben in den USA die 1-Dollar-Noten?",
  antworten: ["Grün", "Blau", "Rot", "Gelb"],
  richtig: "Grün"
};

const einfacheFrage5 = {
  frage: "Welche Münze wird oft als Glückssymbol betrachtet, wenn sie mit dem Rücken nach oben liegt?",
  antworten: ["Penny", "Nickel", "Dime", "Quarter"],
  richtig: "Penny"
};

const einfacheFrage6 = {
  frage: "Welche Währung wird in Russland verwendet?",
  antworten: ["Rubel", "Euro", "Pfund", "Yen"],
  richtig: "Rubel"
};

const einfacheFrage7 = {
  frage: "Welche Währung wird in Indien verwendet?",
  antworten: ["Euro", "Yen", "Dollar", "Rupie"],
  richtig: "Rupie"
};



//Schwere Fragen
const schwereFrage1 = {
  frage: "Was ist der offizielle Name der Währung in Brasilien?",
  antworten: ["Peso", "Real", "Escudo", "Sol"],
  richtig: "Real"
};

const schwereFrage2 = {
  frage: "Wer war der erste Präsident der Europäischen Zentralbank (EZB)?",
  antworten: ["Mario Draghi", "Jean-Claude Trichet", "Wim Duisenberg", "Christine Lagarde"],
  richtig: "Wim Duisenberg"
};

const schwereFrage3 = {
  frage: " Welche Währung wird in der Türkei verwendet?",
  antworten: ["Dinar", "Tenge", "Lira", "Rubel"],
  richtig: "Lira"
};

const schwereFrage4 = {
  frage: "Wer ist auf der ALTEN 100-Schweizer-Franken-Banknote abgebildet?",
  antworten: ["Albert Einstein", "William Tell", "Carl Jung", "Paracelsus"],
  richtig: "Carl Jung"
};

const schwereFrage5 = {
  frage: "Welches Land hat den größten Anteil am Goldreserven weltweit?",
  antworten: ["USA", "Deutschland", "China", "Russland"],
  richtig: "USA"
};

const schwereFrage6 = {
  frage: "Welche Währung wird in Südafrika verwendet?",
  antworten: ["Rand", "Dollar", "Euro", "Yen"],
  richtig: "Rand"
};

const schwereFrage7 = {
  frage: "Welche Währung wird in Australien verwendet?",
  antworten: ["Rand", "Dollar", "Rupie", "Pfund"],
  richtig: "Dollar"
};


//Alle fragen zusammegfasst
const einfacheFragen = [einfacheFrage1, einfacheFrage2, einfacheFrage3, einfacheFrage4, einfacheFrage5, einfacheFrage6, einfacheFrage7];

const schwereFragen = [schwereFrage1, schwereFrage2, schwereFrage3, schwereFrage4,schwereFrage5,schwereFrage6,schwereFrage7];


//Fragen anzeigen
document.getElementById("Frage").innerText = einfacheFrage1.frage;
document.getElementById("Antwort1").innerText = einfacheFrage1.antworten[0];
document.getElementById("Antwort2").innerText = einfacheFrage1.antworten[1];
document.getElementById("Antwort3").innerText = einfacheFrage1.antworten[2];
document.getElementById("Antwort4").innerText = einfacheFrage1.antworten[3];





