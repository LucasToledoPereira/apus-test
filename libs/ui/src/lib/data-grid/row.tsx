import React, { useContext } from 'react';
import styles from './grid.module.scss';
import { UIDataGridContext } from './grid.context';
import classNames from 'classnames';
import { UIRowProps } from './grid.props';

const UIRow = ({ children, onClick, className }: UIRowProps) => {
  const _template = useContext(UIDataGridContext);
  const _isString = typeof _template === 'string';
  const _cssStyle = {
    '--ui-data-grid-row-template': _isString ? _template : _template.sm,
    '--ui-data-grid-row-template-md': _isString
      ? _template
      : _template.md || _template.sm,
    '--ui-data-grid-row-template-lg': _isString
      ? _template
      : _template.lg || _template.sm,
    '--ui-data-grid-row-template-xl': _isString
      ? _template
      : _template.xl || _template.sm,
  } as React.CSSProperties;
  const _cssClass = classNames(
    styles['ui-data-grid__row'],
    onClick ? styles['ui-data-grid__row--clickable'] : '',
    className
  );

  return (
    <div
      className={_cssClass}
      style={_cssStyle}
      onClick={() => onClick && onClick()}
    >
      {children}
    </div>
  );
};

export { UIRow };
