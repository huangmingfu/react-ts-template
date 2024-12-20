import React, { memo } from 'react';

import classnames from 'classnames';

import './index.scss';

function Highlight({
  children,
  keys,
  color = '#FFDA00',
  className,
}: {
  children: React.ReactNode;
  keys: string[];
  color?: string;
  className?: string;
}) {
  const string = React.Children.toArray(children).join('');
  const reg = new RegExp(keys.join('|'), 'g');
  const token = string.replace(reg, '#@$&#');
  const elements = token.split('#').map((x, index) =>
    index % 2 === 0 ? (
      x
    ) : (
      <mark key={index} className={classnames('highlight', className)} style={{ color }}>
        {x[0] === '@' ? x.slice(1) : x}
      </mark>
    ),
  );

  return <>{elements}</>;
}

export default memo(Highlight);
