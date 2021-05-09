import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'kron-figure',
  styleUrl: 'kron-figure.css',
  shadow: true,

})
export class KronFigure {
  
  @Prop() appearance: string;
  @Prop() appearanceImage: string;
  @Prop() img: string;
  @Prop() text: string;
  @Prop() alt: string;
  
  render() {
    return (
      <figure class={`${this.appearance}`}>
        <img class={`${this.appearanceImage}`} src={this.img} alt={this.alt}/>
        <figcaption>{this.text}</figcaption>
    </figure>
    );
  }
}
