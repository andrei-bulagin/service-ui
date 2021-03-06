export const START_LAUNCH = 'start_launch';
export const FINISH_LAUNCH = 'finish_launch';
export const DELETE_LAUNCH = 'delete_launch';
export const POST_ISSUE = 'post_issue';
export const LINK_ISSUE = 'link_issue';
export const UNLINK_ISSUE = 'unlink_issue';
export const CREATE_USER = 'create_user';
export const CREATE_DASHBOARD = 'create_dashboard';
export const UPDATE_DASHBOARD = 'update_dashboard';
export const DELETE_DASHBOARD = 'delete_dashboard';
export const CREATE_WIDGET = 'create_widget';
export const UPDATE_WIDGET = 'update_widget';
export const DELETE_WIDGET = 'delete_widget';
export const CREATE_FILTER = 'create_filter';
export const UPDATE_FILTER = 'update_filter';
export const DELETE_FILTER = 'delete_filter';
export const CREATE_BTS = 'create_bts';
export const UPDATE_BTS = 'update_bts';
export const DELETE_BTS = 'delete_bts';
export const UPDATE_PROJECT = 'update_project';
export const UPDATE_ANALYZER = 'update_analyzer';
export const GENERATE_INDEX = 'generate_index';
export const DELETE_INDEX = 'delete_index';
export const UPDATE_DEFECT = 'update_defect';
export const DELETE_DEFECT = 'delete_defect';
export const START_IMPORT = 'start_import';
export const FINISH_IMPORT = 'finish_import';

// grouped actions
export const ACTIONS_WITH_ISSUES = 'issues_actions';
export const ACTIONS_WITH_DASHBOARDS = 'dashboards_actions';
export const ACTIONS_WITH_WIDGETS = 'widgets_actions';
export const ACTIONS_WITH_FILTERS = 'filters_actions';
export const ACTIONS_WITH_BTS = 'bts_actions';
export const ACTIONS_WITH_AA_SETTINGS = 'aa_settings_actions';
export const ACTIONS_WITH_DEFECTS = 'defects_actions';
export const ACTIONS_WITH_IMPORT = 'import_actions';

export const GROUP_TO_ACTION_MAP = {
  [ACTIONS_WITH_ISSUES]: [POST_ISSUE, LINK_ISSUE, UNLINK_ISSUE],
  [ACTIONS_WITH_DASHBOARDS]: [CREATE_DASHBOARD, UPDATE_DASHBOARD, DELETE_DASHBOARD],
  [ACTIONS_WITH_WIDGETS]: [CREATE_WIDGET, UPDATE_WIDGET, DELETE_WIDGET],
  [ACTIONS_WITH_FILTERS]: [CREATE_FILTER, UPDATE_FILTER, DELETE_FILTER],
  [ACTIONS_WITH_BTS]: [CREATE_BTS, UPDATE_BTS, DELETE_BTS],
  [ACTIONS_WITH_AA_SETTINGS]: [UPDATE_ANALYZER, GENERATE_INDEX, DELETE_INDEX],
  [ACTIONS_WITH_DEFECTS]: [UPDATE_DEFECT, DELETE_DEFECT],
  [ACTIONS_WITH_IMPORT]: [START_IMPORT, FINISH_IMPORT],
};

export const ACTION_TO_GROUP_MAP = {
  [POST_ISSUE]: ACTIONS_WITH_ISSUES,
  [LINK_ISSUE]: ACTIONS_WITH_ISSUES,
  [UNLINK_ISSUE]: ACTIONS_WITH_ISSUES,

  [CREATE_DASHBOARD]: ACTIONS_WITH_DASHBOARDS,
  [UPDATE_DASHBOARD]: ACTIONS_WITH_DASHBOARDS,
  [DELETE_DASHBOARD]: ACTIONS_WITH_DASHBOARDS,

  [CREATE_WIDGET]: ACTIONS_WITH_WIDGETS,
  [UPDATE_WIDGET]: ACTIONS_WITH_WIDGETS,
  [DELETE_WIDGET]: ACTIONS_WITH_WIDGETS,

  [CREATE_FILTER]: ACTIONS_WITH_FILTERS,
  [UPDATE_FILTER]: ACTIONS_WITH_FILTERS,
  [DELETE_FILTER]: ACTIONS_WITH_FILTERS,

  [CREATE_BTS]: ACTIONS_WITH_BTS,
  [UPDATE_BTS]: ACTIONS_WITH_BTS,
  [DELETE_BTS]: ACTIONS_WITH_BTS,

  [UPDATE_ANALYZER]: ACTIONS_WITH_AA_SETTINGS,
  [GENERATE_INDEX]: ACTIONS_WITH_AA_SETTINGS,
  [DELETE_INDEX]: ACTIONS_WITH_AA_SETTINGS,

  [UPDATE_DEFECT]: ACTIONS_WITH_DEFECTS,
  [DELETE_DEFECT]: ACTIONS_WITH_DEFECTS,

  [START_IMPORT]: ACTIONS_WITH_IMPORT,
  [FINISH_IMPORT]: ACTIONS_WITH_IMPORT,
};
