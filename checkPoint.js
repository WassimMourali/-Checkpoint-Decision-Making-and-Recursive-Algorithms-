// vérificateur d'année bissextile :
// fonction pour vérifier si une année est bissextile
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// exemple
const year = 2024;
if (isLeapYear(year)) {
    console.log(`${year} est une année bissextile.`);
} else {
    console.log(`${year} n'est pas une année bissextile.`);
}

//-----------------------------------------------

// tarification des billets :
// fonction pour déterminer le prix du billet en fonction de l'âge
function ticketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
}
const userAge = prompt("Veuillez entrer votre âge :");
const age = parseInt(userAge);

// vérifier si l'entrée est un nombre valide
if (!isNaN(age)) {
    // calculer le prix du billet en fonction de l'âge de l'utilisateur
    const price = ticketPrice(age);
    // afficher le prix du billet en utilisant une alerte
    alert(`Prix du billet pour l'âge de ${age} ans : $${price}.`);
} else {
    // gérer le cas où l'entrée n'est pas un nombre valide
    alert("Veuillez entrer un âge valide.");
}


//-----------------------------------------------

// conseiller vestimentaire basé sur la température et la pluie
// exemple d'utilisation :
const currentTemperature = 15;
const isCurrentlyRaining = true;
const clothingAdvice = adviseClothing(currentTemperature, isCurrentlyRaining);
console.log(`Basé sur ${currentTemperature}°C et la pluie : ${clothingAdvice}`);


//-----------------------------------------------
//-----------------------------------------------
//-----------------------------------------------

/* récursivité
tâche 1: Séquence Fibonacci */
// fonction récursive pour calculer le nième nombre de Fibonacci
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// exemple d'utilisation :
const fibonacciIndex = 6;
console.log(`Le nombre de Fibonacci à l'index ${fibonacciIndex} est : ${fibonacci(fibonacciIndex)}`);

//-----------------------------------------------

// tâche 3: Fonction de puissance

// fonction récursive pour calculer la puissance d'un nombre
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else if (exponent > 0) {
        return base * power(base, exponent - 1);
    } else {
        // gérer les exposants négatifs (optionnel)
        return 1 / power(base, -exponent);
    }
}

// exemple d'utilisation :
const baseNumber = 2;
const exponentNumber = 5;
console.log(`${baseNumber} élevé à la puissance de ${exponentNumber} est : ${power(baseNumber, exponentNumber)}`);
