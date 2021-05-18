import { newSpecPage } from '@stencil/core/testing';
import { KronButton } from '../kron-button';

describe('kron-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KronButton],
      html: `<kron-button></kron-button>`,
    });
    expect(page.root).toEqualHtml(`
      <kron-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kron-button>
    `);
  });
});
