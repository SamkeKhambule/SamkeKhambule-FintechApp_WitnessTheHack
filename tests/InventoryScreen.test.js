import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import InventoryScreen from '../src/screens/InventoryScreen';

describe('Inventory Screen', () => {
  it('renders inventory items', () => {
    const { getByText } = render(<InventoryScreen />);
    expect(getByText('Inventory')).toBeTruthy();
  });

  it('adds new inventory item', () => {
    const { getByPlaceholderText, getByText } = render(<InventoryScreen />);
    const input = getByPlaceholderText('Enter item name');
    fireEvent.changeText(input, 'New Item');
    fireEvent.press(getByText('Add Item'));

    expect(getByText('New Item')).toBeTruthy();
  });
});
