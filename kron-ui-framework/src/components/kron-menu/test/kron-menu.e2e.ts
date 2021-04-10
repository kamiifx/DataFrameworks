import { newE2EPage } from '@stencil/core/testing';

describe('kron-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kron-menu></kron-menu>');

    const element = await page.find('kron-menu');
    expect(element).toHaveClass('hydrated');
  });
});
