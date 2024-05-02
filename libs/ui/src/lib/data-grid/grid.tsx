// import-conductor-skip
'use client';

import { UIColumn } from './column';
import { UIDataGridContext } from './grid.context';
import { UIRow } from './row';
import style from './grid.module.scss';
import { UIDataGridProps, UIDataGridTemplate } from './grid.props';

const checkTemplateProp = (template: UIDataGridTemplate | string) => {
  const _isNotEmptyString = typeof template == 'string' ? !!template : true;
  const _hasDefaultSMTemplate =
    typeof template !== 'string' ? !!template.sm : true;
  if (!_isNotEmptyString || !_hasDefaultSMTemplate) {
    throw new Error('Default (sm) property is required');
  }
};

const UIDataGrid = ({ children, template = '' }: UIDataGridProps) => {
  checkTemplateProp(template);
  return (
    <UIDataGridContext.Provider value={template}>
      <div className={`w-100 ${style['ui-data-grid']}`}>{children}</div>
    </UIDataGridContext.Provider>
  );
};
export { UIColumn, UIRow, UIDataGrid };
