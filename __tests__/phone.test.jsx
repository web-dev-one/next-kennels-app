import Phone from"../components/Layout/Phone";
import"@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor, act } from"@testing-library/react";
 
describe('Phone', () => {
  it('Renders a phone number in the heading', () => {
    render(<Phone  />)
 
    const number = screen.getByTestId('phone')
 
    expect(number).toBeInTheDocument()
  })
})