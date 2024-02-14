import './matchMedia.mock';
import City from"../pages/[city].js";
import"@testing-library/jest-dom";
import { useRouter } from 'next/router';
import mockRouter from 'next-router-mock';
import { fireEvent, render, screen, waitFor, act } from"@testing-library/react";
import WelcomeCarousel from "../components/Carousel.jsx";

jest.mock('next/router', () => jest.requireActual('next-router-mock'))

const CityExample = ({href = '/[city].js'}) =>{
    const router = useRouter();
    return(<City city={{id: 0, name:"New York", img:"/newyork.jpg", des:"New York Ney York", detail:"city that never sleeps"}}/>)
}

describe('City', () => {
  it('Renders a city on the City heading', () => {
    render(<CityExample  />)
 
    const city = screen.getByTestId('city')
 
    expect(city).toBeInTheDocument()
  })
})