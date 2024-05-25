import sportNewsImage from './../assets/sport.png'
import edutNewsImage from './../assets/edu.jpg'
import weatherNewsImage from './../assets/weather.jpg'
import avtoNewsImage from './../assets/avto.jpg'
import allNewsImage from './../assets/news.jpg'
import { v4 } from "uuid";

const NewsItem = ({title, category, description}) => {

    let style = {}
    let imgCopy = null

    console.log(v4());

    switch(category){
        case 'forecast':
            imgCopy = weatherNewsImage;
            style = {
                backgroundColor: "#0dcaf0af"
            };
            break;

        case 'sport':
            imgCopy = sportNewsImage;
            style = {
                backgroundColor: "#dc3545af"
            };
            break;

         case 'education':
            imgCopy = edutNewsImage;
            style = {
                backgroundColor: "#ffc107af"
            };
            break;

        case 'avto':
            imgCopy = avtoNewsImage;
            style = {
                backgroundColor: "#198754af"
            };
            break;


        default:
            imgCopy = allNewsImage;
            style = {
                backgroundColor: "#212529af"
            }
    }




    return ( 
        <li className="d-flex  gap-3 align-items-center p-2 rounded-3" style={style}>
            <img className="rounded rounded-4" src={imgCopy} alt="news image" width={100} height={100} style={{objectFit: "cover"}}/>
            <div className="position-relative">
                <h3 className="text-white">{title}</h3>
                <p className="text-white fw-medium">{description}</p>

                <button className="position-absolute top-0 end-0"  type="button" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#222c76" width="25" height="25" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
                </button>
            </div>

        </li>
     );
}
 
export default NewsItem;