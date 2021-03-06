/* eslint max-len: 0 */
import React from 'react';
import SortTable from './sort-table';
import DefaultSortTable from './default-sort-table';
import CustomSortTable from './custom-sort-table';
import CustomSortWithExtraDataTable from './custom-sort-with-extra-data-table';
import ReusableCustomSortTable from './reusable-custom-sort-table';
import SortHookTable from './sort-hook-table';
import DisableSortIndicatorTable from './disable-sort-indicator-table';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Table Sort Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/sort/sort-table.js</h5>
              <SortTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Default Table Sort Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/sort/default-sort-table.js</h5>
              <DefaultSortTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Customize Table Sort Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/sort/custom-sort-table.js</h5>
              <CustomSortTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Customize Table Sort With Extra Data Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/sort/custom-sort-with-extra-data-table.js</h5>
              <CustomSortWithExtraDataTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Reusable Customize Table Sort Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/sort/reusable-custom-sort-table.js</h5>
              <ReusableCustomSortTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Sort Hooks(onSortChange) Example</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/sort/sort-hook-table.js</h5>
              <SortHookTable />
            </div>
          </div>
        </div>
        <div className='col-md-offset-1 col-md-8'>
          <div className='panel panel-default'>
            <div className='panel-heading'>Disable sort indicator</div>
            <div className='panel-body'>
              <h5>Source in /examples/js/sort/disable-sort-indicator-table.js</h5>
              <DisableSortIndicatorTable />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;
