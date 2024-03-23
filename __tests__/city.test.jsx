import './matchMedia.mock';
import City from"../pages/[city].js";
import"@testing-library/jest-dom";
import { useRouter } from 'next/router';
import mockRouter from 'next-router-mock';
import { fireEvent, render, screen, waitFor, act } from"@testing-library/react";
import WelcomeCarousel from "../components/Carousel.jsx";

jest.mock('next/router', () => jest.requireActual('next-router-mock'))

// const CityExample = () =>{
//     const router = useRouter();
//     return(<City city={{id: 0, name:"newyork", img:"/newyork.jpg", des:"New York Ney York", detail:"city that never sleeps"}} />)
// }
jest.mock('next/router', () => ({
  useRouter() {
    return {
      pathname: '/newyork',
      city: {id: 0, name:"newyork", img:"/newyork.jpg", des:"New York Ney York", detail:"city that never sleeps"}
    };
  },
}));

describe('City', () => {
  
  it('City page has a <Head> meta element', () => {
    console.log(<City city={{id: 0, name:"newyork", img:"/newyork.jpg", des:"New York Ney York", detail:"city that never sleeps"}} />)
    render(<City  />)
 
    const metas = document.getElementsByTagName("meta");
 
    expect(metas).toBeInTheDocument()
  })
})