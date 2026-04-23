import React, { useState } from "react";

// ─── LESSON DATA (GERMAN) ─────────────────────────────────────────────────────
const BUILT_IN_LESSONS = [
  // ── SESSION 1 ── Greetings & Numbers
  {
    id: 1, session: 1, week: 1, month: "April", title: "Grüßen & Vorstellen", emoji: "👋",
    grammarTip: {
      title: "Du vs Sie",
      explanation: "Im Deutschen gibt es zwei Arten 'you' zu sagen. 'Du' benutzt du mit Freunden und Familie. 'Sie' benutzt du mit Erwachsenen, die du nicht gut kennst — wie einem Lehrer.",
      examples: ["Wie geht es dir? (casual — to a friend)", "Wie geht es Ihnen? (polite — to a teacher)", "Du bist nett. (You are nice — informal)"],
    },
    vocab: [
      { de: "Hallo", en: "Hello" }, { de: "Guten Morgen", en: "Good morning" },
      { de: "Auf Wiedersehen", en: "Goodbye" }, { de: "Ich heiße...", en: "My name is..." },
      { de: "Wie geht es dir?", en: "How are you?" }, { de: "Mir geht es gut", en: "I'm fine" },
    ],
    quiz: [
      { q: "How do you say 'Hello' in German?", a: "Hallo", choices: ["Hallo","Auf Wiedersehen","Guten Morgen","Danke"] },
      { q: "What does 'Wie geht es dir?' mean?", a: "How are you?", choices: ["Goodbye","How are you?","My name is","Good morning"] },
      { q: "How do you say 'Goodbye'?", a: "Auf Wiedersehen", choices: ["Hallo","Guten Morgen","Auf Wiedersehen","Ich heiße"] },
      { q: "What does 'Guten Morgen' mean?", a: "Good morning", choices: ["Good night","Good morning","Goodbye","Hello"] },
      { q: "How do you say 'I'm fine'?", a: "Mir geht es gut", choices: ["Wie geht es dir?","Hallo","Mir geht es gut","Auf Wiedersehen"] },
      { q: "What does 'Ich heiße...' mean?", a: "My name is...", choices: ["How are you?","My name is...","I'm fine","Goodbye"] },
      { q: "Which is the formal goodbye?", a: "Auf Wiedersehen", choices: ["Tschüss","Hallo","Auf Wiedersehen","Guten Morgen"] },
      { q: "David says 'Auf Wiedersehen' — what is he doing?", a: "Saying goodbye", choices: ["Saying hello","Saying goodbye","Saying his name","Asking how you are"] },
      { q: "How do you ask 'How are you?' informally?", a: "Wie geht es dir?", choices: ["Hallo","Auf Wiedersehen","Wie geht es dir?","Guten Morgen"] },
      { q: "What do you say to introduce yourself?", a: "Ich heiße...", choices: ["Mir geht es gut","Auf Wiedersehen","Hallo","Ich heiße..."] },
    ],
    fillBlanks: [
      { sentence: "___ , ich heiße David.", answer: "Hallo", hint: "Start with a greeting" },
      { sentence: "Wie geht es dir? — Mir geht es ___.", answer: "gut", hint: "Means 'fine'" },
      { sentence: "Auf ___, bis morgen!", answer: "Wiedersehen", hint: "Completes 'goodbye'" },
    ],
    reading: {
      passage: "Hallo! Ich heiße Sophie. Mir geht es gut, danke. Auf Wiedersehen!",
      translation: "Hello! My name is Sophie. I'm fine, thank you. Goodbye!",
      questions: [
        { q: "What is the girl's name?", a: "Sophie", choices: ["David","Marie","Sophie","Julia"] },
        { q: "How is Sophie feeling?", a: "Fine", choices: ["Sad","Fine","Tired","Happy"] },
        { q: "What does she say at the end?", a: "Auf Wiedersehen", choices: ["Hallo","Guten Morgen","Danke","Auf Wiedersehen"] },
      ],
    },
    homework: [
      "Sage 'Hallo' und 'Auf Wiedersehen' zu jemandem zu Hause heute 👋",
      "Übe: 'Ich heiße David. Mir geht es gut!' laut 3 Mal 🗣️",
      "Schreibe 'Hallo', 'Guten Morgen' und 'Auf Wiedersehen' in dein Heft ✏️",
    ],
  },
  {
    id: 2, session: 1, week: 1, month: "April", title: "Zahlen 1–10", emoji: "🔢",
    grammarTip: {
      title: "Zahlen & Alter",
      explanation: "Im Deutschen sagst du 'Ich bin...' für dein Alter — nicht 'I have' wie im Französischen! Also sagt David 'Ich bin neun Jahre alt'. Einfacher als Französisch!",
      examples: ["Ich bin neun Jahre alt. (I am 9)", "Ich bin zehn Jahre alt. (I am 10)", "Wie alt bist du? (How old are you?)"],
    },
    vocab: [
      { de: "Eins", en: "1" }, { de: "Zwei", en: "2" }, { de: "Drei", en: "3" },
      { de: "Vier", en: "4" }, { de: "Fünf", en: "5" },
      { de: "Sechs", en: "6" }, { de: "Sieben", en: "7" }, { de: "Acht", en: "8" },
      { de: "Neun", en: "9" }, { de: "Zehn", en: "10" },
    ],
    quiz: [
      { q: "What is 'Fünf'?", a: "5", choices: ["3","5","7","9"] },
      { q: "How do you say '8'?", a: "Acht", choices: ["Sieben","Neun","Acht","Sechs"] },
      { q: "What is 'Drei'?", a: "3", choices: ["2","3","4","5"] },
      { q: "How do you say '10'?", a: "Zehn", choices: ["Neun","Zehn","Sieben","Acht"] },
      { q: "What is 'Zwei'?", a: "2", choices: ["1","2","3","4"] },
      { q: "How do you say '7'?", a: "Sieben", choices: ["Sechs","Sieben","Acht","Neun"] },
      { q: "What is 'Vier'?", a: "4", choices: ["3","4","5","6"] },
      { q: "How do you say '1'?", a: "Eins", choices: ["Eins","Zwei","Drei","Vier"] },
      { q: "What is 'Sechs'?", a: "6", choices: ["5","6","7","8"] },
      { q: "How do you say '9'?", a: "Neun", choices: ["Sieben","Acht","Neun","Zehn"] },
    ],
    fillBlanks: [
      { sentence: "Ich bin ___ Jahre alt. (I am 9)", answer: "neun", hint: "The number 9" },
      { sentence: "___ + zwei = fünf", answer: "Drei", hint: "3 + 2 = 5" },
      { sentence: "Es gibt ___ Kinder. (There are 10 children)", answer: "zehn", hint: "The number 10" },
    ],
    reading: {
      passage: "Ich heiße Luka. Ich bin acht Jahre alt. Ich habe drei Brüder. Wir haben einen Hund.",
      translation: "My name is Luka. I am 8. I have three brothers. We have a dog.",
      questions: [
        { q: "How old is Luka?", a: "8", choices: ["7","8","9","10"] },
        { q: "How many brothers does he have?", a: "3", choices: ["1","2","3","4"] },
        { q: "What pet does he have?", a: "A dog", choices: ["A cat","A dog","A rabbit","A fish"] },
      ],
    },
    homework: [
      "Zähle jeden Morgen diese Woche von 1 bis 10 auf Deutsch 🔢",
      "Schreibe die Zahlen 1–10 auf Deutsch in dein Heft ✏️",
      "Bitte jemanden zu Hause, dich bei den Zahlen 1–10 abzufragen 🎯",
    ],
  },
  // ── SESSION 2 ── Numbers 11-100 & Colors
  {
    id: 3, session: 2, week: 2, month: "April", title: "Zahlen 11–100", emoji: "💯",
    grammarTip: {
      title: "Wie deutsche Zahlen funktionieren",
      explanation: "Deutsche Zahlen über 20 werden umgekehrt gesagt! 21 heißt 'einundzwanzig' (one-and-twenty). 35 heißt 'fünfunddreißig' (five-and-thirty). Es ist wie umgekehrt auf Englisch!",
      examples: ["21 = einundzwanzig (one-and-twenty)", "35 = fünfunddreißig", "100 = hundert"],
    },
    vocab: [
      { de: "Elf", en: "11" }, { de: "Zwölf", en: "12" }, { de: "Dreizehn", en: "13" },
      { de: "Vierzehn", en: "14" }, { de: "Fünfzehn", en: "15" },
      { de: "Sechzehn", en: "16" }, { de: "Zwanzig", en: "20" },
      { de: "Dreißig", en: "30" }, { de: "Fünfzig", en: "50" }, { de: "Hundert", en: "100" },
    ],
    quiz: [
      { q: "What is 'Elf'?", a: "11", choices: ["10","11","12","13"] },
      { q: "How do you say '12'?", a: "Zwölf", choices: ["Elf","Zwölf","Dreizehn","Sechzehn"] },
      { q: "What is 'Fünfzehn'?", a: "15", choices: ["13","14","15","16"] },
      { q: "How do you say '20'?", a: "Zwanzig", choices: ["Zehn","Zwanzig","Dreißig","Hundert"] },
      { q: "What is 'Hundert'?", a: "100", choices: ["10","20","50","100"] },
      { q: "How do you say '30'?", a: "Dreißig", choices: ["Zwanzig","Dreißig","Vierzig","Fünfzig"] },
      { q: "What is 'Sechzehn'?", a: "16", choices: ["14","15","16","17"] },
      { q: "How do you say '50'?", a: "Fünfzig", choices: ["Vierzig","Fünfzig","Sechzig","Hundert"] },
      { q: "What is 'Dreizehn'?", a: "13", choices: ["11","12","13","14"] },
      { q: "How do you say '14'?", a: "Vierzehn", choices: ["Dreizehn","Vierzehn","Fünfzehn","Sechzehn"] },
    ],
    fillBlanks: [
      { sentence: "Es gibt ___ Schüler in der Klasse. (20 pupils)", answer: "zwanzig", hint: "The number 20" },
      { sentence: "Opa ist ___ Jahre alt. (50)", answer: "fünfzig", hint: "Half of 100" },
      { sentence: "Es gibt ___ Cent in einem Euro.", answer: "hundert", hint: "100 cents in a euro" },
    ],
    reading: {
      passage: "In meiner Klasse gibt es zwanzig Schüler. Es gibt elf Jungen und neun Mädchen. Die Lehrerin ist dreißig Jahre alt.",
      translation: "In my class there are twenty pupils. There are eleven boys and nine girls. The teacher is thirty.",
      questions: [
        { q: "How many pupils are in the class?", a: "20", choices: ["11","19","20","30"] },
        { q: "How many boys are there?", a: "11", choices: ["9","10","11","12"] },
        { q: "How old is the teacher?", a: "30", choices: ["20","25","30","40"] },
      ],
    },
    homework: [
      "Zähle von 10 bis 20 auf Deutsch — versuche es ohne Hilfe! 🔢",
      "Schreibe die Zahlen 11–20 auf Deutsch in dein Heft ✏️",
      "Finde heraus, wie man deine Hausnummer auf Deutsch sagt 🏠",
    ],
  },
  {
    id: 4, session: 2, week: 2, month: "April", title: "Farben", emoji: "🎨",
    grammarTip: {
      title: "Adjektive kommen vor dem Nomen",
      explanation: "Im Deutschen kommen Adjektive VOR dem Nomen — genau wie im Englischen! 'Ein roter Ball' (a red ball). Das ist einfacher als Französisch, wo die Farbe danach kommt.",
      examples: ["ein roter Ball (a red ball)", "ein blauer Stift (a blue pen)", "ein grünes Buch (a green book)"],
    },
    vocab: [
      { de: "Rot", en: "Red" }, { de: "Blau", en: "Blue" }, { de: "Gelb", en: "Yellow" },
      { de: "Grün", en: "Green" }, { de: "Schwarz", en: "Black" }, { de: "Weiß", en: "White" },
      { de: "Rosa", en: "Pink" }, { de: "Orange", en: "Orange" },
    ],
    quiz: [
      { q: "What color is 'Rot'?", a: "Red", choices: ["Blue","Red","Green","Pink"] },
      { q: "How do you say 'Yellow'?", a: "Gelb", choices: ["Grün","Gelb","Weiß","Schwarz"] },
      { q: "What does 'Blau' mean?", a: "Blue", choices: ["Black","Green","Blue","White"] },
      { q: "What color is 'Grün'?", a: "Green", choices: ["Green","Yellow","Pink","Orange"] },
      { q: "How do you say 'Black'?", a: "Schwarz", choices: ["Weiß","Rot","Schwarz","Rosa"] },
      { q: "What does 'Rosa' mean?", a: "Pink", choices: ["Red","Pink","Purple","Orange"] },
      { q: "How do you say 'White'?", a: "Weiß", choices: ["Schwarz","Blau","Weiß","Grün"] },
      { q: "What color is 'Orange'?", a: "Orange", choices: ["Yellow","Orange","Red","Pink"] },
      { q: "How do you say 'Green'?", a: "Grün", choices: ["Rot","Gelb","Grün","Rosa"] },
      { q: "What does 'Schwarz' mean?", a: "Black", choices: ["White","Black","Blue","Red"] },
    ],
    fillBlanks: [
      { sentence: "Der Himmel ist ___. (The sky is blue)", answer: "blau", hint: "A cool colour" },
      { sentence: "Eine Tomate ist ___. (A tomato is red)", answer: "rot", hint: "Think stop lights" },
      { sentence: "Das Gras ist ___. (The grass is green)", answer: "grün", hint: "Like trees" },
    ],
    reading: {
      passage: "Hallo! Ich heiße David. Ich habe eine schwarze und weiße Katze. Sie heißt Felix. Meine Tasche ist blau und mein Radiergummi ist rot.",
      translation: "Hello! My name is David. I have a black and white cat. Her name is Felix. My bag is blue and my eraser is red.",
      questions: [
        { q: "What colour is David's cat?", a: "Black and white", choices: ["All black","Black and white","Orange","Grey"] },
        { q: "What is the cat called?", a: "Felix", choices: ["David","Oscar","Felix","Luka"] },
        { q: "What colour is David's bag?", a: "Blue", choices: ["Red","Black","Green","Blue"] },
      ],
    },
    homework: [
      "Schau dich in deinem Zimmer um und benenne 5 Dinge mit ihrer Farbe auf Deutsch 🏠",
      "Male ein Bild und beschrifte 4 Farben auf Deutsch 🎨",
      "Schreibe: 'Meine Lieblingsfarbe ist ___' auf Deutsch ✏️",
    ],
  },
  // ── SESSION 3 ── School objects & Family
  {
    id: 5, session: 3, week: 3, month: "April", title: "Schulsachen", emoji: "🎒",
    grammarTip: {
      title: "Der, Die, Das — Artikel im Deutschen",
      explanation: "Jedes deutsche Nomen hat einen Artikel: 'der' (maskulin), 'die' (feminin) oder 'das' (neutrum). Das musst du mit jedem Wort lernen! Es gibt keine Regel — du musst es auswendig lernen.",
      examples: ["der Stift (the pen — masculine)", "die Tasche (the bag — feminine)", "das Buch (the book — neuter)"],
    },
    vocab: [
      { de: "das Buch", en: "the book" }, { de: "der Stift", en: "the pen" },
      { de: "der Bleistift", en: "the pencil" }, { de: "die Tasche", en: "the bag" },
      { de: "das Lineal", en: "the ruler" }, { de: "der Radiergummi", en: "the eraser" },
    ],
    quiz: [
      { q: "What is 'der Stift'?", a: "the pen", choices: ["the book","the pen","the ruler","the pencil"] },
      { q: "How do you say 'the book'?", a: "das Buch", choices: ["die Tasche","das Lineal","das Buch","der Radiergummi"] },
      { q: "What does 'der Bleistift' mean?", a: "the pencil", choices: ["the pencil","the pen","the bag","the eraser"] },
      { q: "How do you say 'the eraser'?", a: "der Radiergummi", choices: ["der Stift","der Radiergummi","die Tasche","das Lineal"] },
      { q: "What is 'die Tasche'?", a: "the bag", choices: ["the ruler","the bag","the book","the pen"] },
      { q: "How do you say 'the ruler'?", a: "das Lineal", choices: ["das Buch","das Lineal","der Bleistift","die Tasche"] },
      { q: "Is 'Stift' masculine, feminine or neuter?", a: "Masculine (der)", choices: ["Masculine (der)","Feminine (die)","Neuter (das)"] },
      { q: "Is 'Tasche' masculine, feminine or neuter?", a: "Feminine (die)", choices: ["Masculine (der)","Feminine (die)","Neuter (das)"] },
      { q: "Is 'Buch' masculine, feminine or neuter?", a: "Neuter (das)", choices: ["Masculine (der)","Feminine (die)","Neuter (das)"] },
      { q: "How do you say 'the pencil'?", a: "der Bleistift", choices: ["der Stift","der Bleistift","das Lineal","das Buch"] },
    ],
    fillBlanks: [
      { sentence: "Ich habe ___ Buch und einen Stift in meiner Tasche.", answer: "ein", hint: "A/an for neuter nouns" },
      { sentence: "Ich benutze ___ Radiergummi zum Radieren.", answer: "einen", hint: "A/an for masculine nouns" },
      { sentence: "Ich zeichne mit einem ___.", answer: "Bleistift", hint: "Used for drawing" },
    ],
    reading: {
      passage: "In meiner Tasche habe ich ein blaues Buch, zwei Stifte und einen Radiergummi. Ich habe kein Lineal. Meine Tasche ist grün.",
      translation: "In my bag I have a blue book, two pens and an eraser. I don't have a ruler. My bag is green.",
      questions: [
        { q: "What colour is the book?", a: "Blue", choices: ["Red","Green","Blue","Black"] },
        { q: "How many pens are in the bag?", a: "2", choices: ["1","2","3","4"] },
        { q: "What is missing from the bag?", a: "A ruler", choices: ["A book","A pen","An eraser","A ruler"] },
      ],
    },
    homework: [
      "Nimm 3 Dinge aus deinem Mäppchen und sage ihre Namen auf Deutsch 🖊️",
      "Schreibe 'Ich habe einen/eine/ein ___' für 5 Schulsachen ✏️",
      "Zeichne deine Schultasche und beschrifte, was drin ist, auf Deutsch 🎒",
    ],
  },
  {
    id: 6, session: 3, week: 3, month: "April", title: "Familie", emoji: "👨‍👩‍👧",
    grammarTip: {
      title: "Mein / Meine / Mein",
      explanation: "'Mein' bedeutet 'my' für maskuline und neutrale Nomen, 'meine' für feminine Nomen und Plural. Also: 'mein Bruder' (my brother), 'meine Schwester' (my sister), 'meine Eltern' (my parents).",
      examples: ["mein Vater (my dad — masc.)", "meine Mutter (my mum — fem.)", "meine Geschwister (my siblings — plural)"],
    },
    vocab: [
      { de: "die Mutter", en: "Mum" }, { de: "der Vater", en: "Dad" },
      { de: "der Bruder", en: "Brother" }, { de: "die Schwester", en: "Sister" },
      { de: "der Großvater", en: "Grandpa" }, { de: "die Großmutter", en: "Grandma" },
    ],
    quiz: [
      { q: "What is 'die Schwester'?", a: "Sister", choices: ["Brother","Mum","Sister","Grandma"] },
      { q: "How do you say 'Dad'?", a: "der Vater", choices: ["der Bruder","der Vater","die Mutter","der Großvater"] },
      { q: "What does 'die Großmutter' mean?", a: "Grandma", choices: ["Grandpa","Dad","Mum","Grandma"] },
      { q: "How do you say 'Mum'?", a: "die Mutter", choices: ["die Schwester","der Vater","die Mutter","die Großmutter"] },
      { q: "What is 'der Bruder'?", a: "Brother", choices: ["Sister","Brother","Dad","Grandpa"] },
      { q: "How do you say 'Grandpa'?", a: "der Großvater", choices: ["die Großmutter","der Vater","der Großvater","der Bruder"] },
      { q: "How do you say 'my sister'?", a: "meine Schwester", choices: ["mein Schwester","meine Schwester","meinen Schwester","die Schwester"] },
      { q: "How do you say 'my brother'?", a: "mein Bruder", choices: ["mein Bruder","meine Bruder","meinen Bruder","der Bruder"] },
      { q: "How do you say 'my parents'?", a: "meine Eltern", choices: ["mein Eltern","meine Eltern","meinen Eltern","die Eltern"] },
      { q: "What does 'der Großvater' mean?", a: "Grandpa", choices: ["Grandma","Grandpa","Dad","Brother"] },
    ],
    fillBlanks: [
      { sentence: "___ Mutter heißt Marie. (My mum is called Marie)", answer: "Meine", hint: "My — feminine" },
      { sentence: "___ Bruder spielt Fußball. (My brother plays football)", answer: "Mein", hint: "My — masculine" },
      { sentence: "___ Großeltern wohnen in Berlin.", answer: "Meine", hint: "My — plural" },
    ],
    reading: {
      passage: "In meiner Familie gibt es fünf Personen. Ich habe eine Schwester und einen Bruder. Meine Schwester ist sieben Jahre alt und mein Bruder ist zwölf. Mein Vater heißt Peter.",
      translation: "In my family there are five people. I have a sister and a brother. My sister is seven and my brother is twelve. My dad is called Peter.",
      questions: [
        { q: "How many people are in the family?", a: "5", choices: ["3","4","5","6"] },
        { q: "How old is the sister?", a: "7", choices: ["5","7","9","12"] },
        { q: "What is the dad's name?", a: "Peter", choices: ["Paul","Johann","Peter","Marco"] },
      ],
    },
    homework: [
      "Sage jemandem zu Hause das deutsche Wort für jedes Familienmitglied 👨‍👩‍👧",
      "Zeichne deine Familie und beschrifte jede Person auf Deutsch 🖼️",
      "Schreibe: 'In meiner Familie gibt es...' und liste deine Familie auf Deutsch auf ✏️",
    ],
  },
  // ── SESSION 4 ── Animals & Food
  {
    id: 7, session: 4, week: 4, month: "May", title: "Tiere", emoji: "🐾",
    grammarTip: {
      title: "Ich mag / Ich mag nicht",
      explanation: "'Ich mag' bedeutet 'I like' und 'Ich mag ... nicht' bedeutet 'I don't like'. Nach diesen Ausdrücken kommt das Nomen ohne Artikel: 'Ich mag Hunde' (I like dogs). Du kannst auch 'Ich liebe' (I love) sagen!",
      examples: ["Ich mag Katzen. (I like cats)", "Ich mag keine Schlangen. (I don't like snakes)", "Ich liebe Hunde! (I love dogs!)"],
    },
    vocab: [
      { de: "die Katze", en: "the cat" }, { de: "der Hund", en: "the dog" },
      { de: "das Kaninchen", en: "the rabbit" }, { de: "der Vogel", en: "the bird" },
      { de: "der Fisch", en: "the fish" }, { de: "Ich mag Katzen", en: "I like cats" },
    ],
    quiz: [
      { q: "What is 'der Hund'?", a: "the dog", choices: ["the cat","the dog","the bird","the rabbit"] },
      { q: "How do you say 'the rabbit'?", a: "das Kaninchen", choices: ["die Katze","der Vogel","das Kaninchen","der Fisch"] },
      { q: "What does 'Ich mag Katzen' mean?", a: "I like cats", choices: ["I like dogs","I like fish","I like cats","I like birds"] },
      { q: "How do you say 'the bird'?", a: "der Vogel", choices: ["das Kaninchen","der Vogel","der Hund","die Katze"] },
      { q: "What is 'der Fisch'?", a: "the fish", choices: ["the cat","the rabbit","the fish","the bird"] },
      { q: "How do you say 'I love dogs'?", a: "Ich liebe Hunde", choices: ["Ich mag Hunde","Ich liebe Hunde","Ich mag keine Hunde","Ich habe Hunde"] },
      { q: "How do you say 'I don't like birds'?", a: "Ich mag keine Vögel", choices: ["Ich mag Vögel","Ich mag keine Vögel","Ich liebe Vögel","Ich hasse Vögel"] },
      { q: "What does 'Ich liebe' mean?", a: "I love", choices: ["I like","I love","I hate","I have"] },
      { q: "What is 'das Kaninchen'?", a: "the rabbit", choices: ["the dog","the fish","the bird","the rabbit"] },
      { q: "How do you say 'I like fish'?", a: "Ich mag Fische", choices: ["Ich mag Kaninchen","Ich mag Fische","Ich mag Vögel","Ich mag Katzen"] },
    ],
    fillBlanks: [
      { sentence: "Ich ___ Hunde. (I like dogs)", answer: "mag", hint: "I like" },
      { sentence: "Ich mag ___ Schlangen. (I don't like snakes)", answer: "keine", hint: "No/not any" },
      { sentence: "Mein Lieblingstier ist ___ Hund. (My favourite is the dog)", answer: "der", hint: "The — masculine" },
    ],
    reading: {
      passage: "Ich heiße Zoe. Ich habe eine weiße Katze und ein graues Kaninchen. Ich liebe Tiere! Ich mag keine Schlangen. Meine Katze heißt Mimi.",
      translation: "My name is Zoe. I have a white cat and a grey rabbit. I love animals! I don't like snakes. My cat is called Mimi.",
      questions: [
        { q: "What colour is Zoe's cat?", a: "White", choices: ["Grey","Black","White","Orange"] },
        { q: "What is Zoe's cat called?", a: "Mimi", choices: ["Felix","Mimi","Oscar","Tom"] },
        { q: "What animal doesn't Zoe like?", a: "Snakes", choices: ["Cats","Dogs","Rabbits","Snakes"] },
      ],
    },
    homework: [
      "Sage das deutsche Wort für 3 verschiedene Tiere vor dem Abendessen 🐾",
      "Schreibe 'Ich mag ___' und 'Ich mag keine ___' für 3 Tiere ✏️",
      "Zeichne dein Lieblingstier und schreibe 2 Sätze darüber auf Deutsch 🐶",
    ],
  },
  {
    id: 8, session: 4, week: 4, month: "May", title: "Essen & Trinken", emoji: "🍎",
    grammarTip: {
      title: "Ich esse / Ich trinke",
      explanation: "Im Deutschen benutzt du 'Ich esse' (I eat) und 'Ich trinke' (I drink). Nach diesen Verben benutzt du 'einen/eine/ein' (a/an) oder einfach das Nomen: 'Ich esse einen Apfel' (I eat an apple).",
      examples: ["Ich esse einen Apfel. (I eat an apple)", "Ich trinke Milch. (I drink milk)", "Ich esse kein Brot. (I don't eat bread)"],
    },
    vocab: [
      { de: "der Apfel", en: "the apple" }, { de: "das Brot", en: "the bread" },
      { de: "die Milch", en: "the milk" }, { de: "das Wasser", en: "the water" },
      { de: "Ich mag...", en: "I like..." }, { de: "Ich mag kein...", en: "I don't like..." },
    ],
    quiz: [
      { q: "What is 'die Milch'?", a: "the milk", choices: ["water","bread","milk","apple"] },
      { q: "How do you say 'I like'?", a: "Ich mag...", choices: ["Ich mag...","Ich mag kein...","das Wasser","das Brot"] },
      { q: "What does 'der Apfel' mean?", a: "the apple", choices: ["bread","milk","water","apple"] },
      { q: "How do you say 'the water'?", a: "das Wasser", choices: ["die Milch","das Wasser","das Brot","der Apfel"] },
      { q: "What is 'das Brot'?", a: "the bread", choices: ["milk","bread","water","apple"] },
      { q: "How do you say 'I eat an apple'?", a: "Ich esse einen Apfel", choices: ["Ich esse ein Apfel","Ich esse einen Apfel","Ich trinke einen Apfel","Ich mag einen Apfel"] },
      { q: "How do you say 'I drink milk'?", a: "Ich trinke Milch", choices: ["Ich esse Milch","Ich trinke kein Milch","Ich trinke Milch","Ich mag Milch"] },
      { q: "How do you say 'I eat apples'?", a: "Ich esse Äpfel", choices: ["Ich esse Apfel","Ich esse Äpfel","Ich trinke Äpfel","Ich mag Äpfel"] },
      { q: "What does 'Ich esse' mean?", a: "I eat", choices: ["I eat","I drink","I like","I have"] },
      { q: "What does 'Ich trinke' mean?", a: "I drink", choices: ["I eat","I drink","I like","I want"] },
    ],
    fillBlanks: [
      { sentence: "Ich ___ einen Apfel. (I eat an apple)", answer: "esse", hint: "I eat" },
      { sentence: "Ich ___ Milch. (I drink milk)", answer: "trinke", hint: "I drink" },
      { sentence: "Ich mag ___ Brot. (I don't like bread)", answer: "kein", hint: "No/not any" },
    ],
    reading: {
      passage: "Zum Frühstück esse ich Brot und einen Apfel. Ich trinke Milch. Ich mag keinen Kaffee! Meine Lieblingsmahlzeit ist das Abendessen.",
      translation: "For breakfast I eat bread and an apple. I drink milk. I don't like coffee! My favourite meal is dinner.",
      questions: [
        { q: "What does the child eat for breakfast?", a: "Bread and an apple", choices: ["Cereal","Bread and an apple","Eggs","Fruit"] },
        { q: "What do they drink?", a: "Milk", choices: ["Water","Juice","Milk","Coffee"] },
        { q: "What is their favourite meal?", a: "Dinner", choices: ["Breakfast","Lunch","Dinner","Snack"] },
      ],
    },
    homework: [
      "Sage beim nächsten Essen, was du isst, auf Deutsch 🍽️",
      "Schreibe 'Ich esse ___' für 5 verschiedene Lebensmittel ✏️",
      "Schreibe 'Ich trinke ___' für 3 Getränke, die du magst 🥤",
    ],
  },
  // ── SESSION 5 ── Verb: sein (to be)
  {
    id: 9, session: 5, week: 5, month: "May", title: "Das Verb SEIN", emoji: "🔵",
    grammarTip: {
      title: "SEIN — To Be (the most important verb!)",
      explanation: "'Sein' bedeutet 'to be'. Es ist das wichtigste Verb im Deutschen! Lerne alle Formen auswendig: ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie sind. Diese Formen sind unregelmäßig — es gibt keine Abkürzung!",
      examples: ["ich bin (I am)", "du bist (you are)", "er/sie/es ist (he/she/it is)", "wir sind (we are)"],
    },
    vocab: [
      { de: "ich bin", en: "I am" }, { de: "du bist", en: "you are (informal)" },
      { de: "er/sie/es ist", en: "he/she/it is" }, { de: "wir sind", en: "we are" },
      { de: "ihr seid", en: "you are (plural)" }, { de: "sie sind", en: "they are" },
    ],
    quiz: [
      { q: "How do you say 'I am'?", a: "ich bin", choices: ["ich bin","ich bist","ich ist","ich sind"] },
      { q: "How do you say 'you are' (to a friend)?", a: "du bist", choices: ["du bin","du bist","du ist","du sind"] },
      { q: "How do you say 'he is'?", a: "er ist", choices: ["er bin","er bist","er ist","er sind"] },
      { q: "How do you say 'we are'?", a: "wir sind", choices: ["wir bin","wir bist","wir ist","wir sind"] },
      { q: "How do you say 'they are'?", a: "sie sind", choices: ["sie bin","sie bist","sie ist","sie sind"] },
      { q: "What is 'du bist'?", a: "you are (informal)", choices: ["I am","you are (informal)","he is","we are"] },
      { q: "Complete: 'David ___ neun Jahre alt.'", a: "ist", choices: ["bin","bist","ist","sind"] },
      { q: "Complete: 'Wir ___ müde.' (We are tired)", a: "sind", choices: ["bin","bist","ist","sind"] },
      { q: "Complete: 'Ich ___ glücklich.' (I am happy)", a: "bin", choices: ["bin","bist","ist","sind"] },
      { q: "What is 'ihr seid'?", a: "you are (plural)", choices: ["I am","you are (informal)","you are (plural)","they are"] },
    ],
    fillBlanks: [
      { sentence: "Ich ___ neun Jahre alt.", answer: "bin", hint: "I am" },
      { sentence: "Du ___ sehr nett!", answer: "bist", hint: "You are (informal)" },
      { sentence: "Meine Schwester ___ sieben Jahre alt.", answer: "ist", hint: "She is" },
    ],
    reading: {
      passage: "Ich bin David. Ich bin neun Jahre alt. Meine Schwester ist sieben. Wir sind eine kleine Familie. Mein Vater ist groß und stark.",
      translation: "I am David. I am nine years old. My sister is seven. We are a small family. My father is tall and strong.",
      questions: [
        { q: "How old is David?", a: "9", choices: ["7","8","9","10"] },
        { q: "How old is his sister?", a: "7", choices: ["5","6","7","8"] },
        { q: "What does 'groß und stark' mean?", a: "Tall and strong", choices: ["Small and weak","Tall and strong","Big and funny","Old and tired"] },
      ],
    },
    homework: [
      "Schreibe alle 6 Formen von SEIN auswendig: ich bin, du bist... ✏️",
      "Mache 5 Sätze mit SEIN über deine Familie (z.B. 'Mein Bruder ist...') 📝",
      "Übe die Formen laut zu sagen — so schnell du kannst! 🗣️",
    ],
  },
  {
    id: 10, session: 5, week: 5, month: "May", title: "SEIN in Sätzen", emoji: "🔵",
    isReview: false,
    grammarTip: {
      title: "Adjektive mit SEIN",
      explanation: "Mit SEIN kannst du beschreiben, wie jemand oder etwas ist! Einfach: Subjekt + SEIN + Adjektiv. 'Ich bin glücklich.' (I am happy.) 'Das Buch ist blau.' (The book is blue.) Adjektive nach SEIN verändern sich nicht!",
      examples: ["Ich bin müde. (I am tired)", "Du bist nett. (You are nice)", "Das Wetter ist schön. (The weather is nice)"],
    },
    vocab: [
      { de: "glücklich", en: "happy" }, { de: "müde", en: "tired" },
      { de: "groß", en: "big/tall" }, { de: "klein", en: "small" },
      { de: "nett", en: "nice/kind" }, { de: "schön", en: "beautiful/nice" },
    ],
    quiz: [
      { q: "What does 'glücklich' mean?", a: "happy", choices: ["sad","tired","happy","angry"] },
      { q: "Complete: 'Ich ___ müde.' (I am tired)", a: "bin", choices: ["bin","bist","ist","sind"] },
      { q: "What does 'groß' mean?", a: "big/tall", choices: ["small","big/tall","nice","happy"] },
      { q: "Complete: 'Du ___ sehr nett!'", a: "bist", choices: ["bin","bist","ist","sind"] },
      { q: "What does 'klein' mean?", a: "small", choices: ["big","small","nice","tired"] },
      { q: "Complete: 'Das Haus ___ groß.' (The house is big)", a: "ist", choices: ["bin","bist","ist","sind"] },
      { q: "What does 'nett' mean?", a: "nice/kind", choices: ["tired","big","nice/kind","happy"] },
      { q: "Complete: 'Wir ___ glücklich.' (We are happy)", a: "sind", choices: ["bin","bist","ist","sind"] },
      { q: "What does 'schön' mean?", a: "beautiful/nice", choices: ["ugly","small","tired","beautiful/nice"] },
      { q: "Complete: 'Ihr ___ sehr laut!' (You are very loud)", a: "seid", choices: ["bin","bist","seid","sind"] },
    ],
    fillBlanks: [
      { sentence: "Ich bin sehr ___. (I am very happy)", answer: "glücklich", hint: "Means happy" },
      { sentence: "Mein Hund ist ___ und nett.", answer: "groß", hint: "Means big/tall" },
      { sentence: "Das Wetter ist heute ___.", answer: "schön", hint: "Means nice/beautiful" },
    ],
    reading: {
      passage: "Heute bin ich sehr glücklich! Die Sonne ist schön und warm. Mein Hund ist groß und nett. Meine Schwester ist müde, aber ich bin nicht müde.",
      translation: "Today I am very happy! The sun is beautiful and warm. My dog is big and kind. My sister is tired, but I am not tired.",
      questions: [
        { q: "How does the child feel today?", a: "Happy", choices: ["Sad","Tired","Happy","Angry"] },
        { q: "What is the dog like?", a: "Big and kind", choices: ["Small and mean","Big and kind","Tired and lazy","Fast and loud"] },
        { q: "Who is tired?", a: "His sister", choices: ["He is","His dog","His sister","His mum"] },
      ],
    },
    homework: [
      "Schreibe 5 Sätze mit SEIN + Adjektiv über dich und deine Familie ✏️",
      "Beschreibe 3 Dinge in deinem Zimmer mit SEIN (z.B. 'Mein Bett ist groß') 🛏️",
      "Lerne die Adjektive: glücklich, müde, groß, klein, nett, schön auswendig 📝",
    ],
  },
  // ── SESSION 6 ── Verb: haben (to have)
  {
    id: 11, session: 6, week: 6, month: "June", title: "Das Verb HABEN", emoji: "🟡",
    grammarTip: {
      title: "HABEN — To Have",
      explanation: "'Haben' bedeutet 'to have'. Es ist das zweitwichtigste Verb! Lerne alle Formen: ich habe, du hast, er/sie/es hat, wir haben, ihr habt, sie haben. HABEN + Akkusativ: nach 'haben' verändert sich der maskuline Artikel von 'ein' zu 'einen'!",
      examples: ["ich habe (I have)", "du hast (you have)", "er/sie/es hat (he/she/it has)", "Ich habe einen Hund. (I have a dog — masc. changes!)"],
    },
    vocab: [
      { de: "ich habe", en: "I have" }, { de: "du hast", en: "you have" },
      { de: "er/sie/es hat", en: "he/she/it has" }, { de: "wir haben", en: "we have" },
      { de: "ihr habt", en: "you have (plural)" }, { de: "sie haben", en: "they have" },
    ],
    quiz: [
      { q: "How do you say 'I have'?", a: "ich habe", choices: ["ich habe","ich hast","ich hat","ich haben"] },
      { q: "How do you say 'you have' (to a friend)?", a: "du hast", choices: ["du habe","du hast","du hat","du haben"] },
      { q: "How do you say 'she has'?", a: "sie hat", choices: ["sie habe","sie hast","sie hat","sie haben"] },
      { q: "How do you say 'we have'?", a: "wir haben", choices: ["wir habe","wir hast","wir hat","wir haben"] },
      { q: "How do you say 'they have'?", a: "sie haben", choices: ["sie habe","sie hast","sie hat","sie haben"] },
      { q: "Complete: 'David ___ einen Hund.'", a: "hat", choices: ["habe","hast","hat","haben"] },
      { q: "Complete: 'Wir ___ eine Katze.'", a: "haben", choices: ["habe","hast","hat","haben"] },
      { q: "Complete: 'Ich ___ drei Geschwister.'", a: "habe", choices: ["habe","hast","hat","haben"] },
      { q: "What is 'ihr habt'?", a: "you have (plural)", choices: ["I have","you have (informal)","you have (plural)","they have"] },
      { q: "Complete: 'Du ___ ein blaues Buch.'", a: "hast", choices: ["habe","hast","hat","haben"] },
    ],
    fillBlanks: [
      { sentence: "Ich ___ einen Hund und eine Katze.", answer: "habe", hint: "I have" },
      { sentence: "Meine Schwester ___ ein neues Fahrrad.", answer: "hat", hint: "She has" },
      { sentence: "Wir ___ viele Bücher zu Hause.", answer: "haben", hint: "We have" },
    ],
    reading: {
      passage: "Ich habe einen großen Hund. Er heißt Rex. Meine Schwester hat eine kleine Katze. Wir haben auch einen Garten. Im Garten haben wir viele Blumen.",
      translation: "I have a big dog. His name is Rex. My sister has a small cat. We also have a garden. In the garden we have many flowers.",
      questions: [
        { q: "What is the dog's name?", a: "Rex", choices: ["Max","Rex","Bello","Bruno"] },
        { q: "What does the sister have?", a: "A small cat", choices: ["A big dog","A small cat","A rabbit","A fish"] },
        { q: "What do they have in the garden?", a: "Many flowers", choices: ["Many trees","Many flowers","A pool","Vegetables"] },
      ],
    },
    homework: [
      "Schreibe alle 6 Formen von HABEN auswendig ✏️",
      "Mache 5 Sätze mit HABEN über deine Familie oder deine Sachen 📝",
      "Vergleiche SEIN und HABEN — was ist der Unterschied? 🤔",
    ],
  },
  {
    id: 12, session: 6, week: 6, month: "June", title: "HABEN in Sätzen", emoji: "🟡",
    grammarTip: {
      title: "Akkusativ nach HABEN",
      explanation: "Nach HABEN musst du den Akkusativ benutzen. Für maskuline Nomen ändert sich 'ein' zu 'einen' und 'der' zu 'den'. Feminine und neutrale Nomen bleiben gleich: 'eine Katze', 'ein Buch'.",
      examples: ["Ich habe einen Hund. (masc. → einen)", "Ich habe eine Katze. (fem. → eine)", "Ich habe ein Buch. (neuter → ein)"],
    },
    vocab: [
      { de: "einen Hund haben", en: "to have a dog (masc.)" }, { de: "eine Katze haben", en: "to have a cat (fem.)" },
      { de: "ein Buch haben", en: "to have a book (neuter)" }, { de: "Hunger haben", en: "to be hungry" },
      { de: "Durst haben", en: "to be thirsty" }, { de: "Angst haben", en: "to be scared" },
    ],
    quiz: [
      { q: "Complete: 'Ich habe ___ Hund.' (masc.)", a: "einen", choices: ["ein","eine","einen","der"] },
      { q: "Complete: 'Ich habe ___ Katze.' (fem.)", a: "eine", choices: ["ein","eine","einen","die"] },
      { q: "Complete: 'Ich habe ___ Buch.' (neuter)", a: "ein", choices: ["ein","eine","einen","das"] },
      { q: "What does 'Hunger haben' mean?", a: "to be hungry", choices: ["to be thirsty","to be scared","to be hungry","to be tired"] },
      { q: "What does 'Durst haben' mean?", a: "to be thirsty", choices: ["to be hungry","to be thirsty","to be scared","to have a drink"] },
      { q: "Complete: 'David hat ___ Bruder.'", a: "einen", choices: ["ein","eine","einen","der"] },
      { q: "Complete: 'Ich habe ___ Angst.'", a: "keine", choices: ["kein","keine","keinen","nicht"] },
      { q: "What does 'Angst haben' mean?", a: "to be scared", choices: ["to be angry","to be scared","to have fun","to be sad"] },
      { q: "Complete: 'Wir haben ___ Garten.'", a: "einen", choices: ["ein","eine","einen","der"] },
      { q: "Complete: 'Sie hat ___ neue Tasche.'", a: "eine", choices: ["ein","eine","einen","die"] },
    ],
    fillBlanks: [
      { sentence: "Ich habe ___ großen Hund. (I have a big dog)", answer: "einen", hint: "Masc. accusative" },
      { sentence: "Hast du ___? (Are you hungry?)", answer: "Hunger", hint: "Hunger haben = to be hungry" },
      { sentence: "Ich habe ___ Angst vor Spinnen.", answer: "große", hint: "big fear — adjective" },
    ],
    reading: {
      passage: "Ich habe Hunger! Ich esse einen Apfel und ein Stück Brot. Mein Bruder hat Durst. Er trinkt ein Glas Wasser. Wir haben keine Angst vor Hunden.",
      translation: "I am hungry! I eat an apple and a piece of bread. My brother is thirsty. He drinks a glass of water. We are not scared of dogs.",
      questions: [
        { q: "What does the child eat?", a: "An apple and bread", choices: ["Only an apple","An apple and bread","Bread and milk","Nothing"] },
        { q: "What does the brother drink?", a: "Water", choices: ["Milk","Juice","Water","Tea"] },
        { q: "What are they not scared of?", a: "Dogs", choices: ["Cats","Spiders","Dogs","Birds"] },
      ],
    },
    homework: [
      "Schreibe 5 Sätze mit HABEN — achte auf einen/eine/ein! ✏️",
      "Mache einen Satz mit 'Hunger haben', 'Durst haben' und 'Angst haben' 📝",
      "Erkläre jemandem zu Hause, wann man 'einen' und wann 'ein' benutzt 🤔",
    ],
  },
  // ── SESSION 7 ── Verb: machen & regular verbs
  {
    id: 13, session: 7, week: 7, month: "June", title: "Das Verb MACHEN", emoji: "🟢",
    grammarTip: {
      title: "Regelmäßige Verben — das Muster",
      explanation: "Die meisten deutschen Verben sind regelmäßig. Das bedeutet, sie folgen einem Muster! Nimm den Stamm (Infinitiv minus -en) und füge die Endungen hinzu: -e, -st, -t, -en, -t, -en. 'Machen' → Stamm 'mach' → ich mache, du machst, er macht...",
      examples: ["ich mache (I do/make)", "du machst (you do/make)", "er/sie/es macht (he/she/it does/makes)", "wir machen (we do/make)"],
    },
    vocab: [
      { de: "ich mache", en: "I do/make" }, { de: "du machst", en: "you do/make" },
      { de: "er/sie macht", en: "he/she does/makes" }, { de: "wir machen", en: "we do/make" },
      { de: "Hausaufgaben machen", en: "to do homework" }, { de: "Musik machen", en: "to make music" },
    ],
    quiz: [
      { q: "How do you say 'I do/make'?", a: "ich mache", choices: ["ich mache","ich machst","ich macht","ich machen"] },
      { q: "How do you say 'you do' (friend)?", a: "du machst", choices: ["du mache","du machst","du macht","du machen"] },
      { q: "How do you say 'he does'?", a: "er macht", choices: ["er mache","er machst","er macht","er machen"] },
      { q: "What does 'Hausaufgaben machen' mean?", a: "to do homework", choices: ["to do sports","to do homework","to make music","to make food"] },
      { q: "Complete: 'Ich ___ meine Hausaufgaben.'", a: "mache", choices: ["mache","machst","macht","machen"] },
      { q: "Complete: 'Du ___ viel Sport.'", a: "machst", choices: ["mache","machst","macht","machen"] },
      { q: "Complete: 'Wir ___ Musik zusammen.'", a: "machen", choices: ["mache","machst","macht","machen"] },
      { q: "The stem of 'machen' is:", a: "mach-", choices: ["mach-","machen-","macht-","mache-"] },
      { q: "Which ending goes with 'du'?", a: "-st", choices: ["-e","-st","-t","-en"] },
      { q: "Which ending goes with 'er/sie/es'?", a: "-t", choices: ["-e","-st","-t","-en"] },
    ],
    fillBlanks: [
      { sentence: "Ich ___ jeden Tag Hausaufgaben.", answer: "mache", hint: "I do (ich)" },
      { sentence: "Was ___ du heute? (What are you doing today?)", answer: "machst", hint: "You do (du)" },
      { sentence: "Meine Schwester ___ gern Musik.", answer: "macht", hint: "She does (sie)" },
    ],
    reading: {
      passage: "Jeden Tag mache ich meine Hausaufgaben nach der Schule. Mein Bruder macht Sport. Wir machen am Wochenende viel zusammen. Manchmal machen wir Musik oder spielen im Garten.",
      translation: "Every day I do my homework after school. My brother does sport. We do a lot together at the weekend. Sometimes we make music or play in the garden.",
      questions: [
        { q: "When does the child do homework?", a: "After school", choices: ["Before school","After school","In the evening","In the morning"] },
        { q: "What does the brother do?", a: "Sport", choices: ["Music","Homework","Sport","Games"] },
        { q: "What do they sometimes do?", a: "Make music", choices: ["Watch TV","Make music","Eat dinner","Sleep"] },
      ],
    },
    homework: [
      "Schreibe alle 6 Formen von MACHEN ✏️",
      "Benutze das Muster (-e/-st/-t/-en/-t/-en) für das Verb 'spielen' (to play) 🎮",
      "Mache 3 Sätze mit MACHEN über deinen Alltag 📝",
    ],
  },
  {
    id: 14, session: 7, week: 7, month: "June", title: "Regelmäßige Verben", emoji: "🟢",
    grammarTip: {
      title: "Spielen, Lernen, Hören — gleiche Endungen!",
      explanation: "Alle regelmäßigen Verben folgen demselben Muster wie MACHEN! Nimm den Stamm und füge -e/-st/-t/-en/-t/-en hinzu. 'Spielen' → spiel → ich spiele, du spielst, er spielt. Sobald du das Muster kennst, kannst du Hunderte von Verben konjugieren!",
      examples: ["spielen → ich spiele (to play → I play)", "lernen → du lernst (to learn → you learn)", "hören → er hört (to hear/listen → he hears)"],
    },
    vocab: [
      { de: "spielen", en: "to play" }, { de: "lernen", en: "to learn" },
      { de: "hören", en: "to listen/hear" }, { de: "kaufen", en: "to buy" },
      { de: "wohnen", en: "to live (somewhere)" }, { de: "arbeiten", en: "to work" },
    ],
    quiz: [
      { q: "Complete: 'Ich ___ Fußball.' (spielen)", a: "spiele", choices: ["spiele","spielst","spielt","spielen"] },
      { q: "Complete: 'Du ___ Deutsch.' (lernen)", a: "lernst", choices: ["lerne","lernst","lernt","lernen"] },
      { q: "Complete: 'Er ___ Musik.' (hören)", a: "hört", choices: ["höre","hörst","hört","hören"] },
      { q: "Complete: 'Wir ___ in Berlin.' (wohnen)", a: "wohnen", choices: ["wohne","wohnst","wohnt","wohnen"] },
      { q: "What does 'kaufen' mean?", a: "to buy", choices: ["to sell","to buy","to find","to lose"] },
      { q: "What does 'wohnen' mean?", a: "to live (somewhere)", choices: ["to sleep","to eat","to live (somewhere)","to walk"] },
      { q: "Complete: 'Ihr ___ sehr fleißig.' (lernen)", a: "lernt", choices: ["lerne","lernst","lernt","lernen"] },
      { q: "Which ending goes with 'wir'?", a: "-en", choices: ["-e","-st","-t","-en"] },
      { q: "Complete: 'Sie (they) ___ Fußball.' (spielen)", a: "spielen", choices: ["spiele","spielst","spielt","spielen"] },
      { q: "What does 'arbeiten' mean?", a: "to work", choices: ["to play","to learn","to work","to buy"] },
    ],
    fillBlanks: [
      { sentence: "Ich ___ jeden Tag Deutsch. (lernen)", answer: "lerne", hint: "I learn (ich)" },
      { sentence: "Mein Vater ___ in einer Schule. (arbeiten)", answer: "arbeitet", hint: "He works — note: arbeitet not arbeit!" },
      { sentence: "Wir ___ gern Musik. (hören)", answer: "hören", hint: "We listen (wir)" },
    ],
    reading: {
      passage: "Ich lerne jeden Tag Deutsch. Mein Freund spielt Fußball nach der Schule. Wir hören oft Musik zusammen. Am Wochenende kaufen wir manchmal Comics.",
      translation: "I learn German every day. My friend plays football after school. We often listen to music together. At the weekend we sometimes buy comics.",
      questions: [
        { q: "What does the child learn every day?", a: "German", choices: ["English","German","Maths","French"] },
        { q: "What does the friend do after school?", a: "Play football", choices: ["Learn German","Play football","Listen to music","Buy comics"] },
        { q: "What do they sometimes buy?", a: "Comics", choices: ["Games","Books","Comics","Food"] },
      ],
    },
    homework: [
      "Konjugiere 'spielen' und 'lernen' für alle 6 Personen ✏️",
      "Schreibe 6 Sätze — einen für jede Person (ich, du, er, wir, ihr, sie) mit 'hören' 📝",
      "Suche 3 neue regelmäßige Verben und konjugiere sie 🔍",
    ],
  },
  // ── SESSION 8 ── Review & Weather
  {
    id: 15, session: 8, week: 8, month: "June", title: "Verb-Rückblick ⭐", emoji: "🌟",
    isReview: true,
    grammarTip: {
      title: "SEIN vs HABEN vs regelmäßige Verben",
      explanation: "Du hast jetzt 3 Verbgruppen gelernt! SEIN (bin/bist/ist/sind) und HABEN (habe/hast/hat/haben) sind unregelmäßig — lerne sie auswendig. Regelmäßige Verben folgen dem Muster -e/-st/-t/-en/-t/-en.",
      examples: ["Ich BIN müde. (sein — irregular)", "Ich HABE Hunger. (haben — irregular)", "Ich SPIELE Fußball. (regular — -e ending)"],
    },
    vocab: [
      { de: "Ich bin glücklich", en: "I am happy" }, { de: "Du hast Hunger", en: "You are hungry" },
      { de: "Er spielt Fußball", en: "He plays football" }, { de: "Wir lernen Deutsch", en: "We learn German" },
      { de: "Sie macht Hausaufgaben", en: "She does homework" }, { de: "Es ist schön", en: "It is nice" },
    ],
    quiz: [
      { q: "Complete: 'Ich ___ glücklich.' (sein)", a: "bin", choices: ["bin","habe","mache","spiele"] },
      { q: "Complete: 'Du ___ einen Hund.' (haben)", a: "hast", choices: ["bist","hast","machst","spielst"] },
      { q: "Complete: 'Er ___ Fußball.' (spielen)", a: "spielt", choices: ["ist","hat","macht","spielt"] },
      { q: "Complete: 'Wir ___ Deutsch.' (lernen)", a: "lernen", choices: ["sind","haben","machen","lernen"] },
      { q: "Which verb is irregular?", a: "sein", choices: ["spielen","lernen","sein","machen"] },
      { q: "What ending does 'du' get with regular verbs?", a: "-st", choices: ["-e","-st","-t","-en"] },
      { q: "Complete: 'Sie ___ müde.' (sein)", a: "ist", choices: ["bin","bist","ist","sind"] },
      { q: "Complete: 'Ihr ___ viel Sport.' (machen)", a: "macht", choices: ["machen","machst","macht","mache"] },
      { q: "What is the stem of 'lernen'?", a: "lern-", choices: ["lern-","lernen-","lernt-","lerne-"] },
      { q: "Complete: 'Ich ___ kein Brot.' (haben)", a: "habe", choices: ["bin","habe","mache","lerne"] },
    ],
    fillBlanks: [
      { sentence: "Ich ___ neun Jahre alt und ich ___ einen Hund.", answer: "bin", hint: "I am (sein)" },
      { sentence: "David ___ Hausaufgaben und ___ dann Fußball.", answer: "macht", hint: "He does (machen)" },
      { sentence: "Wir ___ Deutsch und ___ es sehr interessant.", answer: "lernen", hint: "We learn (lernen)" },
    ],
    reading: {
      passage: "Ich bin David. Ich bin neun Jahre alt. Ich habe einen Hund und eine Katze. Jeden Tag lerne ich Deutsch und mache meine Hausaufgaben. Mein Hund spielt gern im Garten.",
      translation: "I am David. I am nine years old. I have a dog and a cat. Every day I learn German and do my homework. My dog likes to play in the garden.",
      questions: [
        { q: "How many pets does David have?", a: "2", choices: ["1","2","3","4"] },
        { q: "What does David do every day?", a: "Learn German and do homework", choices: ["Play football","Learn German and do homework","Watch TV","Sleep"] },
        { q: "Where does the dog like to play?", a: "In the garden", choices: ["In the house","In the garden","In the street","In the park"] },
      ],
    },
    homework: [
      "Schreibe eine Tabelle: SEIN / HABEN / SPIELEN für alle 6 Personen ✏️",
      "Mache 6 Sätze — benutze SEIN, HABEN und ein regelmäßiges Verb 📝",
      "Erkläre jemandem zu Hause den Unterschied zwischen regelmäßig und unregelmäßig 🗣️",
    ],
  },
  {
    id: 16, session: 8, week: 8, month: "June", title: "Das Wetter", emoji: "☀️",
    grammarTip: {
      title: "ES + Verb — Unpersönliche Ausdrücke",
      explanation: "Beim Wetter benutzen wir oft 'es' (it) als Subjekt: 'Es ist...' oder 'Es gibt...' oder 'Es regnet.' Das 'es' hat keine wirkliche Bedeutung — es ist nur grammatisch notwendig. Auf Englisch ist es genauso: 'It is raining.'",
      examples: ["Es regnet. (It is raining)", "Es schneit. (It is snowing)", "Es ist warm. (It is warm)"],
    },
    vocab: [
      { de: "Es ist schön", en: "It is nice" }, { de: "Es ist heiß", en: "It is hot" },
      { de: "Es ist kalt", en: "It is cold" }, { de: "Es regnet", en: "It is raining" },
      { de: "Es schneit", en: "It is snowing" }, { de: "Es ist windig", en: "It is windy" },
    ],
    quiz: [
      { q: "What does 'Es regnet' mean?", a: "It is raining", choices: ["It is snowing","It is raining","It is hot","It is windy"] },
      { q: "How do you say 'It is cold'?", a: "Es ist kalt", choices: ["Es ist heiß","Es ist schön","Es ist kalt","Es schneit"] },
      { q: "What does 'Es schneit' mean?", a: "It is snowing", choices: ["It is snowing","It is raining","It is hot","It is windy"] },
      { q: "How do you say 'It is hot'?", a: "Es ist heiß", choices: ["Es ist kalt","Es ist schön","Es ist heiß","Es regnet"] },
      { q: "What does 'Es ist windig' mean?", a: "It is windy", choices: ["It is nice","It is cloudy","It is windy","It is snowing"] },
      { q: "What subject do we use for weather?", a: "es (it)", choices: ["ich (I)","du (you)","es (it)","wir (we)"] },
      { q: "Complete: '___ ist heute schön.'", a: "Es", choices: ["Ich","Du","Es","Wir"] },
      { q: "How do you say 'It is snowing'?", a: "Es schneit", choices: ["Es ist kalt","Es schneit","Es regnet","Es ist windig"] },
      { q: "What does 'Es ist schön' mean?", a: "It is nice", choices: ["It is ugly","It is nice","It is cold","It is hot"] },
      { q: "Complete: 'Es ___ heute sehr kalt.'", a: "ist", choices: ["bin","bist","ist","sind"] },
    ],
    fillBlanks: [
      { sentence: "___ regnet heute. (It is raining today)", answer: "Es", hint: "Use 'it' in German" },
      { sentence: "Im Winter ___ es oft kalt.", answer: "ist", hint: "It is (sein)" },
      { sentence: "Wie ist das ___? (What is the weather like?)", answer: "Wetter", hint: "The German word for weather" },
    ],
    reading: {
      passage: "Heute ist das Wetter sehr schön! Die Sonne scheint und es ist warm. Im Winter regnet es oft und es schneit manchmal. Ich mag das Sommerwetter am liebsten.",
      translation: "Today the weather is very nice! The sun is shining and it is warm. In winter it often rains and sometimes snows. I like summer weather the most.",
      questions: [
        { q: "What is the weather like today?", a: "Nice and warm", choices: ["Cold and rainy","Nice and warm","Windy","Snowy"] },
        { q: "What happens in winter?", a: "It rains and snows", choices: ["It is hot","It is always sunny","It rains and snows","Nothing special"] },
        { q: "Which weather does the child like best?", a: "Summer", choices: ["Winter","Autumn","Spring","Summer"] },
      ],
    },
    homework: [
      "Schau jeden Morgen die Wettervorhersage an und beschreibe es auf Deutsch 🌤️",
      "Schreibe 5 Sätze über das Wetter heute und gestern ✏️",
      "Lerne: Es regnet / Es schneit / Es ist sonnig / Es ist windig auswendig 📝",
    ],
  },
  // ── SESSION 9 ── Modal verbs intro
  {
    id: 17, session: 9, week: 9, month: "July", title: "Das Verb KÖNNEN", emoji: "🔴",
    grammarTip: {
      title: "KÖNNEN — Can/To be able to",
      explanation: "'Können' ist ein Modalverb und bedeutet 'can' oder 'to be able to'. Modalverben sind besonders: das konjugierte Modalverb geht an Stelle 2 im Satz, und der Infinitiv des Hauptverbs geht ans ENDE! Ich kann Fußball spielen. (I can play football.)",
      examples: ["ich kann (I can)", "du kannst (you can)", "er/sie kann (he/she can)", "Ich kann Deutsch sprechen. (I can speak German — verb at end!)"],
    },
    vocab: [
      { de: "ich kann", en: "I can" }, { de: "du kannst", en: "you can" },
      { de: "er/sie kann", en: "he/she can" }, { de: "wir können", en: "we can" },
      { de: "schwimmen", en: "to swim" }, { de: "sprechen", en: "to speak" },
    ],
    quiz: [
      { q: "How do you say 'I can'?", a: "ich kann", choices: ["ich kann","ich kannst","ich könnt","ich können"] },
      { q: "How do you say 'you can' (friend)?", a: "du kannst", choices: ["du kann","du kannst","du könnt","du können"] },
      { q: "How do you say 'she can'?", a: "sie kann", choices: ["sie kann","sie kannst","sie könnt","sie können"] },
      { q: "How do you say 'we can'?", a: "wir können", choices: ["wir kann","wir kannst","wir könnt","wir können"] },
      { q: "Where does the infinitive go in a sentence with KÖNNEN?", a: "At the end", choices: ["At the start","After können","At the end","In the middle"] },
      { q: "Complete: 'Ich kann Deutsch ___.'", a: "sprechen", choices: ["spreche","spricht","sprechen","gesprochen"] },
      { q: "Complete: 'Du ___ gut schwimmen.'", a: "kannst", choices: ["kann","kannst","könnt","können"] },
      { q: "Complete: 'Er ___ sehr schnell laufen.'", a: "kann", choices: ["kann","kannst","könnt","können"] },
      { q: "What does 'schwimmen' mean?", a: "to swim", choices: ["to run","to jump","to swim","to fly"] },
      { q: "What does 'sprechen' mean?", a: "to speak", choices: ["to write","to read","to speak","to listen"] },
    ],
    fillBlanks: [
      { sentence: "Ich ___ gut Deutsch sprechen.", answer: "kann", hint: "I can (ich)" },
      { sentence: "Kannst du ___? (Can you swim?)", answer: "schwimmen", hint: "The infinitive at the end" },
      { sentence: "Wir ___ morgen kommen.", answer: "können", hint: "We can (wir)" },
    ],
    reading: {
      passage: "Ich kann gut schwimmen und Fußball spielen. Mein Bruder kann sehr schnell laufen. Meine Schwester kann wunderschön singen. Wir können alle zusammen Musik machen!",
      translation: "I can swim well and play football. My brother can run very fast. My sister can sing beautifully. We can all make music together!",
      questions: [
        { q: "What can the child do well?", a: "Swim and play football", choices: ["Sing","Swim and play football","Run fast","Dance"] },
        { q: "What can the brother do?", a: "Run very fast", choices: ["Swim","Sing","Run very fast","Dance"] },
        { q: "What can the sister do?", a: "Sing beautifully", choices: ["Swim","Run","Sing beautifully","Play football"] },
      ],
    },
    homework: [
      "Schreibe alle 6 Formen von KÖNNEN ✏️",
      "Schreibe 5 Sätze: 'Ich kann ___' — was kannst du alles? 📝",
      "Erkläre die Satzbaustruktur mit KÖNNEN an einem Beispiel 🔍",
    ],
  },
  {
    id: 18, session: 9, week: 9, month: "July", title: "Das Verb WOLLEN", emoji: "🔴",
    grammarTip: {
      title: "WOLLEN — To Want",
      explanation: "'Wollen' bedeutet 'to want'. Wie alle Modalverben geht das konjugierte Verb an Stelle 2 und der Infinitiv ans Ende! Ich will Eis essen. (I want to eat ice cream.) Beachte: 'ich will' — nicht 'ich wille'!",
      examples: ["ich will (I want)", "du willst (you want)", "er/sie will (he/she wants)", "Ich will Deutsch lernen. (I want to learn German.)"],
    },
    vocab: [
      { de: "ich will", en: "I want" }, { de: "du willst", en: "you want" },
      { de: "er/sie will", en: "he/she wants" }, { de: "wir wollen", en: "we want" },
      { de: "essen", en: "to eat" }, { de: "gehen", en: "to go" },
    ],
    quiz: [
      { q: "How do you say 'I want'?", a: "ich will", choices: ["ich will","ich willst","ich wollt","ich wollen"] },
      { q: "How do you say 'you want' (friend)?", a: "du willst", choices: ["du will","du willst","du wollt","du wollen"] },
      { q: "How do you say 'he wants'?", a: "er will", choices: ["er will","er willst","er wollt","er wollen"] },
      { q: "How do you say 'we want'?", a: "wir wollen", choices: ["wir will","wir willst","wir wollt","wir wollen"] },
      { q: "Complete: 'Ich will Eis ___.' (essen)", a: "essen", choices: ["esse","isst","essen","gegessen"] },
      { q: "Complete: 'Du ___ ins Kino gehen.'", a: "willst", choices: ["will","willst","wollt","wollen"] },
      { q: "Complete: 'Er ___ Fußball spielen.'", a: "will", choices: ["will","willst","wollt","wollen"] },
      { q: "Where does the infinitive go with WOLLEN?", a: "At the end", choices: ["At the start","After wollen","At the end","Anywhere"] },
      { q: "What does 'gehen' mean?", a: "to go", choices: ["to come","to stay","to go","to walk"] },
      { q: "Complete: 'Wir ___ morgen schwimmen gehen.'", a: "wollen", choices: ["will","willst","wollt","wollen"] },
    ],
    fillBlanks: [
      { sentence: "Ich ___ Deutsch lernen.", answer: "will", hint: "I want (ich)" },
      { sentence: "Was ___ du essen? (What do you want to eat?)", answer: "willst", hint: "You want (du)" },
      { sentence: "Meine Schwester ___ Ärztin werden.", answer: "will", hint: "She wants (sie)" },
    ],
    reading: {
      passage: "Ich will Arzt werden! Mein Bruder will Fußballspieler werden. Meine Schwester will Lehrerin werden. Wir wollen alle fleißig lernen. Was willst du werden?",
      translation: "I want to become a doctor! My brother wants to become a football player. My sister wants to become a teacher. We all want to learn hard. What do you want to become?",
      questions: [
        { q: "What does the child want to become?", a: "A doctor", choices: ["A teacher","A football player","A doctor","A singer"] },
        { q: "What does the brother want to become?", a: "A football player", choices: ["A doctor","A football player","A teacher","A singer"] },
        { q: "What do they all want to do?", a: "Learn hard", choices: ["Play games","Learn hard","Watch TV","Sleep"] },
      ],
    },
    homework: [
      "Schreibe alle 6 Formen von WOLLEN ✏️",
      "Schreibe 5 Sätze: 'Ich will ___' — was möchtest du tun? 📝",
      "Vergleiche KÖNNEN und WOLLEN — was ist der Unterschied? 🤔",
    ],
  },
];

