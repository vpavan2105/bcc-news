import axios from "axios";

export const baseURL = "https://bcc-news-backend.onrender.com/" ;

export const usersURL = "https://bcc-news-backend.onrender.com/users" ;

// export const homeURL = "https://bcc-news-backend.onrender.com/home" ;
export const sportsURL = "https://bcc-news-backend.onrender.com/sports" ;
export const entertainmentURL = "https://bcc-news-backend.onrender.com/entertainment" ;
export const businessURL = "https://bcc-news-backend.onrender.com/business" ;
export const scienceURL = "https://bcc-news-backend.onrender.com/science" ;
export const generalURL = "https://bcc-news-backend.onrender.com/general" ;
export const technologyURL = "https://bcc-news-backend.onrender.com/technology" ;
export const politicsURL = "https://bcc-news-backend.onrender.com/politics" ;
export const healthURL = "https://bcc-news-backend.onrender.com/health" ;
export const dashBoardURL="https://bcc-news-backend.onrender.com/dashboard";

export async function addNewsToBookmark(bookmark,user) {
    try{
        let res = await axios.patch(`${dashBoardURL}/${user}`,{
            bookmark
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