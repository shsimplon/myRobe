import React from 'react';

import {
  Frame1,
  Image,
  SearchBarre,
  SearchIcon,
  Search,
  Rechercher,
} from './search.style';

const SideSearch = () => {
  return (
    <div className="sideSearch">
      <Frame1>
        <Image
          alt=""
          src="https://static.overlay-tech.com/assets/b4b9a8fe-fd9b-40d5-b701-5228498427f1.png"
        />
      </Frame1>
      <SearchBarre>
        <SearchIcon>
          <Search
            alt=""
            src="https://static.overlay-tech.com/assets/0274aa52-1acf-444b-8290-0421f58b33ee.svg"
          />
          <Rechercher>Rechercher...</Rechercher>
        </SearchIcon>
      </SearchBarre>
    </div>
  );
};

export default SideSearch;
