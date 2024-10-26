import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

describe('App Navigation', () => {
  it('renders the Inventory, POS, and Insights tabs', () => {
    const { getByText } = render(<App />);
    expect(getByText('Inventory')).toBeTruthy();
    expect(getByText('POS')).toBeTruthy();
    expect(getByText('Insights')).toBeTruthy();
  });
});
