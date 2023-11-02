// Array of quotes
const quotes = [
    "The only way to do great work is to love what you do.- Steve Jobs",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "Change your thoughts and you change your world. - Norman Vincent Peale",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "The biggest risk is not taking any risk. - Mark Zuckerberg",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The only person who is educated is the one who has learned how to learn and change. - Carl Rogers",
    "Every moment is a fresh beginning. - T.S. Eliot",
    "The best revenge is massive success. - Frank Sinatra",
    "In three words, I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "Don't count the days, make the days count. - Muhammad Ali",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "A journey of a thousand miles begins with a single step.- Lao Tzu",
    "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
    "It always seems impossible until it's done. - Nelson Mandela",
    "Believe you can, and you're halfway there. - Theodore Roosevelt",
    "Life is really simple, but we insist on making it complicated. - Confucius",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
    "Life is a journey that must be traveled no matter how bad the roads and accommodations - Oliver Goldsmith",
    "The best revenge is to live on and prove yourself. - Eddie Vedder",
    "You can't use up creativity. The more you use, the more you have. - Maya Angelou",
    "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
    "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "You don't have to be great to start, but you have to start to be great. - Zig Ziglar",
    "The secret of getting ahead is getting started. - Mark Twain",
    "The best preparation for tomorrow is doing your best today. - H. Jackson Brown Jr.",
    "The only thing you can do in this world is follow your dreams and hope they don't lead you off a cliff. - Anne Hathaway",
    "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
    "If you want to achieve greatness stop asking for permission. - Anonymous",
    "The harder you work for something, the greater you'll feel when you achieve it. - Anonymous",
    "Do what you feel in your heart to be right for you'll be criticized anyway. - Eleanor Roosevelt",
    "Success is not in what you have, but who you are. - Bo Bennett",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible. - Joel Brown",
    "The biggest risk is not taking any risk. In a world that's changing quickly, the only strategy that is guaranteed to fail is not taking risks. - Mark Zuckerberg",
    "The only thing that will stop you from fulfilling your dreams is you. - Tom Bradley",
    "Life is short, and it is up to you to make it sweet. - Sarah Louise Delany",
    "It's not about how hard you hit. It's about how hard you can get hit and keep moving. - Rocky Balboa",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "You have to learn the rules of the game. And then you have to play better than anyone else. - Albert Einstein",
    "The more that you read, the more things you will know. The more that you learn, the more places you'll go. - Dr. Seuss",
    "Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein",
    "Our greatest glory is not in never falling, but in rising every time we fall. - Confucius",
    "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Believe you can, and you're halfway there. - Theodore Roosevelt",
    "The only thing you can do in this world is follow your dreams and hope they don't lead you off a cliff. - Anne Hathaway",
    "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
    "If you want to achieve greatness stop asking for permission. - Anonymous",
    "The harder you work for something, the greater you'll feel when you achieve it. - Anonymous",
    "Do what you feel in your heart to be right – for you'll be criticized anyway. - Eleanor Roosevelt",
    "Success is not in what you have, but who you are. - Bo Bennett",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible. - Joel Brown",
    "The biggest risk is not taking any risk. In a world that's changing quickly, the only strategy that is guaranteed to fail is not taking risks. - Mark Zuckerberg",
    "The only thing that will stop you from fulfilling your dreams is you. - Tom Bradley",
    "Life is short, and it is up to you to make it sweet. - Sarah Louise Delany",
    "It's not about how hard you hit. It's about how hard you can get hit and keep moving. - Rocky Balboa",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "You have to learn the rules of the game. And then you have to play better than anyone else. - Albert Einstein",
    "The more that you read, the more things you will know. The more that you learn, the more places you'll go. - Dr. Seuss",
    "Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein",
    "Our greatest glory is not in never falling, but in rising every time we fall. - Confucius",
    "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Chebolei che-koliwa. (Unity is strength.)",
    "Kapsuser mukeet kongotik. (A problem shared is half solved.)",
    "Chomokwenyuk akongotik. (Unity makes strength.)",
    "Ainai kokai teiga. (The wind does not break a tree.)",
    "Eldoret kochoge kipsindai. (Eldoret is a land of champions.)",
    "Aiboreng ko tokoi yokuri. (Every journey begins with a single step.)",
    "Kokosunyo kwechokwa korokonye. (Unity is strength.)",
    "Tulopin lokitela ke pakapak. (A wise chief has many followers.)",
    "Akasibon iyei, iburonan. (One hand washes the other.)",
    "Emutokomuny rokotkeloi. (An empty basket cannot stand.)",
    "Emonga maromba araeti. (The beginning is always difficult.)",
    "Omokumanyinku atera osirwe. (The wise one eats in silence.)",
    "Ebiruri ebitwariire. (Unity is strength.)",
    "Chemoit itarenda omosasati. (One finger cannot kill a louse.)",
    "Amasambeera amagara. (Good friends are like a shield.)",
    "Ingali munda yuvutsi, isirani kaalya. (Even if the hyena changes its spots, its character remains.)",
    "Etiise erabia, liitsika kelahoyi. (Unity is strength.)",
    "Khuuma ni bukika, si kwambila. (To climb is one thing, to descend is another.)",
    "Isema likhunula chepakabe. (A promise is a debt.)",
    "Khong'oni yalihila, emilimo yalihila. (One's wealth is in their health.)",
    "Mwene nyaga ndakaini. (A bird's nest is not hidden.)",
    "Wendo wa ithetu wakwa ukuri. (The journey of our feet is the truth.)",
    "Mwiriria, mwega. (Patience is a virtue.)",
    "Iregi ndakua irumi. (A sacrifice made together is stronger.)",
    "Ngai mbara ninguire. (God, protect me.)",
    "Chuny e dhi iwinjo chuny e.(Translation: Silence has its own talk.)",
    "Jomu jodwaro, lwanda ni lwanda.(Translation: A dance is a dance, regardless of where it's held.)",
    "Miti gi motieko itik aming'o ni irach.(Translation: The tree that withstands the storm is the one with deep roots.)",
    "Piny kaka e winyo romo kwe.(Translation: A smooth sea never made a skilled sailor.)",
    "Ogor mari ohwaki gilo mar ore.(Translation: The eyes that see are more important than the ones that are seen.)",
  ];
  
  // DOM elements
  const quoteText = document.querySelector('.quote-text');
  const generateBtn = document.querySelector('.generate-btn');
  const saveBtn = document.querySelector('.save-btn');
  const shareBtn = document.querySelector('.share-btn');
  
  // Event listeners
  generateBtn.addEventListener('click', generateQuote);
  saveBtn.addEventListener('click', saveQuote);
  shareBtn.addEventListener('click', shareQuote);
  
  // Generate random quote
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
    
  }
  
  // Save quote
  function saveQuote() {
    const quote = quoteText.textContent;
    // Implement saving functionality here
    // For example, you can save the quote to local storage or send it to a server
    localStorage.setItem('savedQuote',quote);
    alert('Quote Saved!')
    //console.log(`Quote saved: ${quote}`);
  }
  
  // Share quote
  function shareQuote() {
    const quote = quoteText.textContent;
    // Implement sharing functionality here
    const tweetText = encodeURIComponent(quote);
    const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
    window.open(tweetUrl, '_blank');
    //console.log(`Quote shared: ${quote}`);
  }
  
  // Initial quote generation
  generateQuote();

  