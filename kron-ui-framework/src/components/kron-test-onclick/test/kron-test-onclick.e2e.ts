import { newE2EPage } from '@stencil/core/testing';

describe('kron-test-onclick', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kron-test-onclick></kron-test-onclick>');

    const element = await page.find('kron-test-onclick');
    expect(element).toHaveClass('hydrated');
  });
});
