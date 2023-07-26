import { DefaultTheme, JSX, PageEvent, Reflection } from 'typedoc';
import { ThemeContext } from './ThemeContext';

export class Sonicware extends DefaultTheme {
  override getRenderContext(pageEvent: PageEvent<Reflection>): ThemeContext {
    return new ThemeContext(this, pageEvent, this.application.options);
  }
}