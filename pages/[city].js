import Layout from '../components/Layout/Layout'
import { useEffect, useState } from 'react';
import { promises as fs } from 'fs';
import WelcomeCarousel from "../components/Carousel";
import { useRouter } from "next/router";
import cities from '../cities.json'
import MyCity from './City.js'
import ScrollButton from "../components/ScrollButton";



export default function City({city}){
  const route = useRouter();
    let [currentCity, setCities] = useState([]);

    useEffect(()=>{
        let cityArray = cities
        let currentCity = cityArray.filter( c =>{ 
          if (c.name === route.query.city){ return c}
          else { return {id: 0, name:"Glendale", img:"/glendale.jpg", des:"Glendale", detail:"Glendale"} }
        })
        setCities(...currentCity)
    },[currentCity, setCities])


    return(<>
            <Layout>
            <WelcomeCarousel />
             <div className="content">
              <div className="relative mt-4">
                <MyCity 
                 id={currentCity.id} 
                 name={currentCity.name} 
                 img={currentCity.img}
                 src={currentCity.img}
                 des={currentCity.des}
                 detail={currentCity.detail}
                 />
              </div>
             </div>
             <ScrollButton />
            </Layout>
          </>)
}

export async function getStaticPaths(){
    
  return {
    paths: cities.map(city => {
      return {
        params: {
          city: city.name,
        }
      }
    }),
    fallback: false
  }
}

export async function getStaticProps({params}){
  const file = await fs.readFile(process.cwd() + '/cities.json', 'utf8');
     let data = JSON.parse(file);
       
    return {
        props: {
          city: data
        }
      }

}
