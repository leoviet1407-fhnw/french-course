import React, { useState } from "react";

// ─── LESSON DATA ──────────────────────────────────────────────────────────────
// grammarTip: { title, explanation, examples[] }
// reading: { passage, questions[{q,a,choices}] }
// isReview: true = recycling lesson pulling from previous topics
const BUILT_IN_LESSONS = [
  {
    id: 1, week: 1, month: "April", title: "Greetings & Introductions", emoji: "👋",
    grammarTip: {
      title: "Tu vs Vous",
      explanation: "In French there are two ways to say 'you'. Use 'tu' with friends and family. Use 'vous' with adults you don't know well — like a teacher or shopkeeper.",
      examples: ["Ça va, tu ? (casual — to a friend)", "Ça va, vous ? (polite — to a teacher)"],
    },
    vocab: [
      { fr: "Bonjour", en: "Hello" }, { fr: "Salut", en: "Hi" },
      { fr: "Au revoir", en: "Goodbye" }, { fr: "Je m'appelle...", en: "My name is..." },
      { fr: "Ça va ?", en: "How are you?" }, { fr: "Ça va bien", en: "I'm fine" },
    ],
    quiz: [
      { q: "How do you say 'Hello' in French?", a: "Bonjour", choices: ["Bonjour","Au revoir","Salut","Merci"] },
      { q: "What does 'Ça va ?' mean?", a: "How are you?", choices: ["Goodbye","How are you?","My name is","Hi"] },
      { q: "How do you say 'Goodbye'?", a: "Au revoir", choices: ["Bonjour","Salut","Au revoir","Je m'appelle"] },
      { q: "What does 'Salut' mean?", a: "Hi", choices: ["Hello","Hi","Goodbye","Fine"] },
      { q: "How do you say 'I'm fine'?", a: "Ça va bien", choices: ["Ça va ?","Bonjour","Ça va bien","Au revoir"] },
      { q: "What does 'Je m'appelle...' mean?", a: "My name is...", choices: ["How are you?","My name is...","I'm fine","Goodbye"] },
      { q: "Which means 'Hello' formally?", a: "Bonjour", choices: ["Salut","Bonjour","Ça va","Merci"] },
      { q: "David says 'Au revoir' — what is he doing?", a: "Saying goodbye", choices: ["Saying hello","Saying goodbye","Saying his name","Asking how you are"] },
      { q: "How do you ask 'How are you?' in French?", a: "Ça va ?", choices: ["Bonjour","Au revoir","Ça va ?","Salut"] },
      { q: "What do you say to introduce yourself?", a: "Je m'appelle...", choices: ["Ça va bien","Au revoir","Salut","Je m'appelle..."] },
    ],
    fillBlanks: [
      { sentence: "___ , je m'appelle David.", answer: "Bonjour", hint: "Start with a greeting" },
      { sentence: "Ça va ? — Oui, ça va ___.", answer: "bien", hint: "Means 'fine'" },
      { sentence: "Au ___, à demain !", answer: "revoir", hint: "Completes 'goodbye'" },
    ],
    translate: [
      { fr: "Bonjour, je m'appelle David.", en: "Hello, my name is David." },
      { fr: "Ça va ?", en: "How are you?" },
      { fr: "Au revoir !", en: "Goodbye!" },
    ],
    reading: {
      passage: "Bonjour ! Je m'appelle Sophie. Ça va bien, merci. Au revoir !",
      translation: "Hello! My name is Sophie. I'm fine, thank you. Goodbye!",
      questions: [
        { q: "What is the girl's name?", a: "Sophie", choices: ["David","Marie","Sophie","Julie"] },
        { q: "How is Sophie feeling?", a: "Fine", choices: ["Sad","Fine","Tired","Happy"] },
        { q: "What does she say at the end?", a: "Au revoir", choices: ["Bonjour","Salut","Ça va","Au revoir"] },
      ],
    },
    homework: [
      "Say 'Bonjour' and 'Au revoir' to someone at home today 👋",
      "Practise saying: 'Je m'appelle David. Ça va bien!' out loud 3 times 🗣️",
      "Write 'Bonjour', 'Salut' and 'Au revoir' in your notebook ✏️",
    ],
  },
  {
    id: 2, week: 2, month: "April", title: "Numbers 1–10", emoji: "🔢",
    grammarTip: {
      title: "Numbers & Age",
      explanation: "In French you say 'J'ai...' (I have) to give your age — not 'I am'. So David says 'J'ai neuf ans' (I have nine years). Funny but important!",
      examples: ["J'ai neuf ans. (I am 9)", "J'ai dix ans. (I am 10)", "Tu as quel âge ? (How old are you?)"],
    },
    vocab: [
      { fr: "Un", en: "1" }, { fr: "Deux", en: "2" }, { fr: "Trois", en: "3" },
      { fr: "Quatre", en: "4" }, { fr: "Cinq", en: "5" },
      { fr: "Six", en: "6" }, { fr: "Sept", en: "7" }, { fr: "Huit", en: "8" },
      { fr: "Neuf", en: "9" }, { fr: "Dix", en: "10" },
    ],
    quiz: [
      { q: "What is 'Cinq'?", a: "5", choices: ["3","5","7","9"] },
      { q: "How do you say '8'?", a: "Huit", choices: ["Sept","Neuf","Huit","Six"] },
      { q: "What is 'Trois'?", a: "3", choices: ["2","3","4","5"] },
      { q: "How do you say '10'?", a: "Dix", choices: ["Neuf","Dix","Sept","Huit"] },
      { q: "What is 'Deux'?", a: "2", choices: ["1","2","3","4"] },
      { q: "How do you say '7'?", a: "Sept", choices: ["Six","Sept","Huit","Neuf"] },
      { q: "What is 'Quatre'?", a: "4", choices: ["3","4","5","6"] },
      { q: "How do you say '1'?", a: "Un", choices: ["Un","Deux","Trois","Quatre"] },
      { q: "What is 'Six'?", a: "6", choices: ["5","6","7","8"] },
      { q: "How do you say '9'?", a: "Neuf", choices: ["Sept","Huit","Neuf","Dix"] },
    ],
    fillBlanks: [
      { sentence: "J'ai ___ ans. (I am 9 years old)", answer: "neuf", hint: "The number 9" },
      { sentence: "___ + deux = cinq", answer: "Trois", hint: "3 + 2 = 5" },
      { sentence: "Il y a ___ enfants. (There are 10 children)", answer: "dix", hint: "The number 10" },
    ],
    translate: [
      { fr: "J'ai neuf ans.", en: "I am 9 years old." },
      { fr: "Un, deux, trois — go !", en: "One, two, three — go!" },
      { fr: "Il y a dix enfants.", en: "There are ten children." },
    ],
    reading: {
      passage: "Je m'appelle Luc. J'ai huit ans. J'ai trois frères. Nous avons un chien.",
      translation: "My name is Luc. I am 8. I have three brothers. We have a dog.",
      questions: [
        { q: "How old is Luc?", a: "8", choices: ["7","8","9","10"] },
        { q: "How many brothers does he have?", a: "3", choices: ["1","2","3","4"] },
        { q: "What pet does he have?", a: "A dog", choices: ["A cat","A dog","A rabbit","A fish"] },
      ],
    },
    homework: [
      "Count from 1 to 10 in French every morning this week 🔢",
      "Write the numbers 1–10 in French in your notebook ✏️",
      "Ask someone at home to test you on numbers 1–10 🎯",
    ],
  },
  {
    id: 3, week: 2, month: "April", title: "Numbers 11–100", emoji: "💯",
    grammarTip: {
      title: "How French numbers work",
      explanation: "French numbers 11–16 have special names. From 17 onwards they combine: 17 = dix-sept (ten-seven), 18 = dix-huit (ten-eight). And 70 = soixante-dix (sixty-ten)! French loves combining numbers.",
      examples: ["17 = dix-sept", "20 = vingt", "100 = cent"],
    },
    vocab: [
      { fr: "Onze", en: "11" }, { fr: "Douze", en: "12" }, { fr: "Treize", en: "13" },
      { fr: "Quatorze", en: "14" }, { fr: "Quinze", en: "15" },
      { fr: "Seize", en: "16" }, { fr: "Vingt", en: "20" },
      { fr: "Trente", en: "30" }, { fr: "Cinquante", en: "50" }, { fr: "Cent", en: "100" },
    ],
    quiz: [
      { q: "What is 'Onze'?", a: "11", choices: ["10","11","12","13"] },
      { q: "How do you say '12'?", a: "Douze", choices: ["Onze","Douze","Treize","Seize"] },
      { q: "What is 'Quinze'?", a: "15", choices: ["13","14","15","16"] },
      { q: "How do you say '20'?", a: "Vingt", choices: ["Dix","Vingt","Trente","Cent"] },
      { q: "What is 'Cent'?", a: "100", choices: ["10","20","50","100"] },
      { q: "How do you say '30'?", a: "Trente", choices: ["Vingt","Trente","Quarante","Cinquante"] },
      { q: "What is 'Seize'?", a: "16", choices: ["14","15","16","17"] },
      { q: "How do you say '50'?", a: "Cinquante", choices: ["Quarante","Cinquante","Soixante","Cent"] },
      { q: "What is 'Treize'?", a: "13", choices: ["11","12","13","14"] },
      { q: "How do you say '14'?", a: "Quatorze", choices: ["Treize","Quatorze","Quinze","Seize"] },
    ],
    fillBlanks: [
      { sentence: "Il y a ___ élèves dans la classe. (There are 20 pupils)", answer: "vingt", hint: "The number 20" },
      { sentence: "Grand-père a ___ ans. (Grandpa is 50)", answer: "cinquante", hint: "Half of 100" },
      { sentence: "Il y a ___ centimes dans un euro.", answer: "cent", hint: "100 cents in a euro" },
    ],
    translate: [
      { fr: "J'ai quinze bonbons.", en: "I have fifteen sweets." },
      { fr: "Il y a trente jours dans un mois.", en: "There are thirty days in a month." },
      { fr: "Grand-mère a cent ans !", en: "Grandma is a hundred years old!" },
    ],
    reading: {
      passage: "Dans ma classe il y a vingt élèves. Il y a onze garçons et neuf filles. Le professeur a trente ans.",
      translation: "In my class there are twenty pupils. There are eleven boys and nine girls. The teacher is thirty.",
      questions: [
        { q: "How many pupils are in the class?", a: "20", choices: ["11","19","20","30"] },
        { q: "How many boys are there?", a: "11", choices: ["9","10","11","12"] },
        { q: "How old is the teacher?", a: "30", choices: ["20","25","30","40"] },
      ],
    },
    homework: [
      "Count from 10 to 20 in French — try to do it without looking! 🔢",
      "Write the numbers 11–20 in French in your notebook ✏️",
      "Work out how to say your house number in French 🏠",
    ],
  },
  {
    id: 4, week: 3, month: "April", title: "Colors", emoji: "🎨",
    grammarTip: {
      title: "Masculine & Feminine — un/une",
      explanation: "Every French noun is either masculine (un/le) or feminine (une/la). There's no rule — you have to learn it with the word! 'Un chat' (a cat) is masculine. 'Une gomme' (an eraser) is feminine.",
      examples: ["un chat (a cat — masc.)", "une règle (a ruler — fem.)", "un livre vs une pomme"],
    },
    vocab: [
      { fr: "Rouge", en: "Red" }, { fr: "Bleu", en: "Blue" }, { fr: "Jaune", en: "Yellow" },
      { fr: "Vert", en: "Green" }, { fr: "Noir", en: "Black" }, { fr: "Blanc", en: "White" },
      { fr: "Rose", en: "Pink" }, { fr: "Orange", en: "Orange" },
    ],
    quiz: [
      { q: "What color is 'Rouge'?", a: "Red", choices: ["Blue","Red","Green","Pink"] },
      { q: "How do you say 'Yellow'?", a: "Jaune", choices: ["Vert","Jaune","Blanc","Noir"] },
      { q: "What does 'Bleu' mean?", a: "Blue", choices: ["Black","Green","Blue","White"] },
      { q: "What color is 'Vert'?", a: "Green", choices: ["Green","Yellow","Pink","Orange"] },
      { q: "How do you say 'Black'?", a: "Noir", choices: ["Blanc","Rouge","Noir","Rose"] },
      { q: "What does 'Rose' mean?", a: "Pink", choices: ["Red","Pink","Purple","Orange"] },
      { q: "How do you say 'White'?", a: "Blanc", choices: ["Noir","Bleu","Blanc","Vert"] },
      { q: "What color is 'Orange'?", a: "Orange", choices: ["Yellow","Orange","Red","Pink"] },
      { q: "How do you say 'Green'?", a: "Vert", choices: ["Rouge","Jaune","Vert","Rose"] },
      { q: "What does 'Noir' mean?", a: "Black", choices: ["White","Black","Blue","Red"] },
    ],
    fillBlanks: [
      { sentence: "Le ciel est ___. (The sky is blue)", answer: "bleu", hint: "A cool colour" },
      { sentence: "Une tomate est ___. (A tomato is red)", answer: "rouge", hint: "Think stop lights" },
      { sentence: "L'herbe est ___. (The grass is green)", answer: "verte", hint: "Like trees" },
    ],
    translate: [
      { fr: "Ma couleur préférée est le bleu.", en: "My favourite colour is blue." },
      { fr: "Le soleil est jaune.", en: "The sun is yellow." },
      { fr: "Mon sac est noir.", en: "My bag is black." },
    ],
    reading: {
      passage: "Bonjour ! Je m'appelle David. J'ai un chat noir et blanc. Il s'appelle Félix. Mon sac est bleu et ma gomme est rouge.",
      translation: "Hello! My name is David. I have a black and white cat. His name is Félix. My bag is blue and my eraser is red.",
      questions: [
        { q: "What colour is David's cat?", a: "Black and white", choices: ["All black","Black and white","Orange","Grey"] },
        { q: "What is the cat called?", a: "Félix", choices: ["David","Oscar","Félix","Luc"] },
        { q: "What colour is David's bag?", a: "Blue", choices: ["Red","Black","Green","Blue"] },
      ],
    },
    homework: [
      "Look around your room and name 5 things with their colour in French 🏠",
      "Draw a picture and label 4 colours in French 🎨",
      "Write: 'Ma couleur préférée est le ___' ✏️",
    ],
  },
  {
    id: 5, week: 4, month: "April", title: "School Objects", emoji: "🎒",
    grammarTip: {
      title: "J'ai / Je n'ai pas",
      explanation: "'J'ai' means 'I have'. To say 'I don't have', put 'ne...pas' around the verb: 'Je n'ai pas'. This is called negation and it works the same way with other verbs too!",
      examples: ["J'ai un stylo. (I have a pen)", "Je n'ai pas de gomme. (I don't have an eraser)", "J'ai un livre rouge. (I have a red book)"],
    },
    vocab: [
      { fr: "Un livre", en: "A book" }, { fr: "Un stylo", en: "A pen" },
      { fr: "Un crayon", en: "A pencil" }, { fr: "Un sac", en: "A bag" },
      { fr: "Une règle", en: "A ruler" }, { fr: "Une gomme", en: "An eraser" },
    ],
    quiz: [
      { q: "What is 'Un stylo'?", a: "A pen", choices: ["A book","A pen","A ruler","A pencil"] },
      { q: "How do you say 'A book'?", a: "Un livre", choices: ["Un sac","Une règle","Un livre","Une gomme"] },
      { q: "What does 'Un crayon' mean?", a: "A pencil", choices: ["A pencil","A pen","A bag","An eraser"] },
      { q: "How do you say 'An eraser'?", a: "Une gomme", choices: ["Un stylo","Une gomme","Un sac","Une règle"] },
      { q: "What is 'Un sac'?", a: "A bag", choices: ["A ruler","A bag","A book","A pen"] },
      { q: "How do you say 'A ruler'?", a: "Une règle", choices: ["Un livre","Une règle","Un crayon","Un sac"] },
      { q: "Is 'stylo' masculine or feminine?", a: "Masculine (un)", choices: ["Masculine (un)","Feminine (une)","Neither","Both"] },
      { q: "Is 'gomme' masculine or feminine?", a: "Feminine (une)", choices: ["Masculine (un)","Feminine (une)","Neither","Both"] },
      { q: "How do you say 'I have a pen'?", a: "J'ai un stylo", choices: ["J'ai une stylo","J'ai un stylo","Je n'ai pas un stylo","J'ai un crayon"] },
      { q: "How do you say 'I don't have an eraser'?", a: "Je n'ai pas de gomme", choices: ["J'ai une gomme","Je n'ai pas de gomme","J'ai pas gomme","Je n'ai une gomme"] },
    ],
    fillBlanks: [
      { sentence: "J'ai un ___ et un stylo dans mon sac.", answer: "livre", hint: "Something to read" },
      { sentence: "Je n'ai pas ___ gomme. (I don't have an eraser)", answer: "de", hint: "Use 'de' after n'ai pas" },
      { sentence: "Je dessine avec un ___.", answer: "crayon", hint: "Used for drawing" },
    ],
    translate: [
      { fr: "J'ai un stylo rouge dans mon sac.", en: "I have a red pen in my bag." },
      { fr: "Je n'ai pas de gomme.", en: "I don't have an eraser." },
      { fr: "J'ai besoin d'un crayon.", en: "I need a pencil." },
    ],
    reading: {
      passage: "Dans mon sac j'ai un livre bleu, deux stylos et une gomme. Je n'ai pas de règle. Mon sac est vert.",
      translation: "In my bag I have a blue book, two pens and an eraser. I don't have a ruler. My bag is green.",
      questions: [
        { q: "What colour is the book?", a: "Blue", choices: ["Red","Green","Blue","Black"] },
        { q: "How many pens are in the bag?", a: "2", choices: ["1","2","3","4"] },
        { q: "What is missing from the bag?", a: "A ruler", choices: ["A book","A pen","An eraser","A ruler"] },
      ],
    },
    homework: [
      "Pick up 3 things from your pencil case and say their name in French 🖊️",
      "Write 'J'ai un/une ___' for 5 school objects in French ✏️",
      "Draw your school bag and label what's inside in French 🎒",
    ],
  },
  {
    id: 6, week: 4, month: "April", title: "April Review ⭐", emoji: "🌟",
    isReview: true,
    grammarTip: {
      title: "Putting it all together",
      explanation: "You now know greetings, numbers, colours and school objects. Try to combine them! Colours go AFTER the noun in French: 'un stylo rouge' (a red pen), not 'un rouge stylo'.",
      examples: ["un livre bleu (a blue book)", "une gomme rouge (a red eraser)", "J'ai deux stylos noirs. (I have two black pens)"],
    },
    vocab: [
      { fr: "un stylo rouge", en: "a red pen" }, { fr: "un livre bleu", en: "a blue book" },
      { fr: "J'ai cinq stylos", en: "I have five pens" }, { fr: "Bonjour, ça va ?", en: "Hello, how are you?" },
      { fr: "J'ai neuf ans", en: "I am 9 years old" }, { fr: "une gomme verte", en: "a green eraser" },
    ],
    quiz: [
      { q: "How do you say 'a red pen'?", a: "un stylo rouge", choices: ["un rouge stylo","un stylo rouge","une stylo rouge","un stylo bleu"] },
      { q: "Colours in French go ___", a: "after the noun", choices: ["before the noun","after the noun","wherever you like","at the start"] },
      { q: "How do you say 'I have 5 pens'?", a: "J'ai cinq stylos", choices: ["J'ai cinq stylo","J'ai cinq stylos","J'ai cinq crayon","J'ai cinq livres"] },
      { q: "What does 'un livre bleu' mean?", a: "a blue book", choices: ["a blue pen","a blue bag","a blue book","a blue eraser"] },
      { q: "How do you say 'Hello, how are you?'", a: "Bonjour, ça va ?", choices: ["Salut, au revoir","Bonjour, ça va ?","Au revoir, ça va","Bonjour, je m'appelle"] },
      { q: "What is 'J'ai neuf ans'?", a: "I am 9 years old", choices: ["I have 9 books","I am 9 years old","I like nine","I have 9 pens"] },
      { q: "How do you say 'a green eraser'?", a: "une gomme verte", choices: ["un gomme vert","une verte gomme","une gomme verte","un gomme verte"] },
      { q: "Is 'livre' masculine or feminine?", a: "Masculine (un)", choices: ["Masculine (un)","Feminine (une)"] },
      { q: "How do you say 'I don't have a ruler'?", a: "Je n'ai pas de règle", choices: ["Je n'ai pas de règle","J'ai une règle","Je pas avoir règle","Je n'ai pas règle"] },
      { q: "How do you say 'Goodbye' formally?", a: "Au revoir", choices: ["Salut","Bonjour","Au revoir","Ça va"] },
    ],
    fillBlanks: [
      { sentence: "J'ai un stylo ___. (I have a blue pen)", answer: "bleu", hint: "Colour after noun" },
      { sentence: "Bonjour ! Je m'appelle David. J'ai ___ ans.", answer: "neuf", hint: "David's age" },
      { sentence: "Dans mon sac j'ai ___ livres. (I have 3 books)", answer: "trois", hint: "The number 3" },
    ],
    translate: [
      { fr: "J'ai deux gommes rouges.", en: "I have two red erasers." },
      { fr: "Bonjour ! Je m'appelle David et j'ai neuf ans.", en: "Hello! My name is David and I am 9 years old." },
      { fr: "Dans mon sac, j'ai un livre bleu et un stylo noir.", en: "In my bag I have a blue book and a black pen." },
    ],
    reading: {
      passage: "Bonjour ! Je m'appelle Emma. J'ai dix ans. Dans mon sac j'ai trois livres, deux stylos rouges et une gomme. Ma couleur préférée est le rose.",
      translation: "Hello! My name is Emma. I am 10. In my bag I have three books, two red pens and an eraser. My favourite colour is pink.",
      questions: [
        { q: "How old is Emma?", a: "10", choices: ["8","9","10","11"] },
        { q: "How many books does she have?", a: "3", choices: ["1","2","3","4"] },
        { q: "What is Emma's favourite colour?", a: "Pink", choices: ["Red","Blue","Green","Pink"] },
      ],
    },
    homework: [
      "Write 5 sentences: 'J'ai un/une [object] [colour]' — mix and match! ✏️",
      "Practise your full introduction: name, age, favourite colour 🗣️",
      "Teach a family member 5 French words you've learned this month 👨‍👩‍👧",
    ],
  },
  {
    id: 7, week: 5, month: "May", title: "Family Members", emoji: "👨‍👩‍👧",
    grammarTip: {
      title: "Mon / Ma / Mes",
      explanation: "'Mon' means 'my' for masculine nouns, 'ma' for feminine nouns, and 'mes' for plurals. So: 'mon frère' (my brother), 'ma sœur' (my sister), 'mes parents' (my parents).",
      examples: ["mon père (my dad)", "ma mère (my mum)", "mes grands-parents (my grandparents)"],
    },
    vocab: [
      { fr: "La maman", en: "Mum" }, { fr: "Le papa", en: "Dad" },
      { fr: "Le frère", en: "Brother" }, { fr: "La sœur", en: "Sister" },
      { fr: "Le grand-père", en: "Grandpa" }, { fr: "La grand-mère", en: "Grandma" },
    ],
    quiz: [
      { q: "What is 'La sœur'?", a: "Sister", choices: ["Brother","Mum","Sister","Grandma"] },
      { q: "How do you say 'Dad'?", a: "Le papa", choices: ["Le frère","Le papa","La maman","Le grand-père"] },
      { q: "What does 'La grand-mère' mean?", a: "Grandma", choices: ["Grandpa","Dad","Mum","Grandma"] },
      { q: "How do you say 'Mum'?", a: "La maman", choices: ["La sœur","Le papa","La maman","La grand-mère"] },
      { q: "What is 'Le frère'?", a: "Brother", choices: ["Sister","Brother","Dad","Grandpa"] },
      { q: "How do you say 'Grandpa'?", a: "Le grand-père", choices: ["La grand-mère","Le papa","Le grand-père","Le frère"] },
      { q: "How do you say 'my sister'?", a: "ma sœur", choices: ["mon sœur","ma sœur","mes sœur","la sœur"] },
      { q: "How do you say 'my brother'?", a: "mon frère", choices: ["mon frère","ma frère","mes frère","le frère"] },
      { q: "How do you say 'my parents'?", a: "mes parents", choices: ["mon parents","ma parents","mes parents","les parents"] },
      { q: "What does 'Le grand-père' mean?", a: "Grandpa", choices: ["Grandma","Grandpa","Dad","Brother"] },
    ],
    fillBlanks: [
      { sentence: "___ maman s'appelle Marie. (My mum is called Marie)", answer: "Ma", hint: "My — feminine" },
      { sentence: "___ frère joue au foot. (My brother plays football)", answer: "Mon", hint: "My — masculine" },
      { sentence: "___ grands-parents habitent en France.", answer: "Mes", hint: "My — plural" },
    ],
    translate: [
      { fr: "J'ai un frère et une sœur.", en: "I have a brother and a sister." },
      { fr: "Ma maman s'appelle Sophie.", en: "My mum is called Sophie." },
      { fr: "Mon grand-père est sympa.", en: "My grandpa is nice." },
    ],
    reading: {
      passage: "Dans ma famille il y a cinq personnes. J'ai une sœur et un frère. Ma sœur a sept ans et mon frère a douze ans. Mon papa s'appelle Pierre.",
      translation: "In my family there are five people. I have a sister and a brother. My sister is seven and my brother is twelve. My dad is called Pierre.",
      questions: [
        { q: "How many people are in the family?", a: "5", choices: ["3","4","5","6"] },
        { q: "How old is the sister?", a: "7", choices: ["5","7","9","12"] },
        { q: "What is the dad's name?", a: "Pierre", choices: ["Paul","Jean","Pierre","Marc"] },
      ],
    },
    homework: [
      "Tell someone at home the French word for each family member 👨‍👩‍👧",
      "Draw your family and label each person in French 🖼️",
      "Write: 'Dans ma famille, il y a...' and list your family in French ✏️",
    ],
  },
  {
    id: 8, week: 6, month: "May", title: "Animals", emoji: "🐾",
    grammarTip: {
      title: "J'aime / Je n'aime pas",
      explanation: "'J'aime' means 'I like' and 'Je n'aime pas' means 'I don't like'. After these, use 'les' (the/plural): 'J'aime les chiens'. You can also say 'J'adore' (I love) or 'Je déteste' (I hate)!",
      examples: ["J'aime les chats. (I like cats)", "Je n'aime pas les serpents. (I don't like snakes)", "J'adore les chiens ! (I love dogs!)"],
    },
    vocab: [
      { fr: "Un chat", en: "A cat" }, { fr: "Un chien", en: "A dog" },
      { fr: "Un lapin", en: "A rabbit" }, { fr: "Un oiseau", en: "A bird" },
      { fr: "Un poisson", en: "A fish" }, { fr: "J'aime les chats", en: "I like cats" },
    ],
    quiz: [
      { q: "What is 'Un chien'?", a: "A dog", choices: ["A cat","A dog","A bird","A rabbit"] },
      { q: "How do you say 'A rabbit'?", a: "Un lapin", choices: ["Un chat","Un oiseau","Un lapin","Un poisson"] },
      { q: "What does 'J'aime les chats' mean?", a: "I like cats", choices: ["I like dogs","I like fish","I like cats","I like birds"] },
      { q: "How do you say 'A bird'?", a: "Un oiseau", choices: ["Un lapin","Un oiseau","Un chien","Un chat"] },
      { q: "What is 'Un poisson'?", a: "A fish", choices: ["A cat","A rabbit","A fish","A bird"] },
      { q: "How do you say 'I love dogs'?", a: "J'adore les chiens", choices: ["J'aime les chiens","J'adore les chiens","Je n'aime pas les chiens","J'ai les chiens"] },
      { q: "How do you say 'I don't like birds'?", a: "Je n'aime pas les oiseaux", choices: ["J'aime les oiseaux","Je n'aime pas les oiseaux","Je déteste un oiseau","J'adore les oiseaux"] },
      { q: "What does 'Je déteste' mean?", a: "I hate", choices: ["I like","I love","I hate","I have"] },
      { q: "What is 'Un lapin'?", a: "A rabbit", choices: ["A dog","A fish","A bird","A rabbit"] },
      { q: "How do you say 'I like fish'?", a: "J'aime les poissons", choices: ["J'aime les lapins","J'aime les poissons","J'aime les oiseaux","J'aime les chats"] },
    ],
    fillBlanks: [
      { sentence: "J'___ les chiens. (I like dogs)", answer: "aime", hint: "I like" },
      { sentence: "Je n'aime ___ les serpents.", answer: "pas", hint: "Goes in ne...pas" },
      { sentence: "Mon animal préféré est le ___. (My favourite is the cat)", answer: "chat", hint: "Says meow" },
    ],
    translate: [
      { fr: "J'adore les chiens et les chats.", en: "I love dogs and cats." },
      { fr: "Je n'aime pas les poissons.", en: "I don't like fish." },
      { fr: "Mon animal préféré est le lapin.", en: "My favourite animal is the rabbit." },
    ],
    reading: {
      passage: "Je m'appelle Zoé. J'ai un chat blanc et un lapin gris. J'adore les animaux ! Je n'aime pas les serpents. Mon chat s'appelle Minou.",
      translation: "My name is Zoé. I have a white cat and a grey rabbit. I love animals! I don't like snakes. My cat is called Minou.",
      questions: [
        { q: "What colour is Zoé's cat?", a: "White", choices: ["Grey","Black","White","Orange"] },
        { q: "What is Zoé's cat called?", a: "Minou", choices: ["Félix","Minou","Oscar","Tom"] },
        { q: "What animal doesn't Zoé like?", a: "Snakes", choices: ["Cats","Dogs","Rabbits","Snakes"] },
      ],
    },
    homework: [
      "Say the French word for 3 different animals before dinner tonight 🐾",
      "Write 'J'aime les ___' and 'Je n'aime pas les ___' for 3 animals each ✏️",
      "Draw your favourite animal and write 2 sentences about it in French 🐶",
    ],
  },
  {
    id: 9, week: 7, month: "May", title: "Food & Drinks", emoji: "🍎",
    grammarTip: {
      title: "Du / De la / Des",
      explanation: "In French, when you eat or drink something, you use 'du' (masculine), 'de la' (feminine), or 'des' (plural) — these all mean 'some'. So: 'Je mange du pain' (I eat some bread), 'Je bois de l'eau' (I drink some water).",
      examples: ["Je mange du pain. (I eat bread)", "Je bois de l'eau. (I drink water)", "Je mange des pommes. (I eat apples)"],
    },
    vocab: [
      { fr: "Une pomme", en: "An apple" }, { fr: "Le pain", en: "Bread" },
      { fr: "Le lait", en: "Milk" }, { fr: "L'eau", en: "Water" },
      { fr: "J'aime...", en: "I like..." }, { fr: "Je n'aime pas...", en: "I don't like..." },
    ],
    quiz: [
      { q: "What is 'Le lait'?", a: "Milk", choices: ["Water","Bread","Milk","An apple"] },
      { q: "How do you say 'I like'?", a: "J'aime...", choices: ["J'aime...","Je n'aime pas...","L'eau","Le pain"] },
      { q: "What does 'Une pomme' mean?", a: "An apple", choices: ["Bread","Milk","Water","An apple"] },
      { q: "How do you say 'Water'?", a: "L'eau", choices: ["Le lait","L'eau","Le pain","Une pomme"] },
      { q: "What is 'Le pain'?", a: "Bread", choices: ["Milk","Bread","Water","Apple"] },
      { q: "How do you say 'I eat bread'?", a: "Je mange du pain", choices: ["Je mange le pain","Je mange du pain","Je bois du pain","J'aime du pain"] },
      { q: "How do you say 'I drink water'?", a: "Je bois de l'eau", choices: ["Je mange de l'eau","Je bois du eau","Je bois de l'eau","J'ai de l'eau"] },
      { q: "How do you say 'I eat apples'?", a: "Je mange des pommes", choices: ["Je mange du pomme","Je mange de la pomme","Je mange des pommes","Je mange les pommes"] },
      { q: "What does 'Je bois' mean?", a: "I drink", choices: ["I eat","I drink","I like","I have"] },
      { q: "What does 'Je mange' mean?", a: "I eat", choices: ["I eat","I drink","I like","I want"] },
    ],
    fillBlanks: [
      { sentence: "Je mange ___ pain. (I eat bread)", answer: "du", hint: "Some — masculine" },
      { sentence: "Je bois ___ lait. (I drink milk)", answer: "du", hint: "Some — masculine" },
      { sentence: "Je mange ___ pommes. (I eat apples)", answer: "des", hint: "Some — plural" },
    ],
    translate: [
      { fr: "J'aime les pommes.", en: "I like apples." },
      { fr: "Je bois de l'eau et du lait.", en: "I drink water and milk." },
      { fr: "Je n'aime pas le pain.", en: "I don't like bread." },
    ],
    reading: {
      passage: "Pour le petit-déjeuner, je mange du pain et une pomme. Je bois du lait. Je n'aime pas le café ! Mon repas préféré est le dîner.",
      translation: "For breakfast I eat bread and an apple. I drink milk. I don't like coffee! My favourite meal is dinner.",
      questions: [
        { q: "What does the child eat for breakfast?", a: "Bread and an apple", choices: ["Cereal","Bread and an apple","Eggs","Fruit"] },
        { q: "What do they drink?", a: "Milk", choices: ["Water","Juice","Milk","Coffee"] },
        { q: "What is their favourite meal?", a: "Dinner", choices: ["Breakfast","Lunch","Dinner","Snack"] },
      ],
    },
    homework: [
      "At your next meal, try to say what you're eating in French 🍽️",
      "Write 'Je mange du/de la/des ___' for 5 different foods ✏️",
      "Write 'Je bois du/de la ___' for 3 drinks you like 🥤",
    ],
  },
  {
    id: 10, week: 8, month: "May", title: "May Review ⭐", emoji: "🏆",
    isReview: true,
    grammarTip: {
      title: "Verbs: avoir, être, aimer",
      explanation: "You've been using three key verbs: 'avoir' (to have), 'être' (to be) and 'aimer' (to like). These are the most important verbs in French! Notice how they change for 'je' (I): j'ai, je suis, j'aime.",
      examples: ["J'ai un chat. (I have a cat)", "Je suis content. (I am happy)", "J'aime les pommes. (I like apples)"],
    },
    vocab: [
      { fr: "J'ai un chien noir", en: "I have a black dog" },
      { fr: "Ma sœur a huit ans", en: "My sister is eight" },
      { fr: "Je mange des pommes", en: "I eat apples" },
      { fr: "J'adore les animaux", en: "I love animals" },
      { fr: "Dans ma famille...", en: "In my family..." },
      { fr: "Mon animal préféré", en: "My favourite animal" },
    ],
    quiz: [
      { q: "How do you say 'I have a black dog'?", a: "J'ai un chien noir", choices: ["J'ai un noir chien","J'ai un chien noir","J'ai une chien noire","J'ai le chien noir"] },
      { q: "What does 'Ma sœur a huit ans' mean?", a: "My sister is eight", choices: ["My sister has eight","My sister is eight","My brother is eight","My sister is eight years"] },
      { q: "How do you say 'I eat apples'?", a: "Je mange des pommes", choices: ["Je mange du pomme","Je mange des pommes","Je mange les pommes","Je bois des pommes"] },
      { q: "What does 'Mon' mean?", a: "My (masculine)", choices: ["My (masculine)","My (feminine)","My (plural)","The"] },
      { q: "What does 'Ma' mean?", a: "My (feminine)", choices: ["My (masculine)","My (feminine)","My (plural)","A"] },
      { q: "How do you say 'I love animals'?", a: "J'adore les animaux", choices: ["J'aime les animaux","J'adore les animaux","Je n'aime pas les animaux","J'ai les animaux"] },
      { q: "Colours in French go ___ the noun", a: "after", choices: ["before","after","around","under"] },
      { q: "How do you say 'I drink milk'?", a: "Je bois du lait", choices: ["Je mange du lait","Je bois de la lait","Je bois du lait","J'ai du lait"] },
      { q: "What is 'J'ai' in English?", a: "I have", choices: ["I am","I like","I have","I eat"] },
      { q: "How do you say 'In my family there are 4 people'?", a: "Dans ma famille il y a quatre personnes", choices: ["Dans ma famille il y a quatre personnes","Dans mon famille il y a quatre","Ma famille a quatre","Mes famille sont quatre"] },
    ],
    fillBlanks: [
      { sentence: "J'ai ___ chien noir. (I have a black dog)", answer: "un", hint: "Masculine article" },
      { sentence: "Je ___ du pain. (I eat bread)", answer: "mange", hint: "I eat" },
      { sentence: "___ animal préféré est le chat. (My favourite animal is the cat)", answer: "Mon", hint: "My — masculine" },
    ],
    translate: [
      { fr: "Dans ma famille, j'ai une sœur et un frère.", en: "In my family, I have a sister and a brother." },
      { fr: "J'adore les chiens. Ils sont sympa !", en: "I love dogs. They are nice!" },
      { fr: "Je mange des pommes et je bois du lait.", en: "I eat apples and I drink milk." },
    ],
    reading: {
      passage: "Je m'appelle David. J'ai neuf ans. Dans ma famille, j'ai une sœur. Elle a sept ans. J'adore les chiens. Mon chien s'appelle Rex. Il est noir et blanc. Je mange des pommes tous les jours.",
      translation: "My name is David. I am 9. In my family I have a sister. She is 7. I love dogs. My dog is called Rex. He is black and white. I eat apples every day.",
      questions: [
        { q: "How old is David?", a: "9", choices: ["7","8","9","10"] },
        { q: "What colour is Rex?", a: "Black and white", choices: ["All black","Brown","Black and white","White"] },
        { q: "What does David eat every day?", a: "Apples", choices: ["Bread","Apples","Milk","Vegetables"] },
      ],
    },
    homework: [
      "Write a paragraph about yourself in French: name, age, family, favourite animal, favourite food 📝",
      "Read your paragraph out loud — try to do it without stopping! 🗣️",
      "Teach your family 3 French sentences you've learned this month 👨‍👩‍👧",
    ],
  },
];

