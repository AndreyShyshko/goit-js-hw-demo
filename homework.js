// // let title = "Arrays for begginers";



// function slugify(title) {
//   // Change code below this line
//   title = title.toLowerCase().split(' ').join('-');
//   return title;
//   // Change code above this line
// }

// console.log(slugify("Arrays for begginers"));


// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   let totalArray = firstArray.concat(secondArray);
//   console.log(totalArray);
//   const totalArrayLength = totalArray.length;
//   console.log(totalArrayLength);
//   const endItem = maxLength;
//   console.log(endItem);
//   if (totalArrayLength > maxLength) {
//     totalArray = totalArray.slice(0, endItem);
//     console.log(totalArray);
//     return totalArray;
//   } else {
//   return totalArray;
//   }
//   // Change code above this line
// }
//   console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));


//               quick 540, brown 552, jumped 645
// findLongestWord("The quick brown fox jumped over the lazy dog");

// function findLongestWord(string) {
//   // Change code below this line
//   let stringArray = string.split(' ');
//   // console.log(arrayFromString);
//   let longestWord = ' ';
//   for (i = 0; i < arrayFromString.length; i += 1) {
//   if (stringArray[i].length > longestWord.length) {
//    longestWord = stringArray[i];
//     console.log(longestWord);
//    }
//   }
//   // console.log(longestWord);
//   return longestWord;
//   // Change code above this line
// }
//    v1
// function filterArray(numbers, value) {
//   // Change code below this line
//   const newArray = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > value) {
//     newArray.push(numbers[i]);
//     // console.log(newArray);
//   }
//   }
//   console.log(newArray);
//   return newArray;
//   // Change code above this line
// }
// // console.log(newArray);
//    v2
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const number of numbers) {
//     if (number > value) {
//     filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }


// filterArray([12, 24, 8, 41, 76], 38);

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const newArray = [];
//   for (i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//     newArray.push(array1[i]);
//     }
//   }
//   console.log(newArray);
//   return newArray;
//   // Change code above this line
// }

// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// Задача 19
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const value = [];
//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
//       value.push(product[propName]);
//     }
//     }
//   console.log(value);
//     return value;
//   // Change code above this line
// }

//   getAllPropValues("name");


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let totalPrice = 0;
//   for (const product of products) {
//     // console.log(product.name === productName);
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
      
//       console.log(totalPrice);
//     }
//     // console.log(totalPrice);
//     // console.log(product.price);
//     // console.log(product.quantity);
//   }
//   // console.log(totalPrice);
//   return totalPrice;
//   // Пиши код выше этой строки
// }

// calculateTotalPrice("Scanner")


// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   const dataOdj = { category, priority, completed, ...data };
//   console.log(dataOdj);
//   // const newData = { ...dataOdj, ...data };
//   // console.log(newData);
//   return dataOdj;
//   // Change code above this line
// }

// makeTask({})
// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" })


// Change code below this line
// function add(...args) {
//   let total = 0;
//   for (const arg of args) {
//   total += arg;
//   }
//   console.log(total);
//   return total;
//   // Change code above this line
// }

// add(15, 27)
// add(74, 11, 62, 46, 12, 36)


// // Change code below this line
// function findMatches(arrayNam, ...args) {
//   const matches = []; // Don't change this line
//   for (const arg of args) {
//     for (j = 0; j < arrayNam.length; j +=1) {
//       if (arrayNam[j] === arg) {
//       matches.push(arg);
//       }
//     }
  
//   }
//   // Change code above this line
//   console.log(matches);
//   return matches;
// }

// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (newPotion.name === potion.name) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (const potion of this.potions) {
//       if (potionName === potion.name) {
//       const potionIndex = this.potions.indexOf(potion);
//       this.potions.splice(potionIndex, 1);
//         return this.potions;
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//      for (const potion of this.potions) {
//        if(potion.name === oldName) {
//          potion.name = newName;
//          return this.potions;
//        }
//      }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };


// // atTheOldToad.getPotions()
// atTheOldToad.addPotion({ name: "Power potion", price: 270 })


// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newArray.push(numbers[i] + value);
//     } else {
//       newArray.push(numbers[i]);
//     }
//   }
//   console.log(newArray);
//   return newArray;
//   // Change code above this line
// }

// changeEven([1, 2, 3, 4, 5], 10)

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]

// const getTotalFriendCount = users => {
  
//   return users.reduce((total, user) => [...total, ...user.friends], []).length;
  
// };


// console.log(getTotalFriendCount(users));

// const totalFriends = users.reduce((total, user) => [...total, ...user.friends], []).length;
// // console.log(totalFriends);


const getTotalBalanceByGender = (users, gender) => {
  return [...users]
    .filter(user => user.gender === gender)
    .reduce((total, user) => total + user.balance, 0)
};

console.log(getTotalBalanceByGender(users, 'female'))

const newUsers = [...users].filter(user => user.gender === 'female').map(user => user.balance);

console.log(newUsers)