import React from 'react';

export default function Highlight({
  children,
  keys
}: {
  children: React.ReactNode;
  keys: string[];
}) {
  const string = React.Children.toArray(children).join('');
  const reg = new RegExp(keys.join('|'), 'g');
  const token = string.replace(reg, '#@$&#');
  const elements = token.split('#').map((x, index) =>
    index % 2 === 0 ? (
      x
    ) : (
      <mark key={index} className="highlight">
        {x[0] === '@' ? x.slice(1) : x}
      </mark>
    )
  );

  return <>{elements}</>;
}
