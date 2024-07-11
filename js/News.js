class News {
    constructor() {
      this.APIkey = "c0aab56d16e546bd92c792db2d9a1a6a";
    }
    //send url to the API
    async queryAPI(newsName, country, category) {
      //Build url
      let url = "https://newsapi.org/v2/";
  
      //check the country and category valid
      if (country === "" && category === "") {
        url += "everything?";
      } else {
        url += "top-headlines?";
      }
  
      //if newsName exist
      if (newsName !== "") {
        url += `q=${newsName}&`;
      }
  
      //if country exist
      if (country !== "") {
        url += `country=${country}&`;
      }
  
      //if category exist
      if (category !== "") {
        url += `category=${category}&`;
      }
  
      //complet url with key
      url += `apiKey=${this.APIkey}`;
  
      const newsResponse = await fetch(url);
      const news = await newsResponse.json();
      return {
        news,
      };
    }
  }
  