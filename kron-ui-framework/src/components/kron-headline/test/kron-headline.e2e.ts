import { newE2EPage } from '@stencil/core/testing';

describe('kron-headline', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kron-headline></kron-headline>');

    const element = await page.find('kron-headline');
    expect(element).toHaveClass('hydrated');
  });
});