const MONTH_META = {
  April: { label: "🌸 April — Foundation Month", color: "#FF6B35" },
  May:   { label: "🌿 May — Vocabulary Expansion", color: "#4ECDC4" },
  June:  { label: "☀️ June — Building Sentences", color: "#F59E0B" },
  July:  { label: "🎓 July — Elementary Level", color: "#6366F1" },
};

const COLORS = {
  bg: "#FFF8F0", card: "#FFFFFF", primary: "#FF6B35", secondary: "#4ECDC4",
  accent: "#FFE66D", purple: "#A78BFA", text: "#2D2D2D", muted: "#888",
};

const TEACHER_PIN = "1234";

function loadExtra() { try { return JSON.parse(localStorage.getItem("extra_lessons") || "[]"); } catch { return []; } }
function saveExtra(l) { try { localStorage.setItem("extra_lessons", JSON.stringify(l)); } catch {} }
function loadProgress() { try { return JSON.parse(localStorage.getItem("lesson_progress") || "{}"); } catch { return {}; } }
function saveProgress(p) { try { localStorage.setItem("lesson_progress", JSON.stringify(p)); } catch {} }

function Stars({ count }) {
  return <span style={{ fontSize: 18, letterSpacing: 1 }}>{[0,1,2,3,4].map(i => <span key={i} style={{ color: i < count ? "#FFE66D" : "#e5e7eb", textShadow: i < count ? "0 0 8px #FFE66D" : "none" }}>★</span>)}</span>;
}

