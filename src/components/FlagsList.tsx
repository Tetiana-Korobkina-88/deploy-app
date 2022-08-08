import { ReactElement } from 'react';

import '../App';
import FlagSwitch from './FlagSwitch';

interface FeatureFlags {
  [key: string]: boolean;
}

export interface FlagsListProps {
  featureFlags: FeatureFlags;
}

const FlagsList = ({ featureFlags }: FlagsListProps): ReactElement => (
  <table>
    <thead>
      <tr>
        <th>Flag name</th>
        <th>Turn flag on/off</th>
      </tr>
    </thead>
    <tbody>
      {Object.entries(featureFlags).map((featureFlags) => (
        <tr>
          <td>{featureFlags[0]}</td>
          <td>
            <FlagSwitch checked={featureFlags[1]} />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default FlagsList;
