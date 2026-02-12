const metaPuzzles = [
  {
    id: "m1",
    meta: true,
    title: "Il Filo Invisibile",
    subtitle: "Cinque casi, un'unica parola nascosta",
    type: "meta",
    difficulty: 3,
    icon: "🕸️",
    hiddenClue: "Il filo che collega tutto è sempre stato davanti ai tuoi occhi. Basta sapere dove guardare.",
    requiredPuzzles: [7, 2, 5, 9, 4],
    description: "Un filo invisibile collega cinque casi che hai già risolto. Le loro risposte nascondono un'ultima parola. Torna ai casi chiusi e osserva ciò che avevi sotto gli occhi.",
    question: "Cinque casi chiusi. Cinque risposte trovate.\nLe risposte stesse nascondono un messaggio.\n\nPrendi la PRIMA LETTERA della risposta\ndi ciascun caso indicato:\n\n① Dove le iniziali di ogni parola\n   svelano un segreto...\n\n② Dove un cifrario antico\n   nasconde la verità...\n\n③ Dove una voce senza corpo\n   risponde nel silenzio...\n\n④ Dove punti e linee\n   trasmettono dal passato...\n\n⑤ Dove le lettere in disordine\n   celano l'essenziale...\n\nQuale parola si forma?",
    answer: "sveli",
    acceptedAnswers: ["sveli", "tu sveli"],
    hints: [
      "Ogni descrizione punta a un caso già risolto. Riconosci i temi?",
      "① = Il Messaggio Nascosto → S..., ② = Il Codice Cesareo → V...",
      "S-V-E-L-I: un verbo che significa 'riveli'."
    ],
    successMessage: "\"Sveli\" — riveli la verità! Le risposte dei casi passati erano collegate fin dall'inizio. Il filo invisibile lega ogni indagine.",
    lore: "Un fascicolo misterioso è apparso sulla tua scrivania. Qualcuno ha collegato i casi con un filo sottile. Solo chi ha già risolto può vedere il disegno."
  },
  {
    id: "m2",
    meta: true,
    title: "La Cospirazione",
    subtitle: "Sette casi, sette lettere, una verità",
    type: "meta",
    difficulty: 4,
    icon: "🗃️",
    hiddenClue: "La cospirazione era sotto i nostri occhi. Ogni caso era un tassello di un mosaico più grande.",
    requiredPuzzles: [1, 4, 7, 16, 5, 12, 18],
    description: "Sette casi risolti nascondono una parola che lega tutto. L'indagine non era fatta di casi separati — era un unico grande complotto. Torna ai casi chiusi e cerca la connessione.",
    question: "Sette casi. Sette lettere. Un'unica parola\nche lega tutto dall'inizio.\n\nPrendi la PRIMA LETTERA della risposta\ndi ciascun caso indicato:\n\n① Dove tutto è iniziato,\n   nella stanza del professore...\n\n② Dove le lettere danzano\n   e il significato si nasconde...\n\n③ Dove le parole nascondono\n   un messaggio tra le righe...\n\n④ Dove qualcosa di invisibile\n   governa ogni cosa...\n\n⑤ Dove il silenzio\n   ha una voce propria...\n\n⑥ Dove un vecchio telefono\n   confessa il crimine...\n\n⑦ Dove il cifrario del conte\n   protegge un nome...\n\nQuale parola si forma?",
    answer: "mistero",
    acceptedAnswers: ["mistero", "il mistero"],
    hints: [
      "Ripensa ai temi di ogni caso. ① parla del professore... quale caso inizia nella stanza del professore?",
      "① = Il Primo Indizio → M..., ② = Parole nell'Ombra → I..., ③ = Il Messaggio Nascosto → S...",
      "M-I-S-T-E-R-O: la parola che definisce tutto ciò che fai."
    ],
    successMessage: "\"Mistero\" — la parola che definisce la tua intera indagine. Non erano casi separati: ogni enigma era parte di un unico grande mistero orchestrato fin dall'inizio.",
    lore: "Un informatore anonimo ha lasciato un fascicolo sigillato con sette timbri. Ogni timbro corrisponde a un caso chiuso. Il messaggio finale rivela la verità dietro tutto."
  },
  {
    id: "m3",
    meta: true,
    title: "Il Dossier Finale",
    subtitle: "L'ultimo collegamento. Il cerchio si chiude.",
    type: "meta",
    difficulty: 5,
    icon: "📂",
    hiddenClue: "Il dossier è completo. Ma ogni fine è un nuovo inizio. Hai trovato tutti i segreti?",
    requiredPuzzles: [21, 18, 13, 11, 4, 5, 12],
    description: "Il dossier finale dell'intera indagine. Sette casi, apparentemente slegati, nascondono la parola che chiude il cerchio. Torna agli archivi e ricostruisci il collegamento definitivo.",
    question: "Il dossier finale è davanti a te.\nSette casi. Sette iniziali. Una parola.\n\nPrendi la PRIMA LETTERA della risposta\ndi ciascun caso indicato:\n\n① Dove numeri romani\n   firmano un ultimo messaggio...\n\n② Dove un cifrario sofisticato\n   protegge un'identità...\n\n③ Dove un labirinto di lettere\n   forma un percorso...\n\n④ Dove la risposta è il contrario\n   di ciò che sembra...\n\n⑤ Dove lettere mescolate\n   nascondono l'essenziale...\n\n⑥ Dove una voce incorporea\n   risponde nel vuoto...\n\n⑦ Dove tasti numerati\n   compongono una confessione...\n\nQuale parola si forma?",
    answer: "dossier",
    acceptedAnswers: ["dossier", "il dossier"],
    hints: [
      "Ogni descrizione corrisponde a un caso specifico. ① parla di numeri romani... quale caso usava i numeri romani?",
      "① = I Numeri Romani del Morto → D..., ② = Il Cifrario del Conte → O..., ③ = Il Labirinto Segreto → S...",
      "D-O-S-S-I-E-R: il fascicolo completo dell'indagine."
    ],
    successMessage: "\"Dossier\" — il fascicolo completo. Ogni caso era una pagina di questo dossier. L'indagine è finalmente completa. Sei un detective leggendario, oltre ogni dubbio.",
    lore: "Il commissario ti ha consegnato un fascicolo sigillato. «Solo chi ha risolto tutti i casi collegati può aprirlo» dice. Il cerchio si chiude qui."
  }
]

export default metaPuzzles
