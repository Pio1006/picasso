import React from 'react'
import { Pagination } from '@toptal/picasso'

const PaginationDisabledExample = () => (
  <div>
    <Pagination
      activePage={4}
      disabled
      onPageChange={handlePageChange}
      totalPages={10}
    />
  </div>
)

const handlePageChange = () => {}

export default PaginationDisabledExample