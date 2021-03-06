import React, { Component } from 'react';
import track from 'react-tracking';
import { NavLink } from 'redux-first-router-link';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { InputDropdown } from 'components/inputs/inputDropdown';
import styles from './navigationTabs.scss';

const cx = classNames.bind(styles);

@track()
export class NavigationTabs extends Component {
  static propTypes = {
    onChangeTab: PropTypes.func,
    config: PropTypes.object,
    activeTab: PropTypes.string,
    tracking: PropTypes.shape({
      trackEvent: PropTypes.func,
      getTrackingData: PropTypes.func,
    }).isRequired,
    mobileDisabled: PropTypes.bool,
  };
  static defaultProps = {
    onChangeTab: () => {},
    config: {},
    activeTab: '',
    mobileDisabled: false,
  };

  onChangeTab = (val) => {
    this.props.onChangeTab(this.props.config[val].link);
  };

  generateOptions = () =>
    Object.keys(this.props.config).map((item) => ({
      label: (
        <NavLink
          to={this.props.config[item].link}
          className={cx('link')}
          onClick={() => {
            this.props.tracking.trackEvent(this.props.config[item].eventInfo);
          }}
        >
          {this.props.config[item].name}
        </NavLink>
      ),
      value: item,
    }));

  render = () => {
    const { config, activeTab, mobileDisabled } = this.props;
    return (
      <div className={cx('navigation-tabs')}>
        <div className={cx('tabs-mobile')}>
          <InputDropdown
            options={this.generateOptions()}
            value={activeTab}
            onChange={this.onChangeTab}
          />
        </div>
        <div className={cx('tabs-wrapper')}>
          {config &&
            Object.keys(config).map((item) => (
              <NavLink
                key={item}
                className={cx('tab')}
                to={config[item].link}
                activeClassName={cx('active')}
                onClick={() => {
                  this.props.tracking.trackEvent(this.props.config[item].eventInfo);
                }}
              >
                {config[item].name}
              </NavLink>
            ))}
        </div>
        <div className={cx('content-wrapper')}>
          {activeTab && config[activeTab].component}
          {mobileDisabled && <div className={cx('mobile-disabling-cover')} />}
        </div>
      </div>
    );
  };
}
