import { screen } from '@testing-library/react';

import NavBar from './NavBar';
import { testUtils } from '../utils';

describe('NavBar', () => {
  it('should show 3 links', async () => {
    testUtils.renderWithRouter(<NavBar />, { route: '/' });

    let items = screen.getAllByRole('link');
    expect(items).toHaveLength(2);

    let elem = screen.getByRole('link', { name: /home/i });
    expect(elem).toHaveTextContent('Home');

    elem = screen.getByRole('link', { name: /profile/i });
    expect(elem).toHaveTextContent('Profile');

    elem = screen.getByRole('button', { name: /sign-in/i });
    expect(elem).toHaveTextContent('Sign-In');
  });
});
