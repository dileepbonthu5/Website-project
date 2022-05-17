// Example POST method implementation:
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(`http://localhost:3000${url}`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  //   postData('https://example.com/answer', { answer: 42 })
  //     .then(data => {
  //       console.log(data); // JSON data parsed by `data.json()` call
  //     });
  
  
  let loginForm = document.getElementById("login-form");
  if(loginForm) loginForm.addEventListener('submit', login);
  
  function login(e) {
    e.preventDefault();
    let name = document.getElementById("username").value;
    let pswd = document.getElementById("pswd").value;
    console.log(name + " " + pswd)
    postData('/users/login', {username: name, password: pswd})
    .then((data) => {
        if(!data.message) {
            window.location.href="MY WEBSITE.html";
        }
    }
    )
    .catch((err) => {
        let error = err.message;
        let p = document.querySelector("#login-form");
        p.innerText = error;
  
    }
    )
  
  }
  
  let regForm = document.getElementById("register-form");
  if(regForm) regForm.addEventListener('submit', register);
  
  function register(e) {
    e.preventDefault();
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("pswd").value;
    console.log(fname + " " + lname + " "+ email + " "+ username + " " + password )
  
    postData('http://localhost:3000/users/register', {username: username, password: password, firstname: fname, lastname: lname, emailid: email })
    .then((data) => {
      if(!data.message) {
        setCurrentUser(data);
       
      }
    })
    .catch((error) => {
      const errText = error.message;
      document.querySelector("#reg-form p.error").innerHTML = errText;
      document.getElementById("pswd").value = "";
      console.log('Error!  ${errText}')
    });
  
  
  }