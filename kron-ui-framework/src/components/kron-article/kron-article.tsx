import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'kron-article',
  styleUrl: 'kron-article.css',
  shadow: true,
})
export class KronArticle {
  @Prop() appearance: string;
  render() {
    return(
      <article class={`article ${this.appearance}`}>
        <slot/>
      </article>
    );
  }
}

