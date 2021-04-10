import { Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'kron-navbar',
  styleUrl: 'kron-navbar.css',
  shadow: true,
})
export class KronNavbar {
  @Prop() ultag: string;
  @Prop() kronlayout:string;

  render() {
    return (
     <ul class={`${this.ultag} " "${this.kronlayout}`}> 

      <slot>
      
        </slot>
        </ul>
     
    );
  }

}
