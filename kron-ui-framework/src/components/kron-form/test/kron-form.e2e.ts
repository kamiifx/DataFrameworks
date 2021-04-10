import { newE2EPage } from '@stencil/core/testing';

describe('kron-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kron-form></kron-form>');

    const element = await page.find('kron-form');
    expect(element).toHaveClass('hydrated');
  });
});
