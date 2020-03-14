// Bai 2
var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
var times = arr1.filter(value => value === "a").length;
console.log(times);
// Bai 3
var library = [
	{
		author: "Bill Gates",
		title: "The Road Ahead",
		readingStatus: true
	},
	{
		author: "Steve Jobs",
		title: "Walter Isaacson",
		readingStatus: true
	},
	{
		author: "Suzanne Collins",
		title: "Mockingjay: The Final Book of The Hunger Games",
		readingStatus: false
	}
];
library.forEach(value => {
    if(value.readingStatus){
        return console.log("Author: " + value.author + " - Title: " + value.title + " - Reading Status: " + value.author + " read this book")
    }
    return console.log("Author: " + value.author + " - Title: " + value.title + " - Reading Status: " + value.author + " has not read this book yet")
})