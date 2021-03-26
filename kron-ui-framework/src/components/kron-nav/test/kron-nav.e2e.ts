import { newE2EPage } from '@stencil/core/testing';

describe('kron-nav', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kron-nav></kron-nav>');

    const element = await page.find('kron-nav');
    expect(element).toHaveClass('hydrated');
  });
});
