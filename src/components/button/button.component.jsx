import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from './button.styles';

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
};

const Button = ({ children, buttonType, ...otherProps }) => {
  if (buttonType === BUTTON_TYPE_CLASSES.google) {
    return <GoogleSignInButton {...otherProps}>{children}</GoogleSignInButton>;
  }

  if (buttonType === BUTTON_TYPE_CLASSES.inverted) {
    return <InvertedButton {...otherProps}>{children}</InvertedButton>;
  }

  return <BaseButton {...otherProps}>{children}</BaseButton>;
};

export default Button;
