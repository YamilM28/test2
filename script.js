function addBook() {
  const title = document.getElementById('titleInput').value;
  const genre = document.getElementById('genreInput').value;
  const coverUrl = document.getElementById('coverInput').value || 'default-cover.jpg';
  const container = document.getElementById('libraryContainer');

  const card = document.createElement('div');
  card.className = "book-card";
  card.style = "border: 1px solid #ccc; padding: 15px; width: 200px; border-radius: 8px; text-align: center;";

  card.innerHTML = `
    <img src="${coverUrl}" style="width: 100%; height: 250px; object-fit: cover; border-radius: 4px;">
    <h3>${title}</h3>
    <p>Genre: ${genre}</p>
    <select>
      <option>⏳ Want to Read</option>
      <option>📖 Reading</option>
      <option>✅ Read</option>
    </select>
    <br><br>
    <button onclick="this.parentElement.remove()">Remove</button>
  `;

  container.appendChild(card);
}
