$(document).ready(function() {
var engText = [
"It was on the corner of the street that he noticed the first sign of something peculiar - a cat reading a map. For a second, Mr. Dursley didn't realize what he had seen - then he jerked his head around to look again. There was a tabby cat standing on the corner of Privet Drive, but there wasn't a map in sight. What could he have been thinking of? It must have been a trick of the light.",
"But on the edge of town, drills were driven out of his mind by something else. As he sat in the usual morning traffic jam, he couldn't help noticing that there seemed to be a lot of strangely dressed people about. People in cloaks. Mr. Dursley couldn't bear people who dressed in funny clothes - the getups you saw on young people! He supposed this was some stupid new fashion.",
"It seemed that Professor McGonagall had reached the point she was most anxious to discuss, the real reason she had been waiting on a cold, hard wall all day, for neither as a cat nor as a woman had she fixed Dumbledore with such a piercing stare as she did now. It was plain that whatever 'everyone' was saying, she was not going to believe it until Dumbledore told her it was true."
];

$(".generated p").text(engText[Math.floor(Math.random()*engText.length)]);

});