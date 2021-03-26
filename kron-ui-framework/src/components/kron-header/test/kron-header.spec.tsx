import { newSpecPage } from '@stencil/core/testing';
import { KronHeader } from '../kron-header';

describe('kron-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KronHeader],
      html: `<kron-header></kron-header>`,
    });
    expect(page.root).toEqualHtml(`
      <kron-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kron-header>
    `);
  });
});
