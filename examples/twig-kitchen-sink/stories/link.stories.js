import { storiesOf } from '@storybook/twig';
import Link from '../templates/components/links/link.html.twig';

storiesOf('Link', module).add('Default', () =>
  Link({
    link: '#',
    text: 'My link',
  })
);
