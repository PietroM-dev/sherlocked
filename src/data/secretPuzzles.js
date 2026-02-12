const secretPuzzles = [
  {
    id: "s1",
    secret: true,
    secretTrigger: "konami",
    triggerLabel: "Konami Code",
    title: "Il Codice del Hacker",
    subtitle: "01001000 01100101 01101100 01110000",
    type: "binary",
    difficulty: 4,
    icon: "💀",
    description: "Un fascicolo classificato, accessibile solo a chi conosce il codice segreto. Il messaggio è scritto nel linguaggio delle macchine.",
    question: "Decifra il messaggio binario.\nOgni gruppo di 8 bit è una lettera:\n\nA=01000001  B=01000010  C=01000011\nD=01000100  E=01000101  I=01001001\nL=01001100  N=01001110  O=01001111\nR=01010010  S=01010011  T=01010100\nU=01010101  V=01010110\n\nMessaggio:\n01010110 01001001 01010010 01010101 01010011\n\nQuale parola si nasconde?",
    answer: "virus",
    acceptedAnswers: ["virus", "il virus", "un virus"],
    hints: [
      "Ogni gruppo di 8 cifre corrisponde a una lettera...",
      "01010110 = V, 01001001 = I...",
      "V-I-R-U-S: qualcosa di pericoloso, sia nel mondo reale che in quello digitale."
    ],
    successMessage: "\"Virus\" — il nome in codice dell'operazione segreta. Questo fascicolo era nascosto per un motivo...",
    lore: "Un fascicolo criptato trovato nei server del dipartimento. Solo chi conosce il codice antico può accedervi."
  },
  {
    id: "s2",
    secret: true,
    secretTrigger: "baker",
    triggerLabel: "221B Baker Street",
    title: "Il Caso di Baker Street",
    subtitle: "Un enigma per chi conosce il Maestro",
    type: "riddle",
    difficulty: 3,
    icon: "🎻",
    description: "Hai trovato il fascicolo personale del detective più famoso della storia. Solo un vero conoscitore può rispondere.",
    question: "Sono nato dalla penna, non dalla carne.\nVivo in una strada che tutti conoscono\nma nessuno può visitare.\n\nIl mio migliore amico scrive le mie avventure.\nIl mio nemico è un professore di matematica.\n\nChi mi ha dato la vita...\npoi la morte...\ne poi di nuovo la vita?",
    answer: "conan doyle",
    acceptedAnswers: ["conan doyle", "arthur conan doyle", "sir arthur conan doyle", "doyle"],
    hints: [
      "Il detective in questione abita al 221B...",
      "Il suo creatore era un medico scozzese...",
      "Lo \"uccise\" alle cascate di Reichenbach, ma i fan lo costrinsero a resuscitarlo."
    ],
    successMessage: "Arthur Conan Doyle — il creatore di Sherlock Holmes, che lo uccise ne \"Il problema finale\" e fu costretto a riportarlo in vita. Caso degno del Maestro!",
    lore: "Hai digitato l'indirizzo più famoso della letteratura. Dietro la porta del 221B, un ultimo enigma ti attendeva."
  },
  {
    id: "s3",
    secret: true,
    secretTrigger: "lens",
    triggerLabel: "La Lente Segreta",
    title: "L'Occhio del Detective",
    subtitle: "La logica batte sempre l'intuizione",
    type: "logic",
    difficulty: 4,
    icon: "🧦",
    description: "Un fascicolo dimenticato nel cassetto. Un enigma di pura logica che sfida l'intuizione.",
    question: "In un cassetto ci sono esattamente\n10 calzini neri e 10 calzini bianchi,\ntutti mescolati alla rinfusa.\n\nÈ completamente buio,\nnon puoi vedere i colori.\n\nQuanti calzini devi prendere dal cassetto\nper essere SICURO al 100% di avere\nalmeno una coppia dello stesso colore?",
    answer: "3",
    acceptedAnswers: ["3", "tre"],
    hints: [
      "Non pensare alla probabilità, pensa alla certezza...",
      "Se prendi 2 calzini, POTRESTI avere uno nero e uno bianco...",
      "Con 3 calzini, almeno 2 DEVONO essere dello stesso colore (principio dei cassetti)."
    ],
    successMessage: "3! Il principio della piccionaia (pigeonhole principle): con 2 colori possibili, 3 estrazioni garantiscono una coppia. Logica pura!",
    lore: "La lente d'ingrandimento rivela ciò che l'occhio nudo non vede. Hai guardato nel posto giusto."
  },
  {
    id: "s4",
    secret: true,
    secretTrigger: "shadow",
    triggerLabel: "L'Ombra Nascosta",
    title: "Il Fantasma della Mezzanotte",
    subtitle: "Alcuni segreti si nascondono in piena vista",
    type: "riddle",
    difficulty: 3,
    icon: "👻",
    description: "Un fascicolo trovato nell'ombra, visibile solo a chi sa dove guardare. Qualcuno lo ha nascosto dove nessuno penserebbe di cercare.",
    question: "Non ho voce, eppure parlo a tutti.\nNon ho gambe, eppure viaggio per il mondo.\nNon ho occhi, eppure faccio piangere e ridere.\nPosso vivere per sempre,\nma basta una fiamma per uccidermi.\n\nCosa sono?",
    answer: "libro",
    acceptedAnswers: ["libro", "un libro", "il libro", "i libri", "libri"],
    hints: [
      "Puoi trovarlo in una biblioteca...",
      "Ha pagine ma non è un calendario...",
      "Contiene storie, ma non è una persona."
    ],
    successMessage: "Un libro! Parla senza voce, viaggia per il mondo, fa emozionare, e il fuoco è il suo peggior nemico. Hai trovato il segreto nascosto nell'ombra.",
    lore: "Nascosto dove nessuno guarda. Un fascicolo che aspettava il detective giusto."
  }
]

export default secretPuzzles
