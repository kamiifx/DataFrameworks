import { newE2EPage } from '@stencil/core/testing';

describe('kbutton', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<kbutton></kbutton>');
    const element = await page.find('kbutton');
    expect(element).toHaveClass('hydrated');
  });{cursor}
});
