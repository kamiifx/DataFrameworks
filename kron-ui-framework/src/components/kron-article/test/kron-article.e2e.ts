import { newE2EPage } from '@stencil/core/testing';

describe('kron-article', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kron-article></kron-article>');

    const element = await page.find('kron-article');
    expect(element).toHaveClass('hydrated');
  });
});
