import axios from "axios";

export const baseURL = "https://testing-arqw.onrender.com/" ;

export const usersURL = "https://testing-arqw.onrender.com/users" ;

// export const homeURL = "https://testing-arqw.onrender.com/home" ;
export const sportsURL = "https://testing-arqw.onrender.com/sports" ;
export const entertainmentURL = "https://testing-arqw.onrender.com/entertainment" ;
export const businessURL = "https://testing-arqw.onrender.com/business" ;
export const scienceURL = "https://testing-arqw.onrender.com/science" ;
export const generalURL = "https://testing-arqw.onrender.com/general" ;
export const technologyURL = "https://testing-arqw.onrender.com/technology" ;
export const politicsURL = "https://testing-arqw.onrender.com/politics" ;
export const healthURL = "https://testing-arqw.onrender.com/health" ;


export async function addNewsToBookmark(newsItem,user=1) {
    try{
        let res = await axios.patch(`${usersURL}/${user}`,{
            bookmark:[
                newsItem
            ]
        })
        // let data = await res.json() ;
        console.log(res) ;
    }catch(error){
        console.log(error) ;
    }
}