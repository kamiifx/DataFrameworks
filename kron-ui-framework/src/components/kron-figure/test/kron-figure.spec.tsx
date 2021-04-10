import { newSpecPage } from '@stencil/core/testing';
import { KronFigure } from '../kron-figure';

describe('kron-figure', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KronFigure],
      html: `<kron-figure></kron-figure>`,
    });
    expect(page.root).toEqualHtml(`
      <kron-figure>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kron-figure>
    `);
  });
});
