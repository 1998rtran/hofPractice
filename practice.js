// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

// If you would like to take a look at the inputs that are passed into these functions, please
// feel free to check out the data.js file.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function (fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function (numbers) {
  var count = 0;
  _.each(numbers, function(number) {
    if (number % 5 === 0) {
      count++;
    }
  });
  return count;
};

// use _.each to build an array containing only tweets belonging to a specified user.
var getUserTweets = function(tweets, user) {
  var userTweets = [];
  _.each(tweets, function(tweet, index, collection) {
    if (user === tweets[index]['user']) {
      userTweets.push(tweet);
    }
  });
  return userTweets;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function (fruits, targetFruit) {
  return _.filter(fruits, function(fruit) {
    if (fruit === targetFruit) {
      return fruit;
    }
  });
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function (fruits, letter) {
  return _.filter(fruits, function(fruit) {
    if (fruit[0] === letter) {
      return fruit;
    }
  });
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function (desserts) {
  return _.filter(desserts, function(dessert) {
    return dessert['type'] === 'cookie';
  });
};

// rebuild the getUserTweets function from above with _.filter instead
var filterUserTweets = function(tweets, user) {
  return _.filter(tweets, function(tweet, index, collection) {
    if (user === tweets[index]['user']) {
      return tweet;
    }
  });
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function (fruits) {
  _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function (desserts) {
  _.map(desserts, function(dessert, index, collection) {
    dessert['glutenFree'] = true;
    if (dessert['ingredients'].includes('flour')) {
      dessert['glutenFree'] = false;
    }
  });
  return desserts;
};

// given an array of tweet objects, return a new array of strings
// containing only the message properties.
var allUserMessages = function(tweets) {
  return _.map(tweets, function(tweet, index, collection) {
    return tweet['message'];
  });
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
//
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function (groceries, coupon) {
  _.map(groceries, function(grocery, index, collection) {
    grocery['price'] = grocery['price'].replace('$', '');
    grocery['salePrice'] = '$' + (grocery['price'] - grocery['price'] * coupon).toFixed(2);
  });
  return groceries;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function (products) {
  var sum = 0;
  _.reduce(products, function(product, index, collection) {
    index['price'] = index['price'].replace('$', '');
    sum += +index['price'];
  }, 0);
  return sum;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function (desserts) {
  var dessertCount = {};
  _.reduce(desserts, function(dessert, index, collection) {
    var type = index['type'];
    if (dessertCount[type]) {
      dessertCount[type]++;
    } else {
      dessertCount[type] = 1;
    }
    // dessertCount[type] = dessertCount[type] + 1 || 1;
  }, {});
  return dessertCount;
};

// return an object with the proper count of all user messages
/*
 example output:
  var tweetCountPerUser = countMessagesPerUser(tweets);
  {
    "douglascalhoun": 5,
    "mracus": 6,
    "shawndrost": 5,
    "sharksforcheap": 3
  }
*/
var countMessagesPerUser = function(tweets) {
  var tweetCount = {};
  _.reduce(tweets, function(tweet, index, collection) {
    var username = index['user'];
    if (tweetCount[username]) {
      tweetCount[username]++;
    } else {
      tweetCount[username] = 1;
    }
    // tweetCount[username] = tweetCount[username] + 1 || 1;
  }, 0);
  return tweetCount;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function (movies) {
  var ninetiesMovies = [];
  _.reduce(movies, function(movie, index, collection) {
    var year = index['releaseYear'];
    if (year >= 1990 && year <= 2000) {
      ninetiesMovies.push(index['title']);
    }
  }, ninetiesMovies);
  return ninetiesMovies;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function (movies, timeLimit) {
  return _.reduce(movies, function(movie, index, collection) {
    var time = index['runtime'];
    if (time < timeLimit) {
      console.log(index['title'], true);
      return true;
    } else {
      return false;
    }
  }, {});
};
