import React, { Dispatch, MouseEventHandler } from 'react';
import { connect } from 'react-redux';
import { FilterType, SET_VISIBILITY_FILTER, TodoActionTypes } from './actions';
import { AppState } from './reducers';

type IFilterLinkProps = IFilterLinkStateProps &
  IFilterLinkDispatchProps &
  IFilterLinkOwnProps;

interface IFilterLinkOwnProps {
  filter: FilterType;
}

interface IFilterLinkDispatchProps {
  onClick: MouseEventHandler<any>;
}

interface IFilterLinkStateProps {
  active: boolean;
}

export function setVisibilityFilter(filter: FilterType): TodoActionTypes {
  return { type: SET_VISIBILITY_FILTER, filter };
}

const FilterLink: React.FC<IFilterLinkProps> = ({
  active,
  children,
  onClick
}) => {
  if (active) {
    return <span>{children}</span>;
  }

  const onClickLocal: ((event: React.MouseEvent) => void) | undefined = e => {
    e.preventDefault();
    onClick(e);
  };

  return (
    <button onClick={onClickLocal}>
      {children}
    </button>
  );
};

const mapStateToProps = (
  state: AppState,
  ownProps: IFilterLinkOwnProps
): IFilterLinkStateProps => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (
  dispatch: Dispatch<any>,
  ownProps: IFilterLinkOwnProps
): IFilterLinkDispatchProps => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect<
  IFilterLinkStateProps,
  IFilterLinkDispatchProps,
  IFilterLinkOwnProps,
  AppState
>(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink);
