$(document).ready(function() {
var gerText = [
"Die Dursleys besaßen alles, was sie wollten, doch sie hatten auch ein Geheimnis,und dass es jemand aufdecken könnte, war ihre größte Sorge. Einfach unerträglichwäre es, wenn die Sache mit den Potters herauskommen würde. Mrs Potter war dieSchwester von Mrs Dursley; doch die beiden hatten sich schon seit etlichen Jahrennicht mehr gesehen.",
"An der Straßenecke fiel ihm zum ersten Mal etwas Merkwürdiges auf – eineKatze, die eine Straßenkarte studierte. Einen Moment war Mr Dursley nicht klar,was er gesehen hatte – dann wandte er rasch den Kopf zurück, um noch einmalhinzuschauen. An der Einbiegung zum Ligusterweg stand eine getigerte Katze, abereine Straßenkarte war nicht zu sehen.",
"In seinem Büro im neunten Stock saß Mr Dursley immer mit dem Rücken zumFenster. Andernfalls wäre es ihm an diesem Morgen schwergefallen, sich auf dieBohrer zu konzentrieren. Er bemerkte die Eulen nicht, die am helllichten Tagevorbeischossen, wohl aber die Leute unten auf der Straße; sie deuteten in die Lüfteund verfolgten mit offenen Mündern."
];

$(".generated p").text(gerText[Math.floor(Math.random()*gerText.length)]);

});