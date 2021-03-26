import { Component,h, Prop, Element, Method} from '@stencil/core';

@Component({
  tag: 'kron-header',
  styleUrl: 'kron-header.css',
  //shadow: true,
})

export class KronHeader {
  
  @Element() header : HTMLElement;

  @Prop() titles : string; 

  @Prop() content : string;

  @Method()

  async opent(){
    this.header.style.textAlign = "center";
  }

  render() {
    return (
      <div>
      <h1>{this.titles}</h1>
      <p>{this.content}</p>
      </div>
    );
  }

}
