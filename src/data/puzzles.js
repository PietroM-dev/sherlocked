const puzzles = [
  {
    id: 1,
    title: "Il Primo Indizio",
    subtitle: "Ogni investigazione inizia con una domanda",
    type: "riddle",
    difficulty: 1,
    icon: "🕯️",
    hiddenClue: "Ogni caso è un tassello. Il primo passo è sempre una mappa del territorio.",
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
    hiddenClue: "Non tutte le risposte errate sono inutili. Hai provato a digitare un indirizzo famoso? 221B...",
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
    hiddenClue: "Fibonacci è ovunque. Anche la natura segue i suoi numeri. Guarda le spirali.",
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
    hiddenClue: "Un vero detective esplora ogni angolo. Anche in fondo a una lista, dove nessuno pensa di guardare...",
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
    hiddenClue: "I vecchi videogiochi nascondono codici antichi. ↑↑↓↓←→←→BA — ricordi?",
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
    hiddenClue: "42 non è solo un numero. È la risposta alla vita, all'universo e a tutto il resto. — Douglas Adams",
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
    hiddenClue: "Le prime lettere svelano tutto. Anche dove non sembra esserci nulla da leggere. Guarda le icone.",
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
    hiddenClue: "Il mistero è come un'ombra: scompare quando accendi la luce. Ma a volte l'ombra stessa è l'indizio.",
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
    hiddenClue: "La radio trasmette da anni. Chi l'ha accesa non è mai tornato. Ma ha lasciato un ultimo messaggio nella luce.",
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
    hiddenClue: "Gli specchi non mentono mai. Ma a volte nascondono qualcosa dietro il vetro. Prova a guardare al contrario.",
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
    hiddenClue: "Il pensiero laterale è l'arma segreta di ogni detective. La soluzione più ovvia raramente è quella giusta.",
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
    hiddenClue: "I vecchi telefoni conservano segreti. Come le vecchie lenti d'ingrandimento sulla pagina principale...",
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
    hiddenClue: "Ogni labirinto ha un'uscita. Ma non tutti i labirinti sono fatti di muri. Alcuni sono fatti di parole.",
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
    hiddenClue: "La verità si nasconde nelle bugie. Ascolta tutti, non credere a nessuno. Come le due guardie davanti alle porte...",
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
    hiddenClue: "Le trappole migliori sono quelle che sembrano semplici. Come una sequenza che non è una sequenza.",
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
    difficulty: 3,
    icon: "🔮",
    hiddenClue: "Il tempo rivela tutto. Ma alcuni segreti si vedono solo quando è buio fuori. Torna a mezzanotte.",
    description: "Un enigma trovato nel covo del sospettato. La risposta apre un nuovo capitolo dell'indagine.",
    question: "Non puoi vedermi, ma invecchi per causa mia.\nNon puoi fermarmi, ma tutti provano a farlo.\nGuarisco ogni ferita,\nma alla fine vinco sempre io.\n\nChe cosa sono?",
    answer: "tempo",
    acceptedAnswers: ["tempo", "il tempo", "lo scorrere del tempo", "time"],
    hints: [
      "Scorre in una sola direzione...",
      "Gli orologi provano a misurarmi...",
      "Si dice che guarisca ogni ferita."
    ],
    successMessage: "\"Il Tempo\" — ma il tempo stringe anche per noi. Un nuovo fascicolo è arrivato dal dipartimento...",
    lore: "L'orologio della torre batte la mezzanotte. Ma il caso non è ancora chiuso."
  },
  {
    id: 17,
    title: "La Stanza delle Equazioni",
    subtitle: "I simboli nascondono numeri",
    type: "equations",
    difficulty: 4,
    icon: "⚖️",
    hiddenClue: "I simboli parlano una lingua universale. Impara a leggerli, e nessun codice ti resisterà.",
    description: "Sul pavimento della stanza segreta, qualcuno ha tracciato equazioni con simboli misteriosi. Trova il valore di ogni simbolo.",
    question: "Risolvi il sistema di equazioni:\n\n🔴 + 🔴 + 🔴 = 15\n🔵 + 🔴 + 🔵 = 19\n🟢 + 🔵 + 🔴 = 15\n\n🟢 + 🔵 + 🟢 = ?\n\nQuale numero si ottiene?",
    answer: "13",
    acceptedAnswers: ["13", "tredici"],
    hints: [
      "Dalla prima equazione: 🔴 = ?",
      "🔴 = 5, quindi dalla seconda: 2×🔵 + 5 = 19...",
      "🔴=5, 🔵=7, 🟢=3. Ora calcola 🟢+🔵+🟢."
    ],
    successMessage: "13! Un sistema di equazioni risolto alla perfezione. I numeri 5, 7, 3 erano le cifre di una combinazione...",
    lore: "La stanza segreta contiene equazioni tracciate col gesso. Ogni simbolo cela un numero."
  },
  {
    id: 18,
    title: "Il Cifrario del Conte",
    subtitle: "Un cifrario che nemmeno Cesare potrebbe rompere",
    type: "vigenere",
    difficulty: 4,
    icon: "🗝️",
    hiddenClue: "L'ombra è ovunque. Segue chi la ignora. Il mandante porta il suo nome.",
    description: "Un messaggio cifrato con il Cifrario di Vigenère — più complesso del Cifrario di Cesare. Ogni lettera usa uno spostamento diverso, ciclando sulla parola chiave.",
    question: "Il messaggio cifrato è:\n\n« F  Q  S  V  R »\n\nLa chiave è: RE\n\nMetodo: per decifrare, sottrai la posizione\ndella lettera-chiave da quella cifrata.\n(A=0, B=1, C=2, ... R=17, E=4)\n\nF(5) − R(17) = ?\nQ(16) − E(4) = ?\nS(18) − R(17) = ?\n...e così via (se il risultato è negativo, aggiungi 26)\n\nQuale parola si nasconde?",
    answer: "ombra",
    acceptedAnswers: ["ombra", "l'ombra", "un'ombra"],
    hints: [
      "F(5)−R(17) = 5−17 = −12 → −12+26 = 14 = O",
      "Q(16)−E(4) = 12 = M. Quindi le prime due lettere sono O-M...",
      "O-M-B-R-A: una parola che segue tutti ma nessuno riesce a toccare."
    ],
    successMessage: "\"Ombra\" — il nome in codice del mandante. Il cifrario di Vigenère non è bastato a proteggerlo.",
    lore: "Nella biblioteca del conte, un messaggio cifrato con un metodo più sofisticato di quello di Cesare."
  },
  {
    id: 19,
    title: "La Serie del Diavolo",
    subtitle: "Ogni numero descrive il precedente",
    type: "sequence",
    difficulty: 4,
    icon: "😈",
    hiddenClue: "Conway era un genio. Come te, se sei arrivato fin qui. Ma il diavolo si nasconde nei dettagli.",
    description: "Una sequenza diabolica incisa sulla porta di una cripta. Non è un pattern matematico tradizionale — ogni numero DESCRIVE il precedente.",
    question: "Osserva la sequenza:\n\n1\n11\n21\n1211\n111221\n?\n\nOgni termine descrive il precedente.\n\"1\" → si legge \"un 1\" → 11\n\"11\" → si legge \"due 1\" → 21\n\"21\" → si legge \"un 2, un 1\" → 1211\n\nQual è il prossimo termine?",
    answer: "312211",
    acceptedAnswers: ["312211"],
    hints: [
      "Leggi ad alta voce il numero 111221...",
      "111221 = tre 1, due 2, un 1...",
      "\"tre 1\" = 31, \"due 2\" = 22, \"un 1\" = 11 → ?"
    ],
    successMessage: "312211! La sequenza \"look-and-say\" di Conway. Ogni termine è la descrizione verbale del precedente. Mente diabolica!",
    lore: "La porta della cripta si apre solo con il numero giusto. La sequenza incisa è diversa da qualsiasi altra."
  },
  {
    id: 20,
    title: "Il Ponte dei Sospetti",
    subtitle: "Il tempo è il nemico",
    type: "optimization",
    difficulty: 4,
    icon: "🌉",
    hiddenClue: "L'ottimizzazione è l'arte del possibile. La via più veloce non è sempre la più ovvia.",
    description: "Quattro sospettati devono attraversare un ponte pericolante di notte. Il tempo stringe — ogni secondo conta.",
    question: "Quattro persone devono attraversare un ponte\ndi notte con UNA sola torcia.\nIl ponte regge massimo 2 persone alla volta.\nChi attraversa deve portare la torcia.\n\nTempi di attraversamento:\nA = 1 min, B = 2 min, C = 5 min, D = 10 min\n\nIn coppia, vanno alla velocità del più lento.\nLa torcia deve essere riportata indietro\nda qualcuno ogni volta.\n\nQual è il tempo MINIMO (in minuti)\nper far attraversare tutti e quattro?",
    answer: "17",
    acceptedAnswers: ["17", "diciassette", "17 minuti"],
    hints: [
      "La strategia ovvia (il più veloce accompagna tutti) non è ottimale...",
      "Conviene far attraversare C e D INSIEME per risparmiare tempo...",
      "A+B vanno (2min), A torna (1min), C+D vanno (10min), B torna (2min), A+B vanno (2min) = ?"
    ],
    successMessage: "17 minuti! La strategia ottimale: far attraversare i due più lenti insieme. Ottimizzazione degna di un genio!",
    lore: "I sospettati fuggono nella notte. Il ponte sul fiume è l'unica via d'uscita."
  },
  {
    id: 21,
    title: "I Numeri Romani del Morto",
    subtitle: "L'ultimo messaggio scritto in un codice antico",
    type: "roman",
    difficulty: 4,
    icon: "🏛️",
    hiddenClue: "I numeri romani sono il linguaggio degli imperatori. E degli assassini che firmano i propri crimini.",
    description: "La vittima ha inciso numeri romani sul pavimento prima di morire. Ogni numero corrisponde a una lettera dell'alfabeto (1=A, 2=B, ... 26=Z).",
    question: "La vittima ha scritto col sangue:\n\nIV · V · XII · IX · XX · XX · XV\n\nConverti ogni numero romano in un numero,\npoi trasforma ogni numero in una lettera\n(1=A, 2=B, 3=C, ... 26=Z).\n\nQuale parola si forma?",
    answer: "delitto",
    acceptedAnswers: ["delitto", "il delitto", "un delitto"],
    hints: [
      "IV=4, V=5, XII=12, IX=9...",
      "4=D, 5=E, 12=L, 9=I...",
      "D-E-L-I-T-T-O: un sinonimo di crimine."
    ],
    successMessage: "\"Delitto\" — la vittima ha nominato la natura del crimine stesso. I numeri romani erano il suo ultimo atto di coraggio.",
    lore: "La scena del crimine rivela un messaggio inciso dal morente. Numeri romani tracciati sul marmo."
  },
  {
    id: 22,
    title: "L'Enigma di Einstein",
    subtitle: "Solo il 2% delle persone riesce a risolverlo",
    type: "logic",
    difficulty: 5,
    icon: "🧠",
    hiddenClue: "Einstein diceva che l'immaginazione è più importante della conoscenza. A volte, la risposta è nella domanda stessa.",
    description: "Un classico enigma di deduzione logica. Tre case, tre abitanti, quattro indizi. Solo la logica pura può risolvere il caso.",
    question: "Tre case in fila: Rossa, Blu, Verde.\nTre abitanti: Anna, Bruno, Carlo.\n\n1. La casa Verde è all'estrema destra.\n2. La casa Blu è al centro.\n3. Anna NON vive nella casa Rossa.\n4. Bruno vive a sinistra di Carlo.\n\nChi vive nella casa Rossa?",
    answer: "bruno",
    acceptedAnswers: ["bruno"],
    hints: [
      "Dagli indizi 1 e 2: l'ordine delle case è Rossa-Blu-Verde.",
      "Bruno è a sinistra di Carlo (indizio 4). Se Bruno fosse al centro (Blu), Carlo sarebbe a destra (Verde) e Anna a sinistra (Rossa) — ma l'indizio 3 dice che Anna non è nella Rossa...",
      "Quindi Bruno dev'essere nella posizione 1: la casa Rossa."
    ],
    successMessage: "Bruno vive nella casa Rossa! Deduzione logica perfetta. Einstein sarebbe fiero di te.",
    lore: "Un enigma logico trovato nella cassaforte del professore. Solo chi ragiona come Einstein può proseguire."
  },
  {
    id: 23,
    title: "Il Paradosso delle Due Porte",
    subtitle: "Una domanda per la libertà",
    type: "logic",
    difficulty: 5,
    icon: "🚪",
    hiddenClue: "Due porte, due guardie. La verità è sempre il contrario di quello che ti dicono. Questo vale anche fuori dai giochi.",
    description: "Il classico paradosso delle due porte e delle due guardie. Una dice sempre la verità, l'altra mente sempre. Solo UNA domanda ti separa dalla libertà.",
    question: "Sei davanti a due porte: A e B.\nUna porta alla libertà, l'altra alla condanna.\n\nDue guardie: una dice SEMPRE la verità,\nl'altra MENTE sempre. Non sai chi è chi.\n\nChiedi a una guardia:\n«Se chiedessi all'ALTRA guardia\nquale porta porta alla libertà,\nquale indicherebbe?»\n\nLa guardia indica la Porta A.\n\nQuale porta scegli?",
    answer: "b",
    acceptedAnswers: ["b", "porta b", "la porta b", "la b"],
    hints: [
      "Pensa a cosa succede con ENTRAMBI i casi: chiedi al veritiero o al bugiardo...",
      "Se chiedi al veritiero: lui sa che il bugiardo indicherebbe la porta SBAGLIATA, quindi ti dice quella sbagliata. Se chiedi al bugiardo: lui sa che il veritiero indicherebbe quella GIUSTA, ma mente, e ti dice quella sbagliata.",
      "In ENTRAMBI i casi la guardia indica la porta SBAGLIATA. Se dice A, scegli B!"
    ],
    successMessage: "Porta B! In entrambi i casi — che tu chieda al veritiero o al bugiardo — la risposta indica SEMPRE la porta sbagliata. Logica paradossale magistrale!",
    lore: "Una prigione sotterranea con due porte. Il destino del detective dipende da un'unica domanda."
  },
  {
    id: 24,
    title: "Il Testamento del Genio",
    subtitle: "L'ultimo caso. Solo per menti superiori.",
    type: "multistep",
    difficulty: 5,
    icon: "🏆",
    hiddenClue: "Questo è solo l'inizio. I veri segreti sono nascosti dove nessuno pensa di cercare. Hai esplorato ogni angolo?",
    description: "Il caso definitivo richiede di combinare matematica, logica e attenzione. Tre passaggi, un'unica risposta finale.",
    question: "Il testamento del genio criminale recita:\n\n«Il mio segreto giace dove si incontrano\ntre numeri.\n\nI. Il primo numero primo dopo 100.\nII. 2 elevato alla 7ª potenza.\nIII. Sottrai il primo dal secondo.\n\nIl risultato è la chiave di tutto.»\n\nQual è il numero finale?",
    answer: "27",
    acceptedAnswers: ["27", "ventisette"],
    hints: [
      "Il primo numero primo dopo 100: 101 è primo? 101 non è divisibile per 2, 3, 5, 7... sì, è primo!",
      "2⁷ = 2×2×2×2×2×2×2 = 128",
      "128 − 101 = ?"
    ],
    successMessage: "27! Il primo numero primo dopo 100 è 101, 2⁷ = 128, e 128 − 101 = 27. Il caso è definitivamente chiuso. Sei un detective leggendario!",
    lore: "Il testamento finale del genio criminale. Solo chi padroneggia numeri e logica può decifrarlo."
  }
]

export default puzzles
