let year = (prompt("Який твій рік народження?",""));
let age;
switch (true) {
    case (year <= 2023) && (year > 0): age = 2023 - year; alert('вік = ' + age); break;
    case (year == null): alert('Шкода, що Ви не захотіли ввести свій рік народження');
}

let city = prompt("В якому місті ти живеш?", "");
switch (city){
    case "Київ": alert('Ти живеш у столиці України'); break;
    case "Вашингтон": alert('Ти живеш у столиці США'); break;
    case "Лондон": alert("Ти живеш у столиці Великої Британії"); break;
    case null: alert('Шкода, що Ви не захотіли ввести своє місто'); break;
    default: alert('Ти живеш у місті ' + city);
}

let sport = prompt("Який твій улюблений вид спорту?", "");
switch (sport){
    case "Бокс": alert('Круто! Хочеш стати Олександром Усіком? '); break;
    case "Футбол": alert('Круто! Хочеш стати Ліонелем Мессі?'); break;
    case "Теніс": alert('Круто! Хочеш стати Рафаелем Надалем?'); break;
    case null: alert('Шкода, що Ви не захотіли ввести свій вид спорту'); break;
}