// ─── GRAMMAR VAULT DATA ───────────────────────────────────────────────────────
// Each entry unlocks when the corresponding lesson is completed
const GRAMMAR_VAULT = [
  { id: 1, lessonId: 1, title: "Du vs Sie", emoji: "👥", color: "#6366F1",
    explanation: "Im Deutschen gibt es zwei Arten 'you' zu sagen. 'Du' benutzt du mit Freunden und Familie. 'Sie' (großgeschrieben) benutzt du mit Erwachsenen, die du nicht gut kennst.",
    table: { headers: ["Situation","Pronomen","Beispiel"], rows: [["Mit Freunden","du","Wie geht es dir?"],["Formell","Sie","Wie geht es Ihnen?"],["Plural","ihr","Wie geht es euch?"]] },
    tip: "Benutze immer 'Sie' mit Lehrern und Fremden — es ist höflicher!" },
  { id: 2, lessonId: 2, title: "Zahlen 1–10", emoji: "🔢", color: "#FF6B35",
    explanation: "Die deutschen Zahlen von 1 bis 10 musst du auswendig lernen.",
    table: { headers: ["Zahl","Deutsch","Aussprache"], rows: [["1","eins","ayns"],["2","zwei","tsvay"],["3","drei","dry"],["4","vier","feer"],["5","fünf","fuenf"],["6","sechs","zeks"],["7","sieben","zeeben"],["8","acht","ahkt"],["9","neun","noyn"],["10","zehn","tsayn"]] },
    tip: "Übe täglich laut zu zählen!" },
  { id: 3, lessonId: 3, title: "Zahlen 11–100", emoji: "💯", color: "#F59E0B",
    explanation: "Zahlen über 20 werden im Deutschen umgekehrt gebildet: erst die Einheit, dann 'und', dann die Zehnerstelle.",
    table: { headers: ["Zahl","Deutsch","Muster"], rows: [["11","elf","special"],["12","zwölf","special"],["20","zwanzig","base"],["21","einundzwanzig","1+und+20"],["35","fünfunddreißig","5+und+30"],["100","hundert","base"]] },
    tip: "21 = einundzwanzig (one-AND-twenty) — das Gegenteil von Englisch!" },
  { id: 4, lessonId: 4, title: "Der, Die, Das — Artikel", emoji: "🏷️", color: "#4ECDC4",
    explanation: "Jedes deutsche Nomen hat einen Artikel. Es gibt 3 Geschlechter: maskulin (der), feminin (die) und neutral (das). Diese musst du mit jedem Wort lernen!",
    table: { headers: ["Geschlecht","Artikel","Beispiel"], rows: [["Maskulin","der","der Hund (the dog)"],["Feminin","die","die Katze (the cat)"],["Neutral","das","das Buch (the book)"],["Plural","die","die Bücher (the books)"]] },
    tip: "Lerne immer Nomen MIT ihrem Artikel: 'der Stift', nicht nur 'Stift'!" },
  { id: 5, lessonId: 5, title: "Ein, Eine — Unbestimmter Artikel", emoji: "📝", color: "#A78BFA",
    explanation: "Der unbestimmte Artikel (a/an) hat drei Formen: 'ein' für maskulin und neutral, 'eine' für feminin. Im Akkusativ (nach Verben wie 'haben') wird 'ein' bei maskulinen Nomen zu 'einen'!",
    table: { headers: ["Geschlecht","Nominativ","Akkusativ"], rows: [["Maskulin","ein Hund","einen Hund"],["Feminin","eine Katze","eine Katze"],["Neutral","ein Buch","ein Buch"]] },
    tip: "Nur maskulin ändert sich: ein → einen! Merke: 'ich habe EINEN Hund'" },
  { id: 6, lessonId: 6, title: "Mein, Meine — Possessivartikel", emoji: "👤", color: "#22c55e",
    explanation: "'Mein' bedeutet 'my'. Es folgt dem gleichen Muster wie 'ein/eine': maskulin und neutral → 'mein', feminin und plural → 'meine'.",
    table: { headers: ["Geschlecht","Possessiv","Beispiel"], rows: [["Maskulin","mein","mein Bruder (my brother)"],["Feminin","meine","meine Schwester (my sister)"],["Neutral","mein","mein Buch (my book)"],["Plural","meine","meine Eltern (my parents)"]] },
    tip: "Das gleiche Muster gilt auch für 'dein' (your), 'sein' (his) und 'ihr' (her)!" },
  { id: 7, lessonId: 7, title: "Ich mag / Ich mag nicht", emoji: "❤️", color: "#EF4444",
    explanation: "'Ich mag' = I like. 'Ich mag ... nicht' = I don't like. Nach 'mögen' benutzt du Nomen ohne Artikel (oder mit 'kein/keine').",
    table: { headers: ["Deutsch","Englisch","Beispiel"], rows: [["Ich mag","I like","Ich mag Hunde"],["Ich mag nicht","I don't like","Ich mag Spinnen nicht"],["Ich mag kein/keine","I don't like any","Ich mag keine Schlangen"],["Ich liebe","I love","Ich liebe Katzen"],["Ich hasse","I hate","Ich hasse Spinnen"]] },
    tip: "Benutze 'kein/keine' nach 'mögen' für 'not any': 'Ich mag keine Katzen'" },
  { id: 8, lessonId: 8, title: "Ich esse / Ich trinke", emoji: "🍽️", color: "#D97706",
    explanation: "'Essen' (to eat) und 'trinken' (to drink) sind regelmäßige Verben — fast! 'Essen' hat eine Besonderheit: 'du isst' und 'er isst' (nicht 'essst').",
    table: { headers: ["Person","essen","trinken"], rows: [["ich","esse","trinke"],["du","isst","trinkst"],["er/sie/es","isst","trinkt"],["wir","essen","trinken"],["ihr","esst","trinkt"],["sie","essen","trinken"]] },
    tip: "Achtung: 'du isst' und 'er isst' sind gleich — der Kontext macht den Unterschied!" },
  { id: 9, lessonId: 9, title: "SEIN — Vollständige Konjugation", emoji: "🔵", color: "#3B82F6",
    explanation: "'Sein' (to be) ist das wichtigste und unregelmäßigste Verb im Deutschen. Du musst alle Formen auswendig lernen!",
    table: { headers: ["Person","sein","Englisch"], rows: [["ich","bin","I am"],["du","bist","you are"],["er/sie/es","ist","he/she/it is"],["wir","sind","we are"],["ihr","seid","you are (pl.)"],["sie/Sie","sind","they/you (formal) are"]] },
    tip: "SEIN + Adjektiv: Adjektive nach SEIN verändern sich nicht: 'Ich bin müde. Du bist müde.'" },
  { id: 10, lessonId: 10, title: "Adjektive nach SEIN", emoji: "✨", color: "#8B5CF6",
    explanation: "Wenn Adjektive nach 'sein' stehen (prädikativ), verändern sie sich NICHT. Das ist einfacher als im Englischen! Wenn sie vor einem Nomen stehen, müssen sie gebeugt werden — das kommt später.",
    table: { headers: ["Deutsch","Englisch","Typ"], rows: [["Ich bin müde.","I am tired.","pred. — no change"],["Du bist groß.","You are tall.","pred. — no change"],["Er ist nett.","He is kind.","pred. — no change"],["ein großer Mann","a tall man","attr. — changes!"],["eine nette Frau","a nice woman","attr. — changes!"]] },
    tip: "Nach SEIN: kein Problem! Vor dem Nomen: kommt bald — Adjektivendungen sind wichtig!" },
  { id: 11, lessonId: 11, title: "HABEN — Vollständige Konjugation", emoji: "🟡", color: "#EAB308",
    explanation: "'Haben' (to have) ist das zweithäufigste Verb im Deutschen. Es ist auch unregelmäßig — beachte die Formen 'du hast' und 'er hat'.",
    table: { headers: ["Person","haben","Englisch"], rows: [["ich","habe","I have"],["du","hast","you have"],["er/sie/es","hat","he/she/it has"],["wir","haben","we have"],["ihr","habt","you have (pl.)"],["sie/Sie","haben","they/you (formal) have"]] },
    tip: "HABEN wird auch für zusammengesetzte Zeiten benutzt: 'Ich habe gespielt' (I have played) — wichtig für später!" },
  { id: 12, lessonId: 12, title: "Akkusativ — der/die/das wird den/die/das", emoji: "⚡", color: "#F97316",
    explanation: "Im Deutschen gibt es 4 Fälle (Kasus). Der Akkusativ kommt nach Verben wie HABEN, MÖGEN, KAUFEN. Nur der maskuline Artikel ändert sich: 'der' → 'den', 'ein' → 'einen'.",
    table: { headers: ["Kasus","Maskulin","Feminin","Neutral"], rows: [["Nominativ","der/ein","die/eine","das/ein"],["Akkusativ","den/einen","die/eine","das/ein"]] },
    tip: "Nur MASKULIN ändert sich im Akkusativ! Merke: 'Ich sehe DEN Hund.' (not 'der')" },
  { id: 13, lessonId: 13, title: "MACHEN & regelmäßige Verben", emoji: "🟢", color: "#16A34A",
    explanation: "Die meisten deutschen Verben sind regelmäßig. Der Stamm + diese Endungen: -e (ich), -st (du), -t (er/sie/es), -en (wir), -t (ihr), -en (sie). Lerne das Muster und du kannst hunderte Verben konjugieren!",
    table: { headers: ["Person","Endung","machen","spielen"], rows: [["ich","-e","mache","spiele"],["du","-st","machst","spielst"],["er/sie/es","-t","macht","spielt"],["wir","-en","machen","spielen"],["ihr","-t","macht","spielt"],["sie/Sie","-en","machen","spielen"]] },
    tip: "Ausnahme: Verben auf -ten/-den fügen ein 'e' ein: 'arbeiten' → du arbeitest (not 'arbeitst')" },
  { id: 14, lessonId: 14, title: "Verben auf -en: spielen, lernen, hören", emoji: "📚", color: "#0EA5E9",
    explanation: "Sobald du das Muster (-e/-st/-t/-en/-t/-en) kennst, kannst du alle regelmäßigen Verben konjugieren. Das ist die Grundlage des deutschen Verbsystems!",
    table: { headers: ["Infinitiv","Stamm","Bedeutung"], rows: [["spielen","spiel-","to play"],["lernen","lern-","to learn"],["hören","hör-","to hear/listen"],["kaufen","kauf-","to buy"],["wohnen","wohn-","to live"],["fragen","frag-","to ask"]] },
    tip: "Schritt 1: Nehme den Infinitiv. Schritt 2: Streiche -en. Schritt 3: Füge die Endung hinzu. Fertig!" },
  { id: 15, lessonId: 15, title: "SEIN vs HABEN vs Regelmäßig", emoji: "⚖️", color: "#7C3AED",
    explanation: "Jetzt kennst du die 3 wichtigsten Verbgruppen im Deutschen! Hier ist eine Übersicht zum Vergleich.",
    table: { headers: ["Person","sein","haben","spielen (regular)"], rows: [["ich","bin","habe","spiele"],["du","bist","hast","spielst"],["er/sie/es","ist","hat","spielt"],["wir","sind","haben","spielen"],["ihr","seid","habt","spielt"],["sie/Sie","sind","haben","spielen"]] },
    tip: "SEIN und HABEN auswendig lernen! Regelmäßige Verben: Stamm + Endung." },
  { id: 16, lessonId: 16, title: "ES + Verb — Wetter", emoji: "🌤️", color: "#06B6D4",
    explanation: "Beim Wetter und bei anderen unpersönlichen Ausdrücken benutzen wir 'es' als Subjekt. Das 'es' bedeutet nichts — es ist nur grammatisch notwendig. Das Verb kommt an Stelle 2.",
    table: { headers: ["Deutsch","Englisch","Typ"], rows: [["Es regnet.","It is raining.","Verb allein"],["Es schneit.","It is snowing.","Verb allein"],["Es ist warm.","It is warm.","sein + Adj."],["Es gibt...","There is/are...","geben"],["Es ist 3 Uhr.","It is 3 o'clock.","Zeit"]] },
    tip: "'Es gibt' (there is/are) ist sehr wichtig und häufig: 'Es gibt viele Hunde im Park.'" },
  { id: 17, lessonId: 17, title: "KÖNNEN — Modalverb", emoji: "💪", color: "#DC2626",
    explanation: "Modalverben sind eine besondere Verbgruppe! Das Modalverb steht an Stelle 2, der Infinitiv des Hauptverbs steht am SATZENDE. KÖNNEN hat unregelmäßige ich/er Formen: kann (not 'könne')!",
    table: { headers: ["Person","können","Englisch"], rows: [["ich","kann","I can"],["du","kannst","you can"],["er/sie/es","kann","he/she/it can"],["wir","können","we can"],["ihr","könnt","you can (pl.)"],["sie/Sie","können","they/you can"]] },
    tip: "Satzbau: Ich kann gut [INFINITIV am Ende] Deutsch SPRECHEN. — Das Hauptverb geht ans Ende!" },
  { id: 18, lessonId: 18, title: "WOLLEN — Modalverb", emoji: "🎯", color: "#BE185D",
    explanation: "'Wollen' (to want) folgt dem gleichen Muster wie KÖNNEN: konjugiertes Verb an Stelle 2, Infinitiv ans Ende. Beachte: 'ich will' und 'er will' haben kein -e am Ende!",
    table: { headers: ["Person","wollen","Englisch"], rows: [["ich","will","I want"],["du","willst","you want"],["er/sie/es","will","he/she/it wants"],["wir","wollen","we want"],["ihr","wollt","you want (pl.)"],["sie/Sie","wollen","they/you want"]] },
    tip: "Merke: 'Ich will' — NICHT 'ich wille'! Und der Infinitiv geht ans ENDE: 'Ich will Deutsch LERNEN.'" },
];

const MONTH_META = {
  April: { label: "🌸 April — Grundlagen", color: "#FF6B35" },
  May:   { label: "🌿 Mai — Wortschatz & Verben", color: "#4ECDC4" },
  June:  { label: "☀️ Juni — Verbformen", color: "#F59E0B" },
  July:  { label: "🎓 Juli — Modalverben", color: "#6366F1" },
};

const COLORS = {
  bg: "#FFF8F0", card: "#FFFFFF", primary: "#FF6B35", secondary: "#4ECDC4",
  accent: "#FFE66D", purple: "#A78BFA", text: "#2D2D2D", muted: "#888",
};

const EXERCISE_MODES = ["warmup","grammar","vocab","quiz","match","fill","reading","homework"];
const MODE_LABELS = { warmup:"🔥 Warm-up", grammar:"💡 Grammatik", vocab:"📚 Vokabeln", quiz:"🎯 Quiz", match:"🔗 Zuordnen", fill:"✏️ Lückentext", reading:"📖 Lesen", homework:"📋 Hausaufgaben" };
const MODE_COLORS = { warmup:"#FACC15,#D97706", grammar:"#D97706,#F59E0B", vocab:"#FF6B35,#FF9A6C", quiz:"#A78BFA,#7C3AED", match:"#4ECDC4,#45B7AA", fill:"#F59E0B,#D97706", reading:"#22c55e,#16a34a", homework:"#FF6B35,#E85D20" };

function loadExtra() { try { return JSON.parse(localStorage.getItem("extra_lessons_de") || "[]"); } catch { return []; } }
function saveExtra(l) { try { localStorage.setItem("extra_lessons_de", JSON.stringify(l)); } catch {} }
function loadProgress() { try { return JSON.parse(localStorage.getItem("lesson_progress_de") || "{}"); } catch { return {}; } }
function saveProgress(p) { try { localStorage.setItem("lesson_progress_de", JSON.stringify(p)); } catch {} }

async function loadFromBlob() {
  try {
    const res = await fetch('/api/progress');
    if (!res.ok) return { progress: {}, wrongWords: [], hwLog: [] };
    return await res.json();
  } catch { return { progress: {}, wrongWords: [], hwLog: [] }; }
}

async function saveToBlob(progress, wrongWords, hwLog) {
  try {
    await fetch('/api/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ progress, wrongWords: wrongWords||[], hwLog: hwLog||[] }),
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

// ─── WARM-UP (SPACED REPETITION) ─────────────────────────────────────────────
function WarmUp({ wrongWords, onDone }) {
  const [qi, setQi] = React.useState(0);
  const [selected, setSelected] = React.useState(null);
  const [score, setScore] = React.useState(0);
  const [done, setDone] = React.useState(false);
  if (!wrongWords||wrongWords.length===0) { onDone(); return null; }
  const q = wrongWords[qi];
  const choose = (c) => {
    if (selected) return;
    setSelected(c);
    if (c===q.a) setScore(s=>s+1);
    setTimeout(()=>{ if(qi<wrongWords.length-1){setQi(qi+1);setSelected(null);}else setDone(true); },900);
  };
  if (done) return (
    <div style={{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",gap:16,padding:"20px 0"}}>
      <div style={{fontSize:48}}>🔥</div>
      <div style={{fontFamily:"'Fredoka One', cursive",fontSize:22,color:COLORS.primary}}>Aufwärmen erledigt, David!</div>
      <div style={{fontFamily:"Nunito, sans-serif",fontSize:15,color:COLORS.muted}}>{score}/{wrongWords.length} richtig</div>
      <Btn onClick={onDone}>Lektion starten →</Btn>
    </div>
  );
  return (
    <div style={{display:"flex",flexDirection:"column",gap:18}}>
      <div style={{background:"linear-gradient(135deg,#FEF9C3,#FEF08A)",border:"2px solid #FACC15",borderRadius:20,padding:"14px 18px"}}>
        <div style={{fontFamily:"'Fredoka One', cursive",fontSize:16,color:"#854D0E",marginBottom:4}}>🔥 Schnelles Aufwärmen!</div>
        <div style={{fontFamily:"Nunito, sans-serif",fontSize:13,color:"#92400E"}}>Diese Wörter waren letztes Mal schwierig — lass es uns nochmal versuchen! Frage {qi+1} von {wrongWords.length}</div>
      </div>
      <div style={{background:"linear-gradient(135deg,#A78BFA22,#7C3AED11)",border:"2px solid #A78BFA44",borderRadius:20,padding:"18px 20px",fontFamily:"'Fredoka One', cursive",fontSize:18,color:COLORS.text,textAlign:"center"}}>{q.q}</div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
        {q.choices.map(c=>{let bg="#f9fafb",border="2px solid #e5e7eb",color=COLORS.text;if(selected){if(c===q.a){bg="#dcfce7";border="2px solid #22c55e";color="#15803d";}else if(c===selected){bg="#fee2e2";border="2px solid #ef4444";color="#b91c1c";}}return <button key={c} onClick={()=>choose(c)} style={{padding:"13px 8px",borderRadius:16,border,background:bg,color,fontFamily:"Nunito, sans-serif",fontWeight:700,fontSize:"clamp(12px,3.5vw,14px)",cursor:selected?"default":"pointer",transition:"all 0.2s",lineHeight:1.3}}>{c}</button>;})}
      </div>
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
  const front = word.de || word.fr || "?";
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
  const [finalScore,setFinalScore]=React.useState(0);const [missed,setMissed]=React.useState([]);
  const quiz=lesson.quiz; const q=quiz[qi];
  const choose=(c)=>{
    if(selected)return; setSelected(c);
    const correct=c===q.a; const ns=score+(correct?1:0);
    if(correct)setScore(ns); else setMissed(m=>[...m,q]);
    setTimeout(()=>{ if(qi<quiz.length-1){setQi(qi+1);setSelected(null);}else{setFinalScore(ns);setDone(true);onScore(ns,quiz.length,correct?missed:[...missed,q]);} },900);
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
  const [wrongWords,setWrongWords]=useState([]);
  const [hwLog,setHwLog]=useState([]); // saved homework submissions
  const [modal,setModal]=useState(null);

  React.useEffect(()=>{
    loadFromBlob().then(data=>{
      if(data.progress&&Object.keys(data.progress).length>0)setProgress(data.progress);
      if(data.wrongWords)setWrongWords(data.wrongWords);
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

  const updateProgress=(id,stars,newWrongWords)=>{
    const updated={...progress,[id]:{completed:true,stars:Math.max(stars,progress[id]?.stars||0)}};
    setProgress(updated);saveProgress(updated);
    const updatedWrong=newWrongWords&&newWrongWords.length>0?[...wrongWords.filter(w=>!newWrongWords.find(nw=>nw.q===w.q)),...newWrongWords].slice(0,10):wrongWords;
    setWrongWords(updatedWrong);
    saveToBlob(updated,updatedWrong,hwLog);
    setCelebration({lesson:currentLesson,stars});
  };

  const saveHwEntry=(lessonId,lessonTitle,tasks)=>{
    const entry={lessonId,lessonTitle,tasks,date:new Date().toLocaleDateString("de-DE")};
    const updated=[entry,...hwLog].slice(0,30);
    setHwLog(updated);
    saveToBlob(progress,wrongWords,updated);
  };

  const openLesson=(lesson)=>{setCurrentLesson(lesson);setMode(wrongWords&&wrongWords.length>0?"warmup":lesson.grammarTip?"grammar":"vocab");setScreen("lesson");};

  const availableModes=currentLesson?EXERCISE_MODES.filter(m=>{
    if(m==="warmup")return wrongWords&&wrongWords.length>0;
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
            {mode==="warmup"&&<WarmUp wrongWords={wrongWords} onDone={()=>advance("warmup")} />}
            {mode==="grammar"&&<GrammarTip lesson={currentLesson} onDone={()=>advance("grammar")} />}
            {mode==="vocab"&&<VocabMode lesson={currentLesson} onDone={()=>advance("vocab")} />}
            {mode==="quiz"&&<QuizMode lesson={currentLesson} onDone={()=>advance("quiz")} onScore={(s,t,ww)=>updateProgress(currentLesson.id,Math.round((s/t)*5),ww)} />}
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
