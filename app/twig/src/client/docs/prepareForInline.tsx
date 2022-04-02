import React from 'react';
import { PartialStoryFn } from '@storybook/csf';

export function prepareForInline(storyFn: PartialStoryFn<any>) {
  const twig = storyFn();
  if (typeof twig === 'string') {
    // eslint-disable-next-line react/no-danger
    return <div dangerouslySetInnerHTML={{ __html: twig }} />;
  }
  return (
    <div ref={(node?: HTMLDivElement): never | null => (node ? node.appendChild(twig) : null)} />
  );
}
