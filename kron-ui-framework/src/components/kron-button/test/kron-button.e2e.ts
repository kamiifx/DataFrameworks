import { newE2EPage } from '@stencil/core/testing';

describe('kron-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kron-button></kron-button>');

    const element = await page.find('kron-button');
    expect(element).toHaveClass('hydrated');
  });
});
