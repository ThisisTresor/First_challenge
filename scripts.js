fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => {
    let html = json.map((user) => {
      return `
        


      <table>
            
            
      <tr>
          <td> <p id="names">${user.name}</p></td>
          <td><p>${user.email}</p></td>
          <td><p><button class="button"><a href="userposts.html?userId=${user.id}"> <span>Posts</span></a></button></p></td>

      </tr>
  </table>

      
          `;
        });
        document.querySelector("#user-information").innerHTML = html;
      });
