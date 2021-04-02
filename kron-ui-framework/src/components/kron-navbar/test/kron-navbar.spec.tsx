import { newSpecPage } from '@stencil/core/testing';
import { KronNavbar } from '../kron-navbar';

describe('kron-navbar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KronNavbar],
      html: `<kron-navbar></kron-navbar>`,
    });
    expect(page.root).toEqualHtml(`
      <kron-navbar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kron-navbar>
    `);
  });
});
