console.log(pokemons)




function toggleHeartBackgroundColor(event) {
    const heart = event.target; // Bosilgan yurak elementi
    if (heart.style.backgroundColor === 'red') {
      heart.style.backgroundColor = 'white'; // Oqga o'zgartirish
    } else {
      heart.style.backgroundColor = 'red'; // Qizilga o'zgartirish
    }
    
    // LocalStorage-ga barcha yuraklarning holatini saqlash
    const allHearts = document.querySelectorAll('.heart'); // Barcha yuraklarni topish
    const heartColors = Array.from(allHearts).map(h => h.style.backgroundColor); // Ranglarni olish
    localStorage.setItem('heartColors', JSON.stringify(heartColors)); // JSON formatida saqlash
  }

  // Sayt qayta yuklanganda saqlangan ranglarni tiklash
  window.onload = function() {
    const storedColors = JSON.parse(localStorage.getItem('heartColors')); // Ranglarni o'qish
    if (storedColors) {
      const allHearts = document.querySelectorAll('.heart'); // Barcha yuraklar
      allHearts.forEach((h, index) => {
        h.style.backgroundColor = storedColors[index]; // Saqlangan ranglarni o'rnatish
      });
    }
  };


  // Modal oynani ko'rsatish uchun funksiya
function showHeartModal() {
    var modal = document.getElementById("heart-modal");
    modal.style.display = "block"; // Modalni ko'rsatish
    updateRedHearts(); // Qizil yuraklar ro'yxatini yangilash
}

// Modalni yopish uchun funksiya
function closeHeartModal() {
    var modal = document.getElementById("heart-modal");
    modal.style.display = "none"; // Modalni yopish
}

// Qizilga aylangan yuraklar ro'yxatini yangilash
function updateRedHearts() {
    var redHeartsContainer = document.getElementById("red-hearts");
    redHeartsContainer.innerHTML = ""; // Tozalash

    // 5 ta yurakni tekshirish uchun
    for (var i = 1; i <= 5; i++) {
        var heartElement = document.getElementById("pokemon-00" + i);
        if (heartElement && heartElement.style.color === "red") { // Agar yurak qizil bo'lsa
            var newHeart = document.createElement("div");
            newHeart.textContent = "Pokemon 00" + i; // Qizil yurakni qo'shish
            redHeartsContainer.appendChild(newHeart);
        }
    }
}



//masalalar

//1-masala

// function sumInput(array = []) {
//     const input = prompt("Bir son kiriting:");
//     if (input === null || input.trim() === "" || isNaN(input)) {
//         let sum = 0;
//         for (const number of array) {
//             sum += number; 
//         }
//         return sum; 
//     } else {
//         array.push(Number(input));
//         return sumInput(array);
//     }
// }

// console.log("Yig'indi:", sumInput());

//2-masala

// const musicGenres = ["Jazz", "Blues"]; 

// musicGenres.push("Rock-n-roll"); 
// musicGenres[1] = "Classic"; 

// const firstGenre = musicGenres.shift(); 
// console.log("Olib tashlangan qiymat:", firstGenre); 

// musicGenres.unshift("Rap", "Reggae"); 

// console.log("Yangi array:", musicGenres); 

//3-masala

// function sumSalaries(salaries) {
//     let total = 0; 
    
//     const salaryValues = Object.values(salaries);

//     for (const salary of salaryValues) {
//         total += salary;
//     }

//     return total;
// }

// let salaries = {
//     "Akmal": 1200,
//     "Salim": 5200,
//     "Karima": 1800
// };

// console.log(sumSalaries(salaries));

//4masala

// function calcSum(arr) {
//     if (!arr || arr.length === 0) {
//         return [];
//     }

//     let evenSum = 0; 
//     let oddSum = 0; 

//     for (const num of arr) {
//         if (num % 2 === 0) {
//             evenSum += num;
//         } else {
//             oddSum += num;
//         }
//     }

//     return [evenSum, oddSum]; 
// }

// console.log(calcSum([1, 2, 3, 4, 5]));




