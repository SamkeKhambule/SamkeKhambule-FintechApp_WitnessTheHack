import firebase from 'firebase/app';
import firebaseConfig from '../src/firebaseConfig';

jest.mock('firebase/app', () => ({
  initializeApp: jest.fn(),
}));

describe('Firebase Configuration', () => {
  it('initializes Firebase without errors', () => {
    firebase.initializeApp(firebaseConfig);
    expect(firebase.initializeApp).toHaveBeenCalledWith(firebaseConfig);
  });
});