function Btn({ children, onClick, color = COLORS.primary, disabled, small, outline }) {
  return <button onClick={onClick} disabled={disabled} style={{ padding: small ? "8px 18px" : "11px 26px", borderRadius: 50, border: outline ? `2px solid ${color}` : "none", background: disabled ? "#e5e7eb" : outline ? "#fff" : `linear-gradient(135deg,${color},${color}cc)`, color: disabled ? "#aaa" : outline ? color : "#fff", fontFamily: "Nunito, sans-serif", fontWeight: 800, fontSize: small ? 13 : 15, cursor: disabled ? "default" : "pointer", boxShadow: disabled || outline ? "none" : "0 4px 14px rgba(0,0,0,0.15)", transition: "all 0.15s" }}>{children}</button>;
}

function Input({ value, onChange, placeholder, style = {} }) {
  return <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} style={{ padding: "10px 14px", borderRadius: 12, border: "2px solid #e5e7eb", fontFamily: "Nunito, sans-serif", fontSize: 14, outline: "none", width: "100%", boxSizing: "border-box", ...style }} />;
}

// ─── GRAMMAR TIP ──────────────────────────────────────────────────────────────
function GrammarTip({ lesson, onDone }) {
  const tip = lesson.grammarTip;
  if (!tip) { onDone(); return null; }
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      <div style={{ background: "linear-gradient(135deg,#FFF8E1,#FFFDE7)", border: "2px solid #FFD54F", borderRadius: 24, padding: "22px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
          <div style={{ fontSize: 32 }}>💡</div>
          <div>
            <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: 20, color: "#D97706" }}>Grammar Tip</div>
            <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: 16, color: "#92400E" }}>{tip.title}</div>
          </div>
        </div>
        <div style={{ fontFamily: "Nunito, sans-serif", fontSize: 15, color: "#78350F", lineHeight: 1.6, marginBottom: 16 }}>{tip.explanation}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {tip.examples.map((ex, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.7)", borderRadius: 12, padding: "10px 14px", fontFamily: "Nunito, sans-serif", fontSize: 14, color: "#92400E", fontWeight: 700 }}>
              📌 {ex}
            </div>
          ))}
        </div>
      </div>
      <div style={{ fontFamily: "Nunito, sans-serif", fontSize: 13, color: COLORS.muted, textAlign: "center" }}>Read this carefully, David — then move on! 👆</div>
      <Btn onClick={onDone} color="#D97706">Got it! Next →</Btn>
    </div>
  );
}

