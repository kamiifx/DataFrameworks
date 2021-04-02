import { newE2EPage } from '@stencil/core/testing';

describe('kron-navbar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kron-navbar></kron-navbar>');

    const element = await page.find('kron-navbar');
    expect(element).toHaveClass('hydrated');
  });
});
