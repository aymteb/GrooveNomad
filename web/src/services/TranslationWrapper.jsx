import React from 'react';

const TranslationWrapper = ({ children, translate = true, ...props }) => {
  if (!translate) {
    return <span {...props}>{children}</span>;
  }

  return (
    <span
      {...props}
      translate="yes"
      className={`translatable ${props.className || ''}`}
    >
      {children}
    </span>
  );
};

export default TranslationWrapper;
