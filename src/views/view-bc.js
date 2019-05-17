import { LitElement, html } from 'lit-element';
import './view-b';
import './view-c';

// Extend the LitElement base class
class ViewBC extends LitElement {
  render(){
    return html`
      <!-- template content -->
      <view-b></view-b>
      <view-c></view-c>
    `;
  }
}
// Register the new element with the browser.
customElements.define('view-bc', ViewBC);
