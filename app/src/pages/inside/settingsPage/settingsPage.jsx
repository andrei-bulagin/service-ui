import React from 'react';
import track from 'react-tracking';
import { FormattedMessage } from 'react-intl';
import { PageLayout } from 'layouts/pageLayout';
import { SETTINGS_PAGE } from 'components/main/analytics/events';
import { SettingsTabs } from './settingsTabs';

export const SettingsPage = track({ page: SETTINGS_PAGE })(() => (
  <PageLayout title={<FormattedMessage id={'SettingsPage.title'} defaultMessage={'Settings'} />}>
    <SettingsTabs />
  </PageLayout>
));
