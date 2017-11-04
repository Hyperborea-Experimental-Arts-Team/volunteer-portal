/**
 * Higher order component that returns am expandable version
 * of a component, keyed to a particular table Id
 *
 * @author mtownsend
 * @since Nov 2017
 */
import { connect } from 'react-redux';
import { toggleRow } from '../actions/table';

const mapStateToProps = (tableId, state) => {
  return {
    expandedRows: state.table[tableId] || new Set()
  };
};

const mapDispatchToProps = (tableId, dispatch) => ({
  toggleRow: key => dispatch(toggleRow(tableId, key))
});

export default (tableId, component) => connect(mapStateToProps.bind(null, tableId), mapDispatchToProps.bind(null, tableId))(component);