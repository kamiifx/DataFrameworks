import { newSpecPage } from '@stencil/core/testing';
import { KronNav } from '../kron-nav';

describe('kron-nav', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KronNav],
      html: `<kron-nav></kron-nav>`,
    });
    expect(page.root).toEqualHtml(`
      <kron-nav>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kron-nav>
    `);
  });
});
