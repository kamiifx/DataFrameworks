import { Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'kron-section',
  styleUrl: 'kron-section.css',
  shadow: true,
})
export class KronSection {
  @Prop() header: string;
  @Prop() text: string;
  

  render() {
    return (
      <section>
        <h2>{this.header}</h2>
        <p>{this.text}</p>
        <slot name="content"/>
    </section>
    );
  }

}
