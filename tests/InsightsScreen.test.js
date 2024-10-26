import React from 'react';
import { render } from '@testing-library/react-native';
import InsightsScreen from '../src/screens/InsightsScreen';

describe('Insights Screen', () => {
  it('displays analytics data', () => {
    const { getByText } = render(<InsightsScreen />);
    expect(getByText('Sales Insights')).toBeTruthy();
    expect(getByText('Top-Selling Products')).toBeTruthy();
  });
});
