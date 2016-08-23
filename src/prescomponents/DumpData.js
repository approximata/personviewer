import React, { PropTypes } from 'react';

const DumpData = ({ datadump }) => (
  <div className="datadump" name="listed">
    {JSON.stringify(datadump)}
  </div>
);

DumpData.propTypes = {
  datadump: PropTypes.array.isRequired,
};

export default DumpData;
