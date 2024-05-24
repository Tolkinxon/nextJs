import { addListener } from "@reduxjs/toolkit";
import sportNewsImage from './../assets/sport.png'
import edutNewsImage from './../assets/edu.jpg'
import weatherNewsImage from './../assets/weather.jpg'
import allNewsImage from './../assets/news.jpg'

const NewsItem = ({title, category, description}) => {

    let style = {}
    let imgCopy = null

    switch(category){
        case 'forecast':
            imgCopy = weatherNewsImage;
            style = {
                backgroundColor: "rgba(0, 200, 0, 0.700)"
            };
            break;

        case 'sport':
            imgCopy = sportNewsImage;
            style = {
                backgroundColor: "rgba(100, 0, 100, 0.700)"
            };
            break;

         case 'education':
            imgCopy = edutNewsImage;
            style = {
                backgroundColor: "rgba(0, 0, 100, 0.700)"
            };
            break;


        default:
            imgCopy = allNewsImage;
            style = {
                backgroundColor: "rgba(0, 0, 0, 0.700)"
            }
    }




    return ( 
        <li className="d-flex  gap-3 align-items-center p-2 rounded-3" style={style}>
            <img className="rounded rounded-4" src={imgCopy} alt="news image" width={100} height={100} style={{objectFit: "cover"}}/>
            <div>
                <h3 className="text-white">{title}</h3>
                <p className="text-danger">{description}</p>
            </div>

        </li>
     );
}
 
export default NewsItem;