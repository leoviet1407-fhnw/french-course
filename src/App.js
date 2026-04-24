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
    id: 3, session: 2, week: 2, month: "April", title: "Zahlen 11–100", emoji: "💯",
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
    id: 4, session: 2, week: 2, month: "April", title: "Farben", emoji: "🎨",
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
    id: 5, session: 3, week: 3, month: "April", title: "Schulsachen", emoji: "🎒",
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
    id: 6, session: 3, week: 3, month: "April", title: "Familie", emoji: "👨‍👩‍👧",
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
    id: 7, session: 4, week: 4, month: "May", title: "Tiere", emoji: "🐾",
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
    id: 8, session: 4, week: 4, month: "May", title: "Essen & Trinken", emoji: "🍎",
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
];

const GRAMMAR_VAULT = [
  { id: 1, lessonId: 1, title: "Tu vs Vous", emoji: "👥", color: "#6366F1",
    explanation: "Im Französischen gibt es zwei Arten 'you' zu sagen. 'Tu' benutzt du mit Freunden und Familie. 'Vous' benutzt du mit Erwachsenen, die du nicht gut kennst.",
    table: { headers: ["Situation","Pronomen","Beispiel"], rows: [["Mit Freunden","tu","Ça va, tu ?"],["Formell","vous","Ça va, vous ?"],["Plural","vous","Comment allez-vous ?"]] },
    tip: "Benutze immer 'vous' mit Lehrern und Fremden — es ist höflicher!" },
  { id: 2, lessonId: 2, title: "Zahlen 1–10", emoji: "🔢", color: "#FF6B35",
    explanation: "Die französischen Zahlen von 1 bis 10 muss man auswendig lernen.",
    table: { headers: ["Zahl","Französisch","Aussprache"], rows: [["1","un","œ̃"],["2","deux","dø"],["3","trois","tʁwa"],["4","quatre","katʁ"],["5","cinq","sɛ̃k"],["6","six","sis"],["7","sept","sɛt"],["8","huit","ɥit"],["9","neuf","nœf"],["10","dix","dis"]] },
    tip: "Übe täglich laut zu zählen — Wiederholung ist der Schlüssel!" },
  { id: 3, lessonId: 3, title: "Zahlen 11–100", emoji: "💯", color: "#F59E0B",
    explanation: "Zahlen über 20 werden im Französischen kombiniert: 17 = dix-sept (zehn-sieben). 70 = soixante-dix (sechzig-zehn)!",
    table: { headers: ["Zahl","Französisch","Muster"], rows: [["11","onze","Sonderform"],["12","douze","Sonderform"],["20","vingt","Basis"],["21","vingt et un","20+1"],["70","soixante-dix","60+10"],["100","cent","Basis"]] },
    tip: "70 = soixante-dix (60+10) und 80 = quatre-vingts (4×20) — sehr ungewöhnlich!" },
  { id: 4, lessonId: 4, title: "Maskulin & Feminin — un/une", emoji: "🏷️", color: "#4ECDC4",
    explanation: "Jedes französische Nomen ist entweder maskulin (un/le) oder feminin (une/la). Es gibt keine Regel — man muss es mit jedem Wort lernen!",
    table: { headers: ["Geschlecht","Artikel","Beispiel"], rows: [["Maskulin","un/le","un chat (eine Katze)"],["Feminin","une/la","une gomme (ein Radiergummi)"],["Maskulin Plural","des/les","des chats (Katzen)"],["Feminin Plural","des/les","des gommes (Radiergummis)"]] },
    tip: "Lerne immer Nomen MIT ihrem Artikel: 'un stylo', nicht nur 'stylo'!" },
  { id: 5, lessonId: 5, title: "Adjektive — nach dem Nomen!", emoji: "📝", color: "#A78BFA",
    explanation: "Im Französischen kommen die meisten Adjektive NACH dem Nomen — anders als im Deutschen! 'Un chat noir' (eine schwarze Katze). Die Farbe folgt dem Tier.",
    table: { headers: ["Deutsch","Französisch","Reihenfolge"], rows: [["eine schwarze Katze","un chat noir","Nomen + Adj."],["ein roter Stift","un stylo rouge","Nomen + Adj."],["ein blaues Buch","un livre bleu","Nomen + Adj."],["eine grüne Tasche","un sac vert","Nomen + Adj."]] },
    tip: "Farben kommen IMMER nach dem Nomen auf Französisch!" },
  { id: 6, lessonId: 6, title: "Mon / Ma / Mes", emoji: "👤", color: "#22c55e",
    explanation: "'Mon' bedeutet 'mein' für maskuline Nomen, 'ma' für feminine Nomen und 'mes' für Pluralnomen. Folgt dem gleichen Muster wie un/une!",
    table: { headers: ["Geschlecht","Possessiv","Beispiel"], rows: [["Maskulin","mon","mon frère (mein Bruder)"],["Feminin","ma","ma sœur (meine Schwester)"],["Plural","mes","mes parents (meine Eltern)"],["Vor Vokal","mon","mon amie (meine Freundin)"]] },
    tip: "Vor Vokalen benutzt man immer 'mon' — auch bei femininen Nomen: 'mon amie'!" },
  { id: 7, lessonId: 7, title: "J'aime / Je n'aime pas", emoji: "❤️", color: "#EF4444",
    explanation: "'J'aime' = Ich mag. 'Je n'aime pas' = Ich mag nicht. Nach 'aimer' benutzt du 'les' (Plural): 'J'aime les chiens'.",
    table: { headers: ["Französisch","Deutsch","Beispiel"], rows: [["J'aime","Ich mag","J'aime les chats"],["Je n'aime pas","Ich mag nicht","Je n'aime pas les serpents"],["J'adore","Ich liebe","J'adore les chiens"],["Je déteste","Ich hasse","Je déteste les araignées"]] },
    tip: "Nach 'aimer/adorer/détester' benutze immer 'les': 'J'aime LES chats' (nicht 'des chats')" },
  { id: 8, lessonId: 8, title: "Du / De la / Des", emoji: "🍽️", color: "#D97706",
    explanation: "Der Teilungsartikel zeigt 'etwas von'. 'Du' für maskuline Nomen, 'de la' für feminine, 'des' für Plural. Nach 'manger' und 'boire' immer verwenden!",
    table: { headers: ["Geschlecht","Artikel","Beispiel"], rows: [["Maskulin","du","Je mange du pain"],["Feminin","de la","Je mange de la salade"],["Plural","des","Je mange des pommes"],["Vor Vokal","de l'","Je bois de l'eau"]] },
    tip: "Nach Verneinung wird alles zu 'de/d': 'Je ne mange PAS DE pain'" },
];

const MONTH_META = {
  April: { label: "🌸 April — Grundlagen", color: "#FF6B35" },
  May:   { label: "🌿 Mai — Wortschatz", color: "#4ECDC4" },
  June:  { label: "☀️ Juni — Sätze bauen", color: "#F59E0B" },
  July:  { label: "🎓 Juli — Fortgeschritten", color: "#6366F1" },
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
function LessonCard({ lesson, progress, onClick }) {
  const isUnlocked = lesson.id===1 || progress[lesson.id-1]?.completed;
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
  const months=[...new Set(allLessons.map(l=>l.month))];
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
            {months.map(m=>(
              <div key={m}>
                <div style={{fontFamily:"'Fredoka One', cursive",fontSize:17,color:MONTH_META[m]?.color||COLORS.primary,marginTop:8,marginBottom:6}}>{MONTH_META[m]?.label||`📚 ${m}`}</div>
                {allLessons.filter(l=>l.month===m).map(lesson=>(
                  <div key={lesson.id} style={{marginBottom:8}}>
                    <LessonCard lesson={lesson} progress={progress} onClick={()=>openLesson(lesson)} />
                  </div>
                ))}
              </div>
            ))}
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
