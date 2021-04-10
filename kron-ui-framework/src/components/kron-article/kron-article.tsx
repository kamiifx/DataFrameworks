import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'kron-article',
  styleUrl: 'kron-article.css',
  shadow: true,
})
export class KronArticle {
  @Prop() titles: string;
  @Prop() content: string;
  @Prop({reflect: true, attribute: "addLogo"}) isValidContentLogo: boolean;

  @Prop() mainSectionWrite: string;

  render() {
    if (this.isValidContentLogo) {
      return(
      <article>
        <h3>{this.titles}</h3>
        <p>{this.content}</p>
        <kron-figure image="images.jpg" is-Valid="true" figcaption="beautiful sky" ></kron-figure>
        <slot name="kronFigure"></slot>
      </article>
      )
    } else {
      return( 
      <article>
        <h2>{this.titles}</h2>
        <p>{this.content}</p>
        <p>{this.mainSectionWrite}</p>
      </article>
      )
    }
  }
}

