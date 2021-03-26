import { newE2EPage } from '@stencil/core/testing';

describe('kron-box', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kron-box></kron-box>');

    const element = await page.find('kron-box');
    expect(element).toHaveClass('hydrated');
  });
});
