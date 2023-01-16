import React, { useEffect } from 'react';

import SearchPgaeContent from '../../components/common/Search/Content';

const SearchPgae = () => {
  useEffect(() => {
    document.title = "Search";
  }, []);

  return <SearchPgaeContent />;
};

export default SearchPgae;
