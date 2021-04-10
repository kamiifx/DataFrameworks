import { newE2EPage } from '@stencil/core/testing';

describe('kron-section', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kron-section></kron-section>');

    const element = await page.find('kron-section');
    expect(element).toHaveClass('hydrated');
  });
});
