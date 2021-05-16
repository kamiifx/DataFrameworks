import { Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'kron-section',
  styleUrl: 'kron-section.css',
  shadow: true,
})
export class KronSection {
  @Prop() appearance: string;
  @Prop() text: string;
  

  render() {
    return (
      <section class={`${this.appearance}`}>
        <slot/>
    </section>
    );
  }

}
