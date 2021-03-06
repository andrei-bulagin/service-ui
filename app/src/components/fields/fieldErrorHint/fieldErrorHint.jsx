import { cloneElement, PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl, intlShape, defineMessages } from 'react-intl';
import styles from './fieldErrorHint.scss';

const cx = classNames.bind(styles);

const messages = defineMessages({
  loginHint: {
    id: 'RegistrationForm.loginHint',
    defaultMessage:
      'Login should have size from 1 to 128 symbols, latin, numeric characters, hyphen, underscore, dot.',
  },
  nameHint: {
    id: 'RegistrationForm.nameHint',
    defaultMessage:
      'Full name should have size from 3 to 256 symbols, latin, cyrillic, numeric characters, hyphen, underscore, dot, space.',
  },
  passwordHint: {
    id: 'RegistrationForm.passwordHint',
    defaultMessage: 'Password should have size from 4 to 25 symbols.',
  },
  emailHint: {
    id: 'Common.validation.email',
    defaultMessage: 'Email is incorrect. Please enter correct email.',
  },
  confirmPasswordHint: {
    id: 'RegistrationForm.confirmPasswordHint',
    defaultMessage: 'Passwords do not match.',
  },
  filterNameError: {
    id: 'FiltersPage.filterNameLength',
    defaultMessage: 'Filter name length should have size from 3 to 128 characters.',
  },
  launchNameHint: {
    id: '  LaunchMergeModal.launchNameHint',
    defaultMessage: 'Launch name should have size from 3 to 256.',
  },
  launchDescriptionHint: {
    id: '  LaunchMergeModal.launchDescriptionHint',
    defaultMessage: 'Description should have size not more than 1024 symbols.',
  },
  dashboardNameHint: {
    id: 'AddEditDashboard.dashboardNameHint',
    defaultMessage: 'Dashboard name should have size  from 3 to 128.',
  },
  dashboardNameSearchHint: {
    id: 'SearchDashboardForm.dashboardNameSearchHint',
    defaultMessage: 'Dashboard name should have size from 3 to 128',
  },
  minShouldMatchHint: {
    id: 'AccuracyFormBlock.minShouldMatchHint',
    defaultMessage: 'The parameter should have value from 50 to 100',
  },
  minDocFreqHint: {
    id: 'AccuracyFormBlock.minDocFreqHint',
    defaultMessage: 'The parameter should have value from 1 to 10',
  },
  minTermFreqHint: {
    id: 'AccuracyFormBlock.minTermFreqHint',
    defaultMessage: 'The parameter should have value from 1 to 10',
  },
  widgetNameHint: {
    id: 'SearchDashboardForm.widgetNameHint',
    defaultMessage: 'Widget name should have size from 3 to 128',
  },
  profilePassword: {
    id: 'ChangePasswordModal.profilePassword',
    defaultMessage: 'Password should have size from 4 to 25 symbols',
  },
  profileConfirmPassword: {
    id: 'ChangePasswordModal.profileConfirmPassword',
    defaultMessage: 'Passwords do not match',
  },
  profileUserName: {
    id: 'ChangePasswordModal.profileUserName',
    defaultMessage:
      'Full name should have size from 3 to 256 symbols, latin, cyrillic, numeric characters, hyphen, underscore, dot, space.',
  },
  profileEmail: {
    id: 'ChangePasswordModal.profileEmail',
    defaultMessage: 'Email is incorrect.',
  },
  itemNameEntityHint: {
    id: 'LaunchLevelEntities.itemNameEntityHint',
    defaultMessage: 'At least 3 symbols required',
  },
  launchNumericEntityHint: {
    id: 'LaunchLevelEntities.launchNumberEntityHint',
    defaultMessage: 'This filter accepts only digits',
  },
  launchDescriptionEntityHint: {
    id: 'LaunchLevelEntities.launchDescriptionEntityHint',
    defaultMessage: 'At least 3 symbols required',
  },
  demoDataPostfixHint: {
    id: 'DemoDataTabForm.demoDataPostfixHint',
    defaultMessage: 'Postfix should have size from 1 to 90',
  },
  recipientsHint: {
    id: 'emailCase.recipientsHint',
    defaultMessage: 'Select at least one recipient or set up “OFF” e-mail notifications',
  },
  tagsHint: {
    id: 'emailCase.tagsHint',
    defaultMessage: 'Tag name should have size from 3 to 256',
  },
  launchesHint: {
    id: 'emailCase.launchesHint',
    defaultMessage: 'Launch name should have size from 3 to 256',
  },
  urlHint: {
    id: 'LinkIssueModal.urlHint',
    defaultMessage: 'Link should match a valid website address',
  },
  issueIdHint: {
    id: 'LinkIssueModal.issueIdHint',
    defaultMessage: 'Issue ID should have size from 1 to 128',
  },
  requiredFieldHint: {
    id: 'Common.requiredFieldHint',
    defaultMessage: 'This field is required',
  },
  portFieldHint: {
    id: 'EmailServerTab.portFieldHint',
    defaultMessage: "Only numbers from '1' to '65535' are possible.",
  },
});

@injectIntl
export class FieldErrorHint extends PureComponent {
  static propTypes = {
    hintType: PropTypes.string,
    children: PropTypes.node,
    intl: intlShape,
    error: PropTypes.string,
    active: PropTypes.bool,
  };
  static defaultProps = {
    intl: {},
    hintType: 'bottom',
    children: null,
    error: '',
    active: false,
  };
  render() {
    const { hintType, children, intl, error, active, ...rest } = this.props;
    const classes = cx('field-error-hint', {
      show: error && active,
      'bottom-type': hintType === 'bottom',
      'top-type': hintType === 'top',
    });

    return (
      <div className={classes}>
        {children && cloneElement(children, { error, active, ...rest })}
        <div className={cx('hint')}>
          <div className={cx('hint-content')}>
            {error && messages[error] ? intl.formatMessage(messages[error]) : error}
          </div>
        </div>
      </div>
    );
  }
}
