const Discord = require("discord.js");
const fs = require('fs')
const talkedRecently = new Set();
const talkedRecently1 = new Set();
const talkedRecently2 = new Set();
const talkedRecently3 = new Set();
const talkedRecently4 = new Set();
const talkedRecently5 = new Set();
const client = new Discord.Client();  
const prefix = "//";
client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  const commandBody = message.content.slice(prefix.length);
  let money = require('./money')  //Get Money DB
  const Id = message.author.id //Get User Id 
  const args = commandBody.split(' ');
  const command = (args.join(' ')).toLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Stop pinging me!!! This message had a latency of ${timeTaken}ms.`);
  }

  else if (command.split(' ')[0] === "add") {
    args.shift();
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`The sum of all the arguments you provided is ${sum}`);
  }
  else if (command.split(' ')[0] === "minus") {
    args.shift();
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter -= x);
    message.reply(`The sum of all the arguments you provided is ${sum}!`);
  }
  else if (command.split(' ')[0] === "multiply") {
    args.shift();
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter *= x);
    message.reply(`The sum of all the arguments you provided is ${sum}!`);
  }
  else if (command.split(' ')[0] === "divide") {
    args.shift();
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter /= x);
    message.reply(`The sum of all the arguments you provided is ${sum}!`);
  }
  else if (command === "hello") {
    message.reply(`Hello!`);
  }
  else if (command === "invite") {
    message.reply(`https://tenor.com/xKxO.gif
    Sure! Invite this poor-looking bot! Go to <https://discord.com/api/oauth2/authorize?client_id=855005762030927882&permissions=8&scope=bot> to do it!`);
  }
  else if (command === "bye") {
    message.reply(`BYE! AND NEVER RETURN! jkjk LOL`);
  }
  else if (command === "eat burger") {
    message.reply(`https://tenor.com/behBi.gif
    You are eating a triple fully packed chicken burger with 10000000000 calories`)
  }
  else if (command === "eat") {
    message.reply(`Don't just eat AIR! TYPE SOMETHING LIKE BURGERS AND HOTDOG AND CHEESE AND CHICKEN`)
  }
  else if (command === "eat hotdog") {
    message.reply(`https://tenor.com/bCIyV.gif
    You are eating a hotdog with sauce`)
  }
  else if (command === "eat cheese") {
    message.reply(`https://tenor.com/Uxd8.gif
    You are eating mozzerella cheese`)
  }
  else if (command === "eat chicken") {
    message.reply(`https://tenor.com/beRGF.gif
    You are eating fried and crispy chicken`)
  }
  else if (command === "spam") {
    message.reply(`SPAM ALERT`);
    message.reply(`SPAM ALERT`);
    message.reply(`SPAM ALERT`);
    message.reply(`SPAM ALERT`);
    message.reply(`SPAM ALERT`);
    message.reply(`SPAM ALERT`);
    message.reply(`SPAM ALERT`);
    message.reply(`SPAM ALERT`);
    message.reply(`SPAM ALERT`);
    message.reply(`SPAM ALERT`);
    message.reply(`SPAM ALERT`);
    message.reply(`SPAM ALERT`);
    message.reply(`SPAM ALERT`);
    message.reply(`SPAM ALERT`);
    message.reply(`SPAM ALERT`);
    message.reply(`SPAM ALERT`);
    message.reply(`SPAM ALERT`);
    message.reply(`SPAM ALERT`);
    message.reply(`SPAM ALERT`);
    message.reply(`SPAM ALERT`);
  }
  else if (command === "Aydan") {
    message.reply(`Hi @Aydan!`);
  }
  else if (command === "help") {
    message.reply(` prefix : \/\/   commands : priest, invite, bye, add () (), minus () (), multiply () (), divide () (), eat burger, eat hotdog, eat cheese, eat chicken, eat, chill, beg, hack, spam, ping, fish, hunt, dig, work, hello, oi, sticky mouth. Want to add it in your own server? Go to <https://discord.com/api/oauth2/authorize?client_id=855005762030927882&permissions=8&scope=bot> to add your very own JBot!`);
  }
  else if (command === "oi") {
    that = Math.floor((Math.random() * 100) + 1);
    message.reply(`OI! How dare you! Your money has been decreased by ${that}% as a fine!`);
  }
  else if (command === "sticky mouth") {
    message.reply(`MMMHFFMMHHNN!`);
  }
  else if (command === "beg") {
    if (talkedRecently.has(message.author.id)) {
      message.channel.send("Wait 25 seconds before getting typing this again. - " + message.author);
    } else {
      const beg = Math.floor((Math.random() * 2) + 1);
      const money = Math.floor((Math.random() * 100) + 1);
      if (beg === 2) {
        message.reply(`FINE! I will give you $${money}! WOW`)
      }
      else if (beg === 1) {
        message.reply(`Nah, you are useless. LOL`)
      }
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 25000);
    }
  }
  else if (command === "daily") {
    if (talkedRecently5.has(message.author.id)) {
      message.channel.send("Wait 1 day before getting typing this again. - " + message.author);
    } else {
      const money = Math.floor((Math.random() * 100000) + 1);
      message.reply(`Here! I will give you $${money} for the daily money!`)
    }
    talkedRecently5.add(message.author.id);
    setTimeout(() => {
      talkedRecently.delete(message.author.id);
    }, 86400000);
  }
  else if (command === "fish") {
    if (talkedRecently1.has(message.author.id)) {
      message.channel.send("Wait 25 seconds before getting typing this again. - " + message.author);
    } else {
      const fish = Math.floor((Math.random() * 4) + 1);
      if (fish === 2) {
        message.reply(`You got nothing! PFFT`)
      }
      else if (fish === 1) {
        message.reply(`YOU GOT A GOLDEN FISH!!!`)
      }
      else if (fish === 3 || 4) {
        message.reply(`You got a normal fish.`)
      }
      talkedRecently1.add(message.author.id);
      setTimeout(() => {
        talkedRecently1.delete(message.author.id);
      }, 25000);
    }
  }
  else if (command === "hunt") {
    if (talkedRecently2.has(message.author.id)) {
      message.channel.send("Wait 25 seconds before getting typing this again. - " + message.author);
    } else {
      const hunt = Math.floor((Math.random() * 10) + 1);
      if (hunt === 1) {
        message.reply(`You got nothing!`)
      }
      else if (hunt === 2) {
        message.reply(`You got nothing!`)
      }
      else if (hunt === 3) {
        message.reply(`You got a deer!!!`)
        money += 500
      }
      else if (hunt === 4) {
        message.reply(`You got nothing!`)
      }
      else if (hunt === 5) {
        message.reply(`YOU GOT A GOLDEN DRAGON!!!!!`)
        money += 1000
      }
      else if (hunt === 6) {
        message.reply(`You got a lion!!!`)
        money += 800
      }
      else if (hunt === 7) {
        message.reply(`You got a rabbit.`)
        money += 200
      }
      else if (hunt === 8) {
        message.reply(`You got nothing!`)
      }
      else if (hunt === 9) {
        message.reply(`You got a rabbit.`)
        money += 200
      }
      else if (hunt === 10) {
        message.reply(`You got nothing!`)
      }
      talkedRecently2.add(message.author.id);
      setTimeout(() => {
        talkedRecently2.delete(message.author.id);
      }, 1000);
    }
  }
  else if (command === "dig") {
    if (talkedRecently3.has(message.author.id)) {
      message.channel.send("Wait 25 seconds before getting typing this again. - " + message.author);
    } else {
      const hunt = Math.floor((Math.random() * 4) + 1);
      if (hunt === 2) {
        message.reply(`You got nothing! PFFT`)
      }
      else if (hunt === 1) {
        message.reply(`YOU GOT A QUEEN ANT!!!`)
      }
      else if (hunt === 3 || 4) {
        message.reply(`You got a worm.`)
      }
      talkedRecently3.add(message.author.id);
      setTimeout(() => {
        talkedRecently3.delete(message.author.id);
      }, 25000);
    }

  }
  else if (command === "work") {
    if (talkedRecently4.has(message.author.id)) {
      message.channel.send("Wait 1 hour before getting typing this again. - " + message.author);
    } else {
      const work = Math.floor((Math.random() * 4) + 1);
      if (work === 2) {
        message.reply(`You got nothing useless working man!`)
      }
      else if (work === 1) {
        message.reply(`YOU GOT A PIECE OF GOLD OF WORKING!!!`)
      }
      else if (work === 3 || 4) {
        message.reply(`You got $5000.`)
      }
      talkedRecently4.add(message.author.id);
      setTimeout(() => {
        talkedRecently4.delete(message.author.id);
      }, 3600000);
    }
  }
  else if (command === "hack") {
    message.reply(`You are hacking @everyone!`);
  }
  else if (command === "chill") {
    const chill = Math.floor((Math.random() * 2) + 1);
    if (chill === 1) {
      message.reply(`YOU DON'T GET TO CHILL AND DONT ASK WHY`)
    }
    else if (chill === 2) {
      message.reply(`Okay, take a deep breath.......`)
    }
  }
  else if (command === "priest") {
    const luck = Math.floor((Math.random() * 10) + 1);
    if (luck === 1) {
      message.reply(`You will get an A in your exams.(AT LEAST)`)
    }
    else if (luck === 2) {
      message.reply(`You will not get scold.`)
    }
    else if (luck === 3) {
      message.reply(`You will have a bad dream.`)
    }
    else if (luck === 4) {
      message.reply(`You will have nothing from me. LOL`)
    }
    else if (luck === 5) {
      message.reply(`You will be lucky at something, NO MATTER WHAT.`)
    }
    else if (luck === 6) {
      message.reply(`You will past majority of your exams`)
    }
    else if (luck === 7) {
      message.reply(`There will be more homework....more...........more...................................`)
    }
    else if (luck === 8) {
      message.reply(`You will be a successful person`)
    }
    else if (luck === 9) {
      message.reply(`There will be holidays soon... verry soooon.......................`)
    }
    else if (luck === 10) {
      message.reply(`I feel that you need to invite this bot! Just click the link.  <https://discord.com/api/oauth2/authorize?client_id=855005762030927882&permissions=8&scope=bot>`)
    }
  }
  else if (command === "balance") {
    const numArgs = ""
    message.reply(`Your current balance is ${money[Id]}`);
    if (numArgs.length == 0) return false; 
  money[Id] = 0 //Set this poor man to zero
  JSON.stringify(money); //Save Changes
  fs.writeFileSync("./money.json", )
  console.log('this guy got: ', money[Id])
  }
  else {
    message.reply(`Hey, you! don't think I'm a "smarty-pants"! Please type something I know!`)
  }
});
client.login(process.env.botToken);