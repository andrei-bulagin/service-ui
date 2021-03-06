/*
 * Copyright 2017 EPAM Systems
 *
 *
 * This file is part of EPAM Report Portal.
 * https://github.com/reportportal/service-ui
 *
 * Report Portal is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Report Portal is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Report Portal.  If not, see <http://www.gnu.org/licenses/>.
 */

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { host } from 'storybook-host';
import { withReadme } from 'storybook-readme';
import { Grid } from './grid';
import { ALIGN_CENTER } from './constants';
import README from './README.md';

const COLUMNS = [
  {
    id: 'name',
    title: { full: 'name' },
    formatter: ({ name }) => name,
  },
  {
    id: 'total',
    title: { full: 'total' },
    align: ALIGN_CENTER,
    formatter: ({ total }) => total,
    sortable: true,
    withFilter: true,
  },
  {
    id: 'passed',
    title: { full: 'passed' },
    align: ALIGN_CENTER,
    formatter: ({ passed }) => passed,
    sortable: true,
    withFilter: true,
  },
  {
    id: 'failed',
    title: { full: 'failed' },
    align: ALIGN_CENTER,
    formatter: ({ failed }) => failed,
  },
  {
    id: 'skipped',
    title: { full: 'skipped' },
    align: ALIGN_CENTER,
    formatter: ({ skipped }) => skipped,
  },
];

const DATA = [
  {
    id: 'id1',
    name: 'foo 1',
    description: 'some description',
    total: 100,
    passed: 70,
    failed: 25,
    skipped: 5,
  },
  {
    id: 'id2',
    name: 'foo 2',
    description: 'another description',
    total: 10,
    passed: 7,
    failed: 2,
    skipped: 1,
  },
];

storiesOf('Components/Main/Grid', module)
  .addDecorator(
    host({
      title: 'Grid component',
      align: 'center middle',
      backdrop: 'rgba(70, 69, 71, 0.2)',
      background: '#fff',
      height: 600,
      width: '100%',
    }),
  )
  .addDecorator(withReadme(README))
  .add('default state', () => <Grid />)
  .add('with data', () => <Grid columns={COLUMNS} data={DATA} />)
  .add('with selection', () => (
    <Grid columns={COLUMNS} data={DATA} selectable selectedItems={[DATA[0]]} />
  ))
  .add('with actions', () => (
    <Grid
      columns={COLUMNS}
      data={DATA}
      selectedItems={[DATA[0]]}
      sortingColumn="total"
      sortingDirection="asc"
      selectable
      onChangeSorting={action('changeSorting')}
      onFilterClick={action('filterClick')}
      onToggleSelectAll={action('toggleSelectAll')}
      onToggleSelection={action('toggleSelection')}
    />
  ));
