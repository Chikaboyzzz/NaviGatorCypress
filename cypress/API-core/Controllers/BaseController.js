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

    async getCouponsList (username=""){
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", process.env.token);

        var raw = JSON.stringify({
        "GeneralCount": 0,
        "TotalCount": 0,
        "Items": [
            {
            "Code": "string",
            "BeginDate": "2023-12-06T18:08:52.029Z",
            "EndDate": "2023-12-06T18:08:52.029Z",
            "IsUsed": true,
            "ClientFullName": "string",
            "Type": "Any",
            "MoneyAmountBenefit": 0,
            "InitialMoneyBenefit": 0,
            "RkDiscountId": 0,
            "Discount": 0,
            "IsDeleted": true,
            "Id": 0
            }
        ],
        "Page": 0,
        "PageSize": 0
        });

        let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        let coupons = await fetch("http://167.114.201.175:5001/api/Coupons", requestOptions)
        .then(data => data.json())
        .then((json) => {
            return json})
        .catch(error => console.log('error', error));
        return coupons

    }
}