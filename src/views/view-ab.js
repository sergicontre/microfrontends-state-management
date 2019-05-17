import { LitElement, html } from 'lit-element';
import './view-a';
import './view-b';

// Extend the LitElement base class
class ViewAB extends LitElement {
  render(){
    return html`
      <!-- template content -->
      <view-a></view-a>
      <view-b></view-b>
    `;
  }
}
// Register the new element with the browser.
customElements.define('view-ab', ViewAB);
