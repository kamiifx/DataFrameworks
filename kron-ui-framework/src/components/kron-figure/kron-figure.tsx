import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'kron-figure',
  styleUrl: 'kron-figure.css',
  assetsDirs: ['assets'],
})
export class KronFigure {
  
  @Prop() appearance: string;
 
  render() {

    return (
      <figure class={`${this.appearance}`}>
        <slot/>
    </figure>
    );
  }
}
