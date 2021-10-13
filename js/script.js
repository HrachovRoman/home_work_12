let num = +prompt('Введите любое число кроме "1"');

if (num < 1) {
    console.log('NaN');
} else {
    for (let i = 2; i <= num; i++) { 
        if (num === i) {
            console.log("Это простое число"); break; 
            //дополнительно сделал вывод, что число простое, по ТЗ это условие можно удалить. 
        } else if (num % i === 0) {
            console.log(i, "Наименьший делитель"); break;
        } 
    }
} 


