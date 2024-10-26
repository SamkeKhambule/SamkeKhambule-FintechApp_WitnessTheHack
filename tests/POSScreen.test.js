import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import POSScreen from '../src/screens/POSScreen';

describe('POS Screen', () => {
  it('renders POS screen', () => {
    const { getByText } = render(<POSScreen />);
    expect(getByText('Point of Sale')).toBeTruthy();
  });

  it('processes a sale and displays a receipt', () => {
    const { getByPlaceholderText, getByText } = render(<POSScreen />);
    const input = getByPlaceholderText('Enter item name');
    fireEvent.changeText(input, 'Test Item');
    fireEvent.press(getByText('Sell'));

    expect(getByText('Receipt')).toBeTruthy();
    expect(getByText('Test Item')).toBeTruthy();
  });
});
