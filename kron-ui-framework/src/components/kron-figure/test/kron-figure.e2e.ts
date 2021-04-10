import { newE2EPage } from '@stencil/core/testing';

describe('kron-figure', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kron-figure></kron-figure>');

    const element = await page.find('kron-figure');
    expect(element).toHaveClass('hydrated');
  });
});
