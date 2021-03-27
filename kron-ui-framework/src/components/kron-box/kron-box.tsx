import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'kron-box',
  styleUrl: 'kron-box.css',
  shadow: true,
})
export class KronBox {

@Prop() displaymode: string;


  render() {
    return (
          
  <div class={this.displaymode}>
<slot>
  <slot>
    
  </slot>
   
</slot>
  </div>

    );
  }
}