// ─── FLASHCARD ────────────────────────────────────────────────────────────────
function FlashCard({ word, flipped, onFlip }) {
  return (
    <div onClick={onFlip} style={{ cursor: "pointer", width: "100%", maxWidth: 320, height: 140, perspective: 800, margin: "0 auto" }}>
      <div style={{ position: "relative", width: "100%", height: "100%", transformStyle: "preserve-3d", transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)", transition: "transform 0.45s cubic-bezier(.4,2,.6,1)" }}>
        <div style={{ position: "absolute", inset: 0, backfaceVisibility: "hidden", borderRadius: 20, background: "linear-gradient(135deg,#FF6B35,#FF9A6C)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 32px rgba(255,107,53,0.25)" }}>
          <div style={{ fontSize: 28, fontWeight: 900, color: "#fff", fontFamily: "'Fredoka One', cursive", textAlign: "center", padding: "0 16px" }}>{word.fr}</div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 8, fontFamily: "Nunito, sans-serif" }}>Tap to see the answer 🙈</div>
        </div>
        <div style={{ position: "absolute", inset: 0, backfaceVisibility: "hidden", transform: "rotateY(180deg)", borderRadius: 20, background: "linear-gradient(135deg,#4ECDC4,#45B7AA)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 32px rgba(78,205,196,0.25)" }}>
          <div style={{ fontSize: 24, fontWeight: 900, color: "#fff", fontFamily: "'Fredoka One', cursive", textAlign: "center", padding: "0 16px" }}>{word.en}</div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 8, fontFamily: "Nunito, sans-serif" }}>Tap to go back 🔄</div>
        </div>
      </div>
    </div>
  );
}

function VocabMode({ lesson, onDone }) {
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const vocab = lesson.vocab;
  const next = () => { setFlipped(false); setTimeout(() => { idx < vocab.length - 1 ? setIdx(idx + 1) : onDone(); }, 200); };
  const prev = () => { setFlipped(false); setTimeout(() => { if (idx > 0) setIdx(idx - 1); }, 150); };
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
      <div style={{ fontFamily: "Nunito, sans-serif", color: COLORS.muted, fontSize: 14 }}>Word {idx + 1} of {vocab.length}</div>
      <div style={{ width: "100%", maxWidth: 320 }}>
        <div style={{ background: "#f3f4f6", borderRadius: 50, height: 8, overflow: "hidden" }}>
          <div style={{ background: "linear-gradient(90deg,#FF6B35,#FF9A6C)", height: "100%", borderRadius: 50, width: `${((idx+1)/vocab.length)*100}%`, transition: "width 0.4s" }} />
        </div>
      </div>
      <FlashCard word={vocab[idx]} flipped={flipped} onFlip={() => setFlipped(!flipped)} />
      <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
        <Btn onClick={prev} disabled={idx === 0} outline color={COLORS.primary}>← Back</Btn>
        <Btn onClick={next}>{idx < vocab.length - 1 ? "Next →" : "Next exercise! 🎯"}</Btn>
      </div>
    </div>
  );
}

// ─── QUIZ ─────────────────────────────────────────────────────────────────────
function QuizMode({ lesson, onDone, onScore }) {
  const [qi, setQi] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const quiz = lesson.quiz;
  const q = quiz[qi];
  const choose = (c) => {
    if (selected) return;
    setSelected(c);
    const correct = c === q.a;
    const ns = score + (correct ? 1 : 0);
    if (correct) setScore(ns);
    setTimeout(() => {
      if (qi < quiz.length - 1) { setQi(qi + 1); setSelected(null); }
      else { setFinalScore(ns); setDone(true); onScore(ns, quiz.length); }
    }, 900);
  };
  if (done) {
    const stars = Math.round((finalScore / quiz.length) * 5);
    const msg = finalScore === quiz.length ? "Parfait, David! 🎉" : finalScore >= quiz.length * 0.7 ? "Bien joué, David! 😊" : "Keep going, David! 💪";
    return (
      <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 16, padding: "20px 0" }}>
        <div style={{ fontSize: 64 }}>{finalScore === quiz.length ? "🎉" : finalScore >= quiz.length * 0.7 ? "😊" : "💪"}</div>
        <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: 26, color: COLORS.primary }}>{msg}</div>
        <div style={{ fontFamily: "Nunito, sans-serif", fontSize: 16 }}>You got <b>{finalScore}</b> out of <b>{quiz.length}</b>!</div>
        <Stars count={stars} />
        <Btn onClick={onDone} color={COLORS.secondary}>Next exercise →</Btn>
      </div>
    );
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
      <div style={{ fontFamily: "Nunito, sans-serif", color: COLORS.muted, fontSize: 14 }}>Question {qi+1} of {quiz.length}</div>
      <div style={{ width: "100%", maxWidth: 340 }}>
        <div style={{ background: "#f3f4f6", borderRadius: 50, height: 8, overflow: "hidden" }}>
          <div style={{ background: "linear-gradient(90deg,#A78BFA,#7C3AED)", height: "100%", borderRadius: 50, width: `${((qi+1)/quiz.length)*100}%`, transition: "width 0.4s" }} />
        </div>
      </div>
      <div style={{ background: "linear-gradient(135deg,#A78BFA22,#7C3AED11)", border: "2px solid #A78BFA44", borderRadius: 20, padding: "18px 20px", width: "100%", maxWidth: 340, fontFamily: "'Fredoka One', cursive", fontSize: 18, color: COLORS.text, textAlign: "center" }}>{q.q}</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, width: "100%", maxWidth: 340 }}>
        {q.choices.map(c => {
          let bg = "#f9fafb", border = "2px solid #e5e7eb", color = COLORS.text;
          if (selected) { if (c === q.a) { bg="#dcfce7"; border="2px solid #22c55e"; color="#15803d"; } else if (c === selected) { bg="#fee2e2"; border="2px solid #ef4444"; color="#b91c1c"; } }
          return <button key={c} onClick={() => choose(c)} style={{ padding: "13px 8px", borderRadius: 16, border, background: bg, color, fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: 13, cursor: selected ? "default" : "pointer", transition: "all 0.2s" }}>{c}</button>;
        })}
      </div>
    </div>
  );
}

