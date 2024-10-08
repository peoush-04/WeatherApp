// Documentation present at mini project js 1 (important things to knwo)
// The symbols $ , { } and } are part of a JavaScript template literal, which is a way to embed expressions inside string literals using backticks
// C).
// Here's an explanation of each symbol's purpose within the template literal:
// Javascript:
// 'https : / / flagcdn . com/144x108/$ {weather Info? . sys? . country. toLowerCase ( ) } . png' ,
// country Icon. src =
// • The $ symbol is used to signal the start of a template literal expression.
// • The { } curly braces are used to enclose an expression that will be evaluated and inserted into the string. In this case, the expression is
// weatherlnfo? . sys? . country. toLowercase ( ) , which will evaluate to the lowercase two-letter country code used to generate the URL for
// the flag image.
// • The } symbol marks the end of the expression and the end of the template literal.
// Template literals are a powerful way to dynamically generate strings in JavaScript, allowing you to easily insert variables and expressions
// without having to concatenate multiple strings together.

// What is Optional Chaining_Qperator ?
// Optional chaining is a new JavaScript operator introduced in ECMAScript 2020 that makes it easier to safely access nested properties and
// methods of an object, without worrying about encountering errors if a property or method does not exist or is undefined. The operator is
// denoted by the question mark ( ? ) symbol and is often referred to as the "nullish coalescing operator".
// Here's an example of how optional chaining can be used:
// state: "NY" ,
// Javascript :
// let user =
// let zipcode =
// name: "Alice" ,
// address :
// user? . address? . zip;
// { city: "New York" ,
// • • "10001"
// ZIP .
// console . log (zipcode) ;
// // "10001"
// In this example, we have an object called user with two properties: name and address . The address property is itself an object that contains
// three sub-properties: city, state, and zip . We want to access the zip property of the address object, but we don't want to risk running
// into an error if the address object is null or undefined.
// Using optional chaining, we can add a ? symbol after each object property or method call, indicating that we want to perform the operation
// only if the property or method exists and is not null or undefined. In this case, if the address property or the zip property do not exist, the
// expression will simply evaluate to undefined, without throwing an error.

// cityName. innerText = weather Info? . name;
// cityName is the name of an HTML element that will display the city name.
// . innerText is a property of the HTML element that sets its visible text content.
// weatherlnfo is an object that contains information about the weather.
// ? . is the optional chaining operator, which allows you to access properties of an object that may be null or undefined without causing
// an error. In this case, it is used to access the name property of the weatherlnfo Object.
// s https : / / flagcdn . com/144x10B/$ {weather Info? . sys? . country. toLawerCase ( ) } .png
// country Icon . src
// countrylcon is the name of an HTML element that will display the country flag.
// . src is a property of the HTML element that sets the URL of the image to display.
// weatherlnfo is an object that contains information about the weather.
// ? . is the optional chaining operator, which allows you to access properties of an object that may be null or undefined without causing
// an error. In this case, it is used to access the sys property of the weatherlnfo object, and then the country property of the sys object.
// . toLowercase ( ) is a method that converts the value of a string to lowercase characters.
// desc. innerText = weatherlnfo? . weather? . [0) ? . main;
// desc is the name of an HTML element that will display the weather description.
// . inner-Text is a property of the HTML element that sets its visible text content.
// weatherlnfo is an object that contains information about the weather.
// ? . is the optional chaining operator, which allows you to access properties of an object that may be null or undefined without causing
// an error. In this case, it is used to access the weather property of the weatherlnfo object, and then the first element of the weather array,
// and then the main property of that element.

// weather Icon. src =
// : / / openweathermap . org/img/w/$ {weather Info? . weather? . [0] ? . icon } .png
// weatherlcon is the name of an HTML element that will display the weather icon.
// . src is a property of the HTML element that sets the URL of the image to display.
// weatherlnfo is an object that contains information about the weather.
// ? . is the optional chaining operator, which allows you to access properties of an object that may be null or undefined without causing
// an error. In this case, it is used to access the weather property of the weatherlnfo object, and then the first element of the weather array,
// and then the icon property of that element.
// temp. innerText =
// $ {weatherlnfo? . main? . temp. toFixed (2) } 0 C' ;
// temp is the name of an HTML element that will display the temperature.
// . innerText is a property of the HTML element that sets its visible text content.
// weatherlnfo is an object that contains information about the weather.
// ? . is the optional chaining operator, which allows you to access properties of an object that may be null or undefined without causing
// an error. In this case, it is used to access the main property of the weatherlnfo object, and then the temp property of that object.
// . toFixed() is a method that formats a number with a specified number of digits after the decimal point.

