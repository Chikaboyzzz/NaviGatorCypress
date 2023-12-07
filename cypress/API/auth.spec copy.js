describe('Login API suite', () => {
  let token = ""
  before(async () => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
      
      var urlencoded = new URLSearchParams();
      urlencoded.append("grant_type", "password");
      urlencoded.append("username", "Admin");
      urlencoded.append("password", "Admin@Navi");
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
      };
      
      let token = await fetch("http://167.114.201.175:5001/Token", requestOptions)
        .then(response => response.json())
        .then(result => {return result.access_token})
        .catch(error => console.log('error', error));
        cy.log(token)
  })    

})
 