// ─── MATCHING ─────────────────────────────────────────────────────────────────
function MatchMode({ lesson, onDone }) {
  const pairs = lesson.vocab.slice(0, 6);
  const [lefts] = useState(() => [...pairs].sort(() => Math.random() - 0.5));
  const [rights] = useState(() => [...pairs].sort(() => Math.random() - 0.5));
  const [selLeft, setSelLeft] = useState(null);
  const [matched, setMatched] = useState([]);
  const [wrong, setWrong] = useState(false);
  const [done, setDone] = useState(false);
  const pickRight = (item) => {
    if (!selLeft || matched.includes(item.fr)) return;
    if (selLeft.fr === item.fr) {
      const nm = [...matched, item.fr];
      setMatched(nm); setSelLeft(null);
      if (nm.length === pairs.length) setTimeout(() => setDone(true), 600);
    } else { setWrong(true); setTimeout(() => { setSelLeft(null); setWrong(false); }, 800); }
  };
  if (done) return (
    <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 16, padding: "20px 0" }}>
      <div style={{ fontSize: 64 }}>🎯</div>
      <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: 26, color: "#4ECDC4" }}>All matched, David!</div>
      <Btn onClick={onDone} color="#4ECDC4">Next exercise →</Btn>
    </div>
  );
  const cs = (active, isMatched, isWrong) => ({ padding: "12px 10px", borderRadius: 14, fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: 13, textAlign: "center", cursor: isMatched ? "default" : "pointer", transition: "all 0.2s", border: isMatched ? "2px solid #86efac" : isWrong ? "2px solid #ef4444" : active ? "2px solid #FF6B35" : "2px solid #e5e7eb", background: isMatched ? "#dcfce7" : isWrong ? "#fee2e2" : active ? "#FFF0EB" : "#f9fafb", color: isMatched ? "#15803d" : isWrong ? "#b91c1c" : active ? COLORS.primary : COLORS.text, opacity: isMatched ? 0.6 : 1 });
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ fontFamily: "Nunito, sans-serif", color: COLORS.muted, fontSize: 14, textAlign: "center" }}>Match the French to the English! ({matched.length}/{pairs.length} done)</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: 13, color: COLORS.primary, textAlign: "center", marginBottom: 2 }}>🇫🇷 French</div>
          {lefts.map(item => { const isMatched = matched.includes(item.fr); const isActive = selLeft?.fr === item.fr; return <div key={item.fr} onClick={() => !isMatched && setSelLeft(item)} style={cs(isActive, isMatched, wrong && isActive)}>{item.fr}</div>; })}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: 13, color: "#4ECDC4", textAlign: "center", marginBottom: 2 }}>🇬🇧 English</div>
          {rights.map(item => { const isMatched = matched.includes(item.fr); const isActive = selLeft && selLeft.fr !== item.fr && wrong; return <div key={item.fr} onClick={() => pickRight(item)} style={cs(false, isMatched, isActive)}>{item.en}</div>; })}
        </div>
      </div>
      {!selLeft && <div style={{ fontFamily: "Nunito, sans-serif", fontSize: 13, color: COLORS.muted, textAlign: "center" }}>👈 Tap a French word first</div>}
      {selLeft && <div style={{ fontFamily: "Nunito, sans-serif", fontSize: 13, color: COLORS.primary, textAlign: "center" }}>Now tap the English for <b>{selLeft.fr}</b> →</div>}
    </div>
  );
}

// ─── FILL IN THE BLANK ────────────────────────────────────────────────────────
function FillBlankMode({ lesson, onDone }) {
  const blanks = lesson.fillBlanks;
  const [qi, setQi] = useState(0);
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const check = () => {
    const correct = input.trim().toLowerCase() === blanks[qi].answer.toLowerCase();
    setResult(correct ? "correct" : "wrong");
    if (correct) setScore(s => s + 1);
    setTimeout(() => {
      if (qi < blanks.length - 1) { setQi(qi + 1); setInput(""); setResult(null); }
      else setDone(true);
    }, 1200);
  };
  if (done) return (
    <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 16, padding: "20px 0" }}>
      <div style={{ fontSize: 56 }}>{score === blanks.length ? "🌟" : "👍"}</div>
      <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: 24, color: "#F59E0B" }}>{score === blanks.length ? "Perfect, David!" : `${score}/${blanks.length} — well done!`}</div>
      <Btn onClick={onDone} color="#F59E0B">Next exercise →</Btn>
    </div>
  );
  const b = blanks[qi];
  const parts = b.sentence.split("___");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ fontFamily: "Nunito, sans-serif", color: COLORS.muted, fontSize: 14, textAlign: "center" }}>Fill in the blank — {qi+1} of {blanks.length}</div>
      <div style={{ background: "linear-gradient(135deg,#FFF8E1,#FFF3CD)", border: "2px solid #FFE066", borderRadius: 20, padding: "22px 20px", fontFamily: "'Fredoka One', cursive", fontSize: 20, color: COLORS.text, textAlign: "center", lineHeight: 1.8 }}>
        {parts[0]}<span style={{ borderBottom: "3px solid #FF6B35", minWidth: 80, display: "inline-block", color: result === "correct" ? "#15803d" : result === "wrong" ? "#ef4444" : COLORS.primary }}>{input || " "}</span>{parts[1]}
      </div>
      <div style={{ fontFamily: "Nunito, sans-serif", fontSize: 13, color: COLORS.muted, textAlign: "center" }}>💡 Hint: {b.hint}</div>
      <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && input.trim() && !result && check()} placeholder="Type your answer..." style={{ padding: "12px 16px", borderRadius: 14, border: `2px solid ${result === "correct" ? "#22c55e" : result === "wrong" ? "#ef4444" : "#e5e7eb"}`, fontFamily: "Nunito, sans-serif", fontSize: 16, outline: "none", textAlign: "center", background: result === "correct" ? "#dcfce7" : result === "wrong" ? "#fee2e2" : "#fff" }} disabled={!!result} autoFocus />
      {result === "wrong" && <div style={{ color: "#ef4444", fontFamily: "Nunito, sans-serif", fontSize: 14, textAlign: "center" }}>Not quite — the answer is <b>{b.answer}</b></div>}
      {!result && <Btn onClick={check} disabled={!input.trim()}>Check ✓</Btn>}
    </div>
  );
}

// ─── TRANSLATE ────────────────────────────────────────────────────────────────
function TranslateMode({ lesson, onDone }) {
  const sentences = lesson.translate;
  const [qi, setQi] = useState(0);
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const normalize = s => s.toLowerCase().replace(/[.!?]/g, "").trim();
  const check = () => {
    const correct = normalize(input) === normalize(sentences[qi].en);
    setResult(correct ? "correct" : "wrong");
    if (correct) setScore(s => s + 1);
    setTimeout(() => {
      if (qi < sentences.length - 1) { setQi(qi + 1); setInput(""); setResult(null); }
      else setDone(true);
    }, 1500);
  };
  if (done) return (
    <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 16, padding: "20px 0" }}>
      <div style={{ fontSize: 56 }}>{score === sentences.length ? "🏆" : "💪"}</div>
      <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: 24, color: "#6366F1" }}>{score === sentences.length ? "Brilliant, David!" : `${score}/${sentences.length} — keep practising!`}</div>
      <Btn onClick={onDone} color="#6366F1">Next exercise →</Btn>
    </div>
  );
  const s = sentences[qi];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ fontFamily: "Nunito, sans-serif", color: COLORS.muted, fontSize: 14, textAlign: "center" }}>Translate into English — {qi+1} of {sentences.length}</div>
      <div style={{ background: "linear-gradient(135deg,#EEF2FF,#E0E7FF)", border: "2px solid #A5B4FC", borderRadius: 20, padding: "22px 20px", fontFamily: "'Fredoka One', cursive", fontSize: 22, color: "#4338CA", textAlign: "center" }}>🇫🇷 {s.fr}</div>
      <textarea value={input} onChange={e => setInput(e.target.value)} placeholder="Type the English translation..." rows={3} style={{ padding: "12px 16px", borderRadius: 14, border: `2px solid ${result === "correct" ? "#22c55e" : result === "wrong" ? "#ef4444" : "#e5e7eb"}`, fontFamily: "Nunito, sans-serif", fontSize: 15, outline: "none", resize: "none", background: result === "correct" ? "#dcfce7" : result === "wrong" ? "#fee2e2" : "#fff" }} disabled={!!result} />
      {result === "wrong" && <div style={{ color: "#6366F1", fontFamily: "Nunito, sans-serif", fontSize: 14, textAlign: "center", background: "#EEF2FF", borderRadius: 12, padding: "10px 14px" }}>✅ Answer: <b>{s.en}</b></div>}
      {!result && <Btn onClick={check} disabled={!input.trim()} color="#6366F1">Check translation ✓</Btn>}
    </div>
  );
}

// ─── READING COMPREHENSION ────────────────────────────────────────────────────
function ReadingMode({ lesson, onDone }) {
  const reading = lesson.reading;
  const [phase, setPhase] = useState("read"); // read | questions | done
  const [qi, setQi] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);

  const choose = (c) => {
    if (selected) return;
    setSelected(c);
    if (c === reading.questions[qi].a) setScore(s => s + 1);
    setTimeout(() => {
      if (qi < reading.questions.length - 1) { setQi(qi + 1); setSelected(null); }
      else setPhase("done");
    }, 900);
  };

  if (!reading) { onDone(); return null; }

  if (phase === "read") return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      <div style={{ fontFamily: "Nunito, sans-serif", color: COLORS.muted, fontSize: 14, textAlign: "center" }}>📖 Read this carefully, David!</div>
      <div style={{ background: "linear-gradient(135deg,#F0FDF4,#DCFCE7)", border: "2px solid #86EFAC", borderRadius: 20, padding: "22px 20px" }}>
        <div style={{ fontFamily: "Nunito, sans-serif", fontSize: 17, color: "#15803D", lineHeight: 1.8, fontWeight: 700 }}>{reading.passage}</div>
      </div>
      <button onClick={() => setShowTranslation(!showTranslation)} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "Nunito, sans-serif", fontSize: 13, color: COLORS.muted, textDecoration: "underline", textAlign: "center" }}>
        {showTranslation ? "Hide translation 🙈" : "Show translation 👀"}
      </button>
      {showTranslation && (
        <div style={{ background: "#f9fafb", borderRadius: 14, padding: "14px 16px", fontFamily: "Nunito, sans-serif", fontSize: 14, color: COLORS.muted, fontStyle: "italic" }}>
          {reading.translation}
        </div>
      )}
      <Btn onClick={() => setPhase("questions")} color="#22c55e">Answer questions →</Btn>
    </div>
  );

  if (phase === "questions") {
    const q = reading.questions[qi];
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ fontFamily: "Nunito, sans-serif", color: COLORS.muted, fontSize: 14, textAlign: "center" }}>Reading question {qi+1} of {reading.questions.length}</div>
        <div style={{ background: "linear-gradient(135deg,#F0FDF4,#DCFCE7)", border: "2px solid #86EFAC", borderRadius: 16, padding: "14px 16px", fontFamily: "Nunito, sans-serif", fontSize: 13, color: "#15803D", lineHeight: 1.6 }}>{reading.passage}</div>
        <div style={{ background: "#fff", border: "2px solid #86EFAC", borderRadius: 20, padding: "16px 18px", fontFamily: "'Fredoka One', cursive", fontSize: 18, color: COLORS.text, textAlign: "center" }}>{q.q}</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {q.choices.map(c => {
            let bg = "#f9fafb", border = "2px solid #e5e7eb", color = COLORS.text;
            if (selected) { if (c === q.a) { bg="#dcfce7"; border="2px solid #22c55e"; color="#15803d"; } else if (c === selected) { bg="#fee2e2"; border="2px solid #ef4444"; color="#b91c1c"; } }
            return <button key={c} onClick={() => choose(c)} style={{ padding: "13px 8px", borderRadius: 16, border, background: bg, color, fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: 13, cursor: selected ? "default" : "pointer", transition: "all 0.2s" }}>{c}</button>;
          })}
        </div>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 16, padding: "20px 0" }}>
      <div style={{ fontSize: 56 }}>{score === reading.questions.length ? "📚" : "📖"}</div>
      <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: 24, color: "#22c55e" }}>
        {score === reading.questions.length ? "Perfect reading, David!" : `${score}/${reading.questions.length} — great effort!`}
      </div>
      <Btn onClick={onDone} color="#22c55e">See homework 📋</Btn>
    </div>
  );
}

// ─── HOMEWORK ─────────────────────────────────────────────────────────────────
function HomeworkMode({ lesson, onDone }) {
  const [ticked, setTicked] = useState([]);
  const toggle = (i) => setTicked(t => t.includes(i) ? t.filter(x => x !== i) : [...t, i]);
  const allDone = ticked.length === lesson.homework.length;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ background: "linear-gradient(135deg,#FFF8E1,#FFFBF0)", border: "2px solid #FFE066", borderRadius: 20, padding: "18px 20px" }}>
        <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: 20, color: "#D97706", marginBottom: 4 }}>📋 David's Homework</div>
        <div style={{ fontFamily: "Nunito, sans-serif", fontSize: 13, color: COLORS.muted }}>Complete these before your next lesson!</div>
      </div>
      {lesson.homework.map((task, i) => (
        <div key={i} onClick={() => toggle(i)} style={{ display: "flex", alignItems: "flex-start", gap: 14, background: ticked.includes(i) ? "#f0fdf4" : COLORS.card, border: `2px solid ${ticked.includes(i) ? "#86efac" : "#e5e7eb"}`, borderRadius: 18, padding: "16px 18px", cursor: "pointer", transition: "all 0.2s" }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, border: `2.5px solid ${ticked.includes(i) ? "#22c55e" : "#d1d5db"}`, background: ticked.includes(i) ? "#22c55e" : "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 16 }}>
            {ticked.includes(i) ? "✓" : ""}
          </div>
          <div style={{ fontFamily: "Nunito, sans-serif", fontSize: 15, color: ticked.includes(i) ? "#15803d" : COLORS.text, fontWeight: 700, textDecoration: ticked.includes(i) ? "line-through" : "none", lineHeight: 1.4 }}>{task}</div>
        </div>
      ))}
      {allDone && <div style={{ background: "linear-gradient(135deg,#dcfce7,#f0fdf4)", border: "2px solid #86efac", borderRadius: 18, padding: "16px 18px", textAlign: "center" }}><div style={{ fontFamily: "'Fredoka One', cursive", fontSize: 20, color: "#15803d" }}>🌟 Amazing work, David! All done!</div></div>}
      <Btn onClick={onDone} color={COLORS.primary}>Back to lessons 🏠</Btn>
    </div>
  );
}

// ─── LESSON CARD ──────────────────────────────────────────────────────────────
function LessonCard({ lesson, progress, onClick }) {
  const isUnlocked = lesson.id === 1 || progress[lesson.id - 1]?.completed;
  const done = progress[lesson.id]?.completed;
  const stars = progress[lesson.id]?.stars || 0;
  return (
    <div onClick={isUnlocked ? onClick : undefined}
      style={{ background: lesson.isReview ? (done ? "linear-gradient(135deg,#fef9c3,#fef08a)" : isUnlocked ? "linear-gradient(135deg,#fefce8,#fef9c3)" : "#f9fafb") : done ? "linear-gradient(135deg,#f0fdf4,#dcfce7)" : isUnlocked ? COLORS.card : "#f9fafb", border: lesson.isReview ? (done ? "2px solid #facc15" : isUnlocked ? "2px solid #fde047" : "2px dashed #d1d5db") : done ? "2px solid #86efac" : isUnlocked ? "2px solid #e5e7eb" : "2px dashed #d1d5db", borderRadius: 20, padding: "16px 18px", cursor: isUnlocked ? "pointer" : "not-allowed", opacity: isUnlocked ? 1 : 0.55, transition: "transform 0.15s, box-shadow 0.15s", boxShadow: isUnlocked ? "0 4px 16px rgba(0,0,0,0.07)" : "none", display: "flex", alignItems: "center", gap: 14 }}
      onMouseEnter={e => { if (isUnlocked) { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)"; }}}
      onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = isUnlocked ? "0 4px 16px rgba(0,0,0,0.07)" : "none"; }}>
      <div style={{ fontSize: 32, width: 44, textAlign: "center" }}>{isUnlocked ? lesson.emoji : "🔒"}</div>
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: 16, color: COLORS.text }}>{lesson.title}</div>
          {lesson.isReview && <span style={{ background: "#facc15", color: "#78350f", fontSize: 10, fontFamily: "Nunito, sans-serif", fontWeight: 800, padding: "2px 8px", borderRadius: 50 }}>REVIEW</span>}
        </div>
        <div style={{ fontFamily: "Nunito, sans-serif", fontSize: 12, color: COLORS.muted, marginTop: 2 }}>{lesson.month} · Week {lesson.week}</div>
        {done && <Stars count={stars} />}
      </div>
      {done && <div style={{ fontSize: 22 }}>✅</div>}
    </div>
  );
}

// ─── AI GENERATOR ─────────────────────────────────────────────────────────────
function AIGenerator({ onGenerated }) {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const SUGGESTIONS = ["Vegetables","Sports","Months","Emotions","Shops in town","Classroom phrases","At the restaurant","Seasons"];
  const generate = async () => {
    if (!prompt.trim()) return;
    setLoading(true); setError("");
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 2500,
          system: "You are a French teacher creating content for a 9-year-old beginner called David. Return ONLY a raw JSON object with this EXACT structure (no markdown, no extra text): {title,emoji,isReview,grammarTip:{title,explanation,examples[]},vocab:[{fr,en}],quiz:[{q,a,choices[4]}],fillBlanks:[{sentence with ___ blank,answer,hint}],translate:[{fr,en}],reading:{passage,translation,questions[{q,a,choices[4]}]},homework:[]}. Rules: 6 vocab, 10 quiz, 3 fillBlanks, 3 translate, reading with 3 questions, 3 homework tasks. choices[0] must be the correct answer.",
          messages: [{ role: "user", content: `Create a French lesson for David (age 9, beginner) about: ${prompt}` }],
        }),
      });
      const data = await res.json();
      const text = data.content.map(b => b.text || "").join("");
      const parsed = JSON.parse(text.replace(/```json|```/g, "").trim());
      onGenerated(parsed);
      setPrompt("");
    } catch { setError("Something went wrong — please try again."); }
    setLoading(false);
  };
  return (
    <div style={{ background: "linear-gradient(135deg,#A78BFA11,#7C3AED08)", border: "2px solid #A78BFA55", borderRadius: 20, padding: "20px 18px" }}>
      <div style={{ fontFamily: "'Fredoka One', cursive", fontSize: 18, color: "#7C3AED", marginBottom: 4 }}>✨ AI Lesson Generator</div>
      <div style={{ fontFamily: "Nunito, sans-serif", fontSize: 13, color: COLORS.muted, marginBottom: 12 }}>Type a topic and Claude instantly builds vocab, grammar tip, quiz, exercises, reading & homework for David.</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 12 }}>
        {SUGGESTIONS.map(s => <button key={s} onClick={() => setPrompt(s)} style={{ padding: "5px 13px", borderRadius: 50, border: `2px solid ${prompt===s?"#7C3AED":"#A78BFA"}`, background: prompt===s?"#7C3AED":"#fff", color: prompt===s?"#fff":"#7C3AED", fontFamily: "Nunito, sans-serif", fontWeight: 700, fontSize: 12, cursor: "pointer" }}>{s}</button>)}
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        <Input value={prompt} onChange={setPrompt} placeholder="Or describe your own topic..." />
        <Btn onClick={generate} disabled={loading || !prompt.trim()} color="#7C3AED">{loading ? "⏳" : "Generate ✨"}</Btn>
      </div>
      {error && <div style={{ color: "#ef4444", fontFamily: "Nunito, sans-serif", fontSize: 13, marginTop: 8 }}>{error}</div>}
    </div>
  );
}

