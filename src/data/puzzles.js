const puzzles = [
  {
    id: 1,
    title: "Il Primo Indizio",
    subtitle: "Ogni investigazione inizia con una domanda",
    type: "riddle",
    difficulty: 1,
    icon: "🕯️",
    description: "Un misterioso messaggio è stato lasciato sulla scena del crimine. Solo una mente acuta può decifrarne il significato.",
    question: "Ho città, ma non ho case.\nHo foreste, ma non ho alberi.\nHo acqua, ma non ho pesci.\n\nCosa sono?",
    answer: "mappa",
    acceptedAnswers: ["mappa", "la mappa", "una mappa", "cartina", "carta geografica"],
    hints: [
      "Pensa a qualcosa che rappresenta il mondo...",
      "Si trova spesso nelle mani di un esploratore...",
      "Puoi trovarmi piegata nella tasca di un viaggiatore."
    ],
    successMessage: "Eccellente! La mappa era nascosta tra le pagine di un vecchio atlante. Sopra c'era segnata una posizione...",
    lore: "Il professor Moriarty ha lasciato un messaggio cifrato nel suo studio. Inizia la caccia."
  },
  {
    id: 2,
    title: "Il Codice Cesareo",
    subtitle: "Un cifrario antico nasconde la verità",
    type: "cipher",
    difficulty: 2,
    icon: "🔐",
    description: "Un messaggio cifrato è stato trovato nella cassaforte del professore. Usa il Cifrario di Cesare per decodificarlo.",
    question: "Il messaggio cifrato recita:\n\n« Y H U L W D »\n\nOgni lettera è stata spostata avanti di 3 posizioni nell'alfabeto.\nDecifra la parola nascosta.",
    answer: "verita",
    acceptedAnswers: ["verita", "verità", "la verita", "la verità"],
    hints: [
      "Sposta ogni lettera indietro di 3 posizioni...",
      "Y diventa V, H diventa E...",
      "La parola ha 6 lettere e inizia per V."
    ],
    successMessage: "\"Verità\"... la parola chiave che apre il prossimo livello dell'indagine. Il professore sapeva che qualcuno l'avrebbe trovata.",
    lore: "Nella cassaforte c'era anche un foglio con numeri disposti in modo peculiare..."
  },
  {
    id: 3,
    title: "La Sequenza Spezzata",
    subtitle: "I numeri non mentono mai",
    type: "sequence",
    difficulty: 2,
    icon: "🔢",
    description: "Una serie di numeri è stata incisa sul muro della cella. Sembra seguire un pattern ben preciso.",
    question: "Completa la sequenza:\n\n1,  1,  2,  3,  5,  8,  13,  ?\n\nQuale numero viene dopo?",
    answer: "21",
    acceptedAnswers: ["21", "ventuno", "ventiuno"],
    hints: [
      "Ogni numero è legato ai due che lo precedono...",
      "1+1=2, 1+2=3, 2+3=5...",
      "È una famosa sequenza matematica scoperta da un italiano."
    ],
    successMessage: "21 — il numero di Fibonacci. Sul muro, accanto alla sequenza, c'era un altro enigma...",
    lore: "Le cifre portano a un vecchio magazzino sul porto. Qualcuno ha lasciato un messaggio criptico."
  },
  {
    id: 4,
    title: "Parole nell'Ombra",
    subtitle: "Le lettere danzano, il significato si nasconde",
    type: "anagram",
    difficulty: 3,
    icon: "🔤",
    description: "Le lettere di una parola chiave sono state mescolate. Riordinale per scoprire cosa cercava il colpevole.",
    question: "Riordina queste lettere per formare\nuna parola fondamentale per ogni detective:\n\n« Z  I  D  N  O  I  I »",
    answer: "indizio",
    acceptedAnswers: ["indizio", "un indizio", "l'indizio"],
    hints: [
      "La parola ha 7 lettere...",
      "Ogni investigatore ne cerca uno sulla scena del crimine...",
      "Inizia con la lettera I e finisce con la O."
    ],
    successMessage: "\"Indizio\" — proprio quello che abbiamo trovato. Ogni pezzo del puzzle ci avvicina alla soluzione.",
    lore: "L'indizio porta a una stanza segreta dove le pareti parlano..."
  },
  {
    id: 5,
    title: "L'Eco del Silenzio",
    subtitle: "Una voce senza corpo, un suono senza origine",
    type: "riddle",
    difficulty: 3,
    icon: "👁️",
    description: "Nella stanza segreta, un'iscrizione sul muro pone un antico indovinello.",
    question: "Parlo senza bocca,\nascolto senza orecchie.\nNon ho corpo,\nma prendo vita con il vento.\n\nCosa sono?",
    answer: "eco",
    acceptedAnswers: ["eco", "l'eco", "un eco", "un'eco"],
    hints: [
      "Mi senti in montagna...",
      "Ripeto tutto quello che dici...",
      "Sono solo 3 lettere."
    ],
    successMessage: "\"Eco\"... la risposta rimbomba nella stanza vuota. Le pareti rivelano un nuovo messaggio nascosto.",
    lore: "L'eco rivela una formula matematica incisa dietro un quadro."
  },
  {
    id: 6,
    title: "Il Mistero dei Numeri",
    subtitle: "Ogni numero nasconde un segreto",
    type: "math",
    difficulty: 4,
    icon: "🧮",
    description: "Dietro il quadro, una serie di equazioni misteriose. Solo chi comprende il pattern può proseguire.",
    question: "Osserva attentamente il pattern:\n\n2  →  6\n3  →  12\n4  →  20\n5  →  30\n6  →  ?\n\nQuale numero corrisponde a 6?",
    answer: "42",
    acceptedAnswers: ["42", "quarantadue"],
    hints: [
      "Ogni numero viene moltiplicato per qualcosa...",
      "2×3=6, 3×4=12, 4×5=20...",
      "Moltiplica il numero per il suo successivo: 6×7=?"
    ],
    successMessage: "42 — la risposta che cercavamo. Come direbbe qualcuno, è la risposta a tutto.",
    lore: "Il pattern numerico rivela le coordinate di un ultimo nascondiglio."
  },
  {
    id: 7,
    title: "Il Messaggio Nascosto",
    subtitle: "Le parole sono più di quello che sembrano",
    type: "hidden",
    difficulty: 4,
    icon: "📜",
    description: "Un testo apparentemente innocuo nasconde un messaggio segreto. Leggi tra le righe.",
    question: "Leggi con attenzione questa frase:\n\n«  Sotto  Ogni  Luce,  Una  Zona\n   Illuminata  Oscilla  Nascosta\n   Eternamente  »\n\nQuale parola si nasconde nel testo?",
    answer: "soluzione",
    acceptedAnswers: ["soluzione", "la soluzione"],
    hints: [
      "Non guardare le parole, guarda le lettere...",
      "Concentrati sulla prima lettera di ogni parola...",
      "S-O-L-U-Z-I-O-N-E"
    ],
    successMessage: "\"Soluzione\" — era sotto i nostri occhi tutto il tempo. Il messaggio rivela l'ultima tappa del viaggio.",
    lore: "Il messaggio conduce alla scena finale del crimine."
  },
  {
    id: 8,
    title: "Il Caso Finale",
    subtitle: "Ogni mistero ha la sua soluzione",
    type: "riddle",
    difficulty: 5,
    icon: "🏆",
    description: "L'ultimo enigma. Solo chi ha la mente di un vero detective può risolvere il caso.",
    question: "Esisto solo quando mi cercano.\nScompaio nel momento in cui mi trovano.\nOgni detective vive per me.\nSenza di me, non ci sarebbe avventura.\n\nCosa sono?",
    answer: "mistero",
    acceptedAnswers: ["mistero", "il mistero", "un mistero", "enigma", "l'enigma"],
    hints: [
      "Sono il motore di ogni indagine...",
      "Quando vengo risolto, cesso di esistere...",
      "Holmes non potrebbe vivere senza di me."
    ],
    successMessage: "\"Mistero\" — hai risolto il caso finale. Sei un vero detective, degno erede di Sherlock Holmes!",
    lore: "Il caso è risolto. La verità è stata portata alla luce."
  }
]

export default puzzles
