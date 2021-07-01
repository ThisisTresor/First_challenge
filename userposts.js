let userId = location.href.split("/userposts.html?userId=")[1];
fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
  .then((response) => response.json())
  .then((json) => {
    let html = json.map((data) => {
      return `


      <div class="info">
      <div>
          <h2 id="names">${data.title}</h2>
        </div>
        <div class="container" id="email">
        <p>${data.body}</p>
      </div>
  </div>
   
        `;
    });
    document.querySelector("#user-posts").innerHTML = html;
  });
