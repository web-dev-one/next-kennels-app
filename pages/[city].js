import Layout from '../components/Layout/Layout'
import { useEffect, useState } from 'react';
import { promises as fs } from 'fs';
import WelcomeCarousel from "../components/Carousel";
import { useRouter } from "next/router";
import cities from '../cities.json'
import MyCity from './City.js'
import ScrollButton from "../components/ScrollButton";
import Head from 'next/head.js';



export default function City({city}){
  const route = useRouter();
    let [currentCity, setCities] = useState([]);

    useEffect(()=>{
        let cityArray = cities
        let currentCity = cityArray.filter( c => c.name === route.query.city)
        setCities(...currentCity)
       
    },[currentCity, setCities])

    return(<>
            <Head>
              <title>Pet Safe {currentCity.name} Kennels</title>
              <meta property="og:title" content={`Pet Safe ${currentCity.name} Kennels`} key="title" />
              <meta charSet="utf-8" />
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
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
