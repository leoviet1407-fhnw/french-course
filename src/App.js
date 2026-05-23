import React, { useState } from "react";

// ─── LESSON DATA (GERMAN) ─────────────────────────────────────────────────────

// ─── LESSON DATA (FRENCH) ─────────────────────────────────────────────────────
const BUILT_IN_LESSONS = [
  // ── SESSION 1 ── Greetings & Numbers
  {
    id: 1, session: 1, week: 1, month: "April", title: "Grüßen & Vorstellen", emoji: "👋",
    grammarTip: {
      title: "Tu vs Vous",
      explanation: "Im Französischen gibt es zwei Arten 'you' zu sagen. 'Tu' benutzt du mit Freunden und Familie. 'Vous' benutzt du mit Erwachsenen, die du nicht gut kennst — wie einem Lehrer.",
      examples: ["Ça va, tu ? (mit einem Freund)", "Ça va, vous ? (höflich — mit einem Lehrer)", "Tu es sympa. (Du bist nett — informell)"],
    },
    vocab: [
      { fr: "Bonjour", en: "Hallo" }, { fr: "Salut", en: "Hi" },
      { fr: "Au revoir", en: "Auf Wiedersehen" }, { fr: "Je m'appelle...", en: "Ich heiße..." },
      { fr: "Ça va ?", en: "Wie geht es dir?" }, { fr: "Ça va bien", en: "Mir geht es gut" },
    ],
    quiz: [
      { q: "Wie sagt man 'Hallo' auf Französisch?", a: "Bonjour", choices: ["Bonjour","Au revoir","Salut","Merci"] },
      { q: "Was bedeutet 'Ça va ?' ?", a: "Wie geht es dir?", choices: ["Auf Wiedersehen","Wie geht es dir?","Ich heiße","Hallo"] },
      { q: "Wie sagt man 'Auf Wiedersehen'?", a: "Au revoir", choices: ["Bonjour","Salut","Au revoir","Je m'appelle"] },
      { q: "Was bedeutet 'Salut'?", a: "Hi", choices: ["Hallo","Hi","Auf Wiedersehen","Gut"] },
      { q: "Wie sagt man 'Mir geht es gut'?", a: "Ça va bien", choices: ["Ça va ?","Bonjour","Ça va bien","Au revoir"] },
      { q: "Was bedeutet 'Je m'appelle...' ?", a: "Ich heiße...", choices: ["Wie geht es dir?","Ich heiße...","Mir geht es gut","Auf Wiedersehen"] },
      { q: "Welches Wort bedeutet 'Hallo' (formell)?", a: "Bonjour", choices: ["Salut","Bonjour","Ça va","Merci"] },
      { q: "David sagt 'Au revoir' — was macht er?", a: "Er verabschiedet sich", choices: ["Er begrüßt jemanden","Er verabschiedet sich","Er nennt seinen Namen","Er fragt wie es geht"] },
      { q: "Wie fragt man 'Wie geht es dir?' auf Französisch?", a: "Ça va ?", choices: ["Bonjour","Au revoir","Ça va ?","Salut"] },
      { q: "Was sagst du, um dich vorzustellen?", a: "Je m'appelle...", choices: ["Ça va bien","Au revoir","Salut","Je m'appelle..."] },
    ],
    fillBlanks: [
      { sentence: "___ , je m'appelle David.", answer: "Bonjour", hint: "Beginne mit einer Begrüßung" },
      { sentence: "Ça va ? — Oui, ça va ___.", answer: "bien", hint: "Bedeutet 'gut'" },
      { sentence: "Au ___, à demain !", answer: "revoir", hint: "Ergänze 'Auf Wiedersehen'" },
    ],
    reading: {
      passage: "Bonjour ! Je m'appelle Sophie. Ça va bien, merci. Au revoir !",
      translation: "Hallo! Ich heiße Sophie. Mir geht es gut, danke. Auf Wiedersehen!",
      questions: [
        { q: "Wie heißt das Mädchen?", a: "Sophie", choices: ["David","Marie","Sophie","Julie"] },
        { q: "Wie geht es Sophie?", a: "Gut", choices: ["Schlecht","Gut","Müde","Glücklich"] },
        { q: "Was sagt sie am Ende?", a: "Au revoir", choices: ["Bonjour","Salut","Ça va","Au revoir"] },
      ],
    },
    homework: [
      "Sage 'Bonjour' und 'Au revoir' zu jemandem zu Hause heute 👋",
      "Übe laut: 'Je m'appelle David. Ça va bien!' — 3 Mal 🗣️",
      "Schreibe 'Bonjour', 'Salut' und 'Au revoir' in dein Heft ✏️",
    ],
  },
  {
    id: 2, session: 1, week: 1, month: "April", title: "Zahlen 1–10", emoji: "🔢",
    grammarTip: {
      title: "Zahlen & Alter auf Französisch",
      explanation: "Auf Französisch sagt man 'J'ai...' (Ich habe) für das Alter — nicht 'Ich bin'! David sagt also 'J'ai neuf ans' (Ich habe neun Jahre). Das ist anders als auf Deutsch!",
      examples: ["J'ai neuf ans. (Ich bin 9)", "J'ai dix ans. (Ich bin 10)", "Tu as quel âge ? (Wie alt bist du?)"],
    },
    vocab: [
      { fr: "Un", en: "1" }, { fr: "Deux", en: "2" }, { fr: "Trois", en: "3" },
      { fr: "Quatre", en: "4" }, { fr: "Cinq", en: "5" },
      { fr: "Six", en: "6" }, { fr: "Sept", en: "7" }, { fr: "Huit", en: "8" },
      { fr: "Neuf", en: "9" }, { fr: "Dix", en: "10" },
    ],
    quiz: [
      { q: "Was ist 'Cinq'?", a: "5", choices: ["3","5","7","9"] },
      { q: "Wie sagt man '8'?", a: "Huit", choices: ["Sept","Neuf","Huit","Six"] },
      { q: "Was ist 'Trois'?", a: "3", choices: ["2","3","4","5"] },
      { q: "Wie sagt man '10'?", a: "Dix", choices: ["Neuf","Dix","Sept","Huit"] },
      { q: "Was ist 'Deux'?", a: "2", choices: ["1","2","3","4"] },
      { q: "Wie sagt man '7'?", a: "Sept", choices: ["Six","Sept","Huit","Neuf"] },
      { q: "Was ist 'Quatre'?", a: "4", choices: ["3","4","5","6"] },
      { q: "Wie sagt man '1'?", a: "Un", choices: ["Un","Deux","Trois","Quatre"] },
      { q: "Was ist 'Six'?", a: "6", choices: ["5","6","7","8"] },
      { q: "Wie sagt man '9'?", a: "Neuf", choices: ["Sept","Huit","Neuf","Dix"] },
    ],
    fillBlanks: [
      { sentence: "J'ai ___ ans. (Ich bin 9 Jahre alt)", answer: "neuf", hint: "Die Zahl 9" },
      { sentence: "___ + deux = cinq", answer: "Trois", hint: "3 + 2 = 5" },
      { sentence: "Il y a ___ enfants. (Es gibt 10 Kinder)", answer: "dix", hint: "Die Zahl 10" },
    ],
    reading: {
      passage: "Je m'appelle Luc. J'ai huit ans. J'ai trois frères. Nous avons un chien.",
      translation: "Ich heiße Luc. Ich bin 8. Ich habe drei Brüder. Wir haben einen Hund.",
      questions: [
        { q: "Wie alt ist Luc?", a: "8", choices: ["7","8","9","10"] },
        { q: "Wie viele Brüder hat er?", a: "3", choices: ["1","2","3","4"] },
        { q: "Welches Haustier hat er?", a: "Einen Hund", choices: ["Eine Katze","Einen Hund","Ein Kaninchen","Einen Fisch"] },
      ],
    },
    homework: [
      "Zähle jeden Morgen diese Woche von 1 bis 10 auf Französisch 🔢",
      "Schreibe die Zahlen 1–10 auf Französisch in dein Heft ✏️",
      "Bitte jemanden zu Hause, dich bei den Zahlen 1–10 abzufragen 🎯",
    ],
  },
  {
    id: 3, session: 2, week: 1, month: "April", title: "Zahlen 11–100", emoji: "💯",
    grammarTip: {
      title: "Wie französische Zahlen funktionieren",
      explanation: "Französische Zahlen ab 17 werden kombiniert: 17 = dix-sept (zehn-sieben), 18 = dix-huit. Und 70 = soixante-dix (sechzig-zehn)! Das klingt verrückt, aber man gewöhnt sich daran.",
      examples: ["17 = dix-sept", "20 = vingt", "70 = soixante-dix", "100 = cent"],
    },
    vocab: [
      { fr: "Onze", en: "11" }, { fr: "Douze", en: "12" }, { fr: "Treize", en: "13" },
      { fr: "Quatorze", en: "14" }, { fr: "Quinze", en: "15" },
      { fr: "Seize", en: "16" }, { fr: "Vingt", en: "20" },
      { fr: "Trente", en: "30" }, { fr: "Cinquante", en: "50" }, { fr: "Cent", en: "100" },
    ],
    quiz: [
      { q: "Was ist 'Onze'?", a: "11", choices: ["10","11","12","13"] },
      { q: "Wie sagt man '12'?", a: "Douze", choices: ["Onze","Douze","Treize","Seize"] },
      { q: "Was ist 'Quinze'?", a: "15", choices: ["13","14","15","16"] },
      { q: "Wie sagt man '20'?", a: "Vingt", choices: ["Dix","Vingt","Trente","Cent"] },
      { q: "Was ist 'Cent'?", a: "100", choices: ["10","20","50","100"] },
      { q: "Wie sagt man '30'?", a: "Trente", choices: ["Vingt","Trente","Quarante","Cinquante"] },
      { q: "Was ist 'Seize'?", a: "16", choices: ["14","15","16","17"] },
      { q: "Wie sagt man '50'?", a: "Cinquante", choices: ["Quarante","Cinquante","Soixante","Cent"] },
      { q: "Was ist 'Treize'?", a: "13", choices: ["11","12","13","14"] },
      { q: "Wie sagt man '14'?", a: "Quatorze", choices: ["Treize","Quatorze","Quinze","Seize"] },
    ],
    fillBlanks: [
      { sentence: "Il y a ___ élèves dans la classe. (20 Schüler)", answer: "vingt", hint: "Die Zahl 20" },
      { sentence: "Grand-père a ___ ans. (50 Jahre)", answer: "cinquante", hint: "Die Hälfte von 100" },
      { sentence: "Il y a ___ centimes dans un euro.", answer: "cent", hint: "100 Cent in einem Euro" },
    ],
    reading: {
      passage: "Dans ma classe il y a vingt élèves. Il y a onze garçons et neuf filles. Le professeur a trente ans.",
      translation: "In meiner Klasse gibt es zwanzig Schüler. Es gibt elf Jungen und neun Mädchen. Die Lehrerin ist dreißig.",
      questions: [
        { q: "Wie viele Schüler gibt es in der Klasse?", a: "20", choices: ["11","19","20","30"] },
        { q: "Wie viele Jungen gibt es?", a: "11", choices: ["9","10","11","12"] },
        { q: "Wie alt ist die Lehrerin?", a: "30", choices: ["20","25","30","40"] },
      ],
    },
    homework: [
      "Zähle von 10 bis 20 auf Französisch — versuche es ohne Hilfe! 🔢",
      "Schreibe die Zahlen 11–20 auf Französisch in dein Heft ✏️",
      "Finde heraus, wie man deine Hausnummer auf Französisch sagt 🏠",
    ],
  },
  {
    id: 4, session: 2, week: 1, month: "April", title: "Farben", emoji: "🎨",
    grammarTip: {
      title: "Adjektive im Französischen — nach dem Nomen!",
      explanation: "Im Französischen kommen Adjektive NACH dem Nomen — anders als im Deutschen! 'Un chat noir' (eine schwarze Katze) — erst das Nomen, dann die Farbe.",
      examples: ["un chat noir (eine schwarze Katze)", "un stylo rouge (ein roter Stift)", "une pomme verte (ein grüner Apfel)"],
    },
    vocab: [
      { fr: "Rouge", en: "Rot" }, { fr: "Bleu", en: "Blau" }, { fr: "Jaune", en: "Gelb" },
      { fr: "Vert", en: "Grün" }, { fr: "Noir", en: "Schwarz" }, { fr: "Blanc", en: "Weiß" },
      { fr: "Rose", en: "Rosa" }, { fr: "Orange", en: "Orange" },
    ],
    quiz: [
      { q: "Welche Farbe ist 'Rouge'?", a: "Rot", choices: ["Blau","Rot","Grün","Rosa"] },
      { q: "Wie sagt man 'Gelb'?", a: "Jaune", choices: ["Vert","Jaune","Blanc","Noir"] },
      { q: "Was bedeutet 'Bleu'?", a: "Blau", choices: ["Schwarz","Grün","Blau","Weiß"] },
      { q: "Welche Farbe ist 'Vert'?", a: "Grün", choices: ["Grün","Gelb","Rosa","Orange"] },
      { q: "Wie sagt man 'Schwarz'?", a: "Noir", choices: ["Blanc","Rouge","Noir","Rose"] },
      { q: "Was bedeutet 'Rose'?", a: "Rosa", choices: ["Rot","Rosa","Lila","Orange"] },
      { q: "Wie sagt man 'Weiß'?", a: "Blanc", choices: ["Noir","Bleu","Blanc","Vert"] },
      { q: "Welche Farbe ist 'Orange'?", a: "Orange", choices: ["Gelb","Orange","Rot","Rosa"] },
      { q: "Wie sagt man 'Grün'?", a: "Vert", choices: ["Rouge","Jaune","Vert","Rose"] },
      { q: "Was bedeutet 'Noir'?", a: "Schwarz", choices: ["Weiß","Schwarz","Blau","Rot"] },
    ],
    fillBlanks: [
      { sentence: "Le ciel est ___. (Der Himmel ist blau)", answer: "bleu", hint: "Eine kühle Farbe" },
      { sentence: "Une tomate est ___. (Eine Tomate ist rot)", answer: "rouge", hint: "Denke an eine Ampel" },
      { sentence: "L'herbe est ___. (Das Gras ist grün)", answer: "verte", hint: "Wie Bäume" },
    ],
    reading: {
      passage: "Bonjour ! Je m'appelle David. J'ai un chat noir et blanc. Il s'appelle Félix. Mon sac est bleu et ma gomme est rouge.",
      translation: "Hallo! Ich heiße David. Ich habe eine schwarz-weiße Katze. Sie heißt Félix. Meine Tasche ist blau und mein Radiergummi ist rot.",
      questions: [
        { q: "Welche Farbe hat Davids Katze?", a: "Schwarz und weiß", choices: ["Ganz schwarz","Schwarz und weiß","Orange","Grau"] },
        { q: "Wie heißt die Katze?", a: "Félix", choices: ["David","Oscar","Félix","Luka"] },
        { q: "Welche Farbe hat Davids Tasche?", a: "Blau", choices: ["Rot","Schwarz","Grün","Blau"] },
      ],
    },
    homework: [
      "Schau dich in deinem Zimmer um und benenne 5 Dinge mit ihrer Farbe auf Französisch 🏠",
      "Male ein Bild und beschrifte 4 Farben auf Französisch 🎨",
      "Schreibe: 'Ma couleur préférée est le ___' auf Französisch ✏️",
    ],
  },
  {
    id: 5, session: 3, week: 2, month: "April", title: "Schulsachen", emoji: "🎒",
    grammarTip: {
      title: "Un / Une — Maskulin und Feminin",
      explanation: "Jedes französische Nomen ist entweder maskulin (un/le) oder feminin (une/la). Das gibt es keine Regel — man muss es mit jedem Wort lernen! 'Un livre' (ein Buch — maskulin). 'Une gomme' (ein Radiergummi — feminin).",
      examples: ["un livre (ein Buch — mask.)", "une gomme (ein Radiergummi — fem.)", "un stylo vs une règle"],
    },
    vocab: [
      { fr: "Un livre", en: "ein Buch" }, { fr: "Un stylo", en: "ein Stift" },
      { fr: "Un crayon", en: "ein Bleistift" }, { fr: "Un sac", en: "eine Tasche" },
      { fr: "Une règle", en: "ein Lineal" }, { fr: "Une gomme", en: "ein Radiergummi" },
    ],
    quiz: [
      { q: "Was ist 'Un stylo'?", a: "ein Stift", choices: ["ein Buch","ein Stift","ein Lineal","ein Bleistift"] },
      { q: "Wie sagt man 'ein Buch'?", a: "Un livre", choices: ["Un sac","Une règle","Un livre","Une gomme"] },
      { q: "Was bedeutet 'Un crayon'?", a: "ein Bleistift", choices: ["ein Bleistift","ein Stift","eine Tasche","ein Radiergummi"] },
      { q: "Wie sagt man 'ein Radiergummi'?", a: "Une gomme", choices: ["Un stylo","Une gomme","Un sac","Une règle"] },
      { q: "Was ist 'Un sac'?", a: "eine Tasche", choices: ["ein Lineal","eine Tasche","ein Buch","ein Stift"] },
      { q: "Wie sagt man 'ein Lineal'?", a: "Une règle", choices: ["Un livre","Une règle","Un crayon","Un sac"] },
      { q: "Ist 'stylo' maskulin oder feminin?", a: "Maskulin (un)", choices: ["Maskulin (un)","Feminin (une)"] },
      { q: "Ist 'gomme' maskulin oder feminin?", a: "Feminin (une)", choices: ["Maskulin (un)","Feminin (une)"] },
      { q: "Wie sagt man 'Ich habe einen Stift'?", a: "J'ai un stylo", choices: ["J'ai une stylo","J'ai un stylo","Je n'ai pas un stylo","J'ai un crayon"] },
      { q: "Wie sagt man 'ein Bleistift'?", a: "Un crayon", choices: ["Un stylo","Un crayon","Une règle","Un livre"] },
    ],
    fillBlanks: [
      { sentence: "J'ai un ___ et un stylo dans mon sac.", answer: "livre", hint: "Etwas zum Lesen" },
      { sentence: "J'utilise une ___ pour effacer. (Ich benutze einen ___ zum Radieren)", answer: "gomme", hint: "Entfernt Bleistiftspuren" },
      { sentence: "Je dessine avec un ___.", answer: "crayon", hint: "Zum Zeichnen" },
    ],
    reading: {
      passage: "Dans mon sac j'ai un livre bleu, deux stylos et une gomme. Je n'ai pas de règle. Mon sac est vert.",
      translation: "In meiner Tasche habe ich ein blaues Buch, zwei Stifte und einen Radiergummi. Ich habe kein Lineal. Meine Tasche ist grün.",
      questions: [
        { q: "Welche Farbe hat das Buch?", a: "Blau", choices: ["Rot","Grün","Blau","Schwarz"] },
        { q: "Wie viele Stifte sind in der Tasche?", a: "2", choices: ["1","2","3","4"] },
        { q: "Was fehlt in der Tasche?", a: "Ein Lineal", choices: ["Ein Buch","Ein Stift","Ein Radiergummi","Ein Lineal"] },
      ],
    },
    homework: [
      "Nimm 3 Dinge aus deinem Mäppchen und sage ihre Namen auf Französisch 🖊️",
      "Schreibe 'J'ai un/une ___' für 5 Schulsachen auf Französisch ✏️",
      "Zeichne deine Schultasche und beschrifte, was drin ist, auf Französisch 🎒",
    ],
  },
  {
    id: 6, session: 3, week: 2, month: "April", title: "Familie", emoji: "👨‍👩‍👧",
    grammarTip: {
      title: "Mon / Ma / Mes — Mein auf Französisch",
      explanation: "'Mon' bedeutet 'mein' für maskuline Nomen, 'ma' für feminine Nomen und 'mes' für Pluralnomen. Also: 'mon frère' (mein Bruder), 'ma sœur' (meine Schwester), 'mes parents' (meine Eltern).",
      examples: ["mon père (mein Vater — mask.)", "ma mère (meine Mutter — fem.)", "mes grands-parents (meine Großeltern — Plural)"],
    },
    vocab: [
      { fr: "La maman", en: "die Mama" }, { fr: "Le papa", en: "der Papa" },
      { fr: "Le frère", en: "der Bruder" }, { fr: "La sœur", en: "die Schwester" },
      { fr: "Le grand-père", en: "der Opa" }, { fr: "La grand-mère", en: "die Oma" },
    ],
    quiz: [
      { q: "Was ist 'La sœur'?", a: "die Schwester", choices: ["der Bruder","die Mama","die Schwester","die Oma"] },
      { q: "Wie sagt man 'Papa'?", a: "Le papa", choices: ["Le frère","Le papa","La maman","Le grand-père"] },
      { q: "Was bedeutet 'La grand-mère'?", a: "die Oma", choices: ["der Opa","der Papa","die Mama","die Oma"] },
      { q: "Wie sagt man 'Mama'?", a: "La maman", choices: ["La sœur","Le papa","La maman","La grand-mère"] },
      { q: "Was ist 'Le frère'?", a: "der Bruder", choices: ["die Schwester","der Bruder","der Papa","der Opa"] },
      { q: "Wie sagt man 'Opa'?", a: "Le grand-père", choices: ["La grand-mère","Le papa","Le grand-père","Le frère"] },
      { q: "Wie sagt man 'meine Schwester'?", a: "ma sœur", choices: ["mon sœur","ma sœur","mes sœur","la sœur"] },
      { q: "Wie sagt man 'mein Bruder'?", a: "mon frère", choices: ["mon frère","ma frère","mes frère","le frère"] },
      { q: "Wie sagt man 'meine Eltern'?", a: "mes parents", choices: ["mon parents","ma parents","mes parents","les parents"] },
      { q: "Was bedeutet 'Le grand-père'?", a: "der Opa", choices: ["die Oma","der Opa","der Papa","der Bruder"] },
    ],
    fillBlanks: [
      { sentence: "___ maman s'appelle Marie. (Meine Mama heißt Marie)", answer: "Ma", hint: "Mein/Meine — feminin" },
      { sentence: "___ frère joue au foot. (Mein Bruder spielt Fußball)", answer: "Mon", hint: "Mein/Meine — maskulin" },
      { sentence: "___ grands-parents habitent en France.", answer: "Mes", hint: "Mein/Meine — Plural" },
    ],
    reading: {
      passage: "Dans ma famille il y a cinq personnes. J'ai une sœur et un frère. Ma sœur a sept ans et mon frère a douze ans. Mon papa s'appelle Pierre.",
      translation: "In meiner Familie gibt es fünf Personen. Ich habe eine Schwester und einen Bruder. Meine Schwester ist sieben und mein Bruder ist zwölf. Mein Papa heißt Pierre.",
      questions: [
        { q: "Wie viele Personen gibt es in der Familie?", a: "5", choices: ["3","4","5","6"] },
        { q: "Wie alt ist die Schwester?", a: "7", choices: ["5","7","9","12"] },
        { q: "Wie heißt der Papa?", a: "Pierre", choices: ["Paul","Jean","Pierre","Marc"] },
      ],
    },
    homework: [
      "Sage jemandem zu Hause das französische Wort für jedes Familienmitglied 👨‍👩‍👧",
      "Zeichne deine Familie und beschrifte jede Person auf Französisch 🖼️",
      "Schreibe: 'Dans ma famille, il y a...' und liste deine Familie auf ✏️",
    ],
  },
  {
    id: 7, session: 4, week: 2, month: "April", title: "Tiere", emoji: "🐾",
    grammarTip: {
      title: "J'aime / Je n'aime pas",
      explanation: "'J'aime' bedeutet 'Ich mag' und 'Je n'aime pas' bedeutet 'Ich mag nicht'. Nach diesen Ausdrücken benutze 'les' (die/Plural): 'J'aime les chiens'. Du kannst auch 'J'adore' (Ich liebe) sagen!",
      examples: ["J'aime les chats. (Ich mag Katzen)", "Je n'aime pas les serpents. (Ich mag keine Schlangen)", "J'adore les chiens ! (Ich liebe Hunde!)"],
    },
    vocab: [
      { fr: "Un chat", en: "eine Katze" }, { fr: "Un chien", en: "ein Hund" },
      { fr: "Un lapin", en: "ein Kaninchen" }, { fr: "Un oiseau", en: "ein Vogel" },
      { fr: "Un poisson", en: "ein Fisch" }, { fr: "J'aime les chats", en: "Ich mag Katzen" },
    ],
    quiz: [
      { q: "Was ist 'Un chien'?", a: "ein Hund", choices: ["eine Katze","ein Hund","ein Vogel","ein Kaninchen"] },
      { q: "Wie sagt man 'ein Kaninchen'?", a: "Un lapin", choices: ["Un chat","Un oiseau","Un lapin","Un poisson"] },
      { q: "Was bedeutet 'J'aime les chats'?", a: "Ich mag Katzen", choices: ["Ich mag Hunde","Ich mag Fische","Ich mag Katzen","Ich mag Vögel"] },
      { q: "Wie sagt man 'ein Vogel'?", a: "Un oiseau", choices: ["Un lapin","Un oiseau","Un chien","Un chat"] },
      { q: "Was ist 'Un poisson'?", a: "ein Fisch", choices: ["eine Katze","ein Kaninchen","ein Fisch","ein Vogel"] },
      { q: "Wie sagt man 'Ich liebe Hunde'?", a: "J'adore les chiens", choices: ["J'aime les chiens","J'adore les chiens","Je n'aime pas les chiens","J'ai les chiens"] },
      { q: "Wie sagt man 'Ich mag keine Vögel'?", a: "Je n'aime pas les oiseaux", choices: ["J'aime les oiseaux","Je n'aime pas les oiseaux","Je déteste un oiseau","J'adore les oiseaux"] },
      { q: "Was bedeutet 'Je déteste'?", a: "Ich hasse", choices: ["Ich mag","Ich liebe","Ich hasse","Ich habe"] },
      { q: "Was ist 'Un lapin'?", a: "ein Kaninchen", choices: ["ein Hund","ein Fisch","ein Vogel","ein Kaninchen"] },
      { q: "Wie sagt man 'Ich mag Fische'?", a: "J'aime les poissons", choices: ["J'aime les lapins","J'aime les poissons","J'aime les oiseaux","J'aime les chats"] },
    ],
    fillBlanks: [
      { sentence: "J'___ les chiens. (Ich mag Hunde)", answer: "aime", hint: "Ich mag" },
      { sentence: "Je n'aime ___ les serpents.", answer: "pas", hint: "Gehört zu 'ne...pas'" },
      { sentence: "Mon animal préféré est le ___. (Mein Lieblingstier ist die Katze)", answer: "chat", hint: "Macht Miau" },
    ],
    reading: {
      passage: "Je m'appelle Zoé. J'ai un chat blanc et un lapin gris. J'adore les animaux ! Je n'aime pas les serpents. Mon chat s'appelle Minou.",
      translation: "Ich heiße Zoé. Ich habe eine weiße Katze und ein graues Kaninchen. Ich liebe Tiere! Ich mag keine Schlangen. Meine Katze heißt Minou.",
      questions: [
        { q: "Welche Farbe hat Zoés Katze?", a: "Weiß", choices: ["Grau","Schwarz","Weiß","Orange"] },
        { q: "Wie heißt Zoés Katze?", a: "Minou", choices: ["Félix","Minou","Oscar","Tom"] },
        { q: "Welches Tier mag Zoé nicht?", a: "Schlangen", choices: ["Katzen","Hunde","Kaninchen","Schlangen"] },
      ],
    },
    homework: [
      "Sage das französische Wort für 3 verschiedene Tiere vor dem Abendessen 🐾",
      "Schreibe 'J'aime les ___' und 'Je n'aime pas les ___' für 3 Tiere ✏️",
      "Zeichne dein Lieblingstier und schreibe 2 Sätze auf Französisch darüber 🐶",
    ],
  },
  {
    id: 8, session: 4, week: 2, month: "April", title: "Essen & Trinken", emoji: "🍎",
    grammarTip: {
      title: "Du / De la / Des — Teilungsartikel",
      explanation: "Wenn man auf Französisch isst oder trinkt, benutzt man 'du' (maskulin), 'de la' (feminin) oder 'des' (Plural) — diese bedeuten alle 'etwas von'. Also: 'Je mange du pain' (Ich esse Brot), 'Je bois de l'eau' (Ich trinke Wasser).",
      examples: ["Je mange du pain. (Ich esse Brot)", "Je bois de l'eau. (Ich trinke Wasser)", "Je mange des pommes. (Ich esse Äpfel)"],
    },
    vocab: [
      { fr: "Une pomme", en: "ein Apfel" }, { fr: "Le pain", en: "das Brot" },
      { fr: "Le lait", en: "die Milch" }, { fr: "L'eau", en: "das Wasser" },
      { fr: "J'aime...", en: "Ich mag..." }, { fr: "Je n'aime pas...", en: "Ich mag nicht..." },
    ],
    quiz: [
      { q: "Was ist 'Le lait'?", a: "die Milch", choices: ["Wasser","Brot","Milch","ein Apfel"] },
      { q: "Wie sagt man 'Ich mag'?", a: "J'aime...", choices: ["J'aime...","Je n'aime pas...","L'eau","Le pain"] },
      { q: "Was bedeutet 'Une pomme'?", a: "ein Apfel", choices: ["Brot","Milch","Wasser","ein Apfel"] },
      { q: "Wie sagt man 'das Wasser'?", a: "L'eau", choices: ["Le lait","L'eau","Le pain","Une pomme"] },
      { q: "Was ist 'Le pain'?", a: "das Brot", choices: ["Milch","Brot","Wasser","Apfel"] },
      { q: "Wie sagt man 'Ich esse Brot'?", a: "Je mange du pain", choices: ["Je mange le pain","Je mange du pain","Je bois du pain","J'aime du pain"] },
      { q: "Wie sagt man 'Ich trinke Wasser'?", a: "Je bois de l'eau", choices: ["Je mange de l'eau","Je bois du eau","Je bois de l'eau","J'ai de l'eau"] },
      { q: "Wie sagt man 'Ich esse Äpfel'?", a: "Je mange des pommes", choices: ["Je mange du pomme","Je mange de la pomme","Je mange des pommes","Je mange les pommes"] },
      { q: "Was bedeutet 'Je bois'?", a: "Ich trinke", choices: ["Ich esse","Ich trinke","Ich mag","Ich habe"] },
      { q: "Was bedeutet 'Je mange'?", a: "Ich esse", choices: ["Ich esse","Ich trinke","Ich mag","Ich will"] },
    ],
    fillBlanks: [
      { sentence: "Je mange ___ pain. (Ich esse Brot)", answer: "du", hint: "Teilungsartikel — maskulin" },
      { sentence: "Je bois ___ lait. (Ich trinke Milch)", answer: "du", hint: "Teilungsartikel — maskulin" },
      { sentence: "Je mange ___ pommes. (Ich esse Äpfel)", answer: "des", hint: "Teilungsartikel — Plural" },
    ],
    reading: {
      passage: "Pour le petit-déjeuner, je mange du pain et une pomme. Je bois du lait. Je n'aime pas le café ! Mon repas préféré est le dîner.",
      translation: "Zum Frühstück esse ich Brot und einen Apfel. Ich trinke Milch. Ich mag keinen Kaffee! Meine Lieblingsmahlzeit ist das Abendessen.",
      questions: [
        { q: "Was isst das Kind zum Frühstück?", a: "Brot und einen Apfel", choices: ["Nur einen Apfel","Brot und einen Apfel","Brot und Milch","Nichts"] },
        { q: "Was trinkt es?", a: "Milch", choices: ["Wasser","Saft","Milch","Kaffee"] },
        { q: "Was ist die Lieblingsmahlzeit?", a: "Abendessen", choices: ["Frühstück","Mittagessen","Abendessen","Snack"] },
      ],
    },
    homework: [
      "Sage beim nächsten Essen, was du isst, auf Französisch 🍽️",
      "Schreibe 'Je mange du/de la/des ___' für 5 verschiedene Lebensmittel ✏️",
      "Schreibe 'Je bois du/de la ___' für 3 Getränke, die du magst 🥤",
    ],
  },

  // ── APRIL REVIEW (Session 5, Week 3) ──────────────────────────────────────────
  {
    id: 19, session: 5, week: 3, month: "April", title: "April — Große Wiederholung", emoji: "🔄", isReview: true,
    grammarTip: {
      title: "April — Alles auf einen Blick!",
      explanation: "Super, David! Diese Wiederholungsstunde deckt alles aus April ab: Begrüßungen, Zahlen 1–100, Farben, Schulsachen, Familie, Tiere und Essen & Trinken. Schau nochmal drüber!",
      examples: ["Bonjour / Au revoir — Hallo / Auf Wiedersehen", "J'ai neuf ans — Ich bin 9 Jahre alt", "Rouge, bleu, vert — Rot, Blau, Grün"],
    },
    vocab: [
      { fr: "Bonjour / Au revoir", en: "Hallo / Auf Wiedersehen" },
      { fr: "J'ai ___ ans", en: "Ich bin ___ Jahre alt" },
      { fr: "Rouge / Bleu / Vert", en: "Rot / Blau / Grün" },
      { fr: "Un livre / un stylo", en: "Ein Buch / ein Stift" },
      { fr: "Mon frère / ma sœur", en: "Mein Bruder / meine Schwester" },
      { fr: "J'aime les chiens", en: "Ich mag Hunde" },
    ],
    quiz: [
      { q: "Wie sagt man 'Hallo'?", a: "Bonjour", choices: ["Bonjour","Au revoir","Merci","Salut"] },
      { q: "Was bedeutet 'Cinq'?", a: "5", choices: ["3","4","5","6"] },
      { q: "Welche Farbe ist 'Vert'?", a: "Grün", choices: ["Blau","Rot","Grün","Gelb"] },
      { q: "Was ist 'Un stylo'?", a: "ein Stift", choices: ["ein Buch","ein Stift","ein Radiergummi","ein Lineal"] },
      { q: "Wie sagt man 'meine Schwester'?", a: "ma sœur", choices: ["mon sœur","ma sœur","mes sœur","la sœur"] },
      { q: "Was bedeutet 'Un lapin'?", a: "ein Kaninchen", choices: ["ein Hund","eine Katze","ein Kaninchen","ein Vogel"] },
      { q: "Wie sagt man 'Ich esse Brot'?", a: "Je mange du pain", choices: ["Je mange le pain","Je mange du pain","Je bois du pain","J'aime du pain"] },
      { q: "Was ist 'Vingt'?", a: "20", choices: ["10","15","20","30"] },
      { q: "Wie sagt man 'Auf Wiedersehen'?", a: "Au revoir", choices: ["Bonjour","Salut","Au revoir","Ça va"] },
      { q: "Was ist die feminine Form von 'bleu'?", a: "bleue", choices: ["bleu","bleue","bleus","bleues"] },
    ],
    fillBlanks: [
      { sentence: "___, je m'appelle David!", answer: "Bonjour", hint: "Begrüßung" },
      { sentence: "J'ai ___ ans. (9 Jahre alt)", answer: "neuf", hint: "Die Zahl 9" },
      { sentence: "J'___ les animaux !", answer: "aime", hint: "Ich mag..." },
    ],
    reading: {
      passage: "Bonjour ! Je m'appelle David. J'ai neuf ans. J'ai une sœur et un frère. J'adore les animaux — j'ai un chat noir et blanc. Dans mon sac, j'ai un livre bleu et une gomme rouge. Au déjeuner, je mange du pain et je bois du lait.",
      translation: "Hallo! Ich heiße David. Ich bin neun. Ich habe eine Schwester und einen Bruder. Ich liebe Tiere — ich habe eine schwarz-weiße Katze. In meiner Tasche habe ich ein blaues Buch und einen roten Radiergummi. Zum Mittagessen esse ich Brot und trinke Milch.",
      questions: [
        { q: "Wie alt ist David?", a: "9", choices: ["7","8","9","10"] },
        { q: "Was hat David in seiner Tasche?", a: "Ein blaues Buch und einen roten Radiergummi", choices: ["Nur ein Buch","Ein blaues Buch und einen roten Radiergummi","Ein rotes Buch","Einen Stift"] },
        { q: "Was trinkt David zum Mittagessen?", a: "Milch", choices: ["Wasser","Saft","Milch","Kaffee"] },
      ],
    },
    homework: [
      "Schreibe 10 Wörter aus April auf — ohne nachzuschauen! ✏️",
      "Teste dich mit Karteikarten: Zahlen, Farben, Tiere, Essen 🃏",
      "Erzähle jemandem zu Hause auf Französisch: dein Name, Alter, Familie 🗣️",
    ],
  },

  // ── MAY: SESSION 6-9 ──────────────────────────────────────────────────────────
  // ── SESSION 6 ── Adjective agreement + negation
  {
    id: 9, session: 6, week: 3, month: "May", title: "Adjektive — Maskulin & Feminin", emoji: "🎨",
    grammarTip: {
      title: "Maskulin = kein 'e' — Féminin = 'e' am Ende",
      explanation: "Auf Französisch haben Adjektive eine maskuline und eine feminine Form. Maskulin: kein 'e' am Ende → vert. Feminin: 'e' am Ende → verte. Die Farbe steht NACH dem Nomen: Nomen + Farbe.",
      examples: ["un stylo vert (ein grüner Stift — mask.)", "une pomme verte (ein grüner Apfel — fem.)", "un chat noir / une chatte noire"],
    },
    vocab: [
      { fr: "vert / verte", en: "grün (mask. / fem.)" },
      { fr: "noir / noire", en: "schwarz (mask. / fem.)" },
      { fr: "bleu / bleue", en: "blau (mask. / fem.)" },
      { fr: "rouge / rouge", en: "rot (ändert sich nicht)" },
      { fr: "un stylo rouge", en: "ein roter Stift" },
      { fr: "une pomme verte", en: "ein grüner Apfel" },
    ],
    quiz: [
      { q: "Wie sagt man 'ein grüner Stift' (maskulin)?", a: "un stylo vert", choices: ["un stylo verte","un stylo vert","une stylo vert","un stylo verts"] },
      { q: "Wie sagt man 'ein grüner Apfel' (feminin)?", a: "une pomme verte", choices: ["une pomme vert","une pomme verte","un pomme verte","une pommes verte"] },
      { q: "Was ist die feminine Form von 'noir'?", a: "noire", choices: ["noir","noire","noirs","noirre"] },
      { q: "Was ist die feminine Form von 'bleu'?", a: "bleue", choices: ["bleu","bleue","bleues","bleus"] },
      { q: "Wo steht die Farbe im Französischen?", a: "Nach dem Nomen", choices: ["Vor dem Nomen","Nach dem Nomen","Am Satzanfang","Am Satzende"] },
      { q: "Wie sagt man 'eine schwarze Katze' (feminin)?", a: "une chatte noire", choices: ["une chatte noir","un chat noire","une chatte noire","une chatte noirs"] },
      { q: "Was ist die maskuline Form von 'verte'?", a: "vert", choices: ["verte","vert","verts","vertes"] },
      { q: "Wie sagt man 'ein roter Stift'? (rouge bleibt gleich)", a: "un stylo rouge", choices: ["un stylo rouge","un stylo rougee","une stylo rouge","un stylo rouges"] },
      { q: "Welche Form hat 'rouge' im Femininum?", a: "rouge (bleibt gleich)", choices: ["rougee","rouge (bleibt gleich)","roug","rouges"] },
      { q: "Wie heisst 'eine blaue Tasche' auf Französisch?", a: "un sac bleue", choices: ["un sac bleu","un sac bleue","une sac bleu","une sac bleue"] },
    ],
    fillBlanks: [
      { sentence: "J'ai un stylo ___. (grüner Stift — mask.)", answer: "vert", hint: "Maskulin — kein e am Ende" },
      { sentence: "J'ai une pomme ___. (grüner Apfel — fem.)", answer: "verte", hint: "Feminin — e am Ende" },
      { sentence: "Mon chat est ___. (schwarz — mask.)", answer: "noir", hint: "Maskulin — kein e" },
    ],
    reading: {
      passage: "J'ai un sac bleu et une gomme verte. Mon stylo est rouge. Ma regle est noire. J'aime les couleurs !",
      translation: "Ich habe eine blaue Tasche und einen grünen Radiergummi. Mein Stift ist rot. Mein Lineal ist schwarz. Ich liebe Farben!",
      questions: [
        { q: "Welche Farbe hat die Tasche?", a: "Blau", choices: ["Grün","Blau","Rot","Schwarz"] },
        { q: "Welche Farbe hat der Radiergummi?", a: "Grün", choices: ["Blau","Rot","Grün","Schwarz"] },
        { q: "Welche Farbe hat das Lineal?", a: "Schwarz", choices: ["Rot","Blau","Grün","Schwarz"] },
      ],
    },
    homework: [
      "Schreibe 5 Saetze mit Farbadjektiven — achte auf maskulin/feminin! ✏️",
      "Beschreibe 3 Dinge in deinem Zimmer mit Farbe auf Französisch 🏠",
      "Lerne: vert/verte, noir/noire, bleu/bleue auswendig 📝",
    ],
  },
  {
    id: 10, session: 6, week: 3, month: "May", title: "Verneinung: Je n'ai pas de…", emoji: "🚫",
    grammarTip: {
      title: "Verneinung: ne … pas",
      explanation: "Um 'nicht' zu sagen, benutzt man ne … pas um das Verb. 'Je n'ai pas de…' heisst 'Ich habe kein/keine…'. Vor Vokalen (A, E, I, O, U) wird 'ne' zu 'n': Je n'ai pas.",
      examples: ["Je n'ai pas de stylo. (Ich habe keinen Stift)", "Je n'aime pas le lait. (Ich mag Milch nicht)", "Il n'est pas grand. (Er ist nicht gross)"],
    },
    vocab: [
      { fr: "Je n'ai pas de...", en: "Ich habe kein/keine..." },
      { fr: "Je n'aime pas...", en: "Ich mag nicht..." },
      { fr: "Ce n'est pas...", en: "Das ist nicht..." },
      { fr: "Il n'est pas...", en: "Er ist nicht..." },
      { fr: "ne ... pas", en: "nicht (Verneinung)" },
      { fr: "n' vor A E I O U", en: "Elision vor Vokalen" },
    ],
    quiz: [
      { q: "Wie sagt man 'Ich habe keinen Stift'?", a: "Je n'ai pas de stylo", choices: ["Je n'ai pas un stylo","Je n'ai pas de stylo","Je pas ai de stylo","Je n'ai de stylo pas"] },
      { q: "Was bedeutet 'Je n'aime pas le lait'?", a: "Ich mag Milch nicht", choices: ["Ich mag Milch","Ich mag Milch nicht","Ich trinke Milch nicht","Ich habe keine Milch"] },
      { q: "Wo steht 'ne' und 'pas' im Satz?", a: "ne vor dem Verb, pas danach", choices: ["Beide vor dem Verb","Beide nach dem Verb","ne vor dem Verb, pas danach","Am Satzanfang"] },
      { q: "Wie sagt man 'Ich mag Schlangen nicht'?", a: "Je n'aime pas les serpents", choices: ["Je n'aime les serpents pas","Je n'aime pas les serpents","Je aime pas les serpents","Je n'aime pas de serpents"] },
      { q: "Was bedeutet 'Il n'est pas grand'?", a: "Er ist nicht gross", choices: ["Er ist gross","Er ist nicht gross","Er ist sehr gross","Er ist klein"] },
      { q: "Wie sagt man 'Ich habe kein Brot'?", a: "Je n'ai pas de pain", choices: ["Je n'ai pas du pain","Je n'ai pas de pain","Je n'ai pas le pain","Je ai pas de pain"] },
      { q: "Welche Buchstaben loesen Elision aus?", a: "A, E, I, O, U", choices: ["A, B, C","A, E, I, O, U","Nur A und E","Alle Konsonanten"] },
      { q: "Was bedeutet 'Ce n'est pas rouge'?", a: "Das ist nicht rot", choices: ["Das ist rot","Das ist nicht rot","Das ist sehr rot","Das war rot"] },
      { q: "Wie sagt man 'Ich habe kein Lineal'?", a: "Je n'ai pas de regle", choices: ["Je n'ai pas une regle","Je n'ai pas de regle","Je n'ai pas du regle","Je n'ai regle pas"] },
      { q: "Was kommt nach 'Je n'ai pas' wenn man KEIN hat?", a: "de", choices: ["un","une","de","le"] },
    ],
    fillBlanks: [
      { sentence: "Je ___ ai pas de crayon. (Ich habe keinen Bleistift)", answer: "n'", hint: "Vor Vokal: n'" },
      { sentence: "Je n'aime ___ les carottes.", answer: "pas", hint: "Das zweite Wort der Verneinung" },
      { sentence: "Il n'est ___ petit. (Er ist nicht klein)", answer: "pas", hint: "ne ... ___" },
    ],
    reading: {
      passage: "Je n'ai pas de gomme aujourd'hui. Je n'aime pas les epinards. Mon frere n'est pas grand. Ce n'est pas grave !",
      translation: "Ich habe heute keinen Radiergummi. Ich mag keinen Spinat. Mein Bruder ist nicht gross. Das ist nicht schlimm!",
      questions: [
        { q: "Was hat das Kind heute nicht?", a: "Einen Radiergummi", choices: ["Einen Stift","Einen Radiergummi","Ein Buch","Ein Lineal"] },
        { q: "Was mag das Kind nicht?", a: "Spinat", choices: ["Karotten","Brot","Spinat","Milch"] },
        { q: "Wie ist der Bruder?", a: "Nicht gross", choices: ["Sehr gross","Klein","Nicht gross","Sehr klein"] },
      ],
    },
    homework: [
      "Schreibe 4 Saetze mit 'Je n'ai pas de...' ✏️",
      "Schreibe 3 Saetze mit 'Je n'aime pas...' 🚫",
      "Uebe: Je n'ai, Je n'aime, Je n'est — beachte das n' vor Vokal! 📝",
    ],
  },
  {
    id: 11, session: 7, week: 4, month: "May", title: "Singulier & Pluriel", emoji: "1️⃣",
    grammarTip: {
      title: "Einzahl: kein s — Mehrzahl: mit s",
      explanation: "Im Französischen bildet man den Plural normalerweise mit s am Ende. Aber man hoert das s nicht! Der Artikel aendert sich: un/une wird zu des, le/la wird zu les.",
      examples: ["un chat → des chats (eine Katze → Katzen)", "une pomme → des pommes", "le livre → les livres"],
    },
    vocab: [
      { fr: "un chat / des chats", en: "eine Katze / Katzen" },
      { fr: "une pomme / des pommes", en: "ein Apfel / Aepfel" },
      { fr: "le livre / les livres", en: "das Buch / die Buecher" },
      { fr: "un stylo / des stylos", en: "ein Stift / Stifte" },
      { fr: "un ami / des amis", en: "ein Freund / Freunde" },
      { fr: "Singulier / Pluriel", en: "Einzahl / Mehrzahl" },
    ],
    quiz: [
      { q: "Was ist der Plural von 'un chat'?", a: "des chats", choices: ["des chat","des chats","les chat","des chates"] },
      { q: "Was ist der Plural von 'une pomme'?", a: "des pommes", choices: ["des pomme","une pommes","des pommes","les pomme"] },
      { q: "Was ist der Plural von 'le livre'?", a: "les livres", choices: ["le livres","les livre","les livres","des livres"] },
      { q: "Welcher Artikel zeigt immer Plural an?", a: "les / des", choices: ["le / la","un / une","les / des","du / de la"] },
      { q: "Hoert man das s im Plural auf Französisch?", a: "Nein, nur schriftlich", choices: ["Ja immer","Manchmal","Nein, nur schriftlich","Nur bei Vokalen"] },
      { q: "Was ist der Plural von 'un stylo'?", a: "des stylos", choices: ["des stylo","un stylos","des stylos","les stylo"] },
      { q: "Was bedeutet 'J'ai des amis'?", a: "Ich habe Freunde", choices: ["Ich habe einen Freund","Ich habe Freunde","Ich habe viele Freunde","Ich mag Freunde"] },
      { q: "Was ist der Plural von 'la gomme'?", a: "les gommes", choices: ["les gomme","la gommes","des gommes","les gommes"] },
      { q: "Welcher Artikel ersetzt 'un/une' im Plural?", a: "des", choices: ["les","des","du","de"] },
      { q: "Was ist der Plural von 'un oiseau'?", a: "des oiseaux", choices: ["des oiseau","des oiseaus","des oiseaux","les oiseau"] },
    ],
    fillBlanks: [
      { sentence: "J'ai ___ chats. (Ich habe Katzen)", answer: "des", hint: "Plural-Artikel" },
      { sentence: "Je mange ___ pommes. (Ich esse Aepfel)", answer: "des", hint: "Plural nach manger" },
      { sentence: "___ livres sont bleus. (Die Buecher sind blau)", answer: "Les", hint: "Bestimmter Plural-Artikel" },
    ],
    reading: {
      passage: "J'ai deux chats et trois poissons. Les chats sont noirs et blancs. Les poissons sont oranges. J'ai aussi des livres dans mon sac.",
      translation: "Ich habe zwei Katzen und drei Fische. Die Katzen sind schwarz und weiss. Die Fische sind orange. Ich habe auch Buecher in meiner Tasche.",
      questions: [
        { q: "Wie viele Tiere hat das Kind insgesamt?", a: "5", choices: ["2","3","5","6"] },
        { q: "Welche Farbe haben die Katzen?", a: "Schwarz und weiss", choices: ["Orange","Schwarz und weiss","Blau","Grün"] },
        { q: "Was ist in der Tasche?", a: "Buecher", choices: ["Stifte","Buecher","Aepfel","Radierguemmis"] },
      ],
    },
    homework: [
      "Schreibe 5 Woerter im Singular und bilde dann den Plural ✏️",
      "Schreibe 3 Saetze mit 'J'ai des...' und 3 mit 'J'ai un/une...' 📝",
      "Lerne: un→des, une→des, le→les, la→les auswendig 📚",
    ],
  },
  {
    id: 12, session: 7, week: 4, month: "May", title: "Mon, Ma, Mes — Mein/Meine", emoji: "👤",
    grammarTip: {
      title: "Mon = mein / Ma = meine / Mes = meine (Plural)",
      explanation: "Mon, ma und mes bedeuten alle mein/meine. Mon fuer maskulin, ma fuer feminin, mes fuer Plural. Wichtig: Vor Vokalen benutzt man immer mon — auch bei femininen Nomen! mon amie (nicht ma amie)",
      examples: ["Mon frere (mein Bruder — mask.)", "Ma soeur (meine Schwester — fem.)", "Mes parents (meine Eltern — Plural)", "Mon amie (meine Freundin — feminin aber Vokal!)"],
    },
    vocab: [
      { fr: "Mon ami", en: "mein Freund" },
      { fr: "Ma soeur", en: "meine Schwester" },
      { fr: "Mes livres", en: "meine Buecher" },
      { fr: "Mon ecole", en: "meine Schule (Vokal!)" },
      { fr: "Ma mere", en: "meine Mutter" },
      { fr: "Mon pere", en: "mein Vater" },
    ],
    quiz: [
      { q: "Wie sagt man 'mein Bruder'?", a: "mon frere", choices: ["ma frere","mon frere","mes frere","le frere"] },
      { q: "Wie sagt man 'meine Schwester'?", a: "ma soeur", choices: ["mon soeur","mes soeur","ma soeur","la soeur"] },
      { q: "Wie sagt man 'meine Buecher'?", a: "mes livres", choices: ["mon livres","ma livres","mes livres","les livres"] },
      { q: "Wie sagt man 'meine Schule'? (ecole = feminin, aber Vokal!)", a: "mon ecole", choices: ["ma ecole","mon ecole","mes ecole","l'ecole"] },
      { q: "Was benutzt man vor femininen Nomen mit Vokal?", a: "mon", choices: ["ma","mes","mon","la"] },
      { q: "Wie sagt man 'meine Mutter'?", a: "ma mere", choices: ["mon mere","mes mere","ma mere","la mere"] },
      { q: "Wie sagt man 'meine Eltern' (Plural)?", a: "mes parents", choices: ["mon parents","ma parents","mes parents","les parents"] },
      { q: "Wie sagt man 'mein Stift'? (stylo = maskulin)", a: "mon stylo", choices: ["ma stylo","mes stylo","mon stylo","le stylo"] },
      { q: "Wie sagt man 'mein Hund'? (chien = maskulin)", a: "mon chien", choices: ["ma chien","mes chien","mon chien","le chien"] },
      { q: "Wie sagt man 'meine Katzen' (Plural)?", a: "mes chats", choices: ["mon chats","ma chats","mes chats","les chats"] },
    ],
    fillBlanks: [
      { sentence: "___ frere s'appelle Lucas.", answer: "Mon", hint: "Maskulin → mon" },
      { sentence: "___ amie s'appelle Sophie. (Vokal!)", answer: "Mon", hint: "Feminin + Vokal → mon!" },
      { sentence: "___ parents sont gentils.", answer: "Mes", hint: "Plural → mes" },
    ],
    reading: {
      passage: "Mon pere s'appelle Pierre. Ma mere s'appelle Marie. Mes parents sont tres gentils. Mon ecole est grande et mes amis sont sympas.",
      translation: "Mein Vater heisst Pierre. Meine Mutter heisst Marie. Meine Eltern sind sehr nett. Meine Schule ist gross und meine Freunde sind nett.",
      questions: [
        { q: "Wie heisst der Vater?", a: "Pierre", choices: ["Marie","Pierre","Lucas","Paul"] },
        { q: "Wie ist die Schule?", a: "Gross", choices: ["Klein","Gross","Neu","Alt"] },
        { q: "Wie sind die Eltern?", a: "Sehr nett", choices: ["Streng","Lustig","Sehr nett","Muede"] },
      ],
    },
    homework: [
      "Schreibe 6 Saetze mit mon, ma und mes (je 2 pro Form) ✏️",
      "Beschreibe deine Familie mit mon/ma/mes auf Französisch 👨‍👩‍👧",
      "Lerne die Vokal-Regel: mon amie (nicht ma amie!) 📝",
    ],
  },
  {
    id: 13, session: 8, week: 4, month: "May", title: "Etre — sein (je suis, tu es...)", emoji: "🔵",
    grammarTip: {
      title: "ETRE = sein — das wichtigste Verb!",
      explanation: "Das Verb etre (sein) ist das allerwichtigste Verb auf Französisch. Es ist unregelmaessig — alle Formen auswendig lernen! Pronomen: je=ich, tu=du, il=er, elle=sie, nous=wir, vous=ihr/Sie, ils/elles=sie.",
      examples: ["je suis (ich bin)", "tu es (du bist)", "il/elle est (er/sie ist)", "nous sommes (wir sind)", "vous etes (ihr seid)", "ils/elles sont (sie sind)"],
    },
    vocab: [
      { fr: "je suis", en: "ich bin" },
      { fr: "tu es", en: "du bist" },
      { fr: "il/elle est", en: "er/sie ist" },
      { fr: "nous sommes", en: "wir sind" },
      { fr: "vous etes", en: "ihr seid / Sie sind" },
      { fr: "ils/elles sont", en: "sie sind" },
    ],
    quiz: [
      { q: "Wie sagt man 'ich bin'?", a: "je suis", choices: ["je suis","je es","je est","je sont"] },
      { q: "Wie sagt man 'du bist'?", a: "tu es", choices: ["tu suis","tu es","tu est","tu sont"] },
      { q: "Wie sagt man 'er ist'?", a: "il est", choices: ["il suis","il es","il est","il sont"] },
      { q: "Wie sagt man 'wir sind'?", a: "nous sommes", choices: ["nous suis","nous etes","nous sont","nous sommes"] },
      { q: "Wie sagt man 'ihr seid'?", a: "vous etes", choices: ["vous suis","vous sommes","vous etes","vous sont"] },
      { q: "Wie sagt man 'sie sind' (Plural)?", a: "ils sont", choices: ["ils suis","ils es","ils est","ils sont"] },
      { q: "Ergaenze: 'David ___ content.'", a: "est", choices: ["suis","es","est","sommes"] },
      { q: "Ergaenze: 'Je ___ fatigue.'", a: "suis", choices: ["suis","es","est","sont"] },
      { q: "Ergaenze: 'Nous ___ en France.'", a: "sommes", choices: ["suis","etes","sont","sommes"] },
      { q: "Was bedeutet 'vous etes'?", a: "ihr seid / Sie sind", choices: ["wir sind","ich bin","ihr seid / Sie sind","sie sind"] },
    ],
    fillBlanks: [
      { sentence: "Je ___ content. (Ich bin gluecklich)", answer: "suis", hint: "ich → suis" },
      { sentence: "Tu ___ grand. (Du bist gross)", answer: "es", hint: "du → es" },
      { sentence: "Il ___ fatigue. (Er ist muede)", answer: "est", hint: "il → est" },
    ],
    reading: {
      passage: "Je suis David. J'ai neuf ans. Je suis content aujourd'hui ! Mon ami Lucas est sympa. Nous sommes bons amis. Vous etes prets ?",
      translation: "Ich bin David. Ich bin neun Jahre alt. Ich bin heute gluecklich! Mein Freund Lucas ist nett. Wir sind gute Freunde. Seid ihr bereit?",
      questions: [
        { q: "Wie heisst das Kind?", a: "David", choices: ["Lucas","Marie","David","Pierre"] },
        { q: "Wie ist David heute?", a: "Gluecklich", choices: ["Muede","Traurig","Gluecklich","Wuetend"] },
        { q: "Was bedeutet 'Nous sommes bons amis'?", a: "Wir sind gute Freunde", choices: ["Wir haben Freunde","Wir sind gute Freunde","Sie sind Freunde","Ihr seid Freunde"] },
      ],
    },
    homework: [
      "Schreibe alle 6 Formen von ETRE auswendig: je suis, tu es... ✏️",
      "Mache 6 Saetze — einen fuer jede Person mit ETRE + Adjektiv 📝",
      "Konjugiere ETRE fuer deine Familie: Mon pere est..., Ma soeur est... 👨‍👩‍👧",
    ],
  },
  {
    id: 14, session: 8, week: 4, month: "May", title: "Etre — Adjektive & Verneinung", emoji: "🔵",
    grammarTip: {
      title: "ETRE + Adjektiv + Verneinung",
      explanation: "Mit ETRE beschreibt man wie jemand ist. Das Adjektiv muss mit dem Nomen uebereinstimmen! Maskulin: kein e. Feminin: e am Ende. Verneinung: Il n'est pas grand. (Er ist nicht gross.)",
      examples: ["Il est grand. / Elle est grande.", "Je suis content. / Je suis contente.", "Il n'est pas fatigue. (Er ist nicht muede.)"],
    },
    vocab: [
      { fr: "content / contente", en: "gluecklich" },
      { fr: "fatigue / fatiguee", en: "muede" },
      { fr: "grand / grande", en: "gross" },
      { fr: "petit / petite", en: "klein" },
      { fr: "sympa", en: "nett (bleibt gleich)" },
      { fr: "triste", en: "traurig (bleibt gleich)" },
    ],
    quiz: [
      { q: "Wie sagt man 'Er ist gross'?", a: "Il est grand", choices: ["Il est grande","Il est grand","Elle est grand","Il est grands"] },
      { q: "Wie sagt man 'Sie ist gross' (feminin)?", a: "Elle est grande", choices: ["Elle est grand","Il est grande","Elle est grande","Elle est grands"] },
      { q: "Was aendert sich bei 'sympa' im Feminin?", a: "Nichts — es bleibt gleich", choices: ["Sympae","Sympas","Nichts — es bleibt gleich","Sympathique"] },
      { q: "Ergaenze: 'Elle est ___.' (gross — feminin)", a: "grande", choices: ["grand","grandes","grande","grands"] },
      { q: "Was bedeutet 'Nous sommes fatigues'?", a: "Wir sind muede", choices: ["Ich bin muede","Sie sind muede","Wir sind muede","Ihr seid muede"] },
      { q: "Wie sagt man 'Du bist nett'?", a: "Tu es sympa", choices: ["Tu est sympa","Tu es sympa","Tu suis sympa","Tu es sympas"] },
      { q: "Ergaenze: 'Je suis ___.' (traurig)", a: "triste", choices: ["trist","triste","tristes","tristas"] },
      { q: "Wie sagt man 'Er ist nicht muede'?", a: "Il n'est pas fatigue", choices: ["Il est pas fatigue","Il n'est pas fatigue","Il n'est fatigue pas","Il pas est fatigue"] },
      { q: "Wie sagt man 'Sie sind klein' (Gruppe von Maedchen)?", a: "Elles sont petites", choices: ["Elles sont petit","Ils sont petites","Elles sont petites","Elles sont petits"] },
      { q: "Wie sagt man 'Ich bin nicht gluecklich'?", a: "Je ne suis pas content", choices: ["Je suis pas content","Je ne suis pas content","Je n'suis pas content","Je ne pas suis content"] },
    ],
    fillBlanks: [
      { sentence: "Ma soeur est ___. (gross — feminin)", answer: "grande", hint: "Feminin → +e" },
      { sentence: "Je suis ___. (gluecklich — maskulin)", answer: "content", hint: "Maskulin — kein e" },
      { sentence: "Nous ___ fatigues. (Wir sind muede)", answer: "sommes", hint: "nous → sommes" },
    ],
    reading: {
      passage: "Ma soeur est petite et sympa. Mon frere est grand et content. Je suis un peu fatigue aujourd'hui. Nous sommes une famille sympa !",
      translation: "Meine Schwester ist klein und nett. Mein Bruder ist gross und gluecklich. Ich bin heute ein bisschen muede. Wir sind eine nette Familie!",
      questions: [
        { q: "Wie ist die Schwester?", a: "Klein und nett", choices: ["Gross und nett","Klein und nett","Gross und muede","Klein und muede"] },
        { q: "Wie ist der Bruder?", a: "Gross und gluecklich", choices: ["Klein und gluecklich","Gross und traurig","Gross und gluecklich","Klein und traurig"] },
        { q: "Wie ist das Kind heute?", a: "Ein bisschen muede", choices: ["Sehr gluecklich","Ein bisschen muede","Sehr traurig","Sehr gross"] },
      ],
    },
    homework: [
      "Schreibe 6 Saetze mit ETRE + Adjektiv — achte auf maskulin/feminin ✏️",
      "Beschreibe 4 Familienmitglieder: 'Mon ___ est ___' 👨‍👩‍👧",
      "Schreibe 3 Verneinungen mit ETRE: 'Il n'est pas...' 📝",
    ],
  },
  {
    id: 15, session: 9, week: 5, month: "May", title: "Avoir — haben (j'ai, tu as...)", emoji: "🟡",
    grammarTip: {
      title: "AVOIR = haben — das zweitwichtigste Verb!",
      explanation: "Das Verb avoir (haben) ist unregelmaessig und extrem wichtig. Fuer das Alter benutzt man AVOIR: J'ai neuf ans (Ich bin 9) — woertlich: Ich habe 9 Jahre. j'ai wird zusammengeschrieben wegen Elision!",
      examples: ["j'ai (ich habe)", "tu as (du hast)", "il/elle a (er/sie hat)", "nous avons (wir haben)", "vous avez (ihr habt)", "ils/elles ont (sie haben)"],
    },
    vocab: [
      { fr: "j'ai", en: "ich habe" },
      { fr: "tu as", en: "du hast" },
      { fr: "il/elle a", en: "er/sie hat" },
      { fr: "nous avons", en: "wir haben" },
      { fr: "vous avez", en: "ihr habt / Sie haben" },
      { fr: "ils/elles ont", en: "sie haben" },
    ],
    quiz: [
      { q: "Wie sagt man 'ich habe'?", a: "j'ai", choices: ["je ai","j'ai","j'as","j'a"] },
      { q: "Wie sagt man 'du hast'?", a: "tu as", choices: ["tu ai","tu as","tu a","tu ont"] },
      { q: "Wie sagt man 'er hat'?", a: "il a", choices: ["il ai","il as","il a","il ont"] },
      { q: "Wie sagt man 'wir haben'?", a: "nous avons", choices: ["nous ai","nous avez","nous ont","nous avons"] },
      { q: "Wie sagt man 'ihr habt'?", a: "vous avez", choices: ["vous ai","vous avons","vous avez","vous ont"] },
      { q: "Wie sagt man 'sie haben' (Plural)?", a: "ils ont", choices: ["ils ai","ils as","ils a","ils ont"] },
      { q: "Ergaenze: 'J'___ un chien.'", a: "ai", choices: ["ai","as","a","ont"] },
      { q: "Warum sagt man 'J'ai neuf ans' und nicht 'Je suis neuf ans'?", a: "Im Franzosischen benutzt man AVOIR fuer das Alter", choices: ["Weil ETRE falsch ist","Im Franzosischen benutzt man AVOIR fuer das Alter","Beides ist moeglich","Keine Regel"] },
      { q: "Was bedeutet 'Elle a une soeur'?", a: "Sie hat eine Schwester", choices: ["Sie ist eine Schwester","Sie hat eine Schwester","Ich habe eine Schwester","Er hat eine Schwester"] },
      { q: "Ergaenze: 'Nous ___ deux chats.'", a: "avons", choices: ["ai","avez","ont","avons"] },
    ],
    fillBlanks: [
      { sentence: "J'___ neuf ans. (Ich bin 9 Jahre alt)", answer: "ai", hint: "ich → j'ai" },
      { sentence: "Tu ___ un stylo rouge.", answer: "as", hint: "du → as" },
      { sentence: "Il ___ deux freres.", answer: "a", hint: "il → a" },
    ],
    reading: {
      passage: "J'ai un chien et une soeur. Mon chien a trois ans. Ma soeur a sept ans. Nous avons une grande maison. Vous avez de la chance !",
      translation: "Ich habe einen Hund und eine Schwester. Mein Hund ist drei Jahre alt. Meine Schwester ist sieben. Wir haben ein grosses Haus. Ihr habt Glueck!",
      questions: [
        { q: "Was hat das Kind?", a: "Einen Hund und eine Schwester", choices: ["Einen Hund","Eine Schwester","Einen Hund und eine Schwester","Zwei Hunde"] },
        { q: "Wie alt ist der Hund?", a: "3 Jahre", choices: ["1 Jahr","3 Jahre","7 Jahre","9 Jahre"] },
        { q: "Was bedeutet 'Vous avez de la chance'?", a: "Ihr habt Glueck", choices: ["Ich habe Glueck","Sie haben Glueck","Ihr habt Glueck","Wir haben Glueck"] },
      ],
    },
    homework: [
      "Schreibe alle 6 Formen von AVOIR auswendig: j'ai, tu as... ✏️",
      "Mache 6 Saetze mit AVOIR — einen fuer jede Person 📝",
      "Schreibe: 'J'ai ___ ans' fuer 3 Familienmitglieder 👨‍👩‍👧",
    ],
  },
  // ── MAY SESSION 9 (cont.) ──────────────────────────────────────────────────────
  {
    id: 20, session: 9, week: 5, month: "May", title: "Avoir — Ausdrücke", emoji: "🌡️",
    grammarTip: {
      title: "AVOIR-Ausdrücke: J'ai faim!",
      explanation: "Im Französischen benutzt man AVOIR (haben) für Gefühle und Körperzustände. Auf Deutsch sagt man 'Ich bin hungrig', aber auf Französisch heißt es 'J'ai faim' — wörtlich: 'Ich habe Hunger'. Lerne diese Ausdrücke auswendig!",
      examples: ["J'ai faim. (Ich bin hungrig)", "J'ai soif. (Ich bin durstig)", "J'ai peur. (Ich habe Angst)", "J'ai chaud. (Mir ist warm)"],
    },
    vocab: [
      { fr: "J'ai faim", en: "Ich bin hungrig" },
      { fr: "J'ai soif", en: "Ich bin durstig" },
      { fr: "J'ai chaud", en: "Mir ist warm" },
      { fr: "J'ai froid", en: "Mir ist kalt" },
      { fr: "J'ai peur", en: "Ich habe Angst" },
      { fr: "J'ai sommeil", en: "Ich bin schläfrig" },
    ],
    quiz: [
      { q: "Was bedeutet 'J'ai faim'?", a: "Ich bin hungrig", choices: ["Ich bin durstig","Ich bin hungrig","Mir ist warm","Ich bin schläfrig"] },
      { q: "Wie sagt man 'Ich bin durstig'?", a: "J'ai soif", choices: ["J'ai faim","J'ai soif","J'ai froid","J'ai peur"] },
      { q: "Was bedeutet 'J'ai peur'?", a: "Ich habe Angst", choices: ["Ich bin kalt","Ich bin müde","Ich habe Angst","Ich bin warm"] },
      { q: "Wie sagt man 'Mir ist kalt'?", a: "J'ai froid", choices: ["J'ai chaud","J'ai froid","J'ai faim","J'ai soif"] },
      { q: "Was bedeutet 'J'ai sommeil'?", a: "Ich bin schläfrig", choices: ["Ich bin hungrig","Ich bin schläfrig","Ich habe Angst","Mir ist kalt"] },
      { q: "Wie sagt man 'Mir ist warm'?", a: "J'ai chaud", choices: ["J'ai froid","J'ai soif","J'ai chaud","J'ai peur"] },
      { q: "Ergänze: 'Il ___ faim.' (Er ist hungrig)", a: "a", choices: ["ai","as","a","ont"] },
      { q: "Ergänze: 'Nous ___ froid.' (Uns ist kalt)", a: "avons", choices: ["ai","as","a","avons"] },
      { q: "Wie sagt man 'Sie ist schläfrig' (elle)?", a: "Elle a sommeil", choices: ["Elle ai sommeil","Elle as sommeil","Elle a sommeil","Elle ont sommeil"] },
      { q: "Warum benutzt man AVOIR für diese Ausdrücke?", a: "Das ist eine feste Regel im Französischen", choices: ["Weil ETRE falsch ist","Das ist eine feste Regel im Französischen","Nur bei Gefühlen","Nur bei Körperzuständen"] },
    ],
    fillBlanks: [
      { sentence: "J'ai ___ — je veux manger. (Ich bin hungrig — ich will essen)", answer: "faim", hint: "Hunger auf Französisch" },
      { sentence: "Il fait chaud aujourd'hui ! J'ai ___. (Mir ist warm)", answer: "chaud", hint: "warm = chaud" },
      { sentence: "Il est minuit — j'ai ___. (Es ist Mitternacht — ich bin schläfrig)", answer: "sommeil", hint: "schläfrig = sommeil" },
    ],
    reading: {
      passage: "Il est midi. J'ai très faim et j'ai soif. Ma sœur a froid parce que la fenêtre est ouverte. Mon chien a sommeil — il dort sur le canapé. Nous avons tous faim !",
      translation: "Es ist Mittag. Ich bin sehr hungrig und durstig. Meine Schwester ist kalt, weil das Fenster offen ist. Mein Hund ist schläfrig — er schläft auf dem Sofa. Wir sind alle hungrig!",
      questions: [
        { q: "Wie ist das Kind?", a: "Sehr hungrig und durstig", choices: ["Nur hungrig","Nur durstig","Sehr hungrig und durstig","Schläfrig"] },
        { q: "Warum ist die Schwester kalt?", a: "Das Fenster ist offen", choices: ["Es schneit","Das Fenster ist offen","Sie ist krank","Es ist Winter"] },
        { q: "Was macht der Hund?", a: "Er schläft auf dem Sofa", choices: ["Er spielt","Er schläft auf dem Sofa","Er isst","Er rennt"] },
      ],
    },
    homework: [
      "Lerne alle 6 AVOIR-Ausdrücke auswendig — teste dich vor dem Schlafen! 🌙",
      "Schreibe 6 Sätze: Beschreibe, wie du dich heute fühlst, mit AVOIR ✏️",
      "Frage jemanden zu Hause auf Französisch: 'Tu as faim ?' — und antworte auf Französisch! 🗣️",
    ],
  },
  // ── MAY REVIEW (Session 10, Week 5) ──────────────────────────────────────────
  {
    id: 21, session: 10, week: 5, month: "May", title: "Mai — Große Wiederholung", emoji: "🔄", isReview: true,
    grammarTip: {
      title: "Mai — Grammatik auf einen Blick!",
      explanation: "Im Mai hast du wichtige Grammatik gelernt: Adjektive (mask./fem.), Verneinung (ne...pas), Plural (s), Possessivpronomen (mon/ma/mes) und die Verben être (sein) und avoir (haben) mit Ausdrücken!",
      examples: ["un stylo vert / une pomme verte — Adjektive", "Je n'ai pas de... — Verneinung", "je suis / j'ai / j'ai faim — être & avoir"],
    },
    vocab: [
      { fr: "vert / verte", en: "grün (mask. / fem.)" },
      { fr: "Je n'ai pas de...", en: "Ich habe kein/keine..." },
      { fr: "un chat / des chats", en: "eine Katze / Katzen (Plural)" },
      { fr: "mon / ma / mes", en: "mein / meine / meine" },
      { fr: "je suis / il est", en: "ich bin / er ist (être)" },
      { fr: "j'ai / elle a", en: "ich habe / sie hat (avoir)" },
    ],
    quiz: [
      { q: "Was ist die feminine Form von 'noir'?", a: "noire", choices: ["noir","noire","noirs","noirre"] },
      { q: "Wie sagt man 'Ich habe keinen Stift'?", a: "Je n'ai pas de stylo", choices: ["Je n'ai pas un stylo","Je n'ai pas de stylo","Je pas ai de stylo","Je n'ai de stylo pas"] },
      { q: "Was ist der Plural von 'une pomme'?", a: "des pommes", choices: ["des pomme","une pommes","des pommes","les pomme"] },
      { q: "Wie sagt man 'mein Bruder'?", a: "mon frère", choices: ["ma frère","mon frère","mes frère","le frère"] },
      { q: "Wie sagt man 'ich bin'?", a: "je suis", choices: ["je suis","je es","je est","je sont"] },
      { q: "Wie sagt man 'wir haben'?", a: "nous avons", choices: ["nous ai","nous avez","nous ont","nous avons"] },
      { q: "Was bedeutet 'J'ai sommeil'?", a: "Ich bin schläfrig", choices: ["Ich bin hungrig","Ich bin schläfrig","Ich habe Angst","Mir ist kalt"] },
      { q: "Was ist die feminine Form von 'grand'?", a: "grande", choices: ["grand","grandes","grande","grands"] },
      { q: "Wie sagt man 'sie ist' (elle)?", a: "elle est", choices: ["elle suis","elle es","elle est","elle sont"] },
      { q: "Was benutzt man vor femininen Nomen mit Vokal?", a: "mon", choices: ["ma","mes","mon","la"] },
    ],
    fillBlanks: [
      { sentence: "J'ai un stylo ___. (grüner Stift — mask.)", answer: "vert", hint: "Maskulin — kein e" },
      { sentence: "Je ___ suis pas fatigue. (Ich bin nicht müde)", answer: "ne", hint: "Verneinung: ne...pas" },
      { sentence: "___ parents sont gentils. (Meine Eltern sind nett)", answer: "Mes", hint: "Plural → mes" },
    ],
    reading: {
      passage: "Je suis content aujourd'hui ! J'ai mes livres dans mon sac vert. Ma sœur est grande et sympa. Nous sommes une bonne famille. Je n'ai pas faim mais j'ai soif.",
      translation: "Ich bin heute glücklich! Ich habe meine Bücher in meiner grünen Tasche. Meine Schwester ist groß und nett. Wir sind eine gute Familie. Ich bin nicht hungrig, aber ich bin durstig.",
      questions: [
        { q: "Wie ist das Kind heute?", a: "Glücklich", choices: ["Müde","Traurig","Glücklich","Krank"] },
        { q: "Welche Farbe hat die Tasche?", a: "Grün", choices: ["Blau","Rot","Grün","Schwarz"] },
        { q: "Was hat das Kind?", a: "Durst (es ist durstig)", choices: ["Hunger","Angst","Durst (es ist durstig)","Schläfrigkeit"] },
      ],
    },
    homework: [
      "Schreibe alle 6 Formen von ÊTRE und AVOIR in eine Tabelle ✏️",
      "Mache 5 Sätze mit Adjektiven — achte auf maskulin/feminin! 🎨",
      "Lerne 5 AVOIR-Ausdrücke auswendig: j'ai faim, j'ai soif... 🌡️",
    ],
  },

  // ── JUNE: SESSION 11-15 ───────────────────────────────────────────────────────
  {
    id: 16, session: 11, week: 6, month: "June", title: "Aller — gehen (je vais, tu vas...)", emoji: "🟢",
    grammarTip: {
      title: "ALLER = gehen — und die nahe Zukunft!",
      explanation: "Das Verb aller (gehen) ist unregelmaessig. Superpower: aller + Infinitiv = nahe Zukunft! Je vais manger = Ich werde essen. Genau wie going to auf Englisch!",
      examples: ["je vais (ich gehe)", "tu vas (du gehst)", "il/elle va (er/sie geht)", "Je vais manger. (Ich werde essen)", "Nous allons jouer. (Wir werden spielen)"],
    },
    vocab: [
      { fr: "je vais", en: "ich gehe" },
      { fr: "tu vas", en: "du gehst" },
      { fr: "il/elle va", en: "er/sie geht" },
      { fr: "nous allons", en: "wir gehen" },
      { fr: "vous allez", en: "ihr geht" },
      { fr: "ils/elles vont", en: "sie gehen" },
    ],
    quiz: [
      { q: "Wie sagt man 'ich gehe'?", a: "je vais", choices: ["je vas","je vais","je va","je vont"] },
      { q: "Wie sagt man 'du gehst'?", a: "tu vas", choices: ["tu vais","tu vas","tu va","tu vont"] },
      { q: "Wie sagt man 'er geht'?", a: "il va", choices: ["il vais","il vas","il va","il vont"] },
      { q: "Wie sagt man 'wir gehen'?", a: "nous allons", choices: ["nous vas","nous allez","nous vont","nous allons"] },
      { q: "Wie sagt man 'sie gehen' (Plural)?", a: "ils vont", choices: ["ils vais","ils vas","ils va","ils vont"] },
      { q: "Was bedeutet 'Je vais manger'?", a: "Ich werde essen", choices: ["Ich esse","Ich werde essen","Ich bin essen","Ich habe gegessen"] },
      { q: "Ergaenze: 'Tu ___ a l'ecole.'", a: "vas", choices: ["vais","vas","va","vont"] },
      { q: "Was bedeutet 'Nous allons jouer'?", a: "Wir werden spielen", choices: ["Wir spielen","Wir werden spielen","Wir haben gespielt","Wir gehen spielen"] },
      { q: "Ergaenze: 'Il ___ manger une pomme.'", a: "va", choices: ["vais","vas","va","vont"] },
      { q: "Wie sagt man 'ihr geht'?", a: "vous allez", choices: ["vous vais","vous allons","vous allez","vous vont"] },
    ],
    fillBlanks: [
      { sentence: "Je ___ a l'ecole. (Ich gehe zur Schule)", answer: "vais", hint: "je → vais" },
      { sentence: "Il ___ jouer au foot. (Er wird Fussball spielen)", answer: "va", hint: "il → va + Infinitiv" },
      { sentence: "Nous ___ manger. (Wir werden essen)", answer: "allons", hint: "nous → allons" },
    ],
    reading: {
      passage: "Demain je vais a l'ecole. Mon ami va jouer au foot. Nous allons manger une pizza. Ma soeur va lire un livre. Vous allez bien ?",
      translation: "Morgen gehe ich zur Schule. Mein Freund wird Fussball spielen. Wir werden eine Pizza essen. Meine Schwester wird ein Buch lesen. Geht es euch gut?",
      questions: [
        { q: "Wohin geht das Kind morgen?", a: "Zur Schule", choices: ["Zum Sport","Zur Schule","Nach Hause","In den Park"] },
        { q: "Was wird der Freund machen?", a: "Fussball spielen", choices: ["Ein Buch lesen","Pizza essen","Fussball spielen","Schlafen"] },
        { q: "Was wird die Schwester machen?", a: "Ein Buch lesen", choices: ["Pizza essen","Schlafen","Fussball spielen","Ein Buch lesen"] },
      ],
    },
    homework: [
      "Schreibe alle 6 Formen von ALLER auswendig: je vais, tu vas... ✏️",
      "Mache 4 Saetze mit 'je vais + Infinitiv' (nahe Zukunft) 📝",
      "Schreibe eine Tabelle mit ETRE, AVOIR und ALLER — alle 6 Formen! 📊",
    ],
  },
  {
    id: 17, session: 11, week: 6, month: "June", title: "Aimer, Adorer, Detester", emoji: "❤️",
    grammarTip: {
      title: "Aimer = moegen / Adorer = lieben / Detester = hassen",
      explanation: "Diese drei Verben folgen dem regulaeren Muster. Aimer → j'aime, tu aimes, il aime, nous aimons, vous aimez, ils aiment. Nach diesen Verben benutzt man les fuer den Plural!",
      examples: ["J'aime les chats. (Ich mag Katzen)", "Tu adores le chocolat. (Du liebst Schokolade)", "Il deteste les epinards. (Er hasst Spinat)"],
    },
    vocab: [
      { fr: "j'aime", en: "ich mag" },
      { fr: "tu aimes", en: "du magst" },
      { fr: "il/elle aime", en: "er/sie mag" },
      { fr: "j'adore", en: "ich liebe" },
      { fr: "je deteste", en: "ich hasse" },
      { fr: "nous aimons", en: "wir moegen" },
    ],
    quiz: [
      { q: "Wie sagt man 'ich mag'?", a: "j'aime", choices: ["je aime","j'aime","j'aimes","j'aimons"] },
      { q: "Wie sagt man 'du magst'?", a: "tu aimes", choices: ["tu aime","tu aimes","tu aimons","tu aimez"] },
      { q: "Wie sagt man 'er mag'?", a: "il aime", choices: ["il aimes","il aime","il aimons","il aimez"] },
      { q: "Wie sagt man 'ich liebe'?", a: "j'adore", choices: ["je adore","j'adore","j'adores","j'adorons"] },
      { q: "Wie sagt man 'ich hasse'?", a: "je deteste", choices: ["je detestes","je detestons","je deteste","j'deteste"] },
      { q: "Welcher Artikel kommt nach aimer + Plural?", a: "les", choices: ["des","les","du","de la"] },
      { q: "Was bedeutet 'Tu adores le chocolat'?", a: "Du liebst Schokolade", choices: ["Du magst Schokolade","Du hasst Schokolade","Du liebst Schokolade","Ich liebe Schokolade"] },
      { q: "Ergaenze: 'Nous ___ les vacances.'", a: "aimons", choices: ["aime","aimes","aimons","aimez"] },
      { q: "Was bedeutet 'Je deteste les epinards'?", a: "Ich hasse Spinat", choices: ["Ich mag Spinat","Ich liebe Spinat","Ich hasse Spinat","Ich esse Spinat"] },
      { q: "Wie sagt man 'Sie moegen Musik' (ils)?", a: "Ils aiment la musique", choices: ["Ils aimes la musique","Ils aiment la musique","Ils aimons la musique","Ils aimez la musique"] },
    ],
    fillBlanks: [
      { sentence: "J'___ les chiens. (Ich mag Hunde)", answer: "aime", hint: "je → j'aime" },
      { sentence: "Tu ___ le chocolat. (Du liebst Schokolade)", answer: "adores", hint: "tu adores" },
      { sentence: "Nous ___ les vacances.", answer: "aimons", hint: "nous → aimons" },
    ],
    reading: {
      passage: "J'aime les animaux. J'adore les chiens mais je deteste les araignees ! Ma soeur aime la musique. Nous aimons les vacances ensemble.",
      translation: "Ich mag Tiere. Ich liebe Hunde, aber ich hasse Spinnen! Meine Schwester mag Musik. Wir moegen zusammen Ferien.",
      questions: [
        { q: "Was liebt das Kind?", a: "Hunde", choices: ["Spinnen","Musik","Hunde","Ferien"] },
        { q: "Was hasst das Kind?", a: "Spinnen", choices: ["Hunde","Tiere","Musik","Spinnen"] },
        { q: "Was mag die Schwester?", a: "Musik", choices: ["Hunde","Spinnen","Musik","Ferien"] },
      ],
    },
    homework: [
      "Konjugiere AIMER fuer alle 6 Personen in dein Heft ✏️",
      "Schreibe je 2 Saetze mit j'aime, j'adore und je deteste 📝",
      "Schreibe einen kurzen Text: Was magst du? Was liebst du? Was hasst du? 🖊️",
    ],
  },
  {
    id: 18, session: 12, week: 6, month: "June", title: "Liaisons — A E I O U", emoji: "🔗",
    grammarTip: {
      title: "Liaison — Verbindung vor Vokalen (A E I O U)",
      explanation: "Wenn ein Wort mit A, E, I, O oder U beginnt, verbinden sich manche Woerter damit. 'le/la' + Vokal wird zu 'l''. 'je' + 'ai' wird zu 'j'ai'. 'ne' + 'ai' wird zu 'n'ai'. Das nennt man Elision.",
      examples: ["je + ai → j'ai (nicht: je ai)", "ne + ai → n'ai pas (nicht: ne ai pas)", "le + ecole → l'ecole", "la + amie → l'amie"],
    },
    vocab: [
      { fr: "l'ecole", en: "die Schule (l' vor Vokal)" },
      { fr: "l'ami / l'amie", en: "der Freund / die Freundin" },
      { fr: "j'ai", en: "ich habe (je + ai)" },
      { fr: "n'ai pas", en: "habe nicht (ne + ai)" },
      { fr: "l'eau", en: "das Wasser (l' vor Vokal)" },
      { fr: "j'adore", en: "ich liebe (je + adore)" },
    ],
    quiz: [
      { q: "Wie schreibt man 'je + ai' zusammen?", a: "j'ai", choices: ["je ai","j'ai","ja'i","jai"] },
      { q: "Wie schreibt man 'le + ecole'?", a: "l'ecole", choices: ["le ecole","l'ecole","la ecole","les ecole"] },
      { q: "Wie schreibt man 'la + amie'?", a: "l'amie", choices: ["la amie","l'amie","le amie","les amie"] },
      { q: "Wie schreibt man 'ne + ai + pas'?", a: "n'ai pas", choices: ["ne ai pas","n'ai pas","n'aipas","ne'ai pas"] },
      { q: "Welche Buchstaben loesen Elision aus?", a: "A, E, I, O, U", choices: ["Nur A","A und E","A, E, I, O, U","Alle Buchstaben"] },
      { q: "Wie schreibt man 'le + eau'?", a: "l'eau", choices: ["le eau","l'eau","la eau","les eau"] },
      { q: "Was bedeutet Elision?", a: "Ein Vokal faellt weg und wird durch Apostroph ersetzt", choices: ["Ein Wort verschwindet","Ein Vokal faellt weg und wird durch Apostroph ersetzt","Zwei Woerter werden zu einem","Ein Konsonant faellt weg"] },
      { q: "Wie schreibt man 'je + adore'?", a: "j'adore", choices: ["je adore","j'adore","j'adores","jadore"] },
      { q: "Wie schreibt man 'la + orange'?", a: "l'orange", choices: ["la orange","l'orange","le orange","une orange"] },
      { q: "Wie schreibt man 'ne + est + pas'?", a: "n'est pas", choices: ["ne est pas","n'est pas","n'estpas","ne'est pas"] },
    ],
    fillBlanks: [
      { sentence: "Je vais a ___ecole. (Ich gehe zur Schule)", answer: "l'", hint: "le/la + Vokal = l'" },
      { sentence: "J'ai un ___. Das Wort beginnt mit Vokal — was ist das Wort?", answer: "ami", hint: "ami beginnt mit Vokal a" },
      { sentence: "Je n'___ pas de stylo.", answer: "ai", hint: "n'ai pas (Elision)" },
    ],
    reading: {
      passage: "J'aime l'ecole ! J'ai une amie qui s'appelle Emma. Elle adore l'eau et les oranges. Je n'ai pas l'adresse de mon ami Lucas.",
      translation: "Ich mag die Schule! Ich habe eine Freundin namens Emma. Sie liebt Wasser und Orangen. Ich habe nicht die Adresse meines Freundes Lucas.",
      questions: [
        { q: "Wie heisst die Freundin?", a: "Emma", choices: ["Lucas","Marie","Emma","Sophie"] },
        { q: "Was liebt Emma?", a: "Wasser und Orangen", choices: ["Schule und Freunde","Wasser und Orangen","Musik und Sport","Buecher und Tiere"] },
        { q: "Was hat das Kind nicht?", a: "Die Adresse von Lucas", choices: ["Einen Freund","Die Adresse von Lucas","Eine Schule","Orangen"] },
      ],
    },
    homework: [
      "Schreibe 5 Woerter mit l' (vor Vokal): l'ecole, l'ami... ✏️",
      "Schreibe 4 Saetze mit Elision: j'ai, j'adore, j'aime, n'ai pas 📝",
      "Uebe laut zu lesen — hoere auf die Verbindungen zwischen den Woertern 🗣️",
    ],
  },

  // ── JUNE SESSION 12 (cont.) ───────────────────────────────────────────────────
  {
    id: 22, session: 12, week: 6, month: "June", title: "Verbes en -ER: parler, jouer…", emoji: "🗣️",
    grammarTip: {
      title: "Regelmäßige -ER Verben",
      explanation: "Die meisten französischen Verben enden auf -ER und folgen demselben Muster. Stamm = Infinitiv minus -ER. Endungen: -e, -es, -e, -ons, -ez, -ent. Beispiel: parler → je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent.",
      examples: ["je parle (ich spreche)", "tu joues (du spielst)", "il mange (er isst)", "nous habitons (wir wohnen)"],
    },
    vocab: [
      { fr: "parler", en: "sprechen" },
      { fr: "jouer", en: "spielen" },
      { fr: "manger", en: "essen" },
      { fr: "habiter", en: "wohnen" },
      { fr: "regarder", en: "anschauen" },
      { fr: "travailler", en: "arbeiten / lernen" },
    ],
    quiz: [
      { q: "Wie konjugiert man 'parler' mit 'je'?", a: "je parle", choices: ["je parles","je parle","je parlons","je parlez"] },
      { q: "Wie konjugiert man 'jouer' mit 'tu'?", a: "tu joues", choices: ["tu joue","tu joues","tu jouons","tu jouez"] },
      { q: "Wie konjugiert man 'manger' mit 'il'?", a: "il mange", choices: ["il manges","il mangeons","il mange","il mangez"] },
      { q: "Wie konjugiert man 'habiter' mit 'nous'?", a: "nous habitons", choices: ["nous habitez","nous habite","nous habitons","nous habitent"] },
      { q: "Wie konjugiert man 'regarder' mit 'ils'?", a: "ils regardent", choices: ["ils regarde","ils regardes","ils regardons","ils regardent"] },
      { q: "Was bedeutet 'travailler'?", a: "arbeiten / lernen", choices: ["spielen","sprechen","arbeiten / lernen","wohnen"] },
      { q: "Welche Endung hat 'vous' bei -ER Verben?", a: "-ez", choices: ["-e","-es","-ez","-ent"] },
      { q: "Was ist der Stamm von 'parler'?", a: "parl-", choices: ["parle-","parl-","parlé-","parler-"] },
      { q: "Wie sagt man 'wir spielen'?", a: "nous jouons", choices: ["nous joues","nous joue","nous jouons","nous jouez"] },
      { q: "Wie sagt man 'ihr schaut'?", a: "vous regardez", choices: ["vous regarde","vous regardes","vous regardez","vous regardent"] },
    ],
    fillBlanks: [
      { sentence: "Je ___ le foot avec mes amis. (Ich spiele Fußball mit meinen Freunden)", answer: "joue", hint: "jouer → je joue" },
      { sentence: "Tu ___ français très bien ! (Du sprichst sehr gut Französisch!)", answer: "parles", hint: "parler → tu parles" },
      { sentence: "Nous ___ à Paris. (Wir wohnen in Paris)", answer: "habitons", hint: "habiter → nous habitons" },
    ],
    reading: {
      passage: "Je parle français et allemand. Je joue au foot le weekend. Mon père travaille dans un bureau. Nous habitons à Berlin. Ma sœur regarde des films le soir.",
      translation: "Ich spreche Französisch und Deutsch. Ich spiele am Wochenende Fußball. Mein Vater arbeitet in einem Büro. Wir wohnen in Berlin. Meine Schwester schaut abends Filme.",
      questions: [
        { q: "Welche Sprachen spricht das Kind?", a: "Französisch und Deutsch", choices: ["Nur Französisch","Französisch und Englisch","Französisch und Deutsch","Nur Deutsch"] },
        { q: "Was macht das Kind am Wochenende?", a: "Fußball spielen", choices: ["Filme schauen","Lernen","Fußball spielen","Lesen"] },
        { q: "Wo wohnt die Familie?", a: "In Berlin", choices: ["In Paris","In London","In Wien","In Berlin"] },
      ],
    },
    homework: [
      "Konjugiere PARLER und JOUER komplett — alle 6 Formen ✏️",
      "Schreibe 6 Sätze mit verschiedenen -ER Verben 📝",
      "Lerne 5 -ER Verben auswendig: parler, jouer, manger, habiter, regarder 📚",
    ],
  },

  // ── JUNE SESSION 13 (Week 7) ──────────────────────────────────────────────────
  {
    id: 23, session: 13, week: 7, month: "June", title: "Les questions — Fragewörter", emoji: "❓",
    grammarTip: {
      title: "Fragewörter auf Französisch",
      explanation: "Mit Fragewörtern stellt man Fragen. Die wichtigsten: Où = wo, Quand = wann, Comment = wie, Pourquoi = warum, Qui = wer, Qu'est-ce que c'est = Was ist das? Man kann auch einfach die Stimme heben: Tu aimes le foot? ↗",
      examples: ["Où habites-tu? (Wo wohnst du?)", "Comment tu t'appelles? (Wie heißt du?)", "Pourquoi tu ris? (Warum lachst du?)"],
    },
    vocab: [
      { fr: "Où ?", en: "Wo?" },
      { fr: "Quand ?", en: "Wann?" },
      { fr: "Comment ?", en: "Wie?" },
      { fr: "Pourquoi ?", en: "Warum?" },
      { fr: "Qui ?", en: "Wer?" },
      { fr: "Qu'est-ce que c'est ?", en: "Was ist das?" },
    ],
    quiz: [
      { q: "Was bedeutet 'Où'?", a: "Wo?", choices: ["Wann?","Wie?","Wo?","Wer?"] },
      { q: "Wie sagt man 'Wann'?", a: "Quand", choices: ["Où","Quand","Comment","Qui"] },
      { q: "Was bedeutet 'Pourquoi'?", a: "Warum?", choices: ["Wo?","Wann?","Wie?","Warum?"] },
      { q: "Wie fragt man 'Wie heißt du?'?", a: "Comment tu t'appelles?", choices: ["Où tu t'appelles?","Qui tu t'appelles?","Comment tu t'appelles?","Quand tu t'appelles?"] },
      { q: "Was bedeutet 'Qui'?", a: "Wer?", choices: ["Was?","Wer?","Wo?","Wie?"] },
      { q: "Wie fragt man 'Was ist das?'?", a: "Qu'est-ce que c'est?", choices: ["Qui est-ce?","Où est-ce?","Qu'est-ce que c'est?","Comment est-ce?"] },
      { q: "Wie sagt man 'Warum lernst du Französisch?'?", a: "Pourquoi tu apprends le français?", choices: ["Quand tu apprends le français?","Pourquoi tu apprends le français?","Où tu apprends le français?","Qui tu apprends le français?"] },
      { q: "Was bedeutet 'Comment'?", a: "Wie?", choices: ["Wann?","Wo?","Wer?","Wie?"] },
      { q: "Wie fragt man 'Wo wohnst du?'?", a: "Où habites-tu?", choices: ["Quand habites-tu?","Comment habites-tu?","Où habites-tu?","Qui habites-tu?"] },
      { q: "Wie fragt man 'Wann hast du Geburtstag?'?", a: "Quand est ton anniversaire?", choices: ["Où est ton anniversaire?","Pourquoi est ton anniversaire?","Quand est ton anniversaire?","Comment est ton anniversaire?"] },
    ],
    fillBlanks: [
      { sentence: "___ habites-tu? (Wo wohnst du?)", answer: "Où", hint: "Fragewort für Ort" },
      { sentence: "___ tu t'appelles? (Wie heißt du?)", answer: "Comment", hint: "Fragewort für Art und Weise" },
      { sentence: "___ est ton professeur? (Wer ist dein Lehrer?)", answer: "Qui", hint: "Fragewort für Personen" },
    ],
    reading: {
      passage: "— Comment tu t'appelles? — Je m'appelle David. — Où habites-tu? — J'habite à Berlin. — Pourquoi tu apprends le français? — Parce que c'est super !",
      translation: "— Wie heißt du? — Ich heiße David. — Wo wohnst du? — Ich wohne in Berlin. — Warum lernst du Französisch? — Weil es toll ist!",
      questions: [
        { q: "Wie heißt das Kind?", a: "David", choices: ["Lucas","Marie","David","Sophie"] },
        { q: "Wo wohnt David?", a: "In Berlin", choices: ["In Paris","In London","In Berlin","In Wien"] },
        { q: "Warum lernt David Französisch?", a: "Weil es toll ist", choices: ["Weil es schwer ist","Weil er muss","Weil es toll ist","Weil seine Freunde es lernen"] },
      ],
    },
    homework: [
      "Lerne alle 6 Fragewörter auswendig: où, quand, comment, pourquoi, qui, qu'est-ce que ✏️",
      "Schreibe 6 Fragen — eine für jedes Fragewort 📝",
      "Frage jemanden zu Hause 3 Fragen auf Französisch 🗣️",
    ],
  },
  {
    id: 24, session: 13, week: 7, month: "June", title: "La maison — Das Haus", emoji: "🏠",
    grammarTip: {
      title: "Räume im Haus — le/la vor Zimmernamen",
      explanation: "Jedes Zimmer hat einen Artikel. 'Dans' bedeutet 'in'. Man sagt 'Je suis dans la cuisine' (Ich bin in der Küche). Merke: l'entrée, le salon, la cuisine, la chambre, la salle de bain, les toilettes.",
      examples: ["Je suis dans le salon. (Ich bin im Wohnzimmer)", "Il dort dans sa chambre. (Er schläft in seinem Zimmer)", "Nous mangeons dans la cuisine. (Wir essen in der Küche)"],
    },
    vocab: [
      { fr: "le salon", en: "das Wohnzimmer" },
      { fr: "la cuisine", en: "die Küche" },
      { fr: "la chambre", en: "das Schlafzimmer" },
      { fr: "la salle de bain", en: "das Badezimmer" },
      { fr: "le jardin", en: "der Garten" },
      { fr: "l'entrée", en: "der Eingang / Flur" },
    ],
    quiz: [
      { q: "Was ist 'le salon'?", a: "das Wohnzimmer", choices: ["die Küche","das Wohnzimmer","das Badezimmer","der Garten"] },
      { q: "Wie sagt man 'die Küche'?", a: "la cuisine", choices: ["le salon","la chambre","la cuisine","le jardin"] },
      { q: "Was bedeutet 'la chambre'?", a: "das Schlafzimmer", choices: ["das Badezimmer","der Garten","die Küche","das Schlafzimmer"] },
      { q: "Wie sagt man 'das Badezimmer'?", a: "la salle de bain", choices: ["la chambre","le salon","la salle de bain","l'entrée"] },
      { q: "Was ist 'le jardin'?", a: "der Garten", choices: ["die Küche","der Flur","das Zimmer","der Garten"] },
      { q: "Wie sagt man 'Ich bin im Wohnzimmer'?", a: "Je suis dans le salon", choices: ["Je suis dans la chambre","Je suis dans le salon","Je suis dans la cuisine","Je suis dans le jardin"] },
      { q: "Was bedeutet 'dans'?", a: "in", choices: ["auf","unter","in","neben"] },
      { q: "Wie sagt man 'Er ist in der Küche'?", a: "Il est dans la cuisine", choices: ["Il est dans le salon","Il est dans la chambre","Il est dans la cuisine","Il est dans le jardin"] },
      { q: "Was ist 'l'entrée'?", a: "der Eingang / Flur", choices: ["das Wohnzimmer","die Küche","der Eingang / Flur","das Badezimmer"] },
      { q: "Wie sagt man 'Wir spielen im Garten'?", a: "Nous jouons dans le jardin", choices: ["Nous jouons dans le salon","Nous jouons dans la cuisine","Nous jouons dans le jardin","Nous jouons dans la chambre"] },
    ],
    fillBlanks: [
      { sentence: "Je mange dans la ___. (Ich esse in der Küche)", answer: "cuisine", hint: "Zimmer zum Kochen" },
      { sentence: "Je dors dans ma ___. (Ich schlafe in meinem Schlafzimmer)", answer: "chambre", hint: "Zimmer zum Schlafen" },
      { sentence: "On regarde la télé dans le ___. (Wir schauen TV im Wohnzimmer)", answer: "salon", hint: "Hauptwohnraum" },
    ],
    reading: {
      passage: "Ma maison a six pièces. Il y a le salon, la cuisine, deux chambres, la salle de bain et les toilettes. J'adore le jardin ! Je joue dans le jardin et je mange dans la cuisine avec ma famille.",
      translation: "Mein Haus hat sechs Zimmer. Es gibt das Wohnzimmer, die Küche, zwei Schlafzimmer, das Badezimmer und die Toilette. Ich liebe den Garten! Ich spiele im Garten und esse mit meiner Familie in der Küche.",
      questions: [
        { q: "Wie viele Zimmer hat das Haus?", a: "6", choices: ["4","5","6","7"] },
        { q: "Was macht das Kind im Garten?", a: "Es spielt", choices: ["Es schläft","Es isst","Es spielt","Es lernt"] },
        { q: "Wo isst die Familie?", a: "In der Küche", choices: ["Im Wohnzimmer","Im Garten","In der Küche","Im Schlafzimmer"] },
      ],
    },
    homework: [
      "Zeichne dein Haus und beschrifte alle Zimmer auf Französisch 🏠",
      "Schreibe 6 Sätze: 'Je ___ dans le/la ___' — was machst du in welchem Zimmer? ✏️",
      "Lerne alle Zimmernamen auswendig 📚",
    ],
  },

  // ── JUNE SESSION 14 (Week 7) ──────────────────────────────────────────────────
  {
    id: 25, session: 14, week: 7, month: "June", title: "La météo — Das Wetter", emoji: "🌤️",
    grammarTip: {
      title: "Wetter auf Französisch: Il fait / Il y a / Il pleut",
      explanation: "Für das Wetter benutzt man: 'Il fait + Adjektiv' (Es ist...), 'Il y a + Nomen' (Es gibt...) oder besondere Verben wie 'Il pleut' (Es regnet) und 'Il neige' (Es schneit). 'Il' bezieht sich auf das Wetter, nicht auf eine Person!",
      examples: ["Il fait beau. (Es ist schönes Wetter)", "Il y a du soleil. (Es ist sonnig)", "Il pleut. (Es regnet)", "Il neige ! (Es schneit!)"],
    },
    vocab: [
      { fr: "Il fait beau", en: "Es ist schönes Wetter" },
      { fr: "Il fait mauvais", en: "Es ist schlechtes Wetter" },
      { fr: "Il pleut", en: "Es regnet" },
      { fr: "Il neige", en: "Es schneit" },
      { fr: "Il fait chaud / froid", en: "Es ist heiß / kalt" },
      { fr: "Il y a du soleil", en: "Es ist sonnig" },
    ],
    quiz: [
      { q: "Was bedeutet 'Il fait beau'?", a: "Es ist schönes Wetter", choices: ["Es regnet","Es schneit","Es ist schönes Wetter","Es ist kalt"] },
      { q: "Wie sagt man 'Es regnet'?", a: "Il pleut", choices: ["Il neige","Il fait beau","Il pleut","Il fait froid"] },
      { q: "Was bedeutet 'Il neige'?", a: "Es schneit", choices: ["Es regnet","Es schneit","Es ist kalt","Es ist warm"] },
      { q: "Wie sagt man 'Es ist heiß'?", a: "Il fait chaud", choices: ["Il fait froid","Il fait beau","Il fait chaud","Il pleut"] },
      { q: "Was bedeutet 'Il y a du soleil'?", a: "Es ist sonnig", choices: ["Es regnet","Es ist bewölkt","Es ist sonnig","Es ist windig"] },
      { q: "Wie sagt man 'Es ist schlechtes Wetter'?", a: "Il fait mauvais", choices: ["Il fait beau","Il fait mauvais","Il fait froid","Il pleut"] },
      { q: "Welches Verb benutzt man für 'Es regnet'?", a: "pleuvoir (Il pleut)", choices: ["faire","avoir","pleuvoir (Il pleut)","aller"] },
      { q: "Wie sagt man 'Es ist kalt'?", a: "Il fait froid", choices: ["Il fait chaud","Il neige","Il fait froid","Il pleut"] },
      { q: "Was fragt man mit 'Quel temps fait-il?'?", a: "Wie ist das Wetter?", choices: ["Wie heißt du?","Wo wohnst du?","Wie ist das Wetter?","Wann ist es?"] },
      { q: "Wie sagt man 'Im Winter schneit es oft'?", a: "En hiver, il neige souvent", choices: ["En été, il neige souvent","En hiver, il fait beau","En hiver, il neige souvent","Au printemps, il neige"] },
    ],
    fillBlanks: [
      { sentence: "Il ___ aujourd'hui — je prends mon parapluie. (Es regnet heute)", answer: "pleut", hint: "Regen-Verb" },
      { sentence: "Il fait ___ — je mets un manteau. (Es ist kalt — ich ziehe einen Mantel an)", answer: "froid", hint: "kalt = froid" },
      { sentence: "Il ___ du soleil — allons au parc ! (Es ist sonnig — lass uns in den Park gehen!)", answer: "y a", hint: "Il y a du soleil" },
    ],
    reading: {
      passage: "Aujourd'hui il fait beau et il y a du soleil. En été il fait chaud. En hiver il fait froid et il neige souvent. Au printemps il pleut parfois. Quel temps fait-il chez toi ?",
      translation: "Heute ist schönes Wetter und es ist sonnig. Im Sommer ist es heiß. Im Winter ist es kalt und es schneit oft. Im Frühling regnet es manchmal. Wie ist das Wetter bei dir?",
      questions: [
        { q: "Wie ist das Wetter heute?", a: "Schön und sonnig", choices: ["Es regnet","Es schneit","Schön und sonnig","Kalt und bewölkt"] },
        { q: "Wann schneit es oft?", a: "Im Winter", choices: ["Im Sommer","Im Herbst","Im Frühling","Im Winter"] },
        { q: "Was passiert im Frühling manchmal?", a: "Es regnet", choices: ["Es schneit","Es ist sehr heiß","Es regnet","Es stürmt"] },
      ],
    },
    homework: [
      "Schaue jeden Tag diese Woche aus dem Fenster und beschreibe das Wetter auf Französisch 🌦️",
      "Schreibe 5 Sätze über das Wetter in verschiedenen Jahreszeiten ✏️",
      "Lerne: il fait beau/mauvais/chaud/froid, il pleut, il neige, il y a du soleil 📚",
    ],
  },
  {
    id: 26, session: 14, week: 7, month: "June", title: "Les sports et loisirs", emoji: "⚽",
    grammarTip: {
      title: "Jouer À vs. Faire DE",
      explanation: "Bei Sport und Hobbys unterscheidet man: 'Jouer à' benutzt man für Spiele und Mannschaftssportarten. 'Faire de' benutzt man für andere Sportarten und Aktivitäten. Jouer AU foot (à + le = au), faire DU vélo (de + le = du).",
      examples: ["Je joue au foot. (Ich spiele Fußball — jouer à)", "Je fais du vélo. (Ich fahre Fahrrad — faire de)", "Tu joues aux échecs? (Spielst du Schach? — jouer à + Plural)"],
    },
    vocab: [
      { fr: "jouer au foot", en: "Fußball spielen" },
      { fr: "faire du vélo", en: "Fahrrad fahren" },
      { fr: "faire de la natation", en: "schwimmen" },
      { fr: "écouter de la musique", en: "Musik hören" },
      { fr: "lire un livre", en: "ein Buch lesen" },
      { fr: "jouer aux jeux vidéo", en: "Videospiele spielen" },
    ],
    quiz: [
      { q: "Was bedeutet 'jouer au foot'?", a: "Fußball spielen", choices: ["Basketball spielen","Fußball spielen","Tennis spielen","Schwimmen"] },
      { q: "Wie sagt man 'Fahrrad fahren'?", a: "faire du vélo", choices: ["jouer au vélo","faire du vélo","jouer du vélo","faire au vélo"] },
      { q: "Was benutzt man für Mannschaftssport?", a: "jouer à", choices: ["faire de","jouer à","aller à","avoir de"] },
      { q: "Wie sagt man 'Ich schwimme'?", a: "Je fais de la natation", choices: ["Je joue à la natation","Je fais de la natation","Je vais à la natation","J'ai de la natation"] },
      { q: "Was bedeutet 'écouter de la musique'?", a: "Musik hören", choices: ["Musik spielen","Musik singen","Musik hören","Musik kaufen"] },
      { q: "Wie sagt man 'Er spielt Videospiele'?", a: "Il joue aux jeux vidéo", choices: ["Il fait des jeux vidéo","Il joue au jeu vidéo","Il joue aux jeux vidéo","Il va aux jeux vidéo"] },
      { q: "Was benutzt man für 'faire de' + maskulines Nomen?", a: "du (de + le)", choices: ["de la","du (de + le)","des","de l'"] },
      { q: "Was bedeutet 'lire un livre'?", a: "ein Buch lesen", choices: ["ein Buch kaufen","ein Buch schreiben","ein Buch lesen","ein Buch verschenken"] },
      { q: "Wie sagt man 'Wir spielen Tennis'?", a: "Nous jouons au tennis", choices: ["Nous faisons du tennis","Nous jouons au tennis","Nous allons au tennis","Nous avons du tennis"] },
      { q: "Wie sagt man 'Mein Hobby ist Musik hören'?", a: "Mon hobby c'est écouter de la musique", choices: ["Mon hobby c'est jouer de la musique","Mon hobby c'est écouter du musique","Mon hobby c'est écouter de la musique","Mon hobby c'est faire de la musique"] },
    ],
    fillBlanks: [
      { sentence: "Je joue ___ foot avec mes amis le weekend.", answer: "au", hint: "jouer à + le = au" },
      { sentence: "Elle fait ___ natation tous les jours. (Sie schwimmt jeden Tag)", answer: "de la", hint: "faire de + la (feminin)" },
      { sentence: "Le soir, j'aime ___ un livre. (Abends lese ich gerne ein Buch)", answer: "lire", hint: "Infinitiv = lire" },
    ],
    reading: {
      passage: "J'adore le sport ! Le lundi je joue au foot avec mes amis. Le mercredi je fais de la natation. Le weekend, j'écoute de la musique et je lis des livres. Mon sport préféré c'est le foot !",
      translation: "Ich liebe Sport! Montags spiele ich Fußball mit meinen Freunden. Mittwochs schwimme ich. Am Wochenende höre ich Musik und lese Bücher. Mein Lieblingssport ist Fußball!",
      questions: [
        { q: "Was macht das Kind montags?", a: "Fußball spielen", choices: ["Schwimmen","Fahrrad fahren","Fußball spielen","Lesen"] },
        { q: "Was macht das Kind mittwochs?", a: "Schwimmen", choices: ["Fußball spielen","Lesen","Musik hören","Schwimmen"] },
        { q: "Was ist das Lieblingsaktivität des Kindes?", a: "Fußball", choices: ["Schwimmen","Lesen","Musik hören","Fußball"] },
      ],
    },
    homework: [
      "Schreibe deinen Wochenplan auf Französisch: Was machst du wann? 📅",
      "Übe: jouer AU (foot, tennis, basket) und faire DU/DE LA (vélo, natation) ✏️",
      "Erkläre jemandem zu Hause 3 Hobbys auf Französisch 🗣️",
    ],
  },

  // ── JUNE REVIEW (Session 15, Week 8) ─────────────────────────────────────────
  {
    id: 27, session: 15, week: 8, month: "June", title: "Juni — Große Wiederholung", emoji: "🔄", isReview: true,
    grammarTip: {
      title: "Juni — Alles auf einen Blick!",
      explanation: "Im Juni hast du gelernt: ALLER (gehen + Zukunft), AIMER/ADORER/DETESTER, Liaisons (l'/j'/n'), -ER Verben konjugieren, Fragewörter, Zimmer im Haus, Wetterbeschreibungen und Sports/Hobbys. Sehr viel — super gemacht!",
      examples: ["je vais / tu vas — ALLER", "jouer AU foot / faire DU vélo — Sport", "Où? Quand? Comment? — Fragewörter"],
    },
    vocab: [
      { fr: "Je vais à l'école", en: "Ich gehe zur Schule" },
      { fr: "J'adore / Je déteste", en: "Ich liebe / Ich hasse" },
      { fr: "je parle / tu joues", en: "-ER Verben (ich spreche / du spielst)" },
      { fr: "Où ? / Comment ?", en: "Wo? / Wie? (Fragewörter)" },
      { fr: "le salon / la cuisine", en: "das Wohnzimmer / die Küche" },
      { fr: "Il fait beau / Il pleut", en: "Schönes Wetter / Es regnet" },
    ],
    quiz: [
      { q: "Wie sagt man 'ich gehe'?", a: "je vais", choices: ["je vas","je vais","je va","je vont"] },
      { q: "Was bedeutet 'J'adore les chiens'?", a: "Ich liebe Hunde", choices: ["Ich mag Hunde","Ich hasse Hunde","Ich liebe Hunde","Ich habe Hunde"] },
      { q: "Wie schreibt man 'le + école'?", a: "l'école", choices: ["le école","l'école","la école","les école"] },
      { q: "Wie konjugiert man 'parler' mit 'nous'?", a: "nous parlons", choices: ["nous parle","nous parlez","nous parlons","nous parlent"] },
      { q: "Was bedeutet 'Pourquoi'?", a: "Warum?", choices: ["Wo?","Wann?","Wie?","Warum?"] },
      { q: "Wie sagt man 'das Badezimmer'?", a: "la salle de bain", choices: ["la chambre","le salon","la salle de bain","la cuisine"] },
      { q: "Was bedeutet 'Il neige'?", a: "Es schneit", choices: ["Es regnet","Es schneit","Es ist kalt","Es ist bewölkt"] },
      { q: "Wie sagt man 'Fußball spielen'?", a: "jouer au foot", choices: ["faire du foot","jouer du foot","jouer au foot","faire au foot"] },
      { q: "Was bedeutet 'Nous allons manger'?", a: "Wir werden essen", choices: ["Wir essen","Wir werden essen","Wir haben gegessen","Wir mögen essen"] },
      { q: "Wie fragt man 'Wo wohnst du?'", a: "Où habites-tu?", choices: ["Quand habites-tu?","Comment habites-tu?","Où habites-tu?","Qui habites-tu?"] },
    ],
    fillBlanks: [
      { sentence: "Je ___ au foot le weekend. (Ich spiele Fußball am Wochenende)", answer: "joue", hint: "jouer → je joue" },
      { sentence: "Il fait ___ — allons au parc! (Schönes Wetter!)", answer: "beau", hint: "schönes Wetter = il fait beau" },
      { sentence: "Je vais ___ l'école demain. (Ich gehe morgen zur Schule)", answer: "à", hint: "aller à l'école" },
    ],
    reading: {
      passage: "Bonjour ! Je m'appelle David. J'habite à Berlin. Aujourd'hui il fait beau. Je vais jouer au foot avec mes amis. Nous habitons près d'un grand parc. J'adore le sport !",
      translation: "Hallo! Ich heiße David. Ich wohne in Berlin. Heute ist schönes Wetter. Ich werde mit meinen Freunden Fußball spielen. Wir wohnen in der Nähe eines großen Parks. Ich liebe Sport!",
      questions: [
        { q: "Wo wohnt David?", a: "In Berlin", choices: ["In Paris","In Wien","In Berlin","In London"] },
        { q: "Wie ist das Wetter heute?", a: "Schön", choices: ["Regnerisch","Kalt","Schön","Windig"] },
        { q: "Was wird David machen?", a: "Fußball spielen", choices: ["Schwimmen","Lesen","Fußball spielen","Fahrrad fahren"] },
      ],
    },
    homework: [
      "Schreibe eine kleine Geschichte auf Französisch — benutze Verben aus Juni! ✏️",
      "Wiederhole: ALLER konjugieren + nahe Zukunft (je vais + Infinitiv) 📝",
      "Beschreibe das Wetter dieser Woche jeden Tag auf Französisch 🌦️",
    ],
  },

  // ── JULY: SESSIONS 16-20 ──────────────────────────────────────────────────────
  {
    id: 28, session: 16, week: 8, month: "July", title: "La ville — Die Stadt", emoji: "🏙️",
    grammarTip: {
      title: "À la / Au / Aux — in/an einem Ort",
      explanation: "'À' bedeutet 'an/in/bei'. Vor maskulinen Nomen: à + le = AU. Vor femininen: à la. Vor Vokalen: à l'. Man sagt: Je vais AU supermarché, je vais À LA boulangerie, je vais À L'école.",
      examples: ["Je vais au supermarché. (Ich gehe in den Supermarkt)", "Je vais à la boulangerie. (Ich gehe in die Bäckerei)", "Je vais à l'école. (Ich gehe zur Schule)"],
    },
    vocab: [
      { fr: "la boulangerie", en: "die Bäckerei" },
      { fr: "le supermarché", en: "der Supermarkt" },
      { fr: "la bibliothèque", en: "die Bibliothek" },
      { fr: "la gare", en: "der Bahnhof" },
      { fr: "le parc", en: "der Park" },
      { fr: "la piscine", en: "das Schwimmbad" },
    ],
    quiz: [
      { q: "Was ist 'la boulangerie'?", a: "die Bäckerei", choices: ["der Supermarkt","die Bibliothek","die Bäckerei","der Bahnhof"] },
      { q: "Wie sagt man 'der Supermarkt'?", a: "le supermarché", choices: ["la boulangerie","le supermarché","la gare","le parc"] },
      { q: "Was bedeutet 'la bibliothèque'?", a: "die Bibliothek", choices: ["die Bäckerei","das Schwimmbad","die Bibliothek","der Park"] },
      { q: "Wie sagt man 'Ich gehe in den Supermarkt'?", a: "Je vais au supermarché", choices: ["Je vais à le supermarché","Je vais au supermarché","Je vais à la supermarché","Je vais au supermarché"] },
      { q: "Was ist 'la piscine'?", a: "das Schwimmbad", choices: ["der Park","die Bäckerei","der Bahnhof","das Schwimmbad"] },
      { q: "Wie lautet 'à + le'?", a: "au", choices: ["à le","al","au","à"] },
      { q: "Wie sagt man 'Ich gehe zur Bibliothek'?", a: "Je vais à la bibliothèque", choices: ["Je vais au bibliothèque","Je vais à la bibliothèque","Je vais aux bibliothèque","Je vais à bibliothèque"] },
      { q: "Was ist 'la gare'?", a: "der Bahnhof", choices: ["der Park","das Schwimmbad","die Bäckerei","der Bahnhof"] },
      { q: "Wie sagt man 'Er geht in den Park'?", a: "Il va au parc", choices: ["Il va à le parc","Il va au parc","Il va à la parc","Il va du parc"] },
      { q: "Wie sagt man 'Wir gehen zum Bahnhof'?", a: "Nous allons à la gare", choices: ["Nous allons au gare","Nous allons à la gare","Nous allons à le gare","Nous allons aux gare"] },
    ],
    fillBlanks: [
      { sentence: "Je vais ___ supermarché acheter du pain. (Ich gehe in den Supermarkt)", answer: "au", hint: "à + le = au" },
      { sentence: "Elle va ___ piscine le jeudi. (Sie geht donnerstags ins Schwimmbad)", answer: "à la", hint: "à + la (feminin)" },
      { sentence: "Nous allons ___ bibliothèque après l'école.", answer: "à la", hint: "feminin → à la" },
    ],
    reading: {
      passage: "Dans ma ville il y a une grande boulangerie, un supermarché et une bibliothèque. Le weekend je vais au parc avec ma famille. Il y a aussi une piscine — j'y vais le mercredi !",
      translation: "In meiner Stadt gibt es eine große Bäckerei, einen Supermarkt und eine Bibliothek. Am Wochenende gehe ich mit meiner Familie in den Park. Es gibt auch ein Schwimmbad — ich gehe mittwochs dort hin!",
      questions: [
        { q: "Was gibt es in der Stadt?", a: "Eine Bäckerei, einen Supermarkt und eine Bibliothek", choices: ["Nur einen Supermarkt","Eine Bäckerei und eine Schule","Eine Bäckerei, einen Supermarkt und eine Bibliothek","Nur einen Park"] },
        { q: "Wohin geht das Kind am Wochenende?", a: "In den Park", choices: ["Zur Bibliothek","In den Supermarkt","Ins Schwimmbad","In den Park"] },
        { q: "Wann geht das Kind ins Schwimmbad?", a: "Mittwochs", choices: ["Montags","Dienstags","Mittwochs","Donnerstags"] },
      ],
    },
    homework: [
      "Schreibe 6 Sätze: 'Je vais au/à la ___' für Orte in deiner Stadt ✏️",
      "Lerne: au (mask.) / à la (fem.) / à l' (Vokal) auswendig 📝",
      "Zeichne eine Stadtkarte und beschrifte alle Orte auf Französisch 🗺️",
    ],
  },
  {
    id: 29, session: 16, week: 8, month: "July", title: "Les directions — Der Weg", emoji: "🗺️",
    grammarTip: {
      title: "Wegbeschreibung auf Französisch",
      explanation: "Um den Weg zu beschreiben benutzt man: Tournez à gauche/droite (Biegen Sie links/rechts ab), Allez tout droit (Gehen Sie geradeaus), Prenez la première rue (Nehmen Sie die erste Straße). Man benutzt den Imperativ (Befehlsform)!",
      examples: ["Tournez à gauche. (Biegen Sie links ab)", "Allez tout droit. (Gehen Sie geradeaus)", "C'est à droite. (Es ist rechts)"],
    },
    vocab: [
      { fr: "à gauche", en: "links" },
      { fr: "à droite", en: "rechts" },
      { fr: "tout droit", en: "geradeaus" },
      { fr: "tournez !", en: "biegen Sie ab!" },
      { fr: "C'est loin ?", en: "Ist es weit?" },
      { fr: "C'est près d'ici", en: "Es ist in der Nähe" },
    ],
    quiz: [
      { q: "Was bedeutet 'à gauche'?", a: "links", choices: ["rechts","geradeaus","links","zurück"] },
      { q: "Wie sagt man 'rechts'?", a: "à droite", choices: ["à gauche","tout droit","à droite","en arrière"] },
      { q: "Was bedeutet 'tout droit'?", a: "geradeaus", choices: ["links","rechts","geradeaus","zurück"] },
      { q: "Wie fragt man 'Ist es weit?'?", a: "C'est loin?", choices: ["C'est près?","C'est loin?","C'est où?","C'est grand?"] },
      { q: "Was bedeutet 'Tournez à droite'?", a: "Biegen Sie rechts ab", choices: ["Gehen Sie geradeaus","Biegen Sie links ab","Biegen Sie rechts ab","Gehen Sie zurück"] },
      { q: "Wie sagt man 'Es ist in der Nähe'?", a: "C'est près d'ici", choices: ["C'est loin","C'est ici","C'est près d'ici","C'est là-bas"] },
      { q: "Was bedeutet 'Prenez la première rue à gauche'?", a: "Nehmen Sie die erste Straße links", choices: ["Gehen Sie geradeaus","Nehmen Sie die erste Straße links","Biegen Sie rechts ab","Nehmen Sie die zweite Straße"] },
      { q: "Wie sagt man 'Gehen Sie geradeaus'?", a: "Allez tout droit", choices: ["Tournez tout droit","Allez à gauche","Allez tout droit","Prenez tout droit"] },
      { q: "Was bedeutet 'C'est là-bas'?", a: "Es ist dort drüben", choices: ["Es ist hier","Es ist nah","Es ist weit","Es ist dort drüben"] },
      { q: "Wie fragt man 'Wo ist die Bäckerei?'?", a: "Où est la boulangerie?", choices: ["Comment est la boulangerie?","Qui est la boulangerie?","Où est la boulangerie?","Quand est la boulangerie?"] },
    ],
    fillBlanks: [
      { sentence: "Tournez à ___ au feu rouge. (Biegen Sie an der roten Ampel links ab)", answer: "gauche", hint: "links = gauche" },
      { sentence: "Allez tout ___ pendant 200 mètres. (Gehen Sie 200 Meter geradeaus)", answer: "droit", hint: "geradeaus = tout droit" },
      { sentence: "La boulangerie, c'est ___ ? — Non, c'est très proche ! (Ist die Bäckerei weit weg?)", answer: "loin", hint: "weit = loin" },
    ],
    reading: {
      passage: "— Excusez-moi, où est la gare? — Allez tout droit, puis tournez à gauche. C'est la deuxième rue à droite. — C'est loin? — Non, c'est à cinq minutes à pied. — Merci beaucoup !",
      translation: "— Entschuldigung, wo ist der Bahnhof? — Gehen Sie geradeaus, dann biegen Sie links ab. Es ist die zweite Straße rechts. — Ist es weit? — Nein, es ist fünf Minuten zu Fuß. — Vielen Dank!",
      questions: [
        { q: "Wohin fragt die Person den Weg?", a: "Zum Bahnhof", choices: ["Zur Bäckerei","Zum Supermarkt","Zum Bahnhof","Zur Schule"] },
        { q: "In welche Richtung zuerst?", a: "Geradeaus", choices: ["Links","Rechts","Geradeaus","Zurück"] },
        { q: "Wie lange dauert der Weg zu Fuß?", a: "5 Minuten", choices: ["2 Minuten","5 Minuten","10 Minuten","15 Minuten"] },
      ],
    },
    homework: [
      "Schreibe den Weg von deiner Schule nach Hause auf Französisch 🏫",
      "Lerne: à gauche, à droite, tout droit, tournez auswendig ✏️",
      "Erkläre jemandem zu Hause den Weg zu einem Ort in der Nähe — auf Französisch! 🗣️",
    ],
  },
  {
    id: 30, session: 17, week: 9, month: "July", title: "Vouloir — wollen", emoji: "🙋",
    grammarTip: {
      title: "VOULOIR = wollen — ein unregelmäßiges Verb",
      explanation: "Vouloir (wollen) ist unregelmäßig. Je veux, tu veux, il veut sind ähnlich — aber nous voulons und vous voulez haben einen anderen Stamm! Nach vouloir benutzt man den Infinitiv: Je veux manger (Ich will essen).",
      examples: ["je veux (ich will)", "tu veux (du willst)", "il/elle veut (er/sie will)", "nous voulons (wir wollen)", "Je veux du chocolat! (Ich will Schokolade!)"],
    },
    vocab: [
      { fr: "je veux", en: "ich will" },
      { fr: "tu veux", en: "du willst" },
      { fr: "il/elle veut", en: "er/sie will" },
      { fr: "nous voulons", en: "wir wollen" },
      { fr: "vous voulez", en: "ihr wollt" },
      { fr: "ils/elles veulent", en: "sie wollen" },
    ],
    quiz: [
      { q: "Wie sagt man 'ich will'?", a: "je veux", choices: ["je veut","je veux","je voulez","je voulons"] },
      { q: "Wie sagt man 'du willst'?", a: "tu veux", choices: ["tu veut","tu veux","tu voulez","tu voulons"] },
      { q: "Wie sagt man 'er will'?", a: "il veut", choices: ["il veux","il veut","il voulez","il voulons"] },
      { q: "Wie sagt man 'wir wollen'?", a: "nous voulons", choices: ["nous veux","nous voulez","nous voulons","nous veulent"] },
      { q: "Wie sagt man 'ihr wollt'?", a: "vous voulez", choices: ["vous veux","vous veut","vous voulons","vous voulez"] },
      { q: "Wie sagt man 'sie wollen' (Plural)?", a: "ils veulent", choices: ["ils veux","ils veut","ils voulons","ils veulent"] },
      { q: "Ergänze: 'Je ___ manger une pizza.'", a: "veux", choices: ["veut","veux","voulez","voulons"] },
      { q: "Was bedeutet 'Tu veux du chocolat?'", a: "Willst du Schokolade?", choices: ["Du hast Schokolade?","Willst du Schokolade?","Magst du Schokolade?","Hast du Schokolade?"] },
      { q: "Wie sagt man 'Sie wollen Fußball spielen' (ils)?", a: "Ils veulent jouer au foot", choices: ["Ils veux jouer au foot","Ils veut jouer au foot","Ils veulent jouer au foot","Ils voulez jouer au foot"] },
      { q: "Ergänze: 'Nous ___ aller au parc.'", a: "voulons", choices: ["veux","veut","voulons","voulez"] },
    ],
    fillBlanks: [
      { sentence: "Je ___ un coca, s'il vous plaît. (Ich möchte eine Cola, bitte)", answer: "veux", hint: "je → veux" },
      { sentence: "Qu'est-ce que tu ___ faire ce soir? (Was willst du heute Abend machen?)", answer: "veux", hint: "tu → veux" },
      { sentence: "Nous ___ aller à la piscine. (Wir wollen ins Schwimmbad gehen)", answer: "voulons", hint: "nous → voulons" },
    ],
    reading: {
      passage: "— Qu'est-ce que tu veux manger? — Je veux une pizza! — Et vous, vous voulez quoi? — Nous voulons des pâtes. Tout le monde veut quelque chose de différent !",
      translation: "— Was willst du essen? — Ich will eine Pizza! — Und ihr, was wollt ihr? — Wir wollen Nudeln. Alle wollen etwas Verschiedenes!",
      questions: [
        { q: "Was will das Kind essen?", a: "Eine Pizza", choices: ["Nudeln","Suppe","Eine Pizza","Brot"] },
        { q: "Was wollen die anderen?", a: "Nudeln", choices: ["Pizza","Suppe","Nudeln","Reis"] },
        { q: "Was bedeutet 'Qu'est-ce que tu veux?'", a: "Was willst du?", choices: ["Was hast du?","Was bist du?","Was willst du?","Was magst du?"] },
      ],
    },
    homework: [
      "Schreibe alle 6 Formen von VOULOIR auswendig ✏️",
      "Mache 6 Sätze mit VOULOIR + Infinitiv: 'Je veux ___' 📝",
      "Vergleiche VOULOIR und ALLER — schreibe eine Tabelle 📊",
    ],
  },
  {
    id: 31, session: 17, week: 9, month: "July", title: "Pouvoir — können", emoji: "💪",
    grammarTip: {
      title: "POUVOIR = können — ähnlich wie VOULOIR",
      explanation: "Pouvoir (können/dürfen) ist ähnlich unregelmäßig wie vouloir. Je peux, tu peux, il peut — dann nous pouvons, vous pouvez. Nach pouvoir kommt immer der Infinitiv: Je peux venir (Ich kann kommen). Auch höflich: Est-ce que je peux...? (Darf ich...?)",
      examples: ["je peux (ich kann)", "tu peux (du kannst)", "il/elle peut (er/sie kann)", "Puis-je...? (Darf ich...? — formell)", "Je ne peux pas venir. (Ich kann nicht kommen)"],
    },
    vocab: [
      { fr: "je peux", en: "ich kann" },
      { fr: "tu peux", en: "du kannst" },
      { fr: "il/elle peut", en: "er/sie kann" },
      { fr: "nous pouvons", en: "wir können" },
      { fr: "vous pouvez", en: "ihr könnt" },
      { fr: "ils/elles peuvent", en: "sie können" },
    ],
    quiz: [
      { q: "Wie sagt man 'ich kann'?", a: "je peux", choices: ["je peut","je peux","je pouvons","je pouvez"] },
      { q: "Wie sagt man 'du kannst'?", a: "tu peux", choices: ["tu peut","tu peux","tu pouvons","tu pouvez"] },
      { q: "Wie sagt man 'er kann'?", a: "il peut", choices: ["il peux","il peut","il pouvons","il pouvez"] },
      { q: "Wie sagt man 'wir können'?", a: "nous pouvons", choices: ["nous peux","nous pouvez","nous pouvons","nous peuvent"] },
      { q: "Wie sagt man 'ihr könnt'?", a: "vous pouvez", choices: ["vous peux","vous peut","vous pouvons","vous pouvez"] },
      { q: "Ergänze: 'Je ___ parler français!'", a: "peux", choices: ["peut","peux","pouvons","pouvez"] },
      { q: "Was bedeutet 'Je ne peux pas venir'?", a: "Ich kann nicht kommen", choices: ["Ich will nicht kommen","Ich kann nicht kommen","Ich gehe nicht kommen","Ich muss nicht kommen"] },
      { q: "Wie fragt man höflich 'Darf ich...?'?", a: "Est-ce que je peux...?", choices: ["Est-ce que je veux...?","Est-ce que je peux...?","Est-ce que je dois...?","Est-ce que je vais...?"] },
      { q: "Was bedeutet 'Tu peux m'aider?'", a: "Kannst du mir helfen?", choices: ["Willst du mir helfen?","Kannst du mir helfen?","Gehst du mir helfen?","Magst du mir helfen?"] },
      { q: "Ergänze: 'Ils ___ jouer au foot maintenant.'", a: "peuvent", choices: ["peux","peut","pouvons","peuvent"] },
    ],
    fillBlanks: [
      { sentence: "Je ___ parler français ! (Ich kann Französisch sprechen!)", answer: "peux", hint: "je → peux" },
      { sentence: "Est-ce que tu ___ venir ce soir? (Kannst du heute Abend kommen?)", answer: "peux", hint: "tu → peux" },
      { sentence: "Nous ___ aller au cinéma demain. (Wir können morgen ins Kino gehen)", answer: "pouvons", hint: "nous → pouvons" },
    ],
    reading: {
      passage: "Est-ce que je peux aller jouer dehors, maman? — Tu peux sortir si tu finis tes devoirs. — D'accord ! Je peux finir en dix minutes ! Mon ami Lucas peut venir aussi ?",
      translation: "Darf ich draußen spielen gehen, Mama? — Du kannst rausgehen, wenn du deine Hausaufgaben fertig machst. — OK! Ich kann in zehn Minuten fertig sein! Kann mein Freund Lucas auch kommen?",
      questions: [
        { q: "Was fragt das Kind?", a: "Ob es draußen spielen darf", choices: ["Ob es essen darf","Ob es TV schauen darf","Ob es draußen spielen darf","Ob es ins Bett gehen muss"] },
        { q: "Was muss das Kind zuerst machen?", a: "Hausaufgaben machen", choices: ["Zimmer aufräumen","Hausaufgaben machen","Essen","Schlafen"] },
        { q: "Wer soll noch kommen?", a: "Sein Freund Lucas", choices: ["Seine Schwester","Sein Bruder","Sein Freund Lucas","Seine Lehrerin"] },
      ],
    },
    homework: [
      "Schreibe alle 6 Formen von POUVOIR auswendig ✏️",
      "Mache 5 Sätze mit POUVOIR: Was kannst du? Was kannst du nicht? 📝",
      "Vergleiche VOULOIR und POUVOIR in einer Tabelle — was ist ähnlich? 📊",
    ],
  },
  {
    id: 32, session: 18, week: 9, month: "July", title: "Les vêtements — Kleidung", emoji: "👕",
    grammarTip: {
      title: "Porter vs. Mettre — tragen vs. anziehen",
      explanation: "'Porter' bedeutet 'tragen' (etwas, das man schon an hat). 'Mettre' bedeutet 'anziehen' (etwas anlegen). Je porte un t-shirt (Ich trage ein T-Shirt). Je mets un manteau (Ich ziehe einen Mantel an). Farbadjektive kommen nach dem Kleidungsstück!",
      examples: ["Je porte un t-shirt rouge. (Ich trage ein rotes T-Shirt)", "Je mets mon manteau. (Ich ziehe meinen Mantel an)", "Elle porte une robe bleue. (Sie trägt ein blaues Kleid)"],
    },
    vocab: [
      { fr: "un t-shirt", en: "ein T-Shirt" },
      { fr: "un pantalon", en: "eine Hose" },
      { fr: "une robe", en: "ein Kleid" },
      { fr: "des chaussures", en: "Schuhe" },
      { fr: "un manteau", en: "ein Mantel" },
      { fr: "un chapeau", en: "ein Hut" },
    ],
    quiz: [
      { q: "Was ist 'un pantalon'?", a: "eine Hose", choices: ["ein T-Shirt","ein Kleid","eine Hose","ein Mantel"] },
      { q: "Wie sagt man 'ein Kleid'?", a: "une robe", choices: ["un t-shirt","une robe","un manteau","un chapeau"] },
      { q: "Was bedeutet 'des chaussures'?", a: "Schuhe", choices: ["Socken","Schuhe","Handschuhe","Hüte"] },
      { q: "Wie sagt man 'ein Mantel'?", a: "un manteau", choices: ["un chapeau","une robe","un manteau","un t-shirt"] },
      { q: "Was ist 'un chapeau'?", a: "ein Hut", choices: ["eine Mütze","ein Hut","eine Jacke","ein Schal"] },
      { q: "Wie sagt man 'Ich trage ein rotes T-Shirt'?", a: "Je porte un t-shirt rouge", choices: ["Je mets un t-shirt rouge","Je porte un t-shirt rouge","Je mange un t-shirt rouge","Je veux un t-shirt rouge"] },
      { q: "Was bedeutet 'porter'?", a: "tragen", choices: ["anziehen","tragen","kaufen","waschen"] },
      { q: "Was bedeutet 'mettre'?", a: "anziehen", choices: ["tragen","waschen","anziehen","kaufen"] },
      { q: "Wie sagt man 'Sie trägt ein blaues Kleid'?", a: "Elle porte une robe bleue", choices: ["Elle porte une robe bleu","Elle porte un robe bleue","Elle porte une robe bleue","Elle met une robe bleue"] },
      { q: "Wie sagt man 'Ich ziehe meine Schuhe an'?", a: "Je mets mes chaussures", choices: ["Je porte mes chaussures","Je veux mes chaussures","Je mets mes chaussures","Je mets des chaussures"] },
    ],
    fillBlanks: [
      { sentence: "Je porte un ___ blanc et un pantalon noir. (Ich trage ein weißes T-Shirt)", answer: "t-shirt", hint: "oberstes Kleidungsstück" },
      { sentence: "Il fait froid — je ___ mon manteau. (Es ist kalt — ich ziehe meinen Mantel an)", answer: "mets", hint: "anziehen = mettre → je mets" },
      { sentence: "Elle porte une ___ rouge pour la fête. (Sie trägt ein rotes Kleid zur Feier)", answer: "robe", hint: "Kleidungsstück für Mädchen" },
    ],
    reading: {
      passage: "Aujourd'hui je porte un t-shirt bleu et un pantalon noir. Il fait froid, alors je mets aussi mon manteau gris. Ma sœur porte une belle robe rose et des chaussures blanches. Nous allons à une fête !",
      translation: "Heute trage ich ein blaues T-Shirt und eine schwarze Hose. Es ist kalt, also ziehe ich auch meinen grauen Mantel an. Meine Schwester trägt ein schönes rosafarbenes Kleid und weiße Schuhe. Wir gehen zu einer Party!",
      questions: [
        { q: "Was trägt das Kind?", a: "Ein blaues T-Shirt und eine schwarze Hose", choices: ["Ein rotes T-Shirt","Ein blaues T-Shirt und eine schwarze Hose","Nur einen Mantel","Eine Hose und ein Kleid"] },
        { q: "Warum zieht das Kind den Mantel an?", a: "Weil es kalt ist", choices: ["Weil es regnet","Weil es kalt ist","Weil es zur Schule geht","Weil der Mantel schön ist"] },
        { q: "Wohin gehen sie?", a: "Zu einer Party", choices: ["Zur Schule","In den Park","Zu einer Party","In den Supermarkt"] },
      ],
    },
    homework: [
      "Beschreibe, was du heute trägst, auf Französisch ✏️",
      "Schreibe 5 Sätze: 'Je porte un/une ___' mit Farbadjektiven 👗",
      "Lerne: porter = tragen vs. mettre = anziehen 📚",
    ],
  },
  {
    id: 33, session: 18, week: 9, month: "July", title: "Les saisons et les mois", emoji: "📅",
    grammarTip: {
      title: "Jahreszeiten: EN hiver/été/automne, AU printemps",
      explanation: "Für Jahreszeiten benutzt man 'en': en hiver (im Winter), en été (im Sommer), en automne (im Herbst) — aber 'au printemps' (im Frühling)! Monate haben keinen Artikel: en janvier, en février... Beide werden klein geschrieben!",
      examples: ["en hiver — im Winter", "au printemps — im Frühling", "en juillet — im Juli", "Mon anniversaire est en avril. (Mein Geburtstag ist im April)"],
    },
    vocab: [
      { fr: "le printemps", en: "der Frühling" },
      { fr: "l'été", en: "der Sommer" },
      { fr: "l'automne", en: "der Herbst" },
      { fr: "l'hiver", en: "der Winter" },
      { fr: "janvier / février / mars", en: "Januar / Februar / März" },
      { fr: "avril / mai / juin", en: "April / Mai / Juni" },
    ],
    quiz: [
      { q: "Wie sagt man 'der Sommer'?", a: "l'été", choices: ["le printemps","l'été","l'automne","l'hiver"] },
      { q: "Wie sagt man 'im Winter'?", a: "en hiver", choices: ["au hiver","en hiver","dans hiver","le hiver"] },
      { q: "Was ist die Ausnahme bei den Jahreszeiten?", a: "au printemps (nicht en)", choices: ["en été","en automne","au printemps (nicht en)","en hiver"] },
      { q: "Wie sagt man 'im April'?", a: "en avril", choices: ["au avril","en avril","dans avril","le avril"] },
      { q: "Was kommt nach Juni?", a: "juillet (Juli)", choices: ["mai","juin","juillet (Juli)","août"] },
      { q: "Wie sagt man 'der Herbst'?", a: "l'automne", choices: ["le printemps","l'été","l'automne","l'hiver"] },
      { q: "Was bedeutet 'Mon anniversaire est en mars'?", a: "Mein Geburtstag ist im März", choices: ["Mein Geburtstag ist im Mai","Mein Geburtstag ist im März","Ich bin im März geboren","Ich feiere im März"] },
      { q: "Welcher Monat kommt vor März?", a: "février (Februar)", choices: ["janvier","février (Februar)","avril","mai"] },
      { q: "In welcher Jahreszeit ist es in Deutschland oft sehr kalt?", a: "en hiver", choices: ["en été","au printemps","en automne","en hiver"] },
      { q: "Wie sagt man 'Im Sommer fahren wir ans Meer'?", a: "En été nous allons à la mer", choices: ["Au été nous allons à la mer","En été nous allons à la mer","Dans été nous allons à la mer","L'été nous allons à la mer"] },
    ],
    fillBlanks: [
      { sentence: "Mon anniversaire est ___ mai. (Mein Geburtstag ist im Mai)", answer: "en", hint: "Monate: en + Monat" },
      { sentence: "___ printemps, les fleurs poussent. (Im Frühling wachsen die Blumen)", answer: "Au", hint: "Ausnahme: au printemps!" },
      { sentence: "J'adore ___ hiver parce qu'il neige. (Ich liebe den Winter, weil es schneit)", answer: "l'", hint: "Artikel vor hiver (Vokal!)" },
    ],
    reading: {
      passage: "Ma saison préférée est l'été parce qu'il fait chaud et nous allons à la piscine. En hiver j'aime la neige. Mon anniversaire est en juillet — c'est en été ! Au printemps il y a de belles fleurs.",
      translation: "Meine Lieblingsjahreszeit ist der Sommer, weil es warm ist und wir ins Schwimmbad gehen. Im Winter mag ich den Schnee. Mein Geburtstag ist im Juli — das ist im Sommer! Im Frühling gibt es schöne Blumen.",
      questions: [
        { q: "Was ist die Lieblingsjahreszeit?", a: "Der Sommer", choices: ["Der Winter","Der Herbst","Der Frühling","Der Sommer"] },
        { q: "Wann ist der Geburtstag?", a: "Im Juli", choices: ["Im Juni","Im August","Im Juli","Im Mai"] },
        { q: "Was mag das Kind im Winter?", a: "Den Schnee", choices: ["Die Wärme","Das Schwimmbad","Den Schnee","Die Blumen"] },
      ],
    },
    homework: [
      "Lerne alle 12 Monate auf Französisch auswendig ✏️",
      "Lerne die 4 Jahreszeiten + Präpositionen: en été, en hiver, en automne, AU printemps 📝",
      "Schreibe: In welchem Monat bist du geboren? Was ist deine Lieblingsjahreszeit? 🗓️",
    ],
  },

  // ── SESSION 19 ── July continued (Week 10)
  {
    id: 34, session: 19, week: 10, month: "July", title: "Les nombres 100–1000", emoji: "💯",
    grammarTip: {
      title: "Große Zahlen auf Französisch",
      explanation: "Für Zahlen 100+ sagt man 'cent' (100), 'deux cents' (200), 'mille' (1000). Achtung: 'cents' bekommt ein -s nur wenn keine weitere Zahl folgt! 200 = deux cents, aber 201 = deux cent un.",
      examples: ["cent = 100", "deux cents = 200", "deux cent un = 201", "mille = 1000"],
    },
    vocab: [
      { fr: "cent", en: "100" }, { fr: "deux cents", en: "200" }, { fr: "trois cents", en: "300" },
      { fr: "quatre cents", en: "400" }, { fr: "cinq cents", en: "500" },
      { fr: "mille", en: "1000" }, { fr: "un million", en: "1 Million" },
      { fr: "combien ça coûte ?", en: "Wie viel kostet das?" },
    ],
    quiz: [
      { q: "Wie sagt man '100'?", a: "cent", choices: ["cent","mille","deux cents","cinquante"] },
      { q: "Was bedeutet 'mille'?", a: "1000", choices: ["100","200","1000","500"] },
      { q: "Wie sagt man '200'?", a: "deux cents", choices: ["cent deux","deux cents","vingt","deux cent"] },
      { q: "Was fragt man mit 'Combien ça coûte'?", a: "Wie viel kostet das?", choices: ["Wie spät ist es?","Wie viel kostet das?","Wie weit ist es?","Wie viele?"] },
      { q: "Wie sagt man '500'?", a: "cinq cents", choices: ["cinq cent","cinq cents","cinq mille","cent cinq"] },
    ],
    fillBlanks: [
      { sentence: "Il y a ___ élèves dans l'école. (Es gibt 100 Schüler)", answer: "cent", hint: "100" },
      { sentence: "___ ça coûte? (Wie viel kostet das?)", answer: "Combien", hint: "Fragewort für Menge" },
      { sentence: "Mon père a ___ ans. (Mein Vater ist 50)", answer: "cinquante", hint: "50" },
    ],
    reading: {
      passage: "Au magasin, David voit un vélo. Il demande : 'Combien ça coûte ?' Le vendeur dit : 'Cinq cents euros !' David dit : 'C'est trop cher !'",
      translation: "Im Laden sieht David ein Fahrrad. Er fragt: 'Wie viel kostet das?' Der Verkäufer sagt: 'Fünfhundert Euro!' David sagt: 'Das ist zu teuer!'",
      questions: [
        { q: "Was sieht David im Laden?", a: "Ein Fahrrad", choices: ["Ein Auto","Ein Fahrrad","Ein Buch","Eine Uhr"] },
        { q: "Wie viel kostet das Fahrrad?", a: "500 Euro", choices: ["100 Euro","200 Euro","500 Euro","1000 Euro"] },
        { q: "Was sagt David?", a: "Das ist zu teuer!", choices: ["Das ist billig!","Das ist schön!","Das ist zu teuer!","Ich nehme es!"] },
      ],
    },
    homework: [
      "Schreibe die Zahlen 100, 200, 300, 400, 500, 1000 auf Französisch ✏️",
      "Frage zu Hause: 'Combien ça coûte?' und nenne Preise auf Französisch 🛒",
      "Zähle auf Französisch in 100er-Schritten: cent, deux cents, trois cents... 🔢",
    ],
  },
  {
    id: 35, session: 19, week: 10, month: "July", title: "Les transports — Verkehrsmittel", emoji: "🚂",
    grammarTip: {
      title: "Preposition 'en' oder 'à' mit Verkehrsmitteln",
      explanation: "Mit Fahrzeugen, die man besteigt ('ein-/aussteigen'), benutzt man 'en': en voiture, en bus, en train. Mit Fahrzeugen, die man reitet/fährt (Zweiräder), benutzt man 'à': à vélo, à pied (zu Fuß).",
      examples: ["Je vais en bus. (Ich fahre mit dem Bus)", "Je vais à vélo. (Ich fahre mit dem Rad)", "Je vais à pied. (Ich gehe zu Fuß)", "On part en train. (Wir fahren mit dem Zug)"],
    },
    vocab: [
      { fr: "le bus", en: "der Bus" }, { fr: "le train", en: "der Zug" },
      { fr: "la voiture", en: "das Auto" }, { fr: "le vélo", en: "das Fahrrad" },
      { fr: "l'avion", en: "das Flugzeug" }, { fr: "le métro", en: "die U-Bahn" },
      { fr: "à pied", en: "zu Fuß" }, { fr: "la gare", en: "der Bahnhof" },
    ],
    quiz: [
      { q: "Wie sagt man 'der Zug'?", a: "le train", choices: ["le bus","le train","la voiture","le vélo"] },
      { q: "Was bedeutet 'à pied'?", a: "zu Fuß", choices: ["mit dem Auto","mit dem Bus","zu Fuß","mit dem Zug"] },
      { q: "Wie fährt man 'en voiture'?", a: "Mit dem Auto", choices: ["Mit dem Bus","Mit dem Zug","Mit dem Fahrrad","Mit dem Auto"] },
      { q: "Was bedeutet 'la gare'?", a: "der Bahnhof", choices: ["der Flughafen","der Bahnhof","die Bushaltestelle","die U-Bahn"] },
      { q: "Wie sagt man 'das Flugzeug'?", a: "l'avion", choices: ["le bus","le train","l'avion","le vélo"] },
    ],
    fillBlanks: [
      { sentence: "Je vais à l'école ___ bus. (Ich fahre mit dem Bus)", answer: "en", hint: "Präposition für Fahrzeuge" },
      { sentence: "Elle va ___ vélo au parc. (Sie fährt mit dem Rad)", answer: "à", hint: "Präposition für Zweiräder" },
      { sentence: "On prend le ___ à Paris. (Wir nehmen die U-Bahn)", answer: "métro", hint: "Unterirdisches Verkehrsmittel" },
    ],
    reading: {
      passage: "Aujourd'hui, David va à l'école en bus. Sa mère va au travail en voiture. Son père prend le train. Sa sœur va à pied — elle habite tout près !",
      translation: "Heute fährt David mit dem Bus zur Schule. Seine Mutter fährt mit dem Auto zur Arbeit. Sein Vater nimmt den Zug. Seine Schwester geht zu Fuß — sie wohnt ganz in der Nähe!",
      questions: [
        { q: "Wie fährt David zur Schule?", a: "Mit dem Bus", choices: ["Zu Fuß","Mit dem Zug","Mit dem Bus","Mit dem Auto"] },
        { q: "Womit fährt die Mutter?", a: "Mit dem Auto", choices: ["Mit dem Bus","Mit dem Auto","Mit dem Zug","Mit dem Fahrrad"] },
        { q: "Warum geht die Schwester zu Fuß?", a: "Sie wohnt ganz in der Nähe", choices: ["Sie hat kein Auto","Sie liebt laufen","Sie wohnt ganz in der Nähe","Sie hat keinen Bus"] },
      ],
    },
    homework: [
      "Schreibe 5 Sätze: Wie kommen deine Familienmitglieder zur Arbeit/Schule? (en bus, en voiture...) ✏️",
      "Lerne: en bus, en train, en voiture, à vélo, à pied — welches Verb passt? 🚌",
      "Zeichne oder male 4 Verkehrsmittel und beschrifte sie auf Französisch 🎨",
    ],
  },

  // ── JULY REVIEW (Session 20, Week 10) ────────────────────────────────────────
  {
    id: 36, session: 20, week: 10, month: "July", title: "Juli — Große Wiederholung", emoji: "🔄", isReview: true,
    grammarTip: {
      title: "Juli — Alles auf einen Blick!",
      explanation: "Im Juli hast du gelernt: Orte in der Stadt (au/à la), Wegbeschreibungen, VOULOIR (wollen), POUVOIR (können), Kleidungsstücke (porter/mettre) und Jahreszeiten & Monate. Sehr beeindruckend!",
      examples: ["Je vais au parc / à la bibliothèque — Orte", "Je veux / je peux + Infinitiv — wollen/können", "Je porte un t-shirt — Kleidung", "en été / au printemps — Jahreszeiten"],
    },
    vocab: [
      { fr: "au supermarché / à la gare", en: "im Supermarkt / am Bahnhof" },
      { fr: "à gauche / à droite / tout droit", en: "links / rechts / geradeaus" },
      { fr: "je veux / je peux", en: "ich will / ich kann" },
      { fr: "un t-shirt / une robe", en: "ein T-Shirt / ein Kleid" },
      { fr: "en hiver / au printemps", en: "im Winter / im Frühling" },
      { fr: "janvier / juillet / décembre", en: "Januar / Juli / Dezember" },
    ],
    quiz: [
      { q: "Wie sagt man 'Ich gehe in den Supermarkt'?", a: "Je vais au supermarché", choices: ["Je vais à la supermarché","Je vais au supermarché","Je vais aux supermarché","Je vais à supermarché"] },
      { q: "Was bedeutet 'à gauche'?", a: "links", choices: ["rechts","geradeaus","links","zurück"] },
      { q: "Wie sagt man 'er will'?", a: "il veut", choices: ["il veux","il veut","il voulez","il voulons"] },
      { q: "Wie sagt man 'wir können'?", a: "nous pouvons", choices: ["nous peux","nous pouvez","nous pouvons","nous peuvent"] },
      { q: "Was ist 'une robe'?", a: "ein Kleid", choices: ["ein T-Shirt","eine Hose","ein Kleid","ein Mantel"] },
      { q: "Wie sagt man 'im Sommer'?", a: "en été", choices: ["au été","en été","dans été","le été"] },
      { q: "Was ist die Ausnahme bei Jahreszeiten?", a: "au printemps", choices: ["en hiver","en été","au printemps","en automne"] },
      { q: "Wie fragt man höflich 'Darf ich...?'", a: "Est-ce que je peux...?", choices: ["Est-ce que je veux...?","Est-ce que je peux...?","Est-ce que je dois...?","Est-ce que je vais...?"] },
      { q: "Was bedeutet 'porter'?", a: "tragen", choices: ["anziehen","tragen","kaufen","waschen"] },
      { q: "Wie sagt man 'Gehen Sie geradeaus'?", a: "Allez tout droit", choices: ["Tournez tout droit","Allez à gauche","Allez tout droit","Prenez tout droit"] },
    ],
    fillBlanks: [
      { sentence: "Je ___ aller au cinéma ce soir. (Ich will heute Abend ins Kino gehen)", answer: "veux", hint: "wollen → je veux" },
      { sentence: "Tournez à ___ après le feu. (Biegen Sie nach der Ampel rechts ab)", answer: "droite", hint: "rechts = droite" },
      { sentence: "___ hiver il fait très froid en Allemagne.", answer: "En", hint: "im Winter = en hiver" },
    ],
    reading: {
      passage: "En été je veux aller à la piscine tous les jours ! Je peux y aller après l'école. Je porte un t-shirt et un short. En hiver je mets un manteau chaud. Ma ville a une grande piscine — elle est à gauche de la bibliothèque.",
      translation: "Im Sommer will ich jeden Tag ins Schwimmbad gehen! Ich kann nach der Schule dorthin gehen. Ich trage ein T-Shirt und eine kurze Hose. Im Winter ziehe ich einen warmen Mantel an. Meine Stadt hat ein großes Schwimmbad — es ist links von der Bibliothek.",
      questions: [
        { q: "Was will das Kind im Sommer machen?", a: "Ins Schwimmbad gehen", choices: ["In den Park gehen","Ins Schwimmbad gehen","In die Bibliothek gehen","Fußball spielen"] },
        { q: "Was trägt das Kind im Sommer?", a: "Ein T-Shirt und einen Short", choices: ["Einen Mantel","Ein Kleid","Ein T-Shirt und einen Short","Eine Jacke"] },
        { q: "Wo ist das Schwimmbad?", a: "Links von der Bibliothek", choices: ["Rechts von der Bibliothek","Links von der Bäckerei","Links von der Bibliothek","Geradeaus"] },
      ],
    },
    homework: [
      "Schreibe eine Mini-Geschichte über einen Tag in deiner Stadt — auf Französisch! 🏙️",
      "Wiederhole: VOULOIR und POUVOIR — alle 6 Formen ✏️",
      "Beschreibe deine Lieblingskleidung auf Französisch 👕",
    ],
  },

  // ── AUGUST: SESSIONS 21-25 ────────────────────────────────────────────────────
  {
    id: 37, session: 21, week: 10, month: "August", title: "Passé composé — Einführung", emoji: "⏰",
    grammarTip: {
      title: "Passé composé = vollendete Vergangenheit",
      explanation: "Das Passé composé ist die häufigste Vergangenheitsform im gesprochenen Französisch. Es besteht aus zwei Teilen: AVOIR (oder ÊTRE) + Partizip Perfekt. Das Partizip Perfekt von -ER Verben = Stamm + É. Beispiel: jouer → joué, manger → mangé.",
      examples: ["J'ai joué. (Ich habe gespielt)", "Tu as mangé. (Du hast gegessen)", "Il a regardé la télé. (Er hat ferngesehen)", "Nous avons parlé. (Wir haben gesprochen)"],
    },
    vocab: [
      { fr: "j'ai joué", en: "ich habe gespielt" },
      { fr: "tu as mangé", en: "du hast gegessen" },
      { fr: "il a regardé", en: "er hat geschaut" },
      { fr: "nous avons parlé", en: "wir haben gesprochen" },
      { fr: "vous avez écouté", en: "ihr habt zugehört" },
      { fr: "ils ont travaillé", en: "sie haben gearbeitet" },
    ],
    quiz: [
      { q: "Was ist das Partizip Perfekt von 'jouer'?", a: "joué", choices: ["jouais","joué","jouait","jouerait"] },
      { q: "Was ist das Partizip Perfekt von 'manger'?", a: "mangé", choices: ["mangais","mangerait","mangé","mangeait"] },
      { q: "Wie bildet man das Partizip Perfekt von -ER Verben?", a: "Stamm + É", choices: ["Stamm + E","Stamm + É","Stamm + ER","Stamm + ANT"] },
      { q: "Wie sagt man 'Ich habe gespielt'?", a: "J'ai joué", choices: ["Je joue","J'ai joué","Je jouais","Je vais jouer"] },
      { q: "Wie sagt man 'Du hast gegessen'?", a: "Tu as mangé", choices: ["Tu manges","Tu as mangé","Tu mangeais","Tu vas manger"] },
      { q: "Was bedeutet 'Il a regardé la télé'?", a: "Er hat ferngesehen", choices: ["Er schaut fern","Er hat ferngesehen","Er wird fernsehen","Er mag fernsehen"] },
      { q: "Wie sagt man 'Wir haben gesprochen'?", a: "Nous avons parlé", choices: ["Nous parlons","Nous avons parlé","Nous parlions","Nous allons parler"] },
      { q: "Welches Hilfsverb benutzt man bei -ER Verben im Passé composé?", a: "avoir", choices: ["être","avoir","aller","faire"] },
      { q: "Was ist das Partizip Perfekt von 'parler'?", a: "parlé", choices: ["parlais","parlerait","parlé","parlant"] },
      { q: "Wie sagt man 'Ihr habt zugehört'?", a: "Vous avez écouté", choices: ["Vous écoutez","Vous avez écouté","Vous écoutiez","Vous allez écouter"] },
    ],
    fillBlanks: [
      { sentence: "Hier, j'ai ___ au foot. (Gestern habe ich Fußball gespielt)", answer: "joué", hint: "jouer → joué (Partizip)" },
      { sentence: "Tu as ___ toute la pizza ! (Du hast die ganze Pizza gegessen!)", answer: "mangé", hint: "manger → mangé" },
      { sentence: "Nous avons ___ pendant deux heures. (Wir haben zwei Stunden gesprochen)", answer: "parlé", hint: "parler → parlé" },
    ],
    reading: {
      passage: "Hier c'était super ! J'ai joué au foot avec Lucas. Nous avons mangé une pizza ensemble. Ma sœur a regardé un film et elle a écouté de la musique. Le soir, j'ai travaillé sur mes devoirs.",
      translation: "Gestern war es toll! Ich habe mit Lucas Fußball gespielt. Wir haben zusammen eine Pizza gegessen. Meine Schwester hat einen Film geschaut und Musik gehört. Abends habe ich an meinen Hausaufgaben gearbeitet.",
      questions: [
        { q: "Was hat das Kind gestern gemacht?", a: "Fußball gespielt", choices: ["Einen Film geschaut","Musik gehört","Fußball gespielt","Hausaufgaben gemacht"] },
        { q: "Was haben das Kind und Lucas gegessen?", a: "Eine Pizza", choices: ["Pasta","Eine Pizza","Brot","Salat"] },
        { q: "Was hat die Schwester gemacht?", a: "Einen Film geschaut und Musik gehört", choices: ["Fußball gespielt","Pizza gegessen","Einen Film geschaut und Musik gehört","Hausaufgaben gemacht"] },
      ],
    },
    homework: [
      "Schreibe 6 Sätze im Passé composé — was hast du gestern gemacht? ✏️",
      "Lerne: Partizip Perfekt von -ER Verben = Stamm + É 📝",
      "Übe: j'ai joué, tu as mangé, il a regardé... alle 6 Personen 📊",
    ],
  },
  {
    id: 38, session: 21, week: 10, month: "August", title: "Passé composé — Verneinung & Fragen", emoji: "🚫",
    grammarTip: {
      title: "Verneinung im Passé composé: ne...pas um AVOIR",
      explanation: "Im Passé composé steht die Verneinung ne...pas um das Hilfsverb AVOIR, nicht um das Partizip. Je n'ai PAS joué (Ich habe nicht gespielt). Das Partizip kommt NACH 'pas'. Bei Fragen: As-tu joué? oder Est-ce que tu as joué?",
      examples: ["Je n'ai pas joué. (Ich habe nicht gespielt)", "Il n'a pas mangé. (Er hat nicht gegessen)", "As-tu parlé? (Hast du gesprochen?)", "Est-ce que tu as regardé? (Hast du geschaut?)"],
    },
    vocab: [
      { fr: "Je n'ai pas joué", en: "Ich habe nicht gespielt" },
      { fr: "Il n'a pas mangé", en: "Er hat nicht gegessen" },
      { fr: "As-tu joué ?", en: "Hast du gespielt?" },
      { fr: "Est-ce que tu as parlé ?", en: "Hast du gesprochen?" },
      { fr: "Oui, j'ai joué", en: "Ja, ich habe gespielt" },
      { fr: "Non, je n'ai pas joué", en: "Nein, ich habe nicht gespielt" },
    ],
    quiz: [
      { q: "Wie verneint man 'J'ai joué'?", a: "Je n'ai pas joué", choices: ["Je n'ai joué pas","Je n'ai pas joué","Je ai pas joué","Je n'ai joué"] },
      { q: "Wie fragt man 'Hast du gespielt?'", a: "As-tu joué?", choices: ["Tu as joué?","As-tu joué?","Joué-tu?","Tu joué?"] },
      { q: "Wie verneint man 'Il a mangé'?", a: "Il n'a pas mangé", choices: ["Il n'a mangé pas","Il n'a pas mangé","Il pas a mangé","Il a pas mangé"] },
      { q: "Wo steht 'ne...pas' im Passé composé?", a: "Um das Hilfsverb AVOIR", choices: ["Um das Partizip","Um das Hilfsverb AVOIR","Am Satzanfang","Am Satzende"] },
      { q: "Was bedeutet 'Avez-vous mangé?'", a: "Haben Sie gegessen?", choices: ["Haben Sie Hunger?","Mögen Sie essen?","Haben Sie gegessen?","Wollen Sie essen?"] },
      { q: "Wie antwortet man verneinend auf 'As-tu joué?'", a: "Non, je n'ai pas joué", choices: ["Non, je n'ai joué pas","Non, je pas ai joué","Non, je n'ai pas joué","Non, je n'ai joué"] },
      { q: "Wie sagt man 'Wir haben nicht gesprochen'?", a: "Nous n'avons pas parlé", choices: ["Nous n'avons parlé pas","Nous n'avons pas parlé","Nous pas avons parlé","Nous n'avons pas parler"] },
      { q: "Wie fragt man mit 'Est-ce que' + Passé composé?", a: "Est-ce que tu as joué?", choices: ["Est-ce que tu joues?","Est-ce que tu as joué?","Est-ce que tu avais joué?","Est-ce que tu joué?"] },
      { q: "Was bedeutet 'Elle n'a pas regardé la télé'?", a: "Sie hat nicht ferngesehen", choices: ["Sie schaut nicht fern","Sie hat nicht ferngesehen","Sie wird nicht fernsehen","Sie mag nicht fernsehen"] },
      { q: "Ergänze: 'Il ___ pas mangé ce matin.'", a: "n'a", choices: ["n'a","n'ai","n'avons","n'ont"] },
    ],
    fillBlanks: [
      { sentence: "Je n'ai ___ regardé la télé hier. (Ich habe gestern nicht ferngesehen)", answer: "pas", hint: "Verneinung: ne...pas" },
      { sentence: "___ tu joué au foot? (Hast du Fußball gespielt?)", answer: "As", hint: "Frage: As-tu..." },
      { sentence: "Nous n'avons pas ___ ce matin. (Wir haben heute Morgen nicht gegessen)", answer: "mangé", hint: "Partizip von manger" },
    ],
    reading: {
      passage: "— As-tu fait tes devoirs? — Non, je n'ai pas encore travaillé. — Pourquoi? — J'ai joué au foot et j'ai oublié ! — Est-ce que tu as au moins mangé? — Oui, j'ai mangé une pomme.",
      translation: "— Hast du deine Hausaufgaben gemacht? — Nein, ich habe noch nicht gearbeitet. — Warum? — Ich habe Fußball gespielt und habe es vergessen! — Hast du wenigstens gegessen? — Ja, ich habe einen Apfel gegessen.",
      questions: [
        { q: "Hat das Kind die Hausaufgaben gemacht?", a: "Nein", choices: ["Ja","Nein","Vielleicht","Ein bisschen"] },
        { q: "Warum hat das Kind die Hausaufgaben vergessen?", a: "Es hat Fußball gespielt", choices: ["Es hat ferngesehen","Es hat geschlafen","Es hat Fußball gespielt","Es hat gelesen"] },
        { q: "Was hat das Kind gegessen?", a: "Einen Apfel", choices: ["Eine Pizza","Einen Apfel","Brot","Nichts"] },
      ],
    },
    homework: [
      "Schreibe 5 Sätze im Passé composé — verneint! ✏️",
      "Übe Fragen im Passé composé: 'As-tu...?' für 5 Verben 📝",
      "Schreibe einen Dialog: jemand fragt, ob du etwas gemacht hast — antworte positiv und negativ 🗣️",
    ],
  },
  {
    id: 39, session: 22, week: 11, month: "August", title: "Passé composé avec ÊTRE", emoji: "🚶",
    grammarTip: {
      title: "16 Verben bilden Passé composé mit ÊTRE",
      explanation: "Einige Verben bilden das Passé composé mit ÊTRE statt AVOIR. Die Wichtigsten: aller (gegangen), venir (gekommen), partir (abgefahren), arriver (angekommen), sortir (ausgegangen), entrer (eingetreten). Das Partizip muss mit dem Subjekt übereinstimmen!",
      examples: ["Je suis allé(e). (Ich bin gegangen)", "Elle est venue. (Sie ist gekommen — +e für feminin!)", "Nous sommes arrivés. (Wir sind angekommen — +s für Plural!)"],
    },
    vocab: [
      { fr: "je suis allé(e)", en: "ich bin gegangen" },
      { fr: "tu es venu(e)", en: "du bist gekommen" },
      { fr: "il est parti", en: "er ist abgefahren" },
      { fr: "elle est arrivée", en: "sie ist angekommen (+e)" },
      { fr: "nous sommes sortis", en: "wir sind ausgegangen (+s)" },
      { fr: "ils sont entrés", en: "sie sind eingetreten (+s)" },
    ],
    quiz: [
      { q: "Welches Hilfsverb benutzen Bewegungsverben im Passé composé?", a: "être", choices: ["avoir","être","aller","faire"] },
      { q: "Wie sagt man 'Ich bin gegangen' (maskulin)?", a: "Je suis allé", choices: ["J'ai allé","Je suis allé","Je suis allée","J'ai aller"] },
      { q: "Wie sagt man 'Sie ist gekommen' (feminin)?", a: "Elle est venue", choices: ["Elle a venu","Elle est venu","Elle est venue","Elle a venue"] },
      { q: "Was ist das Partizip von 'aller'?", a: "allé", choices: ["allait","allé","allant","aller"] },
      { q: "Wie stimmt das Partizip bei ÊTRE-Verben überein?", a: "Mit dem Subjekt (Geschlecht + Zahl)", choices: ["Mit dem Objekt","Mit dem Hilfsverb","Mit dem Subjekt (Geschlecht + Zahl)","Es ändert sich nicht"] },
      { q: "Wie sagt man 'Wir sind angekommen' (Gruppe von Jungen)?", a: "Nous sommes arrivés", choices: ["Nous avons arrivé","Nous sommes arrivé","Nous sommes arrivés","Nous sommes arrivées"] },
      { q: "Was ist das Partizip von 'partir'?", a: "parti", choices: ["partait","parti","partant","partir"] },
      { q: "Wie sagt man 'Er ist ausgegangen'?", a: "Il est sorti", choices: ["Il a sorti","Il est sorti","Il est sortie","Il a sortir"] },
      { q: "Wie sagt man 'Sie sind eingetreten' (Mädchen, Plural)?", a: "Elles sont entrées", choices: ["Elles ont entré","Elles sont entré","Elles sont entrés","Elles sont entrées"] },
      { q: "Was bedeutet 'Je suis parti(e) à 8h'?", a: "Ich bin um 8 Uhr abgefahren", choices: ["Ich bin um 8 Uhr aufgestanden","Ich bin um 8 Uhr abgefahren","Ich bin um 8 Uhr angekommen","Ich bin um 8 Uhr ausgegangen"] },
    ],
    fillBlanks: [
      { sentence: "Hier, je suis ___ au cinéma. (Gestern bin ich ins Kino gegangen — maskulin)", answer: "allé", hint: "aller → allé" },
      { sentence: "Ma sœur est ___ à midi. (Meine Schwester ist um Mittag angekommen)", answer: "arrivée", hint: "arriver → arrivée (feminin +e)" },
      { sentence: "Nous sommes ___ du parc à 18h. (Wir sind um 18 Uhr aus dem Park gegangen)", answer: "sortis", hint: "sortir → sortis (Plural +s)" },
    ],
    reading: {
      passage: "Ce matin je suis parti à 8h. Je suis arrivé à l'école à 8h30. Ma sœur est venue me chercher à 16h. Nous sommes allés à la boulangerie ensemble. Elle est rentrée à la maison avant moi.",
      translation: "Heute Morgen bin ich um 8 Uhr abgefahren. Ich bin um 8:30 in der Schule angekommen. Meine Schwester ist um 16 Uhr gekommen, um mich abzuholen. Wir sind zusammen zur Bäckerei gegangen. Sie ist vor mir nach Hause zurückgekehrt.",
      questions: [
        { q: "Wann ist das Kind abgefahren?", a: "Um 8 Uhr", choices: ["Um 7 Uhr","Um 8 Uhr","Um 9 Uhr","Um 8:30 Uhr"] },
        { q: "Wann ist die Schwester gekommen?", a: "Um 16 Uhr", choices: ["Um 14 Uhr","Um 15 Uhr","Um 16 Uhr","Um 17 Uhr"] },
        { q: "Wohin sind sie zusammen gegangen?", a: "Zur Bäckerei", choices: ["Zum Park","Zur Schule","Ins Schwimmbad","Zur Bäckerei"] },
      ],
    },
    homework: [
      "Lerne: aller→allé, venir→venu, partir→parti, arriver→arrivé, sortir→sorti, entrer→entré ✏️",
      "Schreibe 6 Sätze mit ÊTRE-Verben — achte auf Übereinstimmung! 📝",
      "Vergleiche: AVOIR-Verben vs. ÊTRE-Verben im Passé composé — erstelle eine Liste 📊",
    ],
  },
  {
    id: 40, session: 22, week: 11, month: "August", title: "Les adverbes de temps", emoji: "📆",
    grammarTip: {
      title: "Zeitadverbien: wann etwas passiert",
      explanation: "Zeitadverbien sagen uns, WANN etwas passiert. Sie stehen oft am Anfang oder Ende des Satzes. Im Passé composé helfen sie zu zeigen, dass etwas in der Vergangenheit war: 'Hier j'ai joué' (Gestern habe ich gespielt). Im Präsens: aujourd'hui, maintenant. In der Zukunft: demain, bientôt.",
      examples: ["Hier j'ai joué. (Gestern habe ich gespielt)", "Aujourd'hui je joue. (Heute spiele ich)", "Demain je vais jouer. (Morgen werde ich spielen)", "Toujours / jamais / souvent (immer / nie / oft)"],
    },
    vocab: [
      { fr: "hier", en: "gestern" },
      { fr: "aujourd'hui", en: "heute" },
      { fr: "demain", en: "morgen" },
      { fr: "toujours", en: "immer" },
      { fr: "jamais", en: "nie" },
      { fr: "souvent", en: "oft" },
    ],
    quiz: [
      { q: "Was bedeutet 'hier'?", a: "gestern", choices: ["heute","morgen","gestern","immer"] },
      { q: "Wie sagt man 'heute'?", a: "aujourd'hui", choices: ["hier","demain","aujourd'hui","maintenant"] },
      { q: "Was bedeutet 'demain'?", a: "morgen", choices: ["gestern","heute","morgen","bald"] },
      { q: "Wie sagt man 'immer'?", a: "toujours", choices: ["jamais","souvent","toujours","parfois"] },
      { q: "Was bedeutet 'jamais'?", a: "nie", choices: ["immer","oft","manchmal","nie"] },
      { q: "Was bedeutet 'souvent'?", a: "oft", choices: ["manchmal","nie","immer","oft"] },
      { q: "In welcher Zeit steht 'Hier j'ai joué'?", a: "Vergangenheit (Passé composé)", choices: ["Gegenwart","Vergangenheit (Passé composé)","Zukunft","Hypothetisch"] },
      { q: "Wie sagt man 'Ich spiele nie Fußball'?", a: "Je ne joue jamais au foot", choices: ["Je ne joue pas au foot","Je joue jamais au foot","Je ne joue jamais au foot","Je ne jamais joue au foot"] },
      { q: "Wie sagt man 'Wir essen oft Pizza'?", a: "Nous mangeons souvent de la pizza", choices: ["Nous mangeons toujours de la pizza","Nous mangeons jamais de la pizza","Nous mangeons souvent de la pizza","Nous avons mangé de la pizza"] },
      { q: "Was bedeutet 'parfois'?", a: "manchmal", choices: ["immer","nie","oft","manchmal"] },
    ],
    fillBlanks: [
      { sentence: "___ j'ai joué au foot avec Lucas. (Gestern habe ich Fußball gespielt)", answer: "Hier", hint: "gestern = hier" },
      { sentence: "Je mange ___ des légumes — je n'aime pas ça ! (Ich esse nie Gemüse)", answer: "jamais", hint: "nie = jamais" },
      { sentence: "___ je vais aller au cinéma. (Morgen werde ich ins Kino gehen)", answer: "Demain", hint: "morgen = demain" },
    ],
    reading: {
      passage: "Hier j'ai joué au foot. Aujourd'hui je suis fatigué. Demain je vais me reposer. Je joue souvent au foot — au moins trois fois par semaine. Je ne mange jamais de brocoli. C'est toujours pareil !",
      translation: "Gestern habe ich Fußball gespielt. Heute bin ich müde. Morgen werde ich mich ausruhen. Ich spiele oft Fußball — mindestens dreimal pro Woche. Ich esse nie Brokkoli. Es ist immer das gleiche!",
      questions: [
        { q: "Was hat das Kind gestern gemacht?", a: "Fußball gespielt", choices: ["Geschlafen","Gelernt","Fußball gespielt","Musik gehört"] },
        { q: "Wie oft spielt das Kind Fußball?", a: "Mindestens dreimal pro Woche", choices: ["Jeden Tag","Einmal pro Woche","Mindestens dreimal pro Woche","Zweimal pro Woche"] },
        { q: "Was isst das Kind nie?", a: "Brokkoli", choices: ["Gemüse","Pizza","Brokkoli","Salat"] },
      ],
    },
    homework: [
      "Schreibe je 2 Sätze mit: hier, aujourd'hui, demain ✏️",
      "Schreibe je 2 Sätze mit: toujours, jamais, souvent 📝",
      "Beschreibe deinen gestrigen Tag im Passé composé — benutze Zeitadverbien! 🗓️",
    ],
  },
  {
    id: 41, session: 23, week: 11, month: "August", title: "Les comparatifs — Vergleiche", emoji: "⚖️",
    grammarTip: {
      title: "Plus... que / Moins... que / Aussi... que",
      explanation: "Um Dinge zu vergleichen benutzt man: plus + Adjektiv + que (größer als), moins + Adjektiv + que (kleiner als), aussi + Adjektiv + que (so groß wie). Das Adjektiv muss immer noch mit dem Nomen übereinstimmen! Sonderfall: bon → meilleur (besser).",
      examples: ["David est plus grand que Lucas. (David ist größer als Lucas)", "Ma sœur est moins grande que moi. (Meine Schwester ist kleiner als ich)", "Je suis aussi rapide que toi. (Ich bin so schnell wie du)"],
    },
    vocab: [
      { fr: "plus... que", en: "mehr als / -er als" },
      { fr: "moins... que", en: "weniger als / kleiner als" },
      { fr: "aussi... que", en: "so... wie" },
      { fr: "meilleur(e)", en: "besser (Sonderform von bon)" },
      { fr: "plus grand(e)", en: "größer" },
      { fr: "moins rapide", en: "weniger schnell / langsamer" },
    ],
    quiz: [
      { q: "Wie sagt man 'größer als'?", a: "plus grand que", choices: ["moins grand que","aussi grand que","plus grand que","très grand que"] },
      { q: "Was bedeutet 'moins rapide que'?", a: "weniger schnell als", choices: ["schneller als","so schnell wie","weniger schnell als","sehr schnell"] },
      { q: "Wie sagt man 'so groß wie'?", a: "aussi grand que", choices: ["plus grand que","moins grand que","aussi grand que","très grand"] },
      { q: "Was ist die Sonderform von 'bon' im Komparativ?", a: "meilleur", choices: ["plus bon","bon plus","meilleur","bonner"] },
      { q: "Wie sagt man 'David ist größer als Lucas'?", a: "David est plus grand que Lucas", choices: ["David est grand que Lucas","David est plus grand de Lucas","David est plus grand que Lucas","David est aussi grand que Lucas"] },
      { q: "Wie sagt man 'meine Schwester ist kleiner als ich'?", a: "Ma sœur est moins grande que moi", choices: ["Ma sœur est plus petite que moi","Ma sœur est moins grand que moi","Ma sœur est moins grande que moi","Ma sœur est aussi grande que moi"] },
      { q: "Wie sagt man 'Ich bin so schnell wie du'?", a: "Je suis aussi rapide que toi", choices: ["Je suis plus rapide que toi","Je suis moins rapide que toi","Je suis aussi rapide que toi","Je suis très rapide que toi"] },
      { q: "Wie sagt man 'Diese Pizza ist besser als die andere'?", a: "Cette pizza est meilleure que l'autre", choices: ["Cette pizza est plus bonne que l'autre","Cette pizza est meilleure que l'autre","Cette pizza est mieux que l'autre","Cette pizza est très bonne que l'autre"] },
      { q: "Welche Form hat 'meilleur' im Feminin?", a: "meilleure", choices: ["meilleure","meilleur","meilleures","meilleurre"] },
      { q: "Ergänze: 'Le français est ___ difficile que l'anglais, selon moi.'", a: "plus", choices: ["moins","aussi","plus","très"] },
    ],
    fillBlanks: [
      { sentence: "Mon chien est ___ grand que ton chien. (Mein Hund ist größer als dein Hund)", answer: "plus", hint: "größer als = plus... que" },
      { sentence: "Je suis ___ rapide que mon frère. (Ich bin genauso schnell wie mein Bruder)", answer: "aussi", hint: "so... wie = aussi... que" },
      { sentence: "Cette robe est ___ belle que l'autre. (Dieses Kleid ist weniger schön als das andere)", answer: "moins", hint: "weniger als = moins... que" },
    ],
    reading: {
      passage: "Mon frère est plus grand que moi mais je suis plus rapide que lui. Ma sœur est aussi grande que moi. En français, je suis meilleur que mon ami Lucas — mais il est meilleur en maths !",
      translation: "Mein Bruder ist größer als ich, aber ich bin schneller als er. Meine Schwester ist genauso groß wie ich. Im Französischen bin ich besser als mein Freund Lucas — aber er ist besser in Mathe!",
      questions: [
        { q: "Wer ist größer?", a: "Der Bruder", choices: ["Das Kind","Die Schwester","Der Bruder","Lucas"] },
        { q: "Wer ist schneller?", a: "Das Kind", choices: ["Der Bruder","Die Schwester","Das Kind","Lucas"] },
        { q: "In welchem Fach ist Lucas besser?", a: "In Mathe", choices: ["In Französisch","In Sport","In Mathe","In Englisch"] },
      ],
    },
    homework: [
      "Schreibe 5 Vergleichssätze über deine Familie: 'Je suis plus/moins/aussi ___ que ___' ✏️",
      "Lerne: plus...que, moins...que, aussi...que, meilleur(e) auswendig 📝",
      "Vergleiche zwei Tiere auf Französisch — wer ist schneller, größer, kleiner? 🐾",
    ],
  },
  {
    id: 42, session: 23, week: 11, month: "August", title: "Révision des verbes clés", emoji: "🔑",
    grammarTip: {
      title: "Die 5 wichtigsten Verben — Übersicht",
      explanation: "Du kennst jetzt die 5 wichtigsten unregelmäßigen Verben: ÊTRE (sein), AVOIR (haben), ALLER (gehen), VOULOIR (wollen) und POUVOIR (können). Diese Verben werden in der Kommunikation am häufigsten verwendet! Lerne sie alle auswendig.",
      examples: ["je suis / j'ai / je vais / je veux / je peux", "tu es / tu as / tu vas / tu veux / tu peux", "il est / il a / il va / il veut / il peut"],
    },
    vocab: [
      { fr: "être: je suis, tu es, il est", en: "sein: ich bin, du bist, er ist" },
      { fr: "avoir: j'ai, tu as, il a", en: "haben: ich habe, du hast, er hat" },
      { fr: "aller: je vais, tu vas, il va", en: "gehen: ich gehe, du gehst, er geht" },
      { fr: "vouloir: je veux, tu veux, il veut", en: "wollen: ich will, du willst, er will" },
      { fr: "pouvoir: je peux, tu peux, il peut", en: "können: ich kann, du kannst, er kann" },
      { fr: "nous sommes/avons/allons/voulons/pouvons", en: "wir sind/haben/gehen/wollen/können" },
    ],
    quiz: [
      { q: "Wie sagt man 'ich bin' mit ÊTRE?", a: "je suis", choices: ["je suis","je es","je est","je sont"] },
      { q: "Wie sagt man 'du hast' mit AVOIR?", a: "tu as", choices: ["tu ai","tu as","tu a","tu ont"] },
      { q: "Wie sagt man 'er geht' mit ALLER?", a: "il va", choices: ["il vais","il vas","il va","il vont"] },
      { q: "Wie sagt man 'ihr wollt' mit VOULOIR?", a: "vous voulez", choices: ["vous veux","vous veut","vous voulons","vous voulez"] },
      { q: "Wie sagt man 'sie können' mit POUVOIR?", a: "ils peuvent", choices: ["ils peux","ils peut","ils pouvons","ils peuvent"] },
      { q: "Ergänze: 'Nous ___ contents.' (ÊTRE)", a: "sommes", choices: ["suis","êtes","sont","sommes"] },
      { q: "Ergänze: 'Tu ___ un chien.' (AVOIR)", a: "as", choices: ["ai","as","a","ont"] },
      { q: "Ergänze: 'Je ___ manger.' (VOULOIR)", a: "veux", choices: ["veut","veux","voulez","voulons"] },
      { q: "Ergänze: 'Il ___ jouer.' (POUVOIR)", a: "peut", choices: ["peux","peut","pouvons","peuvent"] },
      { q: "Ergänze: 'Vous ___ à l'école.' (ALLER)", a: "allez", choices: ["vas","vais","allons","allez"] },
    ],
    fillBlanks: [
      { sentence: "Je ___ fatigué et je ___ dormir. (Ich bin müde und ich will schlafen)", answer: "suis", hint: "ÊTRE: je suis (erstes Verb)" },
      { sentence: "Tu ___ venir? — Oui, je ___! (Kannst du kommen? — Ja, ich kann!)", answer: "peux", hint: "POUVOIR: tu/je peux" },
      { sentence: "Nous ___ allés au parc hier. (Wir sind gestern in den Park gegangen)", answer: "sommes", hint: "ÊTRE im Passé composé: nous sommes" },
    ],
    reading: {
      passage: "Je suis David. J'ai neuf ans. Je vais à l'école tous les jours. Je veux apprendre le français parce que c'est super ! Je peux maintenant parler un peu. Je suis content de mes progrès !",
      translation: "Ich bin David. Ich bin neun Jahre alt. Ich gehe jeden Tag zur Schule. Ich will Französisch lernen, weil es toll ist! Ich kann jetzt ein bisschen sprechen. Ich bin stolz auf meine Fortschritte!",
      questions: [
        { q: "Wie alt ist David?", a: "9 Jahre", choices: ["7 Jahre","8 Jahre","9 Jahre","10 Jahre"] },
        { q: "Warum will David Französisch lernen?", a: "Weil es toll ist", choices: ["Weil er muss","Weil es einfach ist","Weil es toll ist","Weil seine Freunde es lernen"] },
        { q: "Wie fühlt sich David?", a: "Stolz (zufrieden mit seinem Fortschritt)", choices: ["Müde","Traurig","Hungrig","Stolz (zufrieden mit seinem Fortschritt)"] },
      ],
    },
    homework: [
      "Schreibe eine Tabelle mit allen 5 Verben — alle 6 Formen! ✏️",
      "Mache einen Satz für jedes Verb in jeder Person (30 Sätze insgesamt!) 📝",
      "Teste dich: schreibe die 5 Verben aus dem Kopf — ohne Hilfe! 💪",
    ],
  },

  // ── AUGUST REVIEW — FINAL (Session 25, Week 12) ──────────────────────────────
  {
    id: 45, session: 25, week: 12, month: "August", title: "Abschluss — Große Wiederholung", emoji: "🏆", isReview: true,
    grammarTip: {
      title: "Du hast es geschafft, David! 🏆",
      explanation: "Diese finale Wiederholung deckt ALLES ab: die 5 wichtigsten Verben (être, avoir, aller, vouloir, pouvoir), das Passé composé (avec avoir + avec être), Zeitadverbien, Vergleiche, und den gesamten Wortschatz aus 5 Monaten! Tu es incroyable !",
      examples: ["ÊTRE / AVOIR / ALLER / VOULOIR / POUVOIR — 5 Schlüsselverben", "J'ai joué / je suis allé — Passé composé", "plus...que / moins...que — Vergleiche"],
    },
    vocab: [
      { fr: "je suis / j'ai / je vais", en: "ich bin / ich habe / ich gehe" },
      { fr: "je veux / je peux", en: "ich will / ich kann" },
      { fr: "j'ai joué / je suis allé", en: "ich habe gespielt / ich bin gegangen (Passé composé)" },
      { fr: "hier / aujourd'hui / demain", en: "gestern / heute / morgen" },
      { fr: "plus grand que / meilleur", en: "größer als / besser" },
      { fr: "Bonjour jusqu'au Passé composé !", en: "Von Hallo bis zur Vergangenheit!" },
    ],
    quiz: [
      { q: "Wie sagt man 'Ich habe gespielt'?", a: "J'ai joué", choices: ["Je jouais","J'ai joué","Je suis joué","Je vais jouer"] },
      { q: "Wie sagt man 'Ich bin gegangen'?", a: "Je suis allé", choices: ["J'ai allé","Je suis allé","Je vais allé","Je suis aller"] },
      { q: "Was bedeutet 'Je ne peux pas venir'?", a: "Ich kann nicht kommen", choices: ["Ich will nicht kommen","Ich bin nicht gekommen","Ich kann nicht kommen","Ich gehe nicht kommen"] },
      { q: "Wie verneint man im Passé composé?", a: "ne...pas um das Hilfsverb (n'ai pas)", choices: ["pas vor dem Partizip","ne vor dem Partizip","ne...pas um das Hilfsverb (n'ai pas)","pas am Satzende"] },
      { q: "Wie sagt man 'Es regnet'?", a: "Il pleut", choices: ["Il fait pleuvoir","Il pleut","Il y a de la pluie","Il fait pluvieux"] },
      { q: "Was ist 'meilleur'?", a: "besser (Komparativ von bon)", choices: ["größer","schneller","besser (Komparativ von bon)","schöner"] },
      { q: "Wie bildet man Passé composé mit -ER Verben?", a: "avoir + Stamm + é", choices: ["être + Stamm + é","avoir + Stamm + é","avoir + Infinitiv","être + Infinitiv"] },
      { q: "Was bedeutet 'toujours'?", a: "immer", choices: ["nie","manchmal","oft","immer"] },
      { q: "Wie sagt man 'David ist größer als Lucas'?", a: "David est plus grand que Lucas", choices: ["David est grand que Lucas","David est plus grand de Lucas","David est plus grand que Lucas","David est aussi grand que Lucas"] },
      { q: "Was bedeutet 'Tu es incroyable !'?", a: "Du bist unglaublich!", choices: ["Du bist toll!","Du bist unglaublich!","Du bist großartig!","Du bist fertig!"] },
    ],
    fillBlanks: [
      { sentence: "Hier, je ___ allé à la piscine. (Gestern bin ich ins Schwimmbad gegangen)", answer: "suis", hint: "ÊTRE + allé → je suis allé" },
      { sentence: "Je n'ai ___ mangé de légumes — j'adore les pizzas !", answer: "jamais", hint: "nie = jamais" },
      { sentence: "Je ___ plus grand que l'année dernière. (Ich bin größer als letztes Jahr)", answer: "suis", hint: "ÊTRE: je suis" },
    ],
    reading: {
      passage: "Je m'appelle David et j'ai neuf ans. J'ai appris le français pendant cinq mois — c'est incroyable ! Hier, j'ai parlé français avec ma famille. Je peux maintenant dire beaucoup de choses. Je suis très content et je veux continuer à apprendre. Merci !",
      translation: "Ich heiße David und bin neun Jahre alt. Ich habe fünf Monate lang Französisch gelernt — das ist unglaublich! Gestern habe ich mit meiner Familie Französisch gesprochen. Ich kann jetzt viele Dinge sagen. Ich bin sehr glücklich und will weiter lernen. Danke!",
      questions: [
        { q: "Wie lange hat David Französisch gelernt?", a: "Fünf Monate", choices: ["Drei Monate","Vier Monate","Fünf Monate","Ein Jahr"] },
        { q: "Was hat David gestern gemacht?", a: "Mit seiner Familie Französisch gesprochen", choices: ["Fußball gespielt","Musik gehört","Mit seiner Familie Französisch gesprochen","Ferngesehen"] },
        { q: "Was will David weiterhin tun?", a: "Französisch lernen", choices: ["Sport machen","Musik lernen","Französisch lernen","Reisen"] },
      ],
    },
    homework: [
      "Schreibe einen Brief auf Französisch — erzähle was du in 5 Monaten gelernt hast! ✉️",
      "Teste dich: alle 5 Verben auswendig — je suis, j'ai, je vais, je veux, je peux 💪",
      "Lies den Brief deiner Familie vor — du hast es verdient, dein Französisch zu zeigen! 🎉",
    ],
  },

  // ── SESSION 24 ── August continued (Week 12)
  {
    id: 43, session: 24, week: 12, month: "August", title: "Le futur proche — Nahzukunft", emoji: "🔮",
    grammarTip: {
      title: "Futur proche: aller + Infinitiv",
      explanation: "Die einfachste Art, über die Zukunft zu sprechen: ALLER (gehen) + Infinitiv. Man konjugiert nur aller, das Hauptverb bleibt im Infinitiv. Es entspricht dem deutschen 'ich werde...' oder 'ich bin dabei zu...'",
      examples: ["Je vais manger. (Ich werde essen)", "Il va jouer au foot. (Er wird Fußball spielen)", "Nous allons partir. (Wir werden abfahren)", "Tu vas apprendre le français ! (Du wirst Französisch lernen!)"],
    },
    vocab: [
      { fr: "je vais + Infinitiv", en: "ich werde... (Zukunft)" }, { fr: "tu vas", en: "du wirst" },
      { fr: "il/elle va", en: "er/sie wird" }, { fr: "nous allons", en: "wir werden" },
      { fr: "vous allez", en: "ihr werdet / Sie werden" }, { fr: "ils/elles vont", en: "sie werden" },
      { fr: "bientôt", en: "bald" }, { fr: "demain", en: "morgen" },
    ],
    quiz: [
      { q: "Wie bildet man futur proche?", a: "aller + Infinitiv", choices: ["avoir + Infinitiv","être + Infinitiv","aller + Infinitiv","vouloir + Infinitiv"] },
      { q: "Was bedeutet 'Je vais manger'?", a: "Ich werde essen", choices: ["Ich esse","Ich habe gegessen","Ich werde essen","Ich will essen"] },
      { q: "Wie sagt man 'Du wirst spielen'?", a: "Tu vas jouer", choices: ["Tu joues","Tu as joué","Tu vas jouer","Tu joueras"] },
      { q: "Was bedeutet 'bientôt'?", a: "bald", choices: ["morgen","heute","bald","später"] },
      { q: "Welche Form von aller für 'wir'?", a: "allons", choices: ["allez","allons","vont","vas"] },
    ],
    fillBlanks: [
      { sentence: "Demain, je ___ aller à la piscine. (Morgen werde ich ins Schwimmbad gehen)", answer: "vais", hint: "je + aller = je vais" },
      { sentence: "Il ___ pleuvoir ce soir. (Es wird heute Abend regnen)", answer: "va", hint: "il + aller = il va" },
      { sentence: "Nous ___ manger une pizza ! (Wir werden eine Pizza essen)", answer: "allons", hint: "nous + aller = nous allons" },
    ],
    reading: {
      passage: "Demain, c'est samedi. David va jouer au foot avec ses amis. Sa mère va faire les courses. Son père va regarder un film. Le soir, toute la famille va manger ensemble au restaurant !",
      translation: "Morgen ist Samstag. David wird mit seinen Freunden Fußball spielen. Seine Mutter wird einkaufen gehen. Sein Vater wird einen Film schauen. Abends wird die ganze Familie zusammen im Restaurant essen!",
      questions: [
        { q: "Was wird David morgen machen?", a: "Fußball spielen", choices: ["Schwimmen","Lernen","Fußball spielen","Schlafen"] },
        { q: "Wohin geht die Mutter?", a: "Einkaufen", choices: ["Ins Kino","Einkaufen","Zur Arbeit","Zum Sport"] },
        { q: "Was macht die Familie abends?", a: "Im Restaurant essen", choices: ["Fernsehen","Im Restaurant essen","Schlafen gehen","Sport machen"] },
      ],
    },
    homework: [
      "Schreibe 5 Sätze über morgen: 'Demain, je vais...' — was wirst du morgen machen? ✏️",
      "Konjugiere ALLER im futur proche: je vais, tu vas, il va, nous allons, vous allez, ils vont 📝",
      "Frage jemanden zu Hause: 'Qu'est-ce que tu vas faire demain?' und antworte auf Französisch! 💬",
    ],
  },
  {
    id: 44, session: 24, week: 12, month: "August", title: "La nourriture & les repas", emoji: "🍽️",
    grammarTip: {
      title: "Artikel bei Essen: du / de la / des",
      explanation: "Beim Essen (Teilmengen) benutzt man Teilungsartikel: du (mask.), de la (fem.), des (Plural). Bei Verneinung wird alles zu 'de/d'': Je mange du pain → Je ne mange pas de pain.",
      examples: ["Je mange du pain. (Ich esse Brot)", "Je bois de la limonade. (Ich trinke Limonade)", "Je mange des frites. (Ich esse Pommes)", "Je ne mange pas de viande. (Ich esse kein Fleisch)"],
    },
    vocab: [
      { fr: "le pain", en: "das Brot" }, { fr: "le fromage", en: "der Käse" },
      { fr: "la viande", en: "das Fleisch" }, { fr: "les légumes", en: "das Gemüse" },
      { fr: "les frites", en: "die Pommes" }, { fr: "le jus d'orange", en: "der Orangensaft" },
      { fr: "le petit-déjeuner", en: "das Frühstück" }, { fr: "le dîner", en: "das Abendessen" },
    ],
    quiz: [
      { q: "Wie sagt man 'das Brot'?", a: "le pain", choices: ["le fromage","le pain","la viande","les frites"] },
      { q: "Was bedeutet 'les légumes'?", a: "das Gemüse", choices: ["die Früchte","das Fleisch","das Gemüse","die Kartoffeln"] },
      { q: "Welcher Artikel beim maskulinen Essen?", a: "du", choices: ["de la","des","du","un"] },
      { q: "Wie sagt man 'Ich esse kein Fleisch'?", a: "Je ne mange pas de viande", choices: ["Je ne mange pas la viande","Je ne mange pas de viande","Je ne mange pas du viande","Je mange de viande"] },
      { q: "Was ist 'le petit-déjeuner'?", a: "das Frühstück", choices: ["das Mittagessen","das Abendessen","das Frühstück","der Snack"] },
    ],
    fillBlanks: [
      { sentence: "Je mange ___ pain le matin. (Ich esse morgens Brot)", answer: "du", hint: "Teilungsartikel maskulin" },
      { sentence: "Il boit ___ limonade. (Er trinkt Limonade)", answer: "de la", hint: "Teilungsartikel feminin" },
      { sentence: "Je ne mange pas ___ frites. (Ich esse keine Pommes)", answer: "de", hint: "Bei Verneinung: de statt du/de la/des" },
    ],
    reading: {
      passage: "Le matin, David mange du pain avec du fromage. Il boit du jus d'orange. À midi, il mange des légumes et de la viande. Le soir, toute la famille mange des pâtes. David adore les pâtes — c'est son plat préféré !",
      translation: "Morgens isst David Brot mit Käse. Er trinkt Orangensaft. Mittags isst er Gemüse und Fleisch. Abends isst die ganze Familie Nudeln. David liebt Nudeln — das ist sein Lieblingsessen!",
      questions: [
        { q: "Was trinkt David morgens?", a: "Orangensaft", choices: ["Milch","Wasser","Orangensaft","Limonade"] },
        { q: "Was isst die Familie abends?", a: "Nudeln", choices: ["Brot","Fleisch","Gemüse","Nudeln"] },
        { q: "Was ist Davids Lieblingsessen?", a: "Nudeln", choices: ["Brot","Käse","Pommes","Nudeln"] },
      ],
    },
    homework: [
      "Schreibe was du heute gegessen hast: J'ai mangé du/de la/des... 🍽️",
      "Lerne die Teilungsartikel: du (mask.), de la (fem.), des (Plural), de (Verneinung) 📋",
      "Frage jemanden: 'Qu'est-ce que tu manges au petit-déjeuner?' und antworte! 🥐",
    ],
  },

  // ── SESSION 26 ── Grand Projet d'Écriture (Bonus, Week 13)
  {
    id: 46, session: 26, week: 13, month: "August", title: "✍️ Grand Projet d'Écriture", emoji: "📝",
    grammarTip: {
      title: "Alles zusammen — Dein großes Schreibprojekt!",
      explanation: "Heute schreibst du einen langen Text auf Französisch! Du benutzt ALLES was du in 5 Monaten gelernt hast: Begrüßungen, Zahlen, Farben, Adjektive, Verben (être/avoir/aller/vouloir/pouvoir), Passé composé und Futur proche. Ein echter Französisch-Schüler!",
      examples: [
        "Présent: Je suis, j'ai, je vais, j'aime, je mange...",
        "Passé: Hier, j'ai joué... / Je suis allé(e)...",
        "Futur: Demain, je vais...",
        "Beschreibung: grand(e), petit(e), sympa, rouge, bleu(e)...",
      ],
    },
    vocab: [
      { fr: "d'abord", en: "zuerst" }, { fr: "ensuite", en: "dann / danach" },
      { fr: "enfin", en: "schließlich / zuletzt" }, { fr: "parce que", en: "weil" },
      { fr: "mais", en: "aber" }, { fr: "et aussi", en: "und auch" },
      { fr: "par exemple", en: "zum Beispiel" }, { fr: "je pense que", en: "ich denke, dass" },
    ],
    quiz: [
      { q: "Was bedeutet 'd'abord'?", a: "zuerst", choices: ["dann","zuerst","weil","aber"] },
      { q: "Was bedeutet 'parce que'?", a: "weil", choices: ["aber","weil","auch","zuerst"] },
      { q: "Wie sagt man 'danach'?", a: "ensuite", choices: ["d'abord","enfin","ensuite","mais"] },
      { q: "Was bedeutet 'mais'?", a: "aber", choices: ["und","oder","aber","weil"] },
      { q: "Wie sagt man 'zum Beispiel'?", a: "par exemple", choices: ["par exemple","parce que","d'abord","enfin"] },
    ],
    fillBlanks: [
      { sentence: "___ , je me lève et je mange. (Zuerst stehe ich auf und esse)", answer: "D'abord", hint: "Verbindungswort für 'zuerst'" },
      { sentence: "J'aime le foot ___ c'est amusant. (Ich mag Fußball, weil es lustig ist)", answer: "parce que", hint: "Weil = ?" },
      { sentence: "___ , je vais dormir. (Schließlich werde ich schlafen gehen)", answer: "Enfin", hint: "Verbindungswort für 'zuletzt'" },
    ],
    reading: {
      passage: "Bonjour ! Je m'appelle David et j'ai neuf ans. J'habite en Allemagne avec ma famille. J'ai une sœur et un frère — mon frère est grand et sympa. D'abord, je vais à l'école en bus. Ensuite, je joue au foot avec mes amis. Hier, j'ai mangé une pizza délicieuse et j'ai regardé un film. Demain, je vais aller à la piscine parce que j'adore nager. Je peux parler français maintenant — c'est super !",
      translation: "Hallo! Ich heiße David und bin neun Jahre alt. Ich wohne in Deutschland mit meiner Familie. Ich habe eine Schwester und einen Bruder — mein Bruder ist groß und nett. Zuerst fahre ich mit dem Bus zur Schule. Dann spiele ich Fußball mit meinen Freunden. Gestern habe ich eine leckere Pizza gegessen und einen Film geschaut. Morgen werde ich ins Schwimmbad gehen, weil ich das Schwimmen liebe. Ich kann jetzt Französisch sprechen — das ist toll!",
      questions: [
        { q: "Wie heißt der Junge?", a: "David", choices: ["Luc","David","Tom","Paul"] },
        { q: "Wie fährt David zur Schule?", a: "Mit dem Bus", choices: ["Zu Fuß","Mit dem Zug","Mit dem Bus","Mit dem Auto"] },
        { q: "Was hat David gestern gegessen?", a: "Eine Pizza", choices: ["Nudeln","Eine Pizza","Brot","Salat"] },
        { q: "Wohin geht David morgen?", a: "Ins Schwimmbad", choices: ["In den Park","In die Schule","Ins Schwimmbad","Ins Kino"] },
      ],
    },
    homework: [
      "📝 AUFGABE 1 — Stelle dich vor (mindestens 5 Sätze): Schreibe wer du bist, wie alt du bist, wo du wohnst, wie deine Familie ist und was du magst. Benutze: Je m'appelle..., J'ai ... ans, J'habite..., J'ai un/une..., J'aime / Je n'aime pas...",
      "📝 AUFGABE 2 — Beschreibe deinen Alltag (mindestens 5 Sätze): Was machst du jeden Tag? Wann gehst du zur Schule? Was isst du? Nutze: D'abord... ensuite... enfin... / Je vais à l'école en... / Je mange du/de la...",
      "📝 AUFGABE 3 — Gestern & Morgen (mindestens 6 Sätze): Schreibe 3 Sätze darüber was du GESTERN gemacht hast (Passé composé: J'ai joué... / Je suis allé(e)...) und 3 Sätze über was du MORGEN machen wirst (Futur proche: Je vais...). Benutze 'hier' und 'demain'!",
      "📝 AUFGABE 4 — Dein Lieblingsding (mindestens 4 Sätze): Wähle etwas das du liebst (ein Tier, ein Sport, ein Essen...) und schreibe darüber. Warum magst du es? Wie ist es (groß, klein, schön, lecker)? Nutze: J'adore... parce que... Il/Elle est... C'est...",
      "🌟 BONUS — Schreibe alles zusammen als einen Brief an einen französischen Freund! Beginne mit 'Bonjour !' und ende mit 'Au revoir, David'. Mindestens 15 Sätze insgesamt. Du kannst es schaffen! 💪🇫🇷",
    ],
  },
];

const GRAMMAR_VAULT = [
  // ── APRIL ──────────────────────────────────────────────────────────────────
  { id: 1, lessonId: 1, title: "Tu vs Vous — Du oder Sie?", emoji: "👥", color: "#6366F1",
    explanation: "Im Französischen gibt es zwei Wörter für 'du/Sie'. TU benutzt man mit Freunden, Familie und Kindern. VOUS benutzt man mit Erwachsenen die man nicht gut kennt (Lehrer, Fremde) — und auch wenn man mehrere Personen anspricht!",
    table: { headers: ["Situation","Pronomen","Beispiel","Deutsch"], rows: [
      ["Freunde / Familie","tu","Tu as quel âge ?","Wie alt bist du?"],
      ["Lehrer / Fremde","vous","Vous avez quel âge ?","Wie alt sind Sie?"],
      ["Mehrere Personen","vous","Vous êtes prêts ?","Seid ihr bereit?"],
    ]},
    tip: "Faustregel: Würdest du die Person mit 'du' oder 'Sie' ansprechen? Genauso auf Französisch!" },

  { id: 2, lessonId: 2, title: "Zahlen 1–10", emoji: "🔢", color: "#FF6B35",
    explanation: "Die Zahlen 1–10 müssen auswendig gelernt werden — sie sind die Basis für alle anderen Zahlen. Wichtig: 'J'ai neuf ans' = Ich bin 9 Jahre alt. Auf Französisch sagt man AVOIR (haben) für das Alter, nicht ÊTRE (sein)!",
    table: { headers: ["Zahl","Französisch","Aussprache-Tipp"], rows: [
      ["1","un / une","uh(n)"],["2","deux","dö"],["3","trois","trwa"],
      ["4","quatre","katr"],["5","cinq","sank"],["6","six","sis"],
      ["7","sept","set"],["8","huit","üit"],["9","neuf","nöf"],["10","dix","dis"],
    ]},
    tip: "Alter sagen: J'ai NEUF ans. (Ich BIN 9) — auf Französisch 'haben' statt 'sein'!" },

  { id: 3, lessonId: 3, title: "Zahlen 11–100", emoji: "💯", color: "#F59E0B",
    explanation: "11–16 sind Sonderformen. 17–19 = 10 + Zahl (dix-sept). 20–69 folgen dem normalen Muster (vingt, trente...). ACHTUNG: 70 = soixante-dix (60+10), 80 = quatre-vingts (4×20), 90 = quatre-vingt-dix (4×20+10)!",
    table: { headers: ["Zahl","Französisch","Erklärung"], rows: [
      ["11","onze","Sonderform"],["12","douze","Sonderform"],["16","seize","Sonderform"],
      ["17","dix-sept","10 + 7"],["21","vingt et un","20 + 1 (mit et!)"],
      ["70","soixante-dix","60 + 10 (!!)"],["80","quatre-vingts","4 × 20 (!!)"],
      ["90","quatre-vingt-dix","4×20 + 10 (!!)"],["100","cent","Basis"],
    ]},
    tip: "70, 80, 90 sind die Fallen! 70 = soixante-dix, 80 = quatre-vingts, 90 = quatre-vingt-dix" },

  { id: 4, lessonId: 4, title: "Maskulin & Feminin — un / une", emoji: "🏷️", color: "#4ECDC4",
    explanation: "JEDES französische Nomen hat ein Geschlecht — maskulin (männlich) oder feminin (weiblich). Das ist oft nicht logisch! Man muss das Geschlecht mit dem Wort auswendig lernen. Der unbestimmte Artikel: UN für maskulin, UNE für feminin. Der bestimmte Artikel: LE für maskulin, LA für feminin, L' vor Vokal.",
    table: { headers: ["Geschlecht","Unb. Artikel","Best. Artikel","Beispiel"], rows: [
      ["Maskulin","un","le","un chat → le chat"],
      ["Feminin","une","la","une pomme → la pomme"],
      ["Maskulin + Vokal","un","l'","un arbre → l'arbre"],
      ["Feminin + Vokal","une","l'","une école → l'école"],
      ["Plural (beide)","des","les","des chats → les chats"],
    ]},
    tip: "Lerne IMMER den Artikel mit dem Wort! Nicht 'chat' sondern 'un chat / le chat'." },

  { id: 5, lessonId: 5, title: "Adjektive — Farben & Stellung", emoji: "🎨", color: "#A78BFA",
    explanation: "Im Französischen stehen die meisten Adjektive (besonders Farben) NACH dem Nomen — anders als auf Deutsch! Außerdem passen sich Adjektive an das Geschlecht an: bei Femininum bekommt das Adjektiv ein -e. Bei Plural ein -s.",
    table: { headers: ["Maskulin","Feminin","Plural mask.","Bedeutung"], rows: [
      ["vert","verte","verts","grün"],
      ["noir","noire","noirs","schwarz"],
      ["bleu","bleue","bleus","blau"],
      ["rouge","rouge","rouges","rot (kein +e!)"],
      ["blanc","blanche","blancs","weiß (Sonderform)"],
      ["jaune","jaune","jaunes","gelb (kein +e!)"],
    ]},
    tip: "NOMEN + FARBE: un stylo ROUGE, une pomme VERTE. Farbe kommt NACH dem Nomen!" },

  { id: 6, lessonId: 6, title: "Mon / Ma / Mes — Mein / Meine", emoji: "👤", color: "#22c55e",
    explanation: "MON, MA, MES bedeuten alle 'mein/meine'. Welches man benutzt hängt vom Geschlecht des Nomens ab, NICHT vom Besitzer! MON = maskulin, MA = feminin, MES = Plural. WICHTIG: Vor Vokalen (a, e, i, o, u) benutzt man immer MON — auch bei femininen Nomen!",
    table: { headers: ["Form","Für","Beispiel","Deutsch"], rows: [
      ["mon","Maskulin","mon père, mon frère","mein Vater, mein Bruder"],
      ["ma","Feminin","ma mère, ma sœur","meine Mutter, meine Schwester"],
      ["mes","Plural","mes parents, mes amis","meine Eltern, meine Freunde"],
      ["mon (!!)","Feminin + Vokal","mon amie, mon école","meine Freundin, meine Schule"],
    ]},
    tip: "Vor A E I O U immer MON — auch wenn es feminin ist! MON amie (nicht MA amie)." },

  { id: 7, lessonId: 7, title: "Aimer / Adorer / Détester", emoji: "❤️", color: "#EF4444",
    explanation: "Diese drei Verben drücken aus ob man etwas mag oder nicht. Sie sind regelmäßige -ER Verben. WICHTIG: Nach diesen Verben steht bei allgemeinen Dingen IMMER der bestimmte Artikel (le/la/les) — auch wenn man auf Deutsch keinen Artikel sagen würde!",
    table: { headers: ["Verb","Bedeutung","Beispiel","Deutsch"], rows: [
      ["j'aime","ich mag","J'aime les chats.","Ich mag Katzen."],
      ["j'adore","ich liebe","J'adore le football.","Ich liebe Fußball."],
      ["je déteste","ich hasse","Je déteste les araignées.","Ich hasse Spinnen."],
      ["je n'aime pas","ich mag nicht","Je n'aime pas les légumes.","Ich mag kein Gemüse."],
    ]},
    tip: "J'aime LES chats. J'adore LE foot. IMMER den Artikel! Nicht j'aime chats (falsch!)." },

  { id: 8, lessonId: 8, title: "Teilungsartikel — du / de la / des", emoji: "🍽️", color: "#D97706",
    explanation: "Der Teilungsartikel wird benutzt wenn man über eine unbestimmte Menge spricht (etwas von etwas). DU für maskulin, DE LA für feminin, DES für Plural, DE L' vor Vokal. Nach einer Verneinung (ne...pas) wird der Teilungsartikel IMMER zu DE (oder D' vor Vokal)!",
    table: { headers: ["Geschlecht","Artikel","Beispiel","Deutsch"], rows: [
      ["Maskulin","du","Je mange du pain.","Ich esse (etwas) Brot."],
      ["Feminin","de la","Je bois de la limonade.","Ich trinke Limonade."],
      ["Plural","des","Je mange des frites.","Ich esse Pommes."],
      ["Vor Vokal","de l'","Je bois de l'eau.","Ich trinke Wasser."],
      ["Nach Verneinung","de / d'","Je ne mange pas de viande.","Ich esse kein Fleisch."],
    ]},
    tip: "Nach NE...PAS wird alles zu DE: Je mange DU pain → Je ne mange pas DE pain." },

  // ── MAY ────────────────────────────────────────────────────────────────────
  { id: 9, lessonId: 9, title: "Adjektive — Maskulin & Feminin", emoji: "✏️", color: "#6366F1",
    explanation: "Adjektive (Eigenschaftswörter) passen sich dem Nomen an. Grundregel: Feminin = Maskulin + E. Plural = Singular + S. Manche Adjektive haben Sonderformen! Einige Adjektive wie 'sympa', 'triste', 'rouge', 'jaune' bleiben immer gleich.",
    table: { headers: ["Maskulin","Feminin","Plural mask.","Bedeutung"], rows: [
      ["grand","grande","grands","groß"],
      ["petit","petite","petits","klein"],
      ["content","contente","contents","glücklich"],
      ["fatigué","fatiguée","fatigués","müde"],
      ["sympa","sympa","sympas","nett (keine Änderung!)"],
      ["triste","triste","tristes","traurig (keine Änderung!)"],
    ]},
    tip: "Endet das Adjektiv schon auf -e? Dann bleibt es gleich! triste → triste (mask. = fem.)" },

  { id: 10, lessonId: 10, title: "Verneinung — ne...pas", emoji: "🚫", color: "#EF4444",
    explanation: "Um 'nicht' zu sagen, braucht man auf Französisch ZWEI Wörter: NE vor dem Verb und PAS nach dem Verb. Das Verb steht immer zwischen NE und PAS. Wenn das Verb mit einem Vokal (a,e,i,o,u) beginnt, wird NE zu N' (Apostroph). Nach ne...pas wird un/une/du/de la/des zu DE!",
    table: { headers: ["Positiv","Negativ","Deutsch"], rows: [
      ["Je joue au foot.","Je ne joue pas au foot.","Ich spiele nicht Fußball."],
      ["Tu chantes bien.","Tu ne chantes pas bien.","Du singst nicht gut."],
      ["Il mange de la pizza.","Il ne mange pas de pizza.","Er isst keine Pizza."],
      ["J'aime les chats.","Je n'aime pas les chats.","Ich mag keine Katzen."],
      ["Elle habite ici.","Elle n'habite pas ici.","Sie wohnt nicht hier."],
      ["Nous avons un chien.","Nous n'avons pas de chien.","Wir haben keinen Hund."],
    ]},
    tip: "Schritt 1: NE vor das Verb. Schritt 2: PAS nach dem Verb. Vor Vokal: NE → N'!" },

  { id: 11, lessonId: 11, title: "Singular & Plural", emoji: "🔢", color: "#4ECDC4",
    explanation: "Plural bildet man indem man ein -S an das Nomen hängt. Das S hört man beim Sprechen NICHT! Die Artikel ändern sich: un/une → des, le/la → les, mon/ma → mes. Nomen die schon auf -S, -X oder -Z enden bleiben im Plural gleich.",
    table: { headers: ["Singular","Plural","Artikel-Änderung"], rows: [
      ["un chat","des chats","un → des"],
      ["une pomme","des pommes","une → des"],
      ["le livre","les livres","le → les"],
      ["la gomme","les gommes","la → les"],
      ["mon frère","mes frères","mon → mes"],
      ["un nez","des nez","kein +S (endet auf z)"],
    ]},
    tip: "Das S im Plural ist STUMM — man hört es nicht! Nur beim Schreiben sichtbar." },

  { id: 12, lessonId: 12, title: "Possessivpronomen — mein/dein/sein", emoji: "👨‍👩‍👧", color: "#22c55e",
    explanation: "Es gibt Possessivpronomen für jede Person. Sie passen sich dem Nomen an (nicht dem Besitzer). Für 'mein': mon/ma/mes. Für 'dein': ton/ta/tes. Für 'sein/ihr': son/sa/ses. Vor Vokalen immer die maskuline Form (mon/ton/son)!",
    table: { headers: ["Besitzer","Maskulin","Feminin","Plural"], rows: [
      ["mein(e)","mon","ma (→mon vor Vokal)","mes"],
      ["dein(e)","ton","ta (→ton vor Vokal)","tes"],
      ["sein/ihr","son","sa (→son vor Vokal)","ses"],
    ]},
    tip: "Son père = sein Vater ODER ihr Vater — son/sa/ses kann beides bedeuten!" },

  { id: 13, lessonId: 13, title: "ÊTRE — sein (ich bin, du bist...)", emoji: "🔵", color: "#3B82F6",
    explanation: "ÊTRE (sein) ist das wichtigste Verb auf Französisch. Es ist sehr unregelmäßig — alle Formen müssen auswendig gelernt werden! Être benutzt man für: Beschreibungen (Er ist groß), Berufe (Je suis élève), Nationalitäten und Herkunft. Verneinung: je ne suis pas, tu n'es pas...",
    table: { headers: ["Person","être","Deutsch","Verneinung"], rows: [
      ["je","suis","ich bin","je ne suis pas"],
      ["tu","es","du bist","tu n'es pas"],
      ["il / elle","est","er / sie ist","il n'est pas"],
      ["nous","sommes","wir sind","nous ne sommes pas"],
      ["vous","êtes","ihr seid / Sie sind","vous n'êtes pas"],
      ["ils / elles","sont","sie sind","ils ne sont pas"],
    ]},
    tip: "ÊTRE + Adjektiv → Adjektiv ändert sich: Il EST grand / Elle EST grande." },

  { id: 14, lessonId: 14, title: "ÊTRE + Adjektiv — Beschreibungen", emoji: "💬", color: "#6366F1",
    explanation: "Mit ÊTRE beschreibt man Personen und Dinge. Das Adjektiv nach ÊTRE muss mit der beschriebenen Person übereinstimmen: maskulin (kein -e), feminin (+e), Plural (+s). Bei Verneinung: Il n'est PAS grand. Das Adjektiv bleibt nach pas gleich.",
    table: { headers: ["Maskulin","Feminin","Deutsch","Beispielsatz"], rows: [
      ["grand","grande","groß","Mon père est grand."],
      ["petit","petite","klein","Ma sœur est petite."],
      ["content","contente","glücklich","Je suis content(e)."],
      ["fatigué","fatiguée","müde","Il est fatigué."],
      ["intelligent","intelligente","intelligent","Elle est intelligente."],
      ["sympa","sympa","nett","Tu es sympa! (kein +e!)"],
    ]},
    tip: "Verneinung: Il N'EST PAS grand. (nicht: Il est pas grand — das ist umgangssprachlich!)" },

  { id: 15, lessonId: 15, title: "AVOIR — haben (ich habe, du hast...)", emoji: "🟡", color: "#EAB308",
    explanation: "AVOIR (haben) ist das zweithäufigste Verb auf Französisch. Es ist unregelmäßig. Besonderes: Für das Alter benutzt man AVOIR, nicht ÊTRE! J'ai neuf ans (Ich bin 9 Jahre alt — wörtlich: Ich HABE 9 Jahre). Avoir braucht man auch für das Passé composé (Vergangenheit)!",
    table: { headers: ["Person","avoir","Deutsch","Verneinung"], rows: [
      ["j'","ai","ich habe","je n'ai pas"],
      ["tu","as","du hast","tu n'as pas"],
      ["il / elle","a","er / sie hat","il n'a pas"],
      ["nous","avons","wir haben","nous n'avons pas"],
      ["vous","avez","ihr habt","vous n'avez pas"],
      ["ils / elles","ont","sie haben","ils n'ont pas"],
    ]},
    tip: "Alter mit AVOIR: J'ai 9 ans. NICHT 'je suis 9 ans' — das ist falsch!" },

  // ── JUNE ───────────────────────────────────────────────────────────────────
  { id: 16, lessonId: 16, title: "ALLER — gehen / fahren", emoji: "🟢", color: "#16A34A",
    explanation: "ALLER (gehen/fahren) ist unregelmäßig und sehr wichtig. Man benutzt es für Ortsangaben (Je vais à la piscine) und mit Verkehrsmitteln (Je vais en bus). Superpower: ALLER + Infinitiv = Futur proche (nahe Zukunft) — wie 'going to' auf Englisch!",
    table: { headers: ["Person","aller","Deutsch","Futur proche Beispiel"], rows: [
      ["je","vais","ich gehe/fahre","Je vais manger."],
      ["tu","vas","du gehst/fährst","Tu vas jouer."],
      ["il / elle","va","er/sie geht/fährt","Il va partir."],
      ["nous","allons","wir gehen/fahren","Nous allons danser."],
      ["vous","allez","ihr geht/fahrt","Vous allez travailler."],
      ["ils / elles","vont","sie gehen/fahren","Ils vont arriver."],
    ]},
    tip: "Je vais AU parc (mask.) / Je vais À LA piscine (fem.) / Je vais EN France (Land)." },

  { id: 17, lessonId: 17, title: "Verben auf -ER — Regelmäßige Konjugation", emoji: "📝", color: "#EC4899",
    explanation: "Die meisten französischen Verben enden auf -ER und sind regelmäßig. Regel: Stamm = Infinitiv - ER. Dann fügt man die Endung hinzu: -e, -es, -e, -ons, -ez, -ent. WICHTIG: Je/Tu/Il klingen beim Sprechen GLEICH! Die -ent Endung bei ils/elles ist STUMM.",
    table: { headers: ["Person","Endung","parler","jouer","manger"], rows: [
      ["je","  -e","parle","joue","mange"],
      ["tu","  -es","parles","joues","manges"],
      ["il/elle","  -e","parle","joue","mange"],
      ["nous","  -ons","parlons","jouons","mangeons"],
      ["vous","  -ez","parlez","jouez","mangez"],
      ["ils/elles","  -ent","parlent","jouent","mangent"],
    ]},
    tip: "Merksatz: -e, -es, -e, -ons, -ez, -ent — laut sprechen bis es sitzt!" },

  { id: 18, lessonId: 18, title: "Élision — Apostroph vor Vokal", emoji: "🔗", color: "#8B5CF6",
    explanation: "Wenn bestimmte kurze Wörter (le, la, je, me, te, se, de, ne, que) vor einem Vokal (a, e, i, o, u) oder stummen h stehen, fällt der Vokal weg und wird durch einen Apostroph ersetzt. Das macht das Sprechen flüssiger. Diese Regel ist OBLIGATORISCH — man kann sie nicht weglassen!",
    table: { headers: ["Wort","Vor Vokal","Beispiel","Deutsch"], rows: [
      ["le","l'","l'école","die Schule"],
      ["la","l'","l'amie","die Freundin"],
      ["je","j'","j'ai","ich habe"],
      ["ne","n'","il n'est pas","er ist nicht"],
      ["de","d'","d'accord","einverstanden"],
      ["que","qu'","qu'il est beau!","wie schön er ist!"],
    ]},
    tip: "Vokal-Check: A E I O U → Apostroph! le école → l'école. IMMER, keine Ausnahme!" },

  { id: 19, lessonId: 22, title: "Fragewörter — Les mots interrogatifs", emoji: "❓", color: "#F59E0B",
    explanation: "Fragewörter benutzt man am Anfang einer Frage um spezifische Informationen zu bekommen. Die einfachste Methode eine Frage zu stellen: Fragewort + est-ce que + Satz. Oder man hebt die Stimme am Satzende (gesprochen). Wichtig: 'Quel/Quelle' passt sich dem Nomen an!",
    table: { headers: ["Fragewort","Deutsch","Beispiel","Antwort"], rows: [
      ["Qui","Wer","Qui est-ce ?","C'est David."],
      ["Quoi / Qu'est-ce que","Was","Qu'est-ce que tu fais ?","Je joue."],
      ["Où","Wo / Wohin","Où habites-tu ?","J'habite à Berlin."],
      ["Quand","Wann","Quand arrives-tu ?","À trois heures."],
      ["Comment","Wie","Comment tu t'appelles ?","Je m'appelle David."],
      ["Pourquoi","Warum","Pourquoi tu pleures ?","Parce que..."],
      ["Combien","Wie viel/viele","Combien ça coûte ?","Cinq euros."],
      ["Quel / Quelle","Welcher/Welche","Quel âge as-tu ?","J'ai neuf ans."],
    ]},
    tip: "Einfachste Fragemethode: Einfach die Stimme am Satzende heben! Tu joues ? = Spielst du?" },

  // ── JULY ───────────────────────────────────────────────────────────────────
  { id: 20, lessonId: 30, title: "VOULOIR — wollen", emoji: "🙋", color: "#7C3AED",
    explanation: "VOULOIR (wollen) ist ein unregelmäßiges Verb. Nach VOULOIR steht der Infinitiv des anderen Verbs. Höfliche Form: 'Je voudrais' (Ich möchte) statt 'Je veux' (Ich will) — je veux klingt direkt und unhöflich! Verneinung: Je ne veux pas + Infinitiv.",
    table: { headers: ["Person","vouloir","Deutsch","Beispiel"], rows: [
      ["je","veux","ich will","Je veux jouer."],
      ["tu","veux","du willst","Tu veux manger ?"],
      ["il / elle","veut","er/sie will","Il veut partir."],
      ["nous","voulons","wir wollen","Nous voulons danser."],
      ["vous","voulez","ihr wollt","Vous voulez venir ?"],
      ["ils / elles","veulent","sie wollen","Ils veulent dormir."],
    ]},
    tip: "Höflich: Je VOUDRAIS (Ich möchte) statt Je VEUX (Ich will). Im Restaurant immer voudrais!" },

  { id: 21, lessonId: 31, title: "POUVOIR — können / dürfen", emoji: "💪", color: "#0891B2",
    explanation: "POUVOIR (können/dürfen) ist unregelmäßig. Nach POUVOIR steht immer der Infinitiv. Pouvoir bedeutet sowohl 'können' (Fähigkeit) als auch 'dürfen' (Erlaubnis). Verneinung: Je ne peux pas (Ich kann nicht / Ich darf nicht).",
    table: { headers: ["Person","pouvoir","Deutsch","Beispiel"], rows: [
      ["je","peux","ich kann/darf","Je peux venir."],
      ["tu","peux","du kannst/darfst","Tu peux jouer."],
      ["il / elle","peut","er/sie kann/darf","Il peut partir."],
      ["nous","pouvons","wir können/dürfen","Nous pouvons rester."],
      ["vous","pouvez","ihr könnt/dürft","Vous pouvez entrer."],
      ["ils / elles","peuvent","sie können/dürfen","Ils peuvent dormir."],
    ]},
    tip: "Je ne PEUX PAS venir. = Ich kann nicht kommen. Pouvoir + Infinitiv — immer!" },

  // ── AUGUST ─────────────────────────────────────────────────────────────────
  { id: 22, lessonId: 37, title: "Passé composé mit AVOIR", emoji: "⏰", color: "#DC2626",
    explanation: "Das Passé composé ist die häufigste Vergangenheitsform. Für die meisten Verben: AVOIR (konjugiert) + Partizip Perfekt. Das Partizip regelmäßiger -ER Verben = Stamm + É (jouer → joué). -IR Verben: Stamm + I. Unregelmäßige: auswendig lernen! Verneinung: n'ai PAS gespielt = je n'ai pas joué.",
    table: { headers: ["Verb","Partizip","Passé composé","Deutsch"], rows: [
      ["jouer","joué","j'ai joué","ich habe gespielt"],
      ["manger","mangé","il a mangé","er hat gegessen"],
      ["regarder","regardé","tu as regardé","du hast geschaut"],
      ["finir","fini","nous avons fini","wir haben beendet"],
      ["faire","fait (!)","j'ai fait","ich habe gemacht"],
      ["voir","vu (!)","il a vu","er hat gesehen"],
      ["prendre","pris (!)","j'ai pris","ich habe genommen"],
    ]},
    tip: "Formel: AVOIR (j'ai/tu as/il a...) + PARTIZIP (-ER → é). Verneinung: je N'ai PAS joué." },

  { id: 23, lessonId: 39, title: "Passé composé mit ÊTRE", emoji: "🚶", color: "#059669",
    explanation: "Bestimmte Verben (meist Bewegungs- und Zustandsverben) bilden das Passé composé mit ÊTRE statt AVOIR. Das Partizip stimmt dann mit dem Subjekt überein (Femininum +e, Plural +s). Eselsbrücke: DR & MRS VANDERTRAMP (aller, venir, partir, arriver, entrer, sortir, monter, descendre, naître, mourir, rester, tomber, retourner).",
    table: { headers: ["Verb","Partizip","Beispiel","Deutsch"], rows: [
      ["aller","allé(e)","je suis allé(e)","ich bin gegangen"],
      ["venir","venu(e)","il est venu","er ist gekommen"],
      ["partir","parti(e)","elle est partie","sie ist abgereist"],
      ["arriver","arrivé(e)","ils sont arrivés","sie sind angekommen"],
      ["rester","resté(e)","nous sommes restés","wir sind geblieben"],
      ["tomber","tombé(e)","tu es tombé(e)","du bist gefallen"],
    ]},
    tip: "Mit ÊTRE: Partizip passt sich an! Je suis allé (m.) / Je suis allée (f.) / Nous sommes allés." },

  { id: 24, lessonId: 41, title: "Komparativ — Vergleiche", emoji: "⚖️", color: "#B45309",
    explanation: "Um Dinge zu vergleichen benutzt man: PLUS...QUE (mehr...als), MOINS...QUE (weniger...als), AUSSI...QUE (genauso...wie). Das Adjektiv stimmt mit dem ersten Nomen überein. Sonderformen: BON (gut) → MEILLEUR (besser), MAUVAIS (schlecht) → PIRE (schlimmer).",
    table: { headers: ["Form","Bedeutung","Beispiel","Deutsch"], rows: [
      ["plus ... que","mehr ... als","Il est plus grand que moi.","Er ist größer als ich."],
      ["moins ... que","weniger ... als","Elle est moins grande que lui.","Sie ist kleiner als er."],
      ["aussi ... que","genauso ... wie","Tu es aussi sympa que lui.","Du bist genauso nett wie er."],
      ["meilleur(e) que","besser als","Ce gâteau est meilleur.","Dieser Kuchen ist besser."],
      ["le/la plus ...","der/die/das ... ste","Il est le plus grand.","Er ist der Größte."],
    ]},
    tip: "BON → MEILLEUR (nicht plus bon!). C'est meilleur = Das ist besser. Sonderform merken!" },

  { id: 25, lessonId: 43, title: "Futur proche — nahe Zukunft", emoji: "🔮", color: "#7C3AED",
    explanation: "Der Futur proche (nahe Zukunft) ist die einfachste Art über die Zukunft zu sprechen — wie 'going to' auf Englisch. Bildung: ALLER (konjugiert) + Infinitiv des Verbs. Man konjugiert NUR aller, das Hauptverb bleibt im Infinitiv. Verneinung: Je NE vais PAS manger.",
    table: { headers: ["Person","aller","Futur proche Beispiel","Deutsch"], rows: [
      ["je","vais","Je vais manger.","Ich werde essen."],
      ["tu","vas","Tu vas jouer.","Du wirst spielen."],
      ["il / elle","va","Il va partir.","Er wird abfahren."],
      ["nous","allons","Nous allons danser.","Wir werden tanzen."],
      ["vous","allez","Vous allez travailler.","Ihr werdet arbeiten."],
      ["ils / elles","vont","Ils vont arriver.","Sie werden ankommen."],
    ]},
    tip: "Verneinung: Je NE vais PAS manger. Das NE...PAS umschließt nur ALLER — nicht den Infinitiv!" },

  { id: 26, lessonId: 44, title: "Teilungsartikel du / de la / des", emoji: "🍽️", color: "#EA580C",
    explanation: "Den Teilungsartikel benutzt man wenn man über eine nicht gezählte Menge spricht. DU (maskulin), DE LA (feminin), DES (Plural), DE L' (vor Vokal). Nach Verneinung wird ALLES zu DE oder D'. Auch nach Mengenangaben: beaucoup DE, un peu DE, un verre DE...",
    table: { headers: ["Verwendung","Artikel","Beispiel","Deutsch"], rows: [
      ["Maskulin (Menge)","du","Je mange du pain.","Ich esse (etwas) Brot."],
      ["Feminin (Menge)","de la","Je bois de la limonade.","Ich trinke Limonade."],
      ["Plural (Menge)","des","Je mange des frites.","Ich esse Pommes."],
      ["Vor Vokal","de l'","Je bois de l'eau.","Ich trinke Wasser."],
      ["Nach Verneinung","de / d'","Je ne mange pas de viande.","Ich esse kein Fleisch."],
      ["Nach Mengenangabe","de / d'","beaucoup de lait","viel Milch"],
    ]},
    tip: "Ne...pas → DE! Je mange DU pain → Je ne mange PAS DE pain. UN/UNE auch → PAS DE!" },
];

const MONTH_META = {
  April:  { label: "🌸 April — Grundlagen", color: "#FF6B35" },
  May:    { label: "🌿 Mai — Être, Avoir & Alltag", color: "#4ECDC4" },
  June:   { label: "☀️ Juni — Verben & Fragen", color: "#F59E0B" },
  July:   { label: "🎓 Juli — Modalverben & Wortschatz", color: "#6366F1" },
  August: { label: "🏆 August — Passé composé & Abschluss", color: "#EC4899" },
};

const COLORS = {
  bg: "#FFF8F0", card: "#FFFFFF", primary: "#FF6B35", secondary: "#4ECDC4",
  accent: "#FFE66D", purple: "#A78BFA", text: "#2D2D2D", muted: "#888",
};

const EXERCISE_MODES = ["grammar","vocab","quiz","match","fill","reading","homework"];
const MODE_LABELS = { grammar:"💡 Grammatik", vocab:"📚 Vokabeln", quiz:"🎯 Quiz", match:"🔗 Zuordnen", fill:"✏️ Lückentext", reading:"📖 Lesen", homework:"📋 Hausaufgaben" };
const MODE_COLORS = { grammar:"#D97706,#F59E0B", vocab:"#FF6B35,#FF9A6C", quiz:"#A78BFA,#7C3AED", match:"#4ECDC4,#45B7AA", fill:"#F59E0B,#D97706", reading:"#22c55e,#16a34a", homework:"#FF6B35,#E85D20" };

function loadExtra() { try { return JSON.parse(localStorage.getItem("extra_lessons_de") || "[]"); } catch { return []; } }
function saveExtra(l) { try { localStorage.setItem("extra_lessons_de", JSON.stringify(l)); } catch {} }
function loadProgress() { try { return JSON.parse(localStorage.getItem("lesson_progress_de") || "{}"); } catch { return {}; } }
function saveProgress(p) { try { localStorage.setItem("lesson_progress_de", JSON.stringify(p)); } catch {} }

async function loadFromBlob() {
  try {
    const res = await fetch('/api/progress');
    if (!res.ok) return { progress: {}, hwLog: [] };
    return await res.json();
  } catch { return { progress: {}, hwLog: [] }; }
}

async function saveToBlob(progress, hwLog) {
  try {
    await fetch('/api/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ progress, hwLog: hwLog||[] }),
    });
  } catch (e) {
    try { localStorage.setItem('lesson_progress_de', JSON.stringify(progress)); } catch {}
  }
}

function Stars({ count }) {
  return <span style={{ fontSize: 18, letterSpacing: 1 }}>{[0,1,2,3,4].map(i => <span key={i} style={{ color: i < count ? "#FFE66D" : "#e5e7eb", textShadow: i < count ? "0 0 8px #FFE66D" : "none" }}>★</span>)}</span>;
}
function Btn({ children, onClick, color = COLORS.primary, disabled, small, outline }) {
  return <button onClick={onClick} disabled={disabled} style={{ padding: small?"8px 18px":"11px 26px", borderRadius:50, border:outline?`2px solid ${color}`:"none", background:disabled?"#e5e7eb":outline?"#fff":`linear-gradient(135deg,${color},${color}cc)`, color:disabled?"#aaa":outline?color:"#fff", fontFamily:"Nunito, sans-serif", fontWeight:800, fontSize:small?13:15, cursor:disabled?"default":"pointer", boxShadow:disabled||outline?"none":"0 4px 14px rgba(0,0,0,0.15)", transition:"all 0.15s" }}>{children}</button>;
}
function Input({ value, onChange, placeholder, style={} }) {
  return <input value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder} style={{ padding:"10px 14px", borderRadius:12, border:"2px solid #e5e7eb", fontFamily:"Nunito, sans-serif", fontSize:14, outline:"none", width:"100%", boxSizing:"border-box", ...style }} />;
}

// ─── MODAL ────────────────────────────────────────────────────────────────────
function Modal({ icon, title, message, confirmLabel, confirmColor, cancelLabel, onConfirm, onCancel }) {
  return (
    <div style={{ position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:300,padding:24 }} onClick={onCancel}>
      <div onClick={e=>e.stopPropagation()} style={{ background:"#fff",borderRadius:28,padding:"32px 28px",width:"100%",maxWidth:320,textAlign:"center",boxShadow:"0 24px 60px rgba(0,0,0,0.25)",animation:"modalPop 0.2s cubic-bezier(.34,1.56,.64,1)" }}>
        <style>{`@keyframes modalPop{from{transform:scale(0.85);opacity:0}to{transform:scale(1);opacity:1}}`}</style>
        {icon && <div style={{fontSize:52,marginBottom:12}}>{icon}</div>}
        <div style={{fontFamily:"'Fredoka One', cursive",fontSize:22,color:COLORS.text,marginBottom:10}}>{title}</div>
        <div style={{fontFamily:"Nunito, sans-serif",fontSize:15,color:COLORS.muted,lineHeight:1.6,marginBottom:24}}>{message}</div>
        <div style={{display:"flex",gap:10,justifyContent:"center"}}>
          {onCancel && <button onClick={onCancel} style={{flex:1,padding:"12px 0",borderRadius:50,border:"2px solid #e5e7eb",background:"#fff",color:COLORS.muted,fontFamily:"Nunito, sans-serif",fontWeight:800,fontSize:15,cursor:"pointer"}}>{cancelLabel||"Abbrechen"}</button>}
          <button onClick={onConfirm} style={{flex:1,padding:"12px 0",borderRadius:50,border:"none",background:`linear-gradient(135deg,${confirmColor||COLORS.primary},${confirmColor||COLORS.primary}cc)`,color:"#fff",fontFamily:"Nunito, sans-serif",fontWeight:800,fontSize:15,cursor:"pointer",boxShadow:"0 4px 14px rgba(0,0,0,0.15)"}}>{confirmLabel||"OK"}</button>
        </div>
      </div>
    </div>
  );
}

