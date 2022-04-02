import { storiesOf } from '@storybook/twig';
import Button from '../templates/components/button/button.html.twig';

storiesOf('Button', module)
  .add('Primary', () =>
    Button({
      type: 'button',
      label: 'Primary button',
    })
  )
  .add('Secondary', () =>
    Button({
      type: 'button',
      label: 'Secondary button',
    })
  );
