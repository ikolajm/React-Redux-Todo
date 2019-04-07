import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import { VISIBILITY_FILTERS } from "../Filters";

const VisibilityFilters = ({ setFilter }) => {
  return (
    <div className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <span style={{paddingLeft: "5px", paddingRight: "5px", cursor: "pointer"}}
            key={`visibility-${currentFilter}`}
            onClick={() => {
              setFilter(currentFilter);
            }}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return { activeFilter: state.visibilityFilter };
};

export default connect(
  mapStateToProps,
  { setFilter }
)(VisibilityFilters);