// ─── LOADING ──────────────────────────────────────────────────────────────────
function LoadingScreen() {
  return (
    <div style={{position:"fixed",inset:0,background:COLORS.bg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",zIndex:200}}>
      <div style={{fontSize:56,marginBottom:16,animation:"spin 1s linear infinite"}}>🇩🇪</div>
      <div style={{fontFamily:"'Fredoka One', cursive",fontSize:22,color:COLORS.primary}}>Lädt...</div>
      <div style={{fontFamily:"Nunito, sans-serif",fontSize:14,color:COLORS.muted,marginTop:8}}>Loading David's progress</div>
      <style>{`@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}

// ─── CONFETTI & CELEBRATION ───────────────────────────────────────────────────
function Confetti() {
  const pieces = Array.from({length:30},(_,i)=>({id:i,color:["#FF6B35","#FFE66D","#4ECDC4","#A78BFA","#22c55e","#F59E0B"][i%6],left:`${Math.random()*100}%`,delay:`${Math.random()*1.5}s`,dur:`${1.5+Math.random()}s`,size:`${8+Math.random()*8}px`}));
  return (
    <div style={{position:"fixed",inset:0,pointerEvents:"none",zIndex:150,overflow:"hidden"}}>
      {pieces.map(p=><div key={p.id} style={{position:"absolute",left:p.left,top:"-20px",width:p.size,height:p.size,borderRadius:"2px",background:p.color,opacity:0.9,animation:`fall ${p.dur} ${p.delay} ease-in forwards`}} />)}
      <style>{`@keyframes fall{from{transform:translateY(-20px) rotate(0deg);opacity:1}to{transform:translateY(110vh) rotate(720deg);opacity:0}}`}</style>
    </div>
  );
}
function LessonComplete({ lesson, stars, teacherNote, onDone }) {
  const [show, setShow] = React.useState(true);
  React.useEffect(()=>{setTimeout(()=>setShow(false),3000);},[]);
  return (
    <div style={{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",gap:16,padding:"30px 0"}}>
      {show && <Confetti />}
      <div style={{fontSize:80}}>🎉</div>
      <div style={{fontFamily:"'Fredoka One', cursive",fontSize:30,color:COLORS.primary}}>Lektion abgeschlossen!</div>
      <div style={{fontFamily:"'Fredoka One', cursive",fontSize:20,color:COLORS.text}}>{lesson.title}</div>
      <div style={{display:"flex",gap:4,fontSize:32}}>{[0,1,2,3,4].map(i=><span key={i} style={{color:i<stars?"#FFE66D":"#e5e7eb",textShadow:i<stars?"0 0 12px #FFE66D":"none"}}>★</span>)}</div>
      {teacherNote && (
        <div style={{background:"linear-gradient(135deg,#FFF8E1,#FFF3CD)",border:"2px solid #FFE066",borderRadius:20,padding:"16px 20px",maxWidth:320,width:"100%"}}>
          <div style={{fontFamily:"'Fredoka One', cursive",fontSize:14,color:"#D97706",marginBottom:6}}>✉️ Nachricht von deinem Lehrer</div>
          <div style={{fontFamily:"Nunito, sans-serif",fontSize:15,color:"#78350F",lineHeight:1.5}}>{teacherNote}</div>
        </div>
      )}
      <Btn onClick={onDone} color={COLORS.primary}>Zurück zu den Lektionen 🏠</Btn>
    </div>
  );
}

// ─── GRAMMAR TIP ──────────────────────────────────────────────────────────────
function GrammarTip({ lesson, onDone }) {
  const tip = lesson.grammarTip;
  if (!tip) { onDone(); return null; }
  return (
    <div style={{display:"flex",flexDirection:"column",gap:18}}>
      <div style={{background:"linear-gradient(135deg,#FFF8E1,#FFFDE7)",border:"2px solid #FFD54F",borderRadius:24,padding:"22px 20px"}}>
        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}>
          <div style={{fontSize:32}}>💡</div>
          <div>
            <div style={{fontFamily:"'Fredoka One', cursive",fontSize:20,color:"#D97706"}}>Grammatik-Tipp</div>
            <div style={{fontFamily:"'Fredoka One', cursive",fontSize:16,color:"#92400E"}}>{tip.title}</div>
          </div>
        </div>
        <div style={{fontFamily:"Nunito, sans-serif",fontSize:15,color:"#78350F",lineHeight:1.6,marginBottom:16}}>{tip.explanation}</div>
        <div style={{display:"flex",flexDirection:"column",gap:8}}>
          {tip.examples.map((ex,i)=><div key={i} style={{background:"rgba(255,255,255,0.7)",borderRadius:12,padding:"10px 14px",fontFamily:"Nunito, sans-serif",fontSize:14,color:"#92400E",fontWeight:700}}>📌 {ex}</div>)}
        </div>
      </div>
      <div style={{fontFamily:"Nunito, sans-serif",fontSize:13,color:COLORS.muted,textAlign:"center"}}>Lies das sorgfältig, David — dann weiter! 👆</div>
      <Btn onClick={onDone} color="#D97706">Verstanden! Weiter →</Btn>
    </div>
  );
}

// ─── FLASHCARD ────────────────────────────────────────────────────────────────
function FlashCard({ word, flipped, onFlip }) {
  const front = word.fr || "?";
  return (
    <div onClick={onFlip} style={{cursor:"pointer",width:"100%",maxWidth:320,height:140,perspective:800,margin:"0 auto"}}>
      <div style={{position:"relative",width:"100%",height:"100%",transformStyle:"preserve-3d",transform:flipped?"rotateY(180deg)":"rotateY(0deg)",transition:"transform 0.45s cubic-bezier(.4,2,.6,1)"}}>
        <div style={{position:"absolute",inset:0,backfaceVisibility:"hidden",borderRadius:20,background:"linear-gradient(135deg,#FF6B35,#FF9A6C)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 32px rgba(255,107,53,0.25)"}}>
          <div style={{fontSize:28,fontWeight:900,color:"#fff",fontFamily:"'Fredoka One', cursive",textAlign:"center",padding:"0 16px"}}>{front}</div>
          <div style={{fontSize:12,color:"rgba(255,255,255,0.7)",marginTop:8,fontFamily:"Nunito, sans-serif"}}>Tippe zum Aufdecken 🙈</div>
        </div>
        <div style={{position:"absolute",inset:0,backfaceVisibility:"hidden",transform:"rotateY(180deg)",borderRadius:20,background:"linear-gradient(135deg,#4ECDC4,#45B7AA)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 32px rgba(78,205,196,0.25)"}}>
          <div style={{fontSize:24,fontWeight:900,color:"#fff",fontFamily:"'Fredoka One', cursive",textAlign:"center",padding:"0 16px"}}>{word.en}</div>
          <div style={{fontSize:12,color:"rgba(255,255,255,0.7)",marginTop:8,fontFamily:"Nunito, sans-serif"}}>Zurück 🔄</div>
        </div>
      </div>
    </div>
  );
}
function VocabMode({ lesson, onDone }) {
  const [idx,setIdx]=React.useState(0);const [flipped,setFlipped]=React.useState(false);
  const vocab=lesson.vocab;
  const next=()=>{setFlipped(false);setTimeout(()=>{idx<vocab.length-1?setIdx(idx+1):onDone();},200);};
  const prev=()=>{setFlipped(false);setTimeout(()=>{if(idx>0)setIdx(idx-1);},150);};
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:20}}>
      <div style={{fontFamily:"Nunito, sans-serif",color:COLORS.muted,fontSize:14}}>Wort {idx+1} von {vocab.length}</div>
      <div style={{width:"100%",maxWidth:320}}><div style={{background:"#f3f4f6",borderRadius:50,height:8,overflow:"hidden"}}><div style={{background:"linear-gradient(90deg,#FF6B35,#FF9A6C)",height:"100%",borderRadius:50,width:`${((idx+1)/vocab.length)*100}%`,transition:"width 0.4s"}} /></div></div>
      <FlashCard word={vocab[idx]} flipped={flipped} onFlip={()=>setFlipped(!flipped)} />
      <div style={{display:"flex",gap:12,marginTop:8}}>
        <Btn onClick={prev} disabled={idx===0} outline color={COLORS.primary}>← Zurück</Btn>
        <Btn onClick={next}>{idx<vocab.length-1?"Weiter →":"Quiz starten! 🎯"}</Btn>
      </div>
    </div>
  );
}

// ─── QUIZ ─────────────────────────────────────────────────────────────────────
function QuizMode({ lesson, onDone, onScore }) {
  const [qi,setQi]=React.useState(0);const [selected,setSelected]=React.useState(null);
  const [score,setScore]=React.useState(0);const [done,setDone]=React.useState(false);
  const [finalScore,setFinalScore]=React.useState(0);
  const quiz=lesson.quiz; const q=quiz[qi];
  const choose=(c)=>{
    if(selected)return; setSelected(c);
    const correct=c===q.a; const ns=score+(correct?1:0);
    if(correct)setScore(ns);
    setTimeout(()=>{ if(qi<quiz.length-1){setQi(qi+1);setSelected(null);}else{setFinalScore(ns);setDone(true);onScore(ns,quiz.length);} },900);
  };
  if(done){const stars=Math.round((finalScore/quiz.length)*5);const msg=finalScore===quiz.length?"Perfekt, David! 🎉":finalScore>=quiz.length*0.7?"Gut gemacht, David! 😊":"Weiter üben, David! 💪";return(
    <div style={{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",gap:16,padding:"20px 0"}}>
      <div style={{fontSize:64}}>{finalScore===quiz.length?"🎉":finalScore>=quiz.length*0.7?"😊":"💪"}</div>
      <div style={{fontFamily:"'Fredoka One', cursive",fontSize:26,color:COLORS.primary}}>{msg}</div>
      <div style={{fontFamily:"Nunito, sans-serif",fontSize:16}}>Du hattest <b>{finalScore}</b> von <b>{quiz.length}</b> richtig!</div>
      <Stars count={stars} />
      <Btn onClick={onDone} color={COLORS.secondary}>Nächste Übung →</Btn>
    </div>
  );}
  return(
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:18}}>
      <div style={{fontFamily:"Nunito, sans-serif",color:COLORS.muted,fontSize:14}}>Frage {qi+1} von {quiz.length}</div>
      <div style={{width:"100%",maxWidth:340}}><div style={{background:"#f3f4f6",borderRadius:50,height:8,overflow:"hidden"}}><div style={{background:"linear-gradient(90deg,#A78BFA,#7C3AED)",height:"100%",borderRadius:50,width:`${((qi+1)/quiz.length)*100}%`,transition:"width 0.4s"}} /></div></div>
      <div style={{background:"linear-gradient(135deg,#A78BFA22,#7C3AED11)",border:"2px solid #A78BFA44",borderRadius:20,padding:"18px 20px",width:"100%",maxWidth:340,fontFamily:"'Fredoka One', cursive",fontSize:18,color:COLORS.text,textAlign:"center"}}>{q.q}</div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,width:"100%",maxWidth:340}}>
        {q.choices.map(c=>{let bg="#f9fafb",border="2px solid #e5e7eb",color=COLORS.text;if(selected){if(c===q.a){bg="#dcfce7";border="2px solid #22c55e";color="#15803d";}else if(c===selected){bg="#fee2e2";border="2px solid #ef4444";color="#b91c1c";}}return<button key={c} onClick={()=>choose(c)} style={{padding:"14px 10px",borderRadius:16,border,background:bg,color,fontFamily:"Nunito, sans-serif",fontWeight:700,fontSize:"clamp(12px,3.5vw,15px)",cursor:selected?"default":"pointer",transition:"all 0.2s",lineHeight:1.3}}>{c}</button>;})}
      </div>
    </div>
  );
}

// ─── MATCHING ─────────────────────────────────────────────────────────────────
function MatchMode({ lesson, onDone }) {
  const pairs=lesson.vocab.slice(0,6);
  const [lefts]=React.useState(()=>[...pairs].sort(()=>Math.random()-0.5));
  const [rights]=React.useState(()=>[...pairs].sort(()=>Math.random()-0.5));
  const [selLeft,setSelLeft]=React.useState(null);const [matched,setMatched]=React.useState([]);const [wrong,setWrong]=React.useState(false);const [done,setDone]=React.useState(false);
  const getKey=(item)=>item.de||item.fr||item.en;
  const pickRight=(item)=>{
    if(!selLeft||matched.includes(getKey(item)))return;
    if(getKey(selLeft)===getKey(item)){const nm=[...matched,getKey(item)];setMatched(nm);setSelLeft(null);if(nm.length===pairs.length)setTimeout(()=>setDone(true),600);}
    else{setWrong(true);setTimeout(()=>{setSelLeft(null);setWrong(false);},800);}
  };
  if(done)return(<div style={{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",gap:16,padding:"20px 0"}}><div style={{fontSize:64}}>🎯</div><div style={{fontFamily:"'Fredoka One', cursive",fontSize:26,color:"#4ECDC4"}}>Alles zugeordnet, David!</div><Btn onClick={onDone} color="#4ECDC4">Nächste Übung →</Btn></div>);
  const cs=(active,isMatched,isWrong)=>({padding:"12px 10px",borderRadius:14,fontFamily:"Nunito, sans-serif",fontWeight:700,fontSize:13,textAlign:"center",cursor:isMatched?"default":"pointer",transition:"all 0.2s",border:isMatched?"2px solid #86efac":isWrong?"2px solid #ef4444":active?"2px solid #FF6B35":"2px solid #e5e7eb",background:isMatched?"#dcfce7":isWrong?"#fee2e2":active?"#FFF0EB":"#f9fafb",color:isMatched?"#15803d":isWrong?"#b91c1c":active?COLORS.primary:COLORS.text,opacity:isMatched?0.6:1});
  return(
    <div style={{display:"flex",flexDirection:"column",gap:16}}>
      <div style={{fontFamily:"Nunito, sans-serif",color:COLORS.muted,fontSize:14,textAlign:"center"}}>Ordne Deutsch dem Englischen zu! ({matched.length}/{pairs.length} erledigt)</div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
        <div style={{display:"flex",flexDirection:"column",gap:8}}>
          <div style={{fontFamily:"'Fredoka One', cursive",fontSize:13,color:COLORS.primary,textAlign:"center",marginBottom:2}}>🇩🇪 Deutsch</div>
          {lefts.map(item=>{const k=getKey(item);const isMatched=matched.includes(k);const isActive=selLeft&&getKey(selLeft)===k;return<div key={k} onClick={()=>!isMatched&&setSelLeft(item)} style={cs(isActive,isMatched,wrong&&isActive)}>{item.de||item.fr}</div>;})}
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:8}}>
          <div style={{fontFamily:"'Fredoka One', cursive",fontSize:13,color:"#4ECDC4",textAlign:"center",marginBottom:2}}>🇬🇧 English</div>
          {rights.map(item=>{const k=getKey(item);const isMatched=matched.includes(k);return<div key={k} onClick={()=>pickRight(item)} style={cs(false,isMatched,false)}>{item.en}</div>;})}
        </div>
      </div>
      {!selLeft&&<div style={{fontFamily:"Nunito, sans-serif",fontSize:13,color:COLORS.muted,textAlign:"center"}}>👈 Tippe zuerst ein deutsches Wort</div>}
      {selLeft&&<div style={{fontFamily:"Nunito, sans-serif",fontSize:13,color:COLORS.primary,textAlign:"center"}}>Jetzt tippe das englische Wort für <b>{selLeft.de||selLeft.fr}</b> →</div>}
    </div>
  );
}

// ─── FILL IN THE BLANK ────────────────────────────────────────────────────────
function FillBlankMode({ lesson, onDone }) {
  const blanks=lesson.fillBlanks;const [qi,setQi]=React.useState(0);const [input,setInput]=React.useState("");const [result,setResult]=React.useState(null);const [score,setScore]=React.useState(0);const [done,setDone]=React.useState(false);
  const check=()=>{const correct=input.trim().toLowerCase()===blanks[qi].answer.toLowerCase();setResult(correct?"correct":"wrong");if(correct)setScore(s=>s+1);setTimeout(()=>{if(qi<blanks.length-1){setQi(qi+1);setInput("");setResult(null);}else setDone(true);},1200);};
  if(done)return(<div style={{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",gap:16,padding:"20px 0"}}><div style={{fontSize:56}}>{score===blanks.length?"🌟":"👍"}</div><div style={{fontFamily:"'Fredoka One', cursive",fontSize:24,color:"#F59E0B"}}>{score===blanks.length?"Perfekt, David!":` ${score}/${blanks.length} — gut gemacht!`}</div><Btn onClick={onDone} color="#F59E0B">Nächste Übung →</Btn></div>);
  const b=blanks[qi];const parts=b.sentence.split("___");
  return(
    <div style={{display:"flex",flexDirection:"column",gap:20}}>
      <div style={{fontFamily:"Nunito, sans-serif",color:COLORS.muted,fontSize:14,textAlign:"center"}}>Lückentext — {qi+1} von {blanks.length}</div>
      <div style={{background:"linear-gradient(135deg,#FFF8E1,#FFF3CD)",border:"2px solid #FFE066",borderRadius:20,padding:"22px 20px",fontFamily:"'Fredoka One', cursive",fontSize:20,color:COLORS.text,textAlign:"center",lineHeight:1.8}}>
        {parts[0]}<span style={{borderBottom:"3px solid #FF6B35",minWidth:80,display:"inline-block",color:result==="correct"?"#15803d":result==="wrong"?"#ef4444":COLORS.primary}}>{input||" "}</span>{parts[1]}
      </div>
      <div style={{fontFamily:"Nunito, sans-serif",fontSize:13,color:COLORS.muted,textAlign:"center"}}>💡 Hinweis: {b.hint}</div>
      <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&input.trim()&&!result&&check()} placeholder="Schreibe deine Antwort..." style={{padding:"12px 16px",borderRadius:14,border:`2px solid ${result==="correct"?"#22c55e":result==="wrong"?"#ef4444":"#e5e7eb"}`,fontFamily:"Nunito, sans-serif",fontSize:16,outline:"none",textAlign:"center",background:result==="correct"?"#dcfce7":result==="wrong"?"#fee2e2":"#fff"}} disabled={!!result} autoFocus />
      {result==="wrong"&&<div style={{color:"#ef4444",fontFamily:"Nunito, sans-serif",fontSize:14,textAlign:"center"}}>Nicht ganz — die Antwort ist <b>{b.answer}</b></div>}
      {!result&&<Btn onClick={check} disabled={!input.trim()}>Prüfen ✓</Btn>}
    </div>
  );
}

// ─── READING ──────────────────────────────────────────────────────────────────
function ReadingMode({ lesson, onDone }) {
  const reading=lesson.reading;const [phase,setPhase]=React.useState("read");const [qi,setQi]=React.useState(0);const [selected,setSelected]=React.useState(null);const [score,setScore]=React.useState(0);const [showTrans,setShowTrans]=React.useState(false);
  const choose=(c)=>{if(selected)return;setSelected(c);if(c===reading.questions[qi].a)setScore(s=>s+1);setTimeout(()=>{if(qi<reading.questions.length-1){setQi(qi+1);setSelected(null);}else setPhase("done");},900);};
  if(!reading){onDone();return null;}
  if(phase==="done")return(<div style={{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",gap:16,padding:"20px 0"}}><div style={{fontSize:56}}>{score===reading.questions.length?"📚":"📖"}</div><div style={{fontFamily:"'Fredoka One', cursive",fontSize:24,color:"#22c55e"}}>{score===reading.questions.length?"Perfektes Lesen, David!":` ${score}/${reading.questions.length} — toller Einsatz!`}</div><Btn onClick={onDone} color="#22c55e">Hausaufgaben 📋</Btn></div>);
  if(phase==="read")return(
    <div style={{display:"flex",flexDirection:"column",gap:18}}>
      <div style={{fontFamily:"Nunito, sans-serif",color:COLORS.muted,fontSize:14,textAlign:"center"}}>📖 Lies das sorgfältig, David!</div>
      <div style={{background:"linear-gradient(135deg,#F0FDF4,#DCFCE7)",border:"2px solid #86EFAC",borderRadius:20,padding:"22px 20px"}}><div style={{fontFamily:"Nunito, sans-serif",fontSize:17,color:"#15803D",lineHeight:1.8,fontWeight:700}}>{reading.passage}</div></div>
      <button onClick={()=>setShowTrans(!showTrans)} style={{background:"none",border:"none",cursor:"pointer",fontFamily:"Nunito, sans-serif",fontSize:13,color:COLORS.muted,textDecoration:"underline",textAlign:"center"}}>{showTrans?"Übersetzung ausblenden 🙈":"Übersetzung zeigen 👀"}</button>
      {showTrans&&<div style={{background:"#f9fafb",borderRadius:14,padding:"14px 16px",fontFamily:"Nunito, sans-serif",fontSize:14,color:COLORS.muted,fontStyle:"italic"}}>{reading.translation}</div>}
      <Btn onClick={()=>setPhase("questions")} color="#22c55e">Fragen beantworten →</Btn>
    </div>
  );
  const q=reading.questions[qi];
  return(
    <div style={{display:"flex",flexDirection:"column",gap:18}}>
      <div style={{fontFamily:"Nunito, sans-serif",color:COLORS.muted,fontSize:14,textAlign:"center"}}>Lesefrage {qi+1} von {reading.questions.length}</div>
      <div style={{background:"linear-gradient(135deg,#F0FDF4,#DCFCE7)",border:"2px solid #86EFAC",borderRadius:16,padding:"14px 16px",fontFamily:"Nunito, sans-serif",fontSize:13,color:"#15803D",lineHeight:1.6}}>{reading.passage}</div>
      <div style={{background:"#fff",border:"2px solid #86EFAC",borderRadius:20,padding:"16px 18px",fontFamily:"'Fredoka One', cursive",fontSize:18,color:COLORS.text,textAlign:"center"}}>{q.q}</div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
        {q.choices.map(c=>{let bg="#f9fafb",border="2px solid #e5e7eb",color=COLORS.text;if(selected){if(c===q.a){bg="#dcfce7";border="2px solid #22c55e";color="#15803d";}else if(c===selected){bg="#fee2e2";border="2px solid #ef4444";color="#b91c1c";}}return<button key={c} onClick={()=>choose(c)} style={{padding:"13px 8px",borderRadius:16,border,background:bg,color,fontFamily:"Nunito, sans-serif",fontWeight:700,fontSize:"clamp(12px,3.5vw,14px)",cursor:selected?"default":"pointer",transition:"all 0.2s"}}>{c}</button>;})}
      </div>
    </div>
  );
}

// ─── HOMEWORK ─────────────────────────────────────────────────────────────────
function HomeworkMode({ lesson, onDone, onSave }) {
  const [ticked,setTicked]=React.useState([]);
  const [saved,setSaved]=React.useState(false);
  const toggle=(i)=>setTicked(t=>t.includes(i)?t.filter(x=>x!==i):[...t,i]);
  const allDone=ticked.length===lesson.homework.length;

  const handleDone=()=>{
    if(!saved){
      const tasks=lesson.homework.map((text,i)=>({text,done:ticked.includes(i)}));
      onSave&&onSave(lesson.id,lesson.title,tasks);
      setSaved(true);
    }
    onDone();
  };

  return(
    <div style={{display:"flex",flexDirection:"column",gap:16}}>
      <div style={{background:"linear-gradient(135deg,#FFF8E1,#FFFBF0)",border:"2px solid #FFE066",borderRadius:20,padding:"18px 20px"}}>
        <div style={{fontFamily:"'Fredoka One', cursive",fontSize:20,color:"#D97706",marginBottom:4}}>📋 Meine Hausaufgaben</div>
        <div style={{fontFamily:"Nunito, sans-serif",fontSize:13,color:COLORS.muted}}>Hake ab, was du erledigt hast — wird automatisch gespeichert!</div>
      </div>
      {lesson.homework.map((task,i)=>(
        <div key={i} onClick={()=>toggle(i)} style={{display:"flex",alignItems:"flex-start",gap:14,background:ticked.includes(i)?"#f0fdf4":COLORS.card,border:`2px solid ${ticked.includes(i)?"#86efac":"#e5e7eb"}`,borderRadius:18,padding:"16px 18px",cursor:"pointer",transition:"all 0.2s"}}>
          <div style={{width:28,height:28,borderRadius:8,border:`2.5px solid ${ticked.includes(i)?"#22c55e":"#d1d5db"}`,background:ticked.includes(i)?"#22c55e":"#fff",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:16,color:"#fff"}}>{ticked.includes(i)?"✓":""}</div>
          <div style={{fontFamily:"Nunito, sans-serif",fontSize:15,color:ticked.includes(i)?"#15803d":COLORS.text,fontWeight:700,textDecoration:ticked.includes(i)?"line-through":"none",lineHeight:1.4}}>{task}</div>
        </div>
      ))}
      {allDone&&<div style={{background:"linear-gradient(135deg,#dcfce7,#f0fdf4)",border:"2px solid #86efac",borderRadius:18,padding:"16px 18px",textAlign:"center"}}><div style={{fontFamily:"'Fredoka One', cursive",fontSize:20,color:"#15803d"}}>🌟 Tolle Arbeit, David! Alles erledigt!</div></div>}
      <Btn onClick={handleDone} color={COLORS.primary}>Fertig — Speichern & nach Hause 🏠</Btn>
    </div>
  );
}

// ─── GRAMMAR VAULT ────────────────────────────────────────────────────────────
function GrammarVault({ progress }) {
  const [selected, setSelected] = React.useState(null);
  const isUnlocked = (entry) => progress[entry.lessonId]?.completed;

  if (selected) {
    const entry = GRAMMAR_VAULT.find(e => e.id === selected);
    return (
      <div style={{display:"flex",flexDirection:"column",gap:16}}>
        <button onClick={()=>setSelected(null)} style={{background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:6,fontFamily:"Nunito, sans-serif",fontWeight:700,color:COLORS.muted,fontSize:15,padding:0}}>← Zurück zur Grammatik-Schatzkammer</button>
        <div style={{background:`linear-gradient(135deg,${entry.color},${entry.color}cc)`,borderRadius:24,padding:"20px 22px",boxShadow:`0 8px 24px ${entry.color}44`}}>
          <div style={{fontSize:40}}>{entry.emoji}</div>
          <div style={{fontFamily:"'Fredoka One', cursive",fontSize:24,color:"#fff",marginTop:8}}>{entry.title}</div>
          <div style={{fontFamily:"Nunito, sans-serif",fontSize:13,color:"rgba(255,255,255,0.8)",marginTop:2}}>Lektion {entry.lessonId} — Grammatik</div>
        </div>
        <div style={{background:"#f9fafb",borderRadius:16,padding:"16px 18px"}}>
          <div style={{fontFamily:"Nunito, sans-serif",fontSize:15,color:COLORS.text,lineHeight:1.7}}>{entry.explanation}</div>
        </div>
        {entry.table && (
          <div style={{borderRadius:16,overflow:"hidden",border:"2px solid #e5e7eb"}}>
            <table style={{width:"100%",borderCollapse:"collapse",fontFamily:"Nunito, sans-serif",fontSize:14}}>
              <thead>
                <tr style={{background:`${entry.color}22`}}>
                  {entry.table.headers.map((h,i)=><th key={i} style={{padding:"10px 14px",textAlign:"left",fontWeight:800,color:entry.color,borderBottom:"2px solid #e5e7eb"}}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {entry.table.rows.map((row,i)=>(
                  <tr key={i} style={{background:i%2===0?"#fff":"#f9fafb"}}>
                    {row.map((cell,j)=><td key={j} style={{padding:"10px 14px",borderBottom:"1px solid #f3f4f6",fontWeight:j===0?800:400,color:j===0?COLORS.text:COLORS.muted}}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div style={{background:`${entry.color}18`,border:`2px solid ${entry.color}44`,borderRadius:16,padding:"14px 16px"}}>
          <div style={{fontFamily:"Nunito, sans-serif",fontSize:14,color:COLORS.text,lineHeight:1.6}}>💡 <b>Tipp:</b> {entry.tip}</div>
        </div>
      </div>
    );
  }

  const unlocked = GRAMMAR_VAULT.filter(e => isUnlocked(e));
  const locked = GRAMMAR_VAULT.filter(e => !isUnlocked(e));

  return (
    <div style={{display:"flex",flexDirection:"column",gap:16}}>
      <div style={{background:"linear-gradient(135deg,#7C3AED,#A78BFA)",borderRadius:24,padding:"20px 22px",boxShadow:"0 8px 24px rgba(124,58,237,0.25)"}}>
        <div style={{fontFamily:"'Fredoka One', cursive",fontSize:26,color:"#fff"}}>🏛️ Grammatik-Schatzkammer</div>
        <div style={{fontFamily:"Nunito, sans-serif",fontSize:13,color:"rgba(255,255,255,0.85)",marginTop:4}}>Schließe Lektionen ab, um Grammatik-Karten freizuschalten!</div>
        <div style={{fontFamily:"Nunito, sans-serif",fontSize:13,color:"rgba(255,255,255,0.85)",marginTop:4}}>{unlocked.length} von {GRAMMAR_VAULT.length} freigeschaltet</div>
      </div>

      {/* Progress bar */}
      <div style={{background:"#f3f4f6",borderRadius:50,height:10,overflow:"hidden"}}>
        <div style={{background:"linear-gradient(90deg,#7C3AED,#A78BFA)",height:"100%",borderRadius:50,width:`${(unlocked.length/GRAMMAR_VAULT.length)*100}%`,transition:"width 0.6s"}} />
      </div>

      {unlocked.length > 0 && (
        <>
          <div style={{fontFamily:"'Fredoka One', cursive",fontSize:16,color:"#7C3AED"}}>✅ Freigeschaltet ({unlocked.length})</div>
          {unlocked.map(entry=>(
            <div key={entry.id} onClick={()=>setSelected(entry.id)} style={{background:COLORS.card,borderRadius:20,padding:"14px 18px",display:"flex",alignItems:"center",gap:14,border:`2px solid ${entry.color}44`,boxShadow:"0 4px 16px rgba(0,0,0,0.06)",cursor:"pointer",transition:"transform 0.15s"}}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";}} onMouseLeave={e=>{e.currentTarget.style.transform="";}}>
              <div style={{width:44,height:44,borderRadius:14,background:`${entry.color}22`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,flexShrink:0}}>{entry.emoji}</div>
              <div style={{flex:1}}>
                <div style={{fontFamily:"'Fredoka One', cursive",fontSize:16,color:COLORS.text}}>{entry.title}</div>
                <div style={{fontFamily:"Nunito, sans-serif",fontSize:12,color:COLORS.muted,marginTop:2}}>Lektion {entry.lessonId} · Tippe zum Lesen</div>
              </div>
              <div style={{fontSize:20,color:entry.color}}>→</div>
            </div>
          ))}
        </>
      )}

      {locked.length > 0 && (
        <>
          <div style={{fontFamily:"'Fredoka One', cursive",fontSize:16,color:COLORS.muted,marginTop:4}}>🔒 Noch gesperrt ({locked.length})</div>
          {locked.map(entry=>(
            <div key={entry.id} style={{background:"#f9fafb",borderRadius:20,padding:"14px 18px",display:"flex",alignItems:"center",gap:14,border:"2px dashed #d1d5db",opacity:0.6}}>
              <div style={{width:44,height:44,borderRadius:14,background:"#e5e7eb",display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,flexShrink:0}}>🔒</div>
              <div style={{flex:1}}>
                <div style={{fontFamily:"'Fredoka One', cursive",fontSize:16,color:COLORS.muted}}>{entry.title}</div>
                <div style={{fontFamily:"Nunito, sans-serif",fontSize:12,color:COLORS.muted,marginTop:2}}>Schließe Lektion {entry.lessonId} ab, um freizuschalten</div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

// ─── LESSON CARD ──────────────────────────────────────────────────────────────
function LessonCard({ lesson, prevLessonId, progress, onClick }) {
  const isUnlocked = !prevLessonId || progress[prevLessonId]?.completed;
  const done = progress[lesson.id]?.completed;
  const stars = progress[lesson.id]?.stars || 0;
  const dotColor = stars>=4?"#22c55e":stars>=2?"#F59E0B":"#ef4444";
  return (
    <div onClick={isUnlocked?onClick:undefined}
      style={{background:lesson.isReview?(done?"linear-gradient(135deg,#fef9c3,#fef08a)":isUnlocked?"linear-gradient(135deg,#fefce8,#fef9c3)":"#f9fafb"):done?"linear-gradient(135deg,#f0fdf4,#dcfce7)":isUnlocked?COLORS.card:"#f9fafb",border:lesson.isReview?(done?"2px solid #facc15":isUnlocked?"2px solid #fde047":"2px dashed #d1d5db"):done?"2px solid #86efac":isUnlocked?"2px solid #e5e7eb":"2px dashed #d1d5db",borderRadius:20,padding:"14px 18px",cursor:isUnlocked?"pointer":"not-allowed",opacity:isUnlocked?1:0.55,transition:"transform 0.15s, box-shadow 0.15s",boxShadow:isUnlocked?"0 4px 16px rgba(0,0,0,0.07)":"none",display:"flex",alignItems:"center",gap:14}}
      onMouseEnter={e=>{if(isUnlocked){e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 8px 24px rgba(0,0,0,0.12)";}}}
      onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow=isUnlocked?"0 4px 16px rgba(0,0,0,0.07)":"none";}}>
      <div style={{fontSize:30,width:40,textAlign:"center"}}>{isUnlocked?lesson.emoji:"🔒"}</div>
      <div style={{flex:1}}>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <div style={{fontFamily:"'Fredoka One', cursive",fontSize:15,color:COLORS.text}}>{lesson.title}</div>
          {lesson.isReview&&<span style={{background:"#facc15",color:"#78350f",fontSize:10,fontFamily:"Nunito, sans-serif",fontWeight:800,padding:"2px 8px",borderRadius:50}}>WIEDERHOLUNG</span>}
        </div>
        <div style={{fontFamily:"Nunito, sans-serif",fontSize:11,color:COLORS.muted,marginTop:2}}>Session {lesson.session} · {lesson.month}</div>
        {done&&<Stars count={stars} />}
      </div>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:4}}>
        {done&&<div style={{fontSize:18}}>✅</div>}
        {done&&<div style={{width:10,height:10,borderRadius:"50%",background:dotColor}} />}
      </div>
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function FrenchApp() {
  const [screen,setScreen]=useState("home");
  const [tab,setTab]=useState("lektionen"); // lektionen | grammatik | hausaufgaben
  const [currentLesson,setCurrentLesson]=useState(null);
  const [mode,setMode]=useState("grammar");
  const [progress,setProgress]=useState(loadProgress);
  const [synced,setSynced]=useState(false);
  const [celebration,setCelebration]=useState(null);

  const [hwLog,setHwLog]=useState([]); // saved homework submissions
  const [modal,setModal]=useState(null);

  React.useEffect(()=>{
    loadFromBlob().then(data=>{
      if(data.progress&&Object.keys(data.progress).length>0)setProgress(data.progress);
      if(data.hwLog)setHwLog(data.hwLog);
      setSynced(true);
    });
  },[]);

  const allLessons=BUILT_IN_LESSONS;
  const MONTH_ORDER=["April","May","June","July","August"];
  const months=MONTH_ORDER.filter(m=>allLessons.some(l=>l.month===m));
  const totalStars=Object.values(progress).reduce((a,b)=>a+(b.stars||0),0);
  const completed=Object.values(progress).filter(p=>p.completed).length;

  const showModal=(config)=>setModal(config);
  const hideModal=()=>setModal(null);

  const updateProgress=(id,stars)=>{
    const updated={...progress,[id]:{completed:true,stars:Math.max(stars,progress[id]?.stars||0)}};
    setProgress(updated);saveProgress(updated);
    saveToBlob(updated,hwLog);
    setCelebration({lesson:currentLesson,stars});
  };

  const saveHwEntry=(lessonId,lessonTitle,tasks)=>{
    const entry={lessonId,lessonTitle,tasks,date:new Date().toLocaleDateString("de-DE")};
    const updated=[entry,...hwLog].slice(0,30);
    setHwLog(updated);
    saveToBlob(progress,updated);
  };

  const openLesson=(lesson)=>{setCurrentLesson(lesson);setMode(lesson.grammarTip?"grammar":"vocab");setScreen("lesson");};

  const availableModes=currentLesson?EXERCISE_MODES.filter(m=>{
    if(m==="grammar")return!!currentLesson.grammarTip;
    if(m==="fill")return currentLesson.fillBlanks?.length>0;
    if(m==="reading")return!!currentLesson.reading;
    if(m==="homework")return currentLesson.homework?.length>0;
    return true;
  }):[];
  const advance=(current)=>{
    const idx=availableModes.indexOf(current);
    const next=idx<availableModes.length-1?availableModes[idx+1]:null;
    if(next)setMode(next);else setScreen("home");
  };

  const tabColor = tab==="grammatik"?"linear-gradient(135deg,#4338CA,#6366F1)":"linear-gradient(135deg,#FF6B35,#FF9A6C)";

  return(
    <div style={{minHeight:"100vh",background:COLORS.bg,fontFamily:"Nunito, sans-serif",backgroundImage:"radial-gradient(circle at 20% 20%,#FFE66D22 0%,transparent 50%),radial-gradient(circle at 80% 80%,#4ECDC422 0%,transparent 50%)"}}>
      <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
      {!synced&&<LoadingScreen />}
      {celebration&&<LessonComplete lesson={celebration.lesson} stars={celebration.stars} teacherNote={null} onDone={()=>{setCelebration(null);setScreen("home");}} />}
      {modal&&<Modal {...modal} onCancel={modal.onCancel||hideModal} onConfirm={()=>{modal.onConfirm&&modal.onConfirm();hideModal();}} />}

      {/* Header */}
      <div style={{background:tabColor,padding:"16px 20px 0",boxShadow:"0 4px 20px rgba(0,0,0,0.15)",position:"sticky",top:0,zIndex:10,transition:"background 0.3s"}}>
        <div style={{maxWidth:500,margin:"0 auto"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",paddingBottom:14}}>
            <div>
              <div style={{fontFamily:"'Fredoka One', cursive",fontSize:24,color:"#fff",lineHeight:1}}>🇩🇪 Hallo!</div>
              <div style={{fontSize:11,color:"rgba(255,255,255,0.8)",marginTop:2}}>Hallo, David! 👦</div>
            </div>
            <div style={{display:"flex",gap:14}}>
              <div style={{textAlign:"center"}}><div style={{fontFamily:"'Fredoka One', cursive",fontSize:18,color:"#FFE66D"}}>⭐ {totalStars}</div><div style={{fontSize:10,color:"rgba(255,255,255,0.7)"}}>Sterne</div></div>
              <div style={{textAlign:"center"}}><div style={{fontFamily:"'Fredoka One', cursive",fontSize:18,color:"#fff"}}>✅ {completed}</div><div style={{fontSize:10,color:"rgba(255,255,255,0.7)"}}>erledigt</div></div>
            </div>
          </div>
          {screen==="home"&&(
            <div style={{display:"flex"}}>
              {[["lektionen","📚 Lektionen",COLORS.primary],["grammatik","🏛️ Grammatik","#4338CA"],["hausaufgaben","📋 Hausaufgaben","#D97706"]].map(([t,label,active])=>(
                <button key={t} onClick={()=>setTab(t)} style={{flex:1,padding:"10px 0",border:"none",borderRadius:"12px 12px 0 0",background:tab===t?"#fff":"transparent",color:tab===t?active:"rgba(255,255,255,0.75)",fontFamily:"Nunito, sans-serif",fontWeight:800,fontSize:12,cursor:"pointer",transition:"all 0.2s"}}>{label}</button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div style={{maxWidth:500,margin:"0 auto",padding:"20px 16px 60px"}}>

        {/* ── LEKTIONEN TAB ── */}
        {screen==="home"&&tab==="lektionen"&&(
          <div style={{display:"flex",flexDirection:"column",gap:12}}>
            {/* Welcome banner */}
            <div style={{background:"linear-gradient(135deg,#FF6B35,#FF9A6C)",borderRadius:24,padding:"20px 22px",display:"flex",alignItems:"center",gap:16,boxShadow:"0 8px 24px rgba(255,107,53,0.2)"}}>
              <div style={{fontSize:52,lineHeight:1}}>👦</div>
              <div>
                <div style={{fontFamily:"'Fredoka One', cursive",fontSize:24,color:"#fff",lineHeight:1.1}}>Hallo, David!</div>
                <div style={{fontFamily:"Nunito, sans-serif",fontSize:13,color:"rgba(255,255,255,0.85)",marginTop:4}}>
                  {completed===0?"Bereit für deine erste Lektion? Los geht's! 🚀":completed===allLessons.length?"Du hast alles abgeschlossen! Unglaublich! 🏆":`Tolle Arbeit — noch ${allLessons.length-completed} Lektion${allLessons.length-completed===1?"":"en"}! 💪`}
                </div>
              </div>
            </div>
            {/* Progress */}
            <div style={{background:COLORS.card,borderRadius:20,padding:"16px 18px",boxShadow:"0 2px 12px rgba(0,0,0,0.06)"}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
                <span style={{fontFamily:"'Fredoka One', cursive",color:COLORS.text,fontSize:15}}>Mein Fortschritt</span>
                <span style={{fontFamily:"Nunito, sans-serif",fontWeight:700,color:COLORS.muted,fontSize:14}}>{completed}/{allLessons.length} Lektionen</span>
              </div>
              <div style={{background:"#f3f4f6",borderRadius:50,height:12,overflow:"hidden"}}>
                <div style={{background:"linear-gradient(90deg,#FF6B35,#FFE66D)",height:"100%",borderRadius:50,width:`${(completed/allLessons.length)*100}%`,transition:"width 0.6s"}} />
              </div>
              {totalStars>0&&<div style={{fontFamily:"Nunito, sans-serif",fontSize:13,color:COLORS.muted,marginTop:8}}>⭐ {totalStars} Sterne verdient — weiter so!</div>}
            </div>
            {/* Colour legend */}
            <div style={{display:"flex",gap:12,padding:"4px 4px"}}>
              {[["#22c55e","4-5 ★ Sehr gut"],["#F59E0B","2-3 ★ Gut"],["#ef4444","0-1 ★ Üben"]].map(([c,l])=>(
                <div key={l} style={{display:"flex",alignItems:"center",gap:5}}>
                  <div style={{width:10,height:10,borderRadius:"50%",background:c,flexShrink:0}} />
                  <div style={{fontFamily:"Nunito, sans-serif",fontSize:11,color:COLORS.muted}}>{l}</div>
                </div>
              ))}
            </div>
            {/* Lessons by month */}
            {(()=>{
              const sorted=[...allLessons].sort((a,b)=>a.session!==b.session?a.session-b.session:a.id-b.id);
              return months.map(m=>(
                <div key={m}>
                  <div style={{fontFamily:"'Fredoka One', cursive",fontSize:17,color:MONTH_META[m]?.color||COLORS.primary,marginTop:8,marginBottom:6}}>{MONTH_META[m]?.label||`📚 ${m}`}</div>
                  {allLessons.filter(l=>l.month===m).sort((a,b)=>a.session!==b.session?a.session-b.session:a.id-b.id).map(lesson=>{
                    const idx=sorted.findIndex(l=>l.id===lesson.id);
                    const prevId=idx>0?sorted[idx-1].id:null;
                    return (
                      <div key={lesson.id} style={{marginBottom:8}}>
                        <LessonCard lesson={lesson} prevLessonId={prevId} progress={progress} onClick={()=>openLesson(lesson)} />
                      </div>
                    );
                  })}
                </div>
              ));
            })()}
          </div>
        )}

        {/* ── GRAMMATIK TAB ── */}
        {screen==="home"&&tab==="grammatik"&&<GrammarVault progress={progress} />}

        {/* ── HAUSAUFGABEN TAB ── */}
        {screen==="home"&&tab==="hausaufgaben"&&(
          <div style={{display:"flex",flexDirection:"column",gap:14}}>
            <div style={{background:"linear-gradient(135deg,#D97706,#F59E0B)",borderRadius:24,padding:"18px 22px",boxShadow:"0 8px 24px rgba(217,119,6,0.25)"}}>
              <div style={{fontFamily:"'Fredoka One', cursive",fontSize:24,color:"#fff"}}>📋 Meine Hausaufgaben</div>
              <div style={{fontFamily:"Nunito, sans-serif",fontSize:13,color:"rgba(255,255,255,0.85)",marginTop:4}}>{hwLog.length} Einträge gespeichert</div>
            </div>
            {hwLog.length===0
              ? <div style={{textAlign:"center",padding:"40px 20px",fontFamily:"Nunito, sans-serif",color:COLORS.muted,fontSize:15}}>Noch keine Hausaufgaben erledigt. Schließe eine Lektion ab, um anzufangen! 📚</div>
              : hwLog.map((entry,i)=>(
                <div key={i} style={{background:COLORS.card,borderRadius:20,padding:"16px 18px",border:"2px solid #FDE68A",boxShadow:"0 2px 8px rgba(0,0,0,0.05)"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10}}>
                    <div style={{fontFamily:"'Fredoka One', cursive",fontSize:16,color:"#D97706"}}>{entry.lessonTitle}</div>
                    <div style={{fontFamily:"Nunito, sans-serif",fontSize:12,color:COLORS.muted,flexShrink:0,marginLeft:8}}>{entry.date}</div>
                  </div>
                  <div style={{display:"flex",flexDirection:"column",gap:6}}>
                    {entry.tasks.map((task,j)=>(
                      <div key={j} style={{display:"flex",alignItems:"flex-start",gap:10}}>
                        <div style={{width:20,height:20,borderRadius:6,background:task.done?"#22c55e":"#e5e7eb",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:12,color:"#fff",marginTop:1}}>{task.done?"✓":""}</div>
                        <div style={{fontFamily:"Nunito, sans-serif",fontSize:14,color:task.done?"#15803d":COLORS.text,textDecoration:task.done?"line-through":"none",lineHeight:1.4}}>{task.text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            }
          </div>
        )}

        {/* ── LESSON SCREEN ── */}
        {screen==="lesson"&&currentLesson&&(
          <div>
            <button onClick={()=>showModal({icon:"🚪",title:"Lektion verlassen?",message:"Dein Fortschritt in dieser Übung geht verloren.",confirmLabel:"Verlassen",confirmColor:"#ef4444",cancelLabel:"Bleiben",onConfirm:()=>setScreen("home")})} style={{background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:6,fontFamily:"Nunito, sans-serif",fontWeight:700,color:COLORS.muted,fontSize:15,marginBottom:16,padding:0}}>← Zurück</button>
            <div style={{background:"linear-gradient(135deg,#FF6B35,#FF9A6C)",borderRadius:24,padding:"20px 22px",marginBottom:18,boxShadow:"0 8px 24px rgba(255,107,53,0.2)"}}>
              <div style={{fontSize:40}}>{currentLesson.emoji}</div>
              <div style={{fontFamily:"'Fredoka One', cursive",fontSize:21,color:"#fff",marginTop:6}}>Lektion {currentLesson.id}: {currentLesson.title}</div>
              <div style={{fontFamily:"Nunito, sans-serif",fontSize:13,color:"rgba(255,255,255,0.8)",marginTop:2}}>Session {currentLesson.session} · {currentLesson.month} · Viel Erfolg, David! 🌟</div>
            </div>
            <div style={{display:"flex",gap:8,marginBottom:20,overflowX:"auto",paddingBottom:4}}>
              {availableModes.map(m=>(
                <button key={m} onClick={()=>setMode(m)} style={{flexShrink:0,padding:"9px 14px",borderRadius:50,border:"none",background:mode===m?`linear-gradient(135deg,${MODE_COLORS[m]})`:"#f3f4f6",color:mode===m?"#fff":COLORS.muted,fontFamily:"Nunito, sans-serif",fontWeight:800,fontSize:12,cursor:"pointer",boxShadow:mode===m?"0 4px 14px rgba(0,0,0,0.15)":"none",transition:"all 0.2s",whiteSpace:"nowrap"}}>
                  {MODE_LABELS[m]}
                </button>
              ))}
            </div>
            {mode==="grammar"&&<GrammarTip lesson={currentLesson} onDone={()=>advance("grammar")} />}
            {mode==="vocab"&&<VocabMode lesson={currentLesson} onDone={()=>advance("vocab")} />}
            {mode==="quiz"&&<QuizMode lesson={currentLesson} onDone={()=>advance("quiz")} onScore={(s,t)=>updateProgress(currentLesson.id,Math.round((s/t)*5))} />}
            {mode==="match"&&<MatchMode lesson={currentLesson} onDone={()=>advance("match")} />}
            {mode==="fill"&&<FillBlankMode lesson={currentLesson} onDone={()=>advance("fill")} />}
            {mode==="reading"&&<ReadingMode lesson={currentLesson} onDone={()=>advance("reading")} />}
            {mode==="homework"&&<HomeworkMode lesson={currentLesson} onSave={saveHwEntry} onDone={()=>setScreen("home")} />}
          </div>
        )}
      </div>
    </div>
  );
}
