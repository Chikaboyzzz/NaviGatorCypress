export class BaseController{

    constructor(){


    }

    async authorization(){
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
          process.env.token =  `Bearer ${token}`
          return process.env.token;
    }

    async getCouponsList (){
        let myHeaders = new Headers();
        myHeaders.append("Authorization", process.env.token);

        let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        const coupons = await fetch("http://167.114.201.175:5001/api/Coupons", requestOptions)
        .then(data => {return data.json()})
        return coupons

    }
}