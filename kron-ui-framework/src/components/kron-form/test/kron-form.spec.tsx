import { newSpecPage } from '@stencil/core/testing';
import { KronForm } from '../kron-form';

describe('kron-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KronForm],
      html: `<kron-form></kron-form>`,
    });
    expect(page.root).toEqualHtml(`
      <kron-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kron-form>
    `);
  });
});
