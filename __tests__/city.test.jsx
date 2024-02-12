import City from"../pages/[city].js";
import"@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor, act } from"@testing-library/react";
 
describe('City', () => {
  it('Renders a phone number on the City heading', () => {
    render(<City  />)
 
    const number = screen.getByTestId('phone')
 
    expect(number).toBeInTheDocument()
  })
})