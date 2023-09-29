import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';

test('renders the heading Reserve Table1', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const headingElement = screen.getByText("Reserve Table");
  expect(headingElement).toBeInTheDocument(); 
})

test('renders the heading Order Menu', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const headingElement = screen.getByText("Order Menu");
  expect(headingElement).toBeInTheDocument(); 
})

test('renders the heading Little Lemon', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const textElement = screen.getByText("This week's specials!");
  expect(textElement).toBeInTheDocument(); 
})



