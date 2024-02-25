import axios from "axios";

export const baseURL = "https://bcc-news-backend.onrender.com" ;
// https://bcc-news-backend.onrender.com/dashboard
export const usersURL = `${baseURL}/users` ;

export const sportsURL = `${baseURL}/sports` ;
export const entertainmentURL = `${baseURL}/entertainment` ;
export const businessURL = `${baseURL}/business` ;
export const scienceURL = `${baseURL}/science` ;
export const generalURL = `${baseURL}/general` ;
export const technologyURL = `${baseURL}/technology` ;
export const politicsURL = `${baseURL}/politics` ;
export const healthURL = `${baseURL}/entertainment` ;


export async function addNewsToBookmark(newsItem,user) {
    try{
        let res = await axios.patch(`${usersURL}/${user.id}`,{
            bookmark:[
              ...newsItem,
            ]
        })
        // let data = await res.json() ;
        console.log(res) ;
    }catch(error){
        console.log(error) ;
    }
}

export async function deleteNewsFromBookmark(newsItemId, userId) {
    try {
        let res = await axios.delete(`${usersURL}/${userId}/bookmark/${newsItemId}`);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}




export const fetchSportsNews = async () => {
    try {
      const response = await fetch(`${sportsURL}`);
      let data = await response.json();
      data = data.filter((item) =>
        item.category === "top-news" ? true : false
      );
      return data ;

    } catch (error) {
      console.log(error);
    }
};

export const fetchTechnologyNews = async () => {
    try {
      const response = await fetch(`${technologyURL}`);
      let data = await response.json();
      data = data.filter((item) =>
        item.category === "top-news" ? true : false
      );
      return data ;

    } catch (error) {
      console.log(error);
    }
};

export const fetchBusinessNews = async () => {
    try {
      const response = await fetch(`${businessURL}`);
      let data = await response.json();
      data = data.filter((item) =>
        item.category === "top-news" ? true : false
      );
      return data ;

    } catch (error) {
      console.log(error);
    }
};
export const fetchEntertainmentNews = async () => {
    try {
      const response = await fetch(`${entertainmentURL}`);
      let data = await response.json();
      data = data.filter((item) =>
        item.category === "top-news" ? true : false
      );
      return data ;

    } catch (error) {
      console.log(error);
    }
};