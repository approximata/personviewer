import React, { PropTypes } from 'react';

const DumpData = ({ datadump }) => (
  <div className="personlist" name="listed">
    {JSON.stringify(datadump)}
  </div>
);

DumpData.propTypes = {
  // datadump: PropTypes.string.isRequired,
  datadump: PropTypes.array.isRequired,
};

export default DumpData;
