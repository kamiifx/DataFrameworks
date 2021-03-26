import { newE2EPage } from '@stencil/core/testing';

describe('kron-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kron-header></kron-header>');

    const element = await page.find('kron-header');
    expect(element).toHaveClass('hydrated');
  });
});
