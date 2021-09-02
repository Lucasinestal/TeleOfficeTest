//Getting Users and displaying them.


const getUsers = () => {
    axios.get('https://reqres.in/api/users')
    .then(response => {
     const users = response.data.data;
     console.log(users)
     const html = users.map(user => {
        return `<div class="userListItem"><h3>${user.first_name} ${user.last_name}</h3>
        <button onclick="getSpecifiedUser(event, ${user.id});">More</button>
        </div>`
    }
    )
    document.querySelector('#container').innerHTML = `${html}`
     return users;
   })
    .catch(err=> console.error(err));
   };
  
   getUsers();

   //Getting specified user and display inside of modal.

   const getSpecifiedUser = (event, id) => {

    axios.get(`https://reqres.in/api/users/${id}`)
    .then(response => {
        const user = response.data.data;
        document.querySelector("#modal").innerHTML =`<div id="modal-content"><div class="modal-header"><div><div><img src="${user.avatar}"></div><div><h2>${user.first_name} ${user.last_name}</h2><div><p>Email: ${user.email}</p></div> <button onclick=popup(); id="close-modal-btn">close</button>`
        popup(); 
    })
    .catch(err=> console.error(err));
    
   }

   // Toggle popup modal.

   const popup = () => {
        const popupModal = document.getElementById("modal");

        if(popupModal.classList.contains("unToggled")) {
            popupModal.classList.add('toggled');
            popupModal.classList.remove('unToggled');
            container.classList.add("blurred");
          } else  {
            popupModal.classList.remove('toggled');
            popupModal.classList.add('unToggled');
            container.classList.remove("blurred");
          }
   }