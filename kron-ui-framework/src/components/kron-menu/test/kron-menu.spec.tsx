import { newSpecPage } from '@stencil/core/testing';
import { KronMenu } from '../kron-menu';

describe('kron-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KronMenu],
      html: `<kron-menu></kron-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <kron-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kron-menu>
    `);
  });
});
