import { LitElement, html } from 'lit-element';
import './view-a';
import './view-c';

// Extend the LitElement base class
class ViewAC extends LitElement {
  render(){
    return html`
      <!-- template content -->
      <view-a></view-a>
      <view-c></view-c>
    `;
  }
}
// Register the new element with the browser.
customElements.define('view-ac', ViewAC);
