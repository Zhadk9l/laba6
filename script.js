function fetchUserData() {
    // Використовуємо fetch для отримання даних з API
    fetch('https://randomuser.me/api')
        .then(response => response.json()) // Перетворюємо в JSON
        .then(data => displayUserData(data.results[0])) // Викликаємо функцію для відображення даних
        .catch(error => console.error('Помилка отримання даних:', error));
}

function displayUserData(user) {
    // Витягуємо дані, які нас цікавлять, та виводимо на сторінку
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <img src="${user.picture.large}" alt="User Picture">
        <p>Cell: ${user.cell}</p>
        <p>City: ${user.location.city}</p>
        <p>Country: ${user.location.country}</p>
        <p>Postcode: ${user.location.postcode}</p>
    `;
}