// ─── LESSON EDITOR ────────────────────────────────────────────────────────────
function LessonEditor({ prefill, nextId, onSave, onCancel }) {
  const [title, setTitle] = useState(prefill?.title || "");
  const [emoji, setEmoji] = useState(prefill?.emoji || "📖");
  const [month, setMonth] = useState(prefill?.month || "August");
  const [week, setWeek] = useState(String(prefill?.week || nextId));
  const [isReview, setIsReview] = useState(prefill?.isReview || false);
  const [grammarTitle, setGrammarTitle] = useState(prefill?.grammarTip?.title || "");
  const [grammarExplanation, setGrammarExplanation] = useState(prefill?.grammarTip?.explanation || "");
  const [grammarExamples, setGrammarExamples] = useState(prefill?.grammarTip?.examples || ["","",""]);
  const [vocab, setVocab] = useState(prefill?.vocab?.length ? prefill.vocab : [{fr:"",en:""},{fr:"",en:""},{fr:"",en:""}]);
  const [quiz, setQuiz] = useState(prefill?.quiz?.length ? prefill.quiz : [{q:"",a:"",choices:["","","",""]}]);
  const [fillBlanks, setFillBlanks] = useState(prefill?.fillBlanks?.length ? prefill.fillBlanks : [{sentence:"",answer:"",hint:""}]);
  const [translate, setTranslate] = useState(prefill?.translate?.length ? prefill.translate : [{fr:"",en:""}]);
  const [readPassage, setReadPassage] = useState(prefill?.reading?.passage || "");
  const [readTranslation, setReadTranslation] = useState(prefill?.reading?.translation || "");
  const [readQs, setReadQs] = useState(prefill?.reading?.questions?.length ? prefill.reading.questions : [{q:"",a:"",choices:["","","",""]}]);
  const [homework, setHomework] = useState(prefill?.homework?.length ? prefill.homework : [""]);

  const setVF=(i,f,v)=>{const a=[...vocab];a[i]={...a[i],[f]:v};setVocab(a);};
  const setQF=(i,f,v)=>{const a=[...quiz];a[i]={...a[i],[f]:v};setQuiz(a);};
  const setC=(qi,ci,v)=>{const a=[...quiz];a[qi].choices[ci]=v;setQuiz(a);};
  const setBF=(i,f,v)=>{const a=[...fillBlanks];a[i]={...a[i],[f]:v};setFillBlanks(a);};
  const setTF=(i,f,v)=>{const a=[...translate];a[i]={...a[i],[f]:v};setTranslate(a);};
  const setRQ=(i,f,v)=>{const a=[...readQs];a[i]={...a[i],[f]:v};setReadQs(a);};
  const setRC=(qi,ci,v)=>{const a=[...readQs];a[qi].choices[ci]=v;setReadQs(a);};
  const setHW=(i,v)=>{const a=[...homework];a[i]=v;setHomework(a);};
  const setGE=(i,v)=>{const a=[...grammarExamples];a[i]=v;setGrammarExamples(a);};

  const canSave = title.trim() && vocab.every(v=>v.fr&&v.en) && quiz.every(q=>q.q&&q.a&&q.choices.every(c=>c));
  const sec = {background:"#f9fafb",borderRadius:16,padding:16,marginBottom:14};
  const lbl = t => <div style={{fontFamily:"Nunito, sans-serif",fontWeight:800,fontSize:12,color:COLORS.muted,marginBottom:8,textTransform:"uppercase",letterSpacing:0.5}}>{t}</div>;

  const buildLesson = () => ({
    id: nextId, title, emoji, month, week: Number(week), isReview,
    grammarTip: grammarTitle ? { title: grammarTitle, explanation: grammarExplanation, examples: grammarExamples.filter(e=>e) } : null,
    vocab, quiz, fillBlanks, translate,
    reading: readPassage ? { passage: readPassage, translation: readTranslation, questions: readQs } : null,
    homework,
  });

  return (
    <div>
      <div style={sec}>
        {lbl("Lesson info")}
        <div style={{display:"flex",gap:10,marginBottom:10}}>
          <Input value={emoji} onChange={setEmoji} placeholder="Emoji" style={{width:62,flexShrink:0}} />
          <Input value={title} onChange={setTitle} placeholder="Lesson title" />
        </div>
        <div style={{display:"flex",gap:10,marginBottom:10}}>
          <select value={month} onChange={e=>setMonth(e.target.value)} style={{flex:1,padding:"10px 14px",borderRadius:12,border:"2px solid #e5e7eb",fontFamily:"Nunito, sans-serif",fontSize:14,background:"#fff"}}>
            {["April","May","June","July","August","September","October","November","December"].map(m=><option key={m}>{m}</option>)}
          </select>
          <Input value={week} onChange={setWeek} placeholder="Week #" style={{width:90,flexShrink:0}} />
        </div>
        <label style={{display:"flex",alignItems:"center",gap:8,fontFamily:"Nunito, sans-serif",fontWeight:700,fontSize:14,cursor:"pointer"}}>
          <input type="checkbox" checked={isReview} onChange={e=>setIsReview(e.target.checked)} />
          Mark as a Review lesson ⭐
        </label>
      </div>
      <div style={sec}>
        {lbl("💡 Grammar Tip")}
        <Input value={grammarTitle} onChange={setGrammarTitle} placeholder="Tip title e.g. Mon / Ma / Mes" style={{marginBottom:8}} />
        <textarea value={grammarExplanation} onChange={e=>setGrammarExplanation(e.target.value)} placeholder="Explanation..." rows={3} style={{width:"100%",boxSizing:"border-box",padding:"10px 14px",borderRadius:12,border:"2px solid #e5e7eb",fontFamily:"Nunito, sans-serif",fontSize:14,outline:"none",resize:"none",marginBottom:8}} />
        {grammarExamples.map((ex,i)=><Input key={i} value={ex} onChange={val=>setGE(i,val)} placeholder={`Example ${i+1}`} style={{marginBottom:6}} />)}
      </div>
      <div style={sec}>
        {lbl("Vocabulary")}
        {vocab.map((v,i)=>(
          <div key={i} style={{display:"flex",gap:8,marginBottom:8,alignItems:"center"}}>
            <Input value={v.fr} onChange={val=>setVF(i,"fr",val)} placeholder="French" />
            <span style={{color:COLORS.muted,flexShrink:0,fontWeight:700}}>→</span>
            <Input value={v.en} onChange={val=>setVF(i,"en",val)} placeholder="English" />
            {vocab.length>2 && <button onClick={()=>setVocab(vocab.filter((_,j)=>j!==i))} style={{background:"none",border:"none",cursor:"pointer",color:"#ef4444",fontSize:20,flexShrink:0}}>×</button>}
          </div>
        ))}
        <Btn small outline color={COLORS.primary} onClick={()=>setVocab([...vocab,{fr:"",en:""}])}>+ Add word</Btn>
      </div>
      <div style={sec}>
        {lbl("Quiz questions (aim for 10)")}
        {quiz.map((q,qi)=>(
          <div key={qi} style={{background:"#fff",borderRadius:14,padding:14,marginBottom:12,border:"2px solid #e5e7eb"}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:10}}>
              <span style={{fontFamily:"Nunito, sans-serif",fontWeight:800,fontSize:13,color:COLORS.muted}}>Q{qi+1}</span>
              {quiz.length>1 && <button onClick={()=>setQuiz(quiz.filter((_,j)=>j!==qi))} style={{background:"none",border:"none",cursor:"pointer",color:"#ef4444",fontSize:13,fontFamily:"Nunito, sans-serif",fontWeight:700}}>Remove</button>}
            </div>
            <Input value={q.q} onChange={val=>setQF(qi,"q",val)} placeholder="Question" style={{marginBottom:8}} />
            <Input value={q.a} onChange={val=>setQF(qi,"a",val)} placeholder="✅ Correct answer" style={{marginBottom:8,borderColor:"#86efac"}} />
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
              {q.choices.map((c,ci)=><Input key={ci} value={c} onChange={val=>setC(qi,ci,val)} placeholder={ci===0?"Choice 1 = correct ✅":`Wrong ${ci}`} style={ci===0?{borderColor:"#86efac"}:{}} />)}
            </div>
          </div>
        ))}
        <Btn small outline color="#A78BFA" onClick={()=>setQuiz([...quiz,{q:"",a:"",choices:["","","",""]}])}>+ Add question</Btn>
      </div>
      <div style={sec}>
        {lbl("Fill in the blank")}
        {fillBlanks.map((b,i)=>(
          <div key={i} style={{background:"#fff",borderRadius:14,padding:12,marginBottom:10,border:"2px solid #e5e7eb"}}>
            <Input value={b.sentence} onChange={val=>setBF(i,"sentence",val)} placeholder="Sentence with ___ for blank" style={{marginBottom:8}} />
            <div style={{display:"flex",gap:8}}>
              <Input value={b.answer} onChange={val=>setBF(i,"answer",val)} placeholder="Answer" />
              <Input value={b.hint} onChange={val=>setBF(i,"hint",val)} placeholder="Hint" />
            </div>
          </div>
        ))}
        <Btn small outline color="#F59E0B" onClick={()=>setFillBlanks([...fillBlanks,{sentence:"",answer:"",hint:""}])}>+ Add blank</Btn>
      </div>
      <div style={sec}>
        {lbl("Translate sentences")}
        {translate.map((t,i)=>(
          <div key={i} style={{display:"flex",gap:8,marginBottom:8}}>
            <Input value={t.fr} onChange={val=>setTF(i,"fr",val)} placeholder="French" />
            <span style={{color:COLORS.muted,flexShrink:0,fontWeight:700,alignSelf:"center"}}>→</span>
            <Input value={t.en} onChange={val=>setTF(i,"en",val)} placeholder="English" />
          </div>
        ))}
        <Btn small outline color="#6366F1" onClick={()=>setTranslate([...translate,{fr:"",en:""}])}>+ Add sentence</Btn>
      </div>
      <div style={sec}>
        {lbl("📖 Reading passage")}
        <textarea value={readPassage} onChange={e=>setReadPassage(e.target.value)} placeholder="Short French passage (3-4 sentences)..." rows={3} style={{width:"100%",boxSizing:"border-box",padding:"10px 14px",borderRadius:12,border:"2px solid #e5e7eb",fontFamily:"Nunito, sans-serif",fontSize:14,outline:"none",resize:"none",marginBottom:8}} />
        <textarea value={readTranslation} onChange={e=>setReadTranslation(e.target.value)} placeholder="English translation..." rows={2} style={{width:"100%",boxSizing:"border-box",padding:"10px 14px",borderRadius:12,border:"2px solid #e5e7eb",fontFamily:"Nunito, sans-serif",fontSize:14,outline:"none",resize:"none",marginBottom:8}} />
        {readQs.map((q,qi)=>(
          <div key={qi} style={{background:"#fff",borderRadius:12,padding:12,marginBottom:8,border:"2px solid #e5e7eb"}}>
            <Input value={q.q} onChange={val=>setRQ(qi,"q",val)} placeholder={`Reading question ${qi+1}`} style={{marginBottom:8}} />
            <Input value={q.a} onChange={val=>setRQ(qi,"a",val)} placeholder="✅ Correct answer" style={{marginBottom:8,borderColor:"#86efac"}} />
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
              {q.choices.map((c,ci)=><Input key={ci} value={c} onChange={val=>setRC(qi,ci,val)} placeholder={ci===0?"Correct":"Wrong"} style={ci===0?{borderColor:"#86efac"}:{}} />)}
            </div>
          </div>
        ))}
        <Btn small outline color="#22c55e" onClick={()=>setReadQs([...readQs,{q:"",a:"",choices:["","","",""]}])}>+ Add question</Btn>
      </div>
      <div style={sec}>
        {lbl("Homework tasks for David")}
        {homework.map((h,i)=>(
          <div key={i} style={{display:"flex",gap:8,marginBottom:8}}>
            <Input value={h} onChange={val=>setHW(i,val)} placeholder={`Homework task ${i+1}`} />
            {homework.length>1 && <button onClick={()=>setHomework(homework.filter((_,j)=>j!==i))} style={{background:"none",border:"none",cursor:"pointer",color:"#ef4444",fontSize:20,flexShrink:0}}>×</button>}
          </div>
        ))}
        <Btn small outline color="#D97706" onClick={()=>setHomework([...homework,""])}>+ Add task</Btn>
      </div>
      <div style={{display:"flex",gap:10,justifyContent:"flex-end"}}>
        <Btn outline color={COLORS.muted} onClick={onCancel}>Cancel</Btn>
        <Btn onClick={()=>onSave(buildLesson())} disabled={!canSave}>💾 Save Lesson</Btn>
      </div>
    </div>
  );
}

// ─── TEACHER DASHBOARD ────────────────────────────────────────────────────────
function TeacherDashboard({ extraLessons, setExtraLessons, allLessons }) {
  const [view, setView] = useState("list");
  const [editing, setEditing] = useState(null);
  const [generated, setGenerated] = useState(null);
  const nextId = allLessons.length + 1;
  const save = (lesson) => { const u=editing?extraLessons.map(l=>l.id===editing.id?lesson:l):[...extraLessons,lesson]; setExtraLessons(u); saveExtra(u); setView("list"); setEditing(null); setGenerated(null); };
  const del = (id) => { if(!window.confirm("Delete this lesson?"))return; const u=extraLessons.filter(l=>l.id!==id); setExtraLessons(u); saveExtra(u); };
  return (
    <div style={{display:"flex",flexDirection:"column",gap:16}}>
      <div style={{background:"linear-gradient(135deg,#7C3AED,#A78BFA)",borderRadius:24,padding:"18px 22px"}}>
        <div style={{fontFamily:"'Fredoka One', cursive",fontSize:22,color:"#fff"}}>🧑‍🏫 Teacher Dashboard</div>
        <div style={{fontFamily:"Nunito, sans-serif",fontSize:13,color:"rgba(255,255,255,0.8)",marginTop:4}}>Create and manage lessons for David — no code needed</div>
      </div>
      {view==="list" && (<>
        <div style={{display:"flex",gap:10}}><Btn color="#7C3AED" onClick={()=>{setGenerated(null);setView("create");}}>➕ Create manually</Btn></div>
        <AIGenerator onGenerated={(d)=>{setGenerated(d);setView("create");}} />
        <div style={{fontFamily:"'Fredoka One', cursive",fontSize:16,color:COLORS.text,marginTop:4}}>Custom lessons ({extraLessons.length})</div>
        {extraLessons.length===0
          ? <div style={{textAlign:"center",padding:"24px 0",fontFamily:"Nunito, sans-serif",color:COLORS.muted,fontSize:14}}>No custom lessons yet — use the AI generator or create one manually!</div>
          : extraLessons.map((l,i)=>(
            <div key={l.id} style={{background:COLORS.card,borderRadius:20,padding:"14px 18px",display:"flex",alignItems:"center",gap:12,border:"2px solid #e5e7eb",boxShadow:"0 2px 8px rgba(0,0,0,0.05)"}}>
              <div style={{fontSize:28}}>{l.emoji}</div>
              <div style={{flex:1}}>
                <div style={{fontFamily:"'Fredoka One', cursive",fontSize:16,color:COLORS.text}}>Lesson {BUILT_IN_LESSONS.length+i+1}: {l.title}</div>
                <div style={{fontFamily:"Nunito, sans-serif",fontSize:12,color:COLORS.muted}}>{l.month} · {l.vocab?.length||0} words · {l.quiz?.length||0} questions {l.grammarTip?"· 💡 grammar":""} {l.reading?"· 📖 reading":""}</div>
              </div>
              <div style={{display:"flex",gap:8}}>
                <Btn small outline color="#7C3AED" onClick={()=>{setEditing(l);setView("edit");}}>Edit</Btn>
                <Btn small outline color="#ef4444" onClick={()=>del(l.id)}>Delete</Btn>
              </div>
            </div>
          ))
        }
      </>)}
      {(view==="create"||view==="edit") && (<>
        <div style={{fontFamily:"'Fredoka One', cursive",fontSize:20,color:COLORS.text}}>{view==="edit"?"✏️ Edit Lesson":"➕ New Lesson"}</div>
        {view==="create" && generated && <div style={{background:"#f0fdf4",border:"2px solid #86efac",borderRadius:14,padding:"12px 16px",fontFamily:"Nunito, sans-serif",fontSize:13,color:"#15803d"}}>✨ AI generated this for David — review and edit, then save!</div>}
        <LessonEditor prefill={view==="edit"?editing:generated} nextId={nextId} onSave={save} onCancel={()=>{setView("list");setEditing(null);setGenerated(null);}} />
      </>)}
    </div>
  );
}

// ─── PIN GATE ─────────────────────────────────────────────────────────────────
function PinGate({ onSuccess, onCancel }) {
  const [pin, setPin] = useState(""); const [error, setError] = useState(false);
  const submit = () => { if(pin===TEACHER_PIN){onSuccess();}else{setError(true);setPin("");setTimeout(()=>setError(false),1200);} };
  return (
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100,padding:24}}>
      <div style={{background:"#fff",borderRadius:28,padding:"32px 28px",width:"100%",maxWidth:300,textAlign:"center",boxShadow:"0 24px 60px rgba(0,0,0,0.2)"}}>
        <div style={{fontSize:48,marginBottom:8}}>🔐</div>
        <div style={{fontFamily:"'Fredoka One', cursive",fontSize:22,color:"#7C3AED",marginBottom:6}}>Teacher Area</div>
        <div style={{fontFamily:"Nunito, sans-serif",fontSize:14,color:COLORS.muted,marginBottom:22}}>Enter your PIN to continue</div>
        <input type="password" inputMode="numeric" maxLength={6} value={pin} onChange={e=>setPin(e.target.value)} onKeyDown={e=>e.key==="Enter"&&submit()} placeholder="••••"
          style={{width:"100%",boxSizing:"border-box",padding:"14px",textAlign:"center",fontSize:28,letterSpacing:10,borderRadius:14,border:`2px solid ${error?"#ef4444":"#e5e7eb"}`,fontFamily:"Nunito, sans-serif",outline:"none",marginBottom:8,background:error?"#fff1f1":"#fff"}} autoFocus />
        {error && <div style={{color:"#ef4444",fontFamily:"Nunito, sans-serif",fontSize:13,marginBottom:8}}>Incorrect PIN — try again</div>}
        <div style={{display:"flex",gap:10,marginTop:12}}>
          <Btn outline color={COLORS.muted} onClick={onCancel}>Cancel</Btn>
          <Btn onClick={submit} color="#7C3AED" disabled={!pin}>Unlock 🔓</Btn>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
const EXERCISE_MODES = ["grammar","vocab","quiz","match","fill","translate","reading","homework"];
const MODE_LABELS = { grammar:"💡 Grammar", vocab:"📚 Flashcards", quiz:"🎯 Quiz", match:"🔗 Match", fill:"✏️ Fill Blank", translate:"🌍 Translate", reading:"📖 Reading", homework:"📋 Homework" };
const MODE_COLORS = { grammar:"#D97706,#F59E0B", vocab:"#FF6B35,#FF9A6C", quiz:"#A78BFA,#7C3AED", match:"#4ECDC4,#45B7AA", fill:"#F59E0B,#D97706", translate:"#6366F1,#4338CA", reading:"#22c55e,#16a34a", homework:"#FF6B35,#E85D20" };

export default function FrenchApp() {
  const [screen, setScreen] = useState("home");
  const [tab, setTab] = useState("student");
  const [showPin, setShowPin] = useState(false);
  const [teacherUnlocked, setTeacherUnlocked] = useState(false);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [mode, setMode] = useState("grammar");
  const [progress, setProgress] = useState(loadProgress);
  const [extraLessons, setExtraLessons] = useState(loadExtra);

  const allLessons = [...BUILT_IN_LESSONS, ...extraLessons.map((l,i)=>({...l,id:BUILT_IN_LESSONS.length+i+1,fillBlanks:l.fillBlanks||[],translate:l.translate||[],homework:l.homework||[],reading:l.reading||null,grammarTip:l.grammarTip||null}))];
  const months = [...new Set(allLessons.map(l=>l.month))];
  const totalStars = Object.values(progress).reduce((a,b)=>a+(b.stars||0),0);
  const completed = Object.values(progress).filter(p=>p.completed).length;

  const updateProgress = (id, stars) => {
    const updated = {...progress,[id]:{completed:true,stars:Math.max(stars,progress[id]?.stars||0)}};
    setProgress(updated); saveProgress(updated);
  };

  const isTeacher = tab==="teacher";
  const openLesson = (lesson) => { setCurrentLesson(lesson); setMode(lesson.grammarTip?"grammar":"vocab"); setScreen("lesson"); };

  const availableModes = currentLesson ? EXERCISE_MODES.filter(m => {
    if (m==="grammar") return !!currentLesson.grammarTip;
    if (m==="fill") return currentLesson.fillBlanks?.length>0;
    if (m==="translate") return currentLesson.translate?.length>0;
    if (m==="reading") return !!currentLesson.reading;
    if (m==="homework") return currentLesson.homework?.length>0;
    return true;
  }) : [];

  const nextMode = (current) => {
    const idx = availableModes.indexOf(current);
    return idx < availableModes.length - 1 ? availableModes[idx+1] : null;
  };
  const advance = (current) => { const next = nextMode(current); if(next) setMode(next); else setScreen("home"); };

  return (
    <div style={{minHeight:"100vh",background:COLORS.bg,fontFamily:"Nunito, sans-serif",backgroundImage:"radial-gradient(circle at 20% 20%,#FFE66D22 0%,transparent 50%),radial-gradient(circle at 80% 80%,#4ECDC422 0%,transparent 50%)"}}>
      <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
      {showPin && <PinGate onSuccess={()=>{setTeacherUnlocked(true);setShowPin(false);setTab("teacher");}} onCancel={()=>setShowPin(false)} />}

      {/* Header */}
      <div style={{background:isTeacher?"linear-gradient(135deg,#7C3AED,#A78BFA)":"linear-gradient(135deg,#FF6B35,#FF9A6C)",padding:"16px 20px 0",boxShadow:"0 4px 20px rgba(0,0,0,0.15)",position:"sticky",top:0,zIndex:10,transition:"background 0.3s"}}>
        <div style={{maxWidth:500,margin:"0 auto"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",paddingBottom:14}}>
            <div>
              <div style={{fontFamily:"'Fredoka One', cursive",fontSize:24,color:"#fff",lineHeight:1}}>🇫🇷 Bonjour!</div>
              <div style={{fontSize:11,color:"rgba(255,255,255,0.8)",marginTop:2}}>Bonjour, David! 👦</div>
            </div>
            {!isTeacher && (
              <div style={{display:"flex",gap:16}}>
                <div style={{textAlign:"center"}}><div style={{fontFamily:"'Fredoka One', cursive",fontSize:18,color:"#FFE66D"}}>⭐ {totalStars}</div><div style={{fontSize:10,color:"rgba(255,255,255,0.7)"}}>stars</div></div>
                <div style={{textAlign:"center"}}><div style={{fontFamily:"'Fredoka One', cursive",fontSize:18,color:"#fff"}}>✅ {completed}</div><div style={{fontSize:10,color:"rgba(255,255,255,0.7)"}}>done</div></div>
              </div>
            )}
            {isTeacher && <button onClick={()=>{setTeacherUnlocked(false);setTab("student");}} style={{background:"rgba(255,255,255,0.2)",border:"none",borderRadius:50,padding:"7px 14px",color:"#fff",fontFamily:"Nunito, sans-serif",fontWeight:800,fontSize:13,cursor:"pointer"}}>🔒 Lock</button>}
          </div>
          {screen==="home" && (
            <div style={{display:"flex"}}>
              <button onClick={()=>setTab("student")} style={{flex:1,padding:"10px 0",border:"none",borderRadius:"12px 12px 0 0",background:tab==="student"?"#fff":"transparent",color:tab==="student"?COLORS.primary:"rgba(255,255,255,0.75)",fontFamily:"Nunito, sans-serif",fontWeight:800,fontSize:14,cursor:"pointer",transition:"all 0.2s"}}>👦 David</button>
              <button onClick={()=>teacherUnlocked?setTab("teacher"):setShowPin(true)} style={{flex:1,padding:"10px 0",border:"none",borderRadius:"12px 12px 0 0",background:tab==="teacher"?"#fff":"transparent",color:tab==="teacher"?"#7C3AED":"rgba(255,255,255,0.75)",fontFamily:"Nunito, sans-serif",fontWeight:800,fontSize:14,cursor:"pointer",transition:"all 0.2s"}}>🔐 Teacher</button>
            </div>
          )}
        </div>
      </div>

      <div style={{maxWidth:500,margin:"0 auto",padding:"20px 16px 60px"}}>
        {/* STUDENT HOME */}
        {screen==="home" && tab==="student" && (
          <div style={{display:"flex",flexDirection:"column",gap:12}}>
            <div style={{background:"linear-gradient(135deg,#FF6B35,#FF9A6C)",borderRadius:24,padding:"20px 22px",display:"flex",alignItems:"center",gap:16,boxShadow:"0 8px 24px rgba(255,107,53,0.2)"}}>
              <div style={{fontSize:52,lineHeight:1}}>👦</div>
              <div>
                <div style={{fontFamily:"'Fredoka One', cursive",fontSize:24,color:"#fff",lineHeight:1.1}}>Salut, David!</div>
                <div style={{fontFamily:"Nunito, sans-serif",fontSize:13,color:"rgba(255,255,255,0.85)",marginTop:4}}>
                  {completed===0?"Ready for your first lesson? Let's go! 🚀":completed===allLessons.length?"You've completed everything! Incroyable! 🏆":`Great work — ${allLessons.length-completed} lesson${allLessons.length-completed===1?"":"s"} to go! 💪`}
                </div>
              </div>
            </div>
            <div style={{background:COLORS.card,borderRadius:20,padding:"16px 18px",boxShadow:"0 2px 12px rgba(0,0,0,0.06)"}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
                <span style={{fontFamily:"'Fredoka One', cursive",color:COLORS.text,fontSize:15}}>David's Progress</span>
                <span style={{fontFamily:"Nunito, sans-serif",fontWeight:700,color:COLORS.muted,fontSize:14}}>{completed}/{allLessons.length} lessons</span>
              </div>
              <div style={{background:"#f3f4f6",borderRadius:50,height:12,overflow:"hidden"}}>
                <div style={{background:"linear-gradient(90deg,#FF6B35,#FFE66D)",height:"100%",borderRadius:50,width:`${(completed/allLessons.length)*100}%`,transition:"width 0.6s"}} />
              </div>
              {totalStars>0 && <div style={{fontFamily:"Nunito, sans-serif",fontSize:13,color:COLORS.muted,marginTop:8}}>⭐ {totalStars} stars earned — keep it up!</div>}
            </div>
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

        {/* TEACHER */}
        {screen==="home" && tab==="teacher" && <TeacherDashboard extraLessons={extraLessons} setExtraLessons={setExtraLessons} allLessons={allLessons} />}

        {/* LESSON */}
        {screen==="lesson" && currentLesson && (
          <div>
            <button onClick={()=>setScreen("home")} style={{background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:6,fontFamily:"Nunito, sans-serif",fontWeight:700,color:COLORS.muted,fontSize:15,marginBottom:16,padding:0}}>← Back</button>
            <div style={{background:"linear-gradient(135deg,#FF6B35,#FF9A6C)",borderRadius:24,padding:"20px 22px",marginBottom:18,boxShadow:"0 8px 24px rgba(255,107,53,0.2)"}}>
              <div style={{fontSize:40}}>{currentLesson.emoji}</div>
              <div style={{fontFamily:"'Fredoka One', cursive",fontSize:21,color:"#fff",marginTop:6}}>Lesson {currentLesson.id}: {currentLesson.title}</div>
              <div style={{fontFamily:"Nunito, sans-serif",fontSize:13,color:"rgba(255,255,255,0.8)",marginTop:2}}>{currentLesson.month} · Week {currentLesson.week} · Good luck, David! 🌟</div>
            </div>
            {/* Mode tabs */}
            <div style={{display:"flex",gap:8,marginBottom:20,overflowX:"auto",paddingBottom:4}}>
              {availableModes.map(m=>(
                <button key={m} onClick={()=>setMode(m)} style={{flexShrink:0,padding:"9px 14px",borderRadius:50,border:"none",background:mode===m?`linear-gradient(135deg,${MODE_COLORS[m]})`:"#f3f4f6",color:mode===m?"#fff":COLORS.muted,fontFamily:"Nunito, sans-serif",fontWeight:800,fontSize:12,cursor:"pointer",boxShadow:mode===m?"0 4px 14px rgba(0,0,0,0.15)":"none",transition:"all 0.2s",whiteSpace:"nowrap"}}>
                  {MODE_LABELS[m]}
                </button>
              ))}
            </div>
            {mode==="grammar" && <GrammarTip lesson={currentLesson} onDone={()=>advance("grammar")} />}
            {mode==="vocab" && <VocabMode lesson={currentLesson} onDone={()=>advance("vocab")} />}
            {mode==="quiz" && <QuizMode lesson={currentLesson} onDone={()=>advance("quiz")} onScore={(s,t)=>updateProgress(currentLesson.id,Math.round((s/t)*5))} />}
            {mode==="match" && <MatchMode lesson={currentLesson} onDone={()=>advance("match")} />}
            {mode==="fill" && <FillBlankMode lesson={currentLesson} onDone={()=>advance("fill")} />}
            {mode==="translate" && <TranslateMode lesson={currentLesson} onDone={()=>advance("translate")} />}
            {mode==="reading" && <ReadingMode lesson={currentLesson} onDone={()=>advance("reading")} />}
            {mode==="homework" && <HomeworkMode lesson={currentLesson} onDone={()=>setScreen("home")} />}
          </div>
        )}
      </div>
    </div>
  );
}
