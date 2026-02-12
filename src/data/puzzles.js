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
    title: "Il Caso Intermedio",
    subtitle: "Ogni mistero ha la sua soluzione",
    type: "riddle",
    difficulty: 3,
    icon: "🔮",
    description: "Un enigma filosofico trovato nel diario del sospettato. La risposta apre un nuovo capitolo dell'indagine.",
    question: "Esisto solo quando mi cercano.\nScompaio nel momento in cui mi trovano.\nOgni detective vive per me.\nSenza di me, non ci sarebbe avventura.\n\nCosa sono?",
    answer: "mistero",
    acceptedAnswers: ["mistero", "il mistero", "un mistero", "enigma", "l'enigma"],
    hints: [
      "Sono il motore di ogni indagine...",
      "Quando vengo risolto, cesso di esistere...",
      "Holmes non potrebbe vivere senza di me."
    ],
    successMessage: "\"Mistero\" — ma la storia non finisce qui. Un nuovo fascicolo è apparso sulla scrivania del detective...",
    lore: "Il diario del sospettato rivela che l'indagine è più profonda di quanto pensassimo."
  },
  {
    id: 9,
    title: "Il Codice Morse",
    subtitle: "Punti e linee dal passato",
    type: "morse",
    difficulty: 2,
    icon: "⚡",
    description: "Una vecchia radio nella soffitta trasmette un messaggio in codice Morse. Usa la tabella per decifrarlo.",
    question: "La radio trasmette:\n\n·−·· ··− −·−· ·\n\nTabella Morse:\nA ·−    B −···  C −·−·  D −··\nE ·     F ··−·  G −−·   H ····\nI ··    J ·−−−  K −·−   L ·−··\nM −−    N −·    O −−−   P ·−−·\nQ −−·−  R ·−·   S ···   T −\nU ··−   V ···−  W ·−−   X −··−\nY −·−−  Z −−··\n\nDecifra la parola.",
    answer: "luce",
    acceptedAnswers: ["luce", "la luce"],
    hints: [
      "Separa il messaggio in 4 lettere...",
      "·−·· = L, ··− = U...",
      "La parola ha 4 lettere e illumina il buio."
    ],
    successMessage: "\"Luce\" — il messaggio dalla radio. Sotto la luce della soffitta, si rivela una scritta al contrario...",
    lore: "Nella soffitta della villa abbandonata, una radio gracchia un messaggio ripetuto da decenni."
  },
  {
    id: 10,
    title: "Lo Specchio del Tempo",
    subtitle: "Non tutto è come appare",
    type: "mirror",
    difficulty: 2,
    icon: "🪞",
    description: "Uno specchio antico nella soffitta mostra una parola scritta al contrario. Leggila come si riflette.",
    question: "Sullo specchio appare questa scritta:\n\n«  O  R  E  B  I  L  »\n\nLeggi la parola come riflessa nello specchio.",
    answer: "libero",
    acceptedAnswers: ["libero"],
    hints: [
      "Leggi le lettere da destra verso sinistra...",
      "L-I-B-E-R-O...",
      "Significa il contrario di 'prigioniero'."
    ],
    successMessage: "\"Libero\" — qualcuno voleva essere liberato. Lo specchio nascondeva una lettera dietro di sé...",
    lore: "Lo specchio non riflette solo immagini. Dietro il vetro, qualcuno ha nascosto un messaggio."
  },
  {
    id: 11,
    title: "Il Paradosso del Barista",
    subtitle: "La logica si nasconde dove meno te l'aspetti",
    type: "lateral",
    difficulty: 3,
    icon: "🍸",
    description: "Un testimone racconta una scena assurda avvenuta in un bar. La risposta è meno ovvia di quanto sembri.",
    question: "Un uomo entra in un bar e chiede\nun bicchiere d'acqua.\n\nIl barista lo guarda, poi tira fuori\nuna pistola e gliela punta contro.\n\nL'uomo sorride, ringrazia ed esce.\n\nPerché l'uomo ha ringraziato?",
    answer: "singhiozzo",
    acceptedAnswers: ["singhiozzo", "il singhiozzo", "aveva il singhiozzo", "singhiozzava", "singiozzo"],
    hints: [
      "L'uomo non aveva sete in realtà...",
      "Aveva un problema fisico che l'acqua avrebbe potuto risolvere...",
      "Lo spavento della pistola ha risolto il suo problema."
    ],
    successMessage: "L'uomo aveva il singhiozzo! Lo spavento l'ha fatto passare, meglio di qualsiasi bicchiere d'acqua. Pensiero laterale, detective!",
    lore: "Il barista interrogato rivela che il misterioso cliente aveva lasciato un biglietto con dei numeri."
  },
  {
    id: 12,
    title: "Il Codice del Telefono",
    subtitle: "Tecnologia del passato, messaggi del presente",
    type: "phone",
    difficulty: 3,
    icon: "📞",
    description: "Un vecchio telefono a tastiera è stato trovato nella scena del crimine. L'ultimo messaggio digitato usa il sistema T9.",
    question: "Sul vecchio telefono, ogni tasto corrisponde\na delle lettere:\n\n2=ABC  3=DEF  4=GHI  5=JKL\n6=MNO  7=PQRS  8=TUV  9=WXYZ\n\nL'ultimo messaggio digitato è:\n\n«  7 · 3 · 2 · 8 · 6  »\n\nUsa la prima lettera di ogni gruppo\nper decifrare la parola.",
    answer: "reato",
    acceptedAnswers: ["reato", "il reato", "un reato"],
    hints: [
      "Prendi la lettera più comune per ogni numero...",
      "7=R, 3=E, 2=A...",
      "È un sinonimo di 'crimine'."
    ],
    successMessage: "\"Reato\" — il messaggio dal telefono. Qualcuno stava confessando. Ma c'è ancora un labirinto da risolvere...",
    lore: "Il telefono apparteneva a un informatore. I suoi messaggi portano a un luogo nascosto."
  },
  {
    id: 13,
    title: "Il Labirinto Segreto",
    subtitle: "Le lettere formano un cammino",
    type: "grid",
    difficulty: 3,
    icon: "🏛️",
    description: "Sulle mura di un antico palazzo, una griglia di lettere nasconde una parola. Segui il percorso giusto.",
    question: "Parti dalla S e muoviti nelle caselle\nadiacenti (→ ↓ ← ↑) per formare\nuna parola di 7 lettere:\n\n┌───┬───┬───┐\n│ S │ E │ G │\n├───┼───┼───┤\n│ O │ T │ R │\n├───┼───┼───┤\n│   │   │ E │\n└───┴───┴───┘\n\nQuale parola si forma?",
    answer: "segreto",
    acceptedAnswers: ["segreto", "il segreto", "un segreto"],
    hints: [
      "Parti da S in alto a sinistra...",
      "S → E → G poi scendi...",
      "S-E-G-R-E-T-O: il percorso fa una spirale."
    ],
    successMessage: "\"Segreto\" — il labirinto rivela la parola chiave. Dietro il muro c'era una stanza nascosta da secoli...",
    lore: "Il palazzo nasconde una stanza segreta. La griglia sulle mura è la chiave per trovarla."
  },
  {
    id: 14,
    title: "Il Testimone Muto",
    subtitle: "Tre sospettati, una sola verità",
    type: "logic",
    difficulty: 4,
    icon: "🤫",
    description: "Tre sospettati vengono interrogati. Solo uno dice la verità. La logica è la tua unica arma.",
    question: "Tre sospettati: il Cuoco, il Giardiniere\ne il Maggiordomo.\n\n🧑‍🍳 Il Cuoco dice:\n   «Il Giardiniere è il colpevole.»\n\n🌿 Il Giardiniere dice:\n   «Il Maggiordomo è il colpevole.»\n\n🎩 Il Maggiordomo dice:\n   «Il Giardiniere mente.»\n\nSolo UNO di loro dice la verità.\nChi è il colpevole?",
    answer: "maggiordomo",
    acceptedAnswers: ["maggiordomo", "il maggiordomo"],
    hints: [
      "Se il Cuoco dicesse il vero, chi mentirebbe?",
      "Se il Giardiniere dice la verità, allora il colpevole è il Maggiordomo. In quel caso il Cuoco mente (dice Giardiniere) e il Maggiordomo mente (dice che il Giardiniere mente, ma il Giardiniere dice la verità)...",
      "Solo il Giardiniere dice la verità. La risposta inizia per M."
    ],
    successMessage: "Il Maggiordomo! Solo il Giardiniere diceva la verità. Logica deduttiva perfetta, detective.",
    lore: "Il maggiordomo confessa sotto la pressione delle prove. Ma l'indagine rivela un complice ancora in libertà."
  },
  {
    id: 15,
    title: "La Trappola dei Numeri",
    subtitle: "Non tutto segue le regole che credi",
    type: "lateral",
    difficulty: 4,
    icon: "🪤",
    description: "Un foglio con una serie di uguaglianze. Sembra semplice, ma la risposta non è quella che pensi.",
    question: "Osserva attentamente:\n\n1  =  5\n2  =  25\n3  =  125\n4  =  625\n\n5  =  ?\n\nQual è il valore di 5?",
    answer: "1",
    acceptedAnswers: ["1", "uno"],
    hints: [
      "Non pensare ai pattern matematici...",
      "Rileggi la PRIMA riga del problema...",
      "Se 1 = 5, allora 5 = ?"
    ],
    successMessage: "La risposta è 1! Se 1=5, allora 5=1. Non era un pattern di potenze — era una trappola logica. Brillante!",
    lore: "Il foglio era un test lasciato dal mandante. Solo chi pensa fuori dagli schemi può proseguire."
  },
  {
    id: 16,
    title: "La Resa dei Conti",
    subtitle: "L'ultimo enigma chiude il cerchio",
    type: "riddle",
    difficulty: 5,
    icon: "🏆",
    description: "Il caso finale. Tutto si riduce a un'ultima domanda. La risposta è il nome di ciò che governa ogni cosa.",
    question: "Non puoi vedermi, ma invecchi per causa mia.\nNon puoi fermarmi, ma tutti provano a farlo.\nGuarisco ogni ferita,\nma alla fine vinco sempre io.\n\nChe cosa sono?",
    answer: "tempo",
    acceptedAnswers: ["tempo", "il tempo", "lo scorrere del tempo", "time"],
    hints: [
      "Scorre in una sola direzione...",
      "Gli orologi provano a misurarmi...",
      "Si dice che guarisca ogni ferita."
    ],
    successMessage: "\"Il Tempo\" — l'unica forza che nessun criminale può sfuggire, e l'unica arma di ogni detective. Caso chiuso, per sempre.",
    lore: "L'orologio della torre batte la mezzanotte. L'indagine è conclusa. La giustizia trionfa."
  }
]

export default puzzles